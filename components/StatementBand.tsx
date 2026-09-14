import { Container } from "./Container";

/** Full-width statement on Obsidian. Bone type, nothing else on the band. */
export function StatementBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-obsidian text-bone">
      <Container>
        <div className="py-24 md:py-32">
          <p className="display text-[2rem] uppercase leading-[1.05] tracking-[0.06em] sm:text-[3rem] lg:text-[3.75rem]">
            {children}
          </p>
        </div>
      </Container>
    </section>
  );
}
