import { NrnHero } from "@/components/sections/NrnHero";
import { NrnProblemCoordinationBand } from "@/components/sections/NrnProblemCoordinationBand";
import { NrnDigitalVisibilitySection } from "@/components/sections/NrnDigitalVisibilitySection";
import { NrnTypicalJourneySection } from "@/components/sections/NrnTypicalJourneySection";
import { NrnYouDecideSection } from "@/components/sections/NrnYouDecideSection";
import { NrnStartConfidentlySection } from "@/components/sections/NrnStartConfidentlySection";

export default function NRNPage() {
  return (
    <>
      <NrnHero />

      <NrnProblemCoordinationBand />

      <NrnDigitalVisibilitySection />

      <NrnTypicalJourneySection />

      <NrnYouDecideSection />

      <NrnStartConfidentlySection />
    </>
  );
}
