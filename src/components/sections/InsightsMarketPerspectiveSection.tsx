import Link from "next/link";

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

/** Combo chart: red Level bars + denser gold Trend line — matches design mock */
function MarketChart() {
  const plotTop = 36;
  const plotBottom = 158;
  const plotLeft = 36;
  const plotRight = 348;
  const plotH = plotBottom - plotTop;

  // Five quarterly level bars — steady rise (height as % of plot)
  const barHeights = [0.42, 0.52, 0.62, 0.72, 0.86];
  const barCenters = [68, 128, 188, 248, 308];
  const barW = 28;

  // ~10 trend points across the same span (mid-quarter cadence), volatile but rising
  // y is 0–1 from bottom of plot
  const trendNorm: [number, number][] = [
    [48, 0.38],
    [78, 0.48],
    [108, 0.44],
    [138, 0.58],
    [168, 0.55],
    [198, 0.68],
    [228, 0.62],
    [258, 0.74],
    [288, 0.7],
    [318, 0.88],
  ];

  const toY = (n: number) => plotBottom - n * plotH;
  const trendPts = trendNorm.map(([x, n]) => [x, toY(n)] as const);
  const trendPath = trendPts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");

  const gridYs = [0.2, 0.4, 0.6, 0.8].map((n) => toY(n));

  return (
    <svg
      viewBox="0 0 380 236"
      className="h-auto w-full"
      role="img"
      aria-label="Kathmandu Valley market level bars and trend line from Q1 2024 to Q1 2025"
    >
      {/* Axis titles */}
      <text
        x={plotLeft}
        y="22"
        fill="rgba(255,255,255,0.5)"
        fontSize="11"
        fontFamily="var(--font-heading), system-ui, sans-serif"
      >
        Level
      </text>
      <text
        x={plotRight}
        y="22"
        textAnchor="end"
        fill="rgba(255,255,255,0.5)"
        fontSize="11"
        fontFamily="var(--font-heading), system-ui, sans-serif"
      >
        Trend
      </text>

      {/* Horizontal grid only */}
      <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
        {gridYs.map((y) => (
          <line key={y} x1={plotLeft} y1={y} x2={plotRight} y2={y} />
        ))}
      </g>

      {/* Level bars */}
      {barHeights.map((h, i) => {
        const height = h * plotH;
        const x = barCenters[i] - barW / 2;
        return (
          <rect
            key={i}
            x={x}
            y={plotBottom - height}
            width={barW}
            height={height}
            fill={RED}
          />
        );
      })}

      {/* Trend line + markers */}
      <path
        d={trendPath}
        fill="none"
        stroke={GOLD}
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {trendPts.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3.4"
          fill={PANEL}
          stroke={GOLD}
          strokeWidth="1.55"
        />
      ))}

      {/* X-axis rules */}
      <line
        x1={plotLeft}
        y1={plotBottom + 0.5}
        x2={plotRight}
        y2={plotBottom + 0.5}
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1"
      />
      <line
        x1={plotLeft}
        y1={188}
        x2={plotRight}
        y2={188}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1"
      />

      {/* Quarter labels */}
      {["Q1", "Q2", "Q3", "Q4", "Q1"].map((q, i) => (
        <text
          key={`${q}-${i}`}
          x={barCenters[i]}
          y="178"
          textAnchor="middle"
          fill="rgba(255,255,255,0.72)"
          fontSize="12"
          fontFamily="var(--font-heading), system-ui, sans-serif"
        >
          {q}
        </text>
      ))}

      {/* Year band */}
      <text
        x={(barCenters[0] + barCenters[3]) / 2}
        y="210"
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize="11"
        fontFamily="var(--font-heading), system-ui, sans-serif"
        letterSpacing="0.06em"
      >
        2024
      </text>
      <text
        x={barCenters[4]}
        y="210"
        textAnchor="middle"
        fill="rgba(255,255,255,0.4)"
        fontSize="11"
        fontFamily="var(--font-heading), system-ui, sans-serif"
        letterSpacing="0.06em"
      >
        2025
      </text>
    </svg>
  );
}

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
 * Insights — 04 / NEBCO Market Perspective
 * Dark three-column band: copy + combo chart + insight list.
 */
export function InsightsMarketPerspectiveSection() {
  return (
    <section className="text-white" style={{ backgroundColor: PANEL }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 lg:px-10 lg:py-16 xl:gap-14 xl:px-12">
        {/* Left — intro */}
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
            04 / Nebco Market Perspective
          </p>

          <h2 className="mt-5 max-w-[16ch] font-heading text-[1.55rem] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:mt-6 sm:text-[1.75rem] lg:text-[1.9rem]">
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

        {/* Center — chart */}
        <div className="min-w-0 px-1 sm:px-2 lg:px-0">
          <MarketChart />
        </div>

        {/* Right — insight list */}
        <ul className="space-y-7 sm:space-y-8">
          {INSIGHTS.map((item) => (
            <li key={item.id} className="flex items-start gap-3.5 sm:gap-4">
              <InsightIcon id={item.id} />
              <div className="min-w-0 pt-0.5">
                <p
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[10.5px]"
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
