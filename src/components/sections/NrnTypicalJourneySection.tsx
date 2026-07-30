"use client";

const RED = "#bc2026";
const NODE = "#5c4033";
const BG = "#f3f1ec";

const STEPS = [
  {
    num: "01",
    title: "Online Consultation",
    subtitle: "We understand your goals and property.",
    icon: "consult",
  },
  {
    num: "02",
    title: "Property Review",
    subtitle: "Documents, site and market assessment.",
    icon: "review",
  },
  {
    num: "03",
    title: "Feasibility & Plan",
    subtitle: "Options, budget and timeline.",
    icon: "feasibility",
  },
  {
    num: "04",
    title: "Team & Approvals",
    subtitle: "Assemble team and begin approvals.",
    icon: "team",
  },
  {
    num: "05",
    title: "Finance & Budget",
    subtitle: "Funding plan and cost confirmations.",
    icon: "finance",
  },
  {
    num: "06",
    title: "Construction",
    subtitle: "Build with quality, safety and reporting.",
    icon: "construction",
  },
  {
    num: "07",
    title: "Reporting & Decisions",
    subtitle: "You review, decide and approve.",
    icon: "reporting",
  },
  {
    num: "08",
    title: "Handover / Activation",
    subtitle: "Final handover and property activation.",
    icon: "handover",
  },
] as const;

function StepIcon({ type }: { type: (typeof STEPS)[number]["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: "mx-auto",
  };
  const s = {
    stroke: RED,
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "consult":
      return (
        <svg {...common}>
          <path d="M5 7.5h11.5v8.2H11l-3.2 2.8v-2.8H5V7.5Z" {...s} />
          <path d="M14.5 9.8h8.5v7.2H19l-2.4 2.2v-2.2h-2.1" {...s} />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M8 4.5h8.5L20.5 8.5V23H8V4.5Z" {...s} />
          <path d="M16.2 4.5V8.8H20" {...s} />
          <path d="M11 13.5h6.5M11 16.5h6.5M11 19.5h4" {...s} />
          <circle cx="18.2" cy="19.8" r="3.2" {...s} />
          <path d="M17.2 19.8l.8.8 1.6-1.7" {...s} />
        </svg>
      );
    case "feasibility":
      return (
        <svg {...common}>
          <path d="M6 6.5h12.5v14H6V6.5Z" {...s} />
          <path d="M6 10h12.5" {...s} />
          <path d="M9 13.5v4.5M12.2 15v3M15.5 12.5V19.5" {...s} />
          <path d="M18.5 8.5h3.5v12H18.5" {...s} />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="14" cy="8" r="2.6" {...s} />
          <circle cx="8.2" cy="9.2" r="2.1" {...s} />
          <circle cx="19.8" cy="9.2" r="2.1" {...s} />
          <path d="M9.5 16.5c.7-2.6 2.4-3.9 4.5-3.9s3.8 1.3 4.5 3.9" {...s} />
          <path d="M4.5 17.2c.5-2 1.7-3 3.3-3.2" {...s} />
          <path d="M23.5 17.2c-.5-2-1.7-3-3.3-3.2" {...s} />
        </svg>
      );
    case "finance":
      return (
        <svg {...common}>
          <path d="M14 5.5c-4.2 0-7 2.6-7 6.2 0 4.6 3.4 6.4 7 9.3 3.6-2.9 7-4.7 7-9.3 0-3.6-2.8-6.2-7-6.2Z" {...s} />
          <path d="M14 10.2v5.2M12.2 11.5c.4-.6 1-.9 1.8-.9 1.1 0 1.8.6 1.8 1.4s-.8 1.3-1.8 1.3-1.8.5-1.8 1.3c0 .8.8 1.4 1.9 1.4.7 0 1.4-.2 1.8-.8" {...s} />
        </svg>
      );
    case "construction":
      return (
        <svg {...common}>
          <path d="M7 22.5V8.5M7 8.5h10M14.5 8.5V5.5h6v4.2h-6" {...s} />
          <path d="M7 8.5L21 11" {...s} />
          <path d="M7 22.5h4" {...s} />
        </svg>
      );
    case "reporting":
      return (
        <svg {...common}>
          <path d="M8 4.5h8.5L20.5 8.5V23H8V4.5Z" {...s} />
          <path d="M16.2 4.5V8.8H20" {...s} />
          <path d="M11 13l1.8 1.8 3.6-3.8M11 17.5h6.5M11 20.2h4.2" {...s} />
        </svg>
      );
    case "handover":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10" r="3.2" {...s} />
          <path d="M13.2 11.5l7.8 7.8M18.2 16.8l2.2 2.2M19.5 18.2l1.8-1.2" {...s} />
          <path d="M8.8 10h3.4" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

function BuildingWatermark() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] w-full opacity-[0.07]"
      viewBox="0 0 1200 280"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#1a1a1a" strokeWidth="1.1">
        <rect x="40" y="40" width="160" height="220" />
        <line x1="40" y1="80" x2="200" y2="80" />
        <line x1="40" y1="120" x2="200" y2="120" />
        <line x1="40" y1="160" x2="200" y2="160" />
        <line x1="40" y1="200" x2="200" y2="200" />
        <line x1="120" y1="40" x2="120" y2="260" />
        <rect x="200" y="90" width="90" height="170" />
        <line x1="200" y1="130" x2="290" y2="130" />
        <line x1="200" y1="170" x2="290" y2="170" />
        <line x1="245" y1="90" x2="245" y2="260" />
        <rect x="290" y="60" width="140" height="200" />
        <line x1="290" y1="100" x2="430" y2="100" />
        <line x1="290" y1="140" x2="430" y2="140" />
        <line x1="290" y1="180" x2="430" y2="180" />
        <line x1="360" y1="60" x2="360" y2="260" />
        <rect x="480" y="30" width="180" height="230" />
        <line x1="480" y1="75" x2="660" y2="75" />
        <line x1="480" y1="120" x2="660" y2="120" />
        <line x1="480" y1="165" x2="660" y2="165" />
        <line x1="480" y1="210" x2="660" y2="210" />
        <line x1="570" y1="30" x2="570" y2="260" />
        <rect x="660" y="80" width="100" height="180" />
        <line x1="660" y1="120" x2="760" y2="120" />
        <line x1="660" y1="160" x2="760" y2="160" />
        <line x1="710" y1="80" x2="710" y2="260" />
        <rect x="800" y="50" width="150" height="210" />
        <line x1="800" y1="95" x2="950" y2="95" />
        <line x1="800" y1="140" x2="950" y2="140" />
        <line x1="800" y1="185" x2="950" y2="185" />
        <line x1="875" y1="50" x2="875" y2="260" />
        <rect x="980" y="70" width="120" height="190" />
        <line x1="980" y1="110" x2="1100" y2="110" />
        <line x1="980" y1="150" x2="1100" y2="150" />
        <line x1="980" y1="190" x2="1100" y2="190" />
        <line x1="1040" y1="70" x2="1040" y2="260" />
        <line x1="20" y1="260" x2="1180" y2="260" />
      </g>
    </svg>
  );
}

