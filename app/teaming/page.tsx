import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { teamingForm } from "@/content/forms";
import { registration, teamingRoles, site } from "@/content/site";

const description =
  "Teaming and subcontract inquiries. Where Sourcework contributes on a prime's scope: procurement, supplier identification, fulfillment, technology sourcing, and logistics coordination.";

export const metadata: Metadata = {
  title: "Teaming",
  description,
  alternates: { canonical: "/teaming" },
  openGraph: { title: `Teaming | ${site.name}`, description, url: "/teaming" },
};

export default function TeamingPage() {
  return (
    <>
      <PageHero
        label="Teaming"
        title="Discuss teaming."
        intro="Sourcework works as a subcontractor and teaming partner on scope a prime already holds, handling the commercial sourcing and fulfillment side of a requirement."
      />

      <Section label="Where Sourcework contributes">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel>Where we contribute</SectionLabel>
            <ul className="mt-8 border-t rule">
              {teamingRoles.map((role) => (
                <li key={role} className="border-b rule py-4 text-obsidian">
                  {role}
                </li>
              ))}
            </ul>

            <dl className="mt-10 space-y-2 text-sm">
              <div className="flex gap-3">
                <dt className="label text-stone-ink">UEI</dt>
                <dd className="code">{registration.uei}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="label text-stone-ink">CAGE</dt>
                <dd className="code">{registration.cage}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="label text-stone-ink">Business type</dt>
                <dd className="text-obsidian">{registration.businessType}</dd>
              </div>
            </dl>

            <div className="mt-10 space-y-4 border-t rule pt-6 text-sm text-obsidian/75">
              <p className="measure">
                Sourcework holds no socioeconomic certifications and claims no
                past performance. What we bring to a team is sourcing,
                requirement analysis, and execution on the commercial side of a
                scope, under a subcontract you control.
              </p>
              <p className="measure">
                We sign non-disclosure and teaming agreements before working a
                solicitation, and we will not approach your customer or your
                sources independently on a scope we are teamed on.
              </p>
              <p className="measure">
                Inquiries are acknowledged the same business day. If a deadline
                is inside 72 hours, say so in the message and it moves to the
                front.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <IntakeForm
              formType="teaming"
              groups={teamingForm}
              submitLabel="Discuss teaming"
              successTitle="Inquiry received."
              successBody="You will get a direct reply on fit, what we would carry, and how we would structure it."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
