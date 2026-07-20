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
  return (
    <section className="relative flex flex-col lg:flex-row h-auto lg:h-[calc(100svh-72px)] min-h-[calc(100svh-72px)] overflow-hidden bg-[#111111]">
      {/* Left — dark content panel */}
      <div className="relative z-10 flex flex-col justify-center lg:flex-[0_0_45%] px-8 sm:px-10 lg:px-12 xl:px-14 py-14 lg:py-12 min-h-[420px] lg:min-h-0">
        <ConstructionHeroBlueprint />

        {/* Gold vertical spine */}
        <div
          className="hidden lg:block absolute top-[14%] bottom-[18%] left-12 xl:left-14 w-[2px]"
          style={{ backgroundColor: GOLD }}
          aria-hidden="true"
        />

        <div className="relative z-[1] lg:pl-6 xl:pl-7 max-w-[34rem]">
          <h1 className="font-heading font-bold text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem] leading-[1.12] tracking-[-0.02em] text-white">
            Construction grounded in planning, quality and accountability.
          </h1>

          <p className="mt-6 text-[15px] lg:text-[16px] text-white/72 leading-[1.7] max-w-[30rem]">
            Practical planning, disciplined site coordination and clear communication—from pre-construction
            review to final handover.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8 lg:mt-9">
            <Link
              href="/contact?type=construction"
              className="inline-flex items-center justify-center px-5 py-3 lg:px-6 lg:py-3.5 bg-nebco-red text-white text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.14em] hover:bg-nebco-red-hover transition-colors font-heading whitespace-nowrap"
            >
              Request a Construction Proposal
            </Link>
            <Link
              href="/projects?filter=construction"
              className="inline-flex items-center justify-center px-5 py-3 lg:px-6 lg:py-3.5 text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.14em] text-white border border-white/75 hover:bg-white/5 transition-colors font-heading whitespace-nowrap"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Coordinates — bottom left */}
        <div
          className="relative z-[1] mt-10 lg:mt-0 lg:absolute lg:bottom-8 lg:left-12 xl:left-14 flex items-center gap-2.5 text-[10px] lg:text-[11px] font-mono tracking-[0.1em] lg:pl-6 xl:pl-7"
          style={{ color: GOLD }}
        >
          <CoordinateMark />
          <span>27°42&apos;N | 85°19&apos;E</span>
        </div>
      </div>

      {/* Right — site photograph */}
      <div className="relative flex-1 min-h-[320px] lg:min-h-0">
        <Image
          src={IMAGES.constructionHero}
          alt="Construction professionals reviewing plans on site"
          fill
          className="object-cover object-[58%_42%]"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />

        {/* Subtle bottom fade for depth */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <ConstructionHeroTargeting />
    </section>
  );
}
