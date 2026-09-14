import Link from "next/link";

type Tone = "light" | "dark";

const styles: Record<Tone, string> = {
  // On Bone: Obsidian block, Bone text.
  light:
    "bg-obsidian text-bone hover:bg-evergreen focus-visible:outline-obsidian",
  // On Evergreen or Obsidian: Bone block, Obsidian text.
  dark: "bg-bone text-obsidian hover:bg-stone focus-visible:outline-bone",
};

/**
 * The site's one button treatment: a hard-edged block of tracked uppercase
 * type. Movement is a color change on hover, nothing else.
 */
export function ActionLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`label inline-flex min-h-12 items-center px-8 py-4 transition-colors duration-200 ${styles[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}
