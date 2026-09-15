import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Photo } from "@/components/Photo";
import { ClosingCTA } from "@/components/ClosingCTA";
import { registration, values, site } from "@/content/site";

const description =
  "Every finished job starts upstream. Sourcework finds the capability behind an outcome and puts it to work. Nashville, Tennessee.";

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
        title="The work behind the work."
        intro="Every finished job starts somewhere upstream. Sourcework is what happens up there."
      />

      <section className="bg-bone py-16 md:py-24" aria-label="The idea">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="measure space-y-6 text-lg text-obsidian/85">
                <p>
                  A facility needs work. A team needs technology. A project needs
                  materials. An agency needs a problem solved.
                </p>
                <p>
                  The capability to solve it almost always exists already. It is
                  just scattered. The manufacturer is in one state. The
                  distributor is in another. The specialist is somewhere else
                  entirely. Freight is a separate company. Compliance is a
                  separate constraint.
                </p>
                <p className="heading text-2xl text-obsidian">
                  Someone has to find the right capability, assemble the
                  commercial path, and make the outcome happen.
                </p>
                <p>That is the work behind the work. That is the company.</p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Photo
                slot="aboutQuarry"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-4/5 w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-obsidian py-20 text-bone md:py-28" aria-label="The name">
        <Container>
          <p className="label text-bone/60">The name</p>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="border-t rule-on-dark pt-8">
              <h2 className="display text-[clamp(2rem,5vw,3.5rem)]">Source</h2>
              <p className="mt-6 text-lg text-bone/80">
                Find the right capability. The product, the supplier, the
                specialist, the solution.
              </p>
            </div>
            <div className="border-t rule-on-dark pt-8">
              <h2 className="display text-[clamp(2rem,5vw,3.5rem)]">Work</h2>
              <p className="mt-6 text-lg text-bone/80">
                Put it into action. Assemble it, coordinate it, deliver it,
                stand behind it.
              </p>
            </div>
          </div>
          <p className="heading mt-16 max-w-3xl text-[clamp(1.5rem,3.5vw,2.5rem)]">
            {site.belief}
          </p>
        </Container>
      </section>

      <section className="bg-bone py-20 md:py-28" aria-label="Where we are">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="label text-stone-ink">Where we are</p>
              <h2 className="heading mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)]">
                A Nashville company, early and honest about it.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="measure text-obsidian/85">
                Sourcework LLC is registered in Tennessee and active in SAM.gov
                for all awards, UEI {registration.uei}, CAGE {registration.cage}.
                We hold no socioeconomic certifications, no contract vehicles,
                and no federal past performance to date.
              </p>
              <p className="measure mt-6 text-obsidian/85">
                What we offer a buyer today is the ability to read a scope, find
                who can actually fill it, verify that before promising anything,
                and stay accountable through delivery. Government procurement is
                where we work now. The idea is bigger than that.
              </p>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t rule pt-6">
                {values.map((value) => (
                  <li key={value} className="label text-stone-ink">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
