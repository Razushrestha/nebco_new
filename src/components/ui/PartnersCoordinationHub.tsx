"use client";

import { LogoImage } from "@/components/ui/Logo";

const RED = "#bc2026";
const GOLD = "#a8864d";
const CREAM = "#f5f2ed";
const INK = "#1a1a1a";

const VB_W = 820;
const VB_H = 360;
const CX = 410;
const CY = 180;
const RING_R = 108;
/** Gap between red ring dot and hollow gold terminal */
const TIP_GAP = 9;
const HOLLOW_R = 3.2;
/** Short diagonal approach - labels sit close to the hub */
const DIAG_LEN = 58;
const LEG_45 = DIAG_LEN / Math.SQRT2;

type Side = "left" | "right";

type Node = {
  id: string;
  title: string;
  status: string;
  side: Side;
  y: number;
  /** Ring attachment angle in degrees (0 = east, CCW) */
  angle: number;
  /** Horizontal underline length under icon+title */
  underline: number;
};

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * r, y: CY + Math.sin(rad) * r };
}

function tipPoint(angle: number) {
  return polar(angle, RING_R + TIP_GAP);
}

/**
 * Design mock labels (top→bottom):
 * Left: Architects, Finance Advisors, Banking Partners, Marketing Partners
 * Right: Engineers, Legal Advisors, Real Estate Advisors, Specialist Contractors
 */
const NODES: readonly Node[] = [
  {
    id: "architects",
    title: "ARCHITECTS",
    status: "Appointed",
    side: "left",
    angle: 225,
    y: tipPoint(225).y - LEG_45,
    underline: 108,
  },
  {
    id: "finance",
    title: "FINANCE ADVISORS",
    status: "Appointed",
    side: "left",
    angle: 195,
    y: tipPoint(195).y - LEG_45 * 0.3,
    underline: 142,
  },
  {
    id: "banking",
    title: "BANKING PARTNERS",
    status: "Engaged",
    side: "left",
    angle: 165,
    y: tipPoint(165).y + LEG_45 * 0.3,
    underline: 142,
  },
  {
    id: "marketing",
    title: "MARKETING PARTNERS",
    status: "Engaged",
    side: "left",
    angle: 135,
    y: tipPoint(135).y + LEG_45,
    underline: 148,
  },
  {
    id: "engineers",
    title: "ENGINEERS",
    status: "Appointed",
    side: "right",
    angle: 315,
    y: tipPoint(315).y - LEG_45,
    underline: 108,
  },
  {
    id: "legal",
    title: "LEGAL ADVISORS",
    status: "Appointed",
    side: "right",
    angle: 345,
    y: tipPoint(345).y - LEG_45 * 0.3,
    underline: 132,
  },
  {
    id: "realestate",
    title: "REAL ESTATE ADVISORS",
    status: "Engaged",
    side: "right",
    angle: 15,
    y: tipPoint(15).y + LEG_45 * 0.3,
    underline: 168,
  },
  {
    id: "contractors",
    title: "SPECIALIST CONTRACTORS",
    status: "Tendered / Engaged",
    side: "right",
    angle: 45,
    y: tipPoint(45).y + LEG_45,
    underline: 178,
  },
] as const;

function connectorGeometry(node: Node) {
  const redDot = polar(node.angle, RING_R);
  const tip = tipPoint(node.angle);
  const dir = node.side === "left" ? -1 : 1;
  const dy = node.y - tip.y;
  const absDy = Math.abs(dy);
  const dxMag =
    absDy >= DIAG_LEN - 0.01 ? 0 : Math.sqrt(DIAG_LEN * DIAG_LEN - absDy * absDy);
  const elbowX = tip.x + dir * dxMag;
  const outerX = elbowX + dir * node.underline;

  const d = [
    `M ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`,
    `L ${elbowX.toFixed(2)} ${node.y.toFixed(2)}`,
    `L ${outerX.toFixed(2)} ${node.y.toFixed(2)}`,
  ].join(" ");

  return {
    d,
    redDot,
    tip,
    left: Math.min(outerX, elbowX),
    right: Math.max(outerX, elbowX),
    y: node.y,
  };
}

