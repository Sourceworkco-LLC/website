import Link from "next/link";

type Tone = "light" | "dark";
type Variant = "solid" | "outline";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    solid: "bg-obsidian text-bone hover:bg-evergreen",
    outline: "border border-obsidian text-obsidian hover:bg-obsidian hover:text-bone",
  },
  dark: {
    solid: "bg-bone text-obsidian hover:bg-stone",
    outline: "border border-bone/70 text-bone hover:bg-bone hover:text-obsidian",
  },
};

/**
 * The site's one button treatment: a hard-edged block of tracked uppercase
 * type. Movement is a color change on hover, nothing else.
 *
 * Renders a plain anchor for downloads and off-site destinations, and a
 * client-routed link for pages.
 */
export function ActionLink({
  href,
  children,
  tone = "light",
  variant = "solid",
  download = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  variant?: Variant;
  download?: boolean;
  className?: string;
}) {
  const classes = `label inline-flex min-h-12 items-center justify-center px-8 py-4 transition-colors duration-200 ${styles[tone][variant]} ${className}`;
  const external = download || !href.startsWith("/") || href.endsWith(".pdf");

  if (external) {
    return (
      <a href={href} download={download || undefined} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
