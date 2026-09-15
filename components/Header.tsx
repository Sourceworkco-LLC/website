import Link from "next/link";
import { Container } from "./Container";
import { Lockup } from "./Lockup";
import { cta, nav } from "@/content/site";

/**
 * Header on Bone. No JavaScript: the nav wraps beneath the lockup on small
 * screens rather than hiding behind a toggle, so every destination and the
 * primary action stay one tap away at 360px.
 */
export function Header() {
  return (
    <header className="border-b rule bg-bone">
      <Container>
        <div className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between lg:py-6">
          <Lockup />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-8">
            <nav aria-label="Primary">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:gap-x-7">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="label text-obsidian/70 transition-colors hover:text-obsidian"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href={cta.requirement.href}
              className="label inline-flex min-h-11 items-center bg-obsidian px-5 py-3 text-bone transition-colors duration-200 hover:bg-evergreen"
            >
              {cta.requirement.label}
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
