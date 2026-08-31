import { DevelopmentJourneySection } from "@/components/sections/DevelopmentJourneySection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";

/** Sections 03 + 04 - exactly one viewport on desktop. */
export function DevelopmentWorkSection() {
  return (
    <section className="w-full bg-ivory-light lg:flex lg:h-[100svh] lg:max-h-[100svh] lg:min-h-[100svh] lg:flex-col">
      <div className="lg:flex lg:min-h-0 lg:flex-[0_0_44%] lg:items-stretch lg:overflow-hidden">
        <DevelopmentJourneySection compact />
      </div>
      <div className="border-t border-soft-concrete/60 lg:min-h-0 lg:flex-[0_0_56%] lg:overflow-hidden lg:border-t-0">
        <SelectedWorkSection compact />
      </div>
    </section>
  );
}
