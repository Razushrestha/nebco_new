"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTABand } from "@/components/sections/SharedSections";
import { IMAGES } from "@/lib/images";

const APPROACH_TABS = ["Landowner", "Joint Development", "Project Management", "Due Diligence", "Financing"];

const MODELS = [
  { num: "01", title: "Landowner–Developer Partnership", desc: "Landowner contributes property rights while the development partner coordinates defined resources.", dark: false },
  { num: "02", title: "Joint Development", desc: "Stakeholders share agreed roles, investment obligations, risk and project benefits.", dark: true },
  { num: "03", title: "Co-Development", desc: "NEBCO works alongside another developer where capabilities are complementary.", dark: false },
  { num: "04", title: "Construction-Linked Participation", desc: "Combines construction role with separately agreed participation terms.", dark: true },
  { num: "05", title: "Built-to-Suit / Project-Specific", desc: "Participation evaluated after full due diligence and definitive agreements.", dark: false },
];

const DUE_DILIGENCE = [
  "Submission", "Screening", "Discussion", "Site Review", "Feasibility", "Risk Review", "Negotiation", "Agreement",
];

const FOCUS_AREAS = [
  "Mid-to-high density residential",
  "Commercial & mixed-use",
  "Hospitality projects",
  "Built-to-suit developments",
  "Redevelopment opportunities",
];

export default function InvestmentsPage() {
  const [activeTab, setActiveTab] = useState("Landowner");

  return (
    <>
      <HeroSplit
        eyebrow="NEBCO INVESTMENTS"
        title="Viable property. Clear structure. The right partnership."
        subtitle="NEBCO evaluates selected land and development opportunities where property potential, project structure, execution capability and stakeholder interests can be aligned."
        primaryCta={{ label: "Submit an Opportunity", href: "/contact?type=opportunity" }}
        secondaryCta={{ label: "Explore Partnership Models", href: "#models" }}
        image={IMAGES.brickBuilding}
        imageAlt="Development property"
      />

      {/* 01 Overview */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow number="01" title="THE OVERVIEW" />
            <h2 className="font-heading font-bold text-3xl leading-tight mt-2">
              Participation is built on feasibility—not assumptions.
            </h2>
            <p className="mt-6 text-silver-graphite leading-relaxed">
              Some owners have valuable land but do not want to sell. Some projects need an experienced development
              and construction partner. NEBCO Investments provides a framework for evaluating these possibilities.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={IMAGES.heroBlueprint} alt="Project planning" fill className="object-cover" />
          </div>
        </div>
      </Section>

      {/* 02 Approach tabs */}
      <section className="bg-soft-concrete py-12">
        <div className="container-nebco">
          <SectionEyebrow number="02" title="OUR APPROACH" />
          <div className="flex flex-wrap gap-2 mt-6 mb-8">
            {APPROACH_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-xs uppercase tracking-widest font-medium transition-colors ${
                  activeTab === tab ? "bg-nebco-red text-white" : "bg-white text-arch-black hover:bg-nebco-red/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8">
            <p className="text-silver-graphite leading-relaxed">
              For {activeTab.toLowerCase()} opportunities, NEBCO evaluates property potential, stakeholder
              authority, financial viability and execution capability before any commitment is made.
            </p>
            <ul className="space-y-2">
              {["Clear or verifiable ownership", "Demonstrable market potential", "Practical regulatory pathway", "Aligned stakeholder interests"].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <span className="text-nebco-red">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 03 Participation models */}
      <Section id="models">
        <SectionEyebrow number="03" title="PARTICIPATION MODELS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {MODELS.map((m) => (
            <div
              key={m.num}
              className={`p-6 min-h-[280px] flex flex-col ${m.dark ? "bg-arch-black text-white" : "bg-ivory border border-soft-concrete"}`}
            >
              <span className={`font-mono text-sm ${m.dark ? "text-nebco-red" : "text-nebco-red"}`}>{m.num}</span>
              <div className="w-10 h-10 border border-nebco-red rounded-full flex items-center justify-center text-nebco-red mt-4 mb-4 text-sm">
                ◈
              </div>
              <h3 className="font-heading font-bold text-sm leading-snug">{m.title}</h3>
              <p className={`text-xs mt-3 flex-1 ${m.dark ? "text-white/60" : "text-silver-graphite"}`}>{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 & 05 Focus + Due diligence */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-arch-black text-white p-10 lg:p-16">
          <SectionEyebrow number="04" title="WHERE WE FOCUS" className="text-nebco-red" />
          <h2 className="font-heading font-bold text-2xl mt-4">
            We focus on opportunities that are efficient, feasible and repeatable.
          </h2>
          <ul className="mt-8 space-y-3">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-3 text-sm text-white/70">
                <span className="w-2 h-2 bg-nebco-red rounded-full" /> {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ivory p-10 lg:p-16">
          <SectionEyebrow number="05" title="DUE DILIGENCE" />
          <h2 className="font-heading font-bold text-xl mt-4">
            A disciplined, stage-gated due diligence process.
          </h2>
          <div className="flex flex-wrap gap-3 mt-8">
            {DUE_DILIGENCE.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-nebco-red text-nebco-red flex items-center justify-center text-xs font-mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="text-xs font-medium">{step}</span>
                {i < DUE_DILIGENCE.length - 1 && <span className="text-nebco-red hidden sm:inline">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Dual CTA */}
      <Section>
        <SectionEyebrow number="06" title="GET STARTED" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-ivory border border-soft-concrete p-10">
            <div className="w-12 h-12 border border-nebco-red rounded-full flex items-center justify-center text-nebco-red mb-4">🏠</div>
            <h3 className="font-heading font-bold text-xl">Have Land with Development Potential?</h3>
            <p className="text-sm text-silver-graphite mt-3">Tell us about the property, ownership structure and what you want to achieve.</p>
            <a href="/contact?type=opportunity" className="inline-block mt-6 px-6 py-3 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors">
              Submit Your Property →
            </a>
          </div>
          <div className="bg-nebco-red text-white p-10">
            <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center mb-4">🤝</div>
            <h3 className="font-heading font-bold text-xl">Interested in Project-Specific Collaboration?</h3>
            <p className="text-sm text-white/80 mt-3">NEBCO welcomes conversations with strategic participants for suitable projects.</p>
            <a href="/contact?type=partnership" className="inline-block mt-6 px-6 py-3 bg-white text-nebco-red text-sm font-semibold uppercase tracking-wide hover:bg-ivory transition-colors">
              Express Partnership Interest →
            </a>
          </div>
        </div>
      </Section>

      {/* Disclaimer */}
      <section className="bg-soft-concrete py-8">
        <div className="container-nebco flex gap-6 items-start">
          <div className="w-12 h-12 rounded-full bg-pale-gold flex items-center justify-center shrink-0 text-arch-black">⚖</div>
          <p className="text-sm text-silver-graphite leading-relaxed">
            <strong className="text-arch-black">Important:</strong> Submission does not create an offer, commitment,
            partnership or obligation to invest. Every opportunity is subject to independent review, professional
            advice, approvals, due diligence and signed definitive agreements. Nothing on this website constitutes
            an investment recommendation, public solicitation or guarantee of return.
          </p>
        </div>
      </section>

      <CTABand
        title="Start with the opportunity. We will evaluate the structure."
        buttonLabel="Submit an Opportunity"
        buttonHref="/contact?type=opportunity"
        variant="dark"
      />
    </>
  );
}
