"use client";

import { useState } from "react";

/**
 * Partners - External Professional Network
 * Dark split: left copy + right discipline tabs, flush card rail, legend.
 */

const GOLD = "#c5a059";
const RED = "#bc2026";
const INK_MUTED = "rgba(255,255,255,0.55)";

const TABS = [
  "Architecture",
  "Engineering",
  "Finance",
  "Legal",
  "Real Estate",
  "Marketing",
] as const;

type TabId = (typeof TABS)[number];

type PartnerCard = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  mark: "buildings" | "set-square" | "chart" | "scales" | "house" | "megaphone";
};

const CARDS_BY_TAB: Record<TabId, readonly PartnerCard[]> = {
  Architecture: [
    { id: "a1", title: "External Consultant", subtitle: "Project Based", mark: "buildings" },
    { id: "a2", title: "Strategic Partner", subtitle: "Project Based", mark: "buildings" },
    { id: "a3", title: "External Consultant", subtitle: "Project Based", mark: "buildings" },
    { id: "a4", title: "Project-Specific Collaborator", subtitle: "Project Based", mark: "buildings" },
  ],
  Engineering: [
    { id: "e1", title: "External Consultant", subtitle: "Project Based", mark: "set-square" },
    { id: "e2", title: "Strategic Partner", subtitle: "Project Based", mark: "set-square" },
    { id: "e3", title: "External Consultant", subtitle: "Project Based", mark: "set-square" },
    { id: "e4", title: "Project-Specific Collaborator", subtitle: "Project Based", mark: "set-square" },
  ],
  Finance: [
    { id: "f1", title: "Finance Advisor", subtitle: "Appointed", mark: "chart" },
    { id: "f2", title: "Strategic Partner", subtitle: "Engaged", mark: "chart" },
    { id: "f3", title: "Banking Partner", subtitle: "Engaged", mark: "chart" },
    { id: "f4", title: "Project-Specific Collaborator", subtitle: "Project Based", mark: "chart" },
  ],
  Legal: [
    { id: "l1", title: "Legal Advisor", subtitle: "Appointed", mark: "scales" },
    { id: "l2", title: "Strategic Partner", subtitle: "Engaged", mark: "scales" },
    { id: "l3", title: "External Counsel", subtitle: "Project Based", mark: "scales" },
    { id: "l4", title: "Project-Specific Collaborator", subtitle: "Project Based", mark: "scales" },
  ],
  "Real Estate": [
    { id: "r1", title: "Market Advisor", subtitle: "Engaged", mark: "house" },
    { id: "r2", title: "Strategic Partner", subtitle: "Engaged", mark: "house" },
    { id: "r3", title: "External Consultant", subtitle: "Project Based", mark: "house" },
    { id: "r4", title: "Project-Specific Collaborator", subtitle: "Project Based", mark: "house" },
  ],
  Marketing: [
    { id: "m1", title: "Marketing Partner", subtitle: "Engaged", mark: "megaphone" },
    { id: "m2", title: "Strategic Partner", subtitle: "Engaged", mark: "megaphone" },
    { id: "m3", title: "Brand Collaborator", subtitle: "Project Based", mark: "megaphone" },
    { id: "m4", title: "Project-Specific Collaborator", subtitle: "Project Based", mark: "megaphone" },
  ],
};

function PlaceholderIcon({ mark }: { mark: PartnerCard["mark"] }) {
  const common = {
    className: "h-[5.5rem] w-auto text-white/80 sm:h-[6.25rem] lg:h-[6.75rem]",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.1,
    "aria-hidden": true as const,
  };

  switch (mark) {
    case "set-square":
      return (
        <svg viewBox="0 0 120 88" {...common}>
          <path d="M18 72V22l40 50H18z" />
          <path d="M42 72l50-50v50H42z" />
          <path d="M34 52h16M62 52h18" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 120 88" {...common}>
          <path d="M22 68V42M48 68V28M74 68V18M100 68V36" />
          <path d="M18 72h88" />
          <path d="M68 24l18-10 12 10" />
        </svg>
      );
    case "scales":
      return (
        <svg viewBox="0 0 120 88" {...common}>
          <path d="M60 16v48" />
          <path d="M36 72h48" />
          <path d="M60 28L28 48h24l8-6 8 6h24z" />
          <circle cx="36" cy="54" r="8" />
          <circle cx="84" cy="54" r="8" />
        </svg>
      );
    case "house":
      return (
        <svg viewBox="0 0 120 88" {...common}>
          <path d="M22 44l38-28 38 28" />
          <path d="M34 42v34h52V42" />
          <path d="M52 76V54h16v22" />
          <path d="M78 24V16h12v14" />
        </svg>
      );
    case "megaphone":
      return (
        <svg viewBox="0 0 120 88" {...common}>
          <path d="M28 36h18l34-18v56L46 56H28z" />
          <path d="M46 56v16a8 8 0 0 0 8 8h4" />
          <path d="M86 34c8 6 12 14 12 22s-4 16-12 22" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 120 100" {...common}>
          <rect x="10" y="32" width="26" height="56" />
          <rect x="42" y="14" width="34" height="74" />
          <rect x="82" y="26" width="26" height="62" />
          <path d="M10 44h26M10 56h26M10 68h26" />
          <path d="M42 28h34M42 40h34M42 52h34M42 64h34M42 76h34" />
          <path d="M82 38h26M82 50h26M82 62h26M82 74h26" />
          <path d="M59 14v74M95 26v62" opacity="0.5" />
        </svg>
      );
  }
}

