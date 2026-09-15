import { Container } from "./Container";
import { principles } from "@/content/site";

/** Why Sourcework. Three principles, no essay. */
export function Principles() {
  return (
    <section className="bg-evergreen py-20 text-bone md:py-28" aria-label="Why Sourcework">
      <Container>
        <p className="label text-bone/60">Why Sourcework</p>

        <ol className="mt-12 grid gap-px border-t rule-on-dark md:grid-cols-3">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className={`border-b rule-on-dark py-8 md:border-b-0 md:py-10 ${
                index < principles.length - 1 ? "md:border-r md:pr-8" : ""
              } ${index > 0 ? "md:pl-8" : ""}`}
            >
              <h3 className="heading text-2xl">{principle.title}</h3>
              <p className="mt-4 text-bone/75">{principle.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
