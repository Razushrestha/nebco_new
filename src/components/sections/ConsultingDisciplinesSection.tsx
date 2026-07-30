"use client";

import Image from "next/image";

/**
 * Matches design reference aspect and branching topology.
 * viewBox shared by SVG paths + HTML overlays.
 */
const GOLD = "#b8956c";
const VB_W = 1400;
const VB_H = 380;

const CX = 580;
const CY = 190;
/** Hub rings — sized to dominate the center like the design. */
const RING_R = 118;
const SOLID_R = 100;
const LOGO_R = 88;
const ICON_R = 22;

type Discipline = {
  id: string;
  title: string;
  description: string;
  iconSrc?: string;
  x: number;
  y: number;
  side: "left" | "right";
};

const DISCIPLINES: readonly Discipline[] = [
  {
    id: "architecture",
    title: "ARCHITECTURE",
    description: "Design that balances function, value and aesthetics.",
    x: 195,
    y: 55,
    side: "left",
  },
  {
    id: "engineering",
    title: "ENGINEERING",
    description: "Structural, MEP and infrastructure engineering.",
    x: 195,
    y: 190,
    side: "left",
  },
  {
    id: "construction",
    title: "CONSTRUCTION",
    description: "Quality construction with safety, schedule and cost control.",
    x: 195,
    y: 325,
    side: "left",
  },
  {
    id: "finance",
    title: "FINANCE",
    description: "Financial modeling, cost planning and investment strategy.",
    x: 960,
    y: 55,
    side: "right",
  },
  {
    id: "legal",
    title: "LEGAL",
    description: "Contracts, compliance and risk management.",
    x: 960,
    y: 190,
    side: "right",
  },
  {
    id: "banking",
    title: "BANKING",
    description: "Bank coordination, financing and cash flow management.",
    x: 960,
    y: 325,
    side: "right",
  },
  {
    id: "realtor",
    title: "REALTOR",
    description: "Market insight, pricing strategy and sales/leasing support.",
    x: 1210,
    y: 100,
    side: "right",
  },
  {
    id: "marketing",
    title: "MARKETING",
    description: "Branding, positioning and marketing strategy.",
    x: 1210,
    y: 280,
    side: "right",
  },
] as const;

function Dot({ x, y, r = 2.6 }: { x: number; y: number; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={GOLD} />;
}

function DiagramSvg() {
  const [arch, eng, con, fin, leg, ban, rea, mkt] = DISCIPLINES;

  const L_JOINT = { x: 340, y: CY };
  const L_ELBOW_T = { x: 270, y: arch.y };
  const L_ELBOW_B = { x: 270, y: con.y };

  const R_JOINT = { x: 820, y: CY };
  const R_ELBOW_T = { x: 890, y: fin.y };
  const R_ELBOW_B = { x: 890, y: ban.y };

  /** Gap between stub tip and icon circle (disconnected). */
  const GAP = 14;

  // Short floating stubs only — left of realtor / marketing
  const REA_TIP = { x: rea.x - ICON_R - GAP, y: rea.y };
  const REA_NODE = { x: REA_TIP.x - 36, y: rea.y };

  const MKT_TIP = { x: mkt.x - ICON_R - GAP, y: mkt.y };
  const MKT_NODE = { x: MKT_TIP.x - 36, y: mkt.y };

  const L_ATT = { x: CX - RING_R, y: CY };
  const R_ATT = { x: CX + RING_R, y: CY };

  const stroke = {
    fill: "none" as const,
    stroke: GOLD,
    strokeWidth: 1.15,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Hub rings */}
      <circle
        cx={CX}
        cy={CY}
        r={RING_R}
        fill="none"
        stroke={GOLD}
        strokeWidth="1.1"
        strokeDasharray="4.5 3.8"
      />
      <circle cx={CX} cy={CY} r={SOLID_R} fill="none" stroke={GOLD} strokeWidth="1.05" />

      {/* Icon circles */}
      {DISCIPLINES.map((d) => (
        <circle
          key={d.id}
          cx={d.x}
          cy={d.y}
          r={ICON_R}
          fill="#f5f2ed"
          stroke={GOLD}
          strokeWidth="1.2"
        />
      ))}

      {/* ——— LEFT fork ——— */}
      <path d={`M${L_ATT.x} ${L_ATT.y} H${L_JOINT.x}`} {...stroke} />
      <Dot x={L_ATT.x} y={L_ATT.y} r={3} />
      <Dot x={L_JOINT.x} y={L_JOINT.y} r={3} />

      <path d={`M${L_JOINT.x} ${L_JOINT.y} L${L_ELBOW_T.x} ${L_ELBOW_T.y} H${arch.x + ICON_R}`} {...stroke} />
      <Dot x={L_ELBOW_T.x} y={L_ELBOW_T.y} />

      <path d={`M${L_JOINT.x} ${L_JOINT.y} H${eng.x + ICON_R}`} {...stroke} />

      <path d={`M${L_JOINT.x} ${L_JOINT.y} L${L_ELBOW_B.x} ${L_ELBOW_B.y} H${con.x + ICON_R}`} {...stroke} />
      <Dot x={L_ELBOW_B.x} y={L_ELBOW_B.y} />

      {/* ——— RIGHT fork ——— */}
      <path d={`M${R_ATT.x} ${R_ATT.y} H${R_JOINT.x}`} {...stroke} />
      <Dot x={R_ATT.x} y={R_ATT.y} r={3} />
      <Dot x={R_JOINT.x} y={R_JOINT.y} r={3} />

      <path d={`M${R_JOINT.x} ${R_JOINT.y} L${R_ELBOW_T.x} ${R_ELBOW_T.y} H${fin.x - ICON_R}`} {...stroke} />
      <Dot x={R_ELBOW_T.x} y={R_ELBOW_T.y} />

      <path d={`M${R_JOINT.x} ${R_JOINT.y} H${leg.x - ICON_R}`} {...stroke} />

      <path d={`M${R_JOINT.x} ${R_JOINT.y} L${R_ELBOW_B.x} ${R_ELBOW_B.y} H${ban.x - ICON_R}`} {...stroke} />
      <Dot x={R_ELBOW_B.x} y={R_ELBOW_B.y} />

      {/* Realtor / Marketing — short disconnected stubs only (no angled lines through copy) */}
      <Dot x={REA_NODE.x} y={REA_NODE.y} r={2.8} />
      <path d={`M${REA_NODE.x} ${REA_NODE.y} H${REA_TIP.x}`} {...stroke} />

      <Dot x={MKT_NODE.x} y={MKT_NODE.y} r={2.8} />
      <path d={`M${MKT_NODE.x} ${MKT_NODE.y} H${MKT_TIP.x}`} {...stroke} />
    </svg>
  );
}

