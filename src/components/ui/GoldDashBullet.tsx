const GOLD = "#c5a059";

/** Thin gold dash - fixed 30×1px for consistent bullet lines */
export function GoldDashBullet() {
  return (
    <span className="gold-dash-bullet" aria-hidden="true">
      <svg width="30" height="2" viewBox="0 0 30 2" fill="none">
        <line
          x1="0"
          y1="1"
          x2="30"
          y2="1"
          stroke={GOLD}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
