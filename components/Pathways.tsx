import Link from "next/link";
import { Section, SectionLabel } from "./Section";
import { pathways } from "@/content/site";

/**
 * Three audiences, three next actions. A buyer, a supplier, and a prime should
 * each find their path without reading the rest of the site.
 */
export function Pathways() {
  return (
    <Section className="bg-bone" label="Where to start">
      <SectionLabel>Where to start</SectionLabel>
      <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
        Three ways to work with us.
      </h2>

      <div className="mt-16 grid gap-px border-t rule md:grid-cols-3">
        {pathways.map((pathway, index) => (
          <div
            key={pathway.audience}
            className={`flex flex-col border-b rule py-8 md:border-b-0 md:py-10 ${
              index < pathways.length - 1 ? "md:border-r md:pr-8" : ""
            } ${index > 0 ? "md:pl-8" : ""}`}
          >
            <p className="label text-stone-ink">{pathway.audience}</p>
            <h3 className="heading mt-5 text-2xl">{pathway.title}</h3>
            <p className="mt-4 grow text-obsidian/80">{pathway.body}</p>
            <Link
              href={pathway.action.href}
              className="label mt-8 inline-flex text-obsidian underline underline-offset-4 transition-colors hover:text-evergreen"
            >
              {pathway.action.label}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
