import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { ConsultingHeroCollage } from "@/components/ui/ConsultingHeroCollage";

const GOLD_MUTED = "#a8864d";

export function ConsultingHero() {
  return (
    <section className="consulting-hero relative flex h-auto min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111] lg:h-[calc(100svh-88px)] lg:flex-row">
      {/* Left - content panel */}
      <div className="consulting-hero__panel relative z-10 flex min-h-[380px] flex-col justify-center px-7 py-10 sm:px-9 sm:py-12 lg:min-h-0 lg:px-11 lg:py-10 xl:px-14">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />

        <div className="consulting-hero__copy relative z-[1] w-full">
          <p
            className="consulting-hero__eyebrow type-label font-semibold uppercase tracking-[0.16em]"
            style={{ color: GOLD_MUTED }}
          >
            NEBCO CONSULTING
          </p>

          <h1 className="consulting-hero__heading text-white">
            <span className="consulting-hero__heading-line">Clarity before construction.</span>
            <span className="consulting-hero__heading-line">Control throughout</span>
            <span className="consulting-hero__heading-line">development.</span>
          </h1>

          <p className="consulting-hero__body">
            End-to-end real estate development and construction project management - from land evaluation
            to a functioning asset.
          </p>

          <div className="consulting-hero__actions">
            <Link
              href="/contact?type=land-evaluation"
              className="consulting-hero__btn consulting-hero__btn--primary"
            >
              Evaluate My Property
              <span className="consulting-hero__btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              href="/contact?type=project"
              className="consulting-hero__btn consulting-hero__btn--secondary"
            >
              Discuss a Development Project
            </Link>
          </div>
        </div>
      </div>

      {/* Right - design composite */}
      <div className="consulting-hero__visual relative min-h-[300px] flex-1 sm:min-h-[340px] lg:min-h-0">
        <ConsultingHeroCollage />
      </div>
    </section>
  );
}
