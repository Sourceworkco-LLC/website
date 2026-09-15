"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One-click copy for identifiers a contracting officer has to transcribe.
 * Falls back silently when the clipboard is unavailable: the value is on
 * screen either way.
 */
export function CopyButton({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 2000);
          } catch {
            // Clipboard permission denied. Nothing to recover from.
          }
        }}
        aria-label={`Copy ${label}`}
        className={`label inline-flex min-h-9 shrink-0 items-center border border-obsidian/40 px-3 text-stone-ink transition-colors hover:border-obsidian hover:text-obsidian ${className}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? `${label} copied to clipboard` : ""}
      </span>
    </>
  );
}
