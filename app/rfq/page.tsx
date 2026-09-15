import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { PipelineLine } from "@/components/Pipeline";
import { requirementForm } from "@/content/forms";
import { registration, site } from "@/content/site";

const description =
  "Send Sourcework a requirement, solicitation, or RFQ. Attach the SOW, specifications, or drawings and we will confirm fit, sourcing path, and timeline.";

export const metadata: Metadata = {
  title: "Send us a requirement",
  description,
  alternates: { canonical: "/rfq" },
  openGraph: { title: `Send us a requirement | ${site.name}`, description, url: "/rfq" },
};

export default function RfqPage() {
  return (
    <>
      <PageHero
        label="Requirement intake"
        title="Send us the solicitation."
        intro="Paste the scope or attach the documents. Everything else on this page is optional."
      />

      <Section label="Requirement intake">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <IntakeForm
              formType="requirement"
              groups={requirementForm}
              submitLabel="Send requirement"
              successTitle="Requirement received."
              successBody="You will get a reply from ryan@sourceworkco.com confirming whether we are quoting it and what we need to price it."
            />
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <SectionLabel>What happens next</SectionLabel>
            <ol className="mt-8 space-y-6 border-t rule pt-6">
              <li>
                <p className="label text-stone-ink">Same business day</p>
                <p className="mt-2 text-sm text-obsidian/80">
                  Confirmation it arrived, plus anything we need clarified.
                </p>
              </li>
              <li>
                <p className="label text-stone-ink">Fit, stated plainly</p>
                <p className="mt-2 text-sm text-obsidian/80">
                  Including no. A wasted evaluation helps nobody.
                </p>
              </li>
              <li>
                <p className="label text-stone-ink">Quote</p>
                <p className="mt-2 text-sm text-obsidian/80">
                  Priced for the buying method, complete, before the deadline.
                </p>
              </li>
            </ol>

            <div className="mt-10 border-t rule pt-6">
              <SectionLabel>Registration</SectionLabel>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="label text-stone-ink">UEI</dt>
                  <dd className="code">{registration.uei}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="label text-stone-ink">CAGE</dt>
                  <dd className="code">{registration.cage}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-obsidian/70">
                Prefer email? Send it to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline underline-offset-4 hover:text-evergreen"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-20 border-t rule pt-8">
          <PipelineLine />
        </div>
      </Section>
    </>
  );
}
