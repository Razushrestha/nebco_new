const RED = "#bc2026";
const GOLD = "#c5a059";

/**
 * Full-hero coordinates (0-100). Left panel ~0-38, visual ~38-100.
 * Thin gold lead-in on the dark blueprint; red curve continues into the collage.
 */
const GOLD_LEAD = "M 28 90 L 32 84 L 36 78";
const RED_PATH = "M 36 78 L 44 70 L 52 60 L 60 50 L 68 42 L 74 36";

const NODES = [
  {
    x: 36,
    y: 78,
    lines: ["LAND", "OPPORTUNITY"] as const,
    labelSide: "below" as const,
    variant: "start" as const,
  },
  {
    x: 52,
    y: 60,
    lines: ["STRATEGIC", "DECISIONS"] as const,
    labelSide: "below" as const,
    variant: "mid" as const,
  },
  {
    x: 74,
    y: 36,
    lines: ["STRONGER", "OUTCOMES"] as const,
    labelSide: "above" as const,
    variant: "peak" as const,
  },
] as const;

/** Trend overlay: gold glowing start on dark panel → bold red curve into the visual. */
export function ConsultingHeroTrendLine() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="consulting-trend-soft" x="-8%" y="-8%" width="116%" height="116%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Thin gold lead-in into LAND OPPORTUNITY */}
        <path
          d={GOLD_LEAD}
          fill="none"
          stroke={GOLD}
          strokeWidth="1.15"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Red continuation */}
        <path
          d={RED_PATH}
          fill="none"
          stroke={RED}
          strokeWidth="7"
          strokeOpacity="0.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={RED_PATH}
          fill="none"
          stroke={RED}
          strokeWidth="4.5"
          strokeOpacity="0.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={RED_PATH}
          fill="none"
          stroke={RED}
          strokeWidth="2.75"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#consulting-trend-soft)"
        />
      </svg>

      {NODES.map((node) => (
        <div
          key={node.lines.join(" ")}
          className="absolute"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <span
            className={
              node.variant === "start"
                ? "consulting-trend-node consulting-trend-node--start"
                : node.variant === "peak"
                  ? "consulting-trend-node consulting-trend-node--peak"
                  : "consulting-trend-node"
            }
          />
          <span
            className="consulting-trend-label absolute left-1/2 text-center font-heading font-semibold uppercase text-white"
            style={{
              transform:
                node.labelSide === "above"
                  ? "translate(-50%, calc(-100% - 16px))"
                  : "translate(-50%, 14px)",
            }}
          >
            {node.lines.map((line) => (
              <span key={line} className="block leading-[1.15]">
                {line}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
