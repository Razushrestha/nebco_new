"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/lib/images";

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
  icon: string;
};

const AUDIENCES: readonly Audience[] = [
  {
    id: "landowners",
    labelLines: ["LANDOWNERS"],
    description:
      "If you own land with development potential and are open to a structured partnership, we can help unlock its full value through our development capability, capital and market network.",
    points: [
      "Clear title and ownership",
      "Aligned on long-term value creation",
      "Willing to explore structured partnership",
      "Open to feasibility and due diligence",
    ],
    icon: "/images/approach-icons/landowners.png",
  },
  {
    id: "families",
    labelLines: ["FAMILIES &", "CO-OWNERS"],
    description:
      "When ownership is shared across family members or co-owners, we help align interests, clarify outcomes and structure a path that protects relationships while unlocking property value.",
    points: [
      "Documented ownership positions",
      "Openness to structured decision-making",
      "Willingness to align on a shared outcome",
      "Interest in long-term value over quick sale",
    ],
    icon: "/images/approach-icons/families.png",
  },
  {
    id: "promoters",
    labelLines: ["PROJECT", "PROMOTERS"],
    description:
      "If you are promoting a development and need a capable partner for structure, capital coordination or execution, we evaluate opportunities that are commercially sound and delivery-ready.",
    points: [
      "Defined project concept and site control",
      "Open to partnership and governance terms",
      "Clear commercial thesis",
      "Ready for feasibility and diligence review",
    ],
    icon: "/images/approach-icons/promoters.png",
  },
  {
    id: "businesses",
    labelLines: ["BUSINESSES"],
    description:
      "Whether you need an owner-occupied facility or an income-generating asset, we help structure projects where space, cost, operations and long-term value align with your business goals.",
    points: [
      "Clear operational or investment brief",
      "Aligned on cost, timeline and outcomes",
      "Willingness to evaluate site and structure options",
      "Open to feasibility-led decision making",
    ],
    icon: "/images/approach-icons/businesses.png",
  },
  {
    id: "investors",
    labelLines: ["STRATEGIC", "INVESTORS"],
    description:
      "We welcome conversations with strategic participants seeking selective exposure to opportunities where land, economics, execution capability and governance can be aligned.",
    points: [
      "Defined risk and return preferences",
      "Alignment with disciplined underwriting",
      "Interest in structured, stage-gated participation",
      "Open to definitive agreements after diligence",
    ],
    icon: "/images/approach-icons/investors.png",
  },
] as const;

