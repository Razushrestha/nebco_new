import { NrnHero } from "@/components/sections/NrnHero";
import { NrnProblemCoordinationBand } from "@/components/sections/NrnProblemCoordinationBand";
import { NrnVisibilityJourneyBand } from "@/components/sections/NrnVisibilityJourneyBand";
import { NrnDecideStartBand } from "@/components/sections/NrnDecideStartBand";

export default function NRNPage() {
  return (
    <>
      <NrnHero />

      <NrnProblemCoordinationBand />

      <NrnVisibilityJourneyBand />

      <NrnDecideStartBand />
    </>
  );
}
