import { InsightsHero } from "@/components/sections/InsightsHero";
import { InsightsTopicsThinkingSection } from "@/components/sections/InsightsTopicsThinkingSection";
import { InsightsMarketPerspectiveSection } from "@/components/sections/InsightsMarketPerspectiveSection";
import { InsightsGuidesSection } from "@/components/sections/InsightsGuidesSection";

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />

      <InsightsTopicsThinkingSection />

      <InsightsMarketPerspectiveSection />

      <InsightsGuidesSection />

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-nebco-red py-16 text-white">
        <div className="absolute bottom-0 right-0 top-0 w-1/3 opacity-10">
          <svg viewBox="0 0 200 300" className="h-full w-full">
            <path
              d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="container-nebco relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold lg:text-3xl">
              Follow the decisions shaping Nepal&apos;s built environment.
            </h2>
            <p className="mt-3 text-sm text-white/80">Practical insights delivered to your inbox.</p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white px-4 py-3 text-sm text-arch-black outline-none placeholder:text-silver-graphite"
            />
            <button
              type="submit"
              className="shrink-0 border-2 border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-nebco-red"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
