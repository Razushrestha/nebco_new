"use client";

import { useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const GOLD = "#c5a059";

const STEPS = [
  { num: "01", title: "DISCOVER", desc: "Understand goals, site and constraints." },
  { num: "02", title: "REVIEW", desc: "Assess scope, budget and risk." },
  { num: "03", title: "PLAN", desc: "Coordinate design, schedule and cost." },
  { num: "04", title: "MOBILISE", desc: "Procure, prepare and mobilise." },
  { num: "05", title: "BUILD", desc: "Execute with quality, safety and care." },
  { num: "06", title: "VERIFY", desc: "Inspect, test and measure outcomes." },
  { num: "07", title: "HANDOVER", desc: "Deliver, document and hand over." },
] as const;

function SystemPanorama() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 1200 200"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke={GOLD} strokeWidth="1" opacity="0.38">
        <rect x="30" y="68" width="88" height="88" />
        <line x1="30" y1="88" x2="118" y2="88" />
        <line x1="30" y1="108" x2="118" y2="108" />
        <line x1="30" y1="128" x2="118" y2="128" />
        <line x1="74" y1="68" x2="74" y2="156" />
        <rect x="138" y="82" width="68" height="74" />
        <line x1="138" y1="102" x2="206" y2="102" />
        <line x1="138" y1="122" x2="206" y2="122" />
        <line x1="172" y1="82" x2="172" y2="156" />
        <rect x="224" y="54" width="104" height="102" />
        <line x1="224" y1="76" x2="328" y2="76" />
        <line x1="224" y1="98" x2="328" y2="98" />
        <line x1="224" y1="120" x2="328" y2="120" />
        <line x1="224" y1="142" x2="328" y2="142" />
        <line x1="276" y1="54" x2="276" y2="156" />
        <rect x="348" y="78" width="76" height="78" />
        <line x1="348" y1="98" x2="424" y2="98" />
        <line x1="348" y1="118" x2="424" y2="118" />
        <line x1="386" y1="78" x2="386" y2="156" />
        <rect x="444" y="46" width="122" height="110" />
        <line x1="444" y1="68" x2="566" y2="68" />
        <line x1="444" y1="90" x2="566" y2="90" />
        <line x1="444" y1="112" x2="566" y2="112" />
        <line x1="444" y1="134" x2="566" y2="134" />
        <line x1="505" y1="46" x2="505" y2="156" />
        <rect x="586" y="74" width="90" height="82" />
        <line x1="586" y1="94" x2="676" y2="94" />
        <line x1="586" y1="114" x2="676" y2="114" />
        <line x1="631" y1="74" x2="631" y2="156" />
        <rect x="696" y="58" width="98" height="98" />
        <line x1="696" y1="80" x2="794" y2="80" />
        <line x1="696" y1="102" x2="794" y2="102" />
        <line x1="696" y1="124" x2="794" y2="124" />
        <line x1="745" y1="58" x2="745" y2="156" />
        <rect x="814" y="82" width="72" height="74" />
        <line x1="814" y1="102" x2="886" y2="102" />
        <line x1="814" y1="122" x2="886" y2="122" />
        <line x1="850" y1="82" x2="850" y2="156" />
        <rect x="906" y="50" width="112" height="106" />
        <line x1="906" y1="72" x2="1018" y2="72" />
        <line x1="906" y1="94" x2="1018" y2="94" />
        <line x1="906" y1="116" x2="1018" y2="116" />
        <line x1="906" y1="138" x2="1018" y2="138" />
        <line x1="962" y1="50" x2="962" y2="156" />
        <rect x="1038" y="78" width="68" height="78" />
        <line x1="1038" y1="98" x2="1106" y2="98" />
        <line x1="1038" y1="118" x2="1106" y2="118" />
        <line x1="1072" y1="78" x2="1072" y2="156" />
        <rect x="1120" y="64" width="52" height="92" />
        <line x1="1120" y1="84" x2="1172" y2="84" />
        <line x1="1146" y1="64" x2="1146" y2="156" />
        <line x1="12" y1="156" x2="1188" y2="156" strokeWidth="0.8" opacity="0.45" />
      </g>
    </svg>
  );
}

function TimelineDiamond() {
  return (
    <span
      className="inline-block w-[7px] h-[7px] rotate-45 shrink-0"
      style={{ backgroundColor: GOLD }}
      aria-hidden="true"
    />
  );
}

function TimelineNode() {
  return (
    <span
      className="inline-block w-[10px] h-[10px] rounded-full bg-ivory-light border-2 border-nebco-red box-border"
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-light border-t border-soft-concrete/70 py-14 lg:py-20 xl:py-24"
    >
      <div className="container-nebco">
        <div className="flex items-center gap-4 lg:gap-5 mb-10 lg:mb-12">
          <SectionEyebrow
            number="04"
            title="THE CONSTRUCTION SYSTEM"
            className="!text-[11px] !tracking-[0.16em] !mb-0 shrink-0"
          />
          <div className="flex-1 h-px bg-nebco-red/45" aria-hidden="true" />
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible">
          <div className="min-w-[820px] lg:min-w-0">
            <div className="relative pt-2 pb-2">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[120px] sm:h-[140px] lg:h-[155px]">
                <SystemPanorama />
              </div>

              <div className="relative z-10 pt-[88px] sm:pt-[100px] lg:pt-[110px]">
                <div className="relative h-5 mb-7 lg:mb-8">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center">
                    <TimelineDiamond />
                    <div className="relative flex-1 mx-[2px] h-[2px] bg-nebco-red/15">
                      <div
                        className="absolute inset-y-0 left-0 bg-nebco-red transition-[width] duration-1000 ease-out"
                        style={{ width: lineReady ? "100%" : "0%" }}
                        aria-hidden="true"
                      />
                    </div>
                    <TimelineDiamond />
                  </div>
                  <div className="grid grid-cols-7 h-full relative z-10">
                    {STEPS.map((step) => (
                      <div key={step.num} className="flex items-center justify-center">
                        <TimelineNode />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-x-1">
                  {STEPS.map((step) => (
                    <div key={step.num} className="pr-2">
                      <p className="font-mono text-[11px] sm:text-[12px] font-medium text-nebco-red leading-none">
                        {step.num}
                      </p>
                      <p className="mt-1.5 font-heading font-bold text-[11px] sm:text-[12px] lg:text-[13px] uppercase tracking-[0.04em] text-arch-black leading-tight">
                        {step.title}
                      </p>
                      <p className="mt-2 text-[10px] sm:text-[11px] text-silver-graphite leading-[1.5]">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
