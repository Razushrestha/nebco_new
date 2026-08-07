"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

export type AudienceId =
  | "landowners"
  | "nrns"
  | "businesses"
  | "developers"
  | "owners";

type Audience = {
  id: AudienceId;
  label: string;
  title: string;
  description: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
};

export const AUDIENCES: readonly Audience[] = [
  {
    id: "landowners",
    label: "LANDOWNERS",
    title: "Landowners",
    description:
      "You own the land. We help you understand its true potential, the best use, approvals required, likely costs and returns—so you can decide with confidence.",
    points: [
      "Land potential and zoning review",
      "Best use and development concept",
      "Financial feasibility and risk assessment",
      "End-to-end development partner",
    ],
    image: IMAGES.consultingServeLandowners,
    imageAlt: "Landowners reviewing development plans on a Kathmandu rooftop",
  },
  {
    id: "nrns",
    label: "NRNS",
    title: "NRNs",
    description:
      "Building or investing from abroad needs a reliable local partner. We coordinate evaluation, decisions and delivery—with clear reporting at every stage.",
    points: [
      "Local coordination with digital updates",
      "Documented decisions and milestone reporting",
      "Property evaluation and feasibility support",
      "Construction and market engagement oversight",
    ],
    image: IMAGES.meetingOffice,
    imageAlt: "Remote coordination for overseas Nepali clients",
  },
  {
    id: "businesses",
    label: "BUSINESSES",
    title: "Businesses",
    description:
      "Whether you need an owner-occupied facility or an income-generating asset, we structure the project so space, cost and operations align with your business.",
    points: [
      "Owner-occupied offices and commercial buildings",
      "Hospitality and specialised facilities",
      "Built-to-suit and income-generating properties",
      "Redevelopment and adaptive reuse",
    ],
    image: IMAGES.commercialBuilding,
    imageAlt: "Commercial development for business clients",
  },
  {
    id: "developers",
    label: "DEVELOPERS & INVESTORS",
    title: "Developers & Investors",
    description:
      "From feasibility through financing and execution, we help you structure projects that are commercially sound and delivery-ready.",
    points: [
      "Feasibility and project structuring",
      "Finance coordination and execution planning",
      "Market positioning and professional team assembly",
      "Construction project management through handover",
    ],
    image: IMAGES.modernApartment,
    imageAlt: "Development project for investors",
  },
  {
    id: "owners",
    label: "EXISTING PROJECT OWNERS",
    title: "Existing Project Owners",
    description:
      "Already underway but need clarity, control or course correction? We step in to assess status, strengthen coordination and protect outcomes.",
    points: [
      "Independent project status and risk review",
      "Programme and cost realignment",
      "Stakeholder and contractor coordination",
      "Quality, compliance and handover support",
    ],
    image: IMAGES.constructionSite,
    imageAlt: "Active construction project oversight",
  },
] as const;

