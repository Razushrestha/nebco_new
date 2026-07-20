const RED = "#bc2026";
const GOLD = "#c5a059";

const NODES = [
  { x: 14, y: 84, label: "LAND OPPORTUNITY", highlight: false, labelY: -3.4 },
  { x: 48, y: 52, label: "STRATEGIC DECISIONS", highlight: false, labelY: -3.4 },
  { x: 86, y: 20, label: "STRONGER OUTCOMES", highlight: true, labelY: 4 },
] as const;

/** Red progress line bridging the consulting hero left panel into the visual collage */
export function ConsultingHeroTrendLine() {
  return (
    <svg
      className="consulting-trend-line absolute inset-0 z-20 w-full h-full pointer-events-none hidden md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points="8,88 28,72 48,52 68,34 86,20"
        fill="none"
        stroke={RED}
        strokeWidth="0.22"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {NODES.map((node) => (
        <g key={node.label}>
          {node.highlight ? (
            <>
              <circle
                cx={node.x}
                cy={node.y}
                r="1.8"
                fill="none"
                stroke={GOLD}
                strokeWidth="0.2"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="0.95"
                fill={GOLD}
                stroke={RED}
                strokeWidth="0.12"
                vectorEffect="non-scaling-stroke"
              />
            </>
          ) : (
            <circle
              cx={node.x}
              cy={node.y}
              r="0.75"
              fill={GOLD}
              stroke={RED}
              strokeWidth="0.1"
              vectorEffect="non-scaling-stroke"
            />
          )}
        </g>
      ))}

      {NODES.map((node) => (
        <text
          key={`${node.label}-label`}
          x={node.x}
          y={node.y + node.labelY}
          className="consulting-trend-label"
          fill="white"
          fontFamily="monospace"
          letterSpacing="0.05"
          textAnchor="middle"
          opacity="0.88"
        >
          {node.label}
        </text>
      ))}
    </svg>
  );
}
