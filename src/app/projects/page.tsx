"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ProjectCard } from "@/components/sections/SharedSections";
import { IMAGES } from "@/lib/images";

const FILTERS = ["All", "Construction", "Consulting", "Development", "Residential", "Commercial", "Mixed-Use", "Hospitality"];

const PROJECTS = [
  { title: "Mixed-Use Development", location: "Kathmandu", type: "Mixed-Use", service: "Consulting", status: "Ongoing", image: IMAGES.modernApartment, variant: "image" as const },
  { title: "Hospitality Development", location: "Pokhara", type: "Hospitality", service: "Development", status: "Proposed", image: IMAGES.commercialBuilding, variant: "red" as const },
  { title: "Commercial Building", location: "Lalitpur", type: "Commercial", service: "Construction", status: "Completed", image: IMAGES.brickBuilding, variant: "image" as const },
  { title: "Office Building", location: "Kathmandu", type: "Commercial", service: "Consulting", status: "Ongoing", image: IMAGES.workersPlans, variant: "dark" as const },
  { title: "Residential Building", location: "Biratnagar", type: "Residential", service: "Construction", status: "Completed", image: IMAGES.villa, variant: "image" as const },
  { title: "RCC Project", location: "Naxal, Kathmandu", type: "Residential", service: "Construction", status: "Ongoing", image: IMAGES.constructionSite, variant: "image" as const },
];

const SCOPES = [
  { title: "We Construct", desc: "Precision, quality and safety in building execution.", color: "bg-nebco-red", link: "/projects?filter=construction" },
  { title: "We Coordinate", desc: "Aligning people, processes and project responsibilities.", color: "bg-arch-black", link: "/projects?filter=consulting" },
  { title: "We Develop Selectively", desc: "Value-add partnerships for viable opportunities.", color: "bg-ivory border border-soft-concrete", link: "/projects?filter=development" },
];

const STAGES = [
  { title: "Concept", desc: "Understanding the opportunity and owner objectives.", icon: "◎" },
  { title: "Challenge", desc: "Identifying constraints and project requirements.", icon: "△" },
  { title: "NEBCO Role", desc: "Defining our contracted responsibilities.", icon: "▣" },
  { title: "Process", desc: "Coordinating execution through defined milestones.", icon: "◇" },
  { title: "Outcome", desc: "Verified results and current project progress.", icon: "★" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === filter || p.service === filter);

  return (
    <>
      {/* Hero composite */}
      <section className="relative min-h-[480px] bg-arch-black text-white overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3">
          {[IMAGES.nightBuilding, IMAGES.constructionSite, IMAGES.heroBlueprint].map((img, i) => (
            <div key={i} className="relative">
              <Image src={img} alt="" fill className="object-cover opacity-60" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-arch-black/50" />
        {/* Red trend line */}
        <svg className="absolute inset-0 w-full h-full z-10 opacity-60" preserveAspectRatio="none">
          <polyline
            points="0,400 200,300 400,350 600,200 800,280 1000,150 1200,200 1440,100"
            fill="none"
            stroke="#bc2026"
            strokeWidth="2"
          />
        </svg>
        <div className="container-nebco relative z-20 py-20 lg:py-28">
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl max-w-2xl leading-tight">
            Projects shaped by different needs, stages and responsibilities.
          </h1>
          <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
            Construction, development consulting and project coordination—each project page explains the context
            and NEBCO&apos;s actual role.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-soft-concrete py-4 sticky top-[72px] z-40">
        <div className="container-nebco flex flex-wrap items-center gap-4">
          <span className="section-eyebrow !mb-0">01 / Explore the Portfolio</span>
          <div className="flex flex-wrap gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs uppercase tracking-widest font-medium transition-colors ${
                  filter === f ? "text-nebco-red border-b-2 border-nebco-red" : "text-silver-graphite hover:text-arch-black"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[400px] lg:min-h-[500px]">
          <Image src={IMAGES.modernApartment} alt="Featured project" fill className="object-cover" />
        </div>
        <div className="bg-arch-black text-white p-10 lg:p-16 flex flex-col justify-center">
          <SectionEyebrow number="02" title="FEATURED PROJECT" className="text-nebco-red" />
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mt-4">Mixed-Use Development — Kathmandu</h2>
          <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
            <div><span className="text-white/50">Project Type</span><br /><strong>Mixed-Use</strong></div>
            <div><span className="text-white/50">Service</span><br /><strong>Development Consulting</strong></div>
            <div><span className="text-white/50">Status</span><br /><strong>Under Development</strong></div>
            <div><span className="text-white/50">NEBCO Role</span><br /><strong>Development Consultant</strong></div>
          </div>
          <div className="flex gap-6 mt-8">
            {["Pre-Solution", "Plan Approved", "Execution Stage"].map((s) => (
              <div key={s} className="text-center">
                <div className="w-10 h-10 rounded-full border border-nebco-red text-nebco-red flex items-center justify-center text-xs mx-auto">◈</div>
                <p className="text-[10px] mt-2 text-white/60 uppercase">{s}</p>
              </div>
            ))}
          </div>
          <Link href="/projects" className="inline-block mt-8 text-nebco-red text-sm font-semibold uppercase tracking-wide hover:underline">
            View Project Details →
          </Link>
        </div>
      </section>

      {/* Selected work grid */}
      <Section>
        <SectionEyebrow number="03" title="SELECTED WORK" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {filtered.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              location={project.location}
              status={project.status}
              image={project.image}
              variant={project.variant}
            />
          ))}
        </div>
      </Section>

      {/* Scope of responsibility */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {SCOPES.map((scope) => (
          <Link
            key={scope.title}
            href={scope.link}
            className={`${scope.color} p-10 min-h-[320px] flex flex-col justify-between group`}
          >
            <span className="text-3xl text-nebco-red">◈</span>
            <div>
              <h3 className={`font-heading font-bold text-xl ${scope.color.includes("ivory") ? "" : "text-white"}`}>
                {scope.title}
              </h3>
              <p className={`text-sm mt-3 ${scope.color.includes("ivory") ? "text-silver-graphite" : "text-white/70"}`}>
                {scope.desc}
              </p>
              <span className={`inline-block mt-4 text-xs uppercase tracking-widest font-semibold group-hover:underline ${scope.color.includes("ivory") ? "text-nebco-red" : "text-nebco-red"}`}>
                View Projects →
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Project stage format */}
      <Section className="blueprint-bg">
        <SectionEyebrow number="05" title="PROJECT STAGE FORMAT" />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {STAGES.map((stage) => (
            <div key={stage.title} className="text-center">
              <div className="w-14 h-14 rounded-full border-2 border-nebco-red text-nebco-red flex items-center justify-center text-xl mx-auto mb-4">
                {stage.icon}
              </div>
              <h4 className="font-heading font-bold text-sm">{stage.title}</h4>
              <p className="text-xs text-silver-graphite mt-2">{stage.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-white py-12 border-t border-soft-concrete">
        <div className="container-nebco flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-bold text-xl">Have a project at a different stage?</h2>
            <p className="text-sm text-silver-graphite mt-2">
              Tell us where it already is, and we&apos;ll show how we&apos;ll support it to completion.
            </p>
          </div>
          <Link
            href="/contact?type=project"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors shrink-0"
          >
            Discuss Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}
