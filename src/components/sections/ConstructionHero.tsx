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

export function ConstructionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const viewProjectsRef = useRef<HTMLAnchorElement>(null);

  return (
    <section
      ref={sectionRef}
      className="construction-hero relative flex h-auto min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:h-[calc(100svh-88px)] lg:flex-row"
    >
      {/* Left — dark content panel (~55%) */}
      <div className="construction-hero__panel relative z-10 flex min-h-[420px] flex-col justify-between px-8 py-14 sm:px-10 lg:min-h-0 lg:flex-[0_0_55%] lg:px-12 lg:py-14 xl:px-14">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.32]" aria-hidden="true" />

        <div
          className="construction-hero__rail pointer-events-none absolute bottom-0 left-8 top-[12%] hidden w-px sm:left-10 lg:block lg:left-12 xl:left-14"
          aria-hidden="true"
        />

        <div className="relative z-[1] flex flex-1 flex-col justify-center lg:my-auto">
          <div className="construction-hero__copy w-full lg:pl-7 xl:pl-8">
            <h1 className="construction-hero__heading text-white">
              <span className="construction-hero__heading-line">Construction Grounded</span>
              <span className="construction-hero__heading-line">in planning,</span>
              <span className="construction-hero__heading-line">Quality and accountability</span>
            </h1>

            <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.7] text-white/72 lg:mt-7 lg:text-[16px]">
              Practical planning, disciplined site coordination and clear communication—from pre-construction
              review to final handover.
            </p>

            <div className="construction-hero__actions mt-8 flex flex-row flex-nowrap items-stretch gap-2.5 lg:mt-9 lg:gap-3">
              <Link
                href="/contact?type=construction"
                className="construction-hero__btn inline-flex shrink-0 items-center justify-center whitespace-nowrap bg-nebco-red px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover lg:px-6 lg:py-3.5 lg:text-[11px]"
              >
                Request a Construction Proposal
              </Link>
              <Link
                ref={viewProjectsRef}
                href="/projects?filter=construction"
                className="construction-hero__btn inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-white/75 px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/5 lg:px-6 lg:py-3.5 lg:text-[11px]"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        <div
          className="construction-hero__meta relative z-[1] mt-10 flex w-full items-center gap-2.5 font-mono text-[10px] tracking-[0.1em] lg:mt-0 lg:pl-7 lg:pb-5 lg:pt-6 lg:text-[11px] xl:pl-8"
          style={{ color: GOLD }}
        >
          <CoordinateMark />
          <span>27°42&apos;N&nbsp;&nbsp;|&nbsp;&nbsp;85°19&apos;E</span>
        </div>
      </div>

      {/* Right — site photograph (~60%) */}
      <div ref={photoRef} className="construction-hero__photo relative min-h-[340px] flex-1 lg:min-h-0">
        <Image
          src={IMAGES.constructionHero}
          alt="Construction professionals reviewing blueprints on site with mountains beyond"
          fill
          className="object-cover object-[46%_44%]"
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>

      <ConstructionHeroTargeting sectionRef={sectionRef} photoRef={photoRef} anchorRef={viewProjectsRef} />
    </section>
  );
}
