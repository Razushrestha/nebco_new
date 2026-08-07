/** Layered diagonal red + left vignette on the Start a Project photo */
export function StartProjectPhotoOverlay() {
  return (
    <>
      <svg
        className="absolute inset-0 z-10 h-full w-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sp-dark-vignette" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
            <stop offset="30%" stopColor="#000000" stopOpacity="0.28" />
            <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="sp-red-main" x1="0%" y1="0%" x2="100%" y2="55%">
            <stop offset="0%" stopColor="#bc2026" stopOpacity="0.92" />
            <stop offset="50%" stopColor="#bc2026" stopOpacity="0.74" />
            <stop offset="100%" stopColor="#bc2026" stopOpacity="0.18" />
          </linearGradient>

          <linearGradient id="sp-red-deep" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#731215" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#bc2026" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100" height="100" fill="url(#sp-dark-vignette)" />
        <polygon points="0,0 34,0 0,100" fill="url(#sp-red-deep)" />
        <polygon points="0,0 44,0 12,100 0,100" fill="url(#sp-red-main)" />
        <polygon points="0,0 30,0 7,100 0,100" fill="#bc2026" fillOpacity="0.24" />
        <line
          x1="44"
          y1="0"
          x2="12"
          y2="100"
          stroke="#bc2026"
          strokeWidth="0.65"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div
        className="absolute inset-0 z-[12] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,26,26,0.18) 0%, transparent 28%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
