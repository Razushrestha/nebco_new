import { TrustSection } from "@/components/sections/TrustSection";
import { BeyondDistanceSection } from "@/components/sections/BeyondDistanceSection";

/** Sections 05 + 06 — exactly one viewport on desktop. */
export function TrustBeyondSection() {
  return (
    <section className="w-full bg-black lg:flex lg:h-[100svh] lg:max-h-[100svh] lg:min-h-[100svh] lg:flex-col">
      <div className="lg:flex lg:min-h-0 lg:flex-[0_0_50%] lg:items-stretch">
        <TrustSection compact />
      </div>
      <div className="lg:min-h-0 lg:flex-[0_0_50%] flex flex-col bg-nebco-red">
        <BeyondDistanceSection compact />
      </div>
    </section>
  );
}
