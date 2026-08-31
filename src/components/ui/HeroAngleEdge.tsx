import type { CSSProperties } from "react";

export type HeroAngle = { readonly top: number; readonly bottom: number };

/**
 * Homepage hero diagonal - original reference:
 * ~36% at top → ~44% at bottom (panel narrows at top, opens toward bottom-right).
 */
export const HOME_HERO_ANGLE: HeroAngle = { top: 36, bottom: 44 };

/** @deprecated Use HOME_HERO_ANGLE for homepage; kept for investments hero */
export const HERO_ANGLE = HOME_HERO_ANGLE;

/** Red seam - thin accent (~4-6px on desktop) */
export const HOME_HERO_RED_BAND = 0.52;

/**
 * Investments hero - ~50/50 split, slight `/` diagonal,
 * red accent thicker at top and tapering down the seam.
 */
export const INVESTMENTS_HERO_ANGLE: HeroAngle = { top: 50, bottom: 54 };

/** Right edge of red wedge at top (%). */
export const INVESTMENTS_RED_TOP_RIGHT = 60;

/** Tip of red accent on the panel diagonal. */
export const INVESTMENTS_RED_TIP = {
  x:
    INVESTMENTS_HERO_ANGLE.top +
    (INVESTMENTS_HERO_ANGLE.bottom - INVESTMENTS_HERO_ANGLE.top) * 0.72,
  y: 72,
} as const;

export function heroPanelClipPath(angle: HeroAngle = HOME_HERO_ANGLE) {
  return `polygon(0 0, ${angle.top}% 0, ${angle.bottom}% 100%, 0 100%)`;
}

export function heroPhotoClipPath(angle: HeroAngle = HOME_HERO_ANGLE) {
  return `polygon(${angle.top}% 0, 100% 0, 100% 100%, ${angle.bottom}% 100%)`;
}

function bandOuter(angle: HeroAngle, band: number, x: number, y: number) {
  const dx = angle.bottom - angle.top;
  const dy = 100;
  const len = Math.hypot(dx, dy);
  const nx = (dy / len) * band;
  const ny = (-dx / len) * band;
  return { x: x + nx, y: y + ny };
}

function seamPoints(angle: HeroAngle, band: number) {
  const topOuter = bandOuter(angle, band, angle.top, 0);
  const bottomOuter = bandOuter(angle, band, angle.bottom, 100);

  return [
    `${angle.top},0`,
    `${angle.bottom},100`,
    `${bottomOuter.x},${bottomOuter.y}`,
    `${topOuter.x},${topOuter.y}`,
  ].join(" ");
}

function wedgePoints(angle: HeroAngle, topRight: number, tip: { x: number; y: number }) {
  return [`${angle.top},0`, `${topRight},0`, `${tip.x},${tip.y}`].join(" ");
}

export function heroAngleStyle(angle: HeroAngle = HOME_HERO_ANGLE): CSSProperties {
  return {
    ["--hero-angle-top" as string]: `${angle.top}%`,
    ["--hero-angle-bottom" as string]: `${angle.bottom}%`,
  };
}

type HeroAngleLayersProps = {
  angle?: HeroAngle;
  redBand?: number;
  redWedge?: {
    topRight: number;
    tip: { readonly x: number; readonly y: number };
  };
};

export function HeroAngleLayers({
  angle = HOME_HERO_ANGLE,
  redBand = HOME_HERO_RED_BAND,
  redWedge,
}: HeroAngleLayersProps = {}) {
  const clip = heroPanelClipPath(angle);
  const redBandPoints = redWedge
    ? wedgePoints(angle, redWedge.topRight, redWedge.tip)
    : seamPoints(angle, redBand);

  const shadowBand = (() => {
    if (redWedge) {
      const { topRight, tip } = redWedge;
      const o = 1.2;
      return [
        `${topRight},0`,
        `${tip.x},${tip.y}`,
        `${tip.x + o},${tip.y}`,
        `${topRight + o},0`,
      ].join(" ");
    }

    const topOuter = bandOuter(angle, redBand, angle.top, 0);
    const bottomOuter = bandOuter(angle, redBand, angle.bottom, 100);
    const dx = angle.bottom - angle.top;
    const dy = 100;
    const len = Math.hypot(dx, dy);
    const shadowOffset = 1.4;
    const nx = (dy / len) * shadowOffset;
    const ny = (-dx / len) * shadowOffset;
    const topShadow = { x: topOuter.x + nx, y: topOuter.y + ny };
    const bottomShadow = { x: bottomOuter.x + nx, y: bottomOuter.y + ny };
    return [
      `${topOuter.x},${topOuter.y}`,
      `${bottomOuter.x},${bottomOuter.y}`,
      `${bottomShadow.x},${bottomShadow.y}`,
      `${topShadow.x},${topShadow.y}`,
    ].join(" ");
  })();

  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 z-[8] hidden h-full w-full lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="hero-seam-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.9" />
          </filter>
        </defs>
        <polygon points={shadowBand} fill="rgba(0,0,0,0.28)" filter="url(#hero-seam-shadow)" />
      </svg>

      <svg
        className="pointer-events-none absolute inset-0 z-[9] hidden h-full w-full lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points={redBandPoints} fill="#bc2026" />
      </svg>

      <div
        className="hero-grid-bg pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{ clipPath: clip, backgroundColor: "#111111" }}
        aria-hidden="true"
      />
    </>
  );
}
