import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CapabilitiesBand } from "@/components/CapabilitiesBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatementBand } from "@/components/StatementBand";
import { ClosingCTA } from "@/components/ClosingCTA";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilitiesBand />
      <ProcessSteps />
      <StatementBand>{site.tagline}</StatementBand>
      <ClosingCTA />
    </>
  );
}
