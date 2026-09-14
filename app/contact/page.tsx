import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

const description =
  "Tell Sourcework what you need sourced or solved. Nashville, Tennessee. Write to ryan@sourceworkco.com.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact | ${site.name}`, description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Start a conversation."
        intro="Send the requirement, the solicitation, or the problem. You will get a direct answer on whether we are the right party for it."
      />

      <Section label="Contact form">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <SectionLabel>Direct</SectionLabel>
            <ul className="mt-8 space-y-6">
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
              </li>
              <li>
                <span className="label text-stone-ink">Registered</span>
                <p className="mt-2 text-obsidian">
                  {site.legalName}, State of Tennessee
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
