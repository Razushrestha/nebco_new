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

function StepIcon({
  type,
  highlight = false,
}: {
  type: (typeof STEPS)[number]["icon"];
  highlight?: boolean;
}) {
  const size = highlight ? 60 : 48;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 56 56",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: "nrn-you-decide__step-svg",
  };
  const s = {
    stroke: GOLD,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "team":
      /* Two overlapping busts — rear left, front right */
      return (
        <svg {...common}>
          <circle cx="20" cy="18" r="5" {...s} />
          <path d="M11 36c1.4-5.4 4.6-8 9-8s7.6 2.6 9 8" {...s} />
          <circle cx="34" cy="16.5" r="5.6" {...s} />
          <path d="M23.5 37c1.7-6.2 5.4-9.2 10.5-9.2S43 30.8 44.5 37" {...s} />
        </svg>
      );
    case "person":
      /* Large single bust — focal point of highlight card */
      return (
        <svg {...common}>
          <circle cx="28" cy="18" r="7.2" {...s} />
          <path d="M12 42.5c2.2-8.2 7.2-12.2 16-12.2s13.8 4 16 12.2" {...s} />
        </svg>
      );
    case "gear":
      /* Gear with diamond center */
      return (
        <svg {...common}>
          <path
            d="M28 10.5v4.2M28 41.3v4.2M10.5 28h4.2M41.3 28h4.2M15.2 15.2l3 3M37.8 37.8l3 3M15.2 40.8l3-3M37.8 17.2l3-3"
            {...s}
          />
          <circle cx="28" cy="28" r="9" {...s} />
          <path d="M28 23.2l3.4 3.4L28 30l-3.4-3.4L28 23.2Z" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

function GoldArrow() {
  return (
    <span className="nrn-you-decide__arrow" aria-hidden="true">
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
        <path
          d="M1 7h23M19.5 2L25.5 7l-6 5"
          stroke={GOLD}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function DecideSteps() {
  return (
    <div className="nrn-you-decide__steps">
      {STEPS.map((step, index) => (
        <div key={step.id} className="nrn-you-decide__step-wrap">
          <div
            className={`nrn-you-decide__step ${step.highlight ? "nrn-you-decide__step--highlight" : ""}`}
          >
            {step.highlight ? (
              <>
                <p
                  className="nrn-you-decide__step-title font-heading font-bold uppercase"
                  style={{ color: GOLD }}
                >
                  {step.title}
                </p>
                <div className="nrn-you-decide__step-icon nrn-you-decide__step-icon--highlight">
                  <StepIcon type={step.icon} highlight />
                </div>
                <p className="nrn-you-decide__step-desc">{step.desc}</p>
              </>
            ) : (
              <>
                <div className="nrn-you-decide__step-icon">
                  <StepIcon type={step.icon} />
                </div>
                <p
                  className="nrn-you-decide__step-title font-heading font-bold uppercase"
                  style={{ color: GOLD }}
                >
                  {step.title}
                </p>
                <p className="nrn-you-decide__step-desc">{step.desc}</p>
              </>
            )}
          </div>
          {index < STEPS.length - 1 ? <GoldArrow /> : null}
        </div>
      ))}
    </div>
  );
}

/**
 * 06 / You remain the owner of the decisions
 * Red band: copy left + three-step decide flow.
 */
export function NrnYouDecideSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`nrn-you-decide overflow-hidden ${compact ? "nrn-you-decide--compact" : "nrn-you-decide--full"}`}
      style={{ backgroundColor: BG }}
    >
      <div className="nrn-you-decide__inner">
        <div className="nrn-you-decide__copy">
          <p
            className="nrn-you-decide__eyebrow type-label font-semibold uppercase tracking-[0.16em]"
            style={{ color: GOLD }}
          >
            06 / You Remain the Owner of the Decisions
          </p>
          <h2 className="nrn-you-decide__heading font-heading font-bold tracking-[-0.02em] text-white">
            You decide. We execute.
          </h2>
          <p className="nrn-you-decide__body">
            We provide information, options and professional advice. You approve every major
            decision.
          </p>
        </div>

        <DecideSteps />
      </div>
    </section>
  );
}
