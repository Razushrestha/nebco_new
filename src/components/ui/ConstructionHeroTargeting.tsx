"use client";

import { useLayoutEffect, useState, type RefObject } from "react";

const GOLD = "#c5a059";
const TARGET_X_RATIO = 0.595;

/** Gold crosshair reticle — fixed aspect ratio so rings stay circular */
function ConstructionHeroCrosshair() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true" className="block">
      <circle cx="32" cy="32" r="26" stroke={GOLD} strokeWidth="1.35" />
      <circle cx="32" cy="32" r="15" stroke={GOLD} strokeWidth="1.15" />
      <line x1="32" y1="4" x2="32" y2="10" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="32" y1="54" x2="32" y2="60" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="4" y1="32" x2="10" y2="32" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="54" y1="32" x2="60" y2="32" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
      <line x1="32" y1="26" x2="32" y2="38" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round" />
      <line x1="26" y1="32" x2="38" y2="32" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

type TargetGeometry = {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  sectionHeight: number;
};

type ConstructionHeroTargetingProps = {
  sectionRef: RefObject<HTMLElement | null>;
  anchorRef: RefObject<HTMLElement | null>;
};

function measureGeometry(
  section: HTMLElement,
  anchor: HTMLElement
): TargetGeometry {
  const sectionRect = section.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();

  const startX = anchorRect.right - sectionRect.left;
  const startY = anchorRect.top + anchorRect.height / 2 - sectionRect.top;
  const targetX = sectionRect.width * TARGET_X_RATIO;

  return {
    startX,
    startY,
    targetX,
    targetY: startY,
    sectionHeight: sectionRect.height,
  };
}

/** Red targeting lines anchored to View Projects, with gold crosshair on the photo */
export function ConstructionHeroTargeting({ sectionRef, anchorRef }: ConstructionHeroTargetingProps) {
  const [geometry, setGeometry] = useState<TargetGeometry | null>(null);

  useLayoutEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const anchor = anchorRef.current;
      if (!section || !anchor) return;

      setGeometry(measureGeometry(section, anchor));
    };

    update();

    const raf = window.requestAnimationFrame(update);
    window.addEventListener("resize", update);

    const section = sectionRef.current;
    const observer =
      section && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(update)
        : null;

    if (observer && section) observer.observe(section);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, [sectionRef, anchorRef]);

  if (!geometry) return null;

  const { startX, startY, targetX, targetY, sectionHeight } = geometry;
  const horizontalWidth = Math.max(targetX - startX, 0);

  return (
    <div className="pointer-events-none absolute inset-0 z-[30] hidden lg:block" aria-hidden="true">
      <div
        className="absolute bg-nebco-red"
        style={{
          left: startX,
          top: startY,
          width: horizontalWidth,
          height: "3px",
          transform: "translateY(-50%)",
        }}
      />

      <div
        className="absolute bg-nebco-red"
        style={{
          left: targetX,
          top: targetY,
          width: "3px",
          height: sectionHeight - targetY,
          transform: "translateX(-50%)",
        }}
      />

      <div
        className="absolute"
        style={{
          left: targetX,
          top: targetY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <ConstructionHeroCrosshair />
      </div>
    </div>
  );
}
