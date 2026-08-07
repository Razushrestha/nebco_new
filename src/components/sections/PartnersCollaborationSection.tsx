"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

type Props = { compact?: boolean; inPair?: boolean };

/**
 * Partners — 05 / Collaboration Categories
 * Project coordination hub diagram (shared asset with section 01).
 */
export function PartnersCollaborationSection({ compact = false, inPair = false }: Props) {
  const diagram = (
    <div
      className={
        inPair
          ? "partners-collaboration__diagram relative w-full"
          : compact
            ? "partners-collaboration__diagram relative mx-auto w-full max-w-full"
            : "partners-collaboration__diagram relative mx-auto w-full max-w-[920px]"
      }
    >
      <Image
        src={IMAGES.partnersCoordinationDiagram}
        alt="Collaboration categories connected through NEBCO project coordination: architecture, engineering, finance, legal, real estate, marketing, and specialist contractors"
        width={2994}
        height={1408}
        className="partners-collaboration__diagram-img h-auto w-full object-contain object-center"
        sizes={
          inPair
            ? "(min-width: 768px) 58vw, 100vw"
            : compact
              ? "(min-width: 768px) 42vw, 100vw"
              : "(min-width: 1024px) 720px, 100vw"
        }
      />
    </div>
  );

  if (inPair) {
    return (
      <div className="partners-closing-pair__col partners-closing-pair__col--collab flex h-full min-w-0 flex-col">
        <p className="partners-closing-pair__eyebrow type-label shrink-0 font-semibold uppercase tracking-[0.16em] text-nebco-red">
          05 / Collaboration Categories
        </p>
        <div className="partners-closing-pair__diagram mt-3 flex min-h-0 flex-1 items-center sm:mt-4">
          {diagram}
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div>
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          05 / Collaboration Categories
        </p>
        <div className="mt-3 sm:mt-4">{diagram}</div>
      </div>
    );
  }

  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          05 / Collaboration Categories
        </p>
        <div className="mt-8 sm:mt-10">{diagram}</div>
      </div>
    </section>
  );
}
