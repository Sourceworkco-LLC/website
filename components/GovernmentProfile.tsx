import { Container } from "./Container";
import { ActionLink } from "./ActionLink";
import { CopyButton } from "./CopyButton";
import { cta, registration, site } from "@/content/site";

const rows = [
  { label: "SAM.gov", value: "Active", active: true },
  { label: "CAGE", value: registration.cage, copy: true },
  { label: "UEI", value: registration.uei, copy: true },
  { label: "Business type", value: registration.businessType },
  { label: "Headquarters", value: registration.headquarters },
  { label: "Service area", value: registration.serviceArea },
  { label: "Primary NAICS", value: "Not yet published", pending: true },
];

/**
 * Government profile, home page edition. The verification a contracting
 * officer needs in one glance, with the depth one click away on /government.
 */
export function GovernmentProfile() {
  return (
    <section className="bg-bone py-20 md:py-28" aria-label="Government profile">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="label text-stone-ink">Sourcework / Government</p>
            <h2 className="heading mt-5 text-[clamp(1.875rem,4vw,2.75rem)]">
              Ready for federal procurement.
            </h2>
            <p className="measure mt-6 text-obsidian/80">
              Registered, verifiable, and quoting. Codes, process, and the
              capability statement are on the government page.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={cta.reference.href}>{cta.reference.label}</ActionLink>
              <ActionLink href={cta.capabilities.href} variant="outline" download>
                {cta.capabilities.label}
              </ActionLink>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border border-obsidian/45">
              <p className="heading border-b rule px-6 py-5 text-lg uppercase tracking-[0.08em]">
                {site.legalName}
              </p>
              <dl className="grid sm:grid-cols-2">
                {rows.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between gap-4 border-b rule px-6 py-4 ${
                      index % 2 === 0 ? "sm:border-r" : ""
                    } ${index === rows.length - 1 ? "sm:col-span-2 sm:border-r-0 border-b-0" : ""}`}
                  >
                    <div>
                      <dt className="label text-stone-ink">{row.label}</dt>
                      <dd
                        className={`mt-2 ${
                          row.pending
                            ? "text-obsidian/45"
                            : row.active
                              ? "label text-active"
                              : row.copy
                                ? "code text-lg"
                                : "text-obsidian"
                        }`}
                      >
                        {row.active ? (
                          <span className="inline-flex items-center gap-2">
                            <span aria-hidden="true" className="block h-2 w-2 bg-active" />
                            {row.value}
                          </span>
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                    {row.copy ? <CopyButton value={row.value} label={row.label} /> : null}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
