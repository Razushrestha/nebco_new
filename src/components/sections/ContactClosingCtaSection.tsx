import Link from "next/link";

/** Faint house / skyline wireframe across the red CTA band */
function HouseBlueprint() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
      viewBox="0 0 1440 140"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="1.1" strokeLinejoin="round">
        {/* Left houses */}
        <path d="M40 95 L110 45 L180 95" />
        <rect x="58" y="95" width="104" height="55" />
        <rect x="85" y="112" width="22" height="38" />
        <rect x="120" y="108" width="18" height="18" />

        <path d="M200 105 L255 62 L310 105" />
        <rect x="215" y="105" width="80" height="45" />
        <rect x="240" y="118" width="16" height="16" />

        {/* Mid towers */}
        <rect x="360" y="28" width="72" height="122" />
        <path d="M360 55h72M360 82h72M360 109h72M384 28v122M408 28v122" />

        <path d="M470 88 L545 38 L620 88" />
        <rect x="490" y="88" width="110" height="62" />
        <rect x="528" y="108" width="34" height="42" />
        <rect x="502" y="102" width="16" height="16" />
        <rect x="572" y="102" width="16" height="16" />

        <rect x="660" y="42" width="64" height="108" />
        <path d="M660 70h64M660 98h64M682 42v108M704 42v108" />

        {/* Right houses */}
        <path d="M760 100 L840 52 L920 100" />
        <rect x="780" y="100" width="100" height="50" />
        <rect x="810" y="115" width="20" height="35" />
        <rect x="848" y="112" width="16" height="16" />

        <path d="M960 108 L1045 58 L1130 108" />
        <rect x="980" y="108" width="120" height="42" />
        <rect x="1020" y="118" width="40" height="32" />

        <rect x="1180" y="35" width="80" height="115" />
        <path d="M1180 65h80M1180 95h80M1180 125h80M1207 35v115M1234 35v115" />

        <path d="M1290 98 L1355 55 L1420 98" />
        <rect x="1308" y="98" width="94" height="52" />
        <rect x="1340" y="115" width="18" height="35" />

        <line x1="20" y1="150" x2="1420" y2="150" strokeWidth="0.85" opacity="0.55" />
      </g>
    </svg>
  );
}

/**
 * Contact closing CTA - compact red band, house blueprint, outlined enquiry button.
 */
export function ContactClosingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-nebco-red">
      <HouseBlueprint />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-9 xl:px-12">
        <div className="max-w-[36rem]">
          <h2 className="type-h3 tracking-[-0.02em] text-white">
            Tell us what you are planning.
          </h2>
          <p className="mt-1.5 text-[13.5px] leading-[1.5] text-white/90 sm:mt-2 sm:text-[14.5px]">
            We are here to help you build it right.
          </p>
        </div>

        <Link
          href="#form"
          className="inline-flex shrink-0 items-center gap-2.5 border border-white px-6 py-3 font-heading text-[10.5px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-nebco-red sm:px-7 sm:py-3.5 sm:text-[11px]"
        >
          Submit Your Enquiry
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
