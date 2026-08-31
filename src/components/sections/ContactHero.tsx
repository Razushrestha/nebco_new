"use client";

import Image from "next/image";
import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";
import type { CSSProperties } from "react";

const GOLD = "#c5a059";
const PANEL = "#111111";

/** Contact hero diagonal - reference: ~45% top → ~55% bottom */
const CONTACT_ANGLE = { top: 45, bottom: 55 } as const;

function contactPanelClip() {
  return `polygon(0 0, ${CONTACT_ANGLE.top}% 0, ${CONTACT_ANGLE.bottom}% 100%, 0 100%)`;
}

function contactAngleStyle(): CSSProperties {
  return {
    ["--contact-angle-top" as string]: `${CONTACT_ANGLE.top}%`,
    ["--contact-angle-bottom" as string]: `${CONTACT_ANGLE.bottom}%`,
  };
}

function CoordinateCrosshair() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="7" cy="7" r="4.25" stroke={GOLD} strokeWidth="0.9" />
      <path d="M7 1.25v2.1M7 10.65v2.1M1.25 7h2.1M10.65 7h2.1" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1.15" fill={GOLD} />
    </svg>
  );
}

export function ContactHero() {
  const panelClip = contactPanelClip();

  return (
    <section
      className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden lg:h-[calc(100svh-88px)]"
      style={{ ...contactAngleStyle(), backgroundColor: PANEL }}
    >
      {/* Full-bleed office meeting photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.contactHero}
          alt="NEBCO team reviewing architectural plans with a client in the Kathmandu office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </div>

      {/* Slanted dark panel */}
      <div
        className="hero-grid-bg pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{ clipPath: panelClip, backgroundColor: PANEL }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] hidden opacity-[0.22] lg:block"
        style={{ clipPath: panelClip }}
        aria-hidden="true"
      >
        <ConstructionHeroBlueprint />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#111111]/93 lg:hidden" aria-hidden="true" />

      {/* Copy */}
      <div className="relative z-10 flex min-h-[calc(100svh-88px)] flex-col lg:max-w-[min(52%,36rem)] lg:justify-between lg:px-12 lg:py-11 xl:max-w-[min(50%,38rem)] xl:px-14 xl:py-12">
        <div className="flex min-h-[480px] flex-1 flex-col justify-between px-7 py-10 sm:px-10 sm:py-12 lg:min-h-0 lg:px-0 lg:py-0">
          <div className="relative flex flex-1 flex-col">
            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
              Quality <span className="mx-1.5 text-white/25">|</span> Integrity{" "}
              <span className="mx-1.5 text-white/25">|</span> Timely
            </p>

            <div className="flex flex-1 flex-col justify-center py-10 sm:py-12 lg:py-8">
              <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
                Contact &amp; Enquiry
              </p>

              <h1 className="type-h1 mt-5 max-w-[18ch] tracking-[-0.02em] text-white sm:mt-6">
                Start with what you know <span className="text-nebco-red">today.</span>
              </h1>

              <p className="mt-5 max-w-[28rem] text-[14px] leading-[1.7] text-white/72 sm:mt-6 sm:text-[15px] lg:text-[16px]">
                You may have complete drawings, only a property document, an early idea or a specific
                project challenge.
              </p>

              <div className="mt-8 sm:mt-9">
                <Link
                  href="#enquiry-routes"
                  className="inline-flex items-center gap-2.5 bg-nebco-red px-6 py-3.5 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover sm:px-7 sm:py-4 sm:text-[12px]"
                >
                  Choose Your Enquiry Type
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative mt-6 flex items-start gap-2.5 font-mono text-[9.5px] uppercase leading-[1.45] tracking-[0.1em] sm:mt-0 sm:text-[10px] lg:text-[10.5px]"
            style={{ color: GOLD }}
          >
            <CoordinateCrosshair />
            <div>
              <p>Lat 27.7172° N ; Long 85.3240° E</p>
              <p className="mt-0.5">Kuleshwor, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
