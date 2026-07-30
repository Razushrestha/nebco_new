"use client";

import Image from "next/image";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const RED = "#bc2026";

/**
 * Red journey line across the triptych.
 * viewBox 0–100 maps to the right visual panel only.
 * Path: low in completed panel → rise through construction → high in wireframe.
 */
const TREND_PATH = "M 6 72 L 22 58 L 38 48 L 52 36 L 68 42 L 82 28 L 94 22";

const NODES = [
  { x: 18, y: 61 },
  { x: 52, y: 36 },
  { x: 82, y: 28 },
] as const;

function CoordinateCrosshair({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="14" cy="14" r="3.2" stroke="currentColor" strokeWidth="0.85" />
      <path
        d="M14 2.5v4.2M14 21.3v4.2M2.5 14h4.2M21.3 14h4.2"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M14 11.2v5.6M11.2 14h5.6" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

/**
 * Architectural HUD scale — double baseline (short over long),
 * left end-cap, major / mid / minor ticks with even spacing.
 */
function TechnicalRuler({ className }: { className?: string }) {
  const unit = 6;
  const startX = 8;
  const majorCount = 8; // number of major intervals
  const ticksPerMajor = 10;
  const topY = 18;
  const bottomY = 22;
  const topEnd = startX + majorCount * ticksPerMajor * unit;
  const bottomEnd = topEnd + unit * 6; // bottom rail extends further

  const ticks: { x: number; h: number; major: boolean }[] = [];
  for (let i = 0; i <= majorCount * ticksPerMajor; i++) {
    const x = startX + i * unit;
    const isMajor = i % 10 === 0;
    const isMid = i % 5 === 0 && !isMajor;
    ticks.push({
      x,
      h: isMajor ? 11 : isMid ? 7 : 3.5,
      major: isMajor,
    });
  }

  return (
    <svg
      viewBox={`0 0 ${bottomEnd + 10} 34`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Left end-cap — bridges both rails, slight overhang */}
      <path
        d={`M${startX} ${topY - 3} V${bottomY + 3}`}
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
      />

      {/* Top rail (shorter) */}
      <path
        d={`M${startX} ${topY} H${topEnd}`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />

      {/* Bottom rail (longer) */}
      <path
        d={`M${startX} ${bottomY} H${bottomEnd}`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />

      {/* Tick marks rising from the top rail */}
      {ticks.map(({ x, h, major }) => (
        <g key={x}>
          <path
            d={`M${x} ${topY} V${topY - h}`}
            stroke="currentColor"
            strokeWidth={major ? 1.05 : 0.85}
            strokeLinecap="square"
          />
          {major && (
            <circle
              cx={x}
              cy={topY - h - 2.5}
              r="1.15"
              fill="currentColor"
            />
          )}
        </g>
      ))}

      {/* Right tip mark on the longer bottom rail */}
      <path
        d={`M${bottomEnd} ${bottomY - 2.5} V${bottomY + 2.5}`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** White-on-black architectural wireframe for the third panel. */
function BuildingWireframePanel() {
  return (
    <svg
      viewBox="0 0 220 360"
      fill="none"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="220" height="360" fill="#0a0a0a" />
      <g stroke="white" strokeWidth="0.95" opacity="0.78">
        {/* Main tower */}
        <rect x="58" y="48" width="104" height="260" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="58"
            y1={68 + i * 20}
            x2="162"
            y2={68 + i * 20}
            opacity={0.65}
          />
        ))}
        <line x1="92" y1="48" x2="92" y2="308" opacity="0.7" />
        <line x1="128" y1="48" x2="128" y2="308" opacity="0.7" />
        {/* Side wing */}
        <rect x="162" y="110" width="36" height="198" opacity="0.85" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`sw-${i}`}
            x1="162"
            y1={130 + i * 22}
            x2="198"
            y2={130 + i * 22}
            opacity="0.55"
          />
        ))}
        {/* Left low block */}
        <rect x="28" y="170" width="30" height="138" opacity="0.8" />
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`lw-${i}`}
            x1="28"
            y1={190 + i * 22}
            x2="58"
            y2={190 + i * 22}
            opacity="0.5"
          />
        ))}
        {/* Ground + perspective guides */}
        <line x1="18" y1="308" x2="208" y2="308" opacity="0.55" />
        <path d="M58 48 L42 28 M162 48 L178 30" opacity="0.35" strokeWidth="0.7" />
        <path d="M42 28 H178" opacity="0.3" strokeWidth="0.7" />
        {/* Roof plant room */}
        <rect x="86" y="28" width="48" height="20" opacity="0.7" />
      </g>
    </svg>
  );
}

