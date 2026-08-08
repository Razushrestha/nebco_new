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
 * 06 Dual CTA + 07 Disclaimer + closing CTA — one desktop viewport.
 */
export function InvestmentsClosingPairSection() {
  return (
    <div className="flex flex-col bg-[#f5f2ed]">
      {/* 06 */}
      <div className="mx-auto w-full max-w-[1440px] shrink-0 px-6 pb-3 pt-5 sm:px-8 sm:pb-3.5 sm:pt-6 lg:px-10 lg:pb-3 lg:pt-5 xl:px-12">
        <section>
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
            06 / LANDOWNER + STRATEGIC PARTICIPANT
          </p>

          <div className="relative mt-4 border border-nebco-red lg:mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Landowner — icon left, copy right */}
              <article className="relative flex items-center gap-5 bg-[#f5f2ed] px-5 py-6 sm:gap-6 sm:px-7 sm:py-7 lg:gap-7 lg:border-r lg:border-nebco-red lg:px-8 lg:py-8 xl:gap-8 xl:px-10">
                <span className="shrink-0 text-nebco-red" aria-hidden="true">
                  <IconLandPlot className="h-[4.5rem] w-[4.5rem] sm:h-[5.25rem] sm:w-[5.25rem] lg:h-[5.75rem] lg:w-[5.75rem]" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="max-w-[17rem] font-heading text-[1.05rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-nebco-red sm:text-[1.15rem] lg:text-[1.2rem]">
                    Have Land with Development Potential?
                  </h3>
                  <p className="mt-2 max-w-[22rem] text-[12px] leading-[1.5] text-nebco-red/85 sm:text-[12.5px]">
                    Let&apos;s explore how your land can be developed through a structured partnership.
                  </p>

                  <Link
                    href="/contact?type=opportunity"
                    className="mt-4 inline-flex w-fit items-center gap-2 border border-nebco-red px-3.5 py-2 font-heading text-[9.5px] font-bold uppercase tracking-[0.1em] text-nebco-red transition-colors hover:bg-nebco-red hover:text-white sm:mt-5 sm:px-4 sm:py-2.5 sm:text-[10px]"
                  >
                    Submit an Opportunity
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>

              {/* Strategic participant — icon left, copy right */}
              <article className="relative flex items-center gap-5 bg-nebco-red px-5 py-6 text-white sm:gap-6 sm:px-7 sm:py-7 lg:gap-7 lg:px-8 lg:py-8 xl:gap-8 xl:px-10">
                <span className="shrink-0 text-white" aria-hidden="true">
                  <IconBuildings className="h-[4.5rem] w-[4.5rem] sm:h-[5.25rem] sm:w-[5.25rem] lg:h-[5.75rem] lg:w-[5.75rem]" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="max-w-[19rem] font-heading text-[1.05rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.15rem] lg:text-[1.2rem]">
                    Interested in Project-Specific Collaboration?
                  </h3>
                  <p className="mt-2 max-w-[23rem] text-[12px] leading-[1.5] text-white/88 sm:text-[12.5px]">
                    Partner with us in select projects where our capabilities and your capital can create
                    value.
                  </p>

                  <Link
                    href="/investments#models"
                    className="mt-4 inline-flex w-fit items-center gap-2 border border-white px-3.5 py-2 font-heading text-[9.5px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-nebco-red sm:mt-5 sm:px-4 sm:py-2.5 sm:text-[10px]"
                  >
                    Explore Partnership Models
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </div>

            {/* OR badge — bottom center seam */}
            <span
              className="absolute bottom-0 left-1/2 z-[3] hidden h-8 w-8 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-nebco-red bg-white font-heading text-[9px] font-bold uppercase leading-none tracking-[0.1em] text-nebco-red lg:flex"
              aria-hidden="true"
            >
              OR
            </span>
          </div>
        </section>
      </div>

      {/* 07 / DISCLAIMER — full-bleed marble parchment band */}
      <section className="relative mt-5 shrink-0 overflow-visible border-t border-[#d5cfc4] lg:mt-6">
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
