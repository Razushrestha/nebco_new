"use client";

import { NrnYouDecideSection } from "@/components/sections/NrnYouDecideSection";
import { NrnStartConfidentlySection } from "@/components/sections/NrnStartConfidentlySection";

/**
 * 06 You Decide + 07 Start Confidently - one desktop viewport.
 */
export function NrnDecideStartBand() {
  return (
    <section className="nrn-decide-start-band flex min-h-0 flex-col">
      <NrnYouDecideSection compact />
      <NrnStartConfidentlySection compact />
    </section>
  );
}
