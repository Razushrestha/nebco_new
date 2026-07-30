import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Clarify goals, context and opportunity.",
    iconSrc: "/development_journey/Understand.png",
  },
  {
    num: "02",
    title: "Evaluate",
    desc: "Study feasibility, risks and potential.",
    iconSrc: "/development_journey/Evaluate.png",
  },
  {
    num: "03",
    title: "Structure",
    desc: "Define strategy, structure and commercial approach.",
    iconSrc: "/development_journey/Structure.png",
  },
  {
    num: "04",
    title: "Design",
    desc: "Shape the vision and technical solution.",
    iconSrc: "/development_journey/Design.png",
  },
  {
    num: "05",
    title: "Finance",
    desc: "Arrange funding and financial structure.",
    iconSrc: "/development_journey/Finance.png",
  },
  {
    num: "06",
    title: "Build",
    desc: "Execute with quality, safety and discipline.",
    iconSrc: "/development_journey/Build.png",
  },
  {
    num: "07",
    title: "Activate",
    desc: "Prepare for operation and long-term value.",
    iconSrc: "/development_journey/Activate.png",
  },
] as const;

function JourneyStepIcon({
  src,
  alt,
  compact,
}: {
  src: string;
  alt: string;
  compact?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={512}
      height={512}
      quality={100}
      unoptimized
      className={`object-contain ${compact ? "w-[36px] h-[36px]" : "w-8 h-8 sm:w-9 sm:h-9"}`}
    />
  );
}

function BuildingWatermark() {
  return (
    <>
      <div
        className="absolute bottom-0 left-0 right-0 h-[70%] journey-grid-bg pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      <svg
        className="absolute -bottom-2 left-0 w-[200px] h-[120px] opacity-[0.06] pointer-events-none hidden lg:block"
        viewBox="0 0 200 120"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#1a1a1a" strokeWidth="0.8">
          <rect x="20" y="30" width="60" height="80" />
          <line x1="20" y1="45" x2="80" y2="45" />
          <line x1="20" y1="60" x2="80" y2="60" />
          <line x1="20" y1="75" x2="80" y2="75" />
          <line x1="50" y1="30" x2="50" y2="110" />
          <rect x="80" y="50" width="40" height="60" />
          <line x1="80" y1="65" x2="120" y2="65" />
          <line x1="80" y1="80" x2="120" y2="80" />
          <rect x="120" y="40" width="50" height="70" />
          <line x1="120" y1="55" x2="170" y2="55" />
          <line x1="120" y1="70" x2="170" y2="70" />
          <line x1="145" y1="40" x2="145" y2="110" />
          <line x1="10" y1="110" x2="190" y2="110" />
        </g>
      </svg>
    </>
  );
}

type DevelopmentJourneySectionProps = {
  compact?: boolean;
};

export function DevelopmentJourneySection({ compact = false }: DevelopmentJourneySectionProps) {
  const headingSize = compact
    ? "text-[1.5rem] sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.95rem]"
    : "text-[1.65rem] sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem]";

  const content = (
    <div className={compact ? "container-nebco w-full h-full flex items-center" : "container-nebco"}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-[minmax(240px,34%)_1fr] w-full ${
          compact ? "gap-8 lg:gap-12 xl:gap-14 items-center" : "gap-8 lg:gap-10 items-start"
        }`}
      >
        <div className="relative z-[1]">
          <SectionEyebrow
            number="03"
            title="DEVELOPMENT JOURNEY"
            className={compact ? "!mb-4 !text-[11px] !tracking-[0.16em]" : undefined}
          />
          <h2
            className={`font-heading font-bold ${headingSize} leading-[1.16] tracking-[-0.02em] text-arch-black max-w-[21rem]`}
          >
            One property. Many decisions. One coordinated direction.
          </h2>
          <BuildingWatermark />
        </div>

        <div className="overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible">
          <div className="min-w-[700px] lg:min-w-0">
            <div className={`grid grid-cols-7 ${compact ? "gap-1" : "gap-2"}`}>
              {STEPS.map((step) => (
                <div key={step.num} className={`flex justify-center ${compact ? "pb-5" : "pb-3"}`}>
                  <JourneyStepIcon src={step.iconSrc} alt={step.title} compact={compact} />
                </div>
              ))}
            </div>

            <div className={`relative flex items-center ${compact ? "h-6" : "h-6"}`}>
              <div className="development-journey-rail absolute left-[7.14%] right-[7.14%] top-1/2 -translate-y-1/2" />
              <div className="grid grid-cols-7 w-full relative z-10">
                {STEPS.map((step) => (
                  <div key={step.num} className="flex justify-center">
                    <span className="development-journey-node" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>

            <div className={`grid grid-cols-7 ${compact ? "gap-0 mt-5" : "gap-1 mt-3"}`}>
              {STEPS.map((step) => (
                <div key={step.num} className="text-center px-1">
                  <p
                    className={`font-heading font-bold text-arch-black leading-tight ${
                      compact ? "text-[13px] sm:text-[14px]" : "text-[12px] sm:text-[13px]"
                    }`}
                  >
                    <span
                      className={`font-mono font-medium text-nebco-red ${
                        compact ? "text-[11px] sm:text-[12px]" : "text-[11px] sm:text-[12px]"
                      }`}
                    >
                      {step.num}
                    </span>{" "}
                    {step.title}
                  </p>
                  <p
                    className={`text-silver-graphite/90 leading-[1.45] mx-auto ${
                      compact
                        ? "text-[10.5px] sm:text-[11px] mt-2 max-w-[9.5rem]"
                        : "text-[10px] sm:text-[11px] mt-1.5 max-w-[9rem]"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="w-full h-full flex items-center py-10 lg:py-6 overflow-hidden">{content}</div>;
  }

  return (
    <section className="bg-ivory-light py-10 lg:py-14 overflow-hidden">
      {content}
    </section>
  );
}
