const STROKE = "#a8864d";

/**
 * Far-right margin marker — hairline vertical with a short horizontal cross
 * intersecting ~14% from the top (matches design reference proportions).
 */
export function StageMarginRail() {
  return (
    <div
      className="pointer-events-none absolute bottom-[9%] right-7 top-[5%] hidden w-[10px] lg:block xl:right-9"
      aria-hidden="true"
    >
      <svg className="h-full w-full" viewBox="0 0 10 100" preserveAspectRatio="none" fill="none">
        <line
          x1="5"
          y1="0"
          x2="5"
          y2="100"
          stroke={STROKE}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="0"
          y1="14"
          x2="10"
          y2="14"
          stroke={STROKE}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