function ProjectsHeroTriptych() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 grid grid-cols-3">
        {/* 01 Completed building at night */}
        <div className="relative overflow-hidden">
          <Image
            src={IMAGES.nightBuilding}
            alt="Completed residential building at dusk"
            fill
            className="object-cover object-[center_35%]"
            priority
            sizes="(max-width: 1024px) 100vw, 22vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/20"
            aria-hidden="true"
          />
        </div>

        {/* 02 Construction */}
        <div className="relative overflow-hidden">
          <Image
            src={IMAGES.constructionSite}
            alt="Building under construction with crane"
            fill
            className="object-cover object-[center_30%]"
            priority
            sizes="(max-width: 1024px) 100vw, 22vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/25"
            aria-hidden="true"
          />
        </div>

        {/* 03 Wireframe */}
        <div className="relative overflow-hidden bg-[#0a0a0a]">
          <BuildingWireframePanel />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/30"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Soft angled seams between panels */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[33.333%] z-[2] w-px bg-gradient-to-b from-transparent via-white/25 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-[66.666%] z-[2] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />

      {/* Soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-black/25 via-transparent to-black/35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-[12%] bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent"
        aria-hidden="true"
      />

      {/* Red trend line + nodes */}
      <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="projects-trend-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={TREND_PATH}
            fill="none"
            stroke={RED}
            strokeWidth="5.5"
            strokeOpacity="0.22"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={TREND_PATH}
            fill="none"
            stroke={RED}
            strokeWidth="2.6"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            filter="url(#projects-trend-glow)"
          />
        </svg>

        {NODES.map((node, i) => (
          <span
            key={i}
            className="absolute h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-nebco-red bg-white shadow-[0_0_0_3px_rgba(188,32,38,0.25)] sm:h-4 sm:w-4"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          />
        ))}
      </div>

      {/* Gold technical ruler — bottom right */}
      <div
        className="pointer-events-none absolute bottom-4 right-4 z-20 w-[48%] max-w-[13.5rem] sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-7 lg:max-w-[15rem]"
        style={{ color: GOLD }}
        aria-hidden="true"
      >
        <TechnicalRuler className="h-auto w-full opacity-90" />
      </div>
    </div>
  );
}

/**
 * Projects page hero — left copy + right life-cycle triptych.
 * Matches the design reference line-for-line.
 */
export function ProjectsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#0c0c0c] lg:flex-row">
      {/* Subtle film grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.18] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Left — content */}
      <div className="relative z-10 flex min-h-[420px] flex-col justify-between px-7 py-12 sm:px-9 sm:py-14 lg:min-h-0 lg:flex-[0_0_42%] lg:px-11 lg:pb-10 lg:pt-16 xl:flex-[0_0_40%] xl:px-14 xl:pb-11 xl:pt-[4.5rem]">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.28]" aria-hidden="true" />

        <div className="relative z-[1] my-auto max-w-[28rem] lg:max-w-[30rem]">
          <p className="mb-5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-nebco-red sm:mb-6 sm:text-[11px]">
            Projects
          </p>

          <h1 className="font-heading text-[1.85rem] font-extrabold leading-[1.12] tracking-[-0.025em] text-white sm:text-[2.15rem] sm:leading-[1.1] lg:text-[2.35rem] lg:leading-[1.08] xl:text-[2.55rem]">
            <span className="block">Projects shaped by</span>
            <span className="block">different needs,</span>
            <span className="block">stages and</span>
            <span className="block">responsibilities.</span>
          </h1>

          <p className="mt-5 max-w-[24rem] text-[13.5px] leading-[1.65] text-white/72 sm:mt-6 sm:text-[14.5px] lg:text-[15px]">
            Construction, development consulting and project coordination—presented through the role
            NEBCO actually performed.
          </p>

          {/* Red rules — short over long, tight gap (matches reference) */}
          <div className="mt-7 flex flex-col items-start gap-[7px] sm:mt-8" aria-hidden="true">
            <span className="block h-px w-9 bg-nebco-red sm:w-10" />
            <span className="block h-px w-[11.5rem] bg-nebco-red sm:w-[13rem] lg:w-[14rem]" />
          </div>
        </div>

        {/* Coordinates — bottom of left panel */}
        <div className="relative z-[1] mt-10 lg:mt-0">
          <div className="flex items-center gap-2.5" style={{ color: GOLD }}>
            <CoordinateCrosshair className="shrink-0 opacity-90" />
            <p className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] sm:text-[10px]">
              LAT 27.7172° N | LON 85.3240° E
            </p>
          </div>
        </div>
      </div>

      {/* Right — triptych visual */}
      <div className="relative min-h-[360px] flex-1 sm:min-h-[420px] lg:min-h-0">
        <ProjectsHeroTriptych />
      </div>
    </section>
  );
}
