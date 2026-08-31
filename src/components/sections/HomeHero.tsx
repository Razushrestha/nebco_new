"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroTrustStrip } from "@/components/sections/HeroTrustStrip";
import { heroAngleStyle, HeroAngleLayers } from "@/components/ui/HeroAngleEdge";
import { HeroPhotoWireframe } from "@/components/ui/HeroPhotoWireframe";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

export function HomeHero() {
  return (
    <section
      className="relative flex h-[calc(100svh-88px)] min-h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111]"
      style={heroAngleStyle()}
    >
      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroBuilding}
            alt="Modern mixed-use building on a street corner in Kathmandu, Nepal"
            fill
            className="object-cover object-[58%_46%]"
            priority
            sizes="100vw"
          />
          <HeroPhotoWireframe />
        </div>

        <HeroAngleLayers />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#111111]/93 lg:hidden" aria-hidden="true" />

        <div className="relative z-20 flex h-full min-h-0 flex-col">
          <div className="relative flex flex-1 flex-col justify-center px-6 py-10 sm:px-8 lg:max-w-[min(40%,31rem)] lg:px-10 lg:py-6 xl:max-w-[min(38%,33rem)] xl:px-12 xl:pl-14">
            <div className="relative max-w-[28rem]">
              <p className="type-label mb-5 font-semibold uppercase tracking-[0.18em] text-nebco-red">
                Construction • Consulting • Investments
              </p>

              <h1 className="type-h1 tracking-tight">
                <span className="block text-white">From Land</span>
                <span className="block text-nebco-red">to Landmark</span>
              </h1>

              <p className="type-body mt-5 max-w-[25rem] text-white/80">
                Construction, development intelligence and project coordination-brought together through one
                experienced platform.
              </p>

              <div className="home-hero__actions mt-8 flex flex-row flex-nowrap items-stretch gap-2.5 lg:mt-9 lg:gap-3">
                <Link
                  href="/contact?type=project"
                  className="home-hero__btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap bg-nebco-red px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover lg:px-6 lg:py-3.5 lg:text-[11px]"
                >
                  Discuss Your Project
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/about"
                  className="home-hero__btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap border bg-transparent px-5 py-3 font-heading text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/5 lg:px-6 lg:py-3.5 lg:text-[11px]"
                  style={{ borderColor: GOLD }}
                >
                  See How NEBCO Works
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <HeroTrustStrip />
        </div>

        <div
          className="pointer-events-none absolute bottom-5 right-8 z-20 hidden items-center gap-2 text-[10px] font-mono tracking-[0.1em] sm:flex lg:right-10 xl:right-12"
          style={{ color: GOLD }}
        >
          <span>LAT 27.7172° N</span>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="0.9" />
            <path d="M6 2.2v7.6M2.2 6h7.6" stroke="currentColor" strokeWidth="0.9" />
          </svg>
          <span>LON 85.3240° E</span>
        </div>
      </div>
    </section>
  );
}
