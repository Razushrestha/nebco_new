"use client";

import type { ComponentType } from "react";

const GOLD = "#c5a059";

type Model = {
  num: string;
  title: string;
  description: string;
  dark: boolean;
  Icon: ComponentType<{ className?: string }>;
};

function IconPuzzle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 11h5.2V8.5c0-1.3 1-2.4 2.3-2.4s2.3 1.1 2.3 2.4V11H22v5.2h2.5c1.3 0 2.4 1 2.4 2.3s-1.1 2.3-2.4 2.3H22V26h-5.2v-2.5c0-1.3-1-2.4-2.3-2.4s-2.3 1.1-2.3 2.4V26H7v-5.2H4.5c-1.3 0-2.4-1-2.4-2.3s1.1-2.3 2.4-2.3H7V11z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSkyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="12" width="8" height="14" stroke="currentColor" strokeWidth="1.3" />
      <rect x="14" y="6" width="9" height="20" stroke="currentColor" strokeWidth="1.3" />
      <rect x="25" y="14" width="5" height="12" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M6.5 16h3M6.5 19.5h3M6.5 23h3M16.5 10h4M16.5 14h4M16.5 18h4M16.5 22h4"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M3 26.5h26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconPeople({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="21" cy="11" r="2.8" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M4.5 24c1.4-3.4 3.6-5.1 6.5-5.1s5.1 1.7 6.5 5.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M16.5 24c.9-2.2 2.4-3.4 4.5-3.4 2 0 3.4 1.1 4.3 3.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHardHat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 18.5c0-5.2 3.5-9.5 10-9.5s10 4.3 10 9.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M4.5 18.5h23" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 18.5v2.5h18V18.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M14.5 9.2V7.5h3v1.7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconTower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M11 26V10l5-5 5 5v16" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M13.5 13h5M13.5 16.5h5M13.5 20h5M13.5 23.5h5" stroke="currentColor" strokeWidth="1.15" />
      <path d="M8 26h16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

const MODELS: readonly Model[] = [
  {
    num: "01",
    title: "Landowner–Developer Partnership",
    description:
      "Landowner contributes land. NEBCO contributes capital, planning, approvals and development expertise. Profits shared as per agreed structure.",
    dark: false,
    Icon: IconPuzzle,
  },
  {
    num: "02",
    title: "Joint Development",
    description: "Both parties contribute capital and/or land. Shared risk, shared control, shared returns.",
    dark: true,
    Icon: IconSkyline,
  },
  {
    num: "03",
    title: "Co-Development",
    description:
      "Collaborative development with shared governance and aligned decision-making throughout the project lifecycle.",
    dark: false,
    Icon: IconPeople,
  },
  {
    num: "04",
    title: "Construction-Linked Participation",
    description:
      "NEBCO undertakes construction with equity participation or preferred return upon completion.",
    dark: true,
    Icon: IconHardHat,
  },
  {
    num: "05",
    title: "Built-to-Suit / Project-Specific Participation",
    description: "We participate in specific projects with defined scope, duration and return structure.",
    dark: false,
    Icon: IconTower,
  },
] as const;

export function InvestmentsPartnershipModelsSection({
  compact = false,
}: {
  compact?: boolean;
} = {}) {
  const shellPad = compact
    ? "pb-0 pt-5 sm:pt-6 lg:pt-5"
    : "py-12 sm:py-14 lg:py-16";

  return (
    <section
      id={compact ? undefined : "models"}
      className={`overflow-hidden bg-[#f5f2ed] ${compact ? "shrink-0" : ""}`}
    >
      <div
        className={
          compact
            ? shellPad
            : `mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12 ${shellPad}`
        }
      >
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[10.5px]">
          03 / PARTNERSHIP MODELS
        </p>

        <div className={compact ? "mt-3 lg:mt-3.5" : "mt-7 lg:mt-8"}>
          <div className="-mx-0.5 overflow-x-auto pb-0.5">
            <div className="relative mx-0.5 min-w-[920px] lg:min-w-0">
              <div className={`grid grid-cols-5 ${compact ? "gap-2 lg:gap-2.5" : "gap-2.5 lg:gap-3 xl:gap-3.5"}`}>
                {MODELS.map((model) => {
                  const { Icon } = model;
                  return (
                    <article
                      key={model.num}
                      className={`flex flex-col ${
                        compact
                          ? "min-h-[168px] px-3.5 py-3.5 lg:min-h-[172px] xl:px-4"
                          : "min-h-[280px] px-4 py-4 sm:min-h-[300px] sm:px-4 sm:py-5 lg:min-h-[310px] xl:px-5"
                      } ${
                        model.dark
                          ? "bg-[#161616] text-white"
                          : "border border-[#ddd7ce] bg-[#f5f2ed] text-arch-black"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-mono text-[11px] font-medium tabular-nums text-nebco-red sm:text-[12px]">
                          {model.num}
                        </span>
                        <span className="text-[#c5a059]" aria-hidden="true">
                          <Icon className={compact ? "h-6 w-6" : "h-8 w-8 sm:h-9 sm:w-9"} />
                        </span>
                      </div>

                      <h3
                        className={`font-heading font-bold leading-[1.28] tracking-[-0.01em] ${
                          compact
                            ? "mt-3.5 text-[11.5px] lg:text-[12px] xl:text-[12.5px]"
                            : "mt-5 text-[12px] sm:mt-6 sm:text-[13px] lg:text-[13.5px]"
                        } ${model.dark ? "text-white" : "text-arch-black"}`}
                      >
                        {model.title}
                      </h3>

                      <p
                        className={`leading-[1.45] ${
                          compact
                            ? "mt-1.5 text-[10.5px] lg:text-[11px]"
                            : "mt-2 text-[11.5px] sm:mt-2.5 sm:text-[12px]"
                        } ${model.dark ? "text-white/65" : "text-[#555555]"}`}
                      >
                        {model.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className={`relative ${compact ? "pt-2.5" : "pt-4"}`}>
                <div
                  className={`absolute left-[10%] right-[10%] h-px ${
                    compact ? "top-[calc(0.625rem+10px)]" : "top-[calc(1rem+14px)]"
                  }`}
                  style={{ backgroundColor: GOLD }}
                  aria-hidden="true"
                />
                <div className={`grid grid-cols-5 ${compact ? "gap-2 lg:gap-2.5" : "gap-2.5 lg:gap-3 xl:gap-3.5"}`}>
                  {MODELS.map((model) => (
                    <div key={`tick-${model.num}`} className="flex flex-col items-center">
                      <span
                        className={`block w-px ${compact ? "h-2.5" : "h-[14px]"}`}
                        style={{ backgroundColor: GOLD }}
                        aria-hidden="true"
                      />
                      <span
                        className={`block border bg-[#f5f2ed] ${compact ? "h-[5px] w-[5px]" : "h-[6px] w-[6px]"}`}
                        style={{ borderColor: GOLD }}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
