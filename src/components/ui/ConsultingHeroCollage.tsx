import Image from "next/image";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

const SUMMARY_ROWS = [
  { label: "Land Area (sq. ft.)", value: "12,450" },
  { label: "Total Built-up Area", value: "48,200" },
  { label: "Saleable / Leasable", value: "36,800" },
  { label: "Construction Cost", value: "NPR 68.2M" },
  { label: "Total Project Cost", value: "NPR 112M" },
  { label: "Estimated Revenue", value: "NPR 148M" },
  { label: "Project IRR", value: "18.6%" },
  { label: "Project Duration", value: "28 mo" },
] as const;

function HouseWireframe() {
  return (
    <svg viewBox="0 0 160 130" fill="none" className="h-full w-full" aria-hidden="true">
      <g stroke="white" strokeWidth="0.85" opacity="0.72">
        {/* Isometric-ish frame */}
        <path d="M28 88 L80 42 L132 88" />
        <path d="M28 88 L28 118 L80 98 L132 118 L132 88" />
        <path d="M80 42 L80 98" />
        <path d="M28 88 L80 72 L132 88" opacity="0.55" />
        <path d="M52 102 L52 78 M108 102 L108 78" opacity="0.5" />
        <rect x="70" y="82" width="20" height="16" opacity="0.65" />
        {/* Floor plan ghost */}
        <path
          d="M98 28 H148 V58 H128 V48 H118 V58 H98 Z"
          opacity="0.4"
          strokeWidth="0.7"
        />
        <path d="M108 28 V38 M128 28 V38" opacity="0.35" strokeWidth="0.65" />
      </g>
    </svg>
  );
}

function DevelopmentPieChart() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
      <circle cx="40" cy="40" r="32" fill="#c5b89a" opacity="0.45" />
      <path d="M40 40 L40 8 A32 32 0 0 1 70 54 Z" fill="#9a8b72" opacity="0.7" />
      <path d="M40 40 L70 54 A32 32 0 0 1 22 62 Z" fill="#e8dfd0" opacity="0.55" />
      <path d="M40 40 L22 62 A32 32 0 0 1 40 8 Z" fill="#a8864d" opacity="0.55" />
      <circle cx="40" cy="40" r="13" fill="#1a1a1a" opacity="0.18" />
    </svg>
  );
}

/** Right panel: clean photography + coded overlays (table, wireframe, trend). */
export function ConsultingHeroCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
      {/* Base — building photo (no baked graphics) */}
      <Image
        src={IMAGES.brickBuilding}
        alt="Modern residential building in an urban valley setting"
        fill
        className="object-cover object-[center_30%]"
        priority
        sizes="(max-width: 1024px) 100vw, 60vw"
      />

      {/* Right-side light panel wash for sketches / table */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[48%] bg-gradient-to-l from-white/55 via-white/20 to-transparent"
        aria-hidden="true"
      />

      {/* Blend into dark left content panel */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[20%] bg-gradient-to-r from-[#111111] via-[#111111]/65 to-transparent sm:w-[16%] lg:w-[12%]"
        aria-hidden="true"
      />
      <div
        className="hero-grid-bg pointer-events-none absolute inset-y-0 left-0 z-[2] w-[24%] opacity-30 sm:w-[18%] lg:w-[14%]"
        aria-hidden="true"
      />

      {/* Architectural wireframe */}
      <div className="absolute top-[5%] right-[3%] z-[4] aspect-[8/6.5] w-[34%] max-w-[11rem] opacity-90 sm:right-[4%] sm:w-[30%]">
        <HouseWireframe />
      </div>

      {/* Development summary — HTML table for crisp type */}
      <div className="absolute top-[7%] right-[18%] z-[5] w-[44%] max-w-[13.5rem] border border-white/15 bg-black/45 px-3.5 py-3 backdrop-blur-[3px] sm:right-[20%] lg:right-[22%] lg:max-w-[14.5rem]">
        <p
          className="mb-2 border-b border-white/15 pb-2 font-mono text-[9px] uppercase tracking-[0.14em] lg:text-[10px]"
          style={{ color: GOLD }}
        >
          Development Summary
        </p>
        <dl className="space-y-1.5">
          {SUMMARY_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex justify-between gap-3 text-[8px] leading-snug sm:text-[8.5px] lg:text-[9.5px]"
            >
              <dt className="shrink-0 text-white/55">{row.label}</dt>
              <dd className="text-right font-medium text-white/90">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Pie chart */}
      <div className="absolute top-[38%] right-[6%] z-[4] aspect-square w-[16%] max-w-[4.75rem] opacity-90 sm:right-[7%]">
        <DevelopmentPieChart />
      </div>

      {/* Meeting inset */}
      <div
        className="absolute bottom-0 right-0 z-[6] h-[46%] w-[64%] overflow-hidden sm:h-[44%] sm:w-[56%] lg:w-[52%]"
        style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src={IMAGES.consultingMeeting}
          alt="Consultants reviewing architectural plans"
          fill
          className="object-cover object-[center_25%]"
          sizes="32vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111]/35"
          aria-hidden="true"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-b from-black/20 via-transparent to-black/10"
        aria-hidden="true"
      />
    </div>
  );
}
