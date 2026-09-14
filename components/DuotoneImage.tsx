import Image from "next/image";

/**
 * Photography slot. Images are treated with a grayscale plus evergreen color
 * blend (see .duotone in globals.css) so any stock or client photograph lands
 * inside the palette.
 *
 * With no `src` the slot renders an architectural placeholder built from the
 * brand colors, which keeps layout honest until real photography is dropped in.
 */
export function DuotoneImage({
  src,
  alt = "",
  className = "",
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div
        className={`relative overflow-hidden bg-evergreen ${className}`}
        role="presentation"
      >
        {/* Placeholder: stacked planes reading as architecture at any size. */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,#2d3834_0%,#2d3834_38%,#3a4642_38%,#3a4642_62%,#232c29_62%,#232c29_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-obsidian/45" />
        <div className="absolute inset-0 flex items-end p-6">
          <span className="label text-bone/60">Photography</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`duotone relative overflow-hidden bg-evergreen ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
