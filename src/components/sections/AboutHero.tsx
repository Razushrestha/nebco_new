"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/images";

const GOLD = "#b88f51";
const RED = "#bc2026";
const CREAM = "#f5f2ed";
const BLACK = "#000000";

/**
 * Shared diagonal system (/% of full hero width on lg+).
 * All seams are parallel `/` cuts — same SLANT top→bottom.
 * Copy | 1970s+ | Today | 2020s+
 */
const SLANT = 8.5;

const COPY_MID = 30;
const S1_MID = COPY_MID + (100 - COPY_MID) / 3;
const S2_MID = COPY_MID + (2 * (100 - COPY_MID)) / 3;

const COPY_TOP = COPY_MID + SLANT / 2;
const COPY_BOT = COPY_MID - SLANT / 2;
const S1_TOP = S1_MID + SLANT / 2;
const S1_BOT = S1_MID - SLANT / 2;
const S2_TOP = S2_MID + SLANT / 2;
const S2_BOT = S2_MID - SLANT / 2;

/** Zero gap — seams are only the SVG hairline (no white band between clips). */
const GAP = 0;

function seamX(top: number, bot: number, y: number) {
  return top + ((bot - top) * y) / 100;
}

const PANEL_CX = [
  (COPY_MID + S1_MID) / 2,
  (S1_MID + S2_MID) / 2,
  (S2_MID + 100) / 2,
] as const;

const ERA_LABELS = ["1970s+", "Today", "2020s+"] as const;

const SLICES = [
  {
    src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1000&q=80",
    alt: "Historical construction foundations",
    clip: `polygon(${COPY_TOP + GAP}% 0, ${S1_TOP - GAP}% 0, ${S1_BOT - GAP}% 100%, ${COPY_BOT + GAP}% 100%)`,
    className: "object-cover object-[42%_40%] grayscale contrast-[1.08] saturate-[0.3]",
  },
  {
    src: IMAGES.qualityInspector,
    alt: "Engineers reviewing plans on site today",
    clip: `polygon(${S1_TOP + GAP}% 0, ${S2_TOP - GAP}% 0, ${S2_BOT - GAP}% 100%, ${S1_BOT + GAP}% 100%)`,
    className: "object-cover object-[50%_28%]",
  },
  {
    src: IMAGES.nightBuilding,
    alt: "Modern development looking forward",
    clip: `polygon(${S2_TOP + GAP}% 0, 100% 0, 100% 100%, ${S2_BOT + GAP}% 100%)`,
    className: "object-cover object-[55%_40%]",
  },
] as const;

/** Mobile-only equal thirds (no copy band) */
const M_SLANT = 10;
const M1_MID = 100 / 3;
const M2_MID = 200 / 3;
const M1_TOP = M1_MID + M_SLANT / 2;
const M1_BOT = M1_MID - M_SLANT / 2;
const M2_TOP = M2_MID + M_SLANT / 2;
const M2_BOT = M2_MID - M_SLANT / 2;
const M_CX = [100 / 6, 50, 500 / 6] as const;

const MOBILE_SLICES = [
  {
    ...SLICES[0],
    clip: `polygon(0 0, ${M1_TOP - GAP}% 0, ${M1_BOT - GAP}% 100%, 0 100%)`,
  },
  {
    ...SLICES[1],
    clip: `polygon(${M1_TOP + GAP}% 0, ${M2_TOP - GAP}% 0, ${M2_BOT - GAP}% 100%, ${M1_BOT + GAP}% 100%)`,
  },
  {
    ...SLICES[2],
    clip: `polygon(${M2_TOP + GAP}% 0, 100% 0, 100% 100%, ${M2_BOT + GAP}% 100%)`,
  },
] as const;

/** Peaks stay in the lower half; valleys hug the bottom edge. */
const VALLEY_Y = 94;
const PEAK_Y = [58, 56] as const;

