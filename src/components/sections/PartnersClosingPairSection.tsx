import { PartnersCollaborationSection } from "@/components/sections/PartnersCollaborationSection";
import { PartnersWorkWithSection } from "@/components/sections/PartnersWorkWithSection";

/**
 * Partners closing pair - 05 Collaboration Categories | 06 Work With NEBCO
 * Wider diagram column + narrower CTA column, eyebrows aligned.
 */
export function PartnersClosingPairSection() {
  return (
    <section className="partners-closing-pair bg-[#f5f2ed]">
      <div className="partners-closing-pair__grid mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:px-8 sm:py-14 md:items-stretch lg:gap-12 lg:px-10 lg:py-16 xl:gap-14 xl:px-12">
        <PartnersCollaborationSection compact inPair />
        <PartnersWorkWithSection compact inPair />
      </div>
    </section>
  );
}
