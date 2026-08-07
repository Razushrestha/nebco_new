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

function JourneyStepIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={512}
      height={512}
      quality={100}
      unoptimized
      className="development-journey-step-icon object-contain"
    />
  );
}

function DevelopmentJourneyIntro({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`development-journey-intro ${compact ? "development-journey-intro--compact" : ""}`}>
      <div className="development-journey-intro__copy">
        <SectionEyebrow
          number="03"
          title="DEVELOPMENT JOURNEY"
          className={
            compact
              ? "!mb-4 !text-[11px] !tracking-[0.16em] lg:!mb-[1.15rem]"
              : "!mb-5 !text-[11px] !tracking-[0.16em] sm:!text-[12px] lg:!mb-6"
          }
        />
        <h2 className="development-journey-intro__heading">
          <span className="block">One property.</span>
          <span className="block">Many decisions.</span>
          <span className="block">One coordinated</span>
          <span className="block">direction.</span>
        </h2>
      </div>

      <div className="development-journey-intro__art" aria-hidden="true">
        <Image
          src="/Web_images/development_journey-trim.png"
          alt=""
          width={1536}
          height={645}
          quality={100}
          unoptimized
          className="development-journey-intro__art-img"
          sizes="(max-width: 1024px) 55vw, 320px"
        />
      </div>
    </div>
  );
}

function JourneyTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`development-journey-timeline ${compact ? "development-journey-timeline--compact" : ""} ${
        compact ? "w-full min-w-0" : "overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible"
      }`}
    >
      <div className={compact ? "w-full min-w-0" : "min-w-[700px] lg:min-w-0"}>
        <div className="development-journey-timeline__icons grid grid-cols-7 gap-0">
          {STEPS.map((step) => (
            <div key={`${step.num}-icon`} className="development-journey-timeline__icon-cell flex justify-center">
              <JourneyStepIcon src={step.iconSrc} alt={step.title} />
            </div>
          ))}
        </div>

        <div className="development-journey-timeline__rail-row relative flex items-center">
          <div className="development-journey-rail development-journey-rail--span absolute top-1/2 -translate-y-1/2" />
          <div className="development-journey-timeline__nodes relative z-10 grid w-full grid-cols-7">
            {STEPS.map((step) => (
              <div key={`${step.num}-node`} className="flex justify-center">
                <span className="development-journey-node" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <div className="development-journey-timeline__copy grid grid-cols-7 gap-0">
          {STEPS.map((step) => (
            <div key={`${step.num}-copy`} className="development-journey-timeline__copy-cell text-center">
              <p className="development-journey-timeline__title">
                <span className="font-mono font-medium text-nebco-red">{step.num}</span> {step.title}
              </p>
              <p className="development-journey-timeline__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type DevelopmentJourneySectionProps = {
  compact?: boolean;
};

export function DevelopmentJourneySection({ compact = false }: DevelopmentJourneySectionProps) {
  const content = (
    <div className={`container-nebco ${compact ? "h-full w-full" : ""}`}>
      <div
        className={`grid w-full grid-cols-1 ${
          compact
            ? "h-full min-h-0 items-stretch gap-8 py-8 lg:grid-cols-[minmax(0,36%)_minmax(0,1fr)] lg:gap-10 lg:py-5 xl:gap-12"
            : "items-start gap-8 lg:grid-cols-[minmax(240px,34%)_1fr] lg:gap-10"
        }`}
      >
        <DevelopmentJourneyIntro compact={compact} />

        <div className={`min-w-0 ${compact ? "flex items-center" : ""}`}>
          <JourneyTimeline compact={compact} />
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="h-full min-h-0 w-full overflow-hidden">{content}</div>;
  }

  return (
    <section className="overflow-hidden bg-ivory-light py-10 lg:py-14">
      {content}
    </section>
  );
}
