import Link from "next/link";
import { Mark } from "./Mark";

/**
 * Horizontal lockup: mark plus the tracked SOURCEWORK wordmark.
 *
 * Rendered as live type rather than a flat image so the wordmark stays sharp
 * at every size and reads to screen readers and search engines. The equivalent
 * flat assets are /public/brand/lockup-horizontal-{obsidian,bone}.svg, kept in
 * sync for email signatures and anywhere an <img> is required.
 */
export function Lockup({
  href = "/",
  className = "",
  markClassName = "h-6 w-auto sm:h-7",
  wordClassName = "text-[0.95rem] sm:text-[1.0625rem]",
}: {
  href?: string | null;
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark className={markClassName} />
      <span
        className={`font-[family-name:var(--font-display)] font-semibold uppercase leading-none tracking-[0.1em] ${wordClassName}`}
      >
        Sourcework
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="Sourcework, home">
      {content}
    </Link>
  );
}
