"use client";

import Link from "next/link";

const GOLD = "#c5a059";

function ClosingWireframes({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 160"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g stroke={GOLD} strokeWidth="1.1" strokeLinejoin="round">
        {/* Left isometric cubes */}
        <path d="M48 118 88 96l40 22-40 22-40-22z" opacity="0.55" />
        <path d="M48 118v28l40 22V140M88 96v44M128 118v28l-40 22" opacity="0.45" />
        <path d="M78 78 118 56l40 22-40 22-40-22z" opacity="0.4" />
        <path d="M78 78v26l40 22V100M118 56v44M158 78v26l-40 22" opacity="0.35" />
        <path d="M30 70 55 56l25 14-25 14-25-14z" opacity="0.28" />
        <path d="M30 70v18l25 14V84M55 56v28M80 70v18l-25 14" opacity="0.22" />

        {/* Right isometric cubes */}
        <path d="M1272 118 1312 96l40 22-40 22-40-22z" opacity="0.55" />
        <path d="M1272 118v28l40 22V140M1312 96v44M1352 118v28l-40 22" opacity="0.45" />
        <path d="M1242 78 1282 56l40 22-40 22-40-22z" opacity="0.4" />
        <path d="M1242 78v26l40 22V100M1282 56v44M1322 78v26l-40 22" opacity="0.35" />
        <path d="M1360 70 1385 56l25 14-25 14-25-14z" opacity="0.28" />
        <path d="M1360 70v18l25 14V84M1385 56v28M1410 70v18l-25 14" opacity="0.22" />
      </g>
    </svg>
  );
}

function IconLandPlot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true">
      {/* Plot boundary */}
      <path
        d="M10 48 22 18l16 14 12-16 12 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 52h56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Survey stakes */}
      <path d="M22 18v10M38 32v8M50 16v12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <circle cx="22" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="38" cy="32" r="2.2" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="50" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.35" />
      {/* Contour / parcel lines */}
      <path
        d="M16 44c6-4 12-3 18 1s12 3 18-1M20 38c5-2 10-1 14 2"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Signpost */}
      <path d="M58 28v24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M58 28h10l-2.5 4L68 36H58V28z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

function IconBuildings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true">
      <path d="M8 58h56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Left tower */}
      <rect x="10" y="28" width="14" height="30" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13.5 33h7M13.5 38.5h7M13.5 44h7M13.5 49.5h7" stroke="currentColor" strokeWidth="1.15" />
      {/* Center tower */}
      <rect x="28" y="12" width="16" height="46" stroke="currentColor" strokeWidth="1.4" />
      <path d="M32 12v-4h8v4" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path
        d="M32 18h8M32 24h8M32 30h8M32 36h8M32 42h8M32 48h8"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      {/* Right mid */}
      <rect x="48" y="22" width="12" height="36" stroke="currentColor" strokeWidth="1.4" />
      <path d="M51 27h6M51 33h6M51 39h6M51 45h6" stroke="currentColor" strokeWidth="1.15" />
      {/* Far right small */}
      <rect x="58" y="34" width="6" height="24" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconShieldCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2.5 35.5 8.2v10.5c0 8.1-5.8 14-15.5 17.3C10.3 32.7 4.5 26.8 4.5 18.7V8.2L20 2.5z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M20 6 31.8 10.2v7.8c0 6-4.2 10.4-11.8 13-7.6-2.6-11.8-7-11.8-13v-7.8L20 6z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 21.5 18.2 26 27 16.5"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 06 / Landowner + Strategic Participant dual CTA.
 */
