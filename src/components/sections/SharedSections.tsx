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
  /** Color of the flipped info face */
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
  const backTone = variant === "red" ? "bg-nebco-red" : "bg-[#161616]";

  return (
    <Link
      href={href}
      className={`group block ${large ? "lg:row-span-2" : ""}`}
      style={{ perspective: "1200px" }}
    >
      <div
        className={`relative w-full transition-transform duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          large ? "aspect-[4/5] min-h-[280px] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
        }`}
      >
        {/* Front — photo */}
        <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            {status && (
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                {status}
              </p>
            )}
            <h3 className="font-heading text-[1.05rem] font-bold leading-[1.2] text-white sm:text-[1.15rem]">
              {title}
            </h3>
            <p className="mt-1 text-[13px] text-white/75 sm:text-[14px]">{location}</p>
          </div>
        </div>

        {/* Back — solid info face */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-5 sm:p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] ${backTone}`}
        >
          {status && (
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
              {status}
            </p>
          )}
          <h3 className="font-heading text-[1.05rem] font-bold leading-[1.2] text-white sm:text-[1.15rem]">
            {title}
          </h3>
          <p className="mt-1 text-[13px] text-white/80 sm:text-[14px]">{location}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-heading text-[10.5px] font-bold uppercase tracking-[0.14em] text-white sm:text-[11px]">
            View Project
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
