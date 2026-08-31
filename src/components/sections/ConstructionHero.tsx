"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const RED = "#bc2026";

const VALUES = ["Quality", "Reliability", "Timely"] as const;
const PHOTO_TARGET_X = 0.3;

/** Geometry for the sight SVG attached to View Projects */
type Sight = {
  /** px from button right edge → target center */
  lineW: number;
  /** px from button mid → bottom of hero */
  drop: number;
};

function CoordinateMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="block shrink-0">
      <path
        d="M1.5 4.25V1.5H4.25M10.75 1.5H13.5V4.25M13.5 10.75V13.5H10.75M4.25 13.5H1.5V10.75"
        stroke={GOLD}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.4" fill={GOLD} />
    </svg>
  );
}

/**
 * One SVG locked to View Projects:
 * - x=0 is the button's right edge
 * - y=cy is the button's vertical mid (via top:50% + translateY(-cy))
 * So the gold rings and red L-corner share the exact same point.
 */
function SightFromButton({ lineW, drop }: Sight) {
  const r1 = 14;
  const r2 = 26;
  const r3 = 40;
  const cy = r3 + 10; // room for top tick
  const padR = r3 + 12;
  const w = Math.max(lineW + padR, padR + 8);
  const h = cy + Math.max(drop, 48);
  const cx = lineW;

  return (
    <svg
      className="construction-hero__sight-svg pointer-events-none absolute left-full top-1/2 z-[80] hidden lg:block"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden="true"
      style={{ transform: `translateY(-${cy}px)`, overflow: "visible" }}
    >
      {/* H: button edge → target center */}
      <line x1={0} y1={cy} x2={cx} y2={cy} stroke={RED} strokeWidth="2" />

      {/* V: target center → bottom */}
      <line x1={cx} y1={cy} x2={cx} y2={h} stroke={RED} strokeWidth="2" />

      {/* Three gold rings - center === (cx, cy) === red L-corner */}
      <circle cx={cx} cy={cy} r={r3} stroke={GOLD} strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r2} stroke={GOLD} strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r={r1} stroke={GOLD} strokeWidth="1.3" />

      {/* Gold ticks */}
      <line
        x1={cx}
        y1={cy - r3 - 7}
        x2={cx}
        y2={cy - r3 + 1}
        stroke={GOLD}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line
        x1={cx + r3 - 1}
        y1={cy}
        x2={cx + r3 + 7}
        y2={cy}
        stroke={GOLD}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <line x1={cx - 18} y1={cy - 3.5} x2={cx - 18} y2={cy + 3.5} stroke={GOLD} strokeWidth="1.15" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 3.5} x2={cx - 10} y2={cy + 3.5} stroke={GOLD} strokeWidth="1.15" strokeLinecap="round" />

      <circle cx={cx} cy={cy} r="2.4" fill={RED} />
    </svg>
  );
}

