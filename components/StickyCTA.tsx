"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cta } from "@/content/site";

/** Phone-only. Hidden wherever the form is already on screen. */
const hiddenOn = ["/rfq", "/contact", "/suppliers", "/teaming"];

export function StickyCTA() {
  const pathname = usePathname();
  if (hiddenOn.includes(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bone/15 bg-obsidian/95 backdrop-blur-sm lg:hidden">
      <div
        className="px-4 pt-3"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
      >
        <Link
          href={cta.requirement.href}
          className="label flex min-h-12 items-center justify-center bg-bone px-6 py-3 text-obsidian"
        >
          {cta.requirement.label}
        </Link>
      </div>
    </div>
  );
}
