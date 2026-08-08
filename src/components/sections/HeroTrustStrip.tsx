const GOLD = "#c5a059";

const ITEMS = [
  {
    lines: ["Industry roots", "spanning three", "decades"],
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="15.5" stroke={GOLD} strokeWidth="1.2" />
        <path d="M20 7v2.5M20 30.5V33M7 20h2.5M30.5 20H33" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
        <path d="M20 20V11M20 20l7.5-4" stroke={GOLD} strokeWidth="1.25" strokeLinecap="round" />
        <circle cx="20" cy="20" r="1.3" fill={GOLD} />
      </svg>
    ),
  },
  {
    lines: ["Registered", "2001"],
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" fill="none" aria-hidden="true">
        <rect x="7" y="5" width="16" height="23" stroke={GOLD} strokeWidth="1.2" />
        <path d="M11 12h8M11 16h8M11 20h5" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="26" cy="26" r="7" stroke={GOLD} strokeWidth="1.2" />
        <circle cx="26" cy="26" r="3.5" stroke={GOLD} strokeWidth="0.8" />
        <path d="M22.5 32 L24 37 L26 34.5 L28 37 L29.5 32" stroke={GOLD} strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    lines: ["A-Class", "capability"],
    icon: (
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" fill="none" aria-hidden="true">
        <circle cx="20" cy="14" r="9.5" stroke={GOLD} strokeWidth="1.2" />
        <path
          d="M20 7.5 L22 12 L27 12.5 L23.5 15.5 L24.5 20 L20 17.5 L15.5 20 L16.5 15.5 L13 12.5 L18 12 Z"
          stroke={GOLD}
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path d="M15 23 L16.5 34 L20 30.5 L23.5 34 L25 23" stroke={GOLD} strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function HeroTrustStrip() {
  return (
    <div className="relative z-20 mt-auto w-full max-w-[min(40%,31rem)] px-6 pb-6 pt-2 sm:px-8 lg:max-w-[min(40%,31rem)] lg:px-10 lg:pb-7 lg:pt-3 xl:max-w-[min(38%,33rem)] xl:px-12 xl:pl-14">
      <div className="flex items-center justify-between gap-6">
        {ITEMS.map((item) => (
          <div key={item.lines[0]} className="flex items-center gap-3">
            {item.icon}
            <div className="text-[13px] leading-[1.35] text-white">
              {item.lines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
