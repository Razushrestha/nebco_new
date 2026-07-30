"use client";

import { useMemo, useState } from "react";

const GOLD = "#a8864d";
const GOLD_SOFT = "#c5a059";

type Pillar = {
  id: string;
  number: string;
  title: string;
  description: string;
  points: readonly string[];
};

const PILLARS: readonly Pillar[] = [
  {
    id: "evaluation",
    number: "01",
    title: "PROPERTY EVALUATION",
    description:
      "We assess land potential, zoning, access, infrastructure, market context and constraints to determine what is possible and practical.",
    points: [
      "Site visits and due diligence",
      "Regulatory and zoning review",
      "Highest and best use assessment",
    ],
  },
  {
    id: "feasibility",
    number: "02",
    title: "CONCEPT & FEASIBILITY",
    description:
      "We test concepts against market demand, costs and returns—so the idea is commercially viable before design commitment.",
    points: [
      "Concept options and massing",
      "Market and demand testing",
      "Preliminary financial modelling",
    ],
  },
  {
    id: "structuring",
    number: "03",
    title: "PROJECT STRUCTURING",
    description:
      "We structure the project for clarity, control and bankability—aligning scope, costs, revenue and execution strategy.",
    points: [
      "Project structure and phasing",
      "Cost planning and budgeting",
      "Risk allocation and controls",
    ],
  },
  {
    id: "design",
    number: "04",
    title: "DESIGN & APPROVALS",
    description:
      "We coordinate design teams and approval pathways so drawings, authority requirements and commercial goals stay aligned.",
    points: [
      "Design brief and consultant coordination",
      "Authority submission support",
      "Value engineering through design",
    ],
  },
  {
    id: "finance",
    number: "05",
    title: "FINANCE COORDINATION",
    description:
      "We help prepare the project for lenders and partners—clear numbers, documentation and a structure that supports funding.",
    points: [
      "Funding pack and documentation",
      "Lender and partner coordination",
      "Cashflow and drawdown planning",
    ],
  },
  {
    id: "market",
    number: "06",
    title: "MARKET & LEASING",
    description:
      "We align the product with buyer and tenant demand—positioning, pricing logic and go-to-market timing.",
    points: [
      "Product and pricing strategy",
      "Sales and leasing readiness",
      "Launch and absorption planning",
    ],
  },
  {
    id: "construction",
    number: "07",
    title: "CONSTRUCTION PROJECT MANAGEMENT",
    description:
      "We oversee construction with focus on quality, schedule, cost and safety—delivering the asset as promised.",
    points: [
      "Tendering and contractor management",
      "Site supervision and reporting",
      "Quality, safety and cost control",
    ],
  },
] as const;

function IconEvaluation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 34 V22 l6-4 5 7 7-11 6 5 8-10"
        stroke={GOLD}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 36 H40" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="33.5" cy="14.5" r="6.2" stroke={GOLD} strokeWidth="1.6" />
      <path d="M38 19.2 43.5 24.8" stroke={GOLD} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconFeasibility({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="10" y="8" width="22" height="30" rx="1.5" stroke={GOLD} strokeWidth="1.55" />
      <path d="M15 16h12M15 21h12M15 26h8" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="34" cy="30" r="7.5" stroke={GOLD} strokeWidth="1.55" />
      <path d="M34 26.5v4.2l2.8 1.6" stroke={GOLD} strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function IconStructuring({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="17" y="6" width="14" height="10" rx="1.2" stroke={GOLD} strokeWidth="1.55" />
      <path d="M24 16v6" stroke={GOLD} strokeWidth="1.5" />
      <path d="M10 22h28" stroke={GOLD} strokeWidth="1.5" />
      <path d="M12 22v5M24 22v5M36 22v5" stroke={GOLD} strokeWidth="1.5" />
      <rect x="5" y="27" width="14" height="10" rx="1.2" stroke={GOLD} strokeWidth="1.55" />
      <rect x="17" y="27" width="14" height="10" rx="1.2" stroke={GOLD} strokeWidth="1.55" />
      <rect x="29" y="27" width="14" height="10" rx="1.2" stroke={GOLD} strokeWidth="1.55" />
    </svg>
  );
}

function IconDesign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 36 V16 L24 8 L38 16 V36" stroke={GOLD} strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M10 16h28M17 16v20M31 16v20M17 26h14" stroke={GOLD} strokeWidth="1.35" />
      <rect x="21" y="30" width="6" height="6" stroke={GOLD} strokeWidth="1.35" />
    </svg>
  );
}

