import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

function CraneIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={`w-11 h-11 ${className}`} aria-hidden="true">
      <path d="M10 46h36" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M18 46V22h20v24" stroke="currentColor" strokeWidth="1.15" />
      <path d="M28 22V10" stroke="currentColor" strokeWidth="1.15" />
      <path d="M28 10h18" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M46 10v6" stroke="currentColor" strokeWidth="1.15" />
      <path d="M28 14h-6" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      <path d="M22 14v4" stroke="currentColor" strokeWidth="1.15" />
      <path d="M14 30h8M14 36h8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M34 30h8M34 36h8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function BlueprintIcon({ className = "text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={`w-11 h-11 ${className}`} aria-hidden="true">
      <path d="M14 14c0-2 2-4 6-4h16c4 0 6 2 6 4v30c0 2-2 4-6 4H20c-4 0-6-2-6-4V14z" stroke="currentColor" strokeWidth="1.15" />
      <path d="M20 10c2-3 5-4 8-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M36 10c-2-3-5-4-8-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M18 22h20M18 28h20M18 34h12" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
      <path d="M34 38l10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M38 34l6 6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon({ className = "text-nebco-red" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={`w-11 h-11 ${className}`} aria-hidden="true">
      <rect x="16" y="8" width="24" height="40" stroke="currentColor" strokeWidth="1.15" />
      <path d="M16 16h24M16 24h24M16 32h24M16 40h24" stroke="currentColor" strokeWidth="0.85" />
      <path d="M28 8v40" stroke="currentColor" strokeWidth="0.85" />
      <path d="M22 12h12" stroke="currentColor" strokeWidth="0.85" />
      <path d="M10 48h36" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function ThinArrow({ className = "text-white" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 14" fill="none" className={`w-6 h-3.5 ${className}`} aria-hidden="true">
      <path d="M1 7h20M16 2l5 5-5 5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const DIVISIONS = [
  {
    title: "Construction",
    tagline: "We build.",
    href: "/construction",
    variant: "red" as const,
    icon: CraneIcon,
    image: IMAGES.divisionConstruction,
  },
  {
    title: "Consulting",
    tagline: "We structure and manage.",
    href: "/consulting",
    variant: "dark" as const,
    icon: BlueprintIcon,
    image: IMAGES.divisionConsulting,
  },
  {
    title: "Investments",
    tagline: "We selectively participate.",
    href: "/investments",
    variant: "light" as const,
    icon: BuildingIcon,
    image: IMAGES.divisionInvestments,
  },
] as const;

const CONSULTING_SHADE =
  "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.82) 32%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.22) 68%, rgba(0,0,0,0.06) 82%, transparent 100%)";

interface ThreeDivisionsSectionProps {
  compact?: boolean;
}

export function ThreeDivisionsSection({ compact = false }: ThreeDivisionsSectionProps) {
  const content = (
    <div className={`container-nebco ${compact ? "h-full flex flex-col justify-center w-full" : ""}`}>
      <div className={`flex items-center gap-5 ${compact ? "mb-4 lg:mb-5" : "mb-5 lg:mb-6"}`}>
        <SectionEyebrow
          number="02"
          title="THREE DIVISIONS"
          className={`mb-0 shrink-0 ${compact ? "!text-[11px] !tracking-[0.16em]" : ""}`}
        />
        <div className="flex-1 h-px bg-nebco-red/35" aria-hidden="true" />
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 border border-[#d8d2c8] ${
          compact ? "flex-1 min-h-0 md:min-h-[180px]" : ""
        }`}
      >
        {DIVISIONS.map((div) => {
          const Icon = div.icon;
          const isRed = div.variant === "red";
          const isDark = div.variant === "dark";
          const isLight = div.variant === "light";

          return (
            <Link
              key={div.title}
              href={div.href}
              className={`group relative flex flex-col overflow-hidden border-b md:border-b-0 md:border-r border-[#d8d2c8] last:border-r-0 last:border-b-0 ${
                compact ? "min-h-[200px] md:min-h-0 md:h-full" : "min-h-[260px] lg:min-h-[280px]"
              } ${isLight ? "bg-ivory-light text-arch-black" : "text-white"}`}
            >
              {isDark && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-nebco-red z-20" aria-hidden="true" />
              )}

              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {isRed && (
                  <>
                    <Image
                      src={div.image}
                      alt=""
                      fill
                      className="object-cover object-center grayscale contrast-[1.1] brightness-[0.85]"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-nebco-red/78 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-nebco-red/55" />
                  </>
                )}
                {isDark && (
                  <>
                    <Image
                      src={div.image}
                      alt=""
                      fill
                      className="object-cover object-center sepia-[0.35] grayscale-[0.4] contrast-[1.05] brightness-[0.9]"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0" style={{ background: CONSULTING_SHADE }} />
                  </>
                )}
                {isLight && (
                  <>
                    <div className="absolute inset-0 bg-ivory-light" />
                    <div className="absolute inset-y-0 right-0 w-[62%]">
                      <Image src={div.image} alt="" fill className="object-cover object-[center_40%]" sizes="33vw" />
                    </div>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, #f5f2ed 0%, #f5f2ed 30%, rgba(245,242,237,0.92) 42%, rgba(245,242,237,0.55) 52%, rgba(245,242,237,0.15) 62%, transparent 72%)",
                      }}
                    />
                  </>
                )}
              </div>

              <div
                className={`relative z-10 flex flex-col flex-1 ${
                  compact ? "p-7 lg:p-8 xl:p-9" : "p-9 lg:p-11 xl:p-12"
                }`}
              >
                <div className={compact ? "scale-[0.92] origin-top-left" : undefined}>
                  <Icon className={isLight ? "text-nebco-red" : "text-white"} />
                </div>

                <div className={compact ? "mt-auto pt-10" : "mt-auto pt-16"}>
                  <h3
                    className={`font-heading font-bold leading-tight tracking-tight ${
                      compact ? "text-[1.5rem] lg:text-[1.65rem] xl:text-[1.75rem]" : "text-[1.65rem] lg:text-[1.75rem]"
                    }`}
                  >
                    {div.title}
                  </h3>
                  <p
                    className={`font-normal leading-snug ${
                      compact ? "text-[13px] lg:text-[14px] mt-2" : "text-[14px] mt-2"
                    } ${isLight ? "text-arch-black/80" : "text-white/90"}`}
                  >
                    {div.tagline}
                  </p>
                  <div className={compact ? "mt-5" : "mt-7"}>
                    <ThinArrow className={isLight ? "text-nebco-red" : "text-white"} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  if (compact) {
    return <div className="w-full h-full flex flex-col justify-center py-8 lg:py-0">{content}</div>;
  }

  return <section className="bg-ivory-light py-10 lg:py-14">{content}</section>;
}
