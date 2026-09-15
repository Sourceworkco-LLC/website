import { Container } from "./Container";
import { ActionLink } from "./ActionLink";
import { PipelineLine } from "./Pipeline";
import { cta, site } from "@/content/site";

/**
 * The home hero, and the one bold moment on the site. This is also the only
 * orchestrated motion anywhere: a staggered reveal on load, disabled entirely
 * under prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section className="bg-bone">
      <Container>
        <div className="py-20 md:py-28 lg:py-32">
          <p className="label reveal reveal-1 text-stone-ink">
            Government Procurement &amp; Execution
          </p>

          <h1 className="display reveal reveal-2 mt-8 text-[clamp(2.75rem,10vw,7.5rem)]">
            {site.promise}
          </h1>

          <p className="reveal reveal-3 measure-wide mt-10 text-lg text-obsidian/80 sm:text-xl">
            {site.description}
          </p>

          <div className="reveal reveal-4 mt-12 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={cta.requirement.href}>{cta.requirement.label}</ActionLink>
            <ActionLink href={cta.capabilities.href} variant="outline" download>
              {cta.capabilities.label}
            </ActionLink>
          </div>

          <div className="reveal reveal-4 mt-16 border-t rule pt-6">
            <PipelineLine />
          </div>
        </div>
      </Container>
    </section>
  );
}
