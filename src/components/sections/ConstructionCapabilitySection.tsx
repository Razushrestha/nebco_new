"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

/** One featured project per capability type - tab click swaps image + copy */
const CAPABILITY_PROJECTS = [
  {
    id: "residential",
    label: "Residential",
    title: "Homes and communities built for real life.",
    description:
      "Apartments, villas and mixed-use communities delivered with care and long-term value.",
    image: IMAGES.capabilityResidential,
    imageAlt: "Modern residential apartment building at dusk",
  },
  {
    id: "commercial",
    label: "Commercial",
    title: "Commercial spaces that support business growth.",
    description:
      "Offices, retail and mixed-use buildings planned for function, durability and market relevance.",
    image: IMAGES.selectedWorkCommercial,
    imageAlt: "Commercial building project in Lazimpat",
  },
  {
    id: "hospitality",
    label: "Hospitality",
    title: "Guest experiences shaped through disciplined delivery.",
    description:
      "Hotels, resorts and hospitality facilities built with operational clarity and quality finish.",
    image: IMAGES.hotelConstruction,
    imageAlt: "Hospitality construction project on site",
  },
  {
    id: "institutional",
    label: "Institutional",
    title: "Institutional projects delivered with accountability.",
    description:
      "Education, healthcare and civic buildings executed through structured planning and site control.",
    image: IMAGES.schoolBuilding,
    imageAlt: "Institutional campus and education building",
  },
  {
    id: "specialised",
    label: "Specialised",
    title: "Complex builds handled with technical rigour.",
    description:
      "Specialised facilities requiring tighter coordination, quality systems and experienced supervision.",
    image: IMAGES.warehouse,
    imageAlt: "Specialised industrial and technical facility",
  },
  {
    id: "redevelopment",
    label: "Redevelopment",
    title: "Redevelopment with context and commercial sense.",
    description:
      "Adaptive reuse and redevelopment projects guided by feasibility, structure and long-term value.",
    image: IMAGES.selectedWorkFeatured,
    imageAlt: "Mixed-use redevelopment project",
  },
] as const;

function GoldArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 14" fill="none" className="capability-nav-arrow" aria-hidden="true">
      {direction === "left" ? (
        <path
          d="M21 7H3M8 2L3 7l5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M3 7h18M16 2l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export function ConstructionCapabilitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = CAPABILITY_PROJECTS[activeIndex];
  const total = CAPABILITY_PROJECTS.length;

  const selectProject = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  return (
    <section className="capability-section bg-ivory-light">
      <div className="container-nebco">
        <div className="capability-layout">
          <div className="capability-heading-block">
            <SectionEyebrow number="01" title="CAPABILITY" className="capability-eyebrow" />
            <h2 className="capability-heading">
              We build across different project types. The discipline remains the same.
            </h2>
          </div>

          <div className="capability-main">
            <div className="capability-tabs-wrap">
              <div role="tablist" aria-label="Construction capability types" className="capability-tabs">
                {CAPABILITY_PROJECTS.map((project, index) => (
                  <button
                    key={project.id}
                    id={`capability-tab-${project.id}`}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls="capability-panel"
                    onClick={() => selectProject(index)}
                    className={`capability-tab${activeIndex === index ? " capability-tab--active" : ""}`}
                  >
                    {project.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              id="capability-panel"
              role="tabpanel"
              aria-labelledby={`capability-tab-${active.id}`}
              className="capability-panel-grid"
            >
              <div className="capability-image-frame">
                <Image
                  key={active.id}
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  className="capability-image-enter object-cover"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  priority={activeIndex === 0}
                />
              </div>

              <div className="capability-copy-column">
                <div key={active.id} className="capability-panel-enter">
                  <h3 className="capability-slide-title">{active.title}</h3>
                  <p className="capability-slide-body">{active.description}</p>
                </div>

                <div className="capability-nav">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="capability-nav-btn"
                    aria-label="Previous project type"
                  >
                    <GoldArrow direction="left" />
                  </button>
                  <span className="capability-nav-count">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="capability-nav-btn"
                    aria-label="Next project type"
                  >
                    <GoldArrow direction="right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
