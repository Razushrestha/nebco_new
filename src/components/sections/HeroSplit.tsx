import Image from "next/image";

interface HeroSplitProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt: string;
  dark?: boolean;
  showDiagonal?: boolean;
}

export function HeroSplit({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  dark = true,
  showDiagonal = true,
}: HeroSplitProps) {
  return (
    <section className="relative min-h-[560px] lg:min-h-[640px] flex flex-col lg:flex-row overflow-hidden">
      <div
        className={`relative z-10 flex flex-col justify-center px-8 lg:px-16 py-16 lg:w-[48%] ${
          dark ? "bg-arch-black text-white" : "bg-ivory text-arch-black"
        }`}
      >
        {eyebrow && (
          <p className="section-eyebrow mb-6">{eyebrow}</p>
        )}
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.1] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-6 text-base lg:text-lg leading-relaxed max-w-lg ${dark ? "text-white/70" : "text-silver-graphite"}`}>
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 mt-8">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors font-heading"
              >
                {primaryCta.label}
                <span>→</span>
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide border transition-colors font-heading ${
                  dark
                    ? "border-white/40 text-white hover:bg-white hover:text-arch-black"
                    : "border-arch-black text-arch-black hover:bg-arch-black hover:text-white"
                }`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>

      <div className="relative flex-1 min-h-[320px] lg:min-h-0">
        {showDiagonal && (
          <div
            className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 z-10 hidden lg:block"
            style={{
              background: "#bc2026",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
        )}
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      </div>
    </section>
  );
}
