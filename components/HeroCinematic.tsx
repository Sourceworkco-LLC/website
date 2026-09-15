import { Container } from "./Container";
import { ActionLink } from "./ActionLink";
import { Photo } from "./Photo";
import { cta, site } from "@/content/site";

/**
 * The hero. One photograph, one line, one action.
 *
 * This is the only orchestrated motion on the site: a staggered reveal on
 * load, disabled entirely under prefers-reduced-motion.
 */
export function HeroCinematic() {
  return (
    <section className="relative isolate flex min-h-[560px] items-end bg-obsidian text-bone lg:min-h-[76vh] lg:max-h-[900px]">
      <Photo
        slot="heroPort"
        priority
        overlay="heavy"
        sizes="100vw"
        fill
      />

      <Container>
        <div className="py-20 md:py-24 lg:py-28">
          <p className="label reveal reveal-1 text-bone/70">
            Procurement &amp; Execution
          </p>

          <h1 className="display reveal reveal-2 mt-8 max-w-5xl text-[clamp(2.75rem,9vw,7rem)]">
            The work
            <br />
            behind the work.
          </h1>

          <p className="reveal reveal-3 measure mt-8 text-lg text-bone/85 sm:text-xl">
            {site.description}
          </p>

          <div className="reveal reveal-4 mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={cta.requirement.href} tone="dark">
              {cta.requirement.label}
            </ActionLink>
            <ActionLink href={cta.explore.href} tone="dark" variant="outline">
              {cta.explore.label}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
