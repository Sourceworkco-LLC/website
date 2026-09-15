import { NextResponse } from "next/server";
import { site } from "@/content/site";
import {
  contactForm,
  requirementForm,
  supplierForm,
  teamingForm,
  uploadLimit,
} from "@/content/forms";

export const runtime = "nodejs";

/** Human labels for the email body, taken from the form schemas. */
const labels = new Map<string, string>(
  [...requirementForm, ...supplierForm, ...teamingForm, ...contactForm]
    .flatMap((group) => group.fields)
    .map((field) => [field.name, field.label]),
);

const subjects: Record<string, string> = {
  requirement: "Requirement / RFQ",
  supplier: "Supplier registration",
  teaming: "Teaming inquiry",
  contact: "General inquiry",
};

const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Single intake endpoint for every form on the site.
 *
 * Accepts multipart form data so solicitations, statements of work, drawings,
 * and line cards arrive with the submission rather than in a follow-up email.
 * Delivers through Resend. With no API key configured the route answers
 * `unconfigured` and the form falls back to a mailto: compose window, so a
 * submission is never silently swallowed.
 */
export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  // Honeypot. Answer as though it went through.
  if (String(form.get("fax") ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const formType = String(form.get("formType") ?? "contact");
  const pageUrl = String(form.get("pageUrl") ?? "");
  const skip = new Set(["fax", "formType", "pageUrl"]);

  const fields: [string, string][] = [];
  const files: File[] = [];

  for (const [key, value] of form.entries()) {
    if (skip.has(key)) continue;

    if (value instanceof File) {
      if (value.size > 0) files.push(value);
      continue;
    }

    const text = value.trim();
    if (text) fields.push([labels.get(key) ?? key, text.slice(0, 20000)]);
  }

  const total = files.reduce((sum, file) => sum + file.size, 0);
  if (files.length > uploadLimit.maxFiles || total > uploadLimit.maxTotalBytes) {
    return NextResponse.json({ ok: false, reason: "too-large" }, { status: 413 });
  }

  const email = fields.find(([label]) => label === "Email")?.[1] ?? "";
  const hasSubstance = fields.some(
    ([label]) => label !== "Email" && label !== "Name",
  );

  // Enough to act on: a way to reply, plus a description or a document.
  if (!looksLikeEmail(email) || (!hasSubstance && files.length === 0)) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const who = fields.find(([label]) => label === "Company")?.[1]
    ?? fields.find(([label]) => label === "Agency or organization")?.[1]
    ?? fields.find(([label]) => label === "Name")?.[1]
    ?? email;

  const body = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    files.length ? `\nAttachments: ${files.map((file) => file.name).join(", ")}` : "",
    pageUrl ? `\nSubmitted from: ${pageUrl}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, reason: "unconfigured" }, { status: 200 });
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    })),
  );

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Sourcework Website <${process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"}>`,
        to: [process.env.CONTACT_NOTIFY_EMAIL || site.email],
        reply_to: email,
        subject: `${subjects[formType] ?? "Website inquiry"}: ${who}`,
        text: body,
        ...(attachments.length ? { attachments } : {}),
      }),
    });

    if (!response.ok) {
      // Log the whole submission so it is recoverable from the deploy logs.
      console.error("INTAKE DELIVERY FAILED", await response.text(), body);
      return NextResponse.json({ ok: false, reason: "failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("INTAKE DELIVERY FAILED", error, body);
    return NextResponse.json({ ok: false, reason: "failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
