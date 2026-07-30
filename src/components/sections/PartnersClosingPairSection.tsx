import { PartnersCollaborationSection } from "@/components/sections/PartnersCollaborationSection";
import { PartnersWorkWithSection } from "@/components/sections/PartnersWorkWithSection";

/**
 * Partners closing pair — 05 Collaboration Categories | 06 Work With NEBCO
 * Tight under section 04; side-by-side reads as one screen.
 */
export function PartnersClosingPairSection() {
  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-8 px-6 pb-12 pt-1 sm:gap-10 sm:px-8 sm:pb-14 md:grid-cols-2 md:items-center md:gap-8 md:pb-12 lg:gap-10 lg:px-10 lg:pb-14 xl:gap-12 xl:px-12">
        <div className="min-w-0">
          <PartnersCollaborationSection compact />
        </div>
        <div className="min-w-0 md:pl-2 lg:pl-4">
          <PartnersWorkWithSection compact />
        </div>
      </div>
    </section>
  );
}
