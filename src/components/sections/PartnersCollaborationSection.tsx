"use client";

/**
 * Partners — 05 / Collaboration Categories
 * Compact hub diagram: outer gold icons, text toward hub, stepped red lines.
 */

const RED = "#bc2026";
const GOLD = "#a8864d";
const INK = "#1a1a1a";
const MUTED = "#6b6b6b";

const VB_W = 640;
const VB_H = 400;
const CX = 320;
const CY = 178;
const RING_R = 74;
/** Gap between arrow tip and red node */
const ARROW_GAP = 9;
/** Final short horizontal into the node */
const SHORT_H = 12;

type Side = "left" | "right" | "bottom";

type Category = {
  id: string;
  title: string;
  subtitle: string;
  side: Side;
  y: number;
  /** Ring node angle (deg, 0 = east / 3 o'clock, CCW) */
  angle: number;
  width: number;
};

/** Clock positions: 10, 9, 8 | 2, 3, 4 | 6 — mid rows sit near node height for a shallow jog */
const CATEGORIES: readonly Category[] = [
  { id: "architecture", title: "ARCHITECTURE", subtitle: "Concept to Detailed Design", side: "left", y: 46, angle: 210, width: 138 },
  { id: "engineering", title: "ENGINEERING", subtitle: "Structural, MEP & Civil", side: "left", y: 166, angle: 180, width: 128 },
  { id: "finance", title: "FINANCE", subtitle: "Financial Advisory & Viability", side: "left", y: 250, angle: 150, width: 142 },
  { id: "legal", title: "LEGAL", subtitle: "Contracts & Compliance", side: "right", y: 46, angle: 330, width: 118 },
  { id: "realestate", title: "REAL ESTATE", subtitle: "Market Advisory & Sales", side: "right", y: 166, angle: 0, width: 128 },
  { id: "marketing", title: "MARKETING", subtitle: "Branding & Communication", side: "right", y: 250, angle: 30, width: 128 },
  { id: "contractors", title: "SPECIALIST CONTRACTORS", subtitle: "Execution & Delivery", side: "bottom", y: 350, angle: 90, width: 168 },
];

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * r, y: CY + Math.sin(rad) * r };
}

/**
 * Cranked callout (matches reference):
 * outer horizontal → 45° diagonal → short horizontal → arrow (gap before red node).
 * Bottom: vertical stub with arrow.
 */
function connectorPath(cat: Category) {
  const node = polar(cat.angle, RING_R);
  const tip = polar(cat.angle, RING_R + ARROW_GAP);

  if (cat.side === "bottom") {
    return {
      d: `M ${tip.x.toFixed(2)} ${cat.y} L ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`,
      tip,
      node,
      labelLeft: tip.x - cat.width / 2,
      labelY: cat.y,
      width: cat.width,
    };
  }

  /** Direction from outer label toward the hub */
  const hubDir = cat.side === "left" ? 1 : -1;
  const colInner = cat.side === "left" ? 196 : 444;
  const outerX = cat.side === "left" ? colInner - cat.width : colInner + cat.width;

  // Short final horizontal ending at tip
  const approachX = tip.x - hubDir * SHORT_H;
  const approachY = tip.y;

  // True 45° diagonal onto the label row
  const dy = approachY - cat.y;
  let bendX = approachX - hubDir * Math.abs(dy);

  if (cat.side === "left") {
    bendX = Math.max(outerX + 10, Math.min(bendX, approachX - 2));
  } else {
    bendX = Math.min(outerX - 10, Math.max(bendX, approachX + 2));
  }

  const d = [
    `M ${outerX} ${cat.y}`,
    `L ${bendX.toFixed(2)} ${cat.y}`,
    `L ${approachX.toFixed(2)} ${approachY.toFixed(2)}`,
    `L ${tip.x.toFixed(2)} ${tip.y.toFixed(2)}`,
  ].join(" ");

  return {
    d,
    tip,
    node,
    labelLeft: Math.min(outerX, colInner),
    labelY: cat.y,
    width: cat.width,
  };
}

function HubLogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="27" fill={RED} />
      <rect x="24" y="9" width="8" height="30" fill="#d6dae0" rx="0.5" />
      <rect x="15" y="17" width="7" height="22" fill="#b8bcc4" />
      <rect x="34" y="15" width="7" height="24" fill="#c5c9d0" />
      <rect x="17" y="20" width="2" height="2" fill="#6b7280" opacity="0.85" />
      <rect x="17" y="25" width="2" height="2" fill="#6b7280" opacity="0.85" />
      <rect x="17" y="30" width="2" height="2" fill="#6b7280" opacity="0.85" />
      <rect x="26" y="13" width="2" height="2" fill="#6b7280" opacity="0.75" />
      <rect x="26" y="18" width="2" height="2" fill="#6b7280" opacity="0.75" />
      <rect x="26" y="23" width="2" height="2" fill="#6b7280" opacity="0.75" />
      <rect x="26" y="28" width="2" height="2" fill="#6b7280" opacity="0.75" />
      <rect x="36" y="19" width="2" height="2" fill="#6b7280" opacity="0.85" />
      <rect x="36" y="24" width="2" height="2" fill="#6b7280" opacity="0.85" />
      <rect x="36" y="29" width="2" height="2" fill="#6b7280" opacity="0.85" />
      <line x1="11" y1="39" x2="45" y2="39" stroke="#a8adb5" strokeWidth="1.5" />
    </svg>
  );
}

