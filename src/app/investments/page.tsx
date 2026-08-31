"use client";

import { InvestmentsHero } from "@/components/sections/InvestmentsHero";
import { InvestmentsApproachPairSection } from "@/components/sections/InvestmentsApproachPairSection";
import { InvestmentsModelsProcessPairSection } from "@/components/sections/InvestmentsModelsProcessPairSection";
import { InvestmentsLookForParticipantPairSection } from "@/components/sections/InvestmentsLookForParticipantPairSection";
import { InvestmentsClosingPairSection } from "@/components/sections/InvestmentsClosingPairSection";

export default function InvestmentsPage() {
  return (
    <>
      <InvestmentsHero />
      <InvestmentsApproachPairSection />
      <InvestmentsModelsProcessPairSection />
      <InvestmentsLookForParticipantPairSection />
      <InvestmentsClosingPairSection />
    </>
  );
}