/**
 * Markers: peak → valley → peak → low point in final panel.
 * Start/end anchors are separate (bottom-left → bottom-right).
 */
const TREND_NODES = [
  { x: PANEL_CX[0], y: PEAK_Y[0] },
  { x: seamX(S1_TOP, S1_BOT, VALLEY_Y), y: VALLEY_Y },
  { x: PANEL_CX[1], y: PEAK_Y[1] },
  { x: PANEL_CX[2] + (100 - PANEL_CX[2]) * 0.35, y: 90 },
] as const;

const TREND_START = { x: COPY_BOT + 1.2, y: 100 } as const;
const TREND_END = { x: 100, y: 100 } as const;

const MOBILE_TREND_NODES = [
  { x: M_CX[0], y: PEAK_Y[0] },
  { x: seamX(M1_TOP, M1_BOT, VALLEY_Y), y: VALLEY_Y },
  { x: M_CX[1], y: PEAK_Y[1] },
  { x: M_CX[2] + (100 - M_CX[2]) * 0.35, y: 90 },
] as const;

const MOBILE_TREND_START = { x: 0, y: 100 } as const;
const MOBILE_TREND_END = { x: 100, y: 100 } as const;

function CopyBlock({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p
        className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]"
        style={{ color: GOLD }}
      >
        About NEBCO
      </p>
      <h1 className="mt-4 font-heading text-[1.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[1.75rem] lg:text-[1.95rem] xl:text-[2.1rem]">
        Built on Experience.
        <span className="block">Evolving with Purpose.</span>
      </h1>
      <span className="mt-4 block h-[2px] w-12 bg-nebco-red sm:mt-5 sm:w-14" aria-hidden="true" />
      <p className="mt-4 text-[13px] leading-[1.65] text-white/70 sm:mt-5 sm:text-[14px]">
        A three-generation journey through construction, development and the changing needs of our clients.
      </p>
    </div>
  );
}

/**
 * True pixel hairline trend — measures the collage box and draws 1px CSS
 * segments in screen space so diagonals never fatten from SVG stretching.
 */
