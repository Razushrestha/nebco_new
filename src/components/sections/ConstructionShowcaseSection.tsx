"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProposalBlueprintOverlay } from "@/components/ui/ProposalBlueprintOverlay";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

const QUALITY_CONTROLS = [
  {
    id: "materials",
    title: "MATERIALS CONTROL",
    desc: "Approved sourcing, certificates and traceability.",
  },
  {
    id: "workmanship",
    title: "WORKMANSHIP CONTROL",
    desc: "Skilled teams, method statements and supervision.",
  },
  {
    id: "testing",
    title: "TESTING & INSPECTION",
    desc: "In-situ tests, lab checks and independent audits.",
  },
] as const;

const PROPOSAL_ITEMS = [
  {
    title: "Site Access & Conditions",
    desc: "Access plans, architectural, utilities and site rules.",
  },
  {
    title: "Proposed Timeline",
    desc: "Milestones, key stages and constraints.",
  },
  {
    title: "Supply Responsibilities",
    desc: "Clearly defined roles and third-party dependencies.",
  },
  {
    title: "Known Restrictions",
    desc: "Regulatory, environmental or community considerations.",
  },
] as const;

const PROJECTS = [
  {
    id: "pokhara",
    title: "POKHARA HOTEL SUITES",
    image: IMAGES.hotelConstruction,
    type: "Hospitality",
    location: "Pokhara, Nepal",
    status: "Under Construction",
    scope: "Structure, MEP, Finishes and Site Works",
    href: "/projects",
  },
  {
    id: "greenfield",
    title: "GREENFIELD SCHOOL",
    image: IMAGES.schoolBuilding,
    type: "Institutional",
    location: "Kathmandu, Nepal",
    status: "Completed",
    scope: "Structures, Finishes and External Works",
    href: "/projects",
  },
  {
    id: "warehouse",
    title: "INDUSTRIAL WAREHOUSE",
    image: IMAGES.warehouse,
    type: "Industrial",
    location: "Bhaktapur, Nepal",
    status: "Completed",
    scope: "Structural and Site Works",
    href: "/projects",
  },
] as const;

function DocumentInspectIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
      <rect x="9" y="7" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="1.15" />
      <path d="M12 12h8M12 16h8M12 20h5" stroke="currentColor" strokeWidth="0.95" strokeLinecap="round" />
    </svg>
  );
}

function GoldIconFrame({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 shrink-0 border border-pale-gold/85 text-pale-gold"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function GoldCheck() {
  return (
    <span
      className="inline-flex items-center justify-center w-[15px] h-[15px] shrink-0 mt-0.5"
      style={{ backgroundColor: GOLD }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
        <path
          d="M2.5 6l2.5 2.5 4.5-5"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ProjectsSectionHeader() {
  return (
    <p className="font-mono text-[10px] lg:text-[11px] tracking-[0.16em] uppercase mb-0 shrink-0 leading-none">
      <span className="text-silver-graphite font-normal">07 /</span>{" "}
      <span className="text-nebco-red font-medium">SELECTED CONSTRUCTION WORK</span>
    </p>
  );
}

function ViewProjectLink() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] lg:text-[12px] font-mono font-semibold uppercase tracking-[0.1em] text-nebco-red group-hover:text-nebco-red-dark transition-colors">
      View Project
      <span aria-hidden="true">→</span>
    </span>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] lg:text-[12px] font-semibold text-arch-black leading-tight">{label}</p>
      <p className="text-[11px] lg:text-[12px] text-silver-graphite mt-0.5 leading-snug">{value}</p>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  animated,
}: {
  project: (typeof PROJECTS)[number];
  animated: boolean;
}) {
  return (
    <Link
      href={project.href}
      className={`group grid grid-cols-1 sm:grid-cols-[0.95fr_1fr] h-full bg-ivory-light border border-soft-concrete/80 overflow-hidden hover:border-nebco-red/25 transition-all duration-300 ${
        animated ? "showcase-card-rise" : ""
      }`}
      style={{ animationDelay: animated ? "0.15s" : undefined }}
    >
      <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-0 lg:h-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 32vw"
        />
      </div>
      <div className="p-5 lg:p-6 xl:p-7 flex flex-col justify-between min-h-0 bg-ivory-light">
        <div>
          <h3 className="font-heading font-bold text-[13px] lg:text-[14px] text-nebco-red tracking-[0.05em] uppercase leading-tight">
            {project.title}
          </h3>
          <div className="mt-4 space-y-3">
            <MetaBlock label="Project Type" value={project.type} />
            <MetaBlock label="Location" value={project.location} />
            <MetaBlock label="Status" value={project.status} />
            <MetaBlock label="NEBCO Scope" value={project.scope} />
          </div>
        </div>
        <div className="mt-5">
          <ViewProjectLink />
        </div>
      </div>
    </Link>
  );
}

