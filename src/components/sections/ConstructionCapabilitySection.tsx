"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

const CAPABILITY_TOPICS = [
  {
    id: "residential",
    label: "Residential",
    slides: [
      {
        title: "Homes and communities built for real life.",
        description:
          "Apartments, villas and mixed-use communities delivered with care and long-term value.",
        image: IMAGES.modernApartment,
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
    <svg viewBox="0 0 16 10" fill="none" className="w-3.5 h-2.5" aria-hidden="true">
      {direction === "left" ? (
        <path
          d="M14 5H2M6 1.5L2 5l4 3.5"
          stroke={GOLD}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M2 5h12M10 1.5l4 3.5-4 3.5"
          stroke={GOLD}
          strokeWidth="1.1"
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
      <h3 className="font-heading font-bold text-[1.2rem] sm:text-[1.3rem] lg:text-[1.35rem] leading-[1.25] text-arch-black tracking-tight">
        {slide.title}
      </h3>
      <p className="mt-4 text-[14px] lg:text-[15px] text-silver-graphite leading-[1.65] max-w-[20rem]">
        {slide.description}
      </p>
    </div>
  );
}

export function ConstructionCapabilitySection() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const activeTopic = CAPABILITY_TOPICS[activeTopicIndex];
  const activeSlide = activeTopic.slides[activeSlideIndex];
  const slideCount = activeTopic.slides.length;

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
  const totalCapabilities = CAPABILITY_TOPICS.length;

  return (
    <section className="bg-ivory-light py-14 lg:py-20 xl:py-24">
      <div className="container-nebco">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
          <div className="lg:col-span-4 xl:col-span-4">
            <SectionEyebrow
              number="01"
              title="CAPABILITY"
              className="!text-[11px] !tracking-[0.16em] !mb-4"
            />
            <h2 className="font-heading font-bold text-[1.65rem] sm:text-[1.85rem] lg:text-[2rem] xl:text-[2.15rem] leading-[1.18] tracking-[-0.02em] text-arch-black max-w-[22rem]">
              We build across different project types. The discipline remains the same.
            </h2>
          </div>

          <div className="lg:col-span-8 xl:col-span-8 min-w-0">
            <div
              role="tablist"
              aria-label="Construction capability types"
              className="overflow-x-auto pb-1 -mx-1 px-1 lg:overflow-visible"
            >
              <div className="flex items-center gap-5 sm:gap-6 lg:gap-7 min-w-max lg:min-w-0 lg:flex-wrap lg:justify-start border-b border-soft-concrete/80">
                {CAPABILITY_TOPICS.map((topic, index) => (
                  <button
                    key={topic.id}
                    id={`capability-tab-${topic.id}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTopicIndex === index}
                    aria-controls={`capability-panel-${topic.id}`}
                    onClick={() => selectTopic(index)}
                    className={`pb-3 text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-[0.14em] transition-colors whitespace-nowrap border-b-2 -mb-px ${
                      activeTopicIndex === index
                        ? "text-nebco-red border-nebco-red"
                        : "text-arch-black border-transparent hover:text-nebco-red/80"
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
              className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8 mt-8 lg:mt-10 items-stretch"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px] lg:min-h-[320px] xl:min-h-[340px] bg-soft-concrete overflow-hidden">
                <Image
                  key={`${activeTopic.id}-${activeSlideIndex}`}
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  className="object-cover capability-image-enter"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>

              <div className="flex flex-col justify-between py-1 md:py-2 min-h-[200px] md:min-h-0">
                <CapabilityContent slide={activeSlide} topicLabel={activeTopic.label} />

                <div className="flex items-center gap-4 mt-8 md:mt-10">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="p-1 hover:opacity-70 transition-opacity"
                    aria-label={`Previous ${activeTopic.label} capability`}
                  >
                    <GoldArrow direction="left" />
                  </button>
                  <span className="font-mono text-[12px] tracking-[0.12em]" style={{ color: GOLD }}>
                    {String(globalIndex).padStart(2, "0")} / {String(totalCapabilities).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="p-1 hover:opacity-70 transition-opacity"
                    aria-label={`Next ${activeTopic.label} capability`}
                  >
                    <GoldArrow direction="right" />
                  </button>
                  <span className="ml-auto text-[10px] font-mono uppercase tracking-[0.12em] text-silver-graphite/80">
                    {String(activeSlideIndex + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
