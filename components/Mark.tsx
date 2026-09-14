/**
 * The Sourcework mark: two identical bracket forms, one rotated 180 degrees,
 * interlocking across an even gap. Inlined as SVG so it inherits currentColor
 * and stays crisp at favicon scale. Standalone files live in /public/brand.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 120"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M0 0H96V24H24V64H96V88H0Z" />
      <path d="M128 120H32V96H104V56H32V32H128Z" />
    </svg>
  );
}
