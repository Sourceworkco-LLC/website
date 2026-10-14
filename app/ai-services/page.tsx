import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { Container } from "@/components/Container";
import { ActionLink } from "@/components/ActionLink";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { aiServicesForm } from "@/content/forms";
import { site } from "@/content/site";
import {
  aiContact,
  aiFaq,
  aiProcess,
  aiServices,
  audit,
  leaks,
  packages,
  whoItFits,
} from "@/content/ai-services";

const description =
  "Sourcework builds AI systems for local service businesses. Missed call text back, after hours booking, estimate follow up, and done for you content.";

export const metadata: Metadata = {
  title: "AI services for local service businesses",
  description,
  alternates: { canonical: "/ai-services" },
  openGraph: {
    title: `AI services for local service businesses | ${site.name}`,
    description,
    url: "/ai-services",
  },
};

export default function AiServicesPage() {
  return (
    <>
      <PageHero
        label={aiServices.label}
        title={aiServices.title}
        intro={aiServices.intro}
      />

      {/* Actions and the three plain facts, on one rule under the masthead. */}
      <section className="border-b rule bg-bone" aria-label="Get started">
        <Container>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href={aiServices.primaryCta.href}>
                {aiServices.primaryCta.label}
              </ActionLink>
              <ActionLink href={aiServices.secondaryCta.href} variant="outline">
                {aiServices.secondaryCta.label}
              </ActionLink>
            </div>

            <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-3">
              {aiServices.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="label text-obsidian">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-obsidian/70">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Where the money leaks */}
      <Section label={leaks.label}>
        <SectionLabel>{leaks.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-4xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {leaks.heading}
        </h2>
        <p className="measure-wide mt-8 text-obsidian/80">{leaks.intro}</p>

        <div className="mt-16 grid gap-px border-t rule md:grid-cols-3">
          {leaks.items.map((item, index) => (
            <div
              key={item.title}
              className={`border-b rule py-8 md:border-b-0 md:py-10 ${
                index < leaks.items.length - 1 ? "md:border-r md:pr-8" : ""
              } ${index > 0 ? "md:pl-8" : ""}`}
            >
              <h3 className="heading text-xl">{item.title}</h3>
              <p className="mt-4 text-obsidian/80">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The free audit */}
      <Section id="audit" className="border-t rule" label={audit.heading}>
        <SectionLabel>{audit.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {audit.heading}
        </h2>
        <p className="measure-wide mt-8 text-obsidian/80">{audit.intro}</p>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <ol className="md:col-span-7">
            {audit.steps.map((step) => (
              <li key={step.step} className="relative border-t rule py-8 last:border-b">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 block h-px w-8 bg-obsidian"
                />
                <span className="label text-stone-ink">{step.step}</span>
                <h3 className="heading mt-4 text-lg">{step.title}</h3>
                <p className="mt-3 text-obsidian/75">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="bg-obsidian p-8 text-bone md:col-span-5 md:self-start md:p-10">
            <h3 className="heading text-xl">{audit.deliverable.heading}</h3>
            <p className="mt-4 text-sm text-bone/75">{audit.deliverable.body}</p>

            <ul className="mt-8 border-t rule-on-dark">
              {audit.deliverable.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b rule-on-dark py-3 text-sm text-bone/85"
                >
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-stone" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ActionLink href="#contact" tone="dark">
                Request my free audit
              </ActionLink>
              <p className="mt-4 text-sm text-bone/60">{audit.deliverable.note}</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionLabel>What the audit checks</SectionLabel>
          <div className="mt-8 grid gap-px border-t rule sm:grid-cols-2 lg:grid-cols-3">
            {audit.checks.map((check) => (
              <div key={check.title} className="border-b rule py-6 pr-8">
                <h3 className="heading text-base">{check.title}</h3>
                <p className="mt-2 text-sm text-obsidian/75">{check.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section id="packages" className="border-t rule" label={packages.label}>
        <SectionLabel>{packages.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {packages.heading}
        </h2>
        <p className="measure-wide mt-8 text-obsidian/80">{packages.intro}</p>

        <div className="mt-16 grid gap-px border-t rule lg:grid-cols-3">
          {packages.tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? "flex flex-col bg-evergreen p-8 text-bone lg:p-10"
                  : "flex flex-col border-b rule py-8 lg:border-b-0 lg:py-10 lg:pr-10 lg:not-first:pl-10 lg:not-last:border-r"
              }
            >
              <div className="flex min-h-8 items-center justify-between gap-4">
                <p className={`label ${tier.featured ? "text-bone/60" : "text-stone-ink"}`}>
                  {tier.name}
                </p>
                {"badge" in tier && tier.badge ? (
                  <p className="label bg-bone px-3 py-1.5 text-obsidian">{tier.badge}</p>
                ) : null}
              </div>

              <h3 className="heading mt-5 text-2xl">{tier.title}</h3>
              <p className={`mt-4 text-sm ${tier.featured ? "text-bone/75" : "text-obsidian/75"}`}>
                {tier.description}
              </p>

              <p className="code mt-8 text-4xl">{tier.monthly}</p>
              <p className={`label mt-2 ${tier.featured ? "text-bone/60" : "text-stone-ink"}`}>
                per month
              </p>
              <p className={`mt-4 text-sm ${tier.featured ? "text-bone/75" : "text-obsidian/75"}`}>
                {tier.setup}
              </p>

              <ul className={`mt-8 border-t ${tier.featured ? "rule-on-dark" : "rule"}`}>
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-4 border-b py-3 text-sm ${
                      tier.featured ? "rule-on-dark text-bone/85" : "rule text-obsidian/85"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-2.5 h-px w-4 shrink-0 ${
                        tier.featured ? "bg-stone" : "bg-obsidian"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <p
                className={`mt-8 text-sm ${
                  tier.featured ? "text-bone/60" : "text-obsidian/60"
                }`}
              >
                {tier.note}
              </p>

              <div className="mt-6 lg:mt-auto lg:pt-6">
                <ActionLink
                  href="#contact"
                  tone={tier.featured ? "dark" : "light"}
                  variant={tier.featured ? "solid" : "outline"}
                  className="w-full"
                >
                  {`Start with ${tier.name}`}
                </ActionLink>
              </div>
            </div>
          ))}
        </div>

        <p className="measure-wide mt-12 text-sm text-obsidian/70">{packages.footnote}</p>
      </Section>

      {/* Who it fits */}
      <Section className="bg-evergreen text-bone" label={whoItFits.label}>
        <SectionLabel tone="dark">{whoItFits.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {whoItFits.heading}
        </h2>
        <p className="measure-wide mt-8 text-bone/75">{whoItFits.intro}</p>

        <div className="mt-16 grid gap-px border-t rule-on-dark sm:grid-cols-2 lg:grid-cols-3">
          {whoItFits.trades.map((trade) => (
            <div key={trade.title} className="border-b rule-on-dark py-8 pr-8">
              <h3 className="heading text-lg">{trade.title}</h3>
              <p className="mt-4 text-sm text-bone/75">{trade.body}</p>
            </div>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap gap-3">
          {whoItFits.signals.map((signal) => (
            <li
              key={signal}
              className="label border border-bone/35 px-4 py-2.5 text-bone/85"
            >
              {signal}
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section label={aiProcess.label}>
        <SectionLabel>{aiProcess.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {aiProcess.heading}
        </h2>
        <p className="measure-wide mt-8 text-obsidian/80">{aiProcess.intro}</p>

        <ol className="mt-16 grid gap-px border-t rule md:grid-cols-3">
          {aiProcess.steps.map((step, index) => (
            <li
              key={step.step}
              className={`relative border-b rule py-8 md:border-b-0 md:py-10 ${
                index < aiProcess.steps.length - 1 ? "md:border-r md:pr-8" : ""
              } ${index > 0 ? "md:pl-8" : ""}`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 block h-px w-8 bg-obsidian ${
                  index > 0 ? "left-0 md:left-8" : "left-0"
                }`}
              />
              <span className="label text-stone-ink">{step.step}</span>
              <h3 className="heading mt-4 text-lg">{step.title}</h3>
              <p className="mt-3 text-obsidian/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section className="border-t rule" label={aiFaq.label}>
        <SectionLabel>{aiFaq.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {aiFaq.heading}
        </h2>
        <p className="measure-wide mt-8 text-obsidian/80">{aiFaq.intro}</p>

        <div className="mt-16 border-t rule">
          {aiFaq.items.map((item) => (
            <details key={item.question} className="group border-b rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="heading text-lg">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="relative block h-3 w-3 shrink-0 text-obsidian"
                >
                  <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:rotate-90" />
                </span>
              </summary>
              <p className="measure-wide pb-8 text-obsidian/80">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="border-t rule" label={aiContact.label}>
        <SectionLabel>{aiContact.label}</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          {aiContact.heading}
        </h2>
        <p className="measure-wide mt-8 text-obsidian/80">{aiContact.intro}</p>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="bg-obsidian p-8 text-bone md:p-10">
              <h3 className="heading text-xl">{aiContact.nextHeading}</h3>
              <p className="mt-4 text-sm text-bone/75">{aiContact.nextBody}</p>

              <div className="mt-8 border-t rule-on-dark pt-6">
                <p className="label text-bone/60">Email Sourcework</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-words text-bone underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </div>

              <ul className="mt-8 border-t rule-on-dark">
                {aiContact.assurances.map((assurance) => (
                  <li
                    key={assurance}
                    className="flex items-start gap-4 border-b rule-on-dark py-3 text-sm text-bone/85"
                  >
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-stone" />
                    {assurance}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm text-obsidian/70">{aiContact.positioning}</p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <IntakeForm
              formType="ai-services"
              groups={aiServicesForm}
              submitLabel="Send it over"
              successTitle="Received."
              successBody={`We will confirm by email. Audit videos go out within 2 to 3 business days, from ${site.email}.`}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
