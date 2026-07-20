"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HubDiagram } from "@/components/ui/HubDiagram";
import { CTABand } from "@/components/sections/SharedSections";
import { IMAGES } from "@/lib/images";

const DISCIPLINE_TABS = ["Architecture", "Engineering", "Finance", "Legal", "Real Estate", "Marketing"];

const PARTNER_CARDS = [
  { title: "Internal Operator", type: "Operated by NEBCO" },
  { title: "External Expert", type: "Reports to NEBCO" },
  { title: "Appointed Consultant", type: "Project-specific" },
  { title: "JV Collaborator", type: "Collaborative Partnership" },
];

const MATRIX_ROWS = ["NEBCO as Lead", "Appointed Third Parties", "Associated Consultants"];
const MATRIX_COLS = ["Focus", "Quality", "Deliverables", "Risks", "Expertise", "Accountability"];

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState("Architecture");

  return (
    <>
      <HeroSplit
        title="The right expertise, assembled around the project."
        subtitle="One coordinating platform. Clearly defined professional roles."
        image={IMAGES.meetingOffice}
        imageAlt="Team collaboration"
      />

      {/* Discipline bar */}
      <div className="bg-arch-black py-3">
        <div className="container-nebco flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-pale-gold">
          {["Architecture", "Engineering", "Finance", "Legal", "Construction", "Project Management"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>

      {/* 01 Hub diagram */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow number="01" title="OUR MODEL" />
            <h2 className="font-heading font-bold text-3xl leading-tight mt-2">
              No single discipline develops a real estate project alone.
            </h2>
            <p className="mt-6 text-silver-graphite leading-relaxed">
              NEBCO remains the central development and project-coordination point. Every appointment,
              responsibility, fee and reporting relationship is confirmed for the specific project.
            </p>
          </div>
          <HubDiagram />
        </div>
      </Section>

      {/* 02 Leadership */}
      <Section className="bg-soft-concrete">
        <SectionEyebrow number="02" title="CORE NEBCO TEAM" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 text-center">
            <div className="relative aspect-[3/4] bg-arch-black/5 mb-4 flex items-center justify-center">
              <span className="text-silver-graphite text-sm">Photo</span>
            </div>
            <p className="text-xs font-mono text-nebco-red uppercase">Managing Director</p>
            <p className="font-heading font-bold mt-1">R. B. Shah</p>
          </div>
          {["General Manager", "Project Leadership", "Engineering Leadership"].map((role) => (
            <div key={role} className="bg-white p-6 text-center">
              <div className="aspect-[3/4] bg-arch-black/5 mb-4 flex items-center justify-center">
                <div className="w-16 h-20 bg-arch-black/10" />
              </div>
              <p className="text-xs font-mono text-nebco-red uppercase">Leadership</p>
              <p className="font-heading font-bold mt-1 text-sm">{role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 External network */}
      <Section dark>
        <SectionEyebrow number="03" title="EXTERNAL PARTNERSHIP NETWORK" className="text-nebco-red" />
        <h2 className="font-heading font-bold text-2xl mt-2">Specialized expertise. Aligned by responsibility.</h2>
        <div className="flex flex-wrap gap-2 mt-8 border-b border-white/10 pb-4">
          {DISCIPLINE_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs uppercase tracking-widest ${
                activeTab === tab ? "text-nebco-red border-b-2 border-nebco-red" : "text-white/50 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {PARTNER_CARDS.map((card) => (
            <div key={card.title} className="border border-white/20 p-6 min-h-[180px] flex flex-col justify-between">
              <div className="w-full h-20 border border-nebco-red/40 flex items-center justify-center text-nebco-red text-2xl mb-4">
                △
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm">{card.title}</h4>
                <p className="text-xs text-white/50 mt-1">{card.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 mt-8 text-xs text-white/50">
          <span><span className="inline-block w-4 h-0.5 bg-nebco-red mr-2" />Operated by NEBCO</span>
          <span><span className="inline-block w-4 h-0.5 bg-pale-gold mr-2" />Partners to NEBCO</span>
          <span><span className="inline-block w-4 h-0.5 border border-dashed border-white/40 mr-2" />Collaborative Partnership</span>
        </div>
      </Section>

      {/* 04 Accountability matrix */}
      <Section>
        <SectionEyebrow number="04" title="ACCOUNTABILITY" />
        <h2 className="font-heading font-bold text-2xl mt-2">Collaboration works when accountability stays visible.</h2>
        <div className="overflow-x-auto mt-8">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-nebco-red">
                <th className="text-left py-3 pr-4 font-heading font-bold">Stakeholder</th>
                {MATRIX_COLS.map((col) => (
                  <th key={col} className="text-center py-3 px-2 font-mono text-xs uppercase text-nebco-red">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX_ROWS.map((row) => (
                <tr key={row} className="border-b border-soft-concrete">
                  <td className="py-4 pr-4 font-medium">{row}</td>
                  {MATRIX_COLS.map((col) => (
                    <td key={col} className="text-center py-4 px-2">
                      <span className="inline-block w-6 h-6 rounded-full border border-nebco-red text-nebco-red text-xs leading-6">
                        {col[0]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 05 Join network */}
      <Section className="bg-soft-concrete">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HubDiagram />
          <div>
            <SectionEyebrow number="05" title="JOIN OUR NETWORK" />
            <h2 className="font-heading font-bold text-2xl mt-2">Bring the right capability to the right project.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-nebco-red text-white p-6">
                <h4 className="font-heading font-bold">Partnering</h4>
                <p className="text-sm text-white/80 mt-2">For firms and agencies seeking project collaboration.</p>
              </div>
              <div className="bg-ivory border border-soft-concrete p-6">
                <h4 className="font-heading font-bold">Expert Registration</h4>
                <p className="text-sm text-silver-graphite mt-2">For freelance specialists and consultants.</p>
              </div>
            </div>
            <Link
              href="/contact?type=partnership"
              className="inline-block mt-8 px-8 py-4 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors"
            >
              Become a Partner →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
