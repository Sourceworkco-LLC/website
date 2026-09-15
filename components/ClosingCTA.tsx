import { Container } from "./Container";
import { ActionLink } from "./ActionLink";
import { cta } from "@/content/site";

/** Closing conversion block. A primary action and one alternative, no filler. */
export function ClosingCTA({
  heading = "Send us the solicitation.",
  body = "Paste the scope or attach the documents. We will tell you quickly whether we are the right party for it, and what we would need to quote.",
  primary = cta.requirement,
  secondary = cta.capabilities,
}: {
  heading?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="border-t rule bg-bone">
      <Container>
        <div className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <h2 className="heading text-[clamp(1.75rem,4vw,2.75rem)]">{heading}</h2>
            <p className="measure mt-6 text-obsidian/80">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:items-end md:justify-end">
            <ActionLink href={primary.href}>{primary.label}</ActionLink>
            {secondary ? (
              <ActionLink
                href={secondary.href}
                variant="outline"
                download={secondary.href.endsWith(".pdf")}
              >
                {secondary.label}
              </ActionLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
