import Link from "next/link";
import { Container } from "./Container";
import { Photo } from "./Photo";
import { capabilities } from "@/content/site";

// Five on the home page. Supplier coordination is a /solutions story.
const featured = capabilities.slice(0, 5);

// Asymmetric on desktop: two tall, three short. Even cards read as a catalog.
const span = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];
const height = ["lg:h-[26rem]", "lg:h-[26rem]", "lg:h-[20rem]", "lg:h-[20rem]", "lg:h-[20rem]"];

/**
 * What Sourcework puts to work. Carried by imagery: one sentence per card,
 * never a paragraph.
 *
 * Mobile is a snap-scrolling rail rather than five stacked blocks, so the
 * section stays one screen tall on a phone.
 */
export function CapabilityGrid() {
  return (
    <section className="bg-bone py-20 md:py-28" aria-label="What we put to work">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-stone-ink">Capability</p>
            <h2 className="heading mt-5 text-[clamp(1.875rem,4.5vw,3rem)]">
              What we put to work.
            </h2>
          </div>
          <Link
            href="/solutions"
            className="label text-obsidian underline underline-offset-4 transition-colors hover:text-evergreen"
          >
            All capabilities
          </Link>
        </div>
      </Container>

      {/* Rail on phones, grid from lg up. */}
      <div className="mt-12 md:mt-16">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:px-8 lg:mx-auto lg:grid lg:max-w-[84rem] lg:snap-none lg:grid-cols-6 lg:gap-5 lg:overflow-visible lg:px-12 lg:pb-0">
          {featured.map((capability, index) => (
            <li
              key={capability.slug}
              className={`w-[78vw] shrink-0 snap-start sm:w-[58vw] lg:w-auto ${span[index]}`}
            >
              <Link
                href={`/solutions#${capability.slug}`}
                className={`group relative isolate block h-[22rem] overflow-hidden ${height[index]}`}
              >
                <Photo
                  slot={capability.image}
                  overlay="heavy"
                  sizes="(min-width: 1024px) 40vw, 78vw"
                  fill
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="flex h-full flex-col justify-end p-6 text-bone md:p-8">
                  <h3 className="heading text-2xl">{capability.title}</h3>
                  <p className="mt-3 max-w-sm text-sm text-bone/80">{capability.blurb}</p>
                  <span className="label mt-6 inline-flex items-center gap-3 text-bone/70 transition-colors group-hover:text-bone">
                    Learn more
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
