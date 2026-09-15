import { Container } from "./Container";
import { Photo } from "./Photo";
import type { ImageSlotKey } from "@/config/images";

/** Full-bleed photograph with one statement. Rhythm, not information. */
export function ImageBreak({
  slot,
  statement,
}: {
  slot: ImageSlotKey;
  statement: string;
}) {
  return (
    <section className="relative isolate flex min-h-[380px] items-end bg-obsidian text-bone md:min-h-[520px]">
      <Photo
        slot={slot}
        overlay="heavy"
        sizes="100vw"
        fill
      />
      <Container>
        <div className="py-16 md:py-20">
          <p className="display max-w-3xl text-[clamp(1.75rem,5vw,3.5rem)]">{statement}</p>
        </div>
      </Container>
    </section>
  );
}
