"use client";

import { useState } from "react";
import { ConsultingHero } from "@/components/sections/ConsultingHero";
import { ConsultingQuestionSection } from "@/components/sections/ConsultingQuestionSection";
import {
  ConsultingServeContent,
  ConsultingServeTabs,
  type AudienceId,
} from "@/components/sections/ConsultingServeSection";
import { ConsultingPillarsSection } from "@/components/sections/ConsultingPillarsSection";
import {
  ConsultingDevelopmentProcessPanel,
  ConsultingPackagesStrip,
} from "@/components/sections/ConsultingPackagesSection";
import { ConsultingDisciplinesSection } from "@/components/sections/ConsultingDisciplinesSection";
import { ConsultingEngageEarlySection } from "@/components/sections/ConsultingEngageEarlySection";

export default function ConsultingPage() {
  const [serveId, setServeId] = useState<AudienceId>("landowners");
  const [packageId, setPackageId] = useState("land");

  return (
    <>
      <ConsultingHero />

      <div className="consulting-intro-screen">
        <ConsultingQuestionSection />
        <div className="consulting-intro-screen__serve">
          <ConsultingServeTabs activeId={serveId} onSelect={setServeId} />
          <ConsultingServeContent activeId={serveId} />
        </div>
      </div>

      <div className="consulting-pillars-packages-screen">
        <ConsultingPillarsSection />
        <ConsultingPackagesStrip activeId={packageId} onSelect={setPackageId} />
      </div>

      <ConsultingDevelopmentProcessPanel packageId={packageId} />

      <div className="consulting-closing-screen">
        <ConsultingDisciplinesSection />
        <ConsultingEngageEarlySection />
      </div>
    </>
  );
}
