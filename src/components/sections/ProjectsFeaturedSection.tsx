"use client";

import { useEffect, useState, type ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

export const PROJECT_FILTERS = [
  "All",
  "Construction",
  "Consulting",
  "Development Partnership",
  "Residential",
  "Commercial",
  "Mixed-Use",
  "Hospitality",
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

type FeaturedProject = {
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  href: string;
  meta: readonly { label: string; value: string }[];
  narrative: readonly { title: string; body: string; Icon: ComponentType<{ className?: string }> }[];
};

function IconSituation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="15.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M11 24V14l7-5 7 5v10" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      <path d="M14.5 24v-6h7v6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14.5 15.5h7M14.5 18.5h7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function IconApproach({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="15.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="18" cy="18" r="4.2" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M18 8.5v3.2M18 24.3v3.2M8.5 18h3.2M24.3 18h3.2M11.2 11.2l2.3 2.3M22.5 22.5l2.3 2.3M11.2 24.8l2.3-2.3M22.5 13.5l2.3-2.3"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-hidden="true">
      <circle cx="18" cy="18" r="15.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="18" cy="18" r="10.5" stroke="currentColor" strokeWidth="1.15" />
      <path
        d="M18 12.5v6l4 2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 7.5v2.2M18 26.3v2.2M7.5 18h2.2M26.3 18h2.2"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

const FEATURED_BY_FILTER: Record<ProjectFilter, FeaturedProject> = {
  All: {
    title: "Mixed-Use Development",
    location: "Kathmandu",
    image: IMAGES.brickBuilding,
    imageAlt: "Mixed-use development in Kathmandu",
    href: "/projects",
    meta: [
      { label: "Project Type", value: "Mixed-Use" },
      { label: "Service", value: "Development Consulting" },
      { label: "Status", value: "Under Construction" },
      { label: "NEBCO Role", value: "Development Consultant" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "Well-located site with strong potential. The owner needed clarity on feasibility, design direction and phased implementation.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We led feasibility, planning, coordination and approvals support while aligning technical, commercial and compliance requirements.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Structure complete. Finishing and MEP in progress. Handover upcoming.",
        Icon: IconStage,
      },
    ],
  },
  Construction: {
    title: "RCC Residential Tower",
    location: "Naxal, Kathmandu",
    image: IMAGES.constructionSite,
    imageAlt: "RCC residential tower under construction",
    href: "/projects?filter=construction",
    meta: [
      { label: "Project Type", value: "Residential" },
      { label: "Service", value: "Construction" },
      { label: "Status", value: "Ongoing" },
      { label: "NEBCO Role", value: "General Contractor" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "A constrained urban plot required disciplined sequencing, quality control and clear site coordination from day one.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We structured package sequencing, QA checkpoints and daily site reporting to keep cost, safety and schedule aligned.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Structural frame progressing floor by floor. MEP rough-in starting on completed levels.",
        Icon: IconStage,
      },
    ],
  },
  Consulting: {
    title: "Commercial Feasibility Study",
    location: "Lazimpat, Kathmandu",
    image: IMAGES.workersPlans,
    imageAlt: "Consultants reviewing commercial development plans",
    href: "/projects?filter=consulting",
    meta: [
      { label: "Project Type", value: "Commercial" },
      { label: "Service", value: "Development Consulting" },
      { label: "Status", value: "Completed" },
      { label: "NEBCO Role", value: "Lead Consultant" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "The client needed an investable commercial concept before committing capital to design and approvals.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We tested demand, massing options, cost benchmarks and phasing so decisions were grounded in evidence.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Feasibility closed. Concept brief handed to design team for detailed development.",
        Icon: IconStage,
      },
    ],
  },
  "Development Partnership": {
    title: "Landowner-Developer Partnership",
    location: "Balkumari, Lalitpur",
    image: IMAGES.modernApartment,
    imageAlt: "Residential development partnership project",
    href: "/projects?filter=development",
    meta: [
      { label: "Project Type", value: "Residential" },
      { label: "Service", value: "Development Partnership" },
      { label: "Status", value: "In Diligence" },
      { label: "NEBCO Role", value: "Development Partner" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "Landowners sought a structured partner to unlock value without taking on full development risk alone.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We aligned ownership, capital and delivery roles through a clear partnership structure and stage gates.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Title and feasibility review underway. Term sheet under discussion.",
        Icon: IconStage,
      },
    ],
  },
  Residential: {
    title: "Residential Development",
    location: "Balkumari, Lalitpur",
    image: IMAGES.villa,
    imageAlt: "Residential development in Balkumari",
    href: "/projects?filter=residential",
    meta: [
      { label: "Project Type", value: "Residential" },
      { label: "Service", value: "Development Consulting" },
      { label: "Status", value: "Completed" },
      { label: "NEBCO Role", value: "Development Consultant" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "A family-owned site needed a buildable residential product that respected access, density and market demand.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We defined unit mix, cost envelope and approval path before detailed design locked in.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Project delivered and handed over. Post-occupancy support completed.",
        Icon: IconStage,
      },
    ],
  },
  Commercial: {
    title: "Commercial Building",
    location: "Thapathali, Kathmandu",
    image: IMAGES.commercialBuilding,
    imageAlt: "Commercial office building in Thapathali",
    href: "/projects?filter=commercial",
    meta: [
      { label: "Project Type", value: "Commercial" },
      { label: "Service", value: "Construction" },
      { label: "Status", value: "Completed" },
      { label: "NEBCO Role", value: "Construction Manager" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "An owner-occupied commercial building required reliable delivery across structure, façade and MEP packages.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We coordinated design packages, contractor interfaces and inspection gates to protect programme and quality.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Construction complete. Final commissioning and handover documentation closed.",
        Icon: IconStage,
      },
    ],
  },
  "Mixed-Use": {
    title: "Mixed-Use Development",
    location: "Kathmandu",
    image: IMAGES.brickBuilding,
    imageAlt: "Mixed-use development in Kathmandu",
    href: "/projects?filter=mixed-use",
    meta: [
      { label: "Project Type", value: "Mixed-Use" },
      { label: "Service", value: "Development Consulting" },
      { label: "Status", value: "Under Construction" },
      { label: "NEBCO Role", value: "Development Consultant" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "Well-located site with strong potential. The owner needed clarity on feasibility, design direction and phased implementation.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We led feasibility, planning, coordination and approvals support while aligning technical, commercial and compliance requirements.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Structure complete. Finishing and MEP in progress. Handover upcoming.",
        Icon: IconStage,
      },
    ],
  },
  Hospitality: {
    title: "Hospitality Project",
    location: "Durbarmarg, Kathmandu",
    image: IMAGES.nightBuilding,
    imageAlt: "Hospitality development at Durbarmarg",
    href: "/projects?filter=hospitality",
    meta: [
      { label: "Project Type", value: "Hospitality" },
      { label: "Service", value: "Development Consulting" },
      { label: "Status", value: "Proposed" },
      { label: "NEBCO Role", value: "Development Advisor" },
    ],
    narrative: [
      {
        title: "The Situation",
        body: "A prime hospitality site required a concept that balanced brand positioning, room yield and construction cost.",
        Icon: IconSituation,
      },
      {
        title: "Our Approach",
        body: "We framed programme, operator requirements and capital envelope before advancing into schematic design.",
        Icon: IconApproach,
      },
      {
        title: "Current Stage",
        body: "Concept approved. Operator discussions and detailed brief in progress.",
        Icon: IconStage,
      },
    ],
  },
};

type ProjectsFeaturedSectionProps = {
  filter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
};

/**
 * 01 Explore the Portfolio + 02 Featured Project
 * Featured content updates when a filter is selected.
 */
export function ProjectsFeaturedSection({ filter, onFilterChange }: ProjectsFeaturedSectionProps) {
  const featured = FEATURED_BY_FILTER[filter];
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(featured);

  useEffect(() => {
    setVisible(false);
    const t = window.setTimeout(() => {
      setDisplay(FEATURED_BY_FILTER[filter]);
      setVisible(true);
    }, 160);
    return () => window.clearTimeout(t);
  }, [filter]);

  return (
    <div className="bg-[#f5f2ed]">
      {/* 01 / EXPLORE THE PORTFOLIO */}
      <section className="border-b border-[#d5cfc4]">
        <div className="mx-auto max-w-[1440px] px-6 pt-7 sm:px-8 sm:pt-8 lg:px-10 xl:px-12">
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
            01 / Explore the Portfolio
          </p>

          <div className="mt-4 flex items-stretch overflow-x-auto pb-0 sm:mt-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PROJECT_FILTERS.map((item, index) => {
              const active = filter === item;
              return (
                <div key={item} className="flex shrink-0 items-stretch">
                  {index > 0 && (
                    <span
                      className="mx-6 self-center h-3 w-px bg-[#cfc8bd] sm:mx-8 lg:mx-10"
                      aria-hidden="true"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => onFilterChange(item)}
                    aria-pressed={active}
                    className={`relative whitespace-nowrap pb-3 pt-0.5 font-heading text-[10px] font-bold uppercase tracking-[0.1em] transition-colors sm:text-[10.5px] lg:text-[11px] ${
                      active
                        ? "text-nebco-red"
                        : "text-arch-black hover:text-nebco-red"
                    }`}
                  >
                    {item}
                    {active ? (
                      <span
                        className="absolute inset-x-0 bottom-0 h-[2px] bg-nebco-red"
                        aria-hidden="true"
                      />
                    ) : null}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 02 / FEATURED PROJECT */}
      <section id="featured-project" className="mx-auto max-w-[1440px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-11 xl:px-12 scroll-mt-24">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          02 / Featured Project
        </p>

        <div
          className={`mt-5 grid grid-cols-1 overflow-hidden border border-[#d8d2c8] transition-opacity duration-200 ease-out lg:mt-6 lg:grid-cols-2 lg:items-stretch ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px]">
            <Image
              key={display.image}
              src={display.image}
              alt={display.imageAlt}
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col bg-[#111111] px-6 py-7 text-white sm:px-8 sm:py-8 lg:px-9 lg:py-9 xl:px-10">
            <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
              Featured Project
            </p>

            <h2 className="type-h2 mt-3 tracking-[-0.02em] text-white">
              {display.title} - {display.location}
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-y-4 text-center sm:mt-7 sm:grid-cols-4 sm:gap-y-0">
              {display.meta.map((item, i) => (
                <div
                  key={item.label}
                  className={`sm:px-3 sm:first:pl-0 sm:last:pr-0 lg:px-4 ${
                    i > 0 ? "sm:border-l sm:border-nebco-red/60" : ""
                  }`}
                >
                  <p className="type-label font-semibold uppercase tracking-[0.16em] text-white/80">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-heading text-[12.5px] font-semibold leading-snug text-white/90 sm:text-[13px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 h-px bg-nebco-red/70 sm:mt-6" aria-hidden="true" />

            <div className="mt-6 grid grid-cols-1 gap-6 text-center sm:mt-7 sm:grid-cols-3 sm:gap-5 lg:gap-6">
              {display.narrative.map(({ title, body, Icon }) => (
                <div key={title} className="flex flex-col items-center">
                  <span style={{ color: GOLD }} aria-hidden="true">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                  </span>
                  <h3 className="type-h3 mt-3 text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-white/65 sm:text-[12.5px]">{body}</p>
                </div>
              ))}
            </div>

            <Link
              href={display.href}
              className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-nebco-red transition-colors hover:text-nebco-red-hover sm:pt-10"
            >
              View Project Details
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
