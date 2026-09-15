import { CopyButton } from "./CopyButton";
import { quickReference, site } from "@/content/site";

/**
 * The full contracting officer reference. Identifiers copy in one click, and
 * anything not yet issued says so in plain language rather than being omitted
 * or, worse, filled in with something plausible.
 */
export function QuickReference() {
  const rows = quickReference.filter(
    (row) => row.label !== "Contact" || site.email,
  );

  return (
    <dl className="border-t rule">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid items-center gap-1 border-b rule py-5 sm:grid-cols-12 sm:gap-6 sm:py-4"
        >
          <dt className="label col-span-4 text-stone-ink">{row.label}</dt>
          <dd className="col-span-8 flex items-center justify-between gap-4">
            <span
              className={
                "pending" in row && row.pending
                  ? "text-obsidian/45"
                  : "status" in row && row.status
                    ? "label text-active"
                    : "copy" in row && row.copy
                      ? "code text-lg"
                      : "text-obsidian"
              }
            >
              {"href" in row && row.href ? (
                <a
                  href={row.href}
                  className="underline underline-offset-4 transition-colors hover:text-evergreen"
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </span>
            {"copy" in row && row.copy ? (
              <CopyButton value={row.value} label={row.label} />
            ) : null}
          </dd>
        </div>
      ))}

      {site.phone ? (
        <div className="grid items-center gap-1 border-b rule py-5 sm:grid-cols-12 sm:gap-6 sm:py-4">
          <dt className="label col-span-4 text-stone-ink">Phone</dt>
          <dd className="col-span-8 text-obsidian">{site.phone}</dd>
        </div>
      ) : null}
    </dl>
  );
}
