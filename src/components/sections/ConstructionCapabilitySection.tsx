"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const CAPABILITY_TOPICS = [
  {
    id: "residential",
    label: "Residential",
    slides: [
      {
        title: "Homes and communities built for real life.",
        description:
          "Apartments, villas and mixed-use communities delivered with care and long-term value.",
        image: IMAGES.capabilityResidential,
      },
      {
        title: "Apartment blocks designed for durability and daily use.",
        description:
          "Structured delivery for multi-family housing — from substructure to handover with quality systems throughout.",
        image: IMAGES.villa,
      },
      {
        title: "Neighbourhood-scale residential with coordinated delivery.",
        description:
          "Phased construction for estates and housing clusters where programme, access and finish quality must stay aligned.",
        image: IMAGES.brickBuilding,
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    slides: [
      {
        title: "Commercial spaces that support business growth.",
        description:
          "Offices, retail and mixed-use buildings planned for function, durability and market relevance.",
        image: IMAGES.commercialBuilding,
      },
      {
        title: "Office and retail environments built for operation.",
        description:
          "Core-and-shell and fit-out ready delivery with MEP coordination, access planning and tenant-ready handover.",
        image: IMAGES.meetingOffice,
      },
      {
        title: "Mixed-use commercial with integrated site control.",
        description:
          "Retail podiums, office towers and shared services delivered through one disciplined construction programme.",
        image: IMAGES.nightBuilding,
      },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    slides: [
      {
        title: "Guest experiences shaped through disciplined delivery.",
        description:
          "Hotels, resorts and hospitality facilities built with operational clarity and quality finish.",
        image: IMAGES.luxuryApartment,
      },
      {
        title: "Hotels and resorts where programme and finish matter.",
        description:
          "Room blocks, lobbies and back-of-house zones sequenced to support pre-opening timelines and brand standards.",
        image: IMAGES.hotelConstruction,
      },
      {
        title: "Boutique hospitality with detail-led execution.",
        description:
          "Smaller-footprint hotels and lodges delivered with tighter supervision and finish-sensitive coordination.",
        image: IMAGES.modernApartment,
      },
    ],
  },
  {
    id: "institutional",
    label: "Institutional",
    slides: [
      {
        title: "Institutional projects delivered with accountability.",
        description:
          "Education, healthcare and civic buildings executed through structured planning and site control.",
        image: IMAGES.brickBuilding,
      },
      {
        title: "Schools and campuses built for long-term use.",
        description:
          "Classroom blocks, labs and shared facilities delivered with safety, durability and stakeholder reporting built in.",
        image: IMAGES.schoolBuilding,
      },
      {
        title: "Healthcare and civic buildings with rigorous oversight.",
        description:
          "Technical spaces, circulation and services coordinated through structured inspection and documentation.",
        image: IMAGES.commercialBuilding,
      },
    ],
  },
  {
    id: "specialised",
    label: "Specialised",
    slides: [
      {
        title: "Complex builds handled with technical rigour.",
        description:
          "Specialised facilities requiring tighter coordination, quality systems and experienced supervision.",
        image: IMAGES.qualityWorker,
      },
      {
        title: "Industrial and technical facilities on constrained sites.",
        description:
          "Structural, MEP and specialist packages managed with interface control and quality-critical hold points.",
        image: IMAGES.warehouse,
      },
      {
        title: "Heritage-sensitive and technically demanding works.",
        description:
          "Projects where method, material and sequencing need tighter engineering alignment and site discipline.",
        image: IMAGES.constructionSite,
      },
    ],
  },
  {
    id: "redevelopment",
    label: "Redevelopment",
    slides: [
      {
        title: "Redevelopment with context and commercial sense.",
        description:
          "Adaptive reuse and redevelopment projects guided by feasibility, structure and long-term value.",
        image: IMAGES.villa,
      },
      {
        title: "Adaptive reuse that respects existing structure.",
        description:
          "Retrofit and expansion works coordinated around live environments, structural constraints and approval cycles.",
        image: IMAGES.brickBuilding,
      },
      {
        title: "Urban infill with programme and access challenges.",
        description:
          "Tight-site redevelopment delivered through staged mobilisation, neighbour coordination and controlled logistics.",
        image: IMAGES.cityKathmandu,
      },
    ],
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

function CapabilityContent({
  slide,
  topicLabel,
}: {
  slide: (typeof CAPABILITY_TOPICS)[number]["slides"][number];
  topicLabel: string;
}) {
  return (
    <div key={`${topicLabel}-${slide.title}`} className="capability-panel-enter">
      <h3 className="capability-slide-title">{slide.title}</h3>
      <p className="capability-slide-body">{slide.description}</p>
    </div>
  );
}

export function ConstructionCapabilitySection() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const activeTopic = CAPABILITY_TOPICS[activeTopicIndex];
  const activeSlide = activeTopic.slides[activeSlideIndex];
  const totalCapabilities = CAPABILITY_TOPICS.length;

  const selectTopic = useCallback((index: number) => {
    setActiveTopicIndex(index);
    setActiveSlideIndex(0);
  }, []);

  const goPrev = useCallback(() => {
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(activeSlideIndex - 1);
      return;
    }

    const prevTopicIndex = activeTopicIndex === 0 ? CAPABILITY_TOPICS.length - 1 : activeTopicIndex - 1;
    setActiveTopicIndex(prevTopicIndex);
    setActiveSlideIndex(CAPABILITY_TOPICS[prevTopicIndex].slides.length - 1);
  }, [activeSlideIndex, activeTopicIndex]);

  const goNext = useCallback(() => {
    if (activeSlideIndex < activeTopic.slides.length - 1) {
      setActiveSlideIndex(activeSlideIndex + 1);
      return;
    }

    const nextTopicIndex = activeTopicIndex === CAPABILITY_TOPICS.length - 1 ? 0 : activeTopicIndex + 1;
    setActiveTopicIndex(nextTopicIndex);
    setActiveSlideIndex(0);
  }, [activeSlideIndex, activeTopic.slides.length, activeTopicIndex]);

  const globalIndex = activeTopicIndex + 1;

  return (
    <section className="capability-section bg-ivory-light py-8 lg:py-10 xl:py-11">
      <div className="container-nebco">
        <div className="capability-layout">
          <div className="capability-heading-block">
            <SectionEyebrow
              number="01"
              title="CAPABILITY"
              className="!text-[11px] !tracking-[0.16em] !mb-1.5"
            />
            <h2 className="capability-heading">
              <span className="capability-heading-line">We build across different</span>
              <span className="capability-heading-line">project types.</span>
              <span className="capability-heading-line capability-heading-line--second">
                The discipline remains
              </span>
              <span className="capability-heading-line">the same.</span>
            </h2>
          </div>

          <div className="min-w-0">
            <div className="capability-tabs-wrap">
              <div role="tablist" aria-label="Construction capability types" className="capability-tabs">
                {CAPABILITY_TOPICS.map((topic, index) => (
                  <button
                    key={topic.id}
                    id={`capability-tab-${topic.id}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTopicIndex === index}
                    aria-controls={`capability-panel-${topic.id}`}
                    onClick={() => selectTopic(index)}
                    className={`capability-tab ${
                      activeTopicIndex === index ? "capability-tab--active" : ""
                    }`}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              id={`capability-panel-${activeTopic.id}`}
              role="tabpanel"
              aria-labelledby={`capability-tab-${activeTopic.id}`}
              className="capability-panel-grid"
            >
              <div className="capability-image-frame">
                <Image
                  key={`${activeTopic.id}-${activeSlideIndex}`}
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  className="capability-image-enter"
                  sizes="(max-width: 768px) 100vw, 38vw"
                  priority={activeTopicIndex === 0}
                />
              </div>

              <div className="capability-copy-column">
                <CapabilityContent slide={activeSlide} topicLabel={activeTopic.label} />

                <div className="capability-nav">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="capability-nav-btn"
                    aria-label={`Previous ${activeTopic.label} capability`}
                  >
                    <GoldArrow direction="left" />
                  </button>
                  <span className="capability-nav-count">
                    {String(globalIndex).padStart(2, "0")} / {String(totalCapabilities).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="capability-nav-btn"
                    aria-label={`Next ${activeTopic.label} capability`}
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
