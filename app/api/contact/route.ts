import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  need?: unknown;
  website?: unknown; // honeypot
};

const clean = (value: unknown, max = 5000) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

/**
 * Contact delivery.
 *
 * Sends through Resend when RESEND_API_KEY is configured. With no key the route
 * answers `{ ok: false, reason: "unconfigured" }` and the form falls back to a
 * mailto: compose window, so the site never silently swallows a message.
 */
export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Answer as though it went through.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const organization = clean(body.organization, 200);
  const email = clean(body.email, 200);
  const need = clean(body.need);

  if (!name || !looksLikeEmail(email) || !need) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ ok: false, reason: "unconfigured" }, { status: 200 });
  }

  const to = process.env.CONTACT_NOTIFY_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  const lines = [
    `Name: ${name}`,
    `Organization: ${organization || "Not provided"}`,
    `Email: ${email}`,
    "",
    "What they need sourced or solved:",
    need,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Sourcework Website <${from}>`,
        to: [to],
        reply_to: email,
        subject: `Sourcework inquiry: ${name}${organization ? ` (${organization})` : ""}`,
        text: lines,
      }),
    });

    if (!response.ok) {
      // Log the full message so nothing is lost if the provider rejects it.
      console.error("CONTACT DELIVERY FAILED", await response.text(), lines);
      return NextResponse.json({ ok: false, reason: "failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("CONTACT DELIVERY FAILED", error, lines);
    return NextResponse.json({ ok: false, reason: "failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
