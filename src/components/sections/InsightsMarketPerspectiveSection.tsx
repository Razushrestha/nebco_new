import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const RED = "#bc2026";
const PANEL = "#0d0d0d";

const INSIGHTS = [
  {
    id: "signal",
    title: "Market Signal",
    body: "Steady end-user demand continues in well-located projects. Land values remain firm in core areas.",
  },
  {
    id: "matters",
    title: "Why It Matters",
    body: "Timely planning and the right product mix create a clear advantage in today's market.",
  },
  {
    id: "action",
    title: "Action to Consider",
    body: "Validate feasibility early and align your project with real buyer and tenant needs.",
  },
] as const;

function InsightIcon({ id }: { id: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none" as const,
    "aria-hidden": true as const,
  };

  let mark = null;
  if (id === "signal") {
    mark = (
      <svg {...common}>
        <path d="M9 3.5v11M5 6.5l4-3 4 3M5 11.5l4 3 4-3" stroke={RED} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  } else if (id === "matters") {
    mark = (
      <svg {...common}>
        <path
          d="M9 2.8c-2.8 0-5 2.1-5 4.7 0 3.6 5 7.7 5 7.7s5-4.1 5-7.7c0-2.6-2.2-4.7-5-4.7z"
          stroke={RED}
          strokeWidth="1.2"
        />
        <circle cx="9" cy="7.4" r="1.5" stroke={RED} strokeWidth="1.1" />
      </svg>
    );
  } else {
    mark = (
      <svg {...common}>
        <rect x="3.5" y="3" width="11" height="12" rx="1" stroke={RED} strokeWidth="1.2" />
        <path d="M6 7h6M6 10h6M6 13h3.5" stroke={RED} strokeWidth="1.05" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:h-11 sm:w-11"
      style={{ borderColor: `${RED}cc` }}
      aria-hidden="true"
    >
      {mark}
    </span>
  );
}

/**
 * Insights - 04 / NEBCO Market Perspective
 * Dark three-column band: copy + chart image + insight list.
 */
export function InsightsMarketPerspectiveSection() {
  return (
    <section className="text-white" style={{ backgroundColor: PANEL }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-16 xl:gap-14 xl:px-12">
        {/* Left - intro */}
        <div>
          <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
            04 / Nebco Market Perspective
          </p>

          <h2 className="type-h2 mt-5 max-w-[16ch] tracking-[-0.02em] text-white sm:mt-6">
            Market Perspective: Kathmandu Valley
          </h2>

          <p className="mt-4 max-w-[24rem] text-[13.5px] leading-[1.65] text-white/60 sm:mt-5 sm:text-[14px]">
            Short takeaways on demand, supply and pricing trends across residential, commercial and land
            sectors in the Valley.
          </p>

          <Link
            href="/insights"
            className="mt-8 inline-flex items-center gap-2.5 border px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/5 sm:mt-9 sm:px-6 sm:text-[11px]"
            style={{ borderColor: `${GOLD}99` }}
          >
            Read Full Market Perspective
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Center - chart */}
        <div className="relative min-w-0 overflow-hidden">
          <Image
            src={IMAGES.insightsMarketChart}
            alt="Kathmandu Valley market level and trend from Q1 2024 to Q1 2025"
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority={false}
          />
        </div>

        {/* Right - insight list */}
        <ul className="space-y-7 sm:space-y-8">
          {INSIGHTS.map((item) => (
            <li key={item.id} className="flex items-start gap-3.5 sm:gap-4">
              <InsightIcon id={item.id} />
              <div className="min-w-0 pt-0.5">
                <p
                  className="type-label font-semibold uppercase tracking-[0.16em]"
                  style={{ color: GOLD }}
                >
                  {item.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-white/65 sm:text-[13.5px]">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
