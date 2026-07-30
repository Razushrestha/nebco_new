import Image from "next/image";
import Link from "next/link";
import { HeroAngleLayers } from "@/components/ui/HeroAngleEdge";
import { HeroBlueprintOverlay } from "@/components/ui/HeroBlueprintOverlay";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const GOLD_MUTED = "#a8864d";

function CoordinateCrosshair() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="14" cy="14" r="10.5" stroke={GOLD} strokeWidth="0.9" />
      <circle cx="14" cy="14" r="3.2" stroke={GOLD} strokeWidth="0.85" />
      <path d="M14 2.5v4.2M14 21.3v4.2M2.5 14h4.2M21.3 14h4.2" stroke={GOLD} strokeWidth="0.9" />
      <path d="M14 11.2v5.6M11.2 14h5.6" stroke={GOLD} strokeWidth="0.75" />
    </svg>
  );
}

export function InvestmentsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:block lg:min-h-[calc(100svh-88px)]">
      {/* Full-bleed building photograph */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={IMAGES.investmentsHero}
          alt="Modern mixed-use development at dusk"
          fill
          className="object-cover object-[62%_40%]"
          priority
          sizes="100vw"
        />
        {/* Soft left fade so the red seam reads cleanly */}
        <div
          className="pointer-events-none absolute inset-y-0 left-[42%] right-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(17,17,17,0.22) 0%, transparent 18%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Diagonal dark panel + red wedge */}
      <HeroAngleLayers />
      <HeroBlueprintOverlay />

      {/* Mobile photo */}
      <div className="relative order-2 min-h-[280px] sm:min-h-[340px] lg:hidden">
        <Image
          src={IMAGES.investmentsHero}
          alt="Modern mixed-use development at dusk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-12">
          <p
            className="font-mono text-[9px] font-medium uppercase tracking-[0.14em]"
            style={{ color: GOLD }}
          >
            Disciplined evaluation. Structured partnership. Shared value.
          </p>
        </div>
      </div>

      {/* Content — sits in the clipped dark panel on desktop */}
      <div className="relative z-10 order-1 flex flex-1 flex-col px-7 py-12 sm:px-9 sm:py-14 lg:absolute lg:inset-0 lg:justify-between lg:px-12 lg:pb-9 lg:pt-14 xl:px-[56px] xl:pb-10 xl:pt-16">
        <div className="relative my-auto max-w-[34rem] lg:max-w-[36rem] xl:max-w-[38rem]">
          <p
            className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:mb-6 sm:text-[11px]"
            style={{ color: GOLD_MUTED }}
          >
            NEBCO INVESTMENTS
          </p>

          <h1 className="font-heading text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[2.5rem] sm:leading-[1.06] lg:text-[2.85rem] xl:text-[3.15rem]">
            <span className="block text-white">Viable property.</span>
            <span className="block text-white">Clear structure.</span>
            <span className="block text-nebco-red">The right partnership.</span>
          </h1>

          <p className="mt-5 max-w-[30rem] text-[14px] leading-[1.7] text-white/75 sm:mt-6 sm:text-[15px] lg:text-[16px]">
            Selective participation in real estate opportunities where land, project economics, execution
            capability and stakeholder interests can be aligned.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact?type=opportunity"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-nebco-red px-5 py-3.5 font-heading text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-nebco-red-hover sm:text-[11px] lg:px-6 lg:tracking-[0.14em]"
            >
              Submit an Opportunity
              <span aria-hidden="true" className="text-[12px]">
                →
              </span>
            </Link>
            <Link
              href="#models"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap border px-5 py-3.5 font-heading text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-white/[0.04] sm:text-[11px] lg:px-6 lg:tracking-[0.14em]"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              Explore Partnership Models
              <span aria-hidden="true" className="text-[12px]">
                →
              </span>
            </Link>
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-white/45 sm:mt-10 sm:text-[12px] lg:hidden">
            All opportunities are reviewed with strict confidentiality.
          </p>
        </div>

        <p className="relative mt-10 hidden max-w-[34rem] text-[11px] leading-relaxed text-white/45 lg:mt-0 lg:block lg:max-w-[36rem] lg:text-[12px] xl:max-w-[38rem]">
          All opportunities are reviewed with strict confidentiality.
        </p>
      </div>

      {/* Coordinates — top right of photo */}
      <div
        className="pointer-events-none absolute right-7 top-7 z-20 hidden items-start gap-2.5 lg:flex xl:right-10 xl:top-9"
        style={{ color: GOLD }}
      >
        <div className="pt-0.5 text-right font-mono text-[10px] font-medium uppercase tracking-[0.12em] xl:text-[11px]">
          <p>27.7172° N</p>
          <p className="mt-0.5">85.3240° E</p>
        </div>
        <CoordinateCrosshair />
      </div>

      {/* Bottom tagline on photo + gold rule */}
      <div className="pointer-events-none absolute bottom-7 left-[min(52%,48rem)] right-8 z-20 hidden lg:block xl:bottom-9 xl:right-10">
        <div className="mb-3 h-px w-16" style={{ backgroundColor: `${GOLD}99` }} aria-hidden="true" />
        <p
          className="font-mono text-[9.5px] font-medium uppercase tracking-[0.16em] xl:text-[10.5px]"
          style={{ color: GOLD }}
        >
          Disciplined evaluation. Structured partnership. Shared value.
        </p>
      </div>
    </section>
  );
}
