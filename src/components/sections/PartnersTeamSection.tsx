import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * Partners - 02 / Core NEBCO Team
 * MD wider landscape photo + three equal silhouette frames.
 * Tops aligned; role labels + gold rules centered under each frame.
 */

const GOLD = "#c5a059";

const MEMBERS = [
  {
    id: "md",
    role: "Managing Director",
    kind: "photo" as const,
    image: IMAGES.partnersMd,
    alt: "Managing Director",
  },
  {
    id: "gm",
    role: "General Manager",
    kind: "silhouette" as const,
  },
  {
    id: "pl",
    role: "Project Leadership",
    kind: "silhouette" as const,
  },
  {
    id: "el",
    role: "Engineering Leadership",
    kind: "silhouette" as const,
  },
] as const;

function PersonSilhouette() {
  return (
    <svg
      viewBox="0 0 120 140"
      className="h-[52%] w-auto max-h-[7.5rem] text-[#5c5c5c]"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="60" cy="42" r="26" />
      <path d="M20 128c4-30 20-46 40-46s36 16 40 46" />
    </svg>
  );
}

export function PartnersTeamSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`partners-team bg-[#f5f2ed] ${
        compact ? "partners-team--compact min-h-0 flex-1 border-t border-[#e2ddd4]" : ""
      }`}
    >
      <div
        className={`mx-auto flex h-full w-full max-w-[1440px] flex-col ${
          compact
            ? "px-6 pb-4 pt-3.5 sm:px-8 lg:px-10 lg:pb-5 lg:pt-4 xl:px-12"
            : "px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[4.5rem] xl:px-12"
        }`}
      >
        <div className="flex shrink-0 items-center gap-4">
          <p className="shrink-0 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
            02 / Core NEBCO Team
          </p>
          <span className="h-px flex-1 bg-[#ddd7ce]" aria-hidden="true" />
        </div>

        <div
          className={`partners-team__grid grid min-h-0 flex-1 grid-cols-2 items-stretch lg:grid-cols-[1.55fr_1fr_1fr_1fr] ${
            compact
              ? "mt-3.5 gap-x-3.5 gap-y-5 sm:mt-4 sm:gap-x-5 lg:gap-x-6 xl:gap-x-8"
              : "mt-9 gap-x-5 gap-y-10 sm:mt-10 sm:gap-x-6 lg:mt-11 lg:gap-x-8 xl:gap-x-10"
          }`}
        >
          {MEMBERS.map((member) => {
            const isMd = member.kind === "photo";

            return (
              <article
                key={member.id}
                className={`partners-team__card group flex min-h-0 min-w-0 flex-col ${
                  isMd ? "partners-team__card--md" : ""
                }`}
              >
                <div
                  className={`partners-team__frame relative w-full overflow-hidden ${
                    compact
                      ? "min-h-0 flex-1"
                      : isMd
                        ? "aspect-[5/4] shrink-0"
                        : "aspect-square shrink-0"
                  } ${
                    isMd
                      ? "border border-arch-black/75 bg-[#d6d2cb]"
                      : "border border-[#cfc9bf] bg-[#e8e5df]"
                  }`}
                >
                  {isMd ? (
                    <>
                      <span
                        className="absolute inset-x-0 top-0 z-[2] h-[3px] bg-nebco-red"
                        aria-hidden="true"
                      />
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 38vw"
                        className="object-cover object-[center_18%] grayscale transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={false}
                      />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <PersonSilhouette />
                    </div>
                  )}
                </div>

                <div
                  className={`flex shrink-0 flex-col items-center text-center ${
                    compact ? "mt-2.5" : "mt-4"
                  }`}
                >
                  <p
                    className={`font-heading font-semibold uppercase tracking-[0.12em] text-nebco-red ${
                      compact
                        ? "text-[9px] sm:text-[9.5px] lg:text-[10px]"
                        : "text-[10.5px] sm:text-[11px]"
                    }`}
                  >
                    {member.role}
                  </p>
                  <span
                    className="mt-1.5 block h-px w-8"
                    style={{ backgroundColor: GOLD }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
