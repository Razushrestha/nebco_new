import Link from "next/link";
import Image from "next/image";

function CTABlueprint() {
  return (
    <svg
      className="absolute right-0 top-1/2 -translate-y-1/2 w-[min(58vw,720px)] h-[115%] opacity-[0.14] pointer-events-none"
      viewBox="0 0 720 420"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="1.1">
        <rect x="80" y="60" width="180" height="300" />
        <line x1="80" y1="110" x2="260" y2="110" />
        <line x1="80" y1="160" x2="260" y2="160" />
        <line x1="80" y1="210" x2="260" y2="210" />
        <line x1="80" y1="260" x2="260" y2="260" />
        <line x1="80" y1="310" x2="260" y2="310" />
        <line x1="140" y1="60" x2="140" y2="360" />
        <line x1="200" y1="60" x2="200" y2="360" />
        <rect x="290" y="100" width="120" height="260" />
        <line x1="290" y1="150" x2="410" y2="150" />
        <line x1="290" y1="200" x2="410" y2="200" />
        <line x1="290" y1="250" x2="410" y2="250" />
        <line x1="290" y1="300" x2="410" y2="300" />
        <line x1="350" y1="100" x2="350" y2="360" />
        <rect x="440" y="80" width="150" height="280" />
        <line x1="440" y1="130" x2="590" y2="130" />
        <line x1="440" y1="180" x2="590" y2="180" />
        <line x1="440" y1="230" x2="590" y2="230" />
        <line x1="440" y1="280" x2="590" y2="280" />
        <line x1="515" y1="80" x2="515" y2="360" />
        <rect x="620" y="120" width="90" height="240" />
        <line x1="620" y1="170" x2="710" y2="170" />
        <line x1="620" y1="220" x2="710" y2="220" />
        <line x1="620" y1="270" x2="710" y2="270" />
        <line x1="665" y1="120" x2="665" y2="360" />
        <line x1="60" y1="360" x2="680" y2="360" strokeWidth="0.9" opacity="0.7" />
        <path d="M80 360 L380 240 L590 360" strokeWidth="0.9" opacity="0.55" />
      </g>
    </svg>
  );
}

interface CTABandProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "red" | "dark";
  blueprint?: boolean;
}

export function CTABand({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  variant = "red",
  blueprint = true,
}: CTABandProps) {
  const isRed = variant === "red";

  return (
    <section className={`relative overflow-hidden ${isRed ? "bg-nebco-red" : "bg-arch-black"}`}>
      {isRed && blueprint && <CTABlueprint />}

      <div className="container-nebco relative z-10 py-12 lg:py-14 xl:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="font-heading font-bold text-[1.65rem] sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem] text-white leading-[1.15] tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 lg:mt-4 text-[14px] lg:text-[15px] text-white/85 leading-[1.65] max-w-[34rem]">
                {subtitle}
              </p>
            )}
          </div>

          <Link
            href={buttonHref}
            className={`inline-flex items-center justify-center shrink-0 px-7 lg:px-8 py-3.5 lg:py-4 text-[11px] lg:text-[12px] font-heading font-bold uppercase tracking-[0.08em] transition-all duration-200 hover:brightness-[0.97] ${
              isRed
                ? "bg-white text-nebco-red hover:bg-ivory-light"
                : "bg-nebco-red text-white hover:bg-nebco-red-hover"
            }`}
          >
            {buttonLabel}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  location: string;
  status?: string;
  image: string;
  href?: string;
  large?: boolean;
  variant?: "image" | "red" | "dark";
}

export function ProjectCard({
  title,
  location,
  status,
  image,
  href = "/projects",
  large = false,
  variant = "image",
}: ProjectCardProps) {
  if (variant === "red" || variant === "dark") {
    return (
      <Link
        href={href}
        className={`group flex flex-col justify-end p-6 min-h-[200px] ${
          variant === "red" ? "bg-nebco-red" : "bg-arch-black"
        } ${large ? "lg:min-h-[280px]" : ""}`}
      >
        <p className="text-white/60 text-xs uppercase tracking-widest font-mono">{status}</p>
        <h3 className="font-heading font-bold text-white text-lg mt-2 group-hover:underline">
          {title}
        </h3>
        <p className="text-white/60 text-sm mt-1">{location}</p>
        <span className="text-white text-xs mt-4 uppercase tracking-wide">View Project →</span>
      </Link>
    );
  }

  return (
    <Link href={href} className={`group relative overflow-hidden block ${large ? "lg:row-span-2" : ""}`}>
      <div className={`relative ${large ? "aspect-[4/5] lg:aspect-auto lg:h-full min-h-[280px]" : "aspect-[4/3]"}`}>
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-arch-black/80 via-arch-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {status && (
            <p className="text-white/60 text-xs uppercase tracking-widest font-mono mb-1">{status}</p>
          )}
          <h3 className="font-heading font-bold text-white text-lg">{title}</h3>
          <p className="text-white/60 text-sm">{location}</p>
        </div>
      </div>
    </Link>
  );
}
