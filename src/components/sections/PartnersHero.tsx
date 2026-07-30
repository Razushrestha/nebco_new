"use client";

import Image from "next/image";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";

const GOLD_MUTED = "#a8864d";
const RED = "#bc2026";
const PANEL = "#111111";

/**
 * Diagonal: top-left → bottom-right (/).
 * Narrower black at top, wider at bottom — matches the Partners reference.
 */
const ANGLE = { top: 36, bottom: 58 } as const;

/** Red seam thickness in viewBox units (perpendicular to the diagonal) */
const RED_BAND = 0.72;

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

/**
 * Thin constant-width red band sitting on the photo side of the black edge.
 */
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

/**
 * Bottom expertise rail — red line, nodes, gold labels.
 */
function PartnersExpertiseRail() {
  return (
    <div className="relative z-20 border-t border-white/10 bg-[#0d0d0d]/92 backdrop-blur-[2px]">
      <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-[1.15rem] xl:px-12">
        <div className="relative">
          <div
            className="absolute left-[4%] right-[4%] top-[5px] h-px sm:top-[6px]"
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />

          <ul className="grid grid-cols-3 gap-y-5 sm:grid-cols-6 sm:gap-y-0">
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
 * Partners & Experts hero — diagonal dark panel + photo + expertise rail.
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
          className="object-cover object-[55%_40%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#111111]/88 lg:hidden"
          aria-hidden="true"
        />
      </div>

      {/* Red seam — constant-width band on the photo side of the black edge */}
      <div className="absolute inset-0 z-[9] hidden lg:block" aria-hidden="true">
        <PartnersDiagonalSeam />
      </div>

      {/* Dark panel — sharp black cut over the photo */}
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
        <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-8 sm:py-14 lg:max-w-[min(42%,32rem)] lg:px-10 lg:py-16 xl:max-w-[30rem] xl:px-12 xl:pl-14">
          <div className="relative max-w-[30rem]">
            <p
              className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:mb-6 sm:text-[11px]"
              style={{ color: GOLD_MUTED }}
            >
              Partners &amp; Experts
            </p>

            <h1 className="font-heading text-[1.85rem] font-bold leading-[1.16] tracking-[-0.02em] text-white sm:text-[2.15rem] sm:leading-[1.14] lg:text-[2.35rem] lg:leading-[1.12] xl:text-[2.55rem]">
              <span className="block">The right expertise,</span>
              <span className="block">assembled around</span>
              <span className="block">the project.</span>
            </h1>

            <span
              className="mt-5 block h-[3px] w-11 sm:mt-6 sm:w-12"
              style={{ backgroundColor: RED }}
              aria-hidden="true"
            />

            <p className="mt-5 max-w-[26rem] text-[14px] leading-[1.65] text-white/78 sm:mt-6 sm:text-[15px] lg:text-[16px]">
              One coordinating platform. Clearly defined professional responsibilities.
            </p>
          </div>
        </div>

        <PartnersExpertiseRail />
      </div>
    </section>
  );
}
