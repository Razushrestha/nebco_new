"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroTrustStrip } from "@/components/sections/HeroTrustStrip";
import { HeroAngleLayers } from "@/components/ui/HeroAngleEdge";
import { HeroBlueprintOverlay } from "@/components/ui/HeroBlueprintOverlay";
import { HeroPhotoWireframe } from "@/components/ui/HeroPhotoWireframe";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

export function HomeHero() {
  return (
    <section className="relative flex h-[calc(100svh-88px)] min-h-[calc(100svh-88px)] max-h-[calc(100svh-88px)] flex-col overflow-hidden bg-black">
      {/* Hero body — global Header sits above; diagonal starts here */}
      <div className="relative min-h-0 flex-1">
        {/* Building photograph */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroBuilding}
            alt="Modern building development in Kathmandu, Nepal"
            fill
            className="object-cover object-[65%_40%]"
            priority
            sizes="100vw"
          />
          <HeroPhotoWireframe />
        </div>

        {/* Red band + black panel */}
        <HeroAngleLayers />
        <HeroBlueprintOverlay />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#111111]/93 lg:hidden" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-0 flex-col">
          <div className="relative flex-1 flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-[56px] py-10 lg:py-8">
            {/* Gold vertical spine */}
            <div
              className="hidden lg:block absolute top-[12%] bottom-[28%] left-12 xl:left-[56px] w-[2px]"
              style={{ backgroundColor: GOLD }}
              aria-hidden="true"
            />

            <div className="relative max-w-[32rem] lg:max-w-[34rem] lg:pl-7">
              <p className="flex items-center gap-3 text-nebco-red text-[11px] font-mono font-semibold uppercase tracking-[0.2em] mb-6">
                <span className="inline-block w-[2px] h-3.5 bg-nebco-red shrink-0" aria-hidden="true" />
                Construction · Consulting · Investments
              </p>

              <h1 className="font-heading font-extrabold text-[2.75rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] leading-[1.02] tracking-tight">
                <span className="text-white block">From Land</span>
                <span className="text-nebco-red block">to Landmark</span>
              </h1>

              <p className="mt-6 text-[15px] lg:text-[16px] text-white/75 leading-[1.7] max-w-[28rem]">
                Construction, development intelligence and project coordination—brought together through one
                experienced platform.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mt-9">
                <Link
                  href="/contact?type=project"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-nebco-red text-white text-[11px] font-semibold uppercase tracking-[0.14em] hover:bg-nebco-red-hover transition-colors"
                >
                  Discuss Your Project
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white border transition-colors hover:bg-white/5"
                  style={{ borderColor: GOLD }}
                >
                  See How NEBCO Works
                  <span aria-hidden="true" style={{ color: GOLD }}>
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <HeroTrustStrip />
        </div>

        {/* Coordinates — bottom of image area */}
        <div
          className="absolute bottom-6 left-1/2 translate-x-[18%] lg:translate-x-[22%] z-20 hidden sm:flex items-center gap-2.5 text-[10px] font-mono tracking-[0.12em] pointer-events-none"
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