/**
 * 05 / Typical Journey — 8-step horizontal process timeline.
 */
export function NrnTypicalJourneySection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: BG }}>
      <BuildingWatermark />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[4.25rem] xl:px-12">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          05 / Typical Journey
        </p>
        <h2 className="mt-3 max-w-[40rem] font-heading text-[1.55rem] font-bold leading-[1.18] tracking-[-0.02em] text-arch-black sm:mt-3.5 sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.15rem]">
          A clear path from your first conversation to handover.
        </h2>

        {/* Horizontal timeline — scrolls on smaller screens */}
        <div className="-mx-6 mt-12 overflow-x-auto px-6 sm:-mx-8 sm:mt-14 sm:px-8 md:mt-14 lg:mx-0 lg:mt-16 lg:overflow-visible lg:px-0">
          <div className="min-w-[920px] lg:min-w-0">
            {/* Icons */}
            <div className="grid grid-cols-8 gap-x-2 xl:gap-x-3">
              {STEPS.map((step) => (
                <div key={`icon-${step.num}`} className="flex h-9 items-center justify-center">
                  <StepIcon type={step.icon} />
                </div>
              ))}
            </div>

            {/* Rail: line + nodes — line centered on node midpoints */}
            <div className="relative mt-3 h-3 lg:mt-3.5">
              <div
                className="absolute left-[6.25%] right-[6.25%] top-1/2 h-px -translate-y-1/2"
                style={{ backgroundColor: RED }}
                aria-hidden="true"
              />
              <div className="relative z-[1] grid h-full grid-cols-8 gap-x-2 xl:gap-x-3">
                {STEPS.map((step) => (
                  <div key={`node-${step.num}`} className="flex items-center justify-center">
                    <span
                      className="block h-[10px] w-[10px] rounded-full"
                      style={{ backgroundColor: NODE }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Numbers + copy */}
            <div className="mt-3.5 grid grid-cols-8 gap-x-2 sm:mt-4 xl:gap-x-3">
              {STEPS.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <p className="font-mono text-[12px] font-semibold leading-none tabular-nums text-nebco-red sm:text-[13px]">
                    {step.num}
                  </p>
                  <h3 className="mt-1.5 max-w-[9.5rem] font-heading text-[12.5px] font-bold leading-snug tracking-[-0.01em] text-arch-black sm:text-[13px] lg:max-w-[10.5rem] xl:text-[13.5px]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[10rem] text-[11px] leading-[1.4] text-arch-black/50 sm:text-[11.5px] lg:max-w-[11rem]">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