function CompactProjectCard({
  project,
  animated,
  delay,
}: {
  project: (typeof PROJECTS)[number];
  animated: boolean;
  delay: string;
}) {
  return (
    <Link
      href={project.href}
      className={`group flex flex-col h-full bg-ivory-light border border-soft-concrete/80 overflow-hidden hover:border-nebco-red/25 transition-all duration-300 ${
        animated ? "showcase-card-rise" : ""
      }`}
      style={{ animationDelay: animated ? delay : undefined }}
    >
      <div className="relative aspect-[16/10] overflow-hidden shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 22vw"
        />
      </div>
      <div className="p-4 lg:p-5 flex flex-col flex-1 min-h-0 bg-ivory-light">
        <h3 className="font-heading font-bold text-[12px] lg:text-[13px] text-nebco-red tracking-[0.05em] uppercase leading-tight">
          {project.title}
        </h3>
        <div className="mt-3.5 grid grid-cols-2 gap-x-5 gap-y-3 flex-1">
          <MetaBlock label="Project Type" value={project.type} />
          <MetaBlock label="Location" value={project.location} />
          <MetaBlock label="Status" value={project.status} />
          <MetaBlock label="NEBCO Scope" value={project.scope} />
        </div>
        <div className="mt-4 pt-1">
          <ViewProjectLink />
        </div>
      </div>
    </Link>
  );
}

