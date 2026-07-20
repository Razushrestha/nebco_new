import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "hero";
  className?: string;
  showSubtitle?: boolean;
}

function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="tower-main" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8eaed" />
          <stop offset="50%" stopColor="#b8bcc4" />
          <stop offset="100%" stopColor="#8a9099" />
        </linearGradient>
        <linearGradient id="tower-side" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c5c9d0" />
          <stop offset="100%" stopColor="#9aa0a8" />
        </linearGradient>
        <linearGradient id="tower-accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d0d4da" />
          <stop offset="100%" stopColor="#a0a6ae" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="27" fill="#bc2026" />
      {/* Center tower */}
      <rect x="24" y="9" width="8" height="30" fill="url(#tower-main)" rx="0.5" />
      {/* Left tower */}
      <rect x="15" y="17" width="7" height="22" fill="url(#tower-side)" />
      {/* Right tower */}
      <rect x="34" y="15" width="7" height="24" fill="url(#tower-accent)" />
      {/* Windows */}
      <rect x="17" y="20" width="2" height="2" fill="#6b7280" opacity="0.8" />
      <rect x="17" y="25" width="2" height="2" fill="#6b7280" opacity="0.8" />
      <rect x="17" y="30" width="2" height="2" fill="#6b7280" opacity="0.8" />
      <rect x="26" y="13" width="2" height="2" fill="#6b7280" opacity="0.7" />
      <rect x="26" y="18" width="2" height="2" fill="#6b7280" opacity="0.7" />
      <rect x="26" y="23" width="2" height="2" fill="#6b7280" opacity="0.7" />
      <rect x="26" y="28" width="2" height="2" fill="#6b7280" opacity="0.7" />
      <rect x="36" y="19" width="2" height="2" fill="#6b7280" opacity="0.8" />
      <rect x="36" y="24" width="2" height="2" fill="#6b7280" opacity="0.8" />
      <rect x="36" y="29" width="2" height="2" fill="#6b7280" opacity="0.8" />
      <line x1="11" y1="39" x2="45" y2="39" stroke="#a8adb5" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo({ variant = "dark", className = "", showSubtitle = true }: LogoProps) {
  const isHero = variant === "hero";
  const nameColor = isHero ? "text-nebco-red" : variant === "light" ? "text-white" : "text-arch-black";
  const subtitleColor = isHero
    ? "text-white/85"
    : variant === "light"
      ? "text-white/60"
      : "text-silver-graphite";

  if (isHero) {
    return (
      <Link href="/" className={`flex flex-col items-center group shrink-0 ${className}`}>
        <LogoMark size={46} />
        <span
          className={`font-serif font-bold text-[1.15rem] tracking-[0.04em] uppercase mt-1.5 leading-none ${nameColor}`}
          style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
        >
          NEBCO
        </span>
        {showSubtitle && (
          <span
            className={`text-[8.5px] tracking-[0.22em] uppercase mt-1 font-normal ${subtitleColor}`}
          >
            A Class Company
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex items-center gap-3 group shrink-0 ${className}`}>
      <LogoMark size={40} />
      <div className="flex flex-col leading-tight">
        <span className={`font-heading font-extrabold text-[1.35rem] tracking-tight uppercase ${nameColor}`}>
          NEBCO
        </span>
        {showSubtitle && (
          <span className={`text-[10px] tracking-[0.18em] uppercase mt-0.5 font-medium ${subtitleColor}`}>
            From Land to Landmark
          </span>
        )}
      </div>
    </Link>
  );
}
