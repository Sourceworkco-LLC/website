import { Section, SectionLabel } from "./Section";
import { pipeline } from "@/content/site";

/**
 * Requirement to delivery. Genuinely sequential work, so it is numbered and
 * ordered rather than laid out as a grid of equals.
 */
export function Pipeline() {
  return (
    <Section label="How a requirement becomes a delivery">
      <SectionLabel>How a requirement becomes a delivery</SectionLabel>
      <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
        Six steps, one accountable party.
      </h2>
      <p className="measure mt-6 text-obsidian/80">
        Sourcework is not a reseller. A requirement arrives, we determine the
        commercial path to fill it, and we carry it through delivery under one
        contract and one performance record.
      </p>

      <ol className="mt-16 border-t rule">
        {pipeline.map((step) => (
          <li
            key={step.step}
            className="grid gap-4 border-b rule py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <span className="label col-span-2 text-stone-ink">{step.step}</span>
            <h3 className="heading col-span-3 text-2xl">{step.title}</h3>
            <p className="measure col-span-7 text-obsidian/80">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** The pipeline compressed to one tracked line. Used under the hero. */
export function PipelineLine({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ol
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${
        tone === "dark" ? "text-bone/70" : "text-stone-ink"
      }`}
    >
      {pipeline.map((step, index) => (
        <li key={step.title} className="label flex items-center gap-4">
          {step.title}
          {index < pipeline.length - 1 ? (
            <span aria-hidden="true" className="opacity-50">
              &rarr;
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
