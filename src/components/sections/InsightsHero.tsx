"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const PANEL = "#111111";

/**
 * Diagonal `/` — narrower dark panel at top, wider at bottom.
 * Matches the Insights hero mock (no red seam).
 */
const ANGLE = { top: 42, bottom: 56 } as const;
const BLACK_CLIP = `polygon(0 0, ${ANGLE.top}% 0, ${ANGLE.bottom}% 100%, 0 100%)`;

const VALUES = ["Experience", "Integrity", "Timely Delivery"] as const;

/**
 * Gold skyline — sits on the gold baseline.
 * Cluster of buildings + small square mark (matches mock).
 */
function SkylineOnRail() {
  return (
    <svg width="52" height="30" viewBox="0 0 52 30" fill="none" aria-hidden="true" className="shrink-0">
      {/* Buildings of varying height */}
      <path d="M2 28V14h5v14" stroke={GOLD} strokeWidth="1.15" />
      <path d="M8 28V6l4-3 4 3v22" stroke={GOLD} strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M17 28V11h6v17" stroke={GOLD} strokeWidth="1.15" />
      <path d="M24 28V8l3.5-2.5L31 8v20" stroke={GOLD} strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M32 28V15h5v13" stroke={GOLD} strokeWidth="1.15" />
      {/* Window ticks */}
      <path d="M3.5 17h2M3.5 20h2M3.5 23h2" stroke={GOLD} strokeWidth="0.85" />
      <path d="M10.5 10h3M10.5 13h3M10.5 16h3M10.5 19h3M10.5 22h3" stroke={GOLD} strokeWidth="0.85" />
      <path d="M19 14h2.5M19 17h2.5M19 20h2.5" stroke={GOLD} strokeWidth="0.85" />
      <path d="M26 12h3M26 15h3M26 18h3M26 21h3" stroke={GOLD} strokeWidth="0.85" />
      {/* Small square mark to the right of the skyline */}
      <rect x="40" y="16" width="10" height="10" stroke={GOLD} strokeWidth="1.15" />
    </svg>
  );
}

/**
 * Insights hero — diagonal dark panel + photo (swap IMAGES.insightsHero when ready).
 */
export function InsightsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111]">
      {/* Full-bleed photo — replace public/images/insights-hero.jpg later */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.insightsHero}
          alt="Construction planning with blueprints, calculator and site professionals"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_42%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#1a1a1a]/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#111111]/90 lg:hidden"
          aria-hidden="true"
        />
      </div>

      {/* Dark diagonal panel */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        style={{ clipPath: BLACK_CLIP, backgroundColor: PANEL }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 flex min-h-[calc(100svh-88px)] flex-col">
        <div className="flex flex-1 flex-col px-6 py-14 sm:px-8 sm:py-16 lg:max-w-[min(48%,36rem)] lg:px-10 lg:py-16 xl:max-w-[34rem] xl:px-12 xl:pl-14">
          <div className="relative my-auto max-w-[32rem]">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]">
              <span className="text-white/85">01 /</span>{" "}
              <span className="text-nebco-red">Insights</span>
            </p>

            <h1 className="mt-5 font-heading text-[1.85rem] font-bold leading-[1.14] tracking-[-0.02em] text-white sm:mt-6 sm:text-[2.25rem] sm:leading-[1.12] lg:text-[2.45rem] lg:leading-[1.1] xl:text-[2.65rem]">
              Practical insight for better property and project decisions.
            </h1>

            <p className="mt-5 max-w-[28rem] text-[14px] leading-[1.65] text-white/70 sm:mt-6 sm:text-[15px] lg:text-[16px]">
              Construction, development, finance, market and project-management thinking grounded in Nepal.
            </p>
          </div>

          {/*
            Gold skyline + baseline + values — one composition:
            icons sit ON the gold line; tagline left-aligned under the icon.
          */}
          <div className="relative mt-10 w-full max-w-[32rem] sm:mt-12 lg:mt-auto lg:pt-10">
            <div className="relative">
              {/* Gold baseline — full width; icons sit on it */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />
              <div className="relative z-[1] inline-flex items-end bg-[#111111] pr-2">
                <SkylineOnRail />
              </div>
            </div>

            <p className="mt-3.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:mt-4 sm:text-[10px] sm:tracking-[0.2em]">
              {VALUES.map((label, i) => (
                <span key={label}>
                  {i > 0 ? (
                    <span className="mx-3 text-white/40 sm:mx-4" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {label}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
