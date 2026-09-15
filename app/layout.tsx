import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { registration, site } from "@/content/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.brandLine}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} | ${site.brandLine}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.brandLine}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/**
 * Organization schema. Carries the federal identifiers, and deliberately no
 * telephone property: no phone number is published anywhere on this site,
 * structured data included. Set `site.phone` if that ever changes.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  email: site.email,
  slogan: site.brandLine,
  description: site.description,
  logo: `${site.url}/brand/lockup-horizontal-obsidian.svg`,
  identifier: [
    {
      "@type": "PropertyValue",
      name: "UEI",
      value: registration.uei,
    },
    {
      "@type": "PropertyValue",
      name: "CAGE",
      value: registration.cage,
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-obsidian focus:px-4 focus:py-3 focus:text-bone"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        {/* Clears the phone-only sticky action so it never covers the footer. */}
        <div aria-hidden="true" className="h-20 bg-evergreen lg:hidden" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
