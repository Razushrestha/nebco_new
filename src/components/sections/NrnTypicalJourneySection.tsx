"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

const RED = "#bc2026";
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
    width: 30,
    height: 30,
    viewBox: "0 0 28 28",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: "nrn-journey__step-svg",
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

function JourneyGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="journey-grid" width="100" height="8" patternUnits="userSpaceOnUse">
          <path d="M 0 0 L 100 0" fill="none" stroke="#1a1a1a" strokeWidth="0.15" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#journey-grid)" />
    </svg>
  );
}

/**
 * Panoramic wireframe 4162×1024 (≈4.06:1).
 * Drawing begins ~6% from left; denser mass sits on the right.
 */
function JourneyWireframe() {
  return (
    <div className="nrn-journey__wireframe" aria-hidden="true">
      <Image
        src={IMAGES.nrnTypicalJourneyWireframe}
        alt=""
        fill
        quality={100}
        unoptimized
        sizes="(max-width: 1024px) 90vw, 72vw"
        className="nrn-journey__wireframe-img"
      />
    </div>
  );
}

/**
 * 05 / Typical Journey - 8-step horizontal process timeline.
 */
export function NrnTypicalJourneySection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`nrn-journey relative overflow-hidden ${compact ? "nrn-journey--compact" : ""}`}
      style={{ backgroundColor: BG }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-55">
        <JourneyGrid />
      </div>
      <JourneyWireframe />

      <div className="nrn-journey__inner relative z-10">
        <p className="nrn-journey__eyebrow type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          05 / Typical Journey
        </p>
        <h2 className="nrn-journey__heading font-heading font-bold tracking-[-0.02em] text-arch-black">
          A clear path from your first conversation to handover.
        </h2>

        <div className="nrn-journey__scroller">
          <div className="nrn-journey__track">
            <div className="nrn-journey__line" aria-hidden="true" />

            <ol className="nrn-journey__steps">
              {STEPS.map((step) => (
                <li key={step.num} className="nrn-journey__step">
                  <div className="nrn-journey__icon">
                    <StepIcon type={step.icon} />
                  </div>

                    <div className="nrn-journey__node-wrap">
                    <span className="nrn-journey__node" aria-hidden="true" />
                  </div>

                  <p className="nrn-journey__num font-mono font-semibold tabular-nums text-nebco-red">
                    {step.num}
                  </p>

                  <h3 className="nrn-journey__title font-heading font-bold text-arch-black">
                    {step.title}
                  </h3>

                  <p className="nrn-journey__desc">{step.subtitle}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
