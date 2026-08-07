"use client";

import { PartnersModelSection } from "@/components/sections/PartnersModelSection";
import { PartnersTeamSection } from "@/components/sections/PartnersTeamSection";

/**
 * 01 How the Model Works + 02 Core NEBCO Team — one desktop viewport.
 */
export function PartnersModelTeamBand() {
  return (
    <section className="partners-model-team-band flex flex-col">
      <PartnersModelSection compact />
      <PartnersTeamSection compact />
    </section>
  );
}
