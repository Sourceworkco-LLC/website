import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { images, type ImageSlotKey } from "@/config/images";

/**
 * Photography slot.
 *
 * Renders the file named in config/images.ts when it is present, and a
 * composed tonal placeholder when it is not, so a page holds its rhythm before
 * the photography lands. Drop a correctly named file into /public/images and
 * the slot fills with no code change.
 *
 * Next/Image handles AVIF and WebP, responsive sizes, and lazy loading.
 * Pass `priority` on the hero only.
 */
export function Photo({
  slot,
  className = "",
  sizes = "100vw",
  priority = false,
  overlay = "none",
  fill = false,
}: {
  slot: ImageSlotKey;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Scrim strength. Use `heavy` wherever type sits over the image. */
  overlay?: "none" | "light" | "heavy";
  /**
   * Lay the photograph behind its section as a backdrop. Set the positioning
   * here rather than passing `absolute` in `className`: Tailwind emits
   * `.relative` after `.absolute`, so a caller-supplied `absolute` loses the
   * cascade and the image silently returns to the flow.
   */
  fill?: boolean;
}) {
  const image = images[slot];
  const present = existsSync(join(process.cwd(), "public", "images", image.file));

  const scrim =
    overlay === "heavy"
      ? "bg-[linear-gradient(to_top,rgba(15,20,18,0.92)_0%,rgba(15,20,18,0.62)_45%,rgba(15,20,18,0.35)_100%)]"
      : overlay === "light"
        ? "bg-obsidian/25"
        : "";

  return (
    <div
      className={`overflow-hidden bg-evergreen ${
        fill ? "absolute inset-0 -z-10 h-full w-full" : "relative"
      } ${className}`}
    >
      {present ? (
        <Image
          src={`/images/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <>
          {/* Placeholder: planes of brand color, so composition still reads. */}
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#1b2320_0%,#2d3834_42%,#3b4844_64%,#141b19_100%)]" />
          <div className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(90deg,transparent_0_46px,#f4f2ec_46px_47px)]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="label text-bone/45">{image.note}</p>
          </div>
        </>
      )}
      {scrim ? <div className={`absolute inset-0 ${scrim}`} /> : null}
    </div>
  );
}
