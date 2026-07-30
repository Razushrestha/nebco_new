"use client";

import { useState } from "react";

const GOLD = "#c5a059";

type Package = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const PACKAGES: readonly Package[] = [
  {
    id: "land",
    title: "LAND POTENTIAL ASSESSMENT",
    description: "High-level evaluation of land potential, use options and key constraints.",
    icon: "/service-package/land-potential.png",
  },
  {
    id: "feasibility",
    title: "FEASIBILITY STUDY",
    description: "Detailed feasibility including market, technical, financial and regulatory analysis.",
    icon: "/service-package/feasibility-study.png",
  },
  {
    id: "strategy",
    title: "DEVELOPMENT STRATEGY",
    description: "Development concept, phasing strategy, financial model and execution roadmap.",
    icon: "/service-package/development-strategy.png",
  },
  {
    id: "precon",
    title: "PRE-CONSTRUCTION MANAGEMENT",
    description: "Approvals, design coordination, tendering and pre-construction planning.",
    icon: "/service-package/pre-construction.png",
  },
  {
    id: "e2e",
    title: "END-TO-END DEVELOPMENT MANAGEMENT",
    description: "Complete development management from concept to handover.",
    icon: "/service-package/end-to-end.png",
  },
  {
    id: "nrn",
    title: "NRN PROJECT MANAGEMENT",
    description: "Specialized support for NRNs—representation, reporting and end-to-end execution.",
    icon: "/service-package/nrn-project.png",
  },
] as const;

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
};

const PROCESS_BY_PACKAGE: Record<string, readonly ProcessStep[]> = {
  land: [
    { num: "01", title: "BRIEF", desc: "Clarify ownership goals and decision timeline." },
    { num: "02", title: "SITE REVIEW", desc: "Visit and document physical site conditions." },
    { num: "03", title: "CONTEXT", desc: "Map location, access and neighbourhood setting." },
    { num: "04", title: "ZONING", desc: "Check zoning, rights and regulatory limits." },
    { num: "05", title: "USE OPTIONS", desc: "Compare viable use and density scenarios." },
    { num: "06", title: "CONSTRAINTS", desc: "Flag risks, easements and infrastructure gaps." },
    { num: "07", title: "POTENTIAL", desc: "Summarise highest and best use potential." },
    { num: "08", title: "ADVICE", desc: "Recommend next steps with clear priorities." },
  ],
  feasibility: [
    { num: "01", title: "DISCOVERY", desc: "Understand your goals, property and context." },
    { num: "02", title: "EVALUATION", desc: "Assess land, market, legal and constraints." },
    { num: "03", title: "CONCEPT", desc: "Develop concept and use strategy." },
    { num: "04", title: "FEASIBILITY", desc: "Test financials, demand and project viability." },
    { num: "05", title: "STRUCTURE", desc: "Define structure, phasing and risk allocation." },
    { num: "06", title: "PRE-CONSTRUCTION", desc: "Secure approvals, finalize design and tenders." },
    { num: "07", title: "CONSTRUCTION", desc: "Execute with quality, safety and control." },
    { num: "08", title: "MARKET & HANDOVER", desc: "Lease or sell, and hand over the asset." },
  ],
  strategy: [
    { num: "01", title: "OBJECTIVES", desc: "Define commercial and development outcomes." },
    { num: "02", title: "MARKET", desc: "Analyse demand, pricing and competitive set." },
    { num: "03", title: "CONCEPT", desc: "Shape product mix and positioning." },
    { num: "04", title: "PHASING", desc: "Set delivery phases and release strategy." },
    { num: "05", title: "FINANCIALS", desc: "Build cost, revenue and return model." },
    { num: "06", title: "RISK", desc: "Allocate risk and control points." },
    { num: "07", title: "ROADMAP", desc: "Sequence decisions, teams and milestones." },
    { num: "08", title: "GO / NO-GO", desc: "Confirm strategy and investment path." },
  ],
  precon: [
    { num: "01", title: "ALIGN", desc: "Confirm brief, budget and programme intent." },
    { num: "02", title: "DESIGN", desc: "Coordinate consultants and design packages." },
    { num: "03", title: "AUTHORITIES", desc: "Plan approvals and submission pathway." },
    { num: "04", title: "VALUE", desc: "Value-engineer without losing intent." },
    { num: "05", title: "PROCUREMENT", desc: "Prepare tender packages and bid strategy." },
    { num: "06", title: "CONTRACTORS", desc: "Evaluate bids and recommend appointment." },
    { num: "07", title: "MOBILISE", desc: "Set site readiness and kick-off conditions." },
    { num: "08", title: "HANDOFF", desc: "Transfer a build-ready project package." },
  ],
  e2e: [
    { num: "01", title: "DISCOVERY", desc: "Understand goals, site and stakeholders." },
    { num: "02", title: "EVALUATION", desc: "Assess potential, constraints and options." },
    { num: "03", title: "CONCEPT", desc: "Lock concept and commercial direction." },
    { num: "04", title: "FEASIBILITY", desc: "Prove viability across market and finance." },
    { num: "05", title: "STRUCTURE", desc: "Structure delivery, funding and governance." },
    { num: "06", title: "PRE-CONSTRUCTION", desc: "Approvals, design freeze and tendering." },
    { num: "07", title: "CONSTRUCTION", desc: "Manage build quality, cost and schedule." },
    { num: "08", title: "HANDOVER", desc: "Market, close out and hand over the asset." },
  ],
  nrn: [
    { num: "01", title: "INTAKE", desc: "Capture goals, budget and remote constraints." },
    { num: "02", title: "LOCAL REVIEW", desc: "Verify site, title and local conditions." },
    { num: "03", title: "OPTIONS", desc: "Present clear build, JV or hold pathways." },
    { num: "04", title: "DECISION", desc: "Support informed go-ahead from abroad." },
    { num: "05", title: "MANDATE", desc: "Set reporting, authority and representation." },
    { num: "06", title: "COORDINATE", desc: "Manage professionals and local partners." },
    { num: "07", title: "EXECUTE", desc: "Drive delivery with milestone updates." },
    { num: "08", title: "CLOSEOUT", desc: "Document outcomes and asset handover." },
  ],
};

