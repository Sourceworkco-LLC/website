import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { CredentialCard } from "@/components/CredentialCard";
import { QuickReference } from "@/components/QuickReference";
import { ClosingCTA } from "@/components/ClosingCTA";
import { cta, engagement, registration, vehicles, site } from "@/content/site";

const description = `Sourcework LLC is an active SAM.gov registered small business. UEI ${registration.uei}, CAGE ${registration.cage}, Nashville, Tennessee, nationwide service. Capability statement, codes, and how to submit an RFQ.`;

export const metadata: Metadata = {
  title: "Government",
  description,
  alternates: { canonical: "/government" },
  openGraph: { title: `Government | ${site.name}`, description, url: "/government" },
};

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        label="Government"
        title="Registered, and ready to quote."
        intro="Everything a contracting officer needs to verify Sourcework and send us work, on one page."
      />

      <Section label="Registration">
        <CredentialCard />
      </Section>

      <Section className="border-t rule" label="Quick reference">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel>Quick reference</SectionLabel>
            <h2 className="heading mt-6 text-[clamp(1.5rem,3vw,2.25rem)]">
              Company data.
            </h2>
            <p className="measure mt-6 text-obsidian/80">
              Verified against the SAM.gov record. Anything marked not yet
              published is exactly that, and stays off this page until it is
              issued.
            </p>
            <p className="measure mt-6 text-sm text-obsidian/70">
              No socioeconomic certifications, no contract vehicles, no federal
              past performance to date. Registration is for all awards.
            </p>
            <p className="measure mt-6 text-sm text-obsidian/70">
              Solicitations are acknowledged the same business day, with a direct
              answer on whether we are quoting.
            </p>
          </div>

          <div className="md:col-span-8">
            <QuickReference />
          </div>
        </div>
      </Section>

      <Section className="bg-evergreen text-bone" label="How to engage">
        <SectionLabel tone="dark">How to engage</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          Contract vehicles and inquiries.
        </h2>

        <div className="mt-16 grid gap-px border-t rule-on-dark sm:grid-cols-2">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="border-b rule-on-dark py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
            >
              <h3 className="heading text-xl">{vehicle.title}</h3>
              <p className="mt-4 text-sm text-bone/75">{vehicle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t rule" label="From solicitation to closeout">
        <SectionLabel>From solicitation to closeout</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          How we work with agencies.
        </h2>

        <div className="mt-16 grid gap-px border-t rule sm:grid-cols-2 lg:grid-cols-5">
          {engagement.map((stage, index) => (
            <div
              key={stage.title}
              className={`border-b rule py-8 lg:border-b-0 lg:py-10 ${
                index < engagement.length - 1 ? "lg:border-r lg:pr-6" : ""
              } ${index > 0 ? "lg:pl-6" : ""}`}
            >
              <h3 className="heading text-lg">{stage.title}</h3>
              <p className="mt-4 text-sm text-obsidian/75">{stage.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCTA
        heading="Have a requirement out for quote?"
        body="Send the solicitation number or the line items. You will get a direct answer on fit, timeline, and pricing approach, and a clear no if we are not the right party."
        primary={cta.rfq}
      />
    </>
  );
}
