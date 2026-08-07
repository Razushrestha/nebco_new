"use client";

import { useState } from "react";
import { HUB_LOGO_PATH } from "@/components/ui/Logo";

const GOLD = "#c5a059";
const RED = "#bc2026";
const CREAM = "#f5f2ed";

/** Six spokes at 60° — even hexagonal layout around the hub. */
const HUB_NODES = [
  { label: "Property", angle: 0, icon: "property" as const, side: "right" as const, accent: "diamond" as const },
  { label: "Consultants", angle: 60, icon: "consultants" as const, side: "right" as const, accent: "reds" as const },
  { label: "Approvals", angle: 120, icon: "approvals" as const, side: "right" as const, accent: "reds" as const },
  { label: "Finance", angle: 180, icon: "finance" as const, side: "right" as const, accent: "diamond" as const },
  { label: "Construction", angle: 240, icon: "construction" as const, side: "left" as const, accent: "reds" as const },
  { label: "Market", angle: 300, icon: "market" as const, side: "left" as const, accent: "reds" as const },
] as const;

const HUB_VB = 440;
const HUB_CX = HUB_VB / 2;
const HUB_CY = HUB_VB / 2;
/** Extra viewBox padding so outer labels (Market, Construction, etc.) are not clipped. */
const HUB_VB_PAD = { left: 58, right: 28, top: 18, bottom: 18 };
const HUB_VIEW_W = HUB_VB + HUB_VB_PAD.left + HUB_VB_PAD.right;
const HUB_VIEW_H = HUB_VB + HUB_VB_PAD.top + HUB_VB_PAD.bottom;
/** Shift whole hub diagram within the viewBox. */
const HUB_DIAGRAM_OFFSET_X = -18;
const HUB_RING_R = 72;
const HUB_ICON_R = 148;
const HUB_NODE_R = 21;
const HUB_LABEL_GAP = 14;

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

const COORDINATE_TO_HUB: Record<(typeof COORDINATE_ITEMS)[number]["num"], (typeof HUB_NODES)[number]["icon"]> = {
  "01": "property",
  "02": "property",
  "03": "consultants",
  "04": "approvals",
  "05": "finance",
  "06": "construction",
  "07": "construction",
  "08": "market",
};

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