export function ConstructionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const viewProjectsRef = useRef<HTMLSpanElement>(null);
  const [sight, setSight] = useState<Sight>({ lineW: 420, drop: 360 });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const photo = photoRef.current;
    const btn = viewProjectsRef.current;
    if (!section || !photo || !btn) return;

    const sync = () => {
      if (window.matchMedia("(max-width: 1023px)").matches) return;

      const s = section.getBoundingClientRect();
      const p = photo.getBoundingClientRect();
      const b = btn.getBoundingClientRect();
      if (s.width < 32 || p.width < 32 || b.height < 4) return;

      const x0 = b.right - s.left;
      const y = b.top + b.height / 2 - s.top;

      const photoLeft = p.left - s.left;
      let tx = photoLeft + p.width * PHOTO_TARGET_X;
      if (tx < x0 + 48) {
        tx = Math.min(x0 + 200, p.right - s.left - 56);
      }
      tx = Math.min(Math.max(tx, photoLeft + 40), p.right - s.left - 40);

      setSight({
        lineW: Math.max(Math.round(tx - x0), 80),
        drop: Math.max(Math.round(s.height - y), 72),
      });
    };

    sync();
    const timers = [0, 50, 150, 400, 800, 1500].map((ms) => window.setTimeout(sync, ms));
    window.addEventListener("resize", sync);
    document.fonts?.ready?.then(sync).catch(() => {});

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(sync) : null;
    ro?.observe(section);
    ro?.observe(photo);
    ro?.observe(btn);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", sync);
      ro?.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="construction-hero relative flex h-auto min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:h-[calc(100svh-88px)] lg:flex-row"
    >
      <div className="construction-hero__panel relative z-[2] flex min-h-[420px] flex-col overflow-visible px-6 py-11 sm:px-8 sm:py-12 lg:min-h-0 lg:w-[52%] lg:flex-none lg:px-9 lg:py-11 xl:px-10">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.32]" aria-hidden="true" />

        <div className="relative z-[1] flex min-h-0 flex-1 gap-2.5 overflow-visible sm:gap-3">
          <div
            className="construction-hero__survey relative flex w-[15px] shrink-0 flex-col items-center self-stretch pt-0.5"
            aria-hidden="true"
          >
            <span className="h-px w-[13px] shrink-0" style={{ backgroundColor: GOLD }} />
            <span
              className="w-[1.5px] flex-1"
              style={{ backgroundColor: GOLD, boxShadow: `0 0 7px ${GOLD}55` }}
            />
            <span className="relative z-[1] flex h-[15px] w-[15px] shrink-0 items-center justify-center bg-[#111111]">
              <CoordinateMark />
            </span>
          </div>

          <div className="flex min-h-0 min-w-0 flex-1 flex-col self-stretch overflow-visible">
            <p className="shrink-0 font-heading text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-[10px]">
              {VALUES.map((label, i) => (
                <span key={label}>
                  {i > 0 ? (
                    <span className="mx-2 text-white/35" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {label}
                </span>
              ))}
            </p>

            <div className="flex flex-1 flex-col justify-center overflow-visible py-5 lg:py-6">
              <div className="construction-hero__copy w-full overflow-visible">
                <h1 className="construction-hero__heading text-white">
                  <span className="construction-hero__heading-line">Construction grounded</span>
                  <span className="construction-hero__heading-line">in planning, quality</span>
                  <span className="construction-hero__heading-line">and accountability.</span>
                </h1>

                <p className="mt-5 max-w-[34rem] text-[14.5px] leading-[1.7] text-white/72 sm:mt-6 sm:text-[15px] lg:text-[16px]">
                  Practical planning, disciplined site coordination and clear communication - from
                  pre-construction review to final handover.
                </p>

                <div className="construction-hero__actions mt-8 flex flex-row flex-wrap items-stretch gap-2.5 overflow-visible lg:mt-9">
                  <Link
                    href="/contact?type=construction"
                    className="construction-hero__btn inline-flex shrink-0 items-center justify-center whitespace-nowrap bg-nebco-red px-4 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-nebco-red-hover sm:px-5 lg:px-5 lg:py-3.5 lg:text-[11px]"
                  >
                    Request a Construction Proposal
                  </Link>

                  <span
                    ref={viewProjectsRef}
                    className="construction-hero__view-wrap relative z-[80] inline-flex shrink-0 overflow-visible"
                  >
                    <Link
                      href="/projects?filter=construction"
                      className="construction-hero__view-projects construction-hero__btn relative z-[1] inline-flex h-full items-center justify-center whitespace-nowrap border border-white bg-[#111111] px-4 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/5 sm:px-5 lg:px-5 lg:py-3.5 lg:text-[11px]"
                    >
                      View Projects
                    </Link>
                    <SightFromButton lineW={sight.lineW} drop={sight.drop} />
                  </span>
                </div>
              </div>
            </div>

            <p
              className="construction-hero__meta flex h-[15px] shrink-0 items-center font-mono text-[10px] font-medium tracking-[0.14em] lg:text-[11px]"
              style={{ color: GOLD }}
            >
              <span className="inline-flex items-center leading-none">
                27°42&apos;N
                <span
                  className="mx-2.5 inline-block h-3 w-px shrink-0"
                  style={{ backgroundColor: GOLD }}
                  aria-hidden="true"
                />
                85°19&apos;E
              </span>
            </p>
          </div>
        </div>
      </div>

      <div ref={photoRef} className="construction-hero__photo relative z-0 min-h-[340px] flex-1 lg:min-h-0">
        <Image
          src={IMAGES.constructionHero}
          alt="Construction professionals reviewing blueprints on site with mountains beyond"
          fill
          className="object-cover object-[28%_42%]"
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
      </div>
    </section>
  );
}
