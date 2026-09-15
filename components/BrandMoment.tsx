import { Container } from "./Container";
import { brandMoment, site } from "@/content/site";

/**
 * The brand moment. Used once, on the home page.
 *
 * This section is not a proposal and does not sell anything. It exists so a
 * visitor leaves with one idea. Keep it short, keep the air around it.
 */
export function BrandMoment() {
  return (
    <section className="bg-obsidian py-24 text-bone md:py-36" aria-label="What Sourcework is">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
              {brandMoment.heading}
            </h2>

            <ul className="mt-12 space-y-1">
              {brandMoment.items.map((item) => (
                <li key={item} className="heading text-xl text-bone/55 sm:text-2xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <p className="measure text-lg text-bone/75">{brandMoment.body}</p>
            <p className="heading mt-8 text-[clamp(1.5rem,3vw,2.25rem)]">
              {brandMoment.close}
            </p>

            <div className="mt-16 border-t rule-on-dark pt-6">
              <p className="label text-bone/50">Sourcework</p>
              <p className="label mt-2 text-bone">{site.brandLine}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
