"use client";

import { NrnDistanceProblemSection } from "@/components/sections/NrnDistanceProblemSection";
import { NrnCoordinationSection } from "@/components/sections/NrnCoordinationSection";

/**
 * 01 Distance Problem + 02/03 Coordination - one desktop viewport.
 */
export function NrnProblemCoordinationBand() {
  return (
    <section className="nrn-problem-coordination-band flex flex-col">
      <NrnDistanceProblemSection />
      <NrnCoordinationSection />
    </section>
  );
}
