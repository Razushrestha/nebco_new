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

/** Wireframe PNGs are white-on-black - screen blend drops the black onto dark red. */
function CTABlueprintImages({ left, right }: { left?: string; right?: string }) {
  return (
    <div className="cta-band__blueprints pointer-events-none absolute inset-0" aria-hidden="true">
      {left && (
        <div className="cta-band__blueprint cta-band__blueprint--left">
          <Image
            src={left}
            alt=""
            fill
            unoptimized
            className="object-contain object-left-bottom"
            sizes="(max-width: 1024px) 42vw, 420px"
          />
        </div>
      )}
      {right && (
        <div className="cta-band__blueprint cta-band__blueprint--right">
          <Image
            src={right}
            alt=""
            fill
            unoptimized
            className="object-contain object-right-bottom"
            sizes="(max-width: 1024px) 48vw, 520px"
          />
        </div>
      )}
    </div>
  );
}

interface CTABandProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "red" | "dark";
  blueprint?: boolean;
  blueprintLeft?: string;
  blueprintRight?: string;
}

export function CTABand({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  variant = "red",
  blueprint = true,
  blueprintLeft,
  blueprintRight,
}: CTABandProps) {
  const isRed = variant === "red";
  const hasCustomBlueprints = Boolean(blueprintLeft || blueprintRight);

  return (
    <section
      className={`cta-band relative overflow-hidden ${
        isRed ? "cta-band--red bg-[#9a1a1f]" : "bg-arch-black"
      }`}
    >
      {isRed && hasCustomBlueprints && (
        <CTABlueprintImages left={blueprintLeft} right={blueprintRight} />
      )}
      {isRed && blueprint && !hasCustomBlueprints && <CTABlueprint />}

      <div className="cta-band__inner relative z-10">
        <h2 className="cta-band__heading">{title}</h2>

        {subtitle ? <p className="cta-band__body">{subtitle}</p> : <span className="cta-band__body-spacer" aria-hidden="true" />}

        <div className="cta-band__action">
          <Link
            href={buttonHref}
            className={`cta-band__btn ${isRed ? "cta-band__btn--on-red" : "cta-band__btn--on-dark"}`}
          >
            {buttonLabel}
            <span aria-hidden="true">→</span>
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
        {/* Front - photo */}
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
              <p className="mb-1.5 type-label font-semibold uppercase tracking-[0.16em] text-white/70">
                {status}
              </p>
            )}
            <h3 className="type-h3 text-white">
              {title}
            </h3>
            <p className="mt-1 text-[13px] text-white/75 sm:text-[14px]">{location}</p>
          </div>
        </div>

        {/* Back - solid info face */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-5 sm:p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] ${backTone}`}
        >
          {status && (
            <p className="mb-1.5 type-label font-semibold uppercase tracking-[0.16em] text-white/70">
              {status}
            </p>
          )}
          <h3 className="type-h3 text-white">
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
