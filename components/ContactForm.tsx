"use client";

import { useState } from "react";
import { site } from "@/content/site";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full border border-obsidian/45 bg-transparent px-4 py-3 text-base text-obsidian " +
  "placeholder:text-stone-ink focus:border-obsidian focus:outline-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-obsidian";

/**
 * Contact form. Posts to /api/contact, which delivers through Resend. If the
 * server has no API key configured, or delivery fails, the form surfaces a
 * mailto: link pre-filled with what was typed rather than losing the message.
 */
export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [mailto, setMailto] = useState<string>(`mailto:${site.email}`);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Built up front so it is ready if delivery is unavailable.
    const body = [
      `Name: ${data.name ?? ""}`,
      `Organization: ${data.organization ?? ""}`,
      `Email: ${data.email ?? ""}`,
      "",
      data.need ?? "",
    ].join("\n");
    setMailto(
      `mailto:${site.email}?subject=${encodeURIComponent(
        `Sourcework inquiry: ${data.name ?? ""}`,
      )}&body=${encodeURIComponent(body)}`,
    );

    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok?: boolean };

      if (result.ok) {
        setState("sent");
        form.reset();
        return;
      }
      setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="border-t rule pt-8" role="status" aria-live="polite">
        <p className="heading text-2xl">Message sent.</p>
        <p className="measure mt-4 text-obsidian/80">
          You will hear back from {site.email} directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="border-t rule pt-8">
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label text-stone-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="organization" className="label text-stone-ink">
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={field}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="label text-stone-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="need" className="label text-stone-ink">
          What do you need sourced or solved
        </label>
        <textarea id="need" name="need" required rows={6} className={field} />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={state === "sending"}
          className="label inline-flex min-h-12 items-center bg-obsidian px-8 py-4 text-bone transition-colors duration-200 hover:bg-evergreen disabled:opacity-60"
        >
          {state === "sending" ? "Sending" : "Send message"}
        </button>

        {state === "error" ? (
          <p className="measure text-sm text-obsidian/80" role="alert">
            Delivery is unavailable right now.{" "}
            <a href={mailto} className="underline underline-offset-4">
              Send it as an email instead
            </a>
            , or write to {site.email}.
          </p>
        ) : null}
      </div>
    </form>
  );
}
