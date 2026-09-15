import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { contactForm } from "@/content/forms";
import { cta, registration, site } from "@/content/site";

const description =
  "Contact Sourcework LLC. Nashville, Tennessee, nationwide service. Requirements and RFQs go through the requirement intake; everything else starts here.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact | ${site.name}`, description, url: "/contact" },
};

const routes = [
  { ...cta.requirement, note: "Solicitations, RFQs, line items, statements of work." },
  { ...cta.supplier, note: "Manufacturers, distributors, and service providers." },
  { ...cta.teaming, note: "Primes looking for a subcontract or teaming partner." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Get to the right desk."
        intro="Requirements, supplier registrations, and teaming inquiries each have their own intake. Anything else starts here."
      />

      <Section label="Contact">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <IntakeForm
              formType="contact"
              groups={contactForm}
              submitLabel="Send message"
              successTitle="Message sent."
              successBody={`You will hear back from ${site.email} directly.`}
            />
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <SectionLabel>Faster routes</SectionLabel>
            <ul className="mt-8 border-t rule">
              {routes.map((route) => (
                <li key={route.href} className="border-b rule py-5">
                  <Link
                    href={route.href}
                    className="label text-obsidian underline underline-offset-4 transition-colors hover:text-evergreen"
                  >
                    {route.label}
                  </Link>
                  <p className="mt-2 text-sm text-obsidian/70">{route.note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <SectionLabel>Direct</SectionLabel>
              <ul className="mt-6 space-y-6">
                <li>
                  <span className="label text-stone-ink">Email</span>
                  <p className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-obsidian underline underline-offset-4 transition-colors hover:text-evergreen"
                    >
                      {site.email}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="label text-stone-ink">Location</span>
                  <p className="mt-2 text-obsidian">{site.location}</p>
                  <p className="text-sm text-obsidian/70">
                    {site.serviceArea} service area
                  </p>
                </li>
                <li>
                  <span className="label text-stone-ink">Registration</span>
                  <p className="code mt-2 text-sm text-obsidian">
                    UEI {registration.uei}
                  </p>
                  <p className="code text-sm text-obsidian">
                    CAGE {registration.cage}
                  </p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
