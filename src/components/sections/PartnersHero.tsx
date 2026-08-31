"use client";

import Image from "next/image";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";

const GOLD_MUTED = "#a8864d";
const RED = "#bc2026";
const PANEL = "#111111";

/**
 * Diagonal: top-left → bottom-right (/).
 * Matches the Partners & Experts reference composition.
 */
const ANGLE = { top: 38, bottom: 52 } as const;

/** Red seam thickness in viewBox units (perpendicular to the diagonal) */
const RED_BAND = 0.55;

const EXPERTISE = [
  "Architecture",
  "Engineering",
  "Finance",
  "Legal",
  "Construction",
  "Market Expertise",
] as const;

function bandOuter(x: number, y: number) {
  const dx = ANGLE.bottom - ANGLE.top;
  const dy = 100;
  const len = Math.hypot(dx, dy);
  const nx = (dy / len) * RED_BAND;
  const ny = (-dx / len) * RED_BAND;
  return { x: x + nx, y: y + ny };
}

const BLACK_CLIP = `polygon(0 0, ${ANGLE.top}% 0, ${ANGLE.bottom}% 100%, 0 100%)`;

function PartnersDiagonalSeam() {
  const topOuter = bandOuter(ANGLE.top, 0);
  const bottomOuter = bandOuter(ANGLE.bottom, 100);
  const points = [
    `${ANGLE.top},0`,
    `${ANGLE.bottom},100`,
    `${bottomOuter.x},${bottomOuter.y}`,
    `${topOuter.x},${topOuter.y}`,
  ].join(" ");

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points={points} fill={RED} />
    </svg>
  );
}

function PartnersExpertiseRail() {
  return (
    <div className="relative z-20 border-t border-white/10 bg-[#0d0d0d]/92 backdrop-blur-[2px]">
      <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-[1.15rem] xl:px-12">
        <div className="relative">
          <div
            className="pointer-events-none absolute left-[4%] right-[4%] top-[4px] z-0 h-[3px] overflow-visible sm:top-[5px]"
            aria-hidden="true"
          >
            <div
              className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
              style={{ backgroundColor: RED }}
            />
            <span className="journey-line-light" />
          </div>

          <ul className="relative z-[1] grid grid-cols-3 gap-y-5 sm:grid-cols-6 sm:gap-y-0">
            {EXPERTISE.map((label) => (
              <li key={label} className="relative flex flex-col items-center text-center">
                <span
                  className="relative z-[1] flex h-[11px] w-[11px] items-center justify-center rounded-full sm:h-3 sm:w-3"
                  style={{ backgroundColor: RED }}
                  aria-hidden="true"
                >
                  <span className="h-[4px] w-[4px] rounded-full bg-[#0d0d0d] sm:h-[4.5px] sm:w-[4.5px]" />
                </span>
                <span
                  className="mt-2.5 font-mono text-[8.5px] font-semibold uppercase tracking-[0.14em] sm:mt-3 sm:text-[9px] lg:text-[9.5px] xl:tracking-[0.16em]"
                  style={{ color: GOLD_MUTED }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Partners & Experts hero - diagonal dark panel + meeting photo + expertise rail.
 */
export function PartnersHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111]">
      {/* Full-bleed photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.partnersHero}
          alt="Partners reviewing architectural plans and a building model in a project meeting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_42%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#111111]/88 lg:hidden"
          aria-hidden="true"
        />
      </div>

      {/* Red seam along the diagonal */}
      <div className="absolute inset-0 z-[9] hidden lg:block" aria-hidden="true">
        <PartnersDiagonalSeam />
      </div>

      {/* Dark panel - sharp black cut over the photo */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{ clipPath: BLACK_CLIP, backgroundColor: PANEL }}
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.26]">
          <ConstructionHeroBlueprint />
        </div>
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.28]" />
      </div>

      <div className="relative z-20 flex min-h-[calc(100svh-88px)] flex-col">
        <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-8 sm:py-14 lg:max-w-[min(48%,38rem)] lg:px-10 lg:py-16 xl:max-w-[36rem] xl:px-12 xl:pl-14">
          <div className="relative max-w-[34rem]">
            <p
              className="mb-5 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] sm:mb-6 sm:text-[11px]"
              style={{ color: GOLD_MUTED }}
            >
              Partners &amp; Experts
            </p>

            <h1 className="type-h2 tracking-[-0.02em] text-white">
              <span className="block whitespace-nowrap">The right expertise,</span>
              <span className="block whitespace-nowrap">assembled around</span>
              <span className="block whitespace-nowrap">the project.</span>
            </h1>

            <span
              className="mt-5 block h-px w-10 sm:mt-6 sm:w-11"
              style={{ backgroundColor: RED }}
              aria-hidden="true"
            />

            <h5 className="type-h5 mt-5 max-w-[28rem] font-normal leading-[1.4] text-white/85 sm:mt-6">
              <span className="block whitespace-nowrap">One coordinating platform.</span>
              <span className="block whitespace-nowrap">
                Clearly defined professional responsibilities.
              </span>
            </h5>
          </div>
        </div>

        <PartnersExpertiseRail />
      </div>
    </section>
  );
}
