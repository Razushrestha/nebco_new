import { AboutHero } from "@/components/sections/AboutHero";
import {
  AboutOurStorySection,
  AboutJourneySection,
  AboutPurposeSection,
  AboutValuesSection,
  AboutResponsibilitiesSection,
  AboutLeadershipSection,
  AboutCredentialsSection,
} from "@/components/sections/AboutPageSections";
import { CTABand } from "@/components/sections/SharedSections";

export const metadata = {
  title: "About NEBCO | Three Generations in Nepal's Construction Industry",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <div
        className="lg:flex lg:min-h-[calc(100svh-88px)] lg:flex-col lg:px-10 lg:py-7 xl:px-12 xl:py-8"
        style={{ backgroundColor: "#f5f2ed" }}
      >
        <AboutOurStorySection />
        <AboutJourneySection />
      </div>
      <AboutPurposeSection />
      <div
        className="lg:flex lg:h-[calc(100svh-88px)] lg:min-h-[640px] lg:flex-col lg:overflow-hidden"
        style={{ backgroundColor: "#f5f2ed" }}
      >
        <AboutValuesSection />
        <AboutResponsibilitiesSection />
      </div>
      <AboutLeadershipSection />
      <AboutCredentialsSection />
      <CTABand
        title="A Stronger Way to Move Projects Forward"
        buttonLabel="Discuss Your Project"
        buttonHref="/contact?type=project"
        variant="red"
      />
    </>
  );
}
