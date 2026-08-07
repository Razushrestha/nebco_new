import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * Partners — 02 / Core NEBCO Team
 * Wide MD portrait + three square silhouette cards; tops aligned.
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
      className="h-[58%] w-auto text-[#5c5c5c]"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="60" cy="42" r="28" />
      <path d="M20 132c4-32 22-48 40-48s36 16 40 48" />
    </svg>
  );
}

function RoleCaption({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${compact ? "pt-3 sm:pt-3.5" : "pt-5 sm:pt-6"}`}>
      <p
        className={`text-center font-heading font-semibold uppercase tracking-[0.12em] ${
          compact ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-[11px] lg:text-[12px]"
        }`}
        style={{ color: ACCENT }}
      >
        {label}
      </p>
      <span
        className="mt-2 block h-px w-11 sm:mt-2.5 sm:w-12"
        style={{ backgroundColor: ACCENT }}
        aria-hidden="true"
      />
    </div>
  );
}

export function PartnersTeamSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`partners-team bg-[#f5f2ed] ${compact ? "partners-team--compact min-h-0 flex-1 border-t border-[#ddd8cf]" : ""}`}
    >
      <div
        className={`mx-auto flex max-w-[1440px] flex-col ${
          compact
            ? "h-full min-h-0 px-6 py-4 sm:px-8 lg:px-10 lg:py-4 xl:px-12"
            : "px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[4.25rem] xl:px-12"
        }`}
      >
        <p className="type-label shrink-0 font-semibold uppercase tracking-[0.16em] text-nebco-red">
          02 / Core NEBCO Team
        </p>

        <div
          className={`partners-team__grid grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-[minmax(0,1.95fr)_repeat(3,minmax(0,1fr))] ${
            compact
              ? "mt-3 min-h-0 flex-1 gap-x-4 gap-y-6 sm:mt-3.5 lg:mt-4 lg:gap-x-5 xl:gap-x-6"
              : "mt-8 gap-x-5 gap-y-10 sm:mt-10 lg:mt-11 lg:gap-x-6 xl:gap-x-8"
          }`}
        >
          <article className="partners-team__card flex flex-col sm:col-span-2 lg:col-span-1">
            <div className="partners-team__photo relative w-full overflow-hidden bg-[#d8d4ce] aspect-[312/231]">
              <Image
                src={IMAGES.partnersMd}
                alt="Managing Director"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_22%] grayscale"
                priority={false}
              />
            </div>
            <RoleCaption label="Managing Director" compact={compact} />
          </article>

          {PLACEHOLDERS.map((role) => (
            <article key={role} className="partners-team__card flex flex-col">
              <div className="partners-team__silhouette relative flex aspect-square w-full items-center justify-center overflow-hidden border border-arch-black/85 bg-[#e8e6e1]">
                <PersonSilhouette />
              </div>
              <RoleCaption label={role} compact={compact} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
