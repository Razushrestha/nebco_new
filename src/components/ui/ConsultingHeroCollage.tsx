import Image from "next/image";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

const SUMMARY_ROWS = [
  { label: "Land Value", value: "NPR 42.5M" },
  { label: "Total Built-up Area", value: "18,400 sq.ft." },
  { label: "Construction Cost", value: "NPR 68.2M" },
  { label: "Development Margin", value: "22.4%" },
  { label: "Projected Yield", value: "14.8%" },
] as const;

function HouseWireframe() {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="0.9" opacity="0.88">
        <path d="M20 72 L60 38 L100 72" />
        <rect x="28" y="72" width="64" height="22" />
        <line x1="44" y1="72" x2="44" y2="94" />
        <line x1="76" y1="72" x2="76" y2="94" />
        <rect x="52" y="80" width="16" height="14" />
        <line x1="36" y1="79" x2="36" y2="87" />
        <line x1="84" y1="79" x2="84" y2="87" />
        <path d="M32 94 L32 98 M88 94 L88 98" strokeWidth="0.7" />
      </g>
    </svg>
  );
}

function DevelopmentPieChart() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden="true">
      <circle cx="40" cy="40" r="32" fill="#d4c4a8" opacity="0.35" />
      <path d="M40 40 L40 8 A32 32 0 0 1 68 52 Z" fill="#9a8b72" opacity="0.55" />
      <path d="M40 40 L68 52 A32 32 0 0 1 24 64 Z" fill="#c5b89a" opacity="0.5" />
      <path d="M40 40 L24 64 A32 32 0 0 1 40 8 Z" fill="#e8dfd0" opacity="0.45" />
      <circle cx="40" cy="40" r="14" fill="#1a1a1a" opacity="0.15" />
    </svg>
  );
}

export function ConsultingHeroCollage() {
  return (
    <div className="absolute inset-0">
      <Image
        src={IMAGES.brickBuilding}
        alt="Modern residential building in an urban setting"
        fill
        className="object-cover object-[center_35%]"
        priority
        sizes="(max-width: 1024px) 100vw, 58vw"
      />

      {/* Sketch fade from left panel */}
      <div
        className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-[#111111] via-[#111111]/55 to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />
      <div className="hero-grid-bg absolute inset-y-0 left-0 w-[32%] opacity-30 pointer-events-none z-[2]" aria-hidden="true" />

      {/* Top-right wireframe */}
      <div className="absolute top-[6%] right-[4%] w-[28%] max-w-[9.5rem] aspect-[6/5] z-[4] opacity-90">
        <HouseWireframe />
      </div>

      {/* Development summary table */}
      <div className="absolute top-[7%] right-[22%] sm:right-[24%] lg:right-[26%] w-[40%] max-w-[12rem] z-[5] bg-black/40 backdrop-blur-[2px] border border-white/12 px-3.5 py-3">
        <p
          className="font-mono text-[9px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.14em] mb-2 pb-2 border-b border-white/15"
          style={{ color: GOLD }}
        >
          Development Summary
        </p>
        <dl className="space-y-1.5">
          {SUMMARY_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex justify-between gap-2.5 text-[8px] sm:text-[8px] lg:text-[9px] xl:text-[10px] leading-snug"
            >
              <dt className="text-white/55 shrink-0">{row.label}</dt>
              <dd className="text-white/85 font-medium text-right">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Pie chart */}
      <div className="absolute top-[34%] right-[8%] w-[18%] max-w-[4.5rem] aspect-square z-[4] opacity-85">
        <DevelopmentPieChart />
      </div>

      {/* Team meeting inset */}
      <div
        className="absolute bottom-0 right-0 w-[62%] sm:w-[54%] lg:w-[50%] h-[48%] sm:h-[45%] z-[6] overflow-hidden"
        style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-[1] pointer-events-none" />
        <Image
          src={IMAGES.meetingOffice}
          alt="Consulting professionals reviewing development plans"
          fill
          className="object-cover object-[center_30%]"
          sizes="30vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#111111]/40 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Subtle top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15 pointer-events-none z-[3]" aria-hidden="true" />
    </div>
  );
}
