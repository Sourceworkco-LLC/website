import { Container } from "./Container";
import { capabilities } from "@/content/site";

/**
 * Capabilities on Evergreen. Four columns, hairline separated, Bone type
 * throughout. Not cards: no boxes, no shadows, no corners.
 */
export function CapabilitiesBand() {
  return (
    <section className="bg-evergreen text-bone" aria-label="Core capabilities">
      <Container>
        <div className="py-20 md:py-28">
          <p className="label text-bone/60">Core Capabilities</p>

          <div className="mt-12 grid gap-px border-t rule-on-dark sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div
                key={capability.slug}
                className="flex flex-col border-b rule-on-dark py-8 lg:border-b-0 lg:border-r lg:py-10 lg:pr-8 lg:last:border-r-0 lg:not-first:pl-8"
              >
                <h2 className="heading text-xl">{capability.title}</h2>
                <p className="mt-4 text-sm text-bone/75">{capability.lede}</p>
                <ul className="mt-6 space-y-2 border-t rule-on-dark pt-6 lg:mt-auto">
                  {capability.items.map((item) => (
                    <li key={item} className="label text-bone/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
