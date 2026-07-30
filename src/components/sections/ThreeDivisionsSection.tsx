import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const DIVISION_ICONS = {
  construction: "/foundation/Construction.png",
  consulting: "/foundation/Consulting.png",
  investments: "/foundation/Investments.png",
} as const;

function DivisionIcon({
  src,
  alt,
  variant,
}: {
  src: string;
  alt: string;
  variant: "red" | "dark" | "light";
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1024}
      quality={100}
      unoptimized
      className={`three-divisions-icon ${variant === "light" ? "" : "mix-blend-screen"}`}
    />
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
    iconSrc: DIVISION_ICONS.construction,
    image: IMAGES.divisionConstruction,
    services: ["Residential Construction", "Commercial Buildings", "Hospitality Projects", "Infrastructure & Civil"],
  },
  {
    title: "Consulting",
    tagline: "We structure and manage.",
    href: "/consulting",
    variant: "dark" as const,
    iconSrc: DIVISION_ICONS.consulting,
    image: IMAGES.divisionConsulting,
    services: [
      "Property Evaluation",
      "Feasibility Study",
      "Development Strategy",
      "Finance Coordination",
      "Construction PM",
    ],
  },
  {
    title: "Investments",
    tagline: "We selectively participate.",
    href: "/investments",
    variant: "light" as const,
    iconSrc: DIVISION_ICONS.investments,
    image: IMAGES.divisionInvestments,
    services: ["Joint Development", "Land Partnerships", "Co-Development", "Built-to-Suit", "Due Diligence"],
  },
] as const;

const CONSULTING_SHADE =
  "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.95) 18%, rgba(0,0,0,0.82) 32%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.22) 68%, rgba(0,0,0,0.06) 82%, transparent 100%)";

function DivisionBackground({
  variant,
  image,
}: {
  variant: "red" | "dark" | "light";
  image: string;
}) {
  if (variant === "red") {
    return (
      <>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center grayscale contrast-[1.1] brightness-[0.85]"
          sizes="33vw"
        />
        <div className="absolute inset-0 bg-nebco-red/78 mix-blend-multiply" />
        <div className="absolute inset-0 bg-nebco-red/55" />
      </>
    );
  }

  if (variant === "dark") {
    return (
      <>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center sepia-[0.35] grayscale-[0.4] contrast-[1.05] brightness-[0.9]"
          sizes="33vw"
        />
        <div className="absolute inset-0" style={{ background: CONSULTING_SHADE }} />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-ivory-light" />
      <div className="absolute inset-y-0 right-0 w-[62%]">
        <Image src={image} alt="" fill className="object-cover object-[center_40%]" sizes="33vw" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #f5f2ed 0%, #f5f2ed 30%, rgba(245,242,237,0.92) 42%, rgba(245,242,237,0.55) 52%, rgba(245,242,237,0.15) 62%, transparent 72%)",
        }}
      />
    </>
  );
}

interface ThreeDivisionsSectionProps {
  compact?: boolean;
}

export function ThreeDivisionsSection({ compact = false }: ThreeDivisionsSectionProps) {
  const tileClass = compact ? "three-divisions-tile three-divisions-tile--compact" : "three-divisions-tile";

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
          const isLight = div.variant === "light";
          const isDark = div.variant === "dark";
          const backPanelClass =
            div.variant === "red"
              ? "division-flip-back-panel--red"
              : div.variant === "dark"
                ? "division-flip-back-panel--dark"
                : "division-flip-back-panel--light";

          return (
            <Link
              key={div.title}
              href={div.href}
              className={`division-flip-card group relative block overflow-hidden border-b md:border-b-0 md:border-r border-[#d8d2c8] last:border-r-0 last:border-b-0 ${
                compact ? "min-h-[200px] md:min-h-0 md:h-full" : "min-h-[260px] lg:min-h-[280px]"
              } ${isLight ? "bg-ivory-light text-arch-black" : "text-white"} ${tileClass}`}
            >
              {isDark && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-nebco-red z-30" aria-hidden="true" />
              )}

              <div className="division-flip-inner">
                <div className="division-flip-face division-flip-front">
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <DivisionBackground variant={div.variant} image={div.image} />
                  </div>

                  <div className="relative z-10 flex flex-col flex-1 w-full min-h-full three-divisions-tile-body">
                    <div className="three-divisions-content">
                      <DivisionIcon src={div.iconSrc} alt={`${div.title} icon`} variant={div.variant} />
                      <h3 className={`three-divisions-title ${isLight ? "text-arch-black" : "text-white"}`}>
                        {div.title}
                      </h3>
                      <p
                        className={`three-divisions-tagline ${
                          isLight ? "text-arch-black/80" : "text-white/90"
                        }`}
                      >
                        {div.tagline}
                      </p>
                    </div>
                    <div className="three-divisions-arrow">
                      <ThinArrow className={isLight ? "text-nebco-red" : "text-white"} />
                    </div>
                  </div>
                </div>

                <div className="division-flip-face division-flip-back">
                  <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <DivisionBackground variant={div.variant} image={div.image} />
                  </div>

                  <div className={`division-flip-back-panel ${backPanelClass} z-10`}>
                    <p className="text-white/80 font-mono text-[10px] uppercase tracking-[0.18em] mb-4">
                      Services
                    </p>
                    <ul className="division-flip-services">
                      {div.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
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
