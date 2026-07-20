/**
 * Layered hero angle — red band parallel to black panel edge.
 * Used inside the hero body (below the solid black navbar).
 */

export const HERO_ANGLE = { top: 54, bottom: 47 } as const;
const RED_BAND_WIDTH = 1.6;

function bandOuterPoint(x: number, y: number) {
  const dx = HERO_ANGLE.bottom - HERO_ANGLE.top;
  const dy = 100;
  const len = Math.hypot(dx, dy);
  const nx = (dy / len) * RED_BAND_WIDTH;
  const ny = (-dx / len) * RED_BAND_WIDTH;
  return { x: x + nx, y: y + ny };
}

export function HeroAngleLayers() {
  const topOuter = bandOuterPoint(HERO_ANGLE.top, 0);
  const bottomOuter = bandOuterPoint(HERO_ANGLE.bottom, 100);

  const redBandPoints = [
    `${HERO_ANGLE.top},0`,
    `${HERO_ANGLE.bottom},100`,
    `${bottomOuter.x},${bottomOuter.y}`,
    `${topOuter.x},${topOuter.y}`,
  ].join(" ");

  return (
    <>
      <svg
        className="absolute inset-0 z-[1] w-full h-full pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points={redBandPoints} fill="#bc2026" />
      </svg>

      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden lg:block hero-panel-clip hero-grid-bg"
        style={{ backgroundColor: "#111111" }}
        aria-hidden="true"
      />

      {/* Shadow on the right of the red seam */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(88deg, transparent 0%, transparent 52%, rgba(0,0,0,0.18) 54%, rgba(0,0,0,0.32) 56%, transparent 58%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
