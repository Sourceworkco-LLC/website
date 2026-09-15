import Link from "next/link";
import { Container } from "./Container";
import { Lockup } from "./Lockup";
import { cta, nav, registration, site } from "@/content/site";

const actions = [cta.requirement, cta.supplier, cta.teaming];

/** Footer on Evergreen. All text is Bone: Obsidian on Evergreen fails AA. */
export function Footer() {
  return (
    <footer className="bg-evergreen text-bone">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Lockup href={null} className="text-bone" />
            <p className="label mt-8 text-bone/70">{site.tagline}</p>

            <dl className="mt-10 space-y-2 text-sm text-bone/75">
              <div className="flex gap-3">
                <dt className="label text-bone/50">UEI</dt>
                <dd className="code">{registration.uei}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="label text-bone/50">CAGE</dt>
                <dd className="code">{registration.cage}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="label text-bone/50">SAM.gov</dt>
                <dd className="label text-bone">Active</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <nav aria-label="Footer">
              <h2 className="label text-bone/70">Site</h2>
              <ul className="mt-4 space-y-2">
                {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
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
              <h2 className="label text-bone/70">Start</h2>
              <ul className="mt-4 space-y-2">
                {actions.map((action) => (
                  <li key={action.href}>
                    <Link
                      href={action.href}
                      className="text-sm text-bone/85 underline-offset-4 transition-colors hover:text-bone hover:underline"
                    >
                      {action.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={cta.capabilities.href}
                    download
                    className="text-sm text-bone/85 underline-offset-4 transition-colors hover:text-bone hover:underline"
                  >
                    {cta.capabilities.label}
                  </a>
                </li>
              </ul>
            </div>

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
                <li>{site.serviceArea}</li>
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