function IconFinance({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="22" r="9" stroke={GOLD} strokeWidth="1.55" />
      <circle cx="30" cy="26" r="9" stroke={GOLD} strokeWidth="1.55" />
      <path d="M18 17.5v9M14.5 20.5h7M14.5 24h7" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M30 21.5v9M26.5 24.5h7M26.5 28h7" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconMarket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M12 36V18l8-6 8 6v18" stroke={GOLD} strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M16 36V22h16v14" stroke={GOLD} strokeWidth="1.4" />
      <path d="M20 26h2M26 26h2M20 30h2M26 30h2" stroke={GOLD} strokeWidth="1.35" strokeLinecap="round" />
      <circle cx="36" cy="14" r="5.5" stroke={GOLD} strokeWidth="1.5" />
      <path d="M36 11.5v3l2 1.2" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconConstruction({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 28c0-8 5.5-14 14-14s14 6 14 14"
        stroke={GOLD}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M8 31h32" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 14V10.5" stroke={GOLD} strokeWidth="1.55" strokeLinecap="round" />
      <path
        d="M11 31c.7 3.2 3.6 5.5 7.2 5.5h11.6c3.6 0 6.5-2.3 7.2-5.5"
        stroke={GOLD}
        strokeWidth="1.55"
      />
      <path d="M18 20.5h12" stroke={GOLD} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

const PILLAR_ICONS = {
  evaluation: IconEvaluation,
  feasibility: IconFeasibility,
  structuring: IconStructuring,
  design: IconDesign,
  finance: IconFinance,
  market: IconMarket,
  construction: IconConstruction,
} as const;

function PillarCard({
  pillar,
  featured,
  showDivider,
}: {
  pillar: Pillar;
  featured: boolean;
  showDivider?: boolean;
}) {
  const Icon = PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];

  return (
    <article
      className={`flex h-full min-h-0 flex-col px-4 py-4 sm:px-5 sm:py-5 lg:px-5 lg:py-5 xl:px-6 ${
        featured ? "bg-[#1a1a1a] text-white" : "bg-[#f5f2ed] text-arch-black"
      } ${showDivider ? "border-t border-[#e8e4dc] md:border-t-0 md:border-l md:border-[#e8e4dc]" : ""}`}
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
        <div className="min-w-0 pt-0.5">
          <h3 className="font-heading text-[12px] font-bold uppercase leading-snug tracking-[0.04em] sm:text-[13px]">
            <span className={featured ? "text-[#c5a059]" : "text-nebco-red"}>{pillar.number}</span>{" "}
            <span className={featured ? "text-[#e8d5a8]" : "text-arch-black"}>{pillar.title}</span>
          </h3>
        </div>
      </div>

      <p
        className={`mt-3 text-[12.5px] leading-[1.55] sm:mt-3.5 sm:text-[13px] ${
          featured ? "text-white/78" : "text-[#4a4a4a]"
        }`}
      >
        {pillar.description}
      </p>

      <ul className="mt-3 space-y-1.5 sm:mt-3.5 sm:space-y-2">
        {pillar.points.map((point) => (
          <li
            key={point}
            className={`flex items-start gap-2 text-[12px] leading-snug sm:text-[12.5px] ${
              featured ? "text-white/75" : "text-[#3d3d3d]"
            }`}
          >
            <span
              className="mt-[4px] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: featured ? GOLD_SOFT : GOLD }}
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ConsultingPillarsSection() {
  const [activeId, setActiveId] = useState("structuring");

  /** Design trio: 01 | selected (dark) | 07 — ends stay anchored like the reference. */
  const displayPillars = useMemo(() => {
    const first = PILLARS[0];
    const last = PILLARS[6];
    if (activeId === "evaluation" || activeId === "construction") {
      return [PILLARS[0], PILLARS[2], PILLARS[6]] as const;
    }
    const middle = PILLARS.find((p) => p.id === activeId) ?? PILLARS[2];
    return [first, middle, last] as const;
  }, [activeId]);

  const darkId = activeId;

  return (
    <section className="overflow-hidden bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-7 pb-3 pt-8 sm:px-10 sm:pb-4 sm:pt-9 lg:px-12 lg:pb-5 lg:pt-10 xl:px-14">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,2.22fr)] lg:gap-6 xl:gap-8">
          {/* Left — pillar list with gold spine */}
          <div>
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
              03 / SEVEN SERVICE PILLARS
            </p>

            <ol className="relative mt-5 sm:mt-6">
              {/* Bold gold vertical spine */}
              <span
                className="pointer-events-none absolute bottom-2 left-[4px] top-2 w-[2.5px] rounded-full"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />

              {PILLARS.map((pillar) => {
                const isActive = pillar.id === activeId;
                return (
                  <li key={pillar.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(pillar.id)}
                      className="relative flex w-full items-baseline gap-3 py-1 pl-5 text-left sm:gap-3 sm:py-[0.28rem]"
                    >
                      <span
                        className="absolute left-0 top-1/2 z-[1] h-2.5 w-2.5 -translate-y-1/2 rounded-full border-[2px]"
                        style={{
                          borderColor: GOLD,
                          backgroundColor: isActive ? GOLD : "#f5f2ed",
                        }}
                        aria-hidden="true"
                      />
                      <span className="shrink-0 font-heading text-[15px] font-bold tabular-nums text-nebco-red sm:text-[16px]">
                        {pillar.number}
                      </span>
                      <span
                        className={`font-heading text-[11px] font-semibold uppercase tracking-[0.06em] sm:text-[12px] ${
                          isActive ? "text-arch-black" : "text-arch-black/75"
                        }`}
                      >
                        {pillar.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right — hairline outline; dark fill flush to edges */}
          <div className="self-start border border-[#e8e4dc]">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-3">
              {displayPillars.map((pillar, index) => (
                <PillarCard
                  key={`${pillar.id}-${darkId}`}
                  pillar={pillar}
                  featured={pillar.id === darkId}
                  showDivider={index > 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
