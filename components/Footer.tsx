import Link from "next/link";
import { Container } from "./Container";
import { Lockup } from "./Lockup";
import { nav, site } from "@/content/site";

/** Footer on Evergreen. All text is Bone: Obsidian on Evergreen fails AA. */
export function Footer() {
  return (
    <footer className="bg-evergreen text-bone">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 md:py-20">
          <div>
            <Lockup href={null} className="text-bone" />
            <p className="label mt-8 text-bone/70">{site.tagline}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label="Footer">
              <h2 className="label text-bone/70">Site</h2>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-bone/85 underline-offset-4 transition-colors hover:text-bone hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="label text-bone/70">Contact</h2>
              <ul className="mt-4 space-y-2 text-sm text-bone/85">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="underline-offset-4 transition-colors hover:text-bone hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t rule-on-dark py-8">
          <p className="label text-bone/70">
            &copy; {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
