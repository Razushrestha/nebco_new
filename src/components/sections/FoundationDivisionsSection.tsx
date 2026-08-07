import { FoundationSection } from "@/components/sections/FoundationSection";
import { ThreeDivisionsSection } from "@/components/sections/ThreeDivisionsSection";

/** Sections 01 + 02 — exactly one viewport on desktop. */
export function FoundationDivisionsSection() {
  return (
    <section className="bg-ivory-light w-full lg:h-[100svh] lg:min-h-[100svh] lg:max-h-[100svh] lg:flex lg:flex-col lg:overflow-hidden">
      <div className="lg:flex-[0_0_50%] lg:min-h-0 lg:overflow-hidden">
        <FoundationSection compact />
      </div>
      <div className="lg:flex-[0_0_50%] lg:min-h-0 lg:overflow-hidden">
        <ThreeDivisionsSection compact />
      </div>
    </section>
  );
}