function PackageIcon({
  src,
  alt,
  active,
}: {
  src: string;
  alt: string;
  active: boolean;
}) {
  /* CSS mask keeps inactive icons nebco-red and active icons white */
  return (
    <span
      className="mx-auto block h-10 w-10 sm:h-11 sm:w-11"
      style={{
        backgroundColor: active ? "#ffffff" : "#bc2026",
        WebkitMaskImage: `url('${src}')`,
        maskImage: `url('${src}')`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      role="img"
      aria-label={alt}
    />
  );
}

function CraneWireframe() {
  return (
    <svg viewBox="0 0 220 160" fill="none" className="h-full w-full" aria-hidden="true">
      <g stroke={GOLD} strokeWidth="0.9" opacity="0.35">
        <path d="M40 150 V70 L90 40 L140 70 V150" />
        <path d="M55 150 V85 H125 V150" />
        <path d="M55 100 H125 M55 115 H125 M55 130 H125" />
        <path d="M70 85 V150 M95 85 V150 M110 85 V150" />
        <path d="M140 55 H200" />
        <path d="M155 55 V30 H190" />
        <path d="M190 30 V55" />
        <path d="M175 55 L175 95" />
        <path d="M168 95 H182" />
        <circle cx="175" cy="100" r="3.5" />
      </g>
    </svg>
  );
}

function DevelopmentProcessPanel({ packageId }: { packageId: string }) {
  const steps = PROCESS_BY_PACKAGE[packageId] ?? PROCESS_BY_PACKAGE.feasibility;
  const activePackage = PACKAGES.find((p) => p.id === packageId);

  return (
    <div className="relative overflow-hidden bg-[#111111] px-7 py-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10 xl:px-14">
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-8 hidden w-[min(22%,240px)] lg:block"
        aria-hidden="true"
      >
        <CraneWireframe />
      </div>

      <div key={packageId} className="consulting-process-enter relative z-[1]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-6">
          <p
            className="font-mono text-[10.5px] font-medium uppercase tracking-[0.16em] sm:text-[11px]"
            style={{ color: GOLD }}
          >
            05 / DEVELOPMENT PROCESS
          </p>
          {activePackage ? (
            <p className="max-w-[28rem] text-right font-heading text-[10px] font-semibold uppercase tracking-[0.08em] text-white/45 sm:text-[11px]">
              For {activePackage.title}
            </p>
          ) : null}
        </div>

        <div className="-mx-1 overflow-x-auto pb-1">
          <div className="relative min-w-[920px] px-1 lg:min-w-0">
            <div className="grid grid-cols-8 gap-2">
              {steps.map((step) => (
                <div key={`${packageId}-${step.num}`} className="min-w-0 text-center">
                  <p
                    className="font-heading text-[11px] font-bold tabular-nums sm:text-[12px]"
                    style={{ color: GOLD }}
                  >
                    {step.num}
                  </p>
                  <p
                    className="mt-0.5 font-heading text-[9px] font-semibold uppercase leading-tight tracking-[0.06em] sm:text-[10px] lg:text-[10.5px]"
                    style={{ color: GOLD }}
                  >
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative my-3 h-4 sm:my-3.5">
              <div className="absolute inset-x-[6%] top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-nebco-red" />

              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={`dot-${packageId}-${i}`}
                  className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebco-red/80"
                  style={{ left: `${((i + 1) / 8) * 100}%` }}
                  aria-hidden="true"
                />
              ))}

              {steps.map((step, i) => (
                <span
                  key={`${packageId}-node-${step.num}`}
                  className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebco-red shadow-[0_0_10px_rgba(188,32,38,0.75)] sm:h-3.5 sm:w-3.5"
                  style={{ left: `${((i + 0.5) / 8) * 100}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="grid grid-cols-8 gap-2">
              {steps.map((step) => (
                <p
                  key={`${packageId}-${step.num}-desc`}
                  className="min-w-0 text-center text-[10px] leading-[1.4] text-white/70 sm:text-[11px] lg:text-[11.5px]"
                >
                  {step.desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** 04 Service Packages + 05 Development Process revealed under the active card. */
export function ConsultingPackagesSection() {
  const [activeId, setActiveId] = useState("feasibility");

  return (
    <section className="overflow-hidden bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-5 pb-0 pt-3 sm:px-8 sm:pt-4 lg:px-10 lg:pt-5 xl:px-12">
        <div className="mb-5 flex items-center gap-4 sm:mb-6">
          <p className="shrink-0 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
            04 / SERVICE PACKAGES
          </p>
          <span className="h-px min-w-0 flex-1 bg-nebco-red/70" aria-hidden="true" />
        </div>

        {/* Always 6 equal columns in one row (scroll on narrow viewports) */}
        <div className="-mx-1 overflow-x-auto pb-3">
          <div className="relative mx-1 min-w-[980px] border border-[#d8d2c8] lg:min-w-0">
            <div className="grid grid-cols-6">
              {PACKAGES.map((pkg, index) => {
                const isActive = pkg.id === activeId;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setActiveId(pkg.id)}
                    className={`relative flex min-h-[200px] flex-col items-center px-2.5 py-6 text-center transition-colors sm:min-h-[210px] sm:px-3 sm:py-7 lg:min-h-[220px] lg:px-3.5 lg:py-7 ${
                      isActive
                        ? "z-[1] bg-nebco-red text-white"
                        : "bg-[#f5f2ed] text-arch-black hover:bg-[#efeae3]"
                    } ${index > 0 ? "border-l border-[#d8d2c8]" : ""}`}
                  >
                    <PackageIcon src={pkg.icon} alt="" active={isActive} />

                    <h3
                      className={`mt-4 font-heading text-[10px] font-bold uppercase leading-[1.25] tracking-[0.05em] sm:text-[10.5px] lg:text-[11px] ${
                        isActive ? "text-white" : "text-arch-black"
                      }`}
                    >
                      {pkg.title}
                    </h3>

                    <p
                      className={`mt-2 max-w-[11.5rem] text-[11px] leading-[1.45] sm:mt-2.5 sm:text-[11.5px] lg:text-[12px] ${
                        isActive ? "text-white/90" : "text-[#555555]"
                      }`}
                    >
                      {pkg.description}
                    </p>

                    {isActive ? (
                      <span
                        className="pointer-events-none absolute left-1/2 top-full z-[3] -translate-x-1/2"
                        aria-hidden="true"
                      >
                        <span className="block h-0 w-0 border-x-[8px] border-t-[9px] border-x-transparent border-t-nebco-red" />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Process panel — linked under the active package pointer */}
      <div className="relative z-0">
        <DevelopmentProcessPanel packageId={activeId} />
      </div>
    </section>
  );
}
