"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  BuildingWireframeIllustration,
  type BuildingWireframePreset,
} from "@/components/ui/BuildingWireframeIllustration";
import { GoldDashBullet } from "@/components/ui/GoldDashBullet";
import { IMAGES } from "@/lib/images";

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
  wireframeImage?: string;
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
    wireframeImage: IMAGES.engageWireframeBuilding,
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

function EngageWireframe({ model }: { model: EngagementModel }) {
  if (model.wireframeImage) {
    return (
      <div className="engage-detail__wireframe" aria-hidden="true">
        <Image
          src={model.wireframeImage}
          alt=""
          fill
          className="engage-detail__wireframe-img"
          sizes="(max-width: 1024px) 40vw, 280px"
        />
      </div>
    );
  }

  return (
    <div className="engage-detail__wireframe engage-detail__wireframe--svg" aria-hidden="true">
      <BuildingWireframeIllustration preset={model.wireframe} className="h-full w-full" variant="panel" />
    </div>
  );
}

function EngageDetailPanel({ model }: { model: EngagementModel }) {
  return (
    <div className="engage-detail engage-panel-enter">
      <div className="engage-detail__content">
        <p className="engage-detail__lead">{model.description}</p>

        {model.columns.map((column, colIndex) => (
          <ul key={colIndex} className="engage-detail__list">
            {column.map((item) => (
              <li key={item} className="engage-detail__list-item">
                <GoldDashBullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ))}
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
    <section className="border-t border-soft-concrete/70 bg-ivory-light py-10 lg:py-12 xl:py-14">
      <div className="container-nebco">
        <div className="mb-6 flex items-center gap-4 lg:mb-7 lg:gap-5">
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
                  {isActive && <span className="engage-tab-indicator" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id={`engage-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`engage-tab-${active.id}`}
          className="engage-detail-panel relative overflow-hidden bg-arch-black"
        >
          <div className="relative z-10 px-6 py-7 sm:px-8 lg:px-9 lg:py-8 xl:px-10 xl:py-9">
            <EngageDetailPanel key={active.id} model={active} />
          </div>
          <EngageWireframe model={active} />
        </div>
      </div>
    </section>
  );
}
