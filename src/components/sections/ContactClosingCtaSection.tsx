import Link from "next/link";

function HouseBlueprint() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 1440 180"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="1.05">
        {/* Left house cluster */}
        <path d="M80 130 L160 70 L240 130" />
        <rect x="100" y="130" width="120" height="70" />
        <rect x="130" y="150" width="28" height="50" />
        <rect x="175" y="148" width="22" height="22" />
        <line x1="80" y1="130" x2="240" y2="130" />

        {/* Mid low roof */}
        <path d="M280 145 L340 95 L400 145" />
        <rect x="295" y="145" width="90" height="55" />
        <rect x="318" y="158" width="20" height="20" />
        <rect x="350" y="158" width="20" height="42" />

        {/* Tall building */}
        <rect x="450" y="40" width="90" height="160" />
        <line x1="450" y1="70" x2="540" y2="70" />
        <line x1="450" y1="100" x2="540" y2="100" />
        <line x1="450" y1="130" x2="540" y2="130" />
        <line x1="450" y1="160" x2="540" y2="160" />
        <line x1="480" y1="40" x2="480" y2="200" />
        <line x1="510" y1="40" x2="510" y2="200" />

        {/* Center gable */}
        <path d="M580 120 L680 55 L780 120" />
        <rect x="605" y="120" width="150" height="80" />
        <rect x="655" y="145" width="50" height="55" />
        <rect x="620" y="140" width="22" height="22" />
        <rect x="720" y="140" width="22" height="22" />

        {/* Right houses */}
        <path d="M820 135 L900 80 L980 135" />
        <rect x="840" y="135" width="120" height="65" />
        <rect x="870" y="150" width="24" height="50" />
        <rect x="915" y="150" width="20" height="20" />

        <path d="M1020 140 L1120 70 L1220 140" />
        <rect x="1045" y="140" width="150" height="60" />
        <line x1="1045" y1="160" x2="1195" y2="160" />
        <rect x="1095" y="155" width="50" height="45" />

        <rect x="1260" y="50" width="100" height="150" />
        <line x1="1260" y1="85" x2="1360" y2="85" />
        <line x1="1260" y1="120" x2="1360" y2="120" />
        <line x1="1260" y1="155" x2="1360" y2="155" />
        <line x1="1293" y1="50" x2="1293" y2="200" />
        <line x1="1326" y1="50" x2="1326" y2="200" />

        <line x1="40" y1="200" x2="1400" y2="200" strokeWidth="0.85" opacity="0.7" />
      </g>
    </svg>
  );
}

/**
 * Contact closing CTA — red band, house blueprint, outlined enquiry button.
 */
export function ContactClosingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-nebco-red">
      <HouseBlueprint />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-11 sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:gap-12 lg:px-10 lg:py-14 xl:px-12">
        <div className="max-w-[34rem]">
          <h2 className="type-h2 tracking-[-0.02em] text-white">
            Tell us what you are planning.
          </h2>
          <p className="mt-2.5 text-[14px] leading-[1.55] text-white/90 sm:mt-3 sm:text-[15px]">
            We are here to help you build it right.
          </p>
        </div>

        <Link
          href="#form"
          className="inline-flex shrink-0 items-center gap-2.5 border border-white px-7 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-nebco-red sm:px-8 sm:py-4 sm:text-[12px]"
        >
          Submit Your Enquiry
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
