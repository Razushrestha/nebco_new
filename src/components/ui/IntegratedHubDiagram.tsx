import { LogoImage } from "@/components/ui/Logo";

const GOLD = "#c5a059";

const SPOKES = [
  { label: "Legal", angle: 0 },
  { label: "Banking", angle: 51 },
  { label: "Real Estate", angle: 103 },
  { label: "Marketing", angle: 154 },
  { label: "Construction", angle: 206 },
  { label: "Engineering", angle: 257 },
  { label: "Finance", angle: 309 },
] as const;

function spokePoint(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
}

function HubIcon({ type, x, y, scale = 1 }: { type: string; x: number; y: number; scale?: number }) {
  const o = (dx: number, dy: number) => `translate(${x - 10 * scale + dx}, ${y - 10 * scale + dy}) scale(${scale})`;
  switch (type) {
    case "Construction":
      return (
        <g transform={o(0, 0)}>
          <path d="M4 16V6M8 10h8M14 6h4v4h-4" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <line x1="4" y1="6" x2="16" y2="8" stroke={GOLD} strokeWidth="1" />
        </g>
      );
    case "Engineering":
      return (
        <g transform={o(0, 0)}>
          <circle cx="10" cy="10" r="7" stroke={GOLD} strokeWidth="1.2" fill="none" />
          <circle cx="10" cy="10" r="2.5" stroke={GOLD} strokeWidth="1" fill="none" />
          <line x1="10" y1="3" x2="10" y2="6" stroke={GOLD} strokeWidth="1" />
          <line x1="10" y1="14" x2="10" y2="17" stroke={GOLD} strokeWidth="1" />
          <line x1="3" y1="10" x2="6" y2="10" stroke={GOLD} strokeWidth="1" />
          <line x1="14" y1="10" x2="17" y2="10" stroke={GOLD} strokeWidth="1" />
        </g>
      );
    case "Finance":
      return (
        <g transform={o(0, 0)}>
          <line x1="4" y1="16" x2="4" y2="8" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="10" y1="16" x2="10" y2="4" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="16" y1="16" x2="16" y2="10" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
        </g>
      );
    case "Legal":
      return (
        <g transform={o(0, 0)}>
          <line x1="10" y1="4" x2="10" y2="14" stroke={GOLD} strokeWidth="1.2" />
          <line x1="4" y1="14" x2="16" y2="14" stroke={GOLD} strokeWidth="1.2" />
          <path d="M4 14L10 4L16 14" stroke={GOLD} strokeWidth="1.1" fill="none" />
        </g>
      );
    case "Banking":
      return (
        <g transform={o(0, 0)}>
          <path d="M2 8L10 2L18 8" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinejoin="round" />
          <line x1="5" y1="8" x2="5" y2="16" stroke={GOLD} strokeWidth="1.1" />
          <line x1="10" y1="8" x2="10" y2="16" stroke={GOLD} strokeWidth="1.1" />
          <line x1="15" y1="8" x2="15" y2="16" stroke={GOLD} strokeWidth="1.1" />
          <line x1="2" y1="16" x2="18" y2="16" stroke={GOLD} strokeWidth="1.1" />
        </g>
      );
    case "Real Estate":
      return (
        <g transform={o(0, 0)}>
          <rect x="2" y="10" width="6" height="8" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <rect x="9" y="6" width="6" height="12" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <rect x="14" y="9" width="4" height="9" stroke={GOLD} strokeWidth="1.1" fill="none" />
        </g>
      );
    default:
      return (
        <g transform={o(0, 0)}>
          <path d="M4 12 Q10 2 16 12" stroke={GOLD} strokeWidth="1.2" fill="none" />
          <line x1="6" y1="10" x2="4" y2="6" stroke={GOLD} strokeWidth="1" />
          <rect x="8" y="12" width="4" height="4" stroke={GOLD} strokeWidth="1" fill="none" />
        </g>
      );
  }
}

interface IntegratedHubDiagramProps {
  variant?: "default" | "compact";
}

export function IntegratedHubDiagram({ variant = "default" }: IntegratedHubDiagramProps) {
  const compact = variant === "compact";
  const cx = 200;
  const cy = 200;
  const ringR = compact ? 112 : 118;
  const iconR = compact ? 136 : 148;
  const labelR = compact ? 162 : 172;
  const centerR = compact ? 46 : 54;
  const iconScale = compact ? 0.82 : 1;
  const labelSize = compact ? "8.5px" : "10px";

  return (
    <div
      className={`relative aspect-square shrink-0 ${
        compact
          ? "w-[200px] sm:w-[220px] lg:w-[min(34vh,280px)] xl:w-[min(36vh,300px)]"
          : "mx-auto w-full max-w-[420px] lg:mx-0 lg:ml-auto lg:max-w-[460px]"
      }`}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 36%, rgba(220,50,55,0.55) 0%, rgba(188,32,38,0.3) 32%, rgba(188,32,38,0.08) 55%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <svg viewBox="0 0 400 400" className="relative z-10 h-full w-full" aria-hidden="true">
        <circle cx={cx} cy={cy} r={ringR} fill="none" stroke={GOLD} strokeWidth="1.35" />

        {SPOKES.map(({ label, angle }) => {
          const dot = spokePoint(cx, cy, ringR, angle);
          const icon = spokePoint(cx, cy, iconR, angle);
          const text = spokePoint(cx, cy, labelR, angle);
          return (
            <g key={label}>
              <line x1={dot.x} y1={dot.y} x2={icon.x} y2={icon.y} stroke={GOLD} strokeWidth="0.85" opacity="0.8" />
              <circle cx={dot.x} cy={dot.y} r="2.6" fill={GOLD} />
              <HubIcon type={label} x={icon.x} y={icon.y} scale={iconScale} />
              <text
                x={text.x}
                y={text.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={GOLD}
                style={{
                  fontSize: labelSize,
                  fontFamily: "var(--font-ibm-plex), sans-serif",
                  fontWeight: 500,
                }}
              >
                {label}
              </text>
            </g>
          );
        })}

        <circle cx={cx} cy={cy} r={centerR} fill="#111111" />
        <circle cx={cx} cy={cy} r={centerR} fill="none" stroke={GOLD} strokeWidth={compact ? 1.3 : 1.5} />
      </svg>

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 scale-[0.82]">
        <LogoImage size={compact ? "compact" : "hub"} className="mx-auto" />
      </div>
    </div>
  );
}
