import Image from "next/image";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

function CoordinateCrosshair({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="14" cy="14" r="3.2" stroke="currentColor" strokeWidth="0.85" />
      <path
        d="M14 2.5v4.2M14 21.3v4.2M2.5 14h4.2M21.3 14h4.2"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M14 11.2v5.6M11.2 14h5.6" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

/**
 * Projects page hero - left copy (H2 / H4) + right composite life-cycle image.
 */
export function ProjectsHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#0c0c0c] lg:flex-row">
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.18] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      {/* Left - content */}
      <div className="relative z-10 flex min-h-[420px] flex-col justify-between px-7 py-12 sm:px-9 sm:py-14 lg:min-h-0 lg:flex-[0_0_42%] lg:px-11 lg:pb-10 lg:pt-16 xl:flex-[0_0_40%] xl:px-14 xl:pb-11 xl:pt-[4.5rem]">
        <ConstructionHeroBlueprint />
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.28]" aria-hidden="true" />

        <div className="relative z-[1] my-auto max-w-[28rem] lg:max-w-[30rem]">
          <p className="mb-5 type-label font-semibold uppercase tracking-[0.16em] text-nebco-red sm:mb-6">
            Projects
          </p>

          <h1 className="type-h2 tracking-[-0.025em] text-white">
            <span className="block">Projects shaped by</span>
            <span className="block">different needs,</span>
            <span className="block">stages and</span>
            <span className="block">responsibilities.</span>
          </h1>

          <p className="type-h4 mt-5 max-w-[26rem] font-normal text-white/80 sm:mt-6">
            Construction, development consulting and project coordination-presented through the role
            NEBCO actually performed.
          </p>
        </div>

        {/* Coordinates - bottom of left panel */}
        <div className="relative z-[1] mt-10 lg:mt-0">
          <span className="mb-3 block h-px w-full max-w-[16rem] bg-nebco-red/80" aria-hidden="true" />
          <div className="flex items-center gap-2.5" style={{ color: GOLD }}>
            <CoordinateCrosshair className="shrink-0 opacity-90" />
            <p className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] sm:text-[10px]">
              LAT 27.7172° N | LON 85.3240° E
            </p>
          </div>
          <span className="mt-3 block h-px w-full max-w-[16rem] bg-nebco-red/80" aria-hidden="true" />
        </div>
      </div>

      {/* Right - provided composite image */}
      <div className="relative min-h-[360px] flex-1 sm:min-h-[420px] lg:min-h-0">
        <Image
          src={IMAGES.projectsHero}
          alt="Project life cycle - completed building, construction, and architectural wireframe"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
    </section>
  );
}
