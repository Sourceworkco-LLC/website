import Link from "next/link";
import { Container } from "./Container";
import { Lockup } from "./Lockup";
import { nav } from "@/content/site";

/**
 * Header on Bone. No JavaScript: the nav wraps beneath the lockup on small
 * screens rather than hiding behind a toggle, so every destination is one tap
 * away at 360px.
 */
export function Header() {
  return (
    <header className="border-b rule bg-bone">
      <Container>
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <Lockup />
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
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
        </div>
      </Container>
    </header>
  );
}
