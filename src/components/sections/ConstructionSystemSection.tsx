"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const GOLD = "#c5a059";
const SYSTEM_SKYLINE = "/construction-system.png";

const STEPS = [
  { num: "01", title: "DISCOVER", desc: "Understand goals, site and constraints." },
  { num: "02", title: "REVIEW", desc: "Assess scope, budget and risk." },
  { num: "03", title: "PLAN", desc: "Coordinate design, schedule and cost." },
  { num: "04", title: "MOBILISE", desc: "Procure, prepare and mobilise." },
  { num: "05", title: "BUILD", desc: "Execute with quality, safety and care." },
  { num: "06", title: "VERIFY", desc: "Inspect, test and measure outcomes." },
  { num: "07", title: "HANDOVER", desc: "Deliver, document and hand over." },
] as const;

function TimelineDiamond() {
  return (
    <span
      className="inline-block h-[6px] w-[6px] shrink-0 rotate-45"
      style={{ backgroundColor: GOLD }}
      aria-hidden="true"
    />
  );
}

function TimelineNode() {
  return (
    <span
      className="box-border inline-block h-[10px] w-[10px] shrink-0 rounded-full border border-nebco-red bg-ivory-light"
      aria-hidden="true"
    />
  );
}

export function ConstructionSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineReady, setLineReady] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-soft-concrete/70 bg-ivory-light py-10 lg:py-12"
    >
      <div className="container-nebco">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4 lg:mb-8 lg:gap-5">
          <SectionEyebrow
            number="04"
            title="THE CONSTRUCTION SYSTEM"
            className="!mb-0 shrink-0 !text-[11px] !tracking-[0.16em]"
          />
          <div className="h-px flex-1 bg-nebco-red/40" aria-hidden="true" />
        </div>

        <div className="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="relative min-w-[920px] lg:min-w-0">
            {/* Building sketch sits just above the timeline baseline */}
            <div className="pointer-events-none relative z-0 w-full">
              <Image
                src={SYSTEM_SKYLINE}
                alt=""
                width={866}
                height={102}
                unoptimized
                className="h-auto w-full object-contain object-bottom opacity-[0.75]"
                sizes="100vw"
                aria-hidden="true"
              />
            </div>

            {/* Timeline flush under building baseline */}
            <div className="relative z-10 -mt-0.5 w-full">
              <div className="relative mb-4 h-[18px]">
                {/* Thin red line with gold diamond caps */}
                <div className="absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 items-center">
                  <TimelineDiamond />
                  <div className="relative mx-[1px] h-px flex-1 bg-nebco-red/20">
                    <div
                      className="absolute inset-y-0 left-0 bg-nebco-red transition-[width] duration-[1100ms] ease-out"
                      style={{ width: lineReady ? "100%" : "0%", height: "1px" }}
                      aria-hidden="true"
                    />
                  </div>
                  <TimelineDiamond />
                </div>

                {/* Hollow nodes — line runs through center */}
                <div className="relative z-10 grid h-full grid-cols-7">
                  {STEPS.map((step) => (
                    <div key={step.num} className="flex items-center justify-center">
                      <TimelineNode />
                    </div>
                  ))}
                </div>
              </div>

              {/* Step labels under each node */}
              <div className="grid grid-cols-7 gap-x-2">
                {STEPS.map((step) => (
                  <div key={step.num} className="min-w-0 px-1 text-left">
                    <p className="m-0 leading-none">
                      <span className="font-mono text-[11px] font-medium text-nebco-red sm:text-[12px]">
                        {step.num}
                      </span>{" "}
                      <span className="font-heading text-[11px] font-bold uppercase tracking-[0.04em] text-arch-black sm:text-[12px] lg:text-[13px]">
                        {step.title}
                      </span>
                    </p>
                    <p className="mt-1.5 max-w-[9.75rem] text-[10px] leading-[1.4] text-silver-graphite sm:text-[11px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
