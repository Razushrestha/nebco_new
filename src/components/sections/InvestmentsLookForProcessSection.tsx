"use client";

import type { ComponentType } from "react";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";

const GOLD = "#c5a059";

const LOOK_FOR = [
  "Ownership clarity & title verifiability",
  "Location potential & market relevance",
  "Access, infrastructure & connectivity",
  "Demonstrable market demand",
  "Financial viability & return potential",
  "Stakeholder alignment & cooperation",
  "Strategic fit with NEBCO's expertise",
] as const;

type Step = {
  num: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
};

function IconSubmit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M7 20h18v5.5H7V20z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path
        d="M16 19.5V7M11.5 11.5 16 7l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconScreen({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="6.25" stroke="currentColor" strokeWidth="1.35" />
      <path d="M18.6 18.6 25 25" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconDiscuss({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="12.5" r="3.1" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M6.2 22c.4-3.2 2.4-4.8 4.8-4.8s4.4 1.6 4.8 4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="21" cy="12.5" r="3.1" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M16.2 22c.4-3.2 2.4-4.8 4.8-4.8s4.4 1.6 4.8 4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14.2 7.2h5.2c.7 0 1.3.6 1.3 1.3v2.2c0 .7-.6 1.3-1.3 1.3h-1.5l-1.5 1.4v-1.4h-2.2c-.7 0-1.3-.6-1.3-1.3V8.5c0-.7.6-1.3 1.3-1.3z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDoc({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="5" width="14" height="22" rx="1.2" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M12.5 11h7M12.5 15h7M12.5 19h7M12.5 23h4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFeas({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M7 24V15.5M12.5 24V12M18 24V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 24.5h17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M7.5 14.5 12.5 9.5 18 13.5 24.5 6.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 6.5h3v3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 4.5 25 8v7.2c0 5.6-3.9 9.7-9 11.8-5.1-2.1-9-6.2-9-11.8V8l9-3.5z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 15.2 14.4 18l6.1-6.4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.5 16.5 9 13l3.2 2.2 2.6-2.4 3.1 2.3 2.4-1.8 6.2 4.2"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 19.5 9.2 17l3 2.4 2.8-2 3.2 2.2 5.8 2.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12.5 5.5 9.5M24 13.5 26.5 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="7.5" y="5" width="14.5" height="21" rx="1.1" stroke="currentColor" strokeWidth="1.35" />
      <path d="M11 12h7.5M11 16h7.5M11 20h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M17.5 21.5 22 17l2.2 2.2-4.5 4.5H17.5v-2.2z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path d="M22 17 24.8 14.2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

const STEPS: readonly Step[] = [
  { num: "01", label: "Submission", Icon: IconSubmit },
  { num: "02", label: "Screening", Icon: IconScreen },
  { num: "03", label: "Confidential Discussion", Icon: IconDiscuss },
  { num: "04", label: "Site & Document Review", Icon: IconDoc },
  { num: "05", label: "Feasibility", Icon: IconFeas },
  { num: "06", label: "Due Diligence", Icon: IconShield },
  { num: "07", label: "Structure", Icon: IconShake },
  { num: "08", label: "Agreement & Implementation", Icon: IconSign },
] as const;

function GoldCheck({ compact }: { compact?: boolean }) {
  const size = compact ? 15 : 18;
  return (
    <span
      className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border"
      style={{ borderColor: GOLD, width: size, height: size }}
      aria-hidden="true"
    >
      <svg width={compact ? 8 : 10} height={compact ? 8 : 10} viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2L4.1 7.2 8 2.8"
          stroke={GOLD}
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function InvestmentsLookForProcessSection({
  compact = false,
}: {
  compact?: boolean;
} = {}) {
  return (
    <section
      className={`overflow-hidden ${compact ? "flex h-full min-h-0 flex-col pb-4 pt-3 lg:pb-5 lg:pt-3.5" : ""}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-stretch ${
          compact ? "h-full min-h-0 flex-1" : ""
        }`}
      >
        {/* 04 / WHAT WE LOOK FOR */}
        <div
          className={`relative bg-[#161616] text-white ${
            compact
              ? "flex flex-col justify-center px-5 py-5 sm:px-6 sm:py-5 lg:px-7 lg:py-5 xl:px-8"
              : "px-7 py-12 sm:px-9 sm:py-14 lg:px-10 lg:py-16 xl:px-12"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.2]" aria-hidden="true">
            <ConstructionHeroBlueprint />
          </div>

          <div className="relative z-[1]">
            <p
              className={`font-mono font-semibold uppercase tracking-[0.16em] ${
                compact ? "text-[9.5px] sm:text-[10px]" : "text-[10.5px] sm:text-[11px]"
              }`}
              style={{ color: GOLD }}
            >
              04 / WHAT WE LOOK FOR
            </p>

            <h2
              className={`max-w-[22rem] font-heading font-bold! leading-[1.28]! tracking-[-0.02em] ${
                compact
                  ? "mt-2.5 text-[1.05rem]! sm:text-[1.15rem]! lg:text-[1.2rem]!"
                  : "mt-5 text-[1.45rem]! sm:mt-6 sm:text-[1.65rem]! lg:text-[1.75rem]!"
              }`}
            >
              <span className="text-white">We focus on opportunities that are </span>
              <span className="text-nebco-red underline decoration-nebco-red decoration-1 underline-offset-[5px]">
                aligned
              </span>
              <span className="text-nebco-red">, </span>
              <span className="text-nebco-red underline decoration-nebco-red decoration-1 underline-offset-[5px]">
                feasible
              </span>
              <span className="text-nebco-red"> and </span>
              <span className="text-nebco-red underline decoration-nebco-red decoration-1 underline-offset-[5px]">
                investable
              </span>
              <span className="text-nebco-red">.</span>
            </h2>

            <ul className={compact ? "mt-3.5 space-y-1.5" : "mt-8 space-y-3.5 sm:mt-9 sm:space-y-4"}>
              {LOOK_FOR.map((item) => (
                <li key={item} className={`flex items-start ${compact ? "gap-2" : "gap-2.5"}`}>
                  <GoldCheck compact={compact} />
                  <span
                    className={`pt-px leading-[1.35] text-white/88 ${
                      compact ? "text-[11.5px] sm:text-[12px]" : "text-[13.5px] sm:text-[14px]"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 05 / EVALUATION PROCESS */}
        <div
          className={`flex flex-col bg-[#f5f2ed] ${
            compact
              ? "px-4 py-5 sm:px-5 sm:py-5 lg:px-6 lg:py-5 xl:px-7"
              : "px-6 py-12 sm:px-8 sm:py-14 lg:px-9 lg:py-16 xl:px-11"
          }`}
        >
          <p
            className={`font-mono font-semibold uppercase tracking-[0.16em] text-nebco-red ${
              compact ? "text-[9.5px] sm:text-[10px]" : "text-[10.5px] sm:text-[11px]"
            }`}
          >
            05 / EVALUATION PROCESS
          </p>

          <h2
            className={`max-w-[28rem] font-heading font-bold! leading-[1.25]! tracking-[-0.02em] text-arch-black ${
              compact
                ? "mt-2.5 text-[1.05rem]! sm:text-[1.15rem]! lg:text-[1.2rem]!"
                : "mt-4 text-[1.4rem]! sm:mt-5 sm:text-[1.55rem]! lg:text-[1.65rem]!"
            }`}
          >
            A disciplined, stage-gated due diligence process.
          </h2>

          <div
            className={`flex flex-1 flex-col justify-center ${compact ? "mt-4 min-h-0" : "mt-10 sm:mt-12"}`}
          >
            <div className="-mx-0.5 overflow-x-auto pb-0.5">
              <div className="relative mx-0.5 min-w-[680px] lg:min-w-0">
                {/* Dotted gold connector through icon midpoints */}
                <div
                  className={`pointer-events-none absolute left-[6.25%] right-[6.25%] ${
                    compact ? "top-[42px]" : "top-[58px] sm:top-[62px]"
                  }`}
                  aria-hidden="true"
                >
                  <div
                    className="h-px w-full"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${GOLD} 1px, transparent 1.15px)`,
                      backgroundSize: "6px 1px",
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "center",
                      opacity: 0.9,
                    }}
                  />
                </div>

                {/* Gold diamond markers between steps */}
                <div
                  className={`pointer-events-none absolute inset-x-0 ${
                    compact ? "top-[42px]" : "top-[58px] sm:top-[62px]"
                  }`}
                  aria-hidden="true"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <span
                      key={i}
                      className="absolute top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rotate-45"
                      style={{
                        left: `${i * 12.5}%`,
                        backgroundColor: GOLD,
                      }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-8">
                  {STEPS.map((step) => {
                    const { Icon } = step;
                    return (
                      <div
                        key={step.num}
                        className="relative flex min-w-0 flex-col items-center text-center"
                      >
                        <span
                          className={`relative z-[2] flex items-center justify-center rounded-full bg-nebco-red font-mono font-semibold tabular-nums text-white ${
                            compact
                              ? "h-[20px] w-[20px] text-[7.5px]"
                              : "h-6 w-6 text-[8.5px] sm:h-[26px] sm:w-[26px] sm:text-[9px]"
                          }`}
                        >
                          {step.num}
                        </span>

                        <span
                          className={`relative z-[1] w-px bg-nebco-red/20 ${compact ? "h-2.5" : "h-3.5"}`}
                          aria-hidden="true"
                        />

                        <span
                          className="relative z-[2] bg-[#f5f2ed] px-1 text-nebco-red"
                          aria-hidden="true"
                        >
                          <Icon
                            className={
                              compact ? "h-8 w-8 sm:h-9 sm:w-9" : "h-10 w-10 sm:h-11 sm:w-11"
                            }
                          />
                        </span>

                        <p
                          className={`max-w-[5.5rem] font-heading font-semibold leading-[1.2] text-arch-black lg:max-w-[6.25rem] ${
                            compact
                              ? "mt-2 text-[8px] sm:text-[8.5px]"
                              : "mt-3 text-[9.5px] sm:text-[10px] lg:text-[10.5px]"
                          }`}
                        >
                          {step.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <p
            className={`font-mono font-medium uppercase tracking-[0.12em] ${
              compact
                ? "mt-3 text-left text-[8.5px] sm:text-[9px]"
                : "mt-8 text-center text-[10px] sm:mt-10 sm:text-[10.5px] lg:text-left"
            }`}
            style={{ color: GOLD }}
          >
            We maintain strict confidentiality at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}
