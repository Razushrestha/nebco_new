"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectFilter } from "@/components/sections/ProjectsFeaturedSection";

type Responsibility = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  filter: ProjectFilter;
  tone: "red" | "dark" | "light";
  iconSrc: string;
  backgroundSrc: string;
};

const ITEMS: readonly Responsibility[] = [
  {
    id: "construct",
    title: "We Construct",
    description: "Delivering buildings with precision, quality and safety.",
    cta: "View Construction Projects",
    href: "/projects?filter=construction",
    filter: "Construction",
    tone: "red",
    iconSrc: "/work_by_responsibility/processed/we-construct-icon.png",
    backgroundSrc: "/work_by_responsibility/we construct background.png",
  },
  {
    id: "coordinate",
    title: "We Coordinate",
    description: "Aligning people, plans and processes for project success.",
    cta: "View Consulting Projects",
    href: "/projects?filter=consulting",
    filter: "Consulting",
    tone: "dark",
    iconSrc: "/work_by_responsibility/processed/coordinate-icon.png",
    backgroundSrc: "/work_by_responsibility/coordinate background.png",
  },
  {
    id: "develop",
    title: "We Develop Selectively",
    description: "Partnering on projects where we add long-term value.",
    cta: "View Development Projects",
    href: "/projects?filter=Development Partnership",
    filter: "Development Partnership",
    tone: "light",
    iconSrc: "/work_by_responsibility/processed/we-develop-icon.png",
    backgroundSrc: "/work_by_responsibility/we develop background.png",
  },
] as const;

type ProjectsResponsibilitySectionProps = {
  onSelect?: (filter: ProjectFilter) => void;
  compact?: boolean;
};

/**
 * 04 / WORK BY RESPONSIBILITY — three flush panels with provided icons + backgrounds.
 */
