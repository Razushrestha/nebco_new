"use client";

import { ConsultingHero } from "@/components/sections/ConsultingHero";
import { ConsultingQuestionSection } from "@/components/sections/ConsultingQuestionSection";
import { ConsultingServeSection } from "@/components/sections/ConsultingServeSection";
import { ConsultingPillarsSection } from "@/components/sections/ConsultingPillarsSection";
import { ConsultingPackagesSection } from "@/components/sections/ConsultingPackagesSection";
import { ConsultingDisciplinesSection } from "@/components/sections/ConsultingDisciplinesSection";
import { ConsultingEngageEarlySection } from "@/components/sections/ConsultingEngageEarlySection";

export default function ConsultingPage() {
  return (
    <>
      <ConsultingHero />

      <ConsultingQuestionSection />

      <ConsultingServeSection />

      <ConsultingPillarsSection />

      <ConsultingPackagesSection />

      <ConsultingDisciplinesSection />

      <ConsultingEngageEarlySection />
    </>
  );
}
