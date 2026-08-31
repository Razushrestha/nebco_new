"use client";

import { useMemo, useState } from "react";

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
      "We test concepts against market demand, costs and returns-so the idea is commercially viable before design commitment.",
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
      "We structure the project for clarity, control and bankability-aligning scope, costs, revenue and execution strategy.",
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
      "We help prepare the project for lenders and partners-clear numbers, documentation and a structure that supports funding.",
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
      "We align the product with buyer and tenant demand-positioning, pricing logic and go-to-market timing.",
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
      "We oversee construction with focus on quality, schedule, cost and safety-delivering the asset as promised.",
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
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 36 H40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="33.5" cy="14.5" r="6.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M38 19.2 43.5 24.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconFeasibility({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="10" y="8" width="22" height="30" rx="1.5" stroke="currentColor" strokeWidth="1.55" />
      <path d="M15 16h12M15 21h12M15 26h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="34" cy="30" r="7.5" stroke="currentColor" strokeWidth="1.55" />
      <path d="M34 26.5v4.2l2.8 1.6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function IconStructuring({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="17" y="6" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.55" />
      <path d="M24 16v6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 22h28" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 22v5M24 22v5M36 22v5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="27" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.55" />
      <rect x="17" y="27" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.55" />
      <rect x="29" y="27" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.55" />
    </svg>
  );
}

function IconDesign({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 36 V16 L24 8 L38 16 V36" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M10 16h28M17 16v20M31 16v20M17 26h14" stroke="currentColor" strokeWidth="1.35" />
      <rect x="21" y="30" width="6" height="6" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function IconFinance({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="22" r="9" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="30" cy="26" r="9" stroke="currentColor" strokeWidth="1.55" />
      <path d="M18 17.5v9M14.5 20.5h7M14.5 24h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M30 21.5v9M26.5 24.5h7M26.5 28h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconMarket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M12 36V18l8-6 8 6v18" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M16 36V22h16v14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 26h2M26 26h2M20 30h2M26 30h2" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <circle cx="36" cy="14" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 11.5v3l2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconConstruction({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 28c0-8 5.5-14 14-14s14 6 14 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M8 31h32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 14V10.5" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path
        d="M11 31c.7 3.2 3.6 5.5 7.2 5.5h11.6c3.6 0 6.5-2.3 7.2-5.5"
        stroke="currentColor"
        strokeWidth="1.55"
      />
      <path d="M18 20.5h12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
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

function PillarCard({ pillar, featured }: { pillar: Pillar; featured: boolean }) {
  const Icon = PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];

  return (
    <article
      className={`consulting-pillar-card ${featured ? "consulting-pillar-card--featured" : "consulting-pillar-card--light"}`}
    >
      <div className="consulting-pillar-card__header">
        <Icon className="consulting-pillar-card__icon" />
        <h3 className="consulting-pillar-card__heading">
          <span className="consulting-pillar-card__number">{pillar.number}</span>{" "}
          <span className="consulting-pillar-card__title">{pillar.title}</span>
        </h3>
      </div>

      <p className="consulting-pillar-card__desc">{pillar.description}</p>

      <ul className="consulting-pillar-card__list">
        {pillar.points.map((point) => (
          <li key={point} className="consulting-pillar-card__list-item">
            <span className="consulting-pillar-card__bullet" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ConsultingPillarsSection() {
  const [activeId, setActiveId] = useState("structuring");

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
    <section className="consulting-pillars overflow-hidden bg-[#f5f2ed]">
      <div className="consulting-pillars__inner mx-auto max-w-[1440px]">
        <div className="consulting-pillars__layout">
          <p className="consulting-pillars__eyebrow">03 / SEVEN SERVICE PILLARS</p>

          <ol className="consulting-pillars__list-nav">
            <span className="consulting-pillars__spine" aria-hidden="true" />

            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activeId;
              return (
                <li key={pillar.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(pillar.id)}
                    className={`consulting-pillars__nav-btn ${isActive ? "is-active" : ""}`}
                  >
                    <span className="consulting-pillars__nav-dot" aria-hidden="true" />
                    <span className="consulting-pillars__nav-num">{pillar.number}</span>
                    <span className="consulting-pillars__nav-label">{pillar.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="consulting-pillars__cards">
            {displayPillars.map((pillar) => {
              const featured = pillar.id === darkId;
              return (
                <div
                  key={`${pillar.id}-${darkId}`}
                  className={`consulting-pillars__slot${featured ? " consulting-pillars__slot--featured" : ""}`}
                >
                  <PillarCard pillar={pillar} featured={featured} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
