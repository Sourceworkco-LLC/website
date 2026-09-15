import { pipeline } from "@/content/site";

/** The pipeline compressed to one tracked line. Used beneath intake forms. */
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
