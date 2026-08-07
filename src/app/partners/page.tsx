import { PartnersHero } from "@/components/sections/PartnersHero";
import { PartnersModelTeamBand } from "@/components/sections/PartnersModelTeamBand";
import { PartnersNetworkSection } from "@/components/sections/PartnersNetworkSection";
import { PartnersResponsibilitiesSection } from "@/components/sections/PartnersResponsibilitiesSection";
import { PartnersClosingPairSection } from "@/components/sections/PartnersClosingPairSection";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />

      <PartnersModelTeamBand />

      <PartnersNetworkSection />

      <PartnersResponsibilitiesSection />

      <PartnersClosingPairSection />
    </>
  );
}
