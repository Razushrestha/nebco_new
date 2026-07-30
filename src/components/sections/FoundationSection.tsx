import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FoundationMilestoneArt } from "@/components/ui/FoundationMilestoneArt";
import { FoundationTimelineRail } from "@/components/ui/FoundationTimelineRail";

const MILESTONES = [
  {
    era: "1990s",
    title: "Construction Roots",
    desc: "Built on sites. Learned on projects. Earned trust.",
    imageSrc: "/foundation_new/construction%20roots.png",
    muted: true,
  },
  {
    era: "2001",
    title: "Established NEBCO",
    desc: "Formal structure. Stronger systems. Wider capability.",
    imageSrc: "/foundation_new/Established_Nebco.png",
    muted: true,
  },
  {
    era: "Today",
    title: "Integrated Platform",
    desc: "Construction, consulting and investments—aligned.",
    imageSrc: "/foundation_new/integrated%20platform.png",
    muted: false,
  },
] as const;

interface FoundationSectionProps {
  compact?: boolean;
}

export function FoundationSection({ compact = false }: FoundationSectionProps) {
  const headingSize = compact
    ? "text-[1.45rem] sm:text-[1.6rem] lg:text-[1.72rem] xl:text-[1.88rem]"
    : "text-[1.75rem] sm:text-[2rem] lg:text-[2.15rem] xl:text-[2.35rem]";

  const milestonesClass = compact ? "foundation-milestones foundation-milestones--compact" : "foundation-milestones";

  const content = (
    <div className={compact ? "container-nebco w-full h-full flex items-center" : "container-nebco"}>
      <div
        className={`foundation-section-layout w-full ${
          compact ? "foundation-section-layout--compact" : ""
        }`}
      >
        <div className="foundation-section-heading">
          <SectionEyebrow
            number="01"
            title="FOUNDATION"
            className={compact ? "!mb-3 !text-[11px] !tracking-[0.16em]" : "!mb-4"}
          />
          <h2 className={`font-heading font-bold ${headingSize} leading-[1.18] tracking-tight text-arch-black`}>
            Construction gave us the foundation.
          </h2>
          <p className={`font-heading font-bold ${headingSize} leading-[1.18] tracking-tight text-nebco-red mt-1`}>
            Our clients showed us the bigger opportunity.
          </p>
        </div>

        <div className={milestonesClass}>
          <div className="foundation-milestones-grid">
            {MILESTONES.map((item) => (
              <div key={`${item.era}-art`} className="foundation-milestone-column">
                <FoundationMilestoneArt
                  src={item.imageSrc}
                  alt={item.title}
                  muted={item.muted}
                />
              </div>
            ))}

            <div className="foundation-milestones-rail">
              <FoundationTimelineRail />
            </div>

            {MILESTONES.map((item) => (
              <div key={`${item.era}-copy`} className="foundation-milestone-column">
                <div className="foundation-milestone-copy">
                  <p className="foundation-milestone-era">{item.era}</p>
                  <h3 className="foundation-milestone-title">{item.title}</h3>
                  <p className="foundation-milestone-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="w-full h-full flex items-center py-6 lg:py-0">{content}</div>;
  }

  return <section className="bg-ivory-light py-10 lg:py-14">{content}</section>;
}
