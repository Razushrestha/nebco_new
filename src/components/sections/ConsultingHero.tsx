import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { ConsultingHeroCollage } from "@/components/ui/ConsultingHeroCollage";
import { ConsultingHeroTrendLine } from "@/components/ui/ConsultingHeroTrendLine";

const GOLD = "#c5a059";
const GOLD_MUTED = "#a8864d";

export function ConsultingHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:flex-row">
      <ConsultingHeroTrendLine />

      {/* Left — content panel */}
      <div className="relative z-10 flex min-h-[420px] flex-col justify-center px-7 py-12 sm:px-9 sm:py-14 lg:min-h-0 lg:flex-[0_0_40%] lg:px-11 lg:py-16 xl:flex-[0_0_38%] xl:px-14">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />

        <div className="relative z-[1] max-w-[31rem]">
          <p
            className="mb-5 font-mono text-[10px] uppercase tracking-[0.17em] sm:mb-6 sm:text-[11px] xl:text-[12px]"
            style={{ color: GOLD_MUTED }}
          >
            NEBCO CONSULTING
          </p>

          <h1 className="font-heading text-[1.875rem] font-bold leading-[1.18] tracking-[-0.02em] text-white sm:text-[2.125rem] sm:leading-[1.16] lg:text-[2.375rem] lg:leading-[1.14] xl:text-[2.5rem]">
            Clarity before construction.
            <br />
            Control throughout development.
          </h1>

          <p className="mt-5 max-w-[27rem] text-[14px] leading-[1.7] text-white/75 sm:mt-6 sm:text-[15px] lg:text-[16px] xl:text-[17px]">
            End-to-end real estate development and construction project management—from land evaluation
            to a functioning asset.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-9">
            <Link
              href="/contact?type=land-evaluation"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-nebco-red px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-nebco-red-hover sm:text-[10px] lg:px-6 lg:py-3.5 lg:text-[11px] lg:tracking-[0.14em]"
            >
              Evaluate My Property
              <span aria-hidden="true" className="text-[11px] lg:text-[12px]">
                →
              </span>
            </Link>
            <Link
              href="/contact?type=project"
              className="inline-flex items-center justify-center whitespace-nowrap border px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white/[0.04] sm:text-[10px] lg:px-6 lg:py-3.5 lg:text-[11px] lg:tracking-[0.14em]"
              style={{ borderColor: `${GOLD}99` }}
            >
              Discuss a Development Project
            </Link>
          </div>
        </div>
      </div>

      {/* Right — design collage */}
      <div className="relative min-h-[360px] flex-1 sm:min-h-[420px] lg:min-h-0">
        <ConsultingHeroCollage />
      </div>
    </section>
  );
}
