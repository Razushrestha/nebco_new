import { ConstructionHero } from "@/components/sections/ConstructionHero";
import { ConstructionCapabilitySection } from "@/components/sections/ConstructionCapabilitySection";
import { ConstructionEngageSection } from "@/components/sections/ConstructionEngageSection";
import { ConstructionShowcaseSection } from "@/components/sections/ConstructionShowcaseSection";
import { ConstructionStagesSection } from "@/components/sections/ConstructionStagesSection";
import { ConstructionSystemSection } from "@/components/sections/ConstructionSystemSection";
import { CTABand } from "@/components/sections/SharedSections";

export default function ConstructionPage() {
  return (
    <>
      <ConstructionHero />
      <ConstructionCapabilitySection />
      <ConstructionStagesSection />
      <ConstructionEngageSection />
      <ConstructionSystemSection />
      <ConstructionShowcaseSection />

      <CTABand
        title="Ready to discuss the build?"
        subtitle="Share the available documents and site information. We will help define what is required for the right construction proposal."
        buttonLabel="Request a Construction Proposal"
        buttonHref="/contact?type=construction"
        variant="red"
      />
    </>
  );
}
