"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import { BuildingWireframeIllustration } from "@/components/ui/BuildingWireframeIllustration";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

type AudienceId =
  | "landowners"
  | "families"
  | "promoters"
  | "businesses"
  | "investors";

type Audience = {
  id: AudienceId;
  labelLines: readonly string[];
  description: string;
  points: readonly [string, string, string, string];
};

const AUDIENCES: readonly Audience[] = [
  {
    id: "landowners",
    labelLines: ["LANDOWNERS"],
    description:
      "If you own land with development potential and are open to a structured partnership, we can help unlock its full value through our development capability, capital and market network.",
    points: [
      "Clear title and ownership",
      "Willing to explore structured partnership",
      "Aligned on long-term value creation",
      "Open to feasibility and due diligence",
    ],
  },
  {
    id: "families",
    labelLines: ["FAMILIES &", "CO-OWNERS"],
    description:
      "When ownership is shared across family members or co-owners, we help align interests, clarify outcomes and structure a path that protects relationships while unlocking property value.",
    points: [
      "Documented ownership positions",
      "Willingness to align on a shared outcome",
      "Openness to structured decision-making",
      "Interest in long-term value over quick sale",
    ],
  },
  {
    id: "promoters",
    labelLines: ["PROJECT", "PROMOTERS"],
    description:
      "If you are promoting a development and need a capable partner for structure, capital coordination or execution, we evaluate opportunities that are commercially sound and delivery-ready.",
    points: [
      "Defined project concept and site control",
      "Clear commercial thesis",
      "Open to partnership and governance terms",
      "Ready for feasibility and diligence review",
    ],
  },
  {
    id: "businesses",
    labelLines: ["BUSINESSES"],
    description:
      "Whether you need an owner-occupied facility or an income-generating asset, we help structure projects where space, cost, operations and long-term value align with your business goals.",
    points: [
      "Clear operational or investment brief",
      "Willingness to evaluate site and structure options",
      "Aligned on cost, timeline and outcomes",
      "Open to feasibility-led decision making",
    ],
  },
  {
    id: "investors",
    labelLines: ["STRATEGIC", "INVESTORS"],
    description:
      "We welcome conversations with strategic participants seeking selective exposure to opportunities where land, economics, execution capability and governance can be aligned.",
    points: [
      "Defined risk and return preferences",
      "Interest in structured, stage-gated participation",
      "Alignment with disciplined underwriting",
      "Open to definitive agreements after diligence",
    ],
  },
] as const;

function IconLand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 18.5L8.5 8l4 6.5L16 10l4 8.5H4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M4 18.5h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="16" cy="8.5" r="1.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconPeople({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M3.8 18.5c1.1-2.6 2.9-3.9 5.2-3.9s4.1 1.3 5.2 3.9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M13.2 18.5c.7-1.7 1.9-2.6 3.5-2.6 1.5 0 2.6.8 3.3 2.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 18.5V11M10 18.5V8M15.5 18.5V13" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M4.5 18.5h15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M13.5 7.5l3-3 3.2 2.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuildings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="8" width="7" height="11" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="4.5" width="8.5" height="14.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5.5 11h3M5.5 14h3M5.5 17h3M14.2 8h4M14.2 11h4M14.2 14h4"
        stroke="currentColor"
        strokeWidth="1.15"
      />
    </svg>
  );
}

function IconInvestor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5.2 19c1.5-3.2 3.8-4.8 6.8-4.8s5.3 1.6 6.8 4.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const TAB_ICONS: Record<AudienceId, ComponentType<{ className?: string }>> = {
  landowners: IconLand,
  families: IconPeople,
  promoters: IconChart,
  businesses: IconBuildings,
  investors: IconInvestor,
};

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-nebco-red"
      aria-hidden="true"
    >
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2L4.1 7.2 8 2.8"
          stroke="#bc2026"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * 01 Our Approach + 02 Who Can Approach Us — one cream band, shared gutters,
 * sized to read as a single composed viewport on desktop.
 */
