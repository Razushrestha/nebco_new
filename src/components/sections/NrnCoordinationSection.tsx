"use client";

import { useState } from "react";

const GOLD = "#c5a059";
const RED = "#bc2026";
const CREAM = "#f5f2ed";

/** Six spokes — diagonals carry dual red nodes; verticals get a gold diamond at the ring. */
const HUB_NODES = [
  { label: "Property", angle: 0, icon: "property" as const, side: "right" as const, accent: "diamond" as const },
  { label: "Consultants", angle: 58, icon: "consultants" as const, side: "right" as const, accent: "reds" as const },
  { label: "Approvals", angle: 122, icon: "approvals" as const, side: "right" as const, accent: "reds" as const },
  { label: "Finance", angle: 180, icon: "finance" as const, side: "right" as const, accent: "diamond" as const },
  { label: "Construction", angle: 238, icon: "construction" as const, side: "left" as const, accent: "reds" as const },
  { label: "Market", angle: 302, icon: "market" as const, side: "left" as const, accent: "reds" as const },
];

const COORDINATE_ITEMS = [
  {
    num: "01",
    title: "Property Review",
    desc: "Verify documents, site and market potential.",
  },
  {
    num: "02",
    title: "Feasibility",
    desc: "Study options, risks, costs and returns.",
  },
  {
    num: "03",
    title: "Professional Team",
    desc: "Architects, engineers, QS and specialists.",
  },
  {
    num: "04",
    title: "Approvals",
    desc: "Preparing and managing required permits.",
  },
  {
    num: "05",
    title: "Finance Support",
    desc: "Budgeting, cash flow and funding coordination.",
  },
  {
    num: "06",
    title: "Construction",
    desc: "Quality, safety and schedule management.",
  },
  {
    num: "07",
    title: "Reporting",
    desc: "Digital updates, decisions and documents.",
  },
  {
    num: "08",
    title: "Leasing or Handover",
    desc: "Market readiness and smooth activation.",
  },
] as const;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
}