function CoordinationHub({ highlightedIcon }: { highlightedIcon: (typeof HUB_NODES)[number]["icon"] }) {
  const cx = HUB_CX + HUB_DIAGRAM_OFFSET_X;
  const cy = HUB_CY;
  const ringR = HUB_RING_R;
  const iconR = HUB_ICON_R;
  const nodeR = HUB_NODE_R;
  const innerR = ringR - 1;
  const logoSize = innerR * 2 * 0.94;
  const logoX = cx - logoSize / 2;
  const logoY = cy - logoSize / 2;
  const clipId = "coordination-hub-logo-clip";

  const spokes = HUB_NODES.map((node) => {
    const start = polar(cx, cy, ringR, node.angle);
    const icon = polar(cx, cy, iconR, node.angle);
    const end = polar(cx, cy, iconR - nodeR, node.angle);
    const span = iconR - ringR - nodeR;
    const red1 = polar(cx, cy, ringR + span * 0.34, node.angle);
    const red2 = polar(cx, cy, ringR + span * 0.62, node.angle);
    const labelX =
      node.side === "left" ? icon.x - nodeR - HUB_LABEL_GAP : icon.x + nodeR + HUB_LABEL_GAP;
    const isHighlighted = node.icon === highlightedIcon;

    return { node, start, icon, end, red1, red2, labelX, isHighlighted };
  });

  return (
    <div className="coordination-hub-diagram relative mx-auto aspect-square max-w-full overflow-visible">
      <svg
        viewBox={`-${HUB_VB_PAD.left} -${HUB_VB_PAD.top} ${HUB_VIEW_W} ${HUB_VIEW_H}`}
        overflow="visible"
        className="relative z-10 block h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId}>
            <circle cx={cx} cy={cy} r={innerR} />
          </clipPath>
        </defs>

        {/* Spoke lines — behind hub fill */}
        {spokes.map(({ node, start, end }) => (
          <line
            key={`${node.label}-line`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke={GOLD}
            strokeWidth="1.05"
          />
        ))}

        {/* Hub center mask */}
        <circle cx={cx} cy={cy} r={ringR + 0.5} fill="#0f0f0f" />

        {/* Logo — square mark, centroid aligned to hub center */}
        <image
          href={HUB_LOGO_PATH}
          x={logoX}
          y={logoY}
          width={logoSize}
          height={logoSize}
          clipPath={`url(#${clipId})`}
        />

        {/* Ring accents + outer nodes */}
        {spokes.map(({ node, start, icon, red1, red2, labelX, isHighlighted }) => (
          <g key={node.label}>
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

            <g
              className={`coordination-hub-spoke ${isHighlighted ? "is-highlighted" : ""}`}
              style={{ transformOrigin: `${icon.x}px ${icon.y}px` }}
            >
              <circle
                cx={icon.x}
                cy={icon.y}
                r={nodeR}
                fill="#0f0f0f"
                stroke={GOLD}
                strokeWidth={isHighlighted ? 1.45 : 1.15}
              />
              <SpokeIcon type={node.icon} x={icon.x} y={icon.y} />
            </g>

            <text
              x={labelX}
              y={icon.y}
              textAnchor={node.side === "left" ? "end" : "start"}
              dominantBaseline="middle"
              fill={isHighlighted ? GOLD : "#ffffff"}
              className={`coordination-hub-label ${isHighlighted ? "is-highlighted" : ""}`}
              style={{
                fontSize: "14px",
                fontFamily: "var(--font-ibm-plex), system-ui, sans-serif",
                fontWeight: 500,
              }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Gold hub ring on top */}
        <circle cx={cx} cy={cy} r={ringR} fill="none" stroke={GOLD} strokeWidth="1.3" />
      </svg>
    </div>
  );
}

/**
 * 02 / One Local Coordination Point + 03 / What We Coordinate
 * Fills remaining viewport under the Distance Problem band.
 */
export function NrnCoordinationSection() {
  const [active, setActive] = useState<(typeof COORDINATE_ITEMS)[number]["num"]>("02");
  const highlightedIcon = COORDINATE_TO_HUB[active];

  return (
    <div className="nrn-coordination grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-2 lg:items-stretch">
      {/* 02 — dark hub */}
      <div className="nrn-coordination__dark flex min-h-0 flex-col bg-[#0f0f0f] px-6 py-8 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-7 xl:px-12">
        <p className="nrn-coordination__eyebrow shrink-0 type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          02 / One Local Coordination Point
        </p>
        <h2 className="nrn-coordination__heading font-heading font-bold tracking-[-0.02em] text-white">
          One local team. All critical
          <br />
          connections.
        </h2>

        <div className="nrn-coordination__hub flex min-h-0 w-full flex-1 items-center justify-center">
          <CoordinationHub highlightedIcon={highlightedIcon} />
        </div>

        <p className="nrn-coordination__lede mx-auto max-w-[28rem] shrink-0 text-center text-[12px] leading-[1.55] text-white/65 sm:text-[12.5px]">
          We coordinate the people, processes and information that keep your project moving—while you stay
          in control.
        </p>
      </div>

      {/* 03 — cream timeline list */}
      <div
        className="nrn-coordination__light flex min-h-0 flex-col px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-7 xl:px-12"
        style={{ backgroundColor: CREAM }}
      >
        <p className="nrn-coordination__eyebrow shrink-0 type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          03 / What We Coordinate
        </p>

        <ul className="nrn-coordination-list relative mt-5 flex min-h-0 flex-1 flex-col justify-between sm:mt-6">
          <span
            className="nrn-coordination-list__rail pointer-events-none absolute bottom-[0.65rem] left-[5.5px] top-[0.65rem] w-px sm:left-[6.5px]"
            style={{ backgroundColor: GOLD }}
            aria-hidden="true"
          />

          {COORDINATE_ITEMS.map((item, index) => {
            const isActive = active === item.num;
            const isLast = index === COORDINATE_ITEMS.length - 1;

            return (
              <li key={item.num} className="nrn-coordination-list__item relative flex items-center gap-3 sm:gap-3.5">
                <span className="relative z-[1] flex w-3 shrink-0 items-center justify-center" aria-hidden="true">
                  <span
                    className={`block h-[10px] w-[10px] rounded-full border-[1.5px] sm:h-[11px] sm:w-[11px] ${
                      isActive ? "border-[#c5a059] bg-[#1a1a1a]" : "bg-[#f5f2ed]"
                    }`}
                    style={{ borderColor: GOLD }}
                  />
                </span>

                <button
                  type="button"
                  onMouseEnter={() => setActive(item.num)}
                  onFocus={() => setActive(item.num)}
                  className={`nrn-coordination-list__row grid min-w-0 flex-1 items-center text-left transition-colors ${
                    isActive
                      ? "is-active rounded-md bg-[#1a1a1a] px-3 py-2.5 sm:px-3.5 sm:py-3"
                      : `px-3 py-2.5 sm:px-3.5 sm:py-3 ${!isLast ? "border-b border-[#e4dfd6]" : ""}`
                  }`}
                >
                  <span
                    className={`nrn-coordination-list__num font-mono font-semibold tabular-nums ${
                      isActive ? "text-white" : "text-nebco-red"
                    }`}
                  >
                    {item.num}
                  </span>

                  <span
                    className={`nrn-coordination-list__title font-heading font-bold ${
                      isActive ? "text-white" : "text-arch-black"
                    }`}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`nrn-coordination-list__desc ${
                      isActive ? "text-white/72" : "text-arch-black/55"
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
