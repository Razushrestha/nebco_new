import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { ConsultingHeroCollage } from "@/components/ui/ConsultingHeroCollage";
import { ConsultingHeroTrendLine } from "@/components/ui/ConsultingHeroTrendLine";

const GOLD = "#c5a059";

export function ConsultingHero() {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-[calc(100svh-72px)] lg:min-h-[calc(100svh-72px)] overflow-hidden bg-[#111111]">
      <ConsultingHeroTrendLine />

      {/* Left — content panel */}
      <div className="relative z-10 flex flex-col justify-center lg:flex-[0_0_42%] xl:flex-[0_0_40%] px-7 sm:px-9 lg:px-11 xl:px-14 py-12 sm:py-14 lg:py-16 min-h-[420px] lg:min-h-0">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg absolute inset-0 opacity-[0.35] pointer-events-none" aria-hidden="true" />

        <div className="relative z-[1] max-w-[31rem]">
          <p
            className="font-mono text-[10px] sm:text-[11px] lg:text-[11px] xl:text-[12px] uppercase tracking-[0.17em] mb-5 sm:mb-6"
            style={{ color: GOLD }}
          >
            NEBCO CONSULTING
          </p>

          <h1 className="font-heading font-bold text-[1.875rem] sm:text-[2.125rem] lg:text-[2.375rem] xl:text-[2.5rem] leading-[1.18] sm:leading-[1.16] lg:leading-[1.14] tracking-[-0.02em] text-white">
            Clarity before construction. Control throughout development.
          </h1>

          <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] text-white/75 leading-[1.7] max-w-[27rem]">
            End-to-end real estate development and construction project management—from land evaluation
            to a functioning asset.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mt-8 lg:mt-9">
            <Link
              href="/contact?type=land-evaluation"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:px-6 lg:py-3.5 bg-nebco-red text-white text-[10px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.13em] lg:tracking-[0.14em] hover:bg-nebco-red-hover transition-colors font-heading whitespace-nowrap"
            >
              Evaluate My Property
              <span aria-hidden="true" className="text-[11px] lg:text-[12px]">→</span>
            </Link>
            <Link
              href="/contact?type=project"
              className="inline-flex items-center justify-center px-5 py-3 lg:px-6 lg:py-3.5 text-[10px] sm:text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.13em] lg:tracking-[0.14em] transition-colors font-heading whitespace-nowrap border hover:bg-white/[0.04]"
              style={{ borderColor: `${GOLD}99`, color: GOLD }}
            >
              Discuss a Development Project
            </Link>
          </div>
        </div>
      </div>

      {/* Right — visual collage */}
      <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] lg:min-h-0">
        <ConsultingHeroCollage />
      </div>
    </section>
  );
}
