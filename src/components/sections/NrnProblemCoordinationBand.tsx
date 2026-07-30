"use client";

import { NrnDistanceProblemSection } from "@/components/sections/NrnDistanceProblemSection";
import { NrnCoordinationSection } from "@/components/sections/NrnCoordinationSection";

/**
 * 01 Distance Problem + 02/03 Coordination — one desktop viewport.
 */
export function NrnProblemCoordinationBand() {
  return (
    <section className="flex flex-col lg:min-h-[100svh]">
      <NrnDistanceProblemSection />
      <NrnCoordinationSection />
    </section>
  );
}
