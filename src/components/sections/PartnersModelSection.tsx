"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

const RED = "#bc2026";

/**
 * Partners — 01 / How the Model Works
 * Cream band + left copy + project coordination hub diagram.
 */
export function PartnersModelSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`partners-model bg-[#f5f2ed] ${compact ? "shrink-0" : ""}`}>
      <div
        className={`mx-auto flex max-w-[1440px] flex-col lg:flex-row lg:items-center ${
          compact
            ? "h-full min-h-0 gap-2 px-6 py-4 sm:px-8 sm:py-4 lg:gap-3 lg:px-10 lg:py-5 xl:px-12"
            : "gap-5 px-6 py-8 sm:px-8 sm:py-9 lg:gap-3 lg:px-10 lg:py-10 xl:gap-4 xl:px-12"
        }`}
      >
        <div
          className={`w-full shrink-0 ${
            compact ? "lg:w-[15rem] xl:w-[16rem]" : "lg:w-[16.5rem] xl:w-[17.5rem]"
          }`}
        >
          <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
            01 / How the Model Works
          </p>
          <h2
            className={`type-h2 tracking-[-0.02em] text-arch-black ${
              compact ? "partners-model__heading mt-2" : "mt-2.5"
            }`}
          >
            No single discipline develops a real estate project alone.
          </h2>
          <span
            className={`block h-[3px] w-10 ${compact ? "mt-2.5" : "mt-3.5"}`}
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />
        </div>

        <div className="partners-model__diagram min-w-0 flex-1">
          <Image
            src={IMAGES.partnersCoordinationDiagram}
            alt="Project coordination hub connecting architecture, engineering, finance, legal, real estate, marketing, and specialist contractors through NEBCO"
            width={2994}
            height={1408}
            className="partners-model__diagram-img h-auto w-full object-contain object-center"
            sizes="(min-width: 1024px) 65vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