function IconSlot({ d }: { d: Discipline }) {
  if (!d.iconSrc) return null;
  const left = (d.x / VB_W) * 100;
  const top = (d.y / VB_H) * 100;
  const size = ((ICON_R * 2 * 0.62) / VB_W) * 100;

  return (
    <div
      className="absolute z-[2] overflow-hidden"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}%`,
        aspectRatio: "1",
        transform: "translate(-50%, -50%)",
      }}
      data-discipline-icon={d.id}
    >
      <Image src={d.iconSrc} alt="" fill className="object-contain" sizes="40px" />
    </div>
  );
}

function Label({ d }: { d: Discipline }) {
  const left = (d.x / VB_W) * 100;
  const top = (d.y / VB_H) * 100;
  const isLeft = d.side === "left";
  const iconHalf = ((ICON_R / VB_W) * 100);

  return (
    <div
      className={`absolute z-[2] ${isLeft ? "text-right" : "text-left"}`}
      style={{
        top: `${top}%`,
        transform: "translateY(-50%)",
        ...(isLeft
          ? { right: `${100 - left + iconHalf}%`, width: "11.5%", paddingRight: "0.55%" }
          : { left: `${left + iconHalf}%`, width: "11.5%", paddingLeft: "0.55%" }),
      }}
    >
      <p className="font-heading text-[clamp(8px,0.72vw,11px)] font-bold uppercase leading-tight tracking-[0.04em] text-[#2a2a2a]">
        {d.title}
      </p>
      <p className="mt-[3px] text-[clamp(7px,0.65vw,10px)] leading-[1.35] text-[#555555]">{d.description}</p>
    </div>
  );
}

function NebcoHub() {
  const left = (CX / VB_W) * 100;
  const top = (CY / VB_H) * 100;
  const size = ((LOGO_R * 2) / VB_W) * 100;

  return (
    <div
      className="absolute z-[3] flex flex-col items-center justify-center rounded-full bg-[#f5f2ed]"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}%`,
        aspectRatio: "1",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-[8%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 36%, rgba(188,32,38,0.4) 0%, rgba(188,32,38,0.14) 40%, transparent 66%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-[1] flex flex-col items-center">
        <svg width="48" height="28" viewBox="0 0 36 22" fill="none" aria-hidden="true" className="w-[38%] max-w-[48px]">
          <rect x="13" y="1" width="7" height="15" fill="#9aa0ab" rx="0.3" />
          <rect x="6" y="7" width="6" height="9" fill="#b4b8c2" rx="0.3" />
          <rect x="21" y="5" width="6" height="11" fill="#a8adb8" rx="0.3" />
          <line x1="4" y1="16" x2="29" y2="16" stroke="#8a909c" strokeWidth="1.2" />
        </svg>
        <p className="mt-0.5 font-serif text-[clamp(14px,1.55vw,24px)] font-bold leading-none tracking-wide text-nebco-red">
          NEBCO
        </p>
        <p className="mt-[3px] font-mono text-[clamp(5px,0.48vw,7.5px)] font-semibold uppercase tracking-[0.2em] text-[#2a2a2a]">
          A CLASS COMPANY
        </p>
      </div>
    </div>
  );
}

export function ConsultingDisciplinesSection() {
  return (
    <section className="overflow-hidden bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:pb-3 lg:pt-5 xl:px-12">
        <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
          06 / DISCIPLINES COORDINATED
        </p>

        {/* Height capped so 06 + 07 share one viewport */}
        <div className="mt-3 flex justify-center lg:mt-4">
          <div
            className="relative hidden max-w-full lg:block"
            style={{
              height: "min(40vh, 320px)",
              aspectRatio: `${VB_W} / ${VB_H}`,
              width: "min(100%, calc(min(40vh, 320px) * 1400 / 380))",
            }}
          >
            <DiagramSvg />
            <NebcoHub />
            {DISCIPLINES.map((d) => (
              <IconSlot key={`icon-${d.id}`} d={d} />
            ))}
            {DISCIPLINES.map((d) => (
              <Label key={`label-${d.id}`} d={d} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
          {DISCIPLINES.map((d) => (
            <div key={d.id} className="flex items-start gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.2px] bg-[#f5f2ed]"
                style={{ borderColor: GOLD }}
                data-discipline-icon={d.id}
              >
                {d.iconSrc ? (
                  <Image src={d.iconSrc} alt="" width={24} height={24} className="object-contain" />
                ) : null}
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.06em] text-[#2a2a2a]">
                  {d.title}
                </p>
                <p className="mt-1 text-[12px] leading-[1.45] text-[#555555]">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
