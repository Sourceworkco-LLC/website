import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { SnapshotTable } from "@/components/SnapshotTable";
import { ClosingCTA } from "@/components/ClosingCTA";
import { vehicles, site } from "@/content/site";

const description =
  "Sourcework LLC company snapshot, registrations, capability statement, and how to engage on RFQs, RFPs, simplified acquisitions, and subcontracting.";

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
        title="Company snapshot."
        intro="The registration detail a contracting officer needs before a solicitation goes out, in one place."
      />

      <Section label="Registrations">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <SectionLabel>Registrations</SectionLabel>
            <div className="mt-8">
              <SnapshotTable />
            </div>
          </div>

          <div className="md:col-span-4">
            <SectionLabel>Capability Statement</SectionLabel>
            <p className="mt-6 text-obsidian/80">
              A one-page capability statement covering core competencies,
              differentiators, past performance, and company data.
            </p>
            <a
              href="/capability-statement.pdf"
              className="label mt-8 inline-flex min-h-12 items-center bg-obsidian px-8 py-4 text-bone transition-colors duration-200 hover:bg-evergreen"
              download
            >
              Download PDF
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-evergreen text-bone" label="How to engage">
        <SectionLabel tone="dark">How To Engage</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          Contract vehicles and inquiries.
        </h2>

        <div className="mt-16 grid gap-px border-t rule-on-dark sm:grid-cols-2">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.title}
              className="border-b rule-on-dark py-8 sm:even:border-l sm:even:pl-8 sm:odd:pr-8"
            >
              <h3 className="heading text-xl">{vehicle.title}</h3>
              <p className="mt-4 text-sm text-bone/75">{vehicle.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-bone/75">
          Send solicitations, line items, and teaming inquiries to{" "}
          <a
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 transition-colors hover:text-bone"
          >
            {site.email}
          </a>
          .
        </p>
      </Section>

      <ClosingCTA
        heading="Have a requirement out for quote?"
        body="Send the solicitation number or the line items. You will get a direct answer on fit, timeline, and pricing approach."
        action="Send a requirement"
      />
    </>
  );
}