export function InvestmentsLandownerParticipantSection({
  compact = false,
}: {
  compact?: boolean;
} = {}) {
  const panelPad = compact
    ? "px-5 py-5 sm:px-6 sm:py-5 lg:px-7 lg:py-6"
    : "px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9 xl:px-11 xl:py-10";
  const iconClass = compact
    ? "h-14 w-14 sm:h-16 sm:w-16"
    : "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-[5.25rem] lg:w-[5.25rem]";
  const titleClass = compact
    ? "text-[0.95rem] leading-[1.25] sm:text-[1.05rem]"
    : "text-[1.05rem] leading-[1.25] sm:text-[1.15rem] lg:text-[1.25rem]";
  const bodyClass = compact
    ? "mt-1.5 text-[11.5px] leading-[1.5] sm:text-[12px]"
    : "mt-2 text-[12.5px] leading-[1.55] sm:mt-2.5 sm:text-[13px]";
  const btnClass = compact
    ? "mt-3 px-3 py-2 text-[9px] sm:mt-3.5 sm:text-[9.5px]"
    : "mt-4 px-4 py-2.5 text-[10px] sm:mt-5 sm:text-[10.5px]";

  return (
    <section className={compact ? "shrink-0" : undefined}>
      <p
        className={`font-heading font-semibold uppercase tracking-[0.16em] text-nebco-red ${
          compact ? "text-[9.5px] sm:text-[10px]" : "text-[10px] sm:text-[11px]"
        }`}
      >
        06 / LANDOWNER + STRATEGIC PARTICIPANT
      </p>

      <div className={`relative border border-nebco-red ${compact ? "mt-2.5 lg:mt-3" : "mt-4 lg:mt-5"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Landowner - cream panel */}
          <article
            className={`relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 bg-[#f5f2ed] sm:gap-x-5 lg:gap-x-6 lg:border-r lg:border-nebco-red ${panelPad}`}
          >
            <span className="col-start-1 row-start-1 self-center" style={{ color: GOLD }} aria-hidden="true">
              <IconLandPlot className={iconClass} />
            </span>

            <div className="col-start-2 row-start-1 flex min-w-0 flex-col items-start text-left">
              <p
                role="heading"
                aria-level={3}
                className={`m-0 w-full text-left font-heading font-extrabold tracking-[-0.02em] text-arch-black ${titleClass}`}
              >
                Have Land with Development Potential?
              </p>
              <p className={`m-0 w-full text-left text-[#4a4a4a] ${bodyClass}`}>
                Let&apos;s explore how your land can be developed through a structured partnership.
              </p>
              <Link
                href="/contact?type=opportunity"
                className={`inline-flex shrink-0 items-center gap-2 self-start border border-nebco-red font-heading font-bold uppercase tracking-[0.1em] text-nebco-red transition-colors hover:bg-nebco-red hover:text-white ${btnClass}`}
              >
                Submit an Opportunity
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          {/* Strategic participant - red panel */}
          <article
            className={`relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 bg-nebco-red text-white sm:gap-x-5 lg:gap-x-6 ${panelPad}`}
          >
            <span className="col-start-1 row-start-1 self-center text-white" aria-hidden="true">
              <IconBuildings className={iconClass} />
            </span>

            <div className="col-start-2 row-start-1 flex min-w-0 flex-col items-start text-left">
              <p
                role="heading"
                aria-level={3}
                className={`m-0 w-full text-left font-heading font-extrabold tracking-[-0.02em] text-white ${titleClass}`}
              >
                Interested in Project-Specific Collaboration?
              </p>
              <p className={`m-0 w-full text-left text-white/90 ${bodyClass}`}>
                Partner with us in select projects where our capabilities and your capital can create
                value.
              </p>
              <Link
                href="/investments#models"
                className={`inline-flex shrink-0 items-center gap-2 self-start border border-white font-heading font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-nebco-red ${btnClass}`}
              >
                Explore Partnership Models
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>

        {/* OR badge - bottom center seam */}
        <span
          className={`absolute bottom-0 left-1/2 z-[3] flex -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-nebco-red bg-white font-heading font-bold uppercase leading-none tracking-[0.1em] text-arch-black ${
            compact ? "h-7 w-7 text-[8px]" : "h-8 w-8 text-[9px] lg:h-9 lg:w-9 lg:text-[10px]"
          }`}
          aria-hidden="true"
        >
          OR
        </span>
      </div>
    </section>
  );
}

/**
 * 07 Disclaimer + closing CTA.
 */
export function InvestmentsClosingPairSection() {
  return (
    <div className="flex flex-col bg-[#f5f2ed]">
      {/* 07 / DISCLAIMER - full-bleed marble parchment band */}
      <section className="relative shrink-0 overflow-visible border-t border-[#d5cfc4]">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundColor: "#efebe3",
              backgroundImage: "url(/textures/disclaimer-marble.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(245,242,237,0.35) 0%, rgba(239,235,227,0.15) 40%, rgba(245,242,237,0.3) 100%)",
            }}
          />

          <div className="relative z-[1] mx-auto flex max-w-[1440px] flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:gap-0 sm:px-8 sm:py-5 lg:px-10 lg:py-5 xl:px-12">
          <p className="shrink-0 whitespace-nowrap type-label font-semibold uppercase tracking-[0.16em] text-nebco-red sm:mr-10 lg:mr-14">
            07 / DISCLAIMER
          </p>

          <span className="shrink-0" style={{ color: GOLD }} aria-hidden="true">
            <IconShieldCheck className="h-10 w-9 sm:h-[42px] sm:w-[38px]" />
          </span>

          <p className="max-w-[38rem] text-[13px] leading-[1.55] text-[#4a4a4a] sm:ml-5 sm:text-[13.5px] lg:ml-6 lg:max-w-[40rem] lg:text-[14px]">
            All information submitted to NEBCO is treated as confidential. NEBCO reserves the right to
            accept or decline any opportunity without assigning any reason. Submission of an opportunity
            does not constitute any obligation or commitment of any kind.
          </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative shrink-0 overflow-hidden border-b border-[#c5a059] bg-[#111111]">
        <ClosingWireframes className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="relative z-[1] mx-auto flex max-w-[1000px] flex-col items-start justify-center gap-5 px-8 py-8 sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-9 lg:gap-14 lg:px-12 lg:py-10">
          <h2 className="type-h3 min-w-0 tracking-[-0.02em]">
            <span className="block text-white">Start with the opportunity.</span>
            <span className="mt-1 block text-nebco-red">We will evaluate the structure.</span>
          </h2>

          <Link
            href="/contact?type=opportunity"
            className="inline-flex shrink-0 items-center gap-2.5 bg-nebco-red px-6 py-3 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-nebco-red-hover sm:px-7 sm:py-3.5 sm:text-[12px]"
          >
            Submit an Opportunity
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
