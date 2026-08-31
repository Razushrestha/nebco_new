import Link from "next/link";

const RED = "#bc2026";
const LINE = "#ddd7ce";

const GUIDES = [
  {
    id: "landowners",
    title: "For Landowners",
    description:
      "Make informed choices about land use, regulations and the best way to unlock value from your property.",
    href: "/contact?type=land-evaluation",
  },
  {
    id: "nrns",
    title: "For NRNs",
    description: "Plan, build and manage your property in Nepal from abroad with confidence and clarity.",
    href: "/nrn",
  },
  {
    id: "developers",
    title: "For Developers & Businesses",
    description:
      "Insights for planning, financing and delivering successful projects and commercial spaces.",
    href: "/contact?type=project",
  },
] as const;

function IconLandowners() {
  return (
    <svg width="72" height="64" viewBox="0 0 72 64" fill="none" aria-hidden="true" className="shrink-0">
      {/* House on stilts / land with waves */}
      <path d="M8 34l14-12 14 12" stroke={RED} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 34v14h20V34" stroke={RED} strokeWidth="1.4" />
      <path d="M18 40h4v8M26 40h4v8" stroke={RED} strokeWidth="1.15" />
      <path d="M4 52c4-3 8-3 12 0s8 3 12 0 8-3 12 0" stroke={RED} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M6 58c3.5-2.5 7-2.5 10.5 0S24 60.5 27.5 58" stroke={RED} strokeWidth="1.15" strokeLinecap="round" opacity="0.85" />
      {/* Trees / parasols */}
      <path d="M52 46c0-6 4.5-10 8-10s8 4 8 10" stroke={RED} strokeWidth="1.25" />
      <path d="M60 36v18" stroke={RED} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M44 50c0-4.5 3-7.5 5.5-7.5S55 45.5 55 50" stroke={RED} strokeWidth="1.15" />
      <path d="M49.5 42.5V56" stroke={RED} strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconNrns() {
  return (
    <svg width="72" height="64" viewBox="0 0 72 64" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="34" cy="32" r="22" stroke={RED} strokeWidth="1.4" />
      <ellipse cx="34" cy="32" rx="10" ry="22" stroke={RED} strokeWidth="1.2" />
      <path d="M12.5 32h43M16 22h36M16 42h36" stroke={RED} strokeWidth="1.15" />
      {/* Airplane */}
      <path
        d="M48 14l10 4-6 3 1 5-3-2-4 3 1-5-6-2 7-6z"
        stroke={RED}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M52 18l8-6" stroke={RED} strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconDevelopers() {
  return (
    <svg width="72" height="64" viewBox="0 0 72 64" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="6" y="28" width="14" height="30" stroke={RED} strokeWidth="1.35" />
      <rect x="22" y="10" width="18" height="48" stroke={RED} strokeWidth="1.35" />
      <rect x="42" y="18" width="14" height="40" stroke={RED} strokeWidth="1.35" />
      <rect x="58" y="30" width="10" height="28" stroke={RED} strokeWidth="1.35" />
      <path d="M6 58h62" stroke={RED} strokeWidth="1.35" strokeLinecap="round" />
      <path d="M9 34h8M9 40h8M9 46h8" stroke={RED} strokeWidth="1.05" />
      <path d="M26 16h10M26 22h10M26 28h10M26 34h10M26 40h10M26 46h10" stroke={RED} strokeWidth="1.05" />
      <path d="M45 24h8M45 30h8M45 36h8M45 42h8" stroke={RED} strokeWidth="1.05" />
      <path d="M60.5 36h5M60.5 42h5M60.5 48h5" stroke={RED} strokeWidth="1.05" />
    </svg>
  );
}

function GuideIcon({ id }: { id: string }) {
  switch (id) {
    case "landowners":
      return <IconLandowners />;
    case "nrns":
      return <IconNrns />;
    case "developers":
      return <IconDevelopers />;
    default:
      return null;
  }
}

/**
 * Insights - 05 / Guides for Different Readers
 * Three equal cards: large red icon + title/body + Explore Guides.
 */
export function InsightsGuidesSection() {
  return (
    <section className="bg-[#fdfbf7]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          05 / Guides for Different Readers
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-9 sm:gap-6 md:grid-cols-3 lg:mt-10 lg:gap-7">
          {GUIDES.map((guide) => (
            <Link
              key={guide.id}
              href={guide.href}
              className="group grid min-h-[200px] grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-0 border bg-transparent px-5 py-6 transition-colors hover:bg-white/55 sm:min-h-[220px] sm:gap-x-5 sm:px-6 sm:py-7 lg:min-h-[240px] lg:px-7 lg:py-8"
              style={{ borderColor: LINE }}
            >
              <div className="flex flex-col">
                <GuideIcon id={guide.id} />
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-nebco-red transition-transform group-hover:translate-x-0.5 sm:pt-10 sm:text-[11.5px]">
                  Explore Guides
                  <span aria-hidden="true">→</span>
                </span>
              </div>

              <div className="min-w-0 pt-1">
                <h3 className="type-h3 tracking-[-0.01em] text-arch-black">
                  {guide.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.55] text-arch-black/60 sm:mt-3 sm:text-[13.5px]">
                  {guide.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
