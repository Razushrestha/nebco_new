"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const BENEFITS = [
  { id: "decisions", label: "Better Decisions" },
  { id: "risk", label: "Lower Risk" },
  { id: "returns", label: "Stronger Returns" },
  { id: "value", label: "Long-Term Value" },
] as const;

/**
 * Icon slots — drop PNGs into /public/engage-early/ later and set iconSrc here.
 */
type Benefit = (typeof BENEFITS)[number] & { iconSrc?: string };

const BENEFITS_WITH_ICONS: Benefit[] = BENEFITS.map((b) => ({ ...b }));

export function ConsultingEngageEarlySection() {
  return (
    <>
      <section className="overflow-hidden bg-[#f5f2ed]">
        <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:pb-7 lg:pt-2 xl:px-12">
          <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
            07 / WHY ENGAGE EARLY
          </p>

          {/* Horizontal: landscape image | content — compact for one-screen pair with 06 */}
          <div className="mt-4 grid grid-cols-1 items-center gap-5 lg:mt-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
            <div className="relative min-h-[180px] w-full overflow-hidden sm:min-h-[220px] lg:min-h-0 lg:h-[min(28vh,240px)]">
              <Image
                src={IMAGES.sunsetSite}
                alt="Construction team overlooking the city at sunset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority={false}
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="max-w-[28rem] font-heading text-[1.35rem] font-bold leading-[1.22] tracking-[-0.02em] text-arch-black sm:text-[1.5rem] lg:text-[1.65rem] xl:text-[1.75rem]">
                The earlier the questions are answered, the stronger the project becomes.
              </h2>
              <p className="mt-2.5 max-w-[30rem] text-[13px] leading-[1.55] text-[#444444] sm:text-[14px] lg:mt-3">
                Early clarity reduces risk, protects money and time, and creates better buildings, better
                returns and lasting value.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-4 sm:mt-6 sm:grid-cols-4 sm:gap-x-2 lg:mt-6 lg:gap-x-3">
                {BENEFITS_WITH_ICONS.map((item) => (
                  <div key={item.id} className="flex flex-col items-center text-center">
                    <div
                      className="flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10"
                      data-engage-early-icon={item.id}
                    >
                      {item.iconSrc ? (
                        <Image
                          src={item.iconSrc}
                          alt=""
                          width={36}
                          height={36}
                          className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                        />
                      ) : (
                        <span
                          className="block h-8 w-8 border border-nebco-red/35 sm:h-9 sm:w-9"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="mt-1.5 max-w-[6.5rem] font-heading text-[10px] font-semibold leading-[1.3] text-[#2a2a2a] sm:text-[11px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — sits just below the one-screen pair */}
      <section className="relative overflow-hidden bg-nebco-red">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[42%] opacity-[0.14]"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200' fill='none' stroke='%23ffffff' stroke-width='0.7'%3E%3Cpath d='M40 180 V60 H90 V180 M100 180 V40 H160 V180 M170 180 V80 H210 V180 M220 180 V30 H290 V180 M40 180 H290'/%3E%3Cpath d='M300 180 L340 100 L380 180 Z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "auto 95%",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:px-8 sm:py-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-10 xl:px-12">
          <h2 className="max-w-[20rem] shrink-0 font-heading text-[1.35rem] font-bold leading-[1.2] tracking-tight text-white sm:text-[1.55rem] lg:max-w-[22rem] lg:text-[1.7rem]">
            What should this property become?
          </h2>
          <p className="max-w-[22rem] text-[14px] leading-[1.55] text-white/90 sm:text-[15px] lg:flex-1 lg:text-center">
            Let&apos;s explore the possibilities—together.
          </p>
          <Link
            href="/contact?type=land-evaluation"
            className="inline-flex shrink-0 items-center justify-center bg-white px-6 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-nebco-red transition-colors hover:bg-ivory-light sm:px-7 sm:text-[12px]"
          >
            Evaluate My Property
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
