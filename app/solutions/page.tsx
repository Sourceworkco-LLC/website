import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container } from "@/components/Container";
import { ImageBreak } from "@/components/ImageBreak";
import { ClosingCTA } from "@/components/ClosingCTA";
import { capabilities, site } from "@/content/site";

const description =
  "What Sourcework sources and coordinates: products and equipment, technology and digital, logistics, facilities and field services, specialty sourcing, and supplier coordination.";

export const metadata: Metadata = {
  title: "Capabilities",
  description,
  alternates: { canonical: "/solutions" },
  openGraph: { title: `Capabilities | ${site.name}`, description, url: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Capabilities"
        title="Capability, sourced."
        intro="Six ways we put existing commercial capability to work. One contract on your side, however many moving parts on ours."
      />

      <div className="bg-bone">
        {capabilities.map((capability, index) => (
          <section
            key={capability.slug}
            id={capability.slug}
            className="scroll-mt-24 border-b rule py-16 md:py-20"
            aria-label={capability.title}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div
                  className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}
                >
                  <Photo
                    slot={capability.image}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="aspect-16/10 w-full"
                  />
                </div>

                <div
                  className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
                >
                  <h2 className="heading text-[clamp(1.75rem,3.5vw,2.5rem)]">
                    {capability.title}
                  </h2>
                  <p className="measure mt-5 text-lg text-obsidian/85">
                    {capability.blurb}
                  </p>
                  <p className="measure mt-5 text-obsidian/75">{capability.detail}</p>
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t rule pt-5">
                    {capability.items.map((item) => (
                      <li key={item} className="label text-stone-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <ImageBreak slot="facilities" statement="Capability already exists. We find it and put it to work." />

      <ClosingCTA />
    </>
  );
}