function IconPerson({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="M5.5 19.25c1.4-3.1 3.7-4.65 6.5-4.65s5.1 1.55 6.5 4.65"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.35" />
      <ellipse cx="12" cy="12" rx="3.4" ry="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.2 12h15.6M5.4 8.2h13.2M5.4 15.8h13.2" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.2" stroke="currentColor" strokeWidth="1.35" />
      <path d="M9 7.5V6.2A1.7 1.7 0 0 1 10.7 4.5h2.6A1.7 1.7 0 0 1 15 6.2v1.3" stroke="currentColor" strokeWidth="1.35" />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconBuildings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 20.5V9.5l5-3v14" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M8.5 20.5V5.5h7v15" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M15.5 20.5V8.5l5 2.5v9.5" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M10.5 8.5h1M10.5 11h1M10.5 13.5h1M13 8.5h1M13 11h1M13 13.5h1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconHardHat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 14.5c0-4 2.9-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path d="M3.5 16.5h17" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M12 7.5V5.8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M5.2 16.5c.4 1.6 1.9 2.7 3.8 2.7h6c1.9 0 3.4-1.1 3.8-2.7" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function IconCheckGold({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8.25" stroke={GOLD} strokeWidth="1.25" />
      <path
        d="M6.2 10.15 8.7 12.6l5.2-5.4"
        stroke={GOLD}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TAB_ICONS = {
  landowners: IconPerson,
  nrns: IconGlobe,
  businesses: IconBriefcase,
  developers: IconBuildings,
  owners: IconHardHat,
} as const;

function ServeWireframe() {
  return (
    <svg viewBox="0 0 280 420" fill="none" className="h-full w-full" aria-hidden="true">
      <g stroke={GOLD} strokeWidth="0.9" opacity="0.28">
        <path d="M40 380 V120 L140 40 L240 120 V380" />
        <path d="M40 120 H240" />
        <path d="M70 380 V150 H210 V380" />
        <path d="M70 190 H210 M70 230 H210 M70 270 H210 M70 310 H210 M70 350 H210" />
        <path d="M100 150 V380 M140 150 V380 M180 150 V380" />
        <path d="M110 90 L140 65 L170 90" />
        <rect x="125" y="340" width="30" height="40" />
      </g>
    </svg>
  );
}

export function ConsultingServeTabs({
  activeId,
  onSelect,
}: {
  activeId: AudienceId;
  onSelect: (id: AudienceId) => void;
}) {
  return (
    <div className="consulting-serve-tabs relative">
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[min(28%,280px)] opacity-90 lg:block"
        aria-hidden="true"
      >
        <ServeWireframe />
      </div>

      <div className="relative z-[1] mx-auto max-w-[1440px] px-0">
        <p
          className="consulting-serve-tabs__eyebrow font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] sm:text-[11px]"
          style={{ color: GOLD }}
        >
          02 / WHO WE SERVE
        </p>

        <div
          className="flex flex-col border-y lg:flex-row"
          style={{ borderColor: `${GOLD}55` }}
        >
          {AUDIENCES.map((aud, i) => {
            const Icon = TAB_ICONS[aud.id];
            const isActive = aud.id === activeId;
            return (
              <button
                key={aud.id}
                type="button"
                onClick={() => onSelect(aud.id)}
                className={`consulting-serve-tabs__btn relative flex flex-1 flex-col items-center justify-center gap-1.5 border-b px-2 py-3.5 text-center transition-colors last:border-b-0 lg:border-b-0 lg:px-3 ${
                  isActive
                    ? "bg-nebco-red text-white"
                    : "bg-transparent text-white/90 hover:bg-white/[0.04] hover:text-white"
                } ${i > 0 ? "lg:border-l" : ""}`}
                style={{ borderColor: `${GOLD}55` }}
              >
                <Icon className="h-[18px] w-[18px] shrink-0 sm:h-5 sm:w-5" />
                <span className="max-w-[11rem] font-heading text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] sm:text-[10px] lg:text-[10.5px] lg:tracking-[0.12em]">
                  {aud.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ConsultingServeContent({ activeId }: { activeId: AudienceId }) {
  const active = AUDIENCES.find((a) => a.id === activeId) ?? AUDIENCES[0];

  return (
    <div className="consulting-serve-content relative z-[1] mx-auto max-w-[1440px]">
      <div className="consulting-serve-content__grid grid grid-cols-1 items-start gap-8 px-7 py-10 sm:gap-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-12 lg:py-14 xl:gap-16 xl:px-14">
        <div className="consulting-serve-content__media relative aspect-[16/10] w-full overflow-hidden sm:aspect-[5/3]">
          <Image
            key={active.image}
            src={active.image}
            alt={active.imageAlt}
            fill
            className={`object-cover ${active.id === "landowners" ? "object-[center_35%]" : "object-center"}`}
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>

        <div className="consulting-serve-content__copy text-white lg:pt-1">
          <h3 className="consulting-serve-content__title type-h3 tracking-[-0.02em]">{active.title}</h3>
          <p className="consulting-serve-content__desc mt-4 max-w-[32rem] text-[14px] leading-[1.7] text-white/78 sm:mt-5 sm:text-[15px] lg:leading-[1.72]">
            {active.description}
          </p>
          <ul className="consulting-serve-content__list mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
            {active.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[13.5px] text-white/80 sm:text-[14.5px]">
                <IconCheckGold className="h-[18px] w-[18px] shrink-0 sm:h-5 sm:w-5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ConsultingServeSection() {
  const [activeId, setActiveId] = useState<AudienceId>("landowners");

  return (
    <section className="consulting-serve relative overflow-hidden bg-[#121212]">
      <ConsultingServeTabs activeId={activeId} onSelect={setActiveId} />
      <ConsultingServeContent activeId={activeId} />
    </section>
  );
}
