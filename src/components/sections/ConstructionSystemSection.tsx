"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

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

function GoldDiamond() {
  return <span className="construction-system-timeline__diamond" aria-hidden="true" />;
}

export function ConstructionSystemSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      setPlay(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    // Safety: if already on screen (or observer is slow), show animation soon.
    const fallback = window.setTimeout(start, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="construction-system-section bg-ivory-light">
      <div className="container-nebco">
        <div className="construction-system-section__header">
          <SectionEyebrow
            number="04"
            title="THE CONSTRUCTION SYSTEM"
            className="construction-system-section__eyebrow"
          />
          <div className="construction-system-section__rule" aria-hidden="true" />
        </div>

        <div className="construction-system-section__body">
          <div className="construction-system-section__skyline">
            <Image
              src={SYSTEM_SKYLINE}
              alt="Architectural elevation of a construction system"
              width={2174}
              height={179}
              unoptimized
              className="h-auto w-full object-contain object-bottom"
              sizes="100vw"
            />
          </div>

          <div
            ref={timelineRef}
            className={`construction-system-timeline${play ? " is-active" : ""}`}
          >
            <div className="construction-system-timeline__rail">
              <div className="construction-system-timeline__line-wrap" aria-hidden="true">
                <GoldDiamond />
                <div className="construction-system-timeline__track">
                  <span className="construction-system-timeline__line" />
                  <span className="construction-system-timeline__glow" />
                </div>
                <GoldDiamond />
              </div>

              <ol className="construction-system-timeline__nodes" aria-hidden="true">
                {STEPS.map((step) => (
                  <li key={step.num} className="construction-system-timeline__node-cell">
                    <span className="construction-system-timeline__node" />
                  </li>
                ))}
              </ol>
            </div>

            <ol className="construction-system-timeline__steps">
              {STEPS.map((step) => (
                <li key={step.num} className="construction-system-timeline__step">
                  <p className="construction-system-timeline__label">
                    <span className="construction-system-timeline__num">{step.num}</span>{" "}
                    <span className="construction-system-timeline__title">{step.title}</span>
                  </p>
                  <p className="construction-system-timeline__desc">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
