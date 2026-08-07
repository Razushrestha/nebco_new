import Link from "next/link";

/**
 * Placeholder left illustration — swap / refine later when the final artwork is ready.
 * Kept faint so text + button layout can be locked first.
 */
function ProjectsCtaLandscapePlaceholder() {
  return (
    <svg
      className="pointer-events-none absolute inset-y-0 left-0 h-full w-[min(48%,520px)] opacity-[0.45]"
      viewBox="0 0 520 200"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="projectsCtaFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7a7a7a" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#7a7a7a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7a7a7a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#projectsCtaFade)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 110 36 72 70 96 112 48 152 88 198 58 250 100 300 66 360 108" strokeWidth="1" />
        <path d="M24 150V105l18-12 18 12v45" strokeWidth="1" />
        <path d="M30 118h48M36 106h36M44 96h20M52 88h4" strokeWidth="0.95" />
        <path d="M54 88V78M50 78h8l-4-7-4 7Z" strokeWidth="0.95" />
        <path d="M100 150V112c0-12 9-20 20-20s20 8 20 20v38" strokeWidth="1" />
        <path d="M108 112h24M114 100h12M120 90V78" strokeWidth="0.95" />
        <circle cx="120" cy="74" r="4" strokeWidth="0.95" />
        <path d="M160 150V98l24-16 24 16v52" strokeWidth="1.05" />
        <path d="M168 118h64M176 106h48M186 96h28M196 88h8" strokeWidth="0.95" />
        <path d="M200 88V78M196 78h8l-4-8-4 8Z" strokeWidth="0.95" />
        <path d="M0 150c50-8 110-4 160 4 60 10 120 2 180-10" strokeWidth="0.95" />
      </g>
    </svg>
  );
}

/**
 * Projects closing CTA — cream band, copy + discuss button.
 * Left landscape artwork is a placeholder to refine later.
 */
export function ProjectsClosingCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#e4ddd3] border-b-[3px] border-b-arch-black bg-[#f5f2ed]">
      <ProjectsCtaLandscapePlaceholder />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,242,237,0.2) 0%, rgba(245,242,237,0.55) 26%, #f5f2ed 48%)",
        }}
      />

      <div className="relative z-[1] mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10 lg:py-9 xl:gap-20 xl:px-12">
        {/* Text — sits after the left illustration zone */}
        <div className="min-w-0 max-w-[34rem] lg:ml-[min(22%,12rem)] xl:ml-[min(20%,11rem)]">
          <h2 className="type-h2 tracking-[-0.02em] text-arch-black">
            Have a project at a different stage?
          </h2>
          <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[#3a3a3a] sm:mt-3 sm:text-[14.5px] lg:text-[15px]">
            Tell us what is already in place and where support is required.
          </p>
        </div>

        <Link
          href="/contact?type=project"
          className="inline-flex shrink-0 items-center justify-center gap-2.5 self-start bg-nebco-red px-7 py-[0.95rem] font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover sm:px-8 sm:text-[11px] lg:self-center"
        >
          Discuss Your Project
          <span aria-hidden="true" className="translate-y-px text-[13px] leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
