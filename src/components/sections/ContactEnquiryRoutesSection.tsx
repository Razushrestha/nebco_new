import Link from "next/link";

const GOLD = "#c5a059";
const RED = "#bc2026";
const INK = "#1a1a1a";
const LINE = "#ddd7ce";

type RouteTone = "red" | "white" | "cream" | "black";

type EnquiryRoute = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  tone: RouteTone;
};

const ROUTES: readonly EnquiryRoute[] = [
  {
    id: "construction",
    title: "Construction Proposal",
    subtitle: "Share your idea or drawings. We'll define scope, approach and next steps.",
    href: "/contact?type=construction",
    tone: "red",
  },
  {
    id: "land",
    title: "Land & Property Evaluation",
    subtitle: "Get expert input on land suitability, feasibility and development potential.",
    href: "/contact?type=land-evaluation",
    tone: "white",
  },
  {
    id: "nrn",
    title: "NRN Consultation",
    subtitle: "Guidance for Non-Resident Nepali investors and property owners.",
    href: "/contact?type=nrn",
    tone: "cream",
  },
  {
    id: "partnership",
    title: "Partnership Opportunity",
    subtitle: "Explore how we can build value together on the right opportunities.",
    href: "/contact?type=partnership",
    tone: "black",
  },
];

const TONE_STYLES: Record<
  RouteTone,
  { bg: string; title: string; subtitle: string; arrow: string; border: string }
> = {
  red: {
    bg: "bg-nebco-red",
    title: "text-white",
    subtitle: "text-white/88",
    arrow: "text-white",
    border: "border-white/15",
  },
  white: {
    bg: "bg-white",
    title: "text-arch-black",
    subtitle: "text-arch-black/70",
    arrow: "text-arch-black",
    border: LINE,
  },
  cream: {
    bg: "bg-[#f5f2ed]",
    title: "text-arch-black",
    subtitle: "text-arch-black/70",
    arrow: "text-arch-black",
    border: LINE,
  },
  black: {
    bg: "bg-[#111111]",
    title: "text-white",
    subtitle: "text-white/80",
    arrow: "",
    border: "border-white/10",
  },
};

function IconBuildings({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="4" y="18" width="11" height="24" stroke={color} strokeWidth="1.35" />
      <rect x="17" y="8" width="14" height="34" stroke={color} strokeWidth="1.35" />
      <rect x="33" y="14" width="11" height="28" stroke={color} strokeWidth="1.35" />
      <path d="M4 42h40" stroke={color} strokeWidth="1.35" strokeLinecap="round" />
      <path d="M7 23h5M7 28h5M7 33h5" stroke={color} strokeWidth="1.05" />
      <path d="M21 14h6M21 19h6M21 24h6M21 29h6M21 34h6" stroke={color} strokeWidth="1.05" />
      <path d="M36 20h5M36 25h5M36 30h5" stroke={color} strokeWidth="1.05" />
    </svg>
  );
}

function IconMapPin({ pin = RED, map = GOLD }: { pin?: string; map?: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M8 34l6-4 8 5 10-7 8 4v8H8v-6z"
        stroke={map}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M14 30l8 5 10-7" stroke={map} strokeWidth="1.15" strokeLinejoin="round" />
      <path
        d="M24 6c-5.2 0-9.4 4-9.4 9 0 6.8 9.4 16.5 9.4 16.5S33.4 21.8 33.4 15c0-5-4.2-9-9.4-9z"
        stroke={pin}
        strokeWidth="1.4"
      />
      <circle cx="24" cy="15" r="3.2" stroke={pin} strokeWidth="1.3" />
    </svg>
  );
}

function IconGlobePeople({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="24" cy="18" r="13" stroke={color} strokeWidth="1.3" />
      <ellipse cx="24" cy="18" rx="6" ry="13" stroke={color} strokeWidth="1.15" />
      <path d="M11.5 18h25M13 12h22M13 24h22" stroke={color} strokeWidth="1.05" />
      <circle cx="14" cy="36" r="3.2" stroke={color} strokeWidth="1.2" />
      <circle cx="24" cy="35" r="3.6" stroke={color} strokeWidth="1.25" />
      <circle cx="34" cy="36" r="3.2" stroke={color} strokeWidth="1.2" />
      <path
        d="M8 44c.8-4.2 3.4-6.2 6-6.2s5.2 2 6 6.2M18 44c1-4.8 3.8-7.2 6-7.2s5 2.4 6 7.2M28 44c.8-4.2 3.4-6.2 6-6.2s5.2 2 6 6.2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHandshake({ color }: { color: string }) {
  return (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M5 20h9l4 3 5-4 4 3"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 24h-8l-4-3-5 4-3-2"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 23c2 3 5 6 8 7 2 .7 4 .4 6-.6 2.2-1.1 4.2-1 6.2.2 2.3 1.4 4.8 2.2 7.6 1.4"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 30l2.5 6.5M23 31.5l1.8 5.5M27.5 31l1.8 5.5M32 30.5l2 5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M7 16v-3h7M41 28v4h-6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function RouteIcon({ id }: { id: string }) {
  switch (id) {
    case "construction":
      return <IconBuildings color="#ffffff" />;
    case "land":
      return <IconMapPin pin={RED} map={GOLD} />;
    case "nrn":
      return <IconGlobePeople color={INK} />;
    case "partnership":
      return <IconHandshake color={GOLD} />;
    default:
      return null;
  }
}

function ThinArrow({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 6h20M14 1l6 5-6 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

/**
 * Contact — 01 / Find the Right Starting Point
 * Flush 2×2 enquiry route cards matching the design mock.
 */
export function ContactEnquiryRoutesSection() {
  return (
    <section id="enquiry-routes" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <div className="mb-7 flex items-center gap-5 sm:mb-8">
          <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
            01 / Find the Right Starting Point
          </p>
          <div className="h-px flex-1 bg-nebco-red/40" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 border sm:grid-cols-2" style={{ borderColor: LINE }}>
          {ROUTES.map((route, index) => {
            const tone = TONE_STYLES[route.tone];
            const isRight = index % 2 === 1;
            const isBottom = index >= 2;

            return (
              <Link
                key={route.id}
                href={route.href}
                className={`group relative flex min-h-[168px] items-center gap-5 px-6 py-7 transition-opacity hover:opacity-[0.96] sm:min-h-[180px] sm:gap-6 sm:px-8 sm:py-8 lg:min-h-[196px] lg:gap-7 lg:px-9 lg:py-9 ${tone.bg} ${
                  isRight ? "sm:border-l" : ""
                } ${isBottom ? "border-t" : ""} ${index < ROUTES.length - 1 ? "border-b sm:border-b-0" : ""}`}
                style={{ borderColor: LINE }}
              >
                <RouteIcon id={route.id} />

                <div className="min-w-0 flex-1 pr-6">
                  <h3
                    className={`font-heading text-[1.05rem] font-bold leading-[1.2] tracking-[-0.01em] sm:text-[1.15rem] lg:text-[1.25rem] ${tone.title}`}
                  >
                    {route.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[28rem] text-[13px] leading-[1.5] sm:mt-2.5 sm:text-[13.5px] lg:text-[14px] ${tone.subtitle}`}
                  >
                    {route.subtitle}
                  </p>
                </div>

                <span
                  className={`absolute bottom-5 right-5 sm:bottom-6 sm:right-6 ${
                    route.tone === "black" ? "" : tone.arrow
                  } transition-transform group-hover:translate-x-0.5`}
                  style={route.tone === "black" ? { color: GOLD } : undefined}
                  aria-hidden="true"
                >
                  <ThinArrow />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