function CardVisual({ card }: { card: PartnerCard }) {
  if (card.imageSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={card.imageSrc}
        alt=""
        className="max-h-[6.75rem] w-auto object-contain opacity-90"
      />
    );
  }
  return <PlaceholderIcon mark={card.mark} />;
}

function NetworkLegend() {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-start gap-x-8 gap-y-3 sm:mt-7 sm:gap-x-10 lg:justify-center">
      <li className="flex items-center gap-2.5">
        <span className="block h-px w-10" style={{ backgroundColor: GOLD }} aria-hidden="true" />
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[10px]">
          Selected by NEBCO
        </span>
      </li>
      <li className="flex items-center gap-2.5">
        <span className="relative flex h-3 w-11 items-center" aria-hidden="true">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={{ backgroundColor: RED }} />
          <span
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: RED, boxShadow: `0 0 0 2px ${RED}55` }}
          />
        </span>
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[10px]">
          Reports to NEBCO
        </span>
      </li>
      <li className="flex items-center gap-2.5">
        <span
          className="block h-px w-10 border-t border-dashed border-white/45"
          aria-hidden="true"
        />
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-[10px]">
          Independent Relationship
        </span>
      </li>
    </ul>
  );
}

export function PartnersNetworkSection() {
  const [activeTab, setActiveTab] = useState<TabId>("Architecture");
  const cards = CARDS_BY_TAB[activeTab];

  return (
    <section className="bg-[#0d0d0d] text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.6fr)] lg:items-start lg:gap-12 lg:px-10 lg:py-16 xl:gap-16 xl:px-12">
        {/* Left copy */}
        <div className="max-w-[28rem] lg:pt-1">
          <p
            className="font-heading text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]"
            style={{ color: GOLD }}
          >
            03 / External Professional Network
          </p>
          <h3 className="type-h3 mt-4 tracking-[-0.02em] text-white sm:mt-5">
            <span className="block whitespace-nowrap">Specialized expertise.</span>
            <span className="block whitespace-nowrap">Aligned by responsibility.</span>
          </h3>
          <span
            className="mt-5 block h-[2.5px] w-10 sm:mt-6 sm:w-11"
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />
          <p className="mt-5 max-w-[22rem] text-[13.5px] leading-[1.65] text-white/70 sm:mt-6 sm:text-[14.5px]">
            We collaborate with independent professionals and organisations selected for their
            capability and experience.
          </p>
        </div>

        {/* Right: tabs + cards + legend */}
        <div className="min-w-0">
          <div
            className="flex gap-0 overflow-x-auto border-b border-white/15 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Professional disciplines"
          >
            {TABS.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  id={`network-tab-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  className="relative shrink-0 px-3 pb-3 pt-1 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors sm:px-3.5 sm:text-[10.5px] lg:px-4"
                  style={{ color: active ? GOLD : "rgba(255,255,255,0.48)" }}
                >
                  {tab}
                  {active ? (
                    <span
                      className="absolute inset-x-3 bottom-0 h-[2px] sm:inset-x-3.5 lg:inset-x-4"
                      style={{ backgroundColor: GOLD }}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-5 overflow-x-auto sm:mt-6">
            <div
              role="tabpanel"
              aria-labelledby={`network-tab-${activeTab}`}
              className="grid min-w-[720px] grid-cols-4 border border-white/20"
              key={activeTab}
            >
              {cards.map((card, index) => (
                <article
                  key={card.id}
                  className={`flex min-h-[250px] min-w-0 flex-col justify-between px-3.5 py-6 sm:min-h-[270px] sm:px-4 sm:py-7 lg:min-h-[290px] lg:px-5 lg:py-8 ${
                    index > 0 ? "border-l border-white/20" : ""
                  }`}
                >
                  <div className="flex min-h-[6.5rem] items-center justify-center sm:min-h-[7.25rem]">
                    <CardVisual card={card} />
                  </div>

                  <div className="mt-5 min-w-0 sm:mt-6">
                    <h4 className="font-heading text-[10px] font-bold uppercase leading-[1.3] tracking-[0.06em] text-white sm:text-[10.5px] lg:text-[11px]">
                      {card.title}
                    </h4>
                    <p
                      className="mt-2 text-[10.5px] leading-none sm:text-[11px]"
                      style={{ color: INK_MUTED }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <NetworkLegend />
        </div>
      </div>
    </section>
  );
}
