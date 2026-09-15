import { registration } from "@/content/site";

/**
 * SAM.gov registration status signal. The single use of the active green on
 * the site, and a square rather than a dot because nothing here is rounded.
 */
export function StatusMark({ className = "" }: { className?: string }) {
  return (
    <span className={`label inline-flex items-center gap-2.5 text-active ${className}`}>
      <span aria-hidden="true" className="block h-2 w-2 bg-active" />
      {registration.statusLabel}
    </span>
  );
}
