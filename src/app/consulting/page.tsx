"use client";

import { useState } from "react";
import Image from "next/image";
import { ConsultingHero } from "@/components/sections/ConsultingHero";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HubDiagram } from "@/components/ui/HubDiagram";
import { CTABand } from "@/components/sections/SharedSections";
import { IMAGES } from "@/lib/images";

const AUDIENCES = ["Landowners", "NRNs", "Developers", "Investors", "Businesses"];

const AUDIENCE_CONTENT: Record<string, { title: string; points: string[] }> = {
  Landowners: {
    title: "Landowners & Families",
    points: ["Evaluate development options and ownership objectives", "Assess partnership structures and income potential", "Compare build, lease, sell and JV pathways", "Establish whether the opportunity is practical"],
  },
  NRNs: {
    title: "NRNs & Overseas Nepalis",
    points: ["Local coordination point with digital communication", "Documented decisions and milestone reporting", "Property evaluation and feasibility support", "Construction and market engagement coordination"],
  },
  Developers: {
    title: "Developers & Investors",
    points: ["Feasibility and project structuring support", "Finance coordination and execution planning", "Market positioning and professional team assembly", "Construction project management through handover"],
  },
  Investors: {
    title: "Investors",
    points: ["Project-specific opportunity evaluation", "Financial modelling and risk assessment", "Market testing and stakeholder coordination", "Due diligence and implementation planning"],
  },
  Businesses: {
    title: "Businesses & Institutions",
    points: ["Owner-occupied offices and commercial buildings", "Hospitality and specialised facilities", "Built-to-suit and income-generating properties", "Redevelopment and adaptive reuse"],
  },
};

const SPECIALISMS = [
  "Property Evaluation",
  "Feasibility Study",
  "Project Strategy",
  "Design Coordination",
  "Finance Coordination",
  "Construction PM",
  "Market Engagement",
];

const PROCESS_STEPS = [
  "Discovery", "Analysis", "Strategy", "Planning", "Execution", "Collaboration", "Monitoring", "Delivery",
];

const SERVICE_BOXES = [
  "Land Assessment",
  "Feasibility Study",
  "Development Strategy",
  "Pre-Construction Mgmt",
  "End-to-End Mgmt",
  "NRN Project Mgmt",
];

export default function ConsultingPage() {
  const [activeAudience, setActiveAudience] = useState("Landowners");

  const content = AUDIENCE_CONTENT[activeAudience];

  return (
    <>
      <ConsultingHero />

      {/* Problem statement */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-tight">
            A project can be technically buildable and still be commercially weak.
          </h2>
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image src={IMAGES.cityKathmandu} alt="City development" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ivory/80" />
          </div>
        </div>
      </Section>

      {/* Audience tabs */}
      <section className="bg-arch-black">
        <div className="flex flex-wrap border-b border-white/10">
          {AUDIENCES.map((aud) => (
            <button
              key={aud}
              type="button"
              onClick={() => setActiveAudience(aud)}
              className={`px-6 py-4 text-xs uppercase tracking-widest font-medium transition-colors ${
                activeAudience === aud
                  ? "bg-nebco-red text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {aud}
            </button>
          ))}
        </div>
        <div className="container-nebco py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={IMAGES.workersPlans} alt={content.title} fill className="object-cover" />
          </div>
          <div className="text-white">
            <h3 className="font-heading font-bold text-2xl">{content.title}</h3>
            <ul className="mt-6 space-y-3">
              {content.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-nebco-red shrink-0">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specialisms */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-4">
            {SPECIALISMS.map((s, i) => (
              <div key={s} className="flex items-center gap-4 border-b border-soft-concrete pb-3">
                <span className="text-nebco-red font-mono text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Property Evaluation", "Project Strategy", "Construction PM"].map((box, i) => (
              <div
                key={box}
                className={`p-6 ${i === 1 ? "bg-arch-black text-white" : "bg-soft-concrete"}`}
              >
                <h4 className="font-heading font-bold">{box}</h4>
                <p className={`text-sm mt-2 ${i === 1 ? "text-white/60" : "text-silver-graphite"}`}>
                  Coordinated professional inputs for informed project decisions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service icon grid */}
      <Section className="bg-ivory">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICE_BOXES.map((box, i) => (
            <div
              key={box}
              className={`p-6 text-center min-h-[140px] flex flex-col items-center justify-center ${
                i === 1 ? "bg-nebco-red text-white" : "bg-white border border-soft-concrete"
              }`}
            >
              <span className="text-2xl mb-2">◈</span>
              <p className="text-xs font-semibold uppercase tracking-wide">{box}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8-step process */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={IMAGES.constructionSite} alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <SectionEyebrow number="07" title="DEVELOPMENT PROCESS" className="text-nebco-red" />
          <div className="flex flex-wrap justify-between gap-4 mt-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step} className="text-center w-[calc(25%-12px)] min-w-[80px]">
                <div className="w-10 h-10 rounded-full border border-nebco-red text-nebco-red flex items-center justify-center text-xs font-mono mx-auto">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs mt-2 text-white/70 uppercase tracking-wide">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Consortium diagram */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HubDiagram />
          <div>
            <h2 className="font-heading font-bold text-2xl">One Coordinating Platform</h2>
            <p className="mt-4 text-silver-graphite leading-relaxed">
              NEBCO acts as the project-development and coordination platform. Regulated or specialist services
              are delivered by appropriately appointed professionals under project-specific scopes.
            </p>
          </div>
        </div>
      </Section>

      {/* Early engagement */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[400px]">
          <Image src={IMAGES.sunsetSite} alt="Construction at sunset" fill className="object-cover" />
        </div>
        <div className="bg-ivory p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl">
            The earlier the questions are answered, the stronger the project becomes.
          </h2>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {["Feasibility", "Certainty", "Strategic Value", "Reduced Risk"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-pale-gold flex items-center justify-center text-nebco-red text-sm">
                  ◆
                </div>
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="What should this property become? Let's explore the possibilities together."
        buttonLabel="Evaluate My Property"
        buttonHref="/contact?type=land-evaluation"
        variant="red"
      />
    </>
  );
}
