"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { ConstructionHeroTargeting } from "@/components/ui/ConstructionHeroTargeting";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

function CoordinateMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M1 3.5V1h2.5M9.5 1H12v2.5M12 9.5V12H9.5M3.5 12H1V9.5"
        stroke={GOLD}
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <circle cx="6.5" cy="6.5" r="1.2" fill={GOLD} />
    </svg>
  );
}

function NebcoMark() {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-sm"
      aria-hidden="true"
    >
      <span className="font-serif text-sm font-bold leading-none text-white">N</span>
    </div>
  );
}

export function ConstructionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewProjectsRef = useRef<HTMLSpanElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-auto min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:h-[calc(100svh-88px)] lg:flex-row"
    >
      {/* Left — dark content panel */}
      <div className="relative z-10 flex min-h-[420px] flex-col justify-center px-8 py-14 sm:px-10 lg:min-h-0 lg:flex-[0_0_45%] lg:px-12 lg:py-12 xl:px-14">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />

        <div
          className="absolute bottom-[18%] left-12 top-[14%] hidden w-[2px] lg:block xl:left-14"
          style={{ backgroundColor: GOLD }}
          aria-hidden="true"
        />

        <div className="relative z-[1] max-w-[34rem] lg:pl-6 xl:pl-7">
          <h1 className="font-heading text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]">
            Construction grounded in planning, quality and accountability.
          </h1>

          <p className="mt-6 max-w-[30rem] text-[15px] leading-[1.7] text-white/72 lg:text-[16px]">
            Practical planning, disciplined site coordination and clear communication—from pre-construction
            review to final handover.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-9">
            <Link
              href="/contact?type=construction"
              className="inline-flex items-center justify-center whitespace-nowrap bg-nebco-red px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover lg:px-6 lg:py-3.5 lg:text-[11px]"
            >
              Request a Construction Proposal
            </Link>
            <span ref={viewProjectsRef} className="inline-flex">
              <Link
                href="/projects?filter=construction"
                className="inline-flex items-center justify-center whitespace-nowrap border border-white/75 px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/5 lg:px-6 lg:py-3.5 lg:text-[11px]"
              >
                View Projects
              </Link>
            </span>
          </div>
        </div>

        <div
          className="relative z-[1] mt-10 flex items-center gap-2.5 font-mono text-[10px] tracking-[0.1em] lg:absolute lg:bottom-8 lg:left-12 lg:mt-0 lg:pl-6 lg:text-[11px] xl:left-14 xl:pl-7"
          style={{ color: GOLD }}
        >
          <NebcoMark />
          <CoordinateMark />
          <span>27°42&apos;N | 85°19&apos;E</span>
        </div>
      </div>

      {/* Right — site photograph */}
      <div className="relative min-h-[320px] flex-1 lg:min-h-0">
        <Image
          src={IMAGES.constructionHero}
          alt="Construction professionals reviewing plans on site"
          fill
          className="object-cover object-[52%_42%]"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <ConstructionHeroTargeting sectionRef={sectionRef} anchorRef={viewProjectsRef} />
    </section>
  );
}
