import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * Partners — 02 / Core NEBCO Team
 * Asymmetric row: large MD portrait + three shorter silhouette cards.
 * Tops of media align; role labels + equal-length rules share one baseline.
 */

const ACCENT = "#bc2026";

const PLACEHOLDERS = [
  "General Manager",
  "Project Leadership",
  "Engineering Leadership",
] as const;

function PersonSilhouette() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="h-[62%] w-auto text-[#6b6b6b]"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="60" cy="42" r="28" />
      <path d="M20 132c4-32 22-48 40-48s36 16 40 48" />
    </svg>
  );
}

function RoleCaption({ label }: { label: string }) {
  return (
    <div className="mt-auto flex flex-col items-center pt-5 sm:pt-6">
      <p
        className="text-center font-heading text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px] lg:text-[12px]"
        style={{ color: ACCENT }}
      >
        {label}
      </p>
      {/* Equal rule length on every column */}
      <span
        className="mt-2.5 block h-px w-11 sm:mt-3 sm:w-12"
        style={{ backgroundColor: ACCENT }}
        aria-hidden="true"
      />
    </div>
  );
}

export function PartnersTeamSection() {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[4.25rem] xl:px-12">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          02 / Core NEBCO Team
        </p>

        {/*
          Desktop proportions from the reference:
          MD column ≈ 1.9× a silhouette column; MD photo landscape & taller;
          silhouette cards shorter/squarer; captions share one baseline.
        */}
        <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:mt-11 lg:grid-cols-[minmax(0,1.95fr)_repeat(3,minmax(0,1fr))] lg:items-stretch lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
          {/* Managing Director — wider + taller landscape photo */}
          <article className="flex h-full flex-col sm:col-span-3 lg:col-span-1">
            <div className="relative w-full overflow-hidden bg-[#d8d4ce] aspect-[312/231]">
              <Image
                src={IMAGES.partnersMd}
                alt="Managing Director"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_22%] grayscale"
                priority={false}
              />
            </div>
            <RoleCaption label="Managing Director" />
          </article>

          {/* Three equal silhouette cards — shorter than MD photo */}
          {PLACEHOLDERS.map((role) => (
            <article key={role} className="flex h-full flex-col">
              <div className="relative flex w-full items-end justify-center overflow-hidden border border-[#d5d0c8] bg-[#e8e6e1] aspect-[160/177]">
                <PersonSilhouette />
              </div>
              <RoleCaption label={role} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
