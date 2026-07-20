const GOLD = "#c5a059";

function ClockIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="16" stroke={GOLD} strokeWidth="1.15" />
      <line x1="20" y1="20" x2="20" y2="10" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="26.5" y2="15" stroke={GOLD} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="1.2" fill={GOLD} />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0" aria-hidden="true">
      <rect x="6" y="4" width="17" height="24" stroke={GOLD} strokeWidth="1.15" />
      <path d="M10 11h9M10 15h9M10 19h6" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="26" cy="26" r="7.5" stroke={GOLD} strokeWidth="1.15" />
      <circle cx="26" cy="26" r="4" stroke={GOLD} strokeWidth="0.7" />
      <path
        d="M22.5 32.5 L24 37 L26 34.5 L28 37 L29.5 32.5"
        stroke={GOLD}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0" aria-hidden="true">
      <circle cx="20" cy="14" r="10" stroke={GOLD} strokeWidth="1.15" />
      <path
        d="M20 8 L22.2 12.4 L27 13 L23.5 16 L24.5 20.5 L20 18 L15.5 20.5 L16.5 16 L13 13 L17.8 12.4 Z"
        stroke={GOLD}
        strokeWidth="0.95"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 23 L17 34.5 L20 31 L23 34.5 L24.5 23"
        stroke={GOLD}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M17 23 L20 26 L23 23" stroke={GOLD} strokeWidth="0.7" />
    </svg>
  );
}

const TRUST_ITEMS = [
  {
    icon: <ClockIcon />,
    lines: ["Industry roots", "spanning three decades"],
  },
  {
    icon: <CertificateIcon />,
    lines: ["Registered", "2001"],
  },
  {
    icon: <MedalIcon />,
    lines: ["A-Class", "capability"],
  },
] as const;

export function HeroTrustStrip() {
  return (
    <div className="relative z-20 w-full mt-auto">
      <div className="px-6 sm:px-8 lg:px-12 xl:px-[56px] pb-6 lg:pb-7 pt-2">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 lg:gap-12 xl:gap-14 max-w-4xl">
          {TRUST_ITEMS.map((item) => (
            <div key={item.lines.join("-")} className="flex items-center gap-3.5 shrink-0">
              {item.icon}
              <div
                className="text-[13px] leading-[1.35] font-normal font-sans"
                style={{ color: GOLD }}
              >
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
    </div>
  );
}
