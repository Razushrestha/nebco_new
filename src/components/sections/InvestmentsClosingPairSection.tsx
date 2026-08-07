"use client";

import Link from "next/link";
import { ClosingBlueprintOverlay } from "@/components/ui/ClosingBlueprintOverlay";

const GOLD = "#c5a059";

function IconLandPlot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 28.5 14 10l8 12 6-8 6 14.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 30.5h30" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="14" cy="10" r="1.6" fill="currentColor" />
      <circle cx="22" cy="22" r="1.6" fill="currentColor" />
      <circle cx="28" cy="14" r="1.6" fill="currentColor" />
      <path d="M14 10v4.5M22 22v3M28 14v4" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    </svg>
  );
}

function IconBuildings({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="14" width="9" height="18" stroke="currentColor" strokeWidth="1.3" />
      <rect x="16" y="7" width="10" height="25" stroke="currentColor" strokeWidth="1.3" />
      <rect x="28" y="16" width="7" height="16" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M7.5 18h4M7.5 22h4M7.5 26h4M18.5 11h5M18.5 15.5h5M18.5 20h5M18.5 24.5h5M30 20h3M30 24h3"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M4 32.5h32" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
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
      <div className="mx-auto w-full max-w-[1440px] shrink-0 px-6 pb-2 pt-5 sm:px-8 sm:pb-2.5 sm:pt-6 lg:px-10 lg:pb-2 lg:pt-5 xl:px-12">
        <section>
          <div className="flex items-center gap-4">
            <p className="shrink-0 type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
              06 / LANDOWNER + STRATEGIC PARTICIPANT
            </p>
            <span className="h-px flex-1 bg-nebco-red/35" aria-hidden="true" />
          </div>

          <div className="relative mt-4 grid grid-cols-1 lg:mt-5 lg:grid-cols-2">
            {/* Landowner — icon left, copy right */}
            <article className="relative flex items-center gap-5 border border-[#ddd7ce] bg-[#f5f2ed] px-5 py-5 sm:gap-6 sm:px-6 sm:py-6 lg:border-r-0 lg:gap-7 lg:px-7 lg:py-6 xl:px-8">
              <span
                className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] bg-nebco-red"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-nebco-red"
                aria-hidden="true"
              />

              <span className="shrink-0 text-nebco-red" aria-hidden="true">
                <IconLandPlot className="h-12 w-12 sm:h-14 sm:w-14" />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="type-h3 max-w-[18rem] tracking-[-0.02em] text-arch-black">
                  Have Land with Development Potential?
                </h3>
                <p className="mt-2 max-w-[22rem] text-[12.5px] leading-[1.5] text-[#555555] sm:text-[13px]">
                  Let&apos;s explore how your land can be developed through a structured partnership.
                </p>

                <Link
                  href="/contact?type=opportunity"
                  className="mt-4 inline-flex w-fit items-center gap-2 border border-nebco-red px-4 py-2 font-heading text-[10px] font-bold uppercase tracking-[0.08em] text-nebco-red transition-colors hover:bg-nebco-red hover:text-white sm:mt-5 sm:px-5 sm:py-2.5 sm:text-[10.5px]"
                >
                  Submit an Opportunity
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {/* Strategic participant — icon left, copy right */}
            <article className="relative flex items-center gap-5 bg-nebco-red px-5 py-5 text-white sm:gap-6 sm:px-6 sm:py-6 lg:gap-7 lg:px-7 lg:py-6 xl:px-8">
              <span className="shrink-0 text-[#f5f2ed]" aria-hidden="true">
                <IconBuildings className="h-12 w-12 sm:h-14 sm:w-14" />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="type-h3 max-w-[20rem] tracking-[-0.02em] text-white">
                  Interested in Project-Specific Collaboration?
                </h3>
                <p className="mt-2 max-w-[24rem] text-[12.5px] leading-[1.5] text-white/85 sm:text-[13px]">
                  Partner with us in select projects where our capabilities and your capital can create
                  value.
                </p>

                <Link
                  href="/investments#models"
                  className="mt-4 inline-flex w-fit items-center gap-2 border border-white px-4 py-2 font-heading text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-nebco-red sm:mt-5 sm:px-5 sm:py-2.5 sm:text-[10.5px]"
                >
                  Explore Partnership Models
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* 07 / DISCLAIMER — full-bleed marble parchment band */}
      <section className="relative mt-1 shrink-0 overflow-visible border-t border-[#d5cfc4] lg:mt-0">
        {/* OR badge — centered on the section divider */}
        <span
          className="absolute left-1/2 top-0 z-[3] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-nebco-red bg-white font-heading text-[9.09px] font-bold uppercase leading-none tracking-[0.1em] text-nebco-red lg:flex"
          aria-hidden="true"
        >
          OR
        </span>
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
      <section className="relative shrink-0 overflow-hidden border-t border-[#e8e2d8] bg-[#0d0d0d]">
        {/* Gold architectural wireframe — stronger on the outer edges */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          aria-hidden="true"
          style={{ color: GOLD }}
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 180"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <g stroke="currentColor" strokeWidth="1">
              <path d="M40 20h90v140H40zM70 20v140M40 55h90M40 90h90M40 125h90" opacity="0.55" />
              <path d="M150 45h70v115h-70zM175 45v115M150 75h70M150 105h70" opacity="0.4" />
              <path d="M1310 20h90v140h-90zM1340 20v140M1310 55h90M1310 90h90M1310 125h90" opacity="0.55" />
              <path d="M1220 45h70v115h-70zM1245 45v115M1220 75h70M1220 105h70" opacity="0.4" />
              <path d="M240 160h960" opacity="0.25" />
            </g>
          </svg>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <ClosingBlueprintOverlay />
        </div>

        <div className="relative z-[1] mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 px-8 py-8 sm:px-10 sm:py-9 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:py-10 xl:gap-24">
          <h2 className="type-h2 max-w-[26rem] tracking-[-0.02em]">
            <span className="block text-white">Start with the opportunity.</span>
            <span className="mt-1.5 block text-nebco-red">We will evaluate the structure.</span>
          </h2>

          <Link
            href="/contact?type=opportunity"
            className="inline-flex shrink-0 items-center gap-2.5 bg-nebco-red px-7 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-nebco-red-hover sm:px-8 sm:py-4 sm:text-[12px]"
          >
            Submit an Opportunity
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
