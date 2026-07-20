interface HubDiagramProps {
  className?: string;
  dark?: boolean;
}

const SPOKES = [
  { label: "Architecture", angle: 0 },
  { label: "Engineering", angle: 51 },
  { label: "Finance", angle: 102 },
  { label: "Legal", angle: 153 },
  { label: "Construction", angle: 204 },
  { label: "Real Estate", angle: 255 },
  { label: "Marketing", angle: 306 },
];

export function HubDiagram({ className = "", dark = false }: HubDiagramProps) {
  const strokeColor = dark ? "#bc2026" : "#bc2026";
  const textColor = dark ? "fill-white" : "fill-arch-black";
  const subColor = dark ? "fill-white/50" : "fill-silver-graphite";

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
        {/* Outer ring */}
        <circle cx="200" cy="200" r="160" fill="none" stroke={strokeColor} strokeWidth="0.5" opacity="0.3" />
        <circle cx="200" cy="200" r="120" fill="none" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />

        {/* Spokes */}
        {SPOKES.map(({ label, angle }) => {
          const rad = ((angle - 90) * Math.PI) / 180;
          const x2 = 200 + Math.cos(rad) * 140;
          const y2 = 200 + Math.sin(rad) * 140;
          const lx = 200 + Math.cos(rad) * 175;
          const ly = 200 + Math.sin(rad) * 175;
          return (
            <g key={label}>
              <line x1="200" y1="200" x2={x2} y2={y2} stroke={strokeColor} strokeWidth="1" opacity="0.6" />
              <circle cx={x2} cy={y2} r="20" fill="none" stroke={strokeColor} strokeWidth="1" />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-[9px] font-mono uppercase ${textColor}`}
                style={{ fontSize: "9px" }}
              >
                {label}
              </text>
            </g>
          );
        })}

        {/* Center */}
        <circle cx="200" cy="200" r="45" fill="#bc2026" />
        <text
          x="200"
          y="196"
          textAnchor="middle"
          className="fill-white font-bold"
          style={{ fontSize: "14px", fontFamily: "var(--font-manrope)" }}
        >
          NEBCO
        </text>
        <text
          x="200"
          y="212"
          textAnchor="middle"
          className={subColor}
          style={{ fontSize: "7px", fontFamily: "var(--font-ibm-mono)" }}
        >
          PLATFORM
        </text>
      </svg>
    </div>
  );
}