function CategoryIcon({ id }: { id: string }) {
  const s = {
    fill: "none" as const,
    stroke: GOLD,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "architecture":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <rect x="4" y="10" width="7" height="14" {...s} />
          <rect x="12" y="4" width="8" height="20" {...s} />
          <rect x="21" y="12" width="4" height="12" {...s} />
          <path d="M4 24h21" {...s} />
        </svg>
      );
    case "engineering":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 23V7l12 16H5z" {...s} />
          <path d="M11 23l12-16v16H11z" {...s} />
          <path d="M9 17h4M17 17h4" {...s} />
        </svg>
      );
    case "finance":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M4 11l10-6 10 6" {...s} />
          <path d="M7 11v10M14 11v10M21 11v10" {...s} />
          <path d="M4 21h20M5 24h18" {...s} />
        </svg>
      );
    case "legal":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M14 4v16" {...s} />
          <path d="M8 22h12" {...s} />
          <path d="M14 8l-7 6h5l2-2 2 2h5z" {...s} />
          <circle cx="9" cy="16" r="2.2" {...s} />
          <circle cx="19" cy="16" r="2.2" {...s} />
        </svg>
      );
    case "realestate":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 13l9-8 9 8" {...s} />
          <path d="M8 12.5V23h12V12.5" {...s} />
          <path d="M12 23v-6h4v6" {...s} />
        </svg>
      );
    case "marketing":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M5 11h5l8-5v16l-8-5H5z" {...s} />
          <path d="M10 16v5a2 2 0 0 0 2 2h1" {...s} />
          <path d="M20 10c1.6 1.2 2.5 2.9 2.5 4.5S21.6 17.8 20 19" {...s} />
        </svg>
      );
    case "contractors":
      return (
        <svg width="20" height="20" viewBox="0 0 28 28" aria-hidden="true" className="shrink-0">
          <path d="M7 14c0-4 3-7 7-7s7 3 7 7" {...s} />
          <path d="M5 14h18v3c0 1.5-1 3-3 3H8c-2 0-3-1.5-3-3z" {...s} />
          <path d="M10 11h8" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

type CompactProps = { compact?: boolean };

export function PartnersCollaborationSection({ compact = false }: CompactProps) {
  const geometry = CATEGORIES.map((cat) => ({ cat, ...connectorPath(cat) }));

  const diagram = (
    <div className="relative w-full">
      <div
        className={
          compact
            ? "relative mx-auto aspect-[640/400] h-[min(56svh,420px)] w-full max-w-full"
            : "relative aspect-[640/400] w-full"
        }
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="collab-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3.5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0 0 L6 3.5 L0 7 Z" fill={RED} />
            </marker>
            <radialGradient id="collab-node" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#e85a5f" />
              <stop offset="55%" stopColor={RED} />
              <stop offset="100%" stopColor="#8f1519" />
            </radialGradient>
          </defs>

          {/* Gold hub ring */}
          <circle cx={CX} cy={CY} r={RING_R} stroke={GOLD} strokeWidth="1.5" fill="#ffffff" />

          {geometry.map(({ cat, d, node }) => (
            <g key={cat.id}>
              <path
                d={d}
                stroke={RED}
                strokeWidth="1.15"
                strokeLinecap="square"
                strokeLinejoin="miter"
                markerEnd="url(#collab-arrow)"
              />
              {cat.side === "bottom" ? (
                <circle cx={node.x} cy={node.y} r="3.6" stroke={RED} strokeWidth="1.35" fill="#ffffff" />
              ) : (
                <circle cx={node.x} cy={node.y} r="3.6" fill="url(#collab-node)" />
              )}
            </g>
          ))}
        </svg>

        <div
          className="absolute left-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          style={{ top: `${(CY / VB_H) * 100}%`, width: "8.75rem" }}
        >
          <HubLogoMark />
          <p
            className="mt-1 text-[12px] font-bold uppercase leading-none tracking-[0.04em]"
            style={{ color: RED, fontFamily: "var(--font-merriweather), Georgia, serif" }}
          >
            NEBCO
          </p>
          <p className="mt-0.5 font-mono text-[5.5px] font-medium uppercase tracking-[0.14em] text-black/50">
            A Class Company
          </p>
          <p
            className="mt-2 font-heading text-[9px] font-extrabold uppercase leading-tight tracking-[0.07em]"
            style={{ color: INK }}
          >
            Project Coordination
          </p>
        </div>

        {geometry.map(({ cat, labelLeft, labelY, width }) => {
          if (cat.side === "bottom") {
            return (
              <div
                key={cat.id}
                className="absolute z-[2] flex flex-col items-center text-center"
                style={{
                  left: `${(labelLeft / VB_W) * 100}%`,
                  width: `${(width / VB_W) * 100}%`,
                  top: `${(labelY / VB_H) * 100}%`,
                  paddingTop: "0.45rem",
                }}
              >
                <CategoryIcon id={cat.id} />
                <p
                  className="mt-1 font-heading text-[9.5px] font-extrabold uppercase leading-none tracking-[0.04em]"
                  style={{ color: INK }}
                >
                  {cat.title}
                </p>
                <p className="mt-1 text-[9px] leading-none" style={{ color: MUTED }}>
                  {cat.subtitle}
                </p>
              </div>
            );
          }

          const isLeft = cat.side === "left";
          /**
           * Icon on the OUTER side:
           * left:  [icon][text→hub]  (text right-aligned)
           * right: [text←hub][icon]  (text left-aligned)
           */
          return (
            <div
              key={cat.id}
              className="absolute z-[2]"
              style={{
                left: `${(labelLeft / VB_W) * 100}%`,
                width: `${(width / VB_W) * 100}%`,
                top: `${(labelY / VB_H) * 100}%`,
              }}
            >
              <div
                className={`absolute bottom-full mb-1 flex w-full items-center gap-1.5 ${
                  isLeft ? "flex-row text-right" : "flex-row text-left"
                }`}
              >
                {isLeft ? <CategoryIcon id={cat.id} /> : null}
                <div className={`min-w-0 flex-1 ${isLeft ? "text-right" : "text-left"}`}>
                  <p
                    className="font-heading text-[9.5px] font-extrabold uppercase leading-[1.05] tracking-[0.04em]"
                    style={{ color: INK }}
                  >
                    {cat.title}
                  </p>
                  <p className="mt-[2px] text-[9px] leading-none" style={{ color: MUTED }}>
                    {cat.subtitle}
                  </p>
                </div>
                {!isLeft ? <CategoryIcon id={cat.id} /> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (compact) {
    return (
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          05 / Collaboration Categories
        </p>
        <div className="mt-3 sm:mt-4">{diagram}</div>
      </div>
    );
  }

  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          05 / Collaboration Categories
        </p>
        <div className="mx-auto mt-8 max-w-[640px] sm:mt-10">{diagram}</div>
      </div>
    </section>
  );
}
