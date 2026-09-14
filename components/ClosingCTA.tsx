import { Container } from "./Container";
import { ActionLink } from "./ActionLink";

/** Closing conversion block. One action, stated plainly. */
export function ClosingCTA({
  heading = "Tell us what you need sourced or solved.",
  body = "Send the requirement, the solicitation, or the problem. You will get a direct answer on whether we are the right party for it.",
  action = "Start a conversation",
}: {
  heading?: string;
  body?: string;
  action?: string;
}) {
  return (
    <section className="border-t rule bg-bone">
      <Container>
        <div className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <h2 className="heading text-[clamp(1.75rem,4vw,2.75rem)]">{heading}</h2>
            <p className="measure mt-6 text-obsidian/80">{body}</p>
          </div>
          <div className="md:col-span-5 md:flex md:items-end md:justify-end">
            <ActionLink href="/contact">{action}</ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
