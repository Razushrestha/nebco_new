"use client";

const GOLD = "#c5a059";
const BG = "#8f181c";

const STEPS = [
  {
    id: "recommend",
    title: "NEBCO Recommends",
    desc: "We provide options, analysis and advice.",
    icon: "team" as const,
    highlight: false,
  },
  {
    id: "decide",
    title: "You Decide",
    desc: "You review and approve the path forward.",
    icon: "person" as const,
    highlight: true,
  },
  {
    id: "execute",
    title: "We Execute",
    desc: "We implement with quality and discipline.",
    icon: "gear" as const,
    highlight: false,
  },
] as const;

function StepIcon({ type }: { type: (typeof STEPS)[number]["icon"] }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: "mx-auto",
  };
  const s = {
    stroke: GOLD,
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "team":
      return (
        <svg {...common}>
          <circle cx="18" cy="11" r="3.4" {...s} />
          <circle cx="9.5" cy="12.5" r="2.8" {...s} />
          <circle cx="26.5" cy="12.5" r="2.8" {...s} />
          <path d="M11.5 22.5c1-3.6 3.4-5.4 6.5-5.4s5.5 1.8 6.5 5.4" {...s} />
          <path d="M4.5 23.5c.7-2.8 2.3-4.2 4.6-4.5" {...s} />
          <path d="M31.5 23.5c-.7-2.8-2.3-4.2-4.6-4.5" {...s} />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="18" cy="12" r="4.2" {...s} />
          <path d="M9.5 27c1.2-4.6 4-7 8.5-7s7.3 2.4 8.5 7" {...s} />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="18" cy="18" r="5.2" {...s} />
          <path
            d="M18 8.2v2.4M18 25.4v2.4M8.2 18h2.4M25.4 18h2.4M11.1 11.1l1.7 1.7M23.2 23.2l1.7 1.7M11.1 24.9l1.7-1.7M23.2 12.8l1.7-1.7"
            {...s}
          />
        </svg>
      );
    default:
      return null;
  }
}

function GoldArrow() {
  return (
    <span className="hidden shrink-0 items-center justify-center px-2 sm:flex lg:px-3" aria-hidden="true">
      <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
        <path
          d="M1 6h18.5M15.5 1.5L20.5 6l-5 4.5"
          stroke={GOLD}
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * 06 / You remain the owner of the decisions
 * Red band: copy left + three-step decide flow.
 */
export function NrnYouDecideSection() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: BG }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-12 lg:px-10 lg:py-[4.25rem] xl:gap-16 xl:px-12">
        {/* Left copy */}
        <div className="max-w-[28rem]">
          <p
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]"
            style={{ color: GOLD }}
          >
            06 / You Remain the Owner of the Decisions
          </p>
          <h2 className="mt-4 font-heading text-[1.75rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:mt-5 sm:text-[2.05rem] lg:text-[2.25rem]">
            You decide. We execute.
          </h2>
          <p className="mt-4 max-w-[24rem] text-[14px] leading-[1.6] text-white/75 sm:mt-5 sm:text-[15px]">
            We provide information, options and professional advice. You approve every major decision.
          </p>
        </div>

        {/* Process steps */}
        <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-end sm:gap-0">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center sm:flex-row sm:items-center">
              <div
                className={`flex w-full max-w-[220px] flex-col items-center text-center sm:w-[11.5rem] lg:w-[12.5rem] xl:w-[13.5rem] ${
                  step.highlight
                    ? "rounded-md border px-4 py-5 sm:px-5 sm:py-6"
                    : "px-2 py-1"
                }`}
                style={step.highlight ? { borderColor: GOLD } : undefined}
              >
                {step.highlight ? (
                  <>
                    <p
                      className="font-heading text-[11px] font-bold uppercase tracking-[0.12em] sm:text-[11.5px]"
                      style={{ color: GOLD }}
                    >
                      {step.title}
                    </p>
                    <div className="my-4 sm:my-5">
                      <StepIcon type={step.icon} />
                    </div>
                    <p className="text-[12px] leading-snug text-white/70 sm:text-[12.5px]">{step.desc}</p>
                  </>
                ) : (
                  <>
                    <StepIcon type={step.icon} />
                    <p
                      className="mt-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] sm:mt-4 sm:text-[11.5px]"
                      style={{ color: GOLD }}
                    >
                      {step.title}
                    </p>
                    <p className="mt-2 text-[12px] leading-snug text-white/70 sm:text-[12.5px]">{step.desc}</p>
                  </>
                )}
              </div>

              {index < STEPS.length - 1 ? <GoldArrow /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
