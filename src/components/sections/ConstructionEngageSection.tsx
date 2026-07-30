"use client";

import { useCallback, useState } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  BuildingWireframeIllustration,
  type BuildingWireframePreset,
} from "@/components/ui/BuildingWireframeIllustration";

const GOLD = "#c5a059";

const ENGAGE_ICONS = {
  "item-rate": "/engage/processed/item%20rate%20contracting.png",
  general: "/engage/processed/General%20contracting.png",
  turnkey: "/engage/processed/turnkey_coordination.png",
  management: "/engage/processed/construction_management.png",
  specialised: "/engage/processed/Specialized%20work.png",
} as const;

type EngagementModel = {
  id: keyof typeof ENGAGE_ICONS;
  labelLines: readonly [string, string];
  description: string;
  columns: readonly [readonly string[], readonly string[]];
  wireframe: BuildingWireframePreset;
  iconSrc: string;
  iconAlt: string;
};

const ENGAGEMENT_MODELS: readonly EngagementModel[] = [
  {
    id: "item-rate",
    labelLines: ["ITEM-RATE", "CONTRACTING"],
    description:
      "Pay for measured work at agreed rates. Ideal when scope is defined and schedules are clear.",
    columns: [
      ["Transparent measurements and rate analysis", "Clear scope and quantities", "Progress-based payments"],
      ["Cost control and flexibility", "Regular reporting", "Efficient delivery"],
    ],
    wireframe: "tower",
    iconSrc: ENGAGE_ICONS["item-rate"],
    iconAlt: "Item-rate contracting",
  },
  {
    id: "general",
    labelLines: ["GENERAL", "CONTRACTING"],
    description:
      "Single contract, single point of accountability. We take responsibility for coordinating trades, materials and delivery.",
    columns: [
      ["End-to-end build coordination", "Subcontractor and supplier management", "Unified programme control"],
      ["Cost and schedule accountability", "Site supervision and reporting", "Quality and safety oversight"],
    ],
    wireframe: "complex",
    iconSrc: ENGAGE_ICONS.general,
    iconAlt: "General contracting",
  },
  {
    id: "turnkey",
    labelLines: ["TURNKEY", "COORDINATION"],
    description:
      "Integrated coordination from design alignment through to handover — one structured path for clients who want a ready outcome.",
    columns: [
      ["Design-to-build coordination", "Early contractor involvement", "Streamlined approvals and procurement"],
      ["Aligned commercial structure", "Faster decision cycles", "Ready-for-use delivery"],
    ],
    wireframe: "campus",
    iconSrc: ENGAGE_ICONS.turnkey,
    iconAlt: "Turnkey coordination",
  },
  {
    id: "management",
    labelLines: ["CONSTRUCTION", "MANAGEMENT"],
    description:
      "Professional management on your behalf — planning, procurement, supervision and reporting without transferring build risk.",
    columns: [
      ["Client-side programme control", "Procurement and tender support", "Independent site supervision"],
      ["Cost and change management", "Contract administration", "Stakeholder and progress reporting"],
    ],
    wireframe: "managed",
    iconSrc: ENGAGE_ICONS.management,
    iconAlt: "Construction management",
  },
  {
    id: "specialised",
    labelLines: ["SPECIALISED", "WORKS"],
    description:
      "Targeted delivery for technical or complex scopes — structural, MEP, finishing or specialist packages within wider projects.",
    columns: [
      ["Technical scope definition", "Specialist trade coordination", "Quality-critical execution"],
      ["Interface and sequencing control", "Testing and commissioning support", "Documented specialist handover"],
    ],
    wireframe: "specialised",
    iconSrc: ENGAGE_ICONS.specialised,
    iconAlt: "Specialised works",
  },
];

function EngageTabIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="engage-tab-icon"
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
      }}
      role="img"
      aria-label={alt}
    />
  );
}

function EngageTabLabel({ lines }: { lines: readonly [string, string] }) {
  return (
    <span className="engage-tab-label">
      <span className="block">{lines[0]}</span>
      <span className="block">{lines[1]}</span>
    </span>
  );
}

function GoldBullet() {
  return (
    <span className="mt-[0.6rem] inline-block h-px w-5 shrink-0" style={{ backgroundColor: GOLD }} aria-hidden="true" />
  );
}

function EngageDetailPanel({ model }: { model: EngagementModel }) {
  return (
    <div className="engage-panel-enter">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1.15fr)_1fr_1fr] lg:grid-cols-[minmax(0,1.2fr)_1fr_1fr_auto] lg:gap-6 xl:gap-10">
        <p className="max-w-[17rem] text-[13px] leading-[1.65] text-white/80 lg:text-[14px] xl:text-[15px]">
          {model.description}
        </p>

        {model.columns.map((column, colIndex) => (
          <ul key={colIndex} className="space-y-2.5 lg:space-y-3">
            {column.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <GoldBullet />
                <span className="text-[12px] leading-snug text-white/70 lg:text-[13px] xl:text-[14px]">{item}</span>
              </li>
            ))}
          </ul>
        ))}

        <div className="hidden min-w-[150px] items-end justify-end self-stretch pb-1 lg:flex xl:min-w-[190px]">
          <BuildingWireframeIllustration
            preset={model.wireframe}
            className="h-auto w-[150px] xl:w-[190px]"
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
    <section className="border-t border-soft-concrete/70 bg-ivory-light py-12 lg:py-16 xl:py-20">
      <div className="container-nebco">
        <div className="mb-8 flex items-center gap-4 lg:mb-10 lg:gap-5">
          <SectionEyebrow
            number="03"
            title="HOW WE ENGAGE"
            className="!mb-0 shrink-0 !text-[11px] !tracking-[0.16em]"
          />
          <div className="h-px flex-1 bg-nebco-red/35" aria-hidden="true" />
        </div>

        <div
          role="tablist"
          aria-label="Engagement models"
          className="-mx-1 overflow-x-auto px-1 pb-0 lg:overflow-visible"
        >
          <div className="engage-tablist grid min-w-[680px] grid-cols-5 border-y border-soft-concrete/70 bg-ivory-light lg:min-w-0">
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
                  className={`engage-tab relative flex flex-col items-center justify-start ${
                    isActive ? "engage-tab--active bg-soft-concrete/40" : "hover:bg-soft-concrete/15"
                  }`}
                >
                  {index > 0 && <span className="engage-tab-divider" aria-hidden="true" />}
                  <EngageTabIcon src={model.iconSrc} alt={model.iconAlt} />
                  <EngageTabLabel lines={model.labelLines} />
                  {isActive && (
                    <span className="engage-tab-indicator" aria-hidden="true" />
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
          className="relative min-h-[220px] overflow-hidden bg-arch-black lg:min-h-[240px]"
        >
          <div className="relative z-10 px-6 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-12 xl:py-11">
            <EngageDetailPanel key={active.id} model={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
