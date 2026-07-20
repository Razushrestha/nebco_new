/** Layered diagonal red + left vignette on the Start a Project photo */
export function StartProjectPhotoOverlay() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-nebco-red z-30" aria-hidden="true" />

      <svg
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sp-dark-vignette" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
            <stop offset="28%" stopColor="#000000" stopOpacity="0.22" />
            <stop offset="52%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="sp-red-main" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#bc2026" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#bc2026" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#bc2026" stopOpacity="0.38" />
          </linearGradient>

          <linearGradient id="sp-red-deep" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#8f1519" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#bc2026" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base dark shade — darkest at left, fades toward center */}
        <rect width="100" height="100" fill="url(#sp-dark-vignette)" />

        {/* Deep red wash in far-left corner for depth */}
        <polygon points="0,0 32,0 0,100" fill="url(#sp-red-deep)" />

        {/* Primary diagonal red panel (~left third) */}
        <polygon points="0,0 42,0 11,100 0,100" fill="url(#sp-red-main)" />

        {/* Secondary inner layer — tighter, slightly more opaque at top-left */}
        <polygon points="0,0 28,0 6,100 0,100" fill="#bc2026" fillOpacity="0.22" />

        {/* Solid red diagonal edge */}
        <line
          x1="42"
          y1="0"
          x2="11"
          y2="100"
          stroke="#bc2026"
          strokeWidth="0.7"
          vectorEffect="non-scaling-stroke"
        />

        {/* Dark shadow just outside the seam */}
        <line
          x1="42.6"
          y1="0"
          x2="11.6"
          y2="100"
          stroke="rgba(0,0,0,0.35)"
          strokeWidth="0.45"
          vectorEffect="non-scaling-stroke"
        />

        {/* Soft highlight inside the seam */}
        <line
          x1="41.3"
          y1="1"
          x2="10.5"
          y2="99"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Gentle fade along diagonal into the photo */}
      <div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background:
            "linear-gradient(112deg, transparent 36%, rgba(0,0,0,0.08) 42%, transparent 48%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
