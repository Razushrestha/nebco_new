import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FoundationMilestoneArt } from "@/components/ui/FoundationMilestoneArt";

const MILESTONES = [
  {
    era: "1990s",
    title: "Construction Roots",
    desc: "Built on sites. Learned on projects. Earned trust.",
    imageSrc: "/Web_images/foundation1-trim.png",
    imageWidth: 1410,
    imageHeight: 841,
    variant: "roots" as const,
  },
  {
    era: "2001",
    title: "Established NEBCO",
    desc: "Formal structure. Stronger systems. Wider capability.",
    imageSrc: "/Web_images/foundation2-trim.png",
    imageWidth: 1387,
    imageHeight: 859,
    variant: "established" as const,
  },
  {
    era: "Today",
    title: "Integrated Platform",
    desc: "Construction, consulting and investments - aligned.",
    imageSrc: "/Web_images/foundation3-trim.png",
    imageWidth: 1378,
    imageHeight: 826,
    variant: "today" as const,
  },
] as const;

interface FoundationSectionProps {
  compact?: boolean;
}

export function FoundationSection({ compact = false }: FoundationSectionProps) {
  const milestonesClass = compact ? "foundation-milestones foundation-milestones--compact" : "foundation-milestones";

  const content = (
    <div
      className={
        compact
          ? "container-nebco flex h-full min-h-0 w-full flex-col justify-start overflow-hidden pt-1 lg:pt-3"
          : "container-nebco"
      }
    >
      <div
        className={`foundation-section-layout w-full ${
          compact ? "foundation-section-layout--compact" : ""
        }`}
      >
        <div className="foundation-section-heading">
          <SectionEyebrow number="01" title="FOUNDATION" className="foundation-section-heading__eyebrow" />
          <h2 className="foundation-section-heading__title">
            <span className="foundation-section-heading__line foundation-section-heading__line--black">
              Construction gave us the
            </span>
            <span className="foundation-section-heading__line foundation-section-heading__line--black">
              foundation.
            </span>
            <span className="foundation-section-heading__line foundation-section-heading__line--red">
              Our clients showed us the
            </span>
            <span className="foundation-section-heading__line foundation-section-heading__line--red">
              bigger opportunity.
            </span>
          </h2>
        </div>

        <div className={milestonesClass}>
          <div className="foundation-milestones-grid">
            {MILESTONES.map((item, index) => (
              <article key={item.era} className="foundation-milestone">
                <FoundationMilestoneArt
                  src={item.imageSrc}
                  alt={item.title}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  variant={item.variant}
                />

                <div className="foundation-milestone-marker" aria-hidden="true">
                  {index > 0 ? <span className="foundation-milestone-marker__dot" /> : null}
                </div>

                <div className="foundation-milestone-copy">
                  <p className="foundation-milestone-era">{item.era}</p>
                  <h3 className="foundation-milestone-title">{item.title}</h3>
                  <p className="foundation-milestone-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="h-full min-h-0 w-full overflow-hidden py-5 lg:py-4">{content}</div>;
  }

  return <section className="bg-ivory-light py-10 lg:py-14">{content}</section>;
}
