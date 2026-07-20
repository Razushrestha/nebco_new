/** Wireframe sketch overlay on the building photo (left edge near diagonal) */
export function HeroPhotoWireframe() {
  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none hidden lg:block"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 8%, transparent 22%)",
        maskImage: "linear-gradient(90deg, black 0%, black 18%, transparent 32%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 18%, transparent 32%)",
      }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.55]"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="white" strokeWidth="0.14" fill="none">
          <rect x="48" y="18" width="28" height="62" />
          <line x1="48" y1="28" x2="76" y2="28" />
          <line x1="48" y1="38" x2="76" y2="38" />
          <line x1="48" y1="48" x2="76" y2="48" />
          <line x1="48" y1="58" x2="76" y2="58" />
          <line x1="48" y1="68" x2="76" y2="68" />
          <line x1="62" y1="18" x2="62" y2="80" />
          <line x1="48" y1="18" x2="62" y2="38" opacity="0.5" />
          <line x1="76" y1="18" x2="62" y2="38" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
