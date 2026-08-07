import { StartProjectSection } from "@/components/sections/StartProjectSection";
import { HomeFooter } from "@/components/sections/HomeFooter";

/** Sections 07 + Footer — exactly one viewport on desktop. */
export function HomeClosingSection() {
  return (
    <section className="w-full lg:h-[100svh] lg:min-h-[100svh] lg:max-h-[100svh] lg:flex lg:flex-col lg:overflow-hidden">
      <div className="lg:flex-[0_0_40%] lg:min-h-0 bg-arch-black">
        <StartProjectSection compact />
      </div>
      <div className="lg:flex-[0_0_60%] lg:min-h-0 flex flex-col">
        <HomeFooter />
      </div>
    </section>
  );
}
