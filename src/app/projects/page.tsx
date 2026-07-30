"use client";

import { useState } from "react";
import { ProjectsHero } from "@/components/sections/ProjectsHero";
import { ProjectsFeaturedSection, type ProjectFilter } from "@/components/sections/ProjectsFeaturedSection";
import { ProjectsSelectedWorkSection } from "@/components/sections/ProjectsSelectedWorkSection";
import { ProjectsResponsibilityStoryPairSection } from "@/components/sections/ProjectsResponsibilityStoryPairSection";
import { ProjectsClosingCtaSection } from "@/components/sections/ProjectsClosingCtaSection";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  return (
    <>
      <ProjectsHero />

      <ProjectsFeaturedSection filter={filter} onFilterChange={setFilter} />

      <ProjectsSelectedWorkSection />

      <ProjectsResponsibilityStoryPairSection onSelect={setFilter} />

      <ProjectsClosingCtaSection />
    </>
  );
}
