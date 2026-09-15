import type { Metadata } from "next";
import { HeroCinematic } from "@/components/HeroCinematic";
import { CredentialStrip } from "@/components/CredentialStrip";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { BrandMoment } from "@/components/BrandMoment";
import { ProcessSequence } from "@/components/ProcessSequence";
import { ImageBreak } from "@/components/ImageBreak";
import { GovernmentProfile } from "@/components/GovernmentProfile";
import { Principles } from "@/components/Principles";
import { HomeIntake } from "@/components/HomeIntake";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.brandLine}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.brandLine}`,
    description: site.description,
    url: "/",
  },
};

/**
 * Home. Four jobs: be memorable, explain the company in twenty seconds,
 * establish legitimacy, create the next action. Everything else lives on a
 * deeper page. Resist adding sections here.
 */
export default function HomePage() {
  return (
    <>
      <HeroCinematic />
      <CredentialStrip />
      <CapabilityGrid />
      <BrandMoment />
      <ProcessSequence />
      <ImageBreak slot="breakTerminal" statement="The right capability. Wherever it lives." />
      <GovernmentProfile />
      <Principles />
      <HomeIntake />
    </>
  );
}