function TrendOverlay({
  nodes,
  start,
  end,
}: {
  nodes: readonly { x: number; y: number }[];
  start: { x: number; y: number };
  end: { x: number; y: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const pts = [start, ...nodes, end];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-[7]" aria-hidden="true">
      {size.w > 0 &&
        pts.slice(0, -1).map((a, i) => {
          const b = pts[i + 1];
          const x1 = (a.x / 100) * size.w;
          const y1 = (a.y / 100) * size.h;
          const x2 = (b.x / 100) * size.w;
          const y2 = (b.y / 100) * size.h;
          const length = Math.hypot(x2 - x1, y2 - y1);
          const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

          return (
            <span
              key={i}
              className="absolute left-0 top-0 origin-left"
              style={{
                width: length,
                height: 2,
                backgroundColor: RED,
                transform: `translate(${x1}px, ${y1 - 1}px) rotate(${angle}deg)`,
              }}
            />
          );
        })}
      {nodes.map((n, i) => (
        <span
          key={`n-${i}`}
          className="absolute h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            boxShadow: `inset 0 0 0 1px ${RED}`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Date rail under the collage.
 * Desktop: black continues past the copy with the SAME `/` diagonal, then cream + era labels.
 */
function EraDateRail({
  centers,
  className = "",
  continueDiagonal = false,
}: {
  centers: readonly number[];
  className?: string;
  continueDiagonal?: boolean;
}) {
  /** Top of rail meets hero bottom seam at COPY_BOT; slant continues through the bar. */
  const railTop = COPY_BOT;
  const railBot = COPY_BOT - SLANT;

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ backgroundColor: CREAM }}
    >
      {continueDiagonal ? (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: BLACK,
              clipPath: `polygon(0 0, ${railTop}% 0, ${railBot}% 100%, 0 100%)`,
            }}
            aria-hidden="true"
          />
          {/* Hairline where black meets cream — same angle as the hero seam */}
          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1={railTop}
              y1={0}
              x2={railBot}
              y2={100}
              stroke="#ffffff"
              strokeWidth={0.5}
              vectorEffect="nonScalingStroke"
            />
          </svg>
        </>
      ) : (
        <div className="absolute inset-x-0 top-0 z-0 h-px bg-arch-black/15" aria-hidden="true" />
      )}

      {ERA_LABELS.map((label, i) => (
        <p
          key={label}
          className="absolute top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-[12px] font-medium tracking-[0.06em] sm:text-[13px]"
          style={{ left: `${centers[i]}%`, color: GOLD }}
        >
          {label}
        </p>
      ))}
    </div>
  );
}

/**
 * About hero — full single-screen cover (viewport minus sticky header).
 */
export function AboutHero() {
  return (
    <section
      className="flex h-[calc(100svh-88px)] min-h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] flex-col overflow-hidden"
      style={{ backgroundColor: BLACK }}
    >
      {/* —— Mobile: stacked copy + collage filling the screen —— */}
      <div className="flex min-h-0 flex-1 flex-col lg:hidden">
        <div className="shrink-0 px-6 py-8 sm:px-8 sm:py-10">
          <CopyBlock className="max-w-[22rem]" />
        </div>
        <div className="relative min-h-0 flex-1 bg-black">
          {MOBILE_SLICES.map((slice) => (
            <div key={slice.alt} className="absolute inset-0" style={{ clipPath: slice.clip }}>
              <Image src={slice.src} alt={slice.alt} fill priority className={slice.className} sizes="100vw" />
            </div>
          ))}
          <svg
            className="pointer-events-none absolute inset-0 z-[6] h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1={M1_TOP} y1={0} x2={M1_BOT} y2={100} stroke="#fff" strokeWidth={0.5} vectorEffect="nonScalingStroke" />
            <line x1={M2_TOP} y1={0} x2={M2_BOT} y2={100} stroke="#fff" strokeWidth={0.5} vectorEffect="nonScalingStroke" />
          </svg>
          <TrendOverlay nodes={MOBILE_TREND_NODES} start={MOBILE_TREND_START} end={MOBILE_TREND_END} />
        </div>
        <EraDateRail centers={M_CX} className="h-[44px] sm:h-[48px]" />
      </div>

      {/* —— Desktop: unified slant bands —— */}
      <div className="relative hidden min-h-0 flex-1 bg-black lg:block">
        <div
          className="absolute inset-0 z-[5] flex flex-col justify-center px-10 xl:px-12"
          style={{
            backgroundColor: BLACK,
            clipPath: `polygon(0 0, ${COPY_TOP}% 0, ${COPY_BOT}% 100%, 0 100%)`,
          }}
        >
          <CopyBlock className="max-w-[18.5rem] xl:max-w-[20rem]" />
        </div>

        {SLICES.map((slice) => (
          <div key={slice.alt} className="absolute inset-0 z-[1]" style={{ clipPath: slice.clip }}>
            <Image
              src={slice.src}
              alt={slice.alt}
              fill
              priority
              className={slice.className}
              sizes="55vw"
            />
          </div>
        ))}

        <svg
          className="pointer-events-none absolute inset-0 z-[6] h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[
            [COPY_TOP, COPY_BOT],
            [S1_TOP, S1_BOT],
            [S2_TOP, S2_BOT],
          ].map(([top, bot], i) => (
            <line
              key={i}
              x1={top}
              y1={0}
              x2={bot}
              y2={100}
              stroke="#ffffff"
              strokeWidth={0.5}
              vectorEffect="nonScalingStroke"
            />
          ))}
        </svg>

        <TrendOverlay nodes={TREND_NODES} start={TREND_START} end={TREND_END} />
      </div>

      <EraDateRail centers={PANEL_CX} className="hidden h-[48px] lg:block" continueDiagonal />
    </section>
  );
}
