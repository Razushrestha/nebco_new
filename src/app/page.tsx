import { HomeHero } from "@/components/sections/HomeHero";
import { FoundationDivisionsSection } from "@/components/sections/FoundationDivisionsSection";
import { DevelopmentWorkSection } from "@/components/sections/DevelopmentWorkSection";
import { TrustBeyondSection } from "@/components/sections/TrustBeyondSection";
import { HomeClosingSection } from "@/components/sections/HomeClosingSection";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <HomeHero />
      <FoundationDivisionsSection />
      <DevelopmentWorkSection />
      <TrustBeyondSection />
      <HomeClosingSection />
    </div>
  );
}
