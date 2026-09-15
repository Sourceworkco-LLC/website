import Link from "next/link";
import { Container } from "./Container";
import { cta, registration, site } from "@/content/site";

const facts = [
  { label: "SAM.gov", value: "Active", active: true },
  { label: "CAGE", value: registration.cage, code: true },
  { label: "UEI", value: registration.uei, code: true },
  { label: "Business type", value: registration.businessType },
  { label: "HQ", value: site.location },
  { label: "Service area", value: registration.serviceArea },
];

/** Legitimacy, in one line, directly under the hero. */
export function CredentialStrip() {
  return (
    <section aria-label="Registration summary" className="border-b rule bg-bone">
      <Container>
        <div className="flex flex-col gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline gap-2.5">
                <dt className="label text-stone-ink">{fact.label}</dt>
                <dd
                  className={
                    fact.code
                      ? "code text-sm"
                      : fact.active
                        ? "label text-active"
                        : "text-sm text-obsidian"
                  }
                >
                  {fact.active ? (
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="block h-2 w-2 bg-active" />
                      {fact.value}
                    </span>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href={cta.reference.href}
            className="label shrink-0 text-obsidian underline underline-offset-4 transition-colors hover:text-evergreen"
          >
            {cta.reference.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
