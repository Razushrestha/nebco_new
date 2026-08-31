"use client";

import { NrnDigitalVisibilitySection } from "@/components/sections/NrnDigitalVisibilitySection";
import { NrnTypicalJourneySection } from "@/components/sections/NrnTypicalJourneySection";

/**
 * 04 Digital Visibility + 05 Typical Journey - one desktop viewport.
 */
export function NrnVisibilityJourneyBand() {
  return (
    <section className="nrn-visibility-journey-band flex min-h-0 flex-col">
      <NrnDigitalVisibilitySection compact />
      <NrnTypicalJourneySection compact />
    </section>
  );
}
