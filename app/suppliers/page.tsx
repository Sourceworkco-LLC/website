import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { supplierForm } from "@/content/forms";
import { howWeBuy, supplierCriteria, site } from "@/content/site";

const description =
  "Manufacturers, distributors, subcontractors, and specialty providers: register with Sourcework to be considered against live government requirements.";

export const metadata: Metadata = {
  title: "Become a supplier",
  description,
  alternates: { canonical: "/suppliers" },
  openGraph: { title: `Become a supplier | ${site.name}`, description, url: "/suppliers" },
};

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        label="Suppliers"
        title="Become a Sourcework supplier."
        intro="We identify government requirements and work with qualified commercial partners to fill them. Register what you sell and where you can deliver, and we will come to you when a requirement matches."
      />

      <Section label="How supplier registration works">
        <div className="grid gap-px border-t rule md:grid-cols-3">
          {supplierCriteria.map((item, index) => (
            <div
              key={item.title}
              className={`border-b rule py-8 md:border-b-0 md:py-10 ${
                index < supplierCriteria.length - 1 ? "md:border-r md:pr-8" : ""
              } ${index > 0 ? "md:pl-8" : ""}`}
            >
              <h2 className="heading text-xl">{item.title}</h2>
              <p className="mt-4 text-obsidian/80">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-evergreen text-bone" label="How we buy">
        <SectionLabel tone="dark">How we buy</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          What to expect when we ask you for a quote.
        </h2>

        <div className="mt-16 grid gap-px border-t rule-on-dark sm:grid-cols-2">
          {howWeBuy.map((item) => (
            <div
              key={item.title}
              className="border-b rule-on-dark py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
            >
              <h3 className="heading text-lg">{item.title}</h3>
              <p className="mt-4 text-sm text-bone/75">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t rule" label="Supplier registration">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel>Register</SectionLabel>
            <h2 className="heading mt-6 text-[clamp(1.5rem,3vw,2.25rem)]">
              Tell us what you supply.
            </h2>
            <p className="measure mt-6 text-obsidian/80">
              Registration is not a contract and it does not obligate either
              party. It puts your line in front of the requirements we are
              actively quoting.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <IntakeForm
              formType="supplier"
              groups={supplierForm}
              submitLabel="Register as a supplier"
              successTitle="Registration received."
              successBody="We will confirm receipt and reach out when a requirement matches what you supply."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
