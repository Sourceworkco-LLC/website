import { Container } from "./Container";

/** Interior page masthead on Bone. No motion, no image, just type and a rule. */
export function PageHero({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b rule bg-bone">
      <Container>
        <div className="py-16 md:py-24">
          <p className="label text-stone-ink">{label}</p>
          <h1 className="display mt-6 text-[clamp(2.25rem,6vw,4.5rem)]">{title}</h1>
          {intro ? (
            <p className="measure-wide mt-8 text-lg text-obsidian/80">{intro}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