function CheckIcon() {
  return (
    <span
      className="mt-px flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-nebco-red"
      aria-hidden="true"
    >
      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
        <path
          d="M2 5.2L4.1 7.2 8 2.8"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * 01 Our Approach + 02 Who Can Approach Us - one cream band,
 * matched to the design mockup.
 */
export function InvestmentsApproachPairSection() {
  const [activeId, setActiveId] = useState<AudienceId>("landowners");
  const active = AUDIENCES.find((a) => a.id === activeId) ?? AUDIENCES[0];

  return (
    <section className="relative overflow-hidden bg-[#f7f4ef]">
      <div className="relative z-[1] mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-12 xl:gap-12 xl:px-14 xl:py-14">
        {/* --- 01 / OUR APPROACH --- */}
        <div className="relative shrink-0">
          <div className="relative grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-12">
            <div className="relative min-w-0">
              <div
                className="pointer-events-none absolute bottom-0 right-0 z-0 h-[52%] w-[100%] max-w-[28rem] translate-x-[20%]"
                aria-hidden="true"
              >
                <Image
                  src={IMAGES.investmentsApproachBg}
                  alt=""
                  fill
                  className="object-contain object-right-bottom opacity-[0.5] lg:opacity-[0.55]"
                  sizes="(max-width: 1024px) 90vw, 34vw"
                  priority
                />
              </div>

              <div className="relative z-[1] flex flex-col items-start text-left">
                <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
                  01 / OUR APPROACH
                </p>

                <h2 className="mt-3.5 max-w-[22ch] text-left font-heading text-[1.35rem] font-extrabold leading-[1.18] tracking-[-0.02em] text-arch-black sm:mt-4 sm:max-w-none sm:text-[1.5rem] lg:text-[clamp(1.4rem,1.35vw+0.85rem,1.7rem)] xl:text-[1.75rem]">
                  <span className="block xl:whitespace-nowrap">
                    Participation is built on feasibility-
                  </span>
                  <span className="block">not assumptions.</span>
                </h2>

                <span
                  className="mt-3.5 block h-[2px] w-10 shrink-0 sm:mt-4 sm:w-11"
                  style={{ backgroundColor: "#c5a059" }}
                  aria-hidden="true"
                />

                <div className="mt-4 max-w-[26rem] space-y-2.5 text-left text-[12px] leading-[1.55] text-[#4a4a4a] sm:mt-4.5 sm:text-[12.5px] lg:leading-[1.6]">
                  <p>
                    We participate where a project makes sense - on paper and in reality. Our role is to bring
                    structure, capital, and execution capability - aligned with your goals.
                  </p>
                  <p>
                    Every opportunity is evaluated against clear financial, technical and market criteria before we
                    commit.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-[2] w-full min-w-0">
              <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full">
                <Image
                  src={IMAGES.investmentsApproach}
                  alt="Team reviewing architectural blueprints and a 3D building model"
                  fill
                  className="object-cover object-[center_42%]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- 02 / WHO CAN APPROACH US --- */}
        <div className="relative z-[2] w-full shrink-0 border-t border-[#ddd6cb] pt-5 lg:pt-4">
          <p className="font-heading text-[9px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[10px]">
            02 / WHO CAN APPROACH US
          </p>

          <div className="mt-3 flex w-full flex-col lg:mt-3.5">
            <div className="grid w-full grid-cols-1 border border-b-0 border-[#d4cdc2] sm:grid-cols-2 lg:grid-cols-5">
              {AUDIENCES.map((aud, i) => {
                const isActive = aud.id === activeId;
                const label = aud.labelLines.join(" ");

                return (
                  <button
                    key={aud.id}
                    type="button"
                    onClick={() => setActiveId(aud.id)}
                    aria-label={label}
                    aria-pressed={isActive}
                    className={`relative flex min-h-[6.5rem] items-center justify-center px-3 py-5 transition-colors sm:min-h-[7rem] lg:min-h-[7.5rem] lg:px-4 ${
                      isActive
                        ? "z-[1] bg-nebco-red text-white"
                        : "z-0 bg-transparent hover:bg-[#efebe3]"
                    } ${i > 0 ? "border-t border-[#d4cdc2] sm:border-t-0 sm:border-l" : ""} ${
                      i >= 2 ? "sm:border-t sm:border-[#d4cdc2] lg:border-t-0" : ""
                    } ${i >= 1 ? "lg:border-l" : ""}`}
                  >
                    <Image
                      src={aud.icon}
                      alt=""
                      width={128}
                      height={128}
                      className={`h-20 w-20 object-contain sm:h-24 sm:w-24 lg:h-[7rem] lg:w-[7rem] ${
                        isActive ? "brightness-0 invert" : "opacity-90"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="border border-nebco-red bg-[#f7f4ef] px-5 py-3.5 sm:px-7 sm:py-4 lg:px-8 lg:py-4">
              <div
                key={active.id}
                className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-10 xl:gap-12"
              >
                <p className="text-[12px] leading-[1.55] text-[#3a3a3a] sm:text-[12.5px] lg:max-w-[22rem] lg:leading-[1.6]">
                  {active.description}
                </p>

                <div className="grid grid-cols-1 gap-x-10 gap-y-2.5 sm:grid-cols-2 sm:gap-y-3">
                  {active.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="pt-px text-[12px] leading-[1.35] text-[#2f2f2f] sm:text-[12.5px]">
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
