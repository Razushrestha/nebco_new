import { ProjectsResponsibilitySection } from "@/components/sections/ProjectsResponsibilitySection";
import { ProjectsStoryFormatSection } from "@/components/sections/ProjectsStoryFormatSection";
import type { ProjectFilter } from "@/components/sections/ProjectsFeaturedSection";

type ProjectsResponsibilityStoryPairSectionProps = {
  onSelect?: (filter: ProjectFilter) => void;
};

/**
 * 04 Work by Responsibility + 05 Project Story Format — one desktop viewport.
 */
export function ProjectsResponsibilityStoryPairSection({
  onSelect,
}: ProjectsResponsibilityStoryPairSectionProps) {
  return (
    <div className="bg-[#f5f2ed] lg:flex lg:min-h-0 lg:flex-col">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="shrink-0 lg:pt-4 lg:pb-1 xl:pt-5">
          <ProjectsResponsibilitySection onSelect={onSelect} compact />
        </div>
        <div className="shrink-0 lg:pb-2 xl:pb-3">
          <ProjectsStoryFormatSection compact />
        </div>
      </div>
    </div>
  );
}
