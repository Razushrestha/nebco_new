import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const RED = "#bc2026";

const STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Clarify goals, context and opportunity.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M16 4c-4.4 0-8 3.1-8 7 0 5.2 8 13 8 13s8-7.8 8-13c0-3.9-3.6-7-8-7z" stroke={RED} strokeWidth="1.2" />
        <circle cx="16" cy="11" r="2.5" stroke={RED} strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Evaluate",
    desc: "Study feasibility, risks and potential.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="14" cy="14" r="7" stroke={RED} strokeWidth="1.2" />
        <path d="M19 19l6 6" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 18v4M14 16v6M18 14v8" stroke={RED} strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Structure",
    desc: "Define strategy, structure and commercial approach.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M6 20l6-10 6 6 8-12" stroke={RED} strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="5" y="22" width="8" height="6" stroke={RED} strokeWidth="1.1" />
        <rect x="13" y="18" width="8" height="10" stroke={RED} strokeWidth="1.1" />
        <rect x="21" y="14" width="6" height="14" stroke={RED} strokeWidth="1.1" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Design",
    desc: "Shape the vision and technical solution.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M8 24 L20 8 L26 14 L14 28 Z" stroke={RED} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M6 26h20" stroke={RED} strokeWidth="1.1" strokeLinecap="round" />
        <path d="M22 10l4-4" stroke={RED} strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Finance",
    desc: "Arrange funding and financial structure.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <ellipse cx="16" cy="22" rx="9" ry="3" stroke={RED} strokeWidth="1.1" />
        <ellipse cx="16" cy="18" rx="9" ry="3" stroke={RED} strokeWidth="1.1" />
        <ellipse cx="16" cy="14" rx="9" ry="3" stroke={RED} strokeWidth="1.1" />
        <path d="M7 22v-2M25 22v-2" stroke={RED} strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Build",
    desc: "Execute with quality, safety and discipline.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M6 26h20M10 26V14h8v12" stroke={RED} strokeWidth="1.2" />
        <path d="M14 14V8h8v6" stroke={RED} strokeWidth="1.2" />
        <path d="M14 8h10" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 8v3" stroke={RED} strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Activate",
    desc: "Prepare for operation and long-term value.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="14" cy="18" r="6" stroke={RED} strokeWidth="1.2" />
        <path d="M14 18v-4" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 18h6" stroke={RED} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M23 15v6" stroke={RED} strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

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
            <div className={`grid grid-cols-7 ${compact ? "gap-1 [&_svg]:w-[34px] [&_svg]:h-[34px]" : "gap-2"}`}>
              {STEPS.map((step) => (
                <div key={step.num} className={`flex justify-center ${compact ? "pb-5" : "pb-3"}`}>
                  {step.icon}
                </div>
              ))}
            </div>

            <div className={`relative flex items-center ${compact ? "h-5" : "h-5"}`}>
              <div className="absolute left-[7.14%] right-[7.14%] top-1/2 -translate-y-1/2 h-px bg-nebco-red/90" />
              <div className="grid grid-cols-7 w-full relative z-10">
                {STEPS.map((step) => (
                  <div key={step.num} className="flex justify-center">
                    <span
                      className={`inline-block rounded-full border border-nebco-red bg-ivory-light ${
                        compact ? "w-[7px] h-[7px]" : "w-[7px] h-[7px]"
                      }`}
                      aria-hidden="true"
                    />
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
