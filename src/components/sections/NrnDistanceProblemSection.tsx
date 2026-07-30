"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * 01 / The Distance Problem — compact band for the single-screen NRN composition.
 */
export function NrnDistanceProblemSection() {
  return (
    <div className="shrink-0 bg-[#f5f2ed]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[minmax(15rem,0.88fr)_minmax(0,2.2fr)] lg:items-stretch">
        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-8 xl:px-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
            01 / The Distance Problem
          </p>

          <h2 className="mt-3 max-w-[18rem] font-heading text-[1.45rem] font-bold leading-[1.12] tracking-[-0.02em] text-arch-black sm:mt-3.5 sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem]">
            <span className="block">Distance makes</span>
            <span className="block">coordination hard.</span>
            <span className="mt-0.5 block text-nebco-red">It should not make the</span>
            <span className="block text-nebco-red">project unmanageable.</span>
          </h2>
        </div>

        <div className="relative grid min-h-[220px] grid-cols-1 gap-px bg-white sm:min-h-[260px] sm:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:min-h-[min(34svh,280px)]">
          <div className="relative min-h-[200px] sm:min-h-0">
            <Image
              src={IMAGES.videoCall}
              alt="Remote video consultation from abroad"
              fill
              className="object-cover object-[40%_45%]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 26vw"
            />
          </div>

          <div className="relative min-h-[200px] sm:min-h-0">
            <Image
              src={IMAGES.qualityWorker}
              alt="On-site team reviewing construction drawings"
              fill
              className="object-cover object-[48%_35%]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 34vw"
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-10 hidden sm:block"
            aria-hidden="true"
          >
            <div
              className="absolute top-[48%] h-px -translate-y-1/2 bg-nebco-red"
              style={{ left: "30%", right: "24%" }}
            />
            <div
              className="absolute top-[48%] -translate-x-1/2 -translate-y-1/2"
              style={{ left: "43.8%" }}
            >
              <span className="block h-[7px] w-[7px] rounded-full bg-nebco-red ring-[1.5px] ring-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