export function ProjectsResponsibilitySection({
  onSelect,
  compact = false,
}: ProjectsResponsibilitySectionProps) {
  return (
    <section className={compact ? "" : "bg-[#f5f2ed]"}>
      <div
        className={
          compact
            ? "w-full py-0"
            : "mx-auto max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12"
        }
      >
        <p
          className={`font-mono font-semibold uppercase tracking-[0.16em] text-nebco-red ${
            compact ? "text-[10px] sm:text-[10.5px]" : "text-[10.5px] sm:text-[11px]"
          }`}
        >
          04 / Work by Responsibility
        </p>

        <div className={`relative border border-[#1a1a1a] ${compact ? "mt-3" : "mt-5 sm:mt-6"}`}>
          {/* Seam markers: short stubs + ring */}
          <div
            className={`pointer-events-none absolute inset-x-0 z-20 hidden h-0 lg:block ${
              compact ? "top-[6.6rem]" : "top-[9.35rem] xl:top-[9.65rem]"
            }`}
            aria-hidden="true"
          >
            <div className="absolute left-1/3 top-0 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute right-full top-1/2 mr-[5px] h-px w-10 -translate-y-1/2 bg-white/90 sm:w-14" />
              <span className="absolute left-full top-1/2 ml-[5px] h-px w-5 -translate-y-1/2 bg-white/90 sm:w-7" />
              <span className="relative block h-[11px] w-[11px] rounded-full border-[1.5px] border-white bg-nebco-red sm:h-[13px] sm:w-[13px]" />
            </div>
            <div className="absolute left-2/3 top-0 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute right-full top-1/2 mr-[5px] h-px w-10 -translate-y-1/2 bg-white/90 sm:w-14" />
              <span className="absolute left-full top-1/2 ml-[5px] h-px w-5 -translate-y-1/2 bg-[#1a1a1a]/35 sm:w-7" />
              <span className="relative block h-[11px] w-[11px] rounded-full border-[1.5px] border-white bg-[#111111] sm:h-[13px] sm:w-[13px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {ITEMS.map((item) => {
              const isLight = item.tone === "light";
              const isRed = item.tone === "red";
              const titleColor = isLight ? "text-arch-black" : "text-white";
              const bodyColor = isLight ? "text-[#3d3d3d]" : "text-white/85";
              const ctaColor = isLight ? "text-nebco-red" : "text-white";
              const panelBg = isRed
                ? "bg-nebco-red"
                : isLight
                  ? "bg-[#f5f2ed]"
                  : "bg-[#111111]";
              const titleKnockout = isRed
                ? "bg-nebco-red"
                : isLight
                  ? "bg-[#f5f2ed]"
                  : "bg-[#111111]";

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    if (!onSelect) return;
                    e.preventDefault();
                    onSelect(item.filter);
                    document.getElementById("featured-project")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`group relative flex flex-col justify-between overflow-hidden ${panelBg} ${
                    compact
                      ? "min-h-[220px] px-5 py-5 sm:min-h-[240px] sm:px-6 sm:py-6 lg:min-h-0 lg:h-[min(38vh,280px)] lg:px-7 lg:py-6"
                      : "min-h-[300px] px-7 py-8 sm:min-h-[320px] sm:px-8 sm:py-9 lg:min-h-[360px] lg:px-9 lg:py-10"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -bottom-12 right-0 opacity-[0.5] sm:-bottom-14 lg:-bottom-16 ${
                      item.tone === "dark"
                        ? "translate-x-[10%] sm:translate-x-[14%] lg:translate-x-[18%]"
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    <Image
                      src={item.backgroundSrc}
                      alt=""
                      width={480}
                      height={480}
                      className={`h-auto max-w-none origin-bottom-right ${
                        compact
                          ? "w-[24rem] translate-x-[6%] sm:w-[26rem] sm:translate-x-[8%]"
                          : "w-[34rem] translate-x-[4%] sm:w-[38rem] sm:translate-x-[6%] lg:w-[42rem] lg:translate-x-[8%]"
                      }`}
                    />
                  </div>

                  <div className="relative z-[1] flex min-w-0 flex-col items-start">
                    <span
                      className={`relative block ${
                        compact
                          ? "h-11 w-11 sm:h-12 sm:w-12"
                          : "h-[4.75rem] w-[4.75rem] sm:h-[5.25rem] sm:w-[5.25rem] lg:h-[5.75rem] lg:w-[5.75rem]"
                      }`}
                      aria-hidden="true"
                    >
                      <Image
                        src={item.iconSrc}
                        alt=""
                        fill
                        sizes={compact ? "48px" : "92px"}
                        className={`object-contain object-left ${
                          isRed ? "brightness-0 invert" : ""
                        }`}
                      />
                    </span>

                    <h3
                      className={`relative z-[2] inline-block max-w-full py-0.5 pr-3 font-heading font-bold leading-[1.1] tracking-[-0.02em] ${titleKnockout} ${titleColor} ${
                        compact
                          ? "mt-2.5 text-[1.2rem] sm:mt-3 sm:text-[1.3rem]"
                          : "mt-3 text-[1.4rem] sm:mt-3.5 sm:text-[1.55rem] lg:text-[1.7rem]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`max-w-[17rem] leading-[1.5] ${bodyColor} ${
                        compact
                          ? "mt-1.5 text-[12.5px] sm:text-[13px]"
                          : "mt-2.5 text-[13.5px] sm:mt-3 sm:text-[14px]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  <span
                    className={`relative z-[1] inline-flex max-w-full items-center gap-2 font-mono font-medium uppercase tracking-[0.12em] transition-opacity group-hover:opacity-90 ${ctaColor} ${
                      compact
                        ? "mt-5 text-[10px] sm:mt-6"
                        : "mt-10 text-[10.5px] sm:text-[11px]"
                    }`}
                  >
                    <span className="min-w-0">{item.cta}</span>
                    <span aria-hidden="true" className="shrink-0">
                      →
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
