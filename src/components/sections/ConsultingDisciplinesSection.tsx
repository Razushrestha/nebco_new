"use client";

import Image from "next/image";
import { LogoImage } from "@/components/ui/Logo";

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

function DisciplineIcon({ id, className }: { id: string; className?: string }) {
  const stroke = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "architecture":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" {...stroke} />
          <path d="M12 4.5v15M4.5 12h15" {...stroke} />
          <path d="M7 7l10 10M17 7L7 17" {...stroke} strokeWidth="1.1" />
        </svg>
      );
    case "engineering":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="3" {...stroke} />
          <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.8 5.8l1.6 1.6M16.6 16.6l1.6 1.6M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6" {...stroke} />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 17h16v2H4z" {...stroke} />
          <path d="M6.5 17V11l4.5-4 4.5 4v6" {...stroke} />
          <path d="M9.5 13h5" {...stroke} />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="5" y="3.5" width="14" height="17" rx="1.5" {...stroke} />
          <path d="M8 7h8M8 10.5h3M8 14h5M8 17.5h6" {...stroke} />
        </svg>
      );
    case "legal":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 4.5v15" {...stroke} />
          <path d="M6.5 8.5h11" {...stroke} />
          <path d="M8 8.5L6 19.5h12L18 8.5" {...stroke} />
          <path d="M9.5 13.5h5" {...stroke} />
        </svg>
      );
    case "banking":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4 10.5 12 5l8 5.5" {...stroke} />
          <path d="M6 11v6.5M10 11v6.5M14 11v6.5M18 11v6.5" {...stroke} />
          <path d="M4 18.5h16" {...stroke} />
        </svg>
      );
    case "realtor":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="9" cy="10" r="3.5" {...stroke} />
          <path d="M12.5 12.5L18 18" {...stroke} />
          <path d="M15.5 15.5l2.5 2.5" {...stroke} strokeWidth="1.8" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 10.5v3l11 4V6.5L5 10.5z" {...stroke} />
          <path d="M18.5 9.5v5" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
}

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

      {/* Realtor / Marketing — branch from finance / banking */}
      <path
        d={`M${R_ELBOW_T.x} ${R_ELBOW_T.y} H${REA_NODE.x - 28} L${REA_NODE.x} ${rea.y}`}
        {...stroke}
      />
      <Dot x={REA_NODE.x} y={REA_NODE.y} r={2.8} />
      <path d={`M${REA_NODE.x} ${REA_NODE.y} H${REA_TIP.x}`} {...stroke} />

      <path
        d={`M${R_ELBOW_B.x} ${R_ELBOW_B.y} H${MKT_NODE.x - 28} L${MKT_NODE.x} ${mkt.y}`}
        {...stroke}
      />
      <Dot x={MKT_NODE.x} y={MKT_NODE.y} r={2.8} />
      <path d={`M${MKT_NODE.x} ${MKT_NODE.y} H${MKT_TIP.x}`} {...stroke} />
    </svg>
  );
}

function IconSlot({ d }: { d: Discipline }) {
  const left = (d.x / VB_W) * 100;
  const top = (d.y / VB_H) * 100;
  const size = ((ICON_R * 2 * 0.58) / VB_W) * 100;

  return (
    <div
      className="absolute z-[2] flex items-center justify-center text-[#b8956c]"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}%`,
        aspectRatio: "1",
        transform: "translate(-50%, -50%)",
      }}
      data-discipline-icon={d.id}
    >
      {d.iconSrc ? (
        <div className="relative h-full w-full">
          <Image src={d.iconSrc} alt="" fill className="object-contain" sizes="40px" />
        </div>
      ) : (
        <DisciplineIcon id={d.id} className="h-[62%] w-[62%]" />
      )}
    </div>
  );
}

function Label({ d }: { d: Discipline }) {
  const leftPct = (d.x / VB_W) * 100;
  const topPct = (d.y / VB_H) * 100;
  const iconHalfPct = (ICON_R / VB_W) * 100;
  const isLeft = d.side === "left";
  const isFar = d.x > 1100;

  return (
    <div
      className={`consulting-disciplines__label absolute z-[2] ${
        isLeft
          ? "consulting-disciplines__label--left"
          : isFar
            ? "consulting-disciplines__label--far"
            : "consulting-disciplines__label--right"
      }`}
      style={{
        top: `${topPct}%`,
        transform: "translateY(-50%)",
        ...(isLeft
          ? { right: `${100 - leftPct + iconHalfPct}%` }
          : { left: `${leftPct + iconHalfPct}%` }),
      }}
    >
      <p className="consulting-disciplines__label-title">{d.title}</p>
      <p className="consulting-disciplines__label-desc">{d.description}</p>
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
      <div className="relative z-[1] flex flex-col items-center px-[8%] py-[10%]">
        <LogoImage size="compact" className="mx-auto w-full max-w-none" />
      </div>
    </div>
  );
}

export function ConsultingDisciplinesSection() {
  return (
    <section className="consulting-disciplines overflow-hidden bg-[#f5f2ed]">
      <div className="consulting-disciplines__inner mx-auto max-w-[1440px]">
        <p className="consulting-disciplines__eyebrow">06 / DISCIPLINES COORDINATED</p>

        <div className="consulting-disciplines__diagram-wrap">
          <div className="consulting-disciplines__diagram relative hidden max-w-full lg:block">
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
        <div className="consulting-disciplines__mobile mt-6 grid gap-4 sm:grid-cols-2 lg:hidden">
          {DISCIPLINES.map((d) => (
            <div key={d.id} className="flex items-start gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.2px] bg-[#f5f2ed] text-[#b8956c]"
                style={{ borderColor: GOLD }}
                data-discipline-icon={d.id}
              >
                {d.iconSrc ? (
                  <Image src={d.iconSrc} alt="" width={24} height={24} className="object-contain" />
                ) : (
                  <DisciplineIcon id={d.id} className="h-5 w-5" />
                )}
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
