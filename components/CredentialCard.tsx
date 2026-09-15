import Link from "next/link";
import { CopyButton } from "./CopyButton";
import { StatusMark } from "./StatusMark";
import { cta, registration, site } from "@/content/site";

const facts = [
  { label: "Business type", value: registration.businessType },
  { label: "Headquarters", value: registration.headquarters },
  { label: "Service area", value: registration.serviceArea },
];

/**
 * Registration credential panel. Reads as a specification sheet: hard edges,
 * hairline divisions, identifiers set large and tracked for transcription.
 *
 * Every value on it is a registered fact. It implies no awards, past
 * performance, or socioeconomic certifications, because there are none yet.
 */
export function CredentialCard() {
  return (
    <section aria-label="Federal registration" className="border border-obsidian/45">
      <header className="flex flex-col gap-4 border-b rule px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <h2 className="heading text-xl uppercase tracking-[0.08em] sm:text-2xl">
          {registration.legalName}
        </h2>
        <StatusMark />
      </header>

      <dl className="grid sm:grid-cols-2">
        {[
          { label: "UEI", value: registration.uei },
          { label: "CAGE", value: registration.cage },
        ].map((field, index) => (
          <div
            key={field.label}
            className={`flex items-end justify-between gap-4 border-b rule px-6 py-7 sm:px-8 ${
              index === 0 ? "sm:border-r" : ""
            }`}
          >
            <div>
              <dt className="label text-stone-ink">{field.label}</dt>
              <dd className="code mt-3 text-2xl sm:text-3xl">{field.value}</dd>
            </div>
            <CopyButton value={field.value} label={field.label} />
          </div>
        ))}
      </dl>

      <dl className="grid sm:grid-cols-3">
        {facts.map((field, index) => (
          <div
            key={field.label}
            className={`border-b rule px-6 py-6 sm:px-8 ${
              index < facts.length - 1 ? "sm:border-r" : ""
            }`}
          >
            <dt className="label text-stone-ink">{field.label}</dt>
            <dd className="mt-3 text-obsidian">{field.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:px-8">
        <a
          href={cta.capabilities.href}
          download
          className="label inline-flex min-h-12 items-center justify-center bg-obsidian px-8 py-4 text-bone transition-colors duration-200 hover:bg-evergreen"
        >
          Download capability statement
        </a>
        <Link
          href={cta.requirement.href}
          className="label inline-flex min-h-12 items-center justify-center border border-obsidian px-8 py-4 text-obsidian transition-colors duration-200 hover:bg-obsidian hover:text-bone"
        >
          {cta.requirement.label}
        </Link>
      </div>

      <div className="flex flex-col gap-3 border-t rule px-6 py-5 text-sm text-obsidian/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          Purpose of registration: {registration.purpose}. Expires{" "}
          {registration.expires}. Point of contact: {site.contactName},{" "}
          {site.contactTitle}.
        </p>
        <a
          href={registration.verifyUrl}
          target="_blank"
          rel="noreferrer"
          className="label shrink-0 text-obsidian underline underline-offset-4 transition-colors hover:text-evergreen"
        >
          Verify on SAM.gov
        </a>
      </div>
    </section>
  );
}
