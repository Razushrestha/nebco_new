"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

const RED = "#bc2026";

type StoryStep = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
};

const STEPS: readonly StoryStep[] = [
  {
    id: "context",
    title: "Context",
    description: "Where the project is, what exists, and why it matters.",
    iconSrc: "/project_story_format/processed/context.png",
  },
  {
    id: "challenge",
    title: "Challenge",
    description: "Key constraints, risks or decisions that shape the project.",
    iconSrc: "/project_story_format/processed/challenge.png",
  },
  {
    id: "role",
    title: "NEBCO Role",
    description: "Our scope, responsibilities and the value we are accountable for.",
    iconSrc: "/project_story_format/processed/role.png",
  },
  {
    id: "process",
    title: "Process",
    description: "How we plan, coordinate and execute across stakeholders.",
    iconSrc: "/project_story_format/processed/process.png",
  },
  {
    id: "outcome",
    title: "Outcome",
    description: "What has been achieved so far and what comes next.",
    iconSrc: "/project_story_format/processed/outcome.png",
  },
] as const;

/** Connector: ... -- ● -- ... (dotted outer, solid mid with center node) */
function StepConnector() {
  return (
    <div
      className="pointer-events-none absolute left-[3.75rem] right-[-1.35rem] top-1/2 z-[1] h-0 -translate-y-1/2 xl:right-[-1.85rem]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          backgroundImage: `radial-gradient(circle, ${RED} 1px, transparent 1.15px)`,
          backgroundSize: "6px 1px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute left-[22%] right-[22%] top-0 h-px"
        style={{ backgroundColor: RED }}
      />
      <span
        className="absolute left-1/2 top-0 flex h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{ backgroundColor: RED }}
      >
        <span className="h-[3px] w-[3px] rounded-full bg-[#f5f2ed]" />
      </span>
    </div>
  );
}

function StepIcon({ src, className }: { src: string; className: string }) {
  return (
    <span className={`relative block shrink-0 ${className}`} aria-hidden="true">
      <Image src={src} alt="" fill sizes="72px" className="object-contain" />
    </span>
  );
}

type ProjectsStoryFormatSectionProps = {
  compact?: boolean;
};

/**
 * 05 / PROJECT STORY FORMAT - icons, copy, dotted/solid connectors, blueprint.
 */
export function ProjectsStoryFormatSection({ compact = false }: ProjectsStoryFormatSectionProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "" : "bg-[#f5f2ed]"}`}>
      {/* Architectural sketch - right side, faded like the design */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(46%,480px)]"
        aria-hidden="true"
      >
        <Image
          src={IMAGES.projectsStoryFormatBg}
          alt=""
          fill
          className="object-contain object-right opacity-[0.42] sm:opacity-[0.48]"
          sizes="(max-width: 1024px) 50vw, 480px"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #f5f2ed 0%, rgba(245,242,237,0.75) 28%, rgba(245,242,237,0.15) 62%, transparent 100%)",
          }}
        />
      </div>

      <div
        className={`relative z-[1] ${
          compact
            ? "w-full py-2 sm:py-3"
            : "mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12"
        }`}
      >
        <p
          className={`font-mono font-semibold uppercase tracking-[0.16em] text-nebco-red ${
            compact ? "text-[10px] sm:text-[10.5px]" : "text-[10.5px] sm:text-[11px]"
          }`}
        >
          05 / Project Story Format
        </p>

        {/* Mobile / tablet */}
        <div
          className={`grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-10 lg:hidden ${
            compact ? "mt-6 gap-y-8" : "mt-10 gap-y-12"
          }`}
        >
          {STEPS.map((step) => (
            <article key={step.id} className="min-w-0">
              <StepIcon
                src={step.iconSrc}
                className={compact ? "h-11 w-11" : "h-[3.25rem] w-[3.25rem]"}
              />
              <h3 className="type-h3 mt-3.5 tracking-[-0.015em] text-nebco-red">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[16.5rem] text-[13px] leading-[1.5] text-[#3a3a3a]">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Desktop - centered icons when compact (single-screen pair) */}
        <div className={`hidden lg:block ${compact ? "mt-5" : "mt-11 lg:mt-12"}`}>
          <div className={`relative grid grid-cols-5 gap-x-5 xl:gap-x-7`}>
            {compact ? (
              <div
                className="pointer-events-none absolute left-[10%] right-[10%] top-6 h-px"
                aria-hidden="true"
              >
                <div
                  className="h-px w-full"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${RED} 1px, transparent 1.15px)`,
                    backgroundSize: "6px 1px",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "center",
                    opacity: 0.7,
                  }}
                />
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="absolute top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ left: `${i * 25}%`, backgroundColor: RED }}
                  />
                ))}
              </div>
            ) : null}

            {STEPS.map((step, index) => (
              <article
                key={step.id}
                className={`relative min-w-0 ${compact ? "text-center" : ""}`}
              >
                <div
                  className={`relative flex items-center ${
                    compact ? "h-12 justify-center" : "h-[3.5rem]"
                  }`}
                >
                  <span
                    className={`relative z-[2] block shrink-0 bg-[#f5f2ed] ${
                      compact ? "px-2" : "pr-3"
                    }`}
                  >
                    <StepIcon
                      src={step.iconSrc}
                      className={compact ? "h-12 w-12" : "h-[3.5rem] w-[3.5rem]"}
                    />
                  </span>
                  {!compact && index < STEPS.length - 1 ? <StepConnector /> : null}
                </div>

                <h3
                  className={`font-heading font-bold leading-[1.15] tracking-[-0.015em] text-nebco-red ${
                    compact
                      ? "mt-3 text-[1.05rem] xl:text-[1.1rem]"
                      : "mt-5 text-[1.2rem] xl:text-[1.28rem]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`leading-[1.5] text-[#3a3a3a] ${
                    compact
                      ? "mx-auto mt-1.5 max-w-[13.5rem] text-[12px] xl:text-[12.5px]"
                      : "mt-2.5 max-w-[14.75rem] text-[13.5px] xl:max-w-[15.5rem] xl:text-[14px]"
                  }`}
                >
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
