import { heroPanelClipPath, type HeroAngle } from "@/components/ui/HeroAngleEdge";

/** Architectural wireframe texture inside the dark hero panel */
export function HeroBlueprintOverlay({ angle }: { angle?: HeroAngle } = {}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[11] hidden h-full w-full opacity-[0.14] lg:block"
      style={{ clipPath: heroPanelClipPath(angle) }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="0.11" fill="none">
        <rect x="4" y="18" width="34" height="58" />
        <line x1="4" y1="28" x2="38" y2="28" />
        <line x1="4" y1="38" x2="38" y2="38" />
        <line x1="4" y1="48" x2="38" y2="48" />
        <line x1="4" y1="58" x2="38" y2="58" />
        <line x1="4" y1="68" x2="38" y2="68" />
        <line x1="21" y1="18" x2="21" y2="76" />
        <rect x="38" y="32" width="14" height="44" />
        <line x1="38" y1="42" x2="52" y2="42" />
        <line x1="38" y1="52" x2="52" y2="52" />
        <line x1="38" y1="62" x2="52" y2="62" />
        <line x1="45" y1="32" x2="45" y2="76" />
        <line x1="4" y1="18" x2="21" y2="38" opacity="0.55" />
        <line x1="38" y1="18" x2="21" y2="38" opacity="0.55" />
        <line x1="2" y1="80" x2="56" y2="80" strokeWidth="0.07" opacity="0.45" />
        <line x1="2" y1="14" x2="28" y2="14" strokeWidth="0.07" opacity="0.4" />
      </g>
    </svg>
  );
}