export function InvestmentsApproachPairSection() {
  const [activeId, setActiveId] = useState<AudienceId>("landowners");
  const active = AUDIENCES.find((a) => a.id === activeId) ?? AUDIENCES[0];

  return (
    <section className="overflow-hidden bg-[#f5f2ed]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-8 sm:px-8 sm:py-9 lg:min-h-[calc(100svh-88px)] lg:justify-between lg:px-10 lg:py-8 xl:px-12 xl:py-9">
        {/* ——— 01 / OUR APPROACH ——— */}
        <div>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-12">
            <div className="relative min-w-0 lg:pt-1">
              <div
                className="pointer-events-none absolute -bottom-1 left-0 w-[70%] max-w-[240px] opacity-[0.22] lg:max-w-[260px]"
                aria-hidden="true"
              >
                <BuildingWireframeIllustration preset="tower" variant="panel" className="h-auto w-full" />
              </div>

              <div className="relative z-[1]">
                <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
                  01 / OUR APPROACH
                </p>

                <h2 className="type-h2 mt-3 max-w-[24rem] tracking-[-0.02em] text-arch-black">
                  Participation is built on feasibility—not assumptions.
                </h2>

                <span
                  className="mt-3 block h-px w-14 sm:w-16"
                  style={{ backgroundColor: GOLD }}
                  aria-hidden="true"
                />

                <div className="mt-4 max-w-[28rem] space-y-3 text-[13.5px] leading-[1.65] text-[#444444] sm:text-[14.5px]">
                  <p>
                    We participate where a project makes sense—on paper and in reality. Our role is to bring
                    structure, capital, and execution capability—aligned with your goals.
                  </p>
                  <p>
                    Every opportunity is evaluated against clear financial, technical and market criteria before we
                    commit.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full min-w-0">
              <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-[min(28vh,260px)]">
                <Image
                  src={IMAGES.investmentsApproach}
                  alt="Hands reviewing architectural drawings with a scale ruler"
                  fill
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ——— 02 / WHO CAN APPROACH US ——— */}
        <div className="mt-8 lg:mt-7">
          <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
            02 / WHO CAN APPROACH US
          </p>

          <div className="mt-4 lg:mt-5">
            {/* Tabs — icon above label, equal columns, full container width */}
            <div className="grid grid-cols-2 border border-b-0 border-[#d9d3c9] sm:grid-cols-3 lg:grid-cols-5">
              {AUDIENCES.map((aud, i) => {
                const Icon = TAB_ICONS[aud.id];
                const isActive = aud.id === activeId;

                return (
                  <button
                    key={aud.id}
                    type="button"
                    onClick={() => setActiveId(aud.id)}
                    className={`relative flex min-h-[4.5rem] flex-col items-center justify-center gap-1.5 px-2 py-3 text-center transition-colors sm:min-h-[4.75rem] lg:min-h-[5rem] ${
                      isActive ? "z-[1] bg-nebco-red text-white" : "bg-[#f5f2ed] hover:bg-[#efeae3]"
                    } ${i > 0 ? "border-l border-[#d9d3c9]" : ""} ${
                      i >= 2 ? "border-t border-[#d9d3c9] sm:border-t-0" : ""
                    } ${i >= 3 ? "sm:border-t sm:border-[#d9d3c9] lg:border-t-0" : ""}`}
                  >
                    <Icon
                      className={`h-5 w-5 shrink-0 sm:h-[22px] sm:w-[22px] ${
                        isActive ? "text-white" : "text-[#a8864d]"
                      }`}
                    />
                    <span
                      className={`font-heading text-[9px] font-bold uppercase leading-[1.15] tracking-[0.05em] sm:text-[9.5px] lg:text-[10px] ${
                        isActive ? "text-white" : "text-arch-black"
                      }`}
                    >
                      {aud.labelLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="border border-nebco-red bg-[#faf8f5] px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-7">
              <div
                key={active.id}
                className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-10 xl:gap-12"
              >
                <p className="text-[13.5px] leading-[1.65] text-[#333333] sm:text-[14.5px] lg:max-w-[26rem]">
                  {active.description}
                </p>

                <div className="grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2 sm:gap-y-4">
                  {active.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="pt-px text-[13px] leading-[1.4] text-[#2a2a2a] sm:text-[13.5px]">
                        {point}
                      </span>
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
