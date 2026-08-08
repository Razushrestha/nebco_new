import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * Partners — 02 / Core NEBCO Team
 * Four-up board; MD wider + red top accent.
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
      className="h-[48%] w-auto text-[#7a7a7a]"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="60" cy="44" r="24" />
      <path d="M24 126c3-28 18-42 36-42s33 14 36 42" />
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
            ? "px-6 py-5 sm:px-8 lg:px-10 lg:py-6 xl:px-12"
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
          className={`partners-team__grid grid min-h-0 flex-1 grid-cols-2 content-start lg:grid-cols-[1.45fr_1fr_1fr_1fr] ${
            compact
              ? "mt-4 gap-x-4 gap-y-5 sm:mt-4 sm:gap-x-5 lg:gap-x-6 xl:gap-x-8"
              : "mt-9 gap-x-5 gap-y-10 sm:mt-10 sm:gap-x-6 lg:mt-11 lg:gap-x-8 xl:gap-x-10"
          }`}
        >
          {MEMBERS.map((member) => {
            const isMd = member.kind === "photo";

            return (
              <article
                key={member.id}
                className={`partners-team__card group flex min-w-0 flex-col ${
                  isMd ? "partners-team__card--md" : ""
                }`}
              >
                <div
                  className={`partners-team__frame relative w-full overflow-hidden ${
                    compact ? "min-h-0 shrink" : "aspect-[4/5] shrink-0"
                  } ${
                    isMd
                      ? "border border-arch-black/80 bg-[#d6d2cb]"
                      : "border border-[#d2ccc2] bg-[#eceae4]"
                  }`}
                >
                  {isMd ? (
                    <>
                      {/* Red top accent — Managing Director only */}
                      <span
                        className="absolute inset-x-0 top-0 z-[2] h-1 bg-nebco-red"
                        aria-hidden="true"
                      />
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 32vw"
                        className="object-cover object-[center_16%] grayscale transition-transform duration-500 group-hover:scale-[1.02]"
                        priority={false}
                      />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <PersonSilhouette />
                    </div>
                  )}
                </div>

                {/* Role label — always below the frame */}
                <div className={`shrink-0 ${compact ? "mt-2.5" : "mt-4"}`}>
                  <p
                    className={`font-heading font-semibold uppercase tracking-[0.12em] text-nebco-red ${
                      compact ? "text-[9px] sm:text-[9.5px] lg:text-[10px]" : "text-[10.5px] sm:text-[11px]"
                    }`}
                  >
                    {member.role}
                  </p>
                  <span
                    className="mt-1.5 block h-px w-7 sm:w-8"
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