function NodeIcon({ id }: { id: string }) {
  const s = {
    fill: "none" as const,
    stroke: GOLD,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "architects":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <rect x="4" y="10" width="7" height="14" {...s} />
          <rect x="12" y="4" width="8" height="20" {...s} />
          <rect x="21" y="12" width="4" height="12" {...s} />
          <path d="M4 24h21" {...s} />
        </svg>
      );
    case "finance":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 20V14M11 20V10M17 20V7" {...s} />
          <path d="M15 9l5-4 3 3" {...s} />
          <path d="M5 22h16" {...s} />
        </svg>
      );
    case "banking":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M4 11l10-6 10 6" {...s} />
          <path d="M7 11v10M14 11v10M21 11v10" {...s} />
          <path d="M4 21h20M5 24h18" {...s} />
        </svg>
      );
    case "marketing":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 11h5l8-5v16l-8-5H5z" {...s} />
          <path d="M10 16v5a2 2 0 0 0 2 2h1" {...s} />
          <path d="M20 10c1.6 1.2 2.5 2.9 2.5 4.5S21.6 17.8 20 19" {...s} />
        </svg>
      );
    case "engineers":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 23V7l12 16H5z" {...s} />
          <path d="M11 23l12-16v16H11z" {...s} />
          <path d="M9 17h4M17 17h4" {...s} />
        </svg>
      );
    case "legal":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M14 4v16" {...s} />
          <path d="M8 22h12" {...s} />
          <path d="M14 8l-7 6h5l2-2 2 2h5z" {...s} />
          <circle cx="9" cy="16" r="2.2" {...s} />
          <circle cx="19" cy="16" r="2.2" {...s} />
        </svg>
      );
    case "realestate":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 13l9-8 9 8" {...s} />
          <path d="M8 12.5V23h12V12.5" {...s} />
          <path d="M12 23v-6h4v6" {...s} />
          <path d="M16 7v-2h3v4" {...s} />
        </svg>
      );
    case "contractors":
      return (
        <svg width="22" height="22" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M7 14c0-4 3-7 7-7s7 3 7 7" {...s} />
          <path d="M5 14h18v3c0 1.5-1 3-3 3H8c-2 0-3-1.5-3-3z" {...s} />
          <path d="M10 11h8" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

function BlueprintWatermark() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMaxYMax slice"
      aria-hidden="true"
    >
      <g stroke="#9a9590" strokeWidth="0.85" fill="none" transform="translate(420 40)">
        <rect x="80" y="60" width="150" height="390" />
        <line x1="80" y1="125" x2="230" y2="125" />
        <line x1="80" y1="190" x2="230" y2="190" />
        <line x1="80" y1="255" x2="230" y2="255" />
        <line x1="80" y1="320" x2="230" y2="320" />
        <line x1="80" y1="385" x2="230" y2="385" />
        <line x1="155" y1="60" x2="155" y2="450" />
        <rect x="240" y="130" width="95" height="320" />
        <line x1="240" y1="195" x2="335" y2="195" />
        <line x1="240" y1="260" x2="335" y2="260" />
        <line x1="240" y1="325" x2="335" y2="325" />
        <line x1="287" y1="130" x2="287" y2="450" />
        <rect x="345" y="90" width="75" height="360" opacity="0.7" />
        <line x1="345" y1="165" x2="420" y2="165" opacity="0.7" />
        <line x1="345" y1="240" x2="420" y2="240" opacity="0.7" />
        <line x1="345" y1="315" x2="420" y2="315" opacity="0.7" />
        <line x1="382" y1="90" x2="382" y2="450" opacity="0.7" />
        <line x1="60" y1="460" x2="440" y2="460" strokeWidth="0.7" opacity="0.5" />
      </g>
    </svg>
  );
}

/**
 * Partners model hub - matches design mock:
 * mirrored L/R labels, gold elbow spokes, hollow gold tips, red ring dots,
 * NEBCO logo + Coordination Platform in the center.
 */
export function PartnersCoordinationHub({ compact = false }: { compact?: boolean }) {
  const geometry = NODES.map((node) => ({ node, ...connectorGeometry(node) }));

  return (
    <div
      className={`partners-coord-hub partners-coordination-diagram relative w-full ${
        compact ? "max-h-full" : ""
      }`}
    >
      <div className="relative aspect-[820/360] w-full">
        <BlueprintWatermark />

        <svg
          className="partners-coord-hub__svg pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          fill="none"
          aria-hidden="true"
        >
          <circle cx={CX} cy={CY} r={RING_R} stroke={RED} strokeWidth="1.7" fill="#ffffff" />

          {geometry.map(({ node, d, redDot, tip }) => (
            <g key={node.id}>
              <path
                d={d}
                stroke={GOLD}
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx={tip.x}
                cy={tip.y}
                r={HOLLOW_R}
                stroke={GOLD}
                strokeWidth="1.1"
                fill={CREAM}
              />
              <circle cx={redDot.x} cy={redDot.y} r="3.8" fill={RED} />
            </g>
          ))}
        </svg>

        <div
          className="absolute left-1/2 top-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center px-2 text-center"
          style={{ width: compact ? "10.5rem" : "11.5rem" }}
        >
          <LogoImage size="hub" className="mx-auto !object-center" />
          <p
            className="mt-2 font-heading text-[11px] font-extrabold uppercase leading-[1.12] tracking-[0.06em] sm:text-[11.5px]"
            style={{ color: INK }}
          >
            Coordination
            <br />
            Platform
          </p>
        </div>

        {geometry.map(({ node, left, right, y }) => {
          const leftPct = (left / VB_W) * 100;
          const widthPct = ((right - left) / VB_W) * 100;
          const topPct = (y / VB_H) * 100;
          const isLeft = node.side === "left";

          return (
            <div
              key={node.id}
              className="absolute z-[2]"
              style={{
                left: `${leftPct}%`,
                width: `${widthPct}%`,
                top: `${topPct}%`,
              }}
            >
              {/* Label sits above the gold underline; left side mirrors toward hub */}
              <div
                className={`absolute bottom-full mb-1.5 flex w-full items-center gap-1.5 ${
                  isLeft
                    ? "flex-row-reverse justify-start text-right"
                    : "flex-row justify-start text-left"
                }`}
              >
                <NodeIcon id={node.id} />
                <div className={`min-w-0 ${isLeft ? "text-right" : "text-left"}`}>
                  <p
                    className="font-heading text-[10px] font-extrabold uppercase leading-[1.05] tracking-[0.03em] sm:text-[11px] lg:text-[11.5px]"
                    style={{ color: INK }}
                  >
                    {node.title}
                  </p>
                  <p className="mt-[2px] text-[10px] leading-none text-black/50 sm:text-[10.5px]">
                    {node.status}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
