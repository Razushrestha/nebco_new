import Image from "next/image";
import Link from "next/link";
import {
  HeroAngleLayers,
  INVESTMENTS_HERO_ANGLE,
  INVESTMENTS_RED_TIP,
  INVESTMENTS_RED_TOP_RIGHT,
} from "@/components/ui/HeroAngleEdge";
import { HeroBlueprintOverlay } from "@/components/ui/HeroBlueprintOverlay";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const GOLD_MUTED = "#a8864d";

/** Simple plus reticle at the head of the surveying line */
function SurveyCrosshair() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M9 1.5v15M1.5 9h15" stroke={GOLD} strokeWidth="1.15" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1.35" fill={GOLD} />
    </svg>
  );
}

export function InvestmentsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:block lg:min-h-[calc(100svh-88px)]">
      {/* Full-bleed dusk building - flush to right edge */}
      <div className="absolute inset-0 hidden overflow-hidden lg:block">
        <Image
          src={IMAGES.investmentsHero}
          alt="Modern mixed-use building at dusk"
          fill
          className="object-cover object-[62%_42%]"
          priority
          sizes="100vw"
        />
      </div>

      <HeroAngleLayers
        angle={INVESTMENTS_HERO_ANGLE}
        redWedge={{ topRight: INVESTMENTS_RED_TOP_RIGHT, tip: INVESTMENTS_RED_TIP }}
      />
      <HeroBlueprintOverlay angle={INVESTMENTS_HERO_ANGLE} />

      {/* Mobile photo */}
      <div className="relative order-2 min-h-[280px] sm:min-h-[340px] lg:hidden">
        <Image
          src={IMAGES.investmentsHero}
          alt="Modern mixed-use building at dusk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-12">
          <div className="flex items-center gap-3">
            <div className="relative h-px min-w-0 flex-1" style={{ backgroundColor: GOLD }} aria-hidden="true">
              <span
                className="absolute right-0 top-1/2 size-[4px] -translate-y-1/2 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
            </div>
            <p
              className="max-w-[14rem] shrink-0 text-center font-heading text-[8px] font-semibold uppercase leading-snug tracking-[0.12em] sm:max-w-none sm:text-[9px] sm:tracking-[0.14em]"
              style={{ color: GOLD }}
            >
              Disciplined evaluation. Structured partnership. Shared value.
            </p>
            <div className="relative h-px min-w-0 flex-1" style={{ backgroundColor: GOLD }} aria-hidden="true">
              <span
                className="absolute left-0 top-1/2 size-[4px] -translate-y-1/2 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Left content - one flush-left stack matching the mock */}
      <div className="relative z-10 order-1 flex flex-1 flex-col justify-between px-7 py-12 sm:px-9 sm:py-14 lg:absolute lg:inset-0 lg:px-12 lg:pb-9 lg:pt-10 xl:px-14 xl:pb-10 xl:pt-11">
        <div className="flex w-full max-w-[40rem] flex-col items-start text-left">
          <p
            className="font-heading text-[10px] font-semibold uppercase leading-none tracking-[0.18em] sm:text-[11px]"
            style={{ color: GOLD_MUTED }}
          >
            NEBCO INVESTMENTS
          </p>

          <h1 className="mt-5 whitespace-nowrap font-heading text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:mt-6 sm:text-[2.6rem] sm:leading-[1.04] lg:mt-6 lg:text-[3rem] lg:leading-[1.03] xl:text-[3.2rem] xl:leading-[1.02]">
            Viable property.
            <br />
            Clear structure.
            <br />
            <span className="text-nebco-red">The right partnership.</span>
          </h1>

          <p className="mt-6 max-w-[32rem] text-left text-[14px] font-normal leading-[1.65] text-white/88 sm:mt-7 sm:text-[15px] lg:mt-7 lg:max-w-[34rem] lg:text-[15.5px] lg:leading-[1.65]">
            Selective participation in real estate opportunities where land, project
            economics, execution capability and stakeholder interests can be aligned.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-3.5">
            <Link
              href="/contact?type=opportunity"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-nebco-red px-5 py-3.5 font-heading text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-nebco-red-hover sm:text-[11px] lg:px-6"
            >
              Submit an Opportunity
              <span aria-hidden="true" className="text-[12px]">
                →
              </span>
            </Link>
            <Link
              href="#models"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border px-5 py-3.5 font-heading text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white/[0.04] sm:text-[11px] lg:px-6"
              style={{ borderColor: GOLD }}
            >
              Explore Partnership Models
              <span aria-hidden="true" className="text-[12px]">
                →
              </span>
            </Link>
          </div>
        </div>

        <p className="mt-10 text-left text-[11px] leading-relaxed text-white/45 sm:text-[12px] lg:mt-0">
          All opportunities are reviewed with strict confidentiality.
        </p>
      </div>

      {/* Gold surveying line + coordinates - top-right of photo */}
      <div
        className="pointer-events-none absolute bottom-24 right-10 top-8 z-20 hidden lg:block xl:right-12 xl:bottom-28 xl:top-9"
        aria-hidden="true"
      >
        {/* Vertical gold line */}
        <div
          className="absolute bottom-0 left-0 top-[9px] w-px -translate-x-1/2"
          style={{
            backgroundColor: GOLD,
            boxShadow: `0 0 5px ${GOLD}99, 0 0 10px ${GOLD}44`,
          }}
        />
        {/* Crosshair at top of line */}
        <div className="absolute left-0 top-0 -translate-x-1/2">
          <SurveyCrosshair />
        </div>
        {/* Coordinates to the left of the crosshair */}
        <div
          className="absolute right-full top-0 mr-3 whitespace-nowrap text-right font-mono text-[10px] font-medium uppercase leading-[1.45] tracking-[0.12em] xl:mr-3.5 xl:text-[11px]"
          style={{ color: GOLD }}
        >
          <p>27.7172° N</p>
          <p>85.3240° E</p>
        </div>
      </div>

      {/* Bottom tagline - right side over the photo, gold rules + end dots */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 hidden lg:block lg:left-[min(52%,38rem)] xl:left-[min(50%,36rem)]">
        <div className="flex items-center gap-3.5 py-5 pr-10 pl-4 xl:gap-4 xl:py-6 xl:pr-14 xl:pl-5">
          <div className="relative h-px min-w-[2.5rem] flex-1" style={{ backgroundColor: GOLD }} aria-hidden="true">
            <span
              className="absolute right-0 top-1/2 size-[5px] -translate-y-1/2 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
          </div>
          <p
            className="shrink-0 whitespace-nowrap font-heading text-[9px] font-semibold uppercase tracking-[0.16em] xl:text-[10px] xl:tracking-[0.18em]"
            style={{ color: GOLD }}
          >
            Disciplined evaluation. Structured partnership. Shared value.
          </p>
          <div className="relative h-px min-w-[2.5rem] flex-1" style={{ backgroundColor: GOLD }} aria-hidden="true">
            <span
              className="absolute left-0 top-1/2 size-[5px] -translate-y-1/2 rounded-full"
              style={{ backgroundColor: GOLD }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
