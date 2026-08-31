import { heroPhotoClipPath, HOME_HERO_ANGLE } from "@/components/ui/HeroAngleEdge";

/** Wireframe on photo - blueprint near seam, fades to full render on the right */
export function HeroPhotoWireframe() {
  const seamMid = (HOME_HERO_ANGLE.top + HOME_HERO_ANGLE.bottom) / 2;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
      style={{ clipPath: heroPhotoClipPath() }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{
          maskImage:
            "linear-gradient(90deg, black 0%, black 14%, rgba(0,0,0,0.7) 26%, rgba(0,0,0,0.35) 40%, transparent 58%)",
          WebkitMaskImage:
            "linear-gradient(90deg, black 0%, black 14%, rgba(0,0,0,0.7) 26%, rgba(0,0,0,0.35) 40%, transparent 58%)",
          opacity: 0.9,
        }}
      >
        <g stroke="white" strokeWidth="0.11" fill="none">
          <rect x={seamMid - 2} y="10" width="36" height="76" />
          <line x1={seamMid - 2} y1="20" x2={seamMid + 34} y2="20" />
          <line x1={seamMid - 2} y1="30" x2={seamMid + 34} y2="30" />
          <line x1={seamMid - 2} y1="40" x2={seamMid + 34} y2="40" />
          <line x1={seamMid - 2} y1="50" x2={seamMid + 34} y2="50" />
          <line x1={seamMid - 2} y1="60" x2={seamMid + 34} y2="60" />
          <line x1={seamMid - 2} y1="70" x2={seamMid + 34} y2="70" />
          <line x1={seamMid - 2} y1="80" x2={seamMid + 34} y2="80" />
          <line x1={seamMid + 8} y1="10" x2={seamMid + 8} y2="86" />
          <line x1={seamMid + 18} y1="10" x2={seamMid + 18} y2="86" />
          <line x1={seamMid + 28} y1="10" x2={seamMid + 28} y2="86" />
          <line x1={seamMid - 2} y1="10" x2={seamMid + 18} y2="34" opacity="0.45" />
          <line x1={seamMid + 34} y1="10" x2={seamMid + 18} y2="34" opacity="0.45" />
        </g>
      </svg>
    </div>
  );
}
