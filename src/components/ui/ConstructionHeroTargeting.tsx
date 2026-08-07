"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

const GOLD = "#c5a059";
const RED = "#bc2026";

/** Blueprint center — horizontal fraction within the photo column */
const PHOTO_TARGET_X = 0.28;

/** Gold crosshair reticle; red vertical drop continues below via overlay */
function ConstructionHeroCrosshair() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true" className="block">
      <circle cx="28" cy="28" r="23" stroke={GOLD} strokeWidth="1.25" />
      <circle cx="28" cy="28" r="13" stroke={GOLD} strokeWidth="1.1" />
      {/* Gold ticks above center */}
      <line x1="28" y1="3" x2="28" y2="9" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="28" y1="47" x2="28" y2="53" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="3" y1="28" x2="9" y2="28" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="47" y1="28" x2="53" y2="28" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      {/* Short red segment below center — continues as overlay drop line */}
      <line x1="28" y1="28" x2="28" y2="34" stroke={RED} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type TargetGeometry = {
  startX: number;
  lineY: number;
  targetX: number;
  sectionHeight: number;
};

type ConstructionHeroTargetingProps = {
  sectionRef: RefObject<HTMLElement | null>;
  photoRef: RefObject<HTMLElement | null>;
  anchorRef: RefObject<HTMLElement | null>;
};

function measureGeometry(
  section: HTMLElement,
  photo: HTMLElement,
  anchor: HTMLElement,
): TargetGeometry {
  const sectionRect = section.getBoundingClientRect();
  const photoRect = photo.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();

  const startX = anchorRect.right - sectionRect.left;
  const lineY = anchorRect.top + anchorRect.height / 2 - sectionRect.top;
  const targetX = photoRect.left - sectionRect.left + photoRect.width * PHOTO_TARGET_X;

  return {
    startX,
    lineY,
    targetX,
    sectionHeight: sectionRect.height,
  };
}

/** Red targeting lines from View Projects through blueprint crosshair */
export function ConstructionHeroTargeting({
  sectionRef,
  photoRef,
  anchorRef,
}: ConstructionHeroTargetingProps) {
  const [geometry, setGeometry] = useState<TargetGeometry | null>(null);

  useLayoutEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const photo = photoRef.current;
      const anchor = anchorRef.current;
      if (!section || !photo || !anchor) return;

      setGeometry(measureGeometry(section, photo, anchor));
    };

    update();

    const raf = window.requestAnimationFrame(update);
    window.addEventListener("resize", update);

    const section = sectionRef.current;
    const photo = photoRef.current;
    const anchor = anchorRef.current;

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;

    if (observer) {
      if (section) observer.observe(section);
      if (photo) observer.observe(photo);
      if (anchor) observer.observe(anchor);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, [sectionRef, photoRef, anchorRef]);

  if (!geometry) return null;

  const { startX, lineY, targetX, sectionHeight } = geometry;
  const horizontalWidth = Math.max(targetX - startX, 0);

  return (
    <div className="pointer-events-none absolute inset-0 z-[30] hidden lg:block" aria-hidden="true">
      {/* Horizontal red line — level with View Projects button center */}
      <div
        className="absolute bg-nebco-red"
        style={{
          left: startX,
          top: lineY,
          width: horizontalWidth,
          height: "2px",
          transform: "translateY(-50%)",
        }}
      />

      {/* Vertical red drop — centered on crosshair, from center downward */}
      <div
        className="absolute bg-nebco-red"
        style={{
          left: targetX,
          top: lineY,
          width: "2px",
          height: sectionHeight - lineY,
          transform: "translateX(-50%)",
        }}
      />

      {/* Gold crosshair — centered exactly on line intersection */}
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