export function ConstructionShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ivory-light border-t border-soft-concrete/70">
      {/* 05 + 06 — spaced cards, ascending widths */}
      <div className="container-nebco !px-4 sm:!px-5 lg:!px-7 xl:!px-9 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-[0.62fr_1fr_1.28fr] lg:grid-cols-[0.58fr_1fr_1.42fr] xl:grid-cols-[0.55fr_1fr_1.45fr] gap-2.5 md:gap-2.5 lg:gap-3">
          {/* 05a — photo card */}
          <div
            className={`flex flex-col bg-ivory-light overflow-hidden min-h-[380px] md:min-h-[460px] lg:min-h-[490px] ${
              inView ? "showcase-image-reveal" : ""
            }`}
          >
            <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4 shrink-0">
              <SectionEyebrow
                number="05"
                title="QUALITY YOU CAN SEE"
                className="!text-[10px] lg:!text-[11px] !tracking-[0.16em] !mb-0"
              />
            </div>
            <div className="relative flex-1 min-h-[240px] mx-4 sm:mx-5 mb-4 sm:mb-5">
              <Image
                src={IMAGES.qualityInspector}
                alt="Construction worker inspecting wall quality on site"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 22vw"
                priority
              />
            </div>
          </div>

          {/* 05b — quality card */}
          <div className="bg-arch-black text-white px-6 sm:px-7 lg:px-8 xl:px-9 py-7 sm:py-8 lg:py-9 flex flex-col min-h-[380px] md:min-h-[460px] lg:min-h-[490px]">
            <h2
              className={`font-heading font-bold text-[1.05rem] sm:text-[1.12rem] lg:text-[1.2rem] xl:text-[1.26rem] leading-[1.28] tracking-tight max-w-[17rem] ${
                inView ? "showcase-step-rise" : ""
              }`}
              style={{ animationDelay: inView ? "0.08s" : undefined }}
            >
              Quality is not a final inspection. It is a managed process.
            </h2>

            <ul className="mt-7 lg:mt-8 space-y-5 lg:space-y-6 flex-1">
              {QUALITY_CONTROLS.map((item, index) => (
                <li
                  key={item.id}
                  className={`flex gap-3.5 ${inView ? "showcase-step-rise" : ""}`}
                  style={{ animationDelay: inView ? `${0.14 + index * 0.06}s` : undefined }}
                >
                  <GoldIconFrame>
                    <DocumentInspectIcon />
                  </GoldIconFrame>
                  <span className="min-w-0 pt-0.5">
                    <span
                      className="block font-mono text-[10px] lg:text-[10.5px] font-semibold uppercase tracking-[0.1em] leading-tight"
                      style={{ color: GOLD }}
                    >
                      {item.title}
                    </span>
                    <span className="block text-[11px] lg:text-[12px] mt-1.5 text-white/75 leading-relaxed">
                      {item.desc}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 06 — proposal card */}
          <div className="relative bg-nebco-red-dark text-white px-6 sm:px-7 lg:px-8 xl:px-9 py-7 sm:py-8 lg:py-9 flex flex-col min-h-[380px] md:min-h-[460px] lg:min-h-[490px] overflow-hidden">
            <ProposalBlueprintOverlay />

            <div className="relative z-10 flex flex-col h-full min-h-0">
              <SectionEyebrow
                number="06"
                title="PREPARING A RELIABLE PROPOSAL"
                className="!text-[10px] lg:!text-[10.5px] !tracking-[0.14em] !mb-0 !text-white/90 shrink-0"
              />

              <div className="flex-1 flex flex-col justify-center mt-6 lg:mt-7 mb-6 lg:mb-7 pl-[42%] sm:pl-[38%] lg:pl-[40%]">
                <ul className="space-y-4 lg:space-y-5">
                  {PROPOSAL_ITEMS.map((item, index) => (
                    <li
                      key={item.title}
                      className={`flex gap-3 ${inView ? "showcase-step-rise" : ""}`}
                      style={{ animationDelay: inView ? `${0.18 + index * 0.06}s` : undefined }}
                    >
                      <GoldCheck />
                      <div className="min-w-0">
                        <p className="font-heading font-bold text-[11px] lg:text-[12px] text-white leading-tight">
                          {item.title}
                        </p>
                        <p className="text-[11px] lg:text-[12px] text-white/68 mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact?type=construction"
                className={`inline-flex items-center justify-center self-start w-full max-w-[16rem] px-5 py-2.5 text-[10px] lg:text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:brightness-110 ${
                  inView ? "showcase-cta-pop" : ""
                }`}
                style={{ backgroundColor: GOLD, animationDelay: inView ? "0.45s" : undefined }}
              >
                Share Project Details →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 07 — selected work */}
      <div className="container-nebco !px-5 sm:!px-6 lg:!px-8 xl:!px-10 py-8 lg:py-10 xl:py-12 border-t border-soft-concrete/70 bg-ivory-light">
        <div
          className={`flex items-center gap-4 lg:gap-5 mb-6 lg:mb-7 ${inView ? "showcase-step-rise" : ""}`}
          style={{ animationDelay: inView ? "0.1s" : undefined }}
        >
          <ProjectsSectionHeader />
          <div className="flex-1 h-px bg-nebco-red/40" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr] gap-4 lg:gap-5 xl:gap-6">
          <FeaturedProjectCard project={PROJECTS[0]} animated={inView} />
          <CompactProjectCard project={PROJECTS[1]} animated={inView} delay="0.22s" />
          <CompactProjectCard project={PROJECTS[2]} animated={inView} delay="0.28s" />
        </div>
      </div>
    </section>
  );
}
