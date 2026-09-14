import { snapshot } from "@/content/site";

/**
 * Company snapshot for contracting officers. Rendered as a real description
 * list so it is readable by assistive technology and easy to scan.
 */
export function SnapshotTable() {
  return (
    <dl className="border-t rule">
      {snapshot.map((row) => (
        <div
          key={row.label}
          className="grid gap-1 border-b rule py-5 sm:grid-cols-12 sm:gap-8 sm:py-6"
        >
          <dt className="label col-span-4 text-stone-ink">{row.label}</dt>
          <dd className="col-span-8 text-obsidian">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
