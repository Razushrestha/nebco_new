import { AboutHero } from "@/components/sections/AboutHero";
import {
  AboutOurStorySection,
  AboutJourneySection,
  AboutPurposeValuesSection,
  AboutResponsibilitiesSection,
} from "@/components/sections/AboutPageSections";
import { CTABand } from "@/components/sections/SharedSections";

export const metadata = {
  title: "About NEBCO | Three Generations in Nepal's Construction Industry",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutOurStorySection />
      <AboutJourneySection />
      <AboutPurposeValuesSection />
      <AboutResponsibilitiesSection />
      <CTABand
        title="A Stronger Way to Move Projects Forward"
        buttonLabel="Discuss Your Project"
        buttonHref="/contact?type=project"
        variant="red"
      />
    </>
  );
}
