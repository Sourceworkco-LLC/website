import { Container } from "./Container";
import { pipeline } from "@/content/site";

/**
 * The one process section on the site. Six steps, one line each.
 *
 * A horizontal progression on desktop, read left to right along a single
 * hairline; a stacked sequence on phones. The detail lives on /government.
 */
export function ProcessSequence() {
  return (
    <section className="bg-bone py-20 md:py-28" aria-label="How the work runs">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-stone-ink">Process</p>
            <h2 className="heading mt-5 max-w-2xl text-[clamp(1.875rem,4.5vw,3rem)]">
              We don&rsquo;t start with a catalog. We start with the job.
            </h2>
          </div>
        </div>

        <ol className="mt-16 grid gap-px border-t rule md:grid-cols-2 lg:grid-cols-6">
          {pipeline.map((step) => (
            <li
              key={step.step}
              className="relative border-b rule py-8 lg:border-b-0 lg:pr-6 lg:not-last:border-r lg:not-first:pl-6"
            >
              {/* The tick that turns six columns into one progression. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 block h-px w-8 bg-obsidian lg:not-first:left-6"
              />
              <span className="label text-stone-ink">{step.step}</span>
              <h3 className="heading mt-4 text-lg">{step.title}</h3>
              <p className="mt-3 text-sm text-obsidian/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
