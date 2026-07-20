import { TrustSection } from "@/components/sections/TrustSection";
import { BeyondDistanceSection } from "@/components/sections/BeyondDistanceSection";

/** Sections 05 + 06 — exactly one viewport on desktop. */
export function TrustBeyondSection() {
  return (
    <section className="w-full lg:h-[100svh] lg:min-h-[100svh] lg:max-h-[100svh] lg:flex lg:flex-col lg:overflow-hidden">
      <div className="lg:flex-[0_0_50%] lg:min-h-0">
        <TrustSection compact />
      </div>
      <div className="lg:flex-[0_0_50%] lg:min-h-0">
        <BeyondDistanceSection compact />
      </div>
    </section>
  );
}
