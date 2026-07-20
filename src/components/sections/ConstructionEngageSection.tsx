"use client";

import { useCallback, useState, type ReactNode } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  BuildingWireframeIllustration,
  type BuildingWireframePreset,
} from "@/components/ui/BuildingWireframeIllustration";

const GOLD = "#c5a059";

type EngagementModel = {
  id: string;
  label: string;
  description: string;
  columns: readonly [readonly string[], readonly string[]];
  wireframe: BuildingWireframePreset;
  icon: ReactNode;
};

const ENGAGEMENT_MODELS: readonly EngagementModel[] = [
  {
    id: "item-rate",
    label: "Item-Rate Contracting",
    description:
      "Pay for measured work at agreed rates. Ideal when scope is defined and schedules are clear.",
    columns: [
      ["Transparent measurements and rate analysis", "Clear scope and quantities", "Progress-based payments"],
      ["Cost control and flexibility", "Regular reporting", "Efficient delivery"],
    ],
    wireframe: "tower",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 lg:w-11 lg:h-11" aria-hidden="true">
        <rect x="8" y="10" width="20" height="28" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <line x1="12" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1.1" />
        <line x1="12" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.1" />
        <line x1="12" y1="27" x2="20" y2="27" stroke="currentColor" strokeWidth="1.1" />
        <rect x="28" y="14" width="14" height="20" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <rect x="31" y="18" width="3" height="2.5" stroke="currentColor" strokeWidth="0.9" />
        <rect x="36" y="18" width="3" height="2.5" stroke="currentColor" strokeWidth="0.9" />
        <rect x="31" y="23" width="3" height="2.5" stroke="currentColor" strokeWidth="0.9" />
        <rect x="36" y="23" width="3" height="2.5" stroke="currentColor" strokeWidth="0.9" />
        <line x1="31" y1="29" x2="39" y2="29" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "general",
    label: "General Contracting",
    description:
      "Single contract, single point of accountability. We take responsibility for coordinating trades, materials and delivery.",
    columns: [
      ["End-to-end build coordination", "Subcontractor and supplier management", "Unified programme control"],
      ["Cost and schedule accountability", "Site supervision and reporting", "Quality and safety oversight"],
    ],
    wireframe: "complex",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 lg:w-11 lg:h-11" aria-hidden="true">
        <path
          d="M12 26c2.5-4 5-5.5 8-5.5s5.5 1.5 8 5.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M20 26c2.5-4 5-5.5 8-5.5s5.5 1.5 8 5.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path d="M10 30h28" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M16 22v-5M32 22v-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "turnkey",
    label: "Turnkey Coordination",
    description:
      "Integrated coordination from design alignment through to handover — one structured path for clients who want a ready outcome.",
    columns: [
      ["Design-to-build coordination", "Early contractor involvement", "Streamlined approvals and procurement"],
      ["Aligned commercial structure", "Faster decision cycles", "Ready-for-use delivery"],
    ],
    wireframe: "campus",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 lg:w-11 lg:h-11" aria-hidden="true">
        <path d="M10 16h12v12H10zM26 16h12v12H26zM10 30h12v12H10z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M26 30h12v6H26z" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="16" cy="22" r="1.8" fill="currentColor" />
        <circle cx="32" cy="22" r="1.8" fill="currentColor" />
        <circle cx="16" cy="36" r="1.8" fill="currentColor" />
        <path d="M29 33h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "management",
    label: "Construction Management",
    description:
      "Professional management on your behalf — planning, procurement, supervision and reporting without transferring build risk.",
    columns: [
      ["Client-side programme control", "Procurement and tender support", "Independent site supervision"],
      ["Cost and change management", "Contract administration", "Stakeholder and progress reporting"],
    ],
    wireframe: "managed",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 lg:w-11 lg:h-11" aria-hidden="true">
        <rect x="12" y="10" width="22" height="28" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <line x1="16" y1="17" x2="30" y2="17" stroke="currentColor" strokeWidth="1.1" />
        <line x1="16" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1.1" />
        <line x1="16" y1="27" x2="24" y2="27" stroke="currentColor" strokeWidth="1.1" />
        <path d="M16 32l2.5 2.5L24 29" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="16" r="6" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="36" cy="16" r="2" stroke="currentColor" strokeWidth="1" />
        <path d="M36 10v2M36 20v2M30 16h2M40 16h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "specialised",
    label: "Specialised Works",
    description:
      "Targeted delivery for technical or complex scopes — structural, MEP, finishing or specialist packages within wider projects.",
    columns: [
      ["Technical scope definition", "Specialist trade coordination", "Quality-critical execution"],
      ["Interface and sequencing control", "Testing and commissioning support", "Documented specialist handover"],
    ],
    wireframe: "specialised",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 lg:w-11 lg:h-11" aria-hidden="true">
        <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="1.1" />
        <path d="M22 12v3M22 29v3M12 22h3M29 22h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M30 30l8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

function GoldBullet() {
  return (
    <span className="inline-block w-5 h-px shrink-0 mt-[0.6rem]" style={{ backgroundColor: GOLD }} aria-hidden="true" />
  );
}

function EngageDetailPanel({ model }: { model: EngagementModel }) {
  return (
    <div className="engage-panel-enter">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_1fr_1fr] lg:grid-cols-[minmax(0,1.2fr)_1fr_1fr_auto] gap-8 lg:gap-6 xl:gap-10 items-center">
        <p className="text-[13px] lg:text-[14px] xl:text-[15px] text-white/80 leading-[1.65] max-w-[17rem]">
          {model.description}
        </p>

        {model.columns.map((column, colIndex) => (
          <ul key={colIndex} className="space-y-2.5 lg:space-y-3">
            {column.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <GoldBullet />
                <span className="text-[12px] lg:text-[13px] xl:text-[14px] text-white/70 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        ))}

        <div className="hidden lg:flex items-end justify-end self-stretch pb-1 min-w-[150px] xl:min-w-[190px]">
          <BuildingWireframeIllustration
            preset={model.wireframe}
            className="w-[150px] xl:w-[190px] h-auto"
            variant="panel"
          />
        </div>
      </div>
    </div>
  );
}

export function ConstructionEngageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ENGAGEMENT_MODELS[activeIndex];

  const selectTab = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="bg-ivory-light border-t border-soft-concrete/70 py-12 lg:py-16 xl:py-20">
      <div className="container-nebco">
        <div className="flex items-center gap-4 lg:gap-5 mb-8 lg:mb-10">
          <SectionEyebrow
            number="03"
            title="HOW WE ENGAGE"
            className="!text-[11px] !tracking-[0.16em] !mb-0 shrink-0"
          />
          <div className="flex-1 h-px bg-nebco-red/35" aria-hidden="true" />
        </div>

        <div
          role="tablist"
          aria-label="Engagement models"
          className="overflow-x-auto pb-0 -mx-1 px-1 lg:overflow-visible"
        >
          <div className="grid grid-cols-5 min-w-[680px] lg:min-w-0 bg-ivory-light border-y border-soft-concrete/70">
            {ENGAGEMENT_MODELS.map((model, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={model.id}
                  id={`engage-tab-${model.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`engage-panel-${model.id}`}
                  onClick={() => selectTab(index)}
                  className={`relative flex flex-col items-center justify-start px-2 sm:px-3 pt-6 pb-7 lg:pt-7 lg:pb-8 transition-colors duration-200 ${
                    index > 0 ? "border-l border-soft-concrete/70" : ""
                  } ${isActive ? "bg-soft-concrete/35" : "hover:bg-soft-concrete/20"}`}
                >
                  <span className="text-pale-gold">{model.icon}</span>
                  <span className="mt-3.5 text-[9px] sm:text-[10px] font-mono font-medium uppercase tracking-[0.11em] text-center leading-snug text-pale-gold max-w-[7.5rem]">
                    {model.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute -bottom-px left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-nebco-red"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`engage-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`engage-tab-${active.id}`}
          className="relative bg-arch-black overflow-hidden min-h-[220px] lg:min-h-[240px]"
        >
          <div className="relative z-10 px-6 sm:px-8 lg:px-10 xl:px-12 py-8 lg:py-10 xl:py-11">
            <EngageDetailPanel key={active.id} model={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
