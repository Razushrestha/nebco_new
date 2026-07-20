import { DevelopmentJourneySection } from "@/components/sections/DevelopmentJourneySection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";

/** Sections 03 + 04 — exactly one viewport on desktop. */
export function DevelopmentWorkSection() {
  return (
    <section className="bg-ivory-light w-full lg:h-[100svh] lg:min-h-[100svh] lg:max-h-[100svh] lg:flex lg:flex-col lg:overflow-hidden">
      <div className="lg:flex-[0_0_40%] lg:min-h-0">
        <DevelopmentJourneySection compact />
      </div>
      <div className="lg:flex-[0_0_60%] lg:min-h-0 border-t border-soft-concrete/60 lg:border-t-0">
        <SelectedWorkSection compact />
      </div>
    </section>
  );
}
