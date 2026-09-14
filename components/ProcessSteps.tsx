import { Section, SectionLabel } from "./Section";
import { processSteps } from "@/content/site";

/**
 * Align, Source, Implement, Deliver. This content is genuinely sequential,
 * so it is numbered and ordered rather than presented as a grid of equals.
 */
export function ProcessSteps() {
  return (
    <Section label="How we work">
      <SectionLabel>How We Work</SectionLabel>
      <h2 className="heading mt-6 max-w-3xl text-[clamp(1.875rem,4.5vw,3rem)]">
        Four steps, one accountable party.
      </h2>

      <ol className="mt-16 border-t rule">
        {processSteps.map((step) => (
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
