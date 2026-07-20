const RED = "#bc2026";
const GOLD = "#c5a059";

/** Red targeting lines + crosshair connecting CTA to the site photo */
export function ConstructionHeroTargeting() {
  return (
    <svg
      className="absolute inset-0 z-20 w-full h-full pointer-events-none hidden lg:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Horizontal line from panel seam toward blueprint focus */}
      <line
        x1="45"
        y1="54"
        x2="61"
        y2="50"
        stroke={RED}
        strokeWidth="0.14"
        vectorEffect="non-scaling-stroke"
      />

      {/* Vertical line through crosshair to bottom */}
      <line
        x1="61"
        y1="50"
        x2="61"
        y2="100"
        stroke={RED}
        strokeWidth="0.14"
        vectorEffect="non-scaling-stroke"
      />

      {/* Outer gold ring */}
      <circle
        cx="61"
        cy="50"
        r="2.6"
        fill="none"
        stroke={GOLD}
        strokeWidth="0.18"
        vectorEffect="non-scaling-stroke"
      />

      {/* Inner red ring */}
      <circle
        cx="61"
        cy="50"
        r="1.35"
        fill="none"
        stroke={RED}
        strokeWidth="0.14"
        vectorEffect="non-scaling-stroke"
      />

      {/* Center dot */}
      <circle cx="61" cy="50" r="0.32" fill={RED} />

      {/* Crosshair ticks */}
      <line x1="61" y1="46.7" x2="61" y2="53.3" stroke={GOLD} strokeWidth="0.1" vectorEffect="non-scaling-stroke" />
      <line x1="57.7" y1="50" x2="64.3" y2="50" stroke={GOLD} strokeWidth="0.1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
