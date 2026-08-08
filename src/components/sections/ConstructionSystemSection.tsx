"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const GOLD = "#c5a059";
const SYSTEM_SKYLINE = "/images/construction-system-skyline.png";

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
      className="construction-system-timeline__diamond"
      style={{ backgroundColor: GOLD }}
      aria-hidden="true"
    />
  );
}

export function ConstructionSystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
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
            <div className="pointer-events-none relative z-0 mb-1 w-full">
              <Image
                src={SYSTEM_SKYLINE}
                alt=""
                width={2174}
                height={179}
                unoptimized
                className="h-auto w-full object-contain object-bottom opacity-[0.8]"
                sizes="100vw"
                aria-hidden="true"
              />
            </div>

            <div
              className={`construction-system-timeline relative z-10 w-full ${active ? "is-active" : ""}`}
            >
              <div className="construction-system-timeline__rail relative mb-3 h-[18px]">
                <div className="absolute inset-x-0 top-1/2 z-0 flex -translate-y-1/2 items-center">
                  <TimelineDiamond />
                  <div className="construction-system-timeline__track relative mx-[1px] h-px flex-1">
                    <span className="construction-system-timeline__line" aria-hidden="true" />
                    <span className="construction-system-timeline__glow" aria-hidden="true" />
                  </div>
                  <TimelineDiamond />
                </div>

                <div className="relative z-10 grid h-full grid-cols-7">
                  {STEPS.map((step, i) => (
                    <div key={step.num} className="flex items-center justify-center">
                      <span
                        className="construction-system-timeline__node"
                        style={{ animationDelay: `${0.2 + i * 0.18}s` }}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-7 gap-x-2">
                {STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className="construction-system-timeline__step min-w-0 px-1 text-left"
                    style={{ animationDelay: `${0.28 + i * 0.18}s` }}
                  >
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
