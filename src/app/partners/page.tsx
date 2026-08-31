import { PartnersHero } from "@/components/sections/PartnersHero";
import { PartnersModelSection } from "@/components/sections/PartnersModelSection";
import { PartnersTeamSection } from "@/components/sections/PartnersTeamSection";
import { PartnersNetworkSection } from "@/components/sections/PartnersNetworkSection";
import { PartnersResponsibilitiesSection } from "@/components/sections/PartnersResponsibilitiesSection";
import { PartnersClosingPairSection } from "@/components/sections/PartnersClosingPairSection";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />

      <PartnersModelSection />

      <PartnersTeamSection />

      <PartnersNetworkSection />

      <PartnersResponsibilitiesSection />

      <PartnersClosingPairSection />
    </>
  );
}
