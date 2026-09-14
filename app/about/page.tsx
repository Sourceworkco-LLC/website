import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { StatementBand } from "@/components/StatementBand";
import { ClosingCTA } from "@/components/ClosingCTA";
import { DuotoneImage } from "@/components/DuotoneImage";
import { values, site } from "@/content/site";

const description =
  "Sourcework operates as a procurement and execution layer between customer requirements and the fragmented commercial marketplace.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: `About | ${site.name}`, description, url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Source. Work."
        intro="A procurement and execution layer between customer requirements and the fragmented commercial marketplace."
      />

      <Section label="Company">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <SectionLabel>The Name</SectionLabel>
            <div className="measure mt-8 space-y-6 text-lg text-obsidian/85">
              <p>
                <strong className="font-semibold text-obsidian">Source:</strong> find
                the right opportunity, supplier, product, and solution.
              </p>
              <p>
                <strong className="font-semibold text-obsidian">Work:</strong> put
                everything together and execute for the customer.
              </p>
              <p>
                Most requirements do not fail on intent. They fail in the gap between
                what an organization needs and the dozens of vendors, quotes,
                certifications, and delivery schedules standing between that need and
                a finished outcome. Sourcework closes that gap and carries the
                accountability for it.
              </p>
              <p>
                We work across federal, state, and local government, and with
                commercial clients who need technology, automation, and AI
                implemented rather than merely purchased.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Swap in real photography by passing `src`. */}
            <DuotoneImage className="aspect-4/5 w-full" alt="" />
          </div>
        </div>
      </Section>

      <Section className="bg-evergreen text-bone" label="Values">
        <SectionLabel tone="dark">Values</SectionLabel>
        <ul className="mt-12 grid gap-px border-t rule-on-dark sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <li
              key={value}
              className="border-b rule-on-dark py-8 lg:border-b-0 lg:border-r lg:pr-6 lg:last:border-r-0 lg:not-first:pl-6"
            >
              <span className="heading text-xl">{value}</span>
            </li>
          ))}
        </ul>
        <p className="heading mt-16 max-w-2xl text-[clamp(1.5rem,3.5vw,2.5rem)]">
          Same challenges. A more capable tomorrow.
        </p>
      </Section>

      <StatementBand>{site.tagline}</StatementBand>
      <ClosingCTA />
    </>
  );
}
