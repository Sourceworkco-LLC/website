import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CredentialStrip } from "@/components/CredentialStrip";
import { CapabilitiesBand } from "@/components/CapabilitiesBand";
import { Pipeline } from "@/components/Pipeline";
import { Pathways } from "@/components/Pathways";
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
      <CredentialStrip />
      <CapabilitiesBand />
      <Pipeline />
      <Pathways />
      <StatementBand>{site.tagline}</StatementBand>
      <ClosingCTA />
    </>
  );
}