function SpokeIcon({ type, x, y }: { type: (typeof HUB_NODES)[number]["icon"]; x: number; y: number }) {
  const t = `translate(${x - 10}, ${y - 10})`;
  switch (type) {
    case "property":
      return (
        <g transform={t}>
          <path
            d="M10 2.2L2.8 8.5V17h5V12.2h4.4V17H17.2V8.5L10 2.2Z"
            stroke={GOLD}
            strokeWidth="1.2"
            fill="none"
            strokeLinejoin="round"
          />
        </g>
      );
    case "consultants":
      return (
        <g transform={t}>
          <circle cx="7" cy="5.5" r="2.3" stroke={GOLD} strokeWidth="1.15" fill="none" />
          <circle cx="13.2" cy="6" r="1.9" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <circle cx="3.8" cy="6.4" r="1.6" stroke={GOLD} strokeWidth="1.05" fill="none" />
          <path d="M2.5 15c.55-2.5 2.1-3.7 4.5-3.7 2.3 0 3.9 1.2 4.5 3.7" stroke={GOLD} strokeWidth="1.1" fill="none" strokeLinecap="round" />
          <path d="M11.2 13c.4-1.4 1.3-2.1 2.6-2.1 1.4 0 2.3.7 2.8 2.2" stroke={GOLD} strokeWidth="1.05" fill="none" strokeLinecap="round" />
        </g>
      );
    case "approvals":
      return (
        <g transform={t}>
          <path d="M4.2 2.2h7.4L15.2 5.8V17H4.2V2.2Z" stroke={GOLD} strokeWidth="1.15" fill="none" strokeLinejoin="round" />
          <path d="M11.4 2.2V6h3.6" stroke={GOLD} strokeWidth="1.1" fill="none" strokeLinejoin="round" />
          <path d="M6.4 10.2l1.8 1.8 3.8-3.9" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "finance":
      return (
        <g transform={t}>
          <rect x="2.8" y="5.2" width="14.4" height="10" rx="1.4" stroke={GOLD} strokeWidth="1.2" fill="none" />
          <path d="M2.8 8.4h14.4" stroke={GOLD} strokeWidth="1.05" />
          <circle cx="13.4" cy="12.2" r="1.35" stroke={GOLD} strokeWidth="1.05" fill="none" />
        </g>
      );
    case "construction":
      return (
        <g transform={t}>
          <path
            d="M4.2 17V5.2M4.2 5.2h8.2M10.5 5.2V3h4.6v3.5h-4.6"
            stroke={GOLD}
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4.2 5.2L15.5 7.2" stroke={GOLD} strokeWidth="1.05" />
        </g>
      );
    case "market":
      return (
        <g transform={t}>
          <rect x="2.5" y="10" width="3.6" height="6.5" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <rect x="7.2" y="6.2" width="3.6" height="10.3" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <rect x="11.9" y="8.2" width="3.6" height="8.3" stroke={GOLD} strokeWidth="1.1" fill="none" />
          <path d="M2.2 16.8h15.6" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
        </g>
      );
    default:
      return null;
  }
}

function CoordinationHub() {
  const cx = 220;
  const cy = 220;
  const ringR = 58;
  const iconR = 118;
  const nodeR = 17.5;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,320px)] sm:max-w-[340px] lg:max-w-[min(42vh,360px)]">
      <svg viewBox="0 0 440 440" className="relative z-10 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="nrn-logo-glow" cx="50%" cy="28%" r="62%">
            <stop offset="0%" stopColor="#e84a50" stopOpacity="0.95" />
            <stop offset="42%" stopColor="#bc2026" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#bc2026" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={ringR} fill="#0f0f0f" stroke={GOLD} strokeWidth="1.3" />

        {HUB_NODES.map((node) => {
          const start = polar(cx, cy, ringR, node.angle);
          const icon = polar(cx, cy, iconR, node.angle);
          const end = polar(cx, cy, iconR - nodeR, node.angle);
          const span = iconR - ringR - nodeR;
          const red1 = polar(cx, cy, ringR + span * 0.34, node.angle);
          const red2 = polar(cx, cy, ringR + span * 0.62, node.angle);
          const labelX = node.side === "left" ? icon.x - nodeR - 10 : icon.x + nodeR + 10;

          return (
            <g key={node.label}>
              <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={GOLD} strokeWidth="1.05" />

              {node.accent === "diamond" ? (
                <path
                  d={`M ${start.x} ${start.y - 2.8} L ${start.x + 2.8} ${start.y} L ${start.x} ${start.y + 2.8} L ${start.x - 2.8} ${start.y} Z`}
                  fill={GOLD}
                />
              ) : (
                <>
                  <circle cx={red1.x} cy={red1.y} r="1.9" fill={RED} />
                  <circle cx={red2.x} cy={red2.y} r="1.9" fill={RED} />
                </>
              )}

              <circle cx={icon.x} cy={icon.y} r={nodeR} fill="#0f0f0f" stroke={GOLD} strokeWidth="1.15" />
              <SpokeIcon type={node.icon} x={icon.x} y={icon.y} />

              <text
                x={labelX}
                y={icon.y}
                textAnchor={node.side === "left" ? "end" : "start"}
                dominantBaseline="middle"
                fill="#ffffff"
                style={{
                  fontSize: "12px",
                  fontFamily: "var(--font-ibm-plex), system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                {node.label}
              </text>
            </g>
          );
        })}

        <circle cx={cx} cy={cy} r={ringR - 0.5} fill="#0f0f0f" />
        <circle cx={cx} cy={cy} r={42} fill="url(#nrn-logo-glow)" />
        <circle cx={cx} cy={cy} r={ringR} fill="none" stroke={GOLD} strokeWidth="1.3" />

        <rect x={cx - 3} y={cy - 26} width="6" height="21" fill="#c8ccd5" rx="0.35" />
        <rect x={cx - 10} y={cy - 18} width="5" height="13" fill="#b0b5c0" rx="0.35" />
        <rect x={cx + 5} y={cy - 20} width="5" height="15" fill="#bcc1cb" rx="0.35" />
        <line x1={cx - 13} y1={cy - 4} x2={cx + 13} y2={cy - 4} stroke="#9aa0ab" strokeWidth="1.1" />

        <text
          x={cx}
          y={cy + 11}
          textAnchor="middle"
          fill={RED}
          style={{
            fontSize: "14.5px",
            fontFamily: "var(--font-merriweather), Georgia, serif",
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          NEBCO
        </text>
        <text
          x={cx}
          y={cy + 23}
          textAnchor="middle"
          fill="#ffffff"
          style={{
            fontSize: "5px",
            fontFamily: "var(--font-ibm-plex), system-ui, sans-serif",
            letterSpacing: "0.18em",
            fontWeight: 600,
          }}
        >
          A CLASS COMPANY
        </text>
      </svg>
    </div>
  );
}

/**
 * 02 / One Local Coordination Point + 03 / What We Coordinate
 * Fills remaining viewport under the Distance Problem band.
 */
export function NrnCoordinationSection() {
  const [active, setActive] = useState("02");

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-2 lg:items-stretch">
      {/* 02 — dark hub */}
      <div className="flex min-h-0 flex-col bg-[#0f0f0f] px-6 py-8 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-7 xl:px-12">
        <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          02 / One Local Coordination Point
        </p>
        <h2 className="mt-3 max-w-[22rem] shrink-0 font-heading text-[1.4rem] font-bold leading-[1.18] tracking-[-0.02em] sm:text-[1.55rem] lg:text-[1.65rem]">
          One local team.
          <span className="block">All critical connections.</span>
        </h2>

        <div className="my-4 flex min-h-0 flex-1 items-center justify-center lg:my-3">
          <CoordinationHub />
        </div>

        <p className="mx-auto max-w-[28rem] shrink-0 text-center text-[12px] leading-[1.55] text-white/65 sm:text-[12.5px]">
          We coordinate the people, processes and information that keep your project moving—while you stay
          in control.
        </p>
      </div>

      {/* 03 — cream timeline list */}
      <div
        className="flex min-h-0 flex-col px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-7 xl:px-12"
        style={{ backgroundColor: CREAM }}
      >
        <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          03 / What We Coordinate
        </p>

        <ul className="relative mt-5 flex min-h-0 flex-1 flex-col justify-between sm:mt-6">
          <span
            className="pointer-events-none absolute bottom-[0.65rem] left-[5.5px] top-[0.65rem] w-px sm:left-[6.5px]"
            style={{ backgroundColor: GOLD }}
            aria-hidden="true"
          />

          {COORDINATE_ITEMS.map((item, index) => {
            const isActive = active === item.num;
            const isLast = index === COORDINATE_ITEMS.length - 1;

            return (
              <li key={item.num} className="relative flex items-center gap-3 sm:gap-3.5">
                <span className="relative z-[1] flex w-3 shrink-0 items-center justify-center" aria-hidden="true">
                  <span
                    className={`block h-[10px] w-[10px] rounded-full border-[1.5px] sm:h-[11px] sm:w-[11px] ${
                      isActive ? "bg-[#1a1a1a]" : "bg-[#f5f2ed]"
                    }`}
                    style={{ borderColor: GOLD }}
                  />
                </span>

                <button
                  type="button"
                  onMouseEnter={() => setActive(item.num)}
                  onFocus={() => setActive(item.num)}
                  className={`grid min-w-0 flex-1 grid-cols-[1.75rem_minmax(0,10.5rem)_minmax(0,1fr)] items-center gap-x-2.5 py-2 text-left transition-colors sm:grid-cols-[2rem_minmax(0,11.5rem)_minmax(0,1fr)] sm:gap-x-3 sm:py-2.5 ${
                    isActive
                      ? "rounded-md bg-[#1a1a1a] px-2.5 sm:px-3"
                      : `px-2.5 sm:px-3 ${!isLast ? "border-b border-[#e4dfd6]" : ""}`
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-semibold tabular-nums sm:text-[12px] ${
                      isActive ? "text-white" : "text-nebco-red"
                    }`}
                  >
                    {item.num}
                  </span>

                  <span
                    className={`font-heading text-[12px] font-bold leading-snug sm:text-[13px] ${
                      isActive ? "text-white" : "text-arch-black"
                    }`}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`text-[11px] leading-snug sm:text-[12px] ${
                      isActive ? "text-white/70" : "text-arch-black/55"
                    }`}
                  >
                    {item.desc}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
