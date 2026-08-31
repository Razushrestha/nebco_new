"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

const GOLD = "#c5a059";
const RED = "#bc2026";

/** Person / site focal point - fraction across the photo column */
const PHOTO_TARGET_X = 0.36;

/**
 * Gold concentric target. Red arms continue the overlay lines through center.
 */
function ConstructionHeroCrosshair() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true" className="block drop-shadow-sm">
      <circle cx="36" cy="36" r="29" stroke={GOLD} strokeWidth="1.5" />
      <circle cx="36" cy="36" r="17" stroke={GOLD} strokeWidth="1.35" />

      {/* Gold - up + right */}
      <line x1="36" y1="1" x2="36" y2="12" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="36" y1="7" x2="36" y2="22" stroke={GOLD} strokeWidth="1.25" strokeLinecap="round" />
      <line x1="60" y1="36" x2="71" y2="36" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="36" x2="65" y2="36" stroke={GOLD} strokeWidth="1.25" strokeLinecap="round" />

      {/* Red - left + down (meet overlay strokes) */}
      <line x1="1" y1="36" x2="36" y2="36" stroke={RED} strokeWidth="2.25" strokeLinecap="round" />
      <line x1="36" y1="36" x2="36" y2="71" stroke={RED} strokeWidth="2.25" strokeLinecap="round" />

      <circle cx="36" cy="36" r="2.4" fill={RED} />
    </svg>
  );
}

type TargetGeometry = {
  startX: number;
  lineY: number;
  targetX: number;
  dropHeight: number;
};

type ConstructionHeroTargetingProps = {
  sectionRef: RefObject<HTMLElement | null>;
  photoRef: RefObject<HTMLElement | null>;
  /** Element whose right-center is the line origin (View Projects control) */
  anchorEl: HTMLElement | null;
};

function readGeometry(
  section: HTMLElement,
  photo: HTMLElement,
  anchor: HTMLElement,
): TargetGeometry | null {
  const s = section.getBoundingClientRect();
  const p = photo.getBoundingClientRect();
  const a = anchor.getBoundingClientRect();

  if (s.width < 32 || p.width < 32 || a.width < 8 || a.height < 8) return null;

  const startX = a.right - s.left;
  const lineY = a.top + a.height / 2 - s.top;
  const targetX = p.left - s.left + p.width * PHOTO_TARGET_X;

  // Need the target to sit to the right of the button
  if (targetX - startX < 24) return null;

  return {
    startX,
    lineY,
    targetX,
    dropHeight: Math.max(s.height - lineY, 48),
  };
}

/** Red line from View Projects + gold target on the construction photo */
export function ConstructionHeroTargeting({
  sectionRef,
  photoRef,
  anchorEl,
}: ConstructionHeroTargetingProps) {
  const [geometry, setGeometry] = useState<TargetGeometry | null>(null);

  useLayoutEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const photo = photoRef.current;
      if (!section || !photo || !anchorEl) {
        setGeometry(null);
        return;
      }
      setGeometry(readGeometry(section, photo, anchorEl));
    };

    update();

    const timers = [0, 50, 150, 400].map((ms) => window.setTimeout(update, ms));
    const raf = window.requestAnimationFrame(update);

    window.addEventListener("resize", update);
    window.addEventListener("load", update);

    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    const section = sectionRef.current;
    const photo = photoRef.current;
    if (observer) {
      if (section) observer.observe(section);
      if (photo) observer.observe(photo);
      if (anchorEl) observer.observe(anchorEl);
    }

    return () => {
      timers.forEach(clearTimeout);
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
      observer?.disconnect();
    };
  }, [sectionRef, photoRef, anchorEl]);

  if (!geometry) return null;

  const { startX, lineY, targetX, dropHeight } = geometry;

  return (
    <div
      className="construction-hero__targeting pointer-events-none absolute inset-0 z-[50] hidden lg:block"
      aria-hidden="true"
    >
      {/* Horizontal red - button mid → target center */}
      <div
        className="absolute"
        style={{
          left: startX,
          top: lineY - 1,
          width: targetX - startX,
          height: 2,
          backgroundColor: RED,
        }}
      />

      {/* Vertical red drop */}
      <div
        className="absolute"
        style={{
          left: targetX - 1,
          top: lineY,
          width: 2,
          height: dropHeight,
          backgroundColor: RED,
        }}
      />

      {/* Gold target */}
      <div
        className="absolute"
        style={{
          left: targetX,
          top: lineY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <ConstructionHeroCrosshair />
      </div>
    </div>
  );
}
