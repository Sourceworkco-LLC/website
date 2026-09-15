"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { uploadLimit, type FormGroup } from "@/content/forms";

type State = "idle" | "sending" | "sent" | "error";

const control =
  "mt-2 w-full border border-obsidian/45 bg-transparent px-4 py-3 text-base text-obsidian " +
  "placeholder:text-stone-ink focus:border-obsidian focus:outline-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-obsidian";

/**
 * Every form on the site: requirement intake, supplier registration, teaming,
 * and general contact. One schema-driven component, so all four validate,
 * submit, and fail the same way.
 *
 * Submissions post as multipart form data to /api/intake, which delivers the
 * message and any attachments by email. If delivery is not configured or
 * fails, the form surfaces a mailto fallback rather than losing the message.
 */
export function IntakeForm({
  formType,
  groups,
  submitLabel,
  successTitle = "Received.",
  successBody,
}: {
  formType: string;
  groups: FormGroup[];
  submitLabel: string;
  successTitle?: string;
  successBody: string;
}) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [mailto, setMailto] = useState(`mailto:${site.email}`);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Attachments are capped because a serverless request body is capped.
    const files = [...data.values()].filter(
      (value): value is File => value instanceof File && value.size > 0,
    );
    const total = files.reduce((sum, file) => sum + file.size, 0);

    if (files.length > uploadLimit.maxFiles) {
      setState("error");
      setMessage(`Attach up to ${uploadLimit.maxFiles} files. Email anything larger.`);
      return;
    }

    if (total > uploadLimit.maxTotalBytes) {
      setState("error");
      setMessage(
        `Attachments total ${(total / 1024 / 1024).toFixed(1)} MB, over the 4 MB limit. Send the documents by email and we will match them to this submission.`,
      );
      return;
    }

    // Prepared up front so it is ready if delivery is unavailable.
    const summary = [...data.entries()]
      .filter(([, value]) => typeof value === "string" && value.trim())
      .map(([key, value]) => `${key}: ${value as string}`)
      .join("\n");
    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(
        `Sourcework ${formType}`,
      )}&body=${encodeURIComponent(summary)}`,
    );

    data.set("formType", formType);
    data.set("pageUrl", window.location.href);

    setState("sending");

    try {
      const response = await fetch("/api/intake", { method: "POST", body: data });
      const result = (await response.json()) as { ok?: boolean; reason?: string };

      if (result.ok) {
        setState("sent");
        form.reset();
        return;
      }

      setState("error");
      setMessage(
        result.reason === "invalid"
          ? "Add an email address and either a description or an attached document."
          : "Delivery is unavailable right now.",
      );
    } catch {
      setState("error");
      setMessage("Delivery is unavailable right now.");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-obsidian/45 p-8" role="status" aria-live="polite">
        <h2 className="heading text-2xl">{successTitle}</h2>
        <p className="measure mt-4 text-obsidian/80">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-12">
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formType}-fax`}>Fax</label>
        <input id={`${formType}-fax`} name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {groups.map((group) => (
        <fieldset key={group.legend} className="border-t rule pt-8">
          <legend className="sr-only">{group.legend}</legend>
          <p className="label text-stone-ink" aria-hidden="true">
            {group.legend}
          </p>
          {group.note ? (
            <p className="measure mt-3 text-sm text-obsidian/70">{group.note}</p>
          ) : null}

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {group.fields.map((field) => {
              const id = `${formType}-${field.name}`;
              return (
                <div
                  key={field.name}
                  className={field.half ? "sm:col-span-1" : "sm:col-span-2"}
                >
                  <label htmlFor={id} className="label text-stone-ink">
                    {field.label}
                    {field.required ? (
                      <span className="text-obsidian"> (required)</span>
                    ) : null}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={id}
                      name={field.name}
                      rows={field.rows ?? 4}
                      required={field.required}
                      className={control}
                    />
                  ) : field.type === "file" ? (
                    <input
                      id={id}
                      name={field.name}
                      type="file"
                      multiple={field.multiple}
                      accept={field.accept}
                      className={`${control} py-2.5 file:mr-4 file:border file:border-obsidian/45 file:bg-transparent file:px-4 file:py-2 file:text-[0.6875rem] file:font-medium file:uppercase file:tracking-[0.1em] file:text-obsidian`}
                    />
                  ) : (
                    <input
                      id={id}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      autoComplete={field.autoComplete}
                      className={control}
                    />
                  )}

                  {field.help ? (
                    <p className="mt-2 text-sm text-obsidian/60">{field.help}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </fieldset>
      ))}

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={state === "sending"}
          className="label inline-flex min-h-12 items-center bg-obsidian px-8 py-4 text-bone transition-colors duration-200 hover:bg-evergreen disabled:opacity-60"
        >
          {state === "sending" ? "Sending" : submitLabel}
        </button>

        {state === "error" ? (
          <p className="measure text-sm text-obsidian/80" role="alert">
            {message}{" "}
            <a href={mailto} className="underline underline-offset-4">
              Send it by email instead
            </a>
            , or write to {site.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
