import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { StatementBand } from "@/components/StatementBand";
import { ClosingCTA } from "@/components/ClosingCTA";
import { capabilities, engagement, site } from "@/content/site";

const description =
  "Government procurement, technology and AI implementation, specialized services, and a vetted partner network, delivered under single-point accountability.";

export const metadata: Metadata = {
  title: "Solutions",
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title: `Solutions | ${site.name}`, description, url: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Four capabilities, one accountable party."
        intro="Sourcework holds the contract, the sourcing relationships, and the delivery schedule. You issue one requirement and manage one performance record."
      />

      <Section label="Capabilities">
        <div className="border-t rule">
          {capabilities.map((capability) => (
            <article
              key={capability.slug}
              className="grid gap-6 border-b rule py-12 md:grid-cols-12 md:gap-10 md:py-16"
            >
              <div className="md:col-span-4">
                <h2 className="heading text-[clamp(1.5rem,3vw,2.25rem)]">
                  {capability.title}
                </h2>
                <ul className="mt-6 space-y-1">
                  {capability.items.map((item) => (
                    <li key={item} className="label text-stone-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-8">
                <p className="measure-wide text-lg text-obsidian/80">
                  {capability.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-bone" label="How we work with agencies">
        <SectionLabel>How We Work With Agencies</SectionLabel>
        <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
          From solicitation to closeout.
        </h2>

        <div className="mt-16 grid gap-px border-t rule sm:grid-cols-2 lg:grid-cols-5">
          {engagement.map((stage) => (
            <div
              key={stage.title}
              className="border-b rule py-8 lg:border-b-0 lg:border-r lg:pr-6 lg:last:border-r-0 lg:not-first:pl-6"
            >
              <h3 className="heading text-lg">{stage.title}</h3>
              <p className="mt-4 text-sm text-obsidian/75">{stage.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <StatementBand>{site.tagline}</StatementBand>
      <ClosingCTA />
    </>
  );
}
