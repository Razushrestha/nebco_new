"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const CREAM = "#f5f2ed";
const INK = "#0d0f12";

const JOURNEY = [
  {
    number: "01",
    era: "Before 2001",
    title: "Industry Foundation",
    description:
      "Our early years were defined by hands-on experience, craftsmanship and building trust on every project.",
    image: IMAGES.aboutFoundationSite,
    alt: "Early construction workers on site",
    tone: "mono" as const,
  },
  {
    number: "02",
    era: "2001",
    title: "NEBCO Formally Established",
    description:
      "NEBCO was formally established as a private limited company in 2001, with structured systems and governance from the start.",
    image: IMAGES.commercialBuilding,
    alt: "NEBCO office building exterior",
    tone: "color" as const,
  },
  {
    number: "03",
    era: "Second Generation",
    title: "Construction and Development",
    description:
      "Leadership transition brought new capabilities in project management, design coordination and development delivery across complex projects.",
    image: IMAGES.constructionSite,
    alt: "Building under construction",
    tone: "color" as const,
  },
  {
    number: "04",
    era: "Current Chapter",
    title: "An Integrated Platform",
    description:
      "We operate across construction, consulting and investments—working together as one platform to create end-to-end value for our clients.",
    image: IMAGES.nightBuilding,
    alt: "Modern completed building at night",
    tone: "color" as const,
  },
  {
    number: "05",
    era: "The Future",
    title: "Stronger Real Estate Outcomes",
    description:
      "We continue to evolve with market needs, deliver long-term assets, stronger communities and lasting value for generations to come.",
    image: IMAGES.modernApartment,
    alt: "Modern urban development aerial view",
    tone: "color" as const,
  },
] as const;

const PURPOSE = [
  {
    title: "Vision",
    desc: "Transform opportunities into valuable, well-managed assets.",
    icon: "vision",
  },
  {
    title: "Mission",
    desc: "Connect land, expertise, finance and construction capability.",
    icon: "mission",
  },
  {
    title: "Promise",
    desc: "Clarity before construction. Accountability throughout.",
    icon: "promise",
  },
] as const;

const VALUES = [
  {
    num: "01",
    title: "Trust",
    desc: "We build trust through our actions, not just our words.",
    icon: "trust" as const,
  },
  {
    num: "02",
    title: "Accountability",
    desc: "We own our commitments and deliver on them.",
    icon: "accountability" as const,
  },
  {
    num: "03",
    title: "Practical Thinking",
    desc: "We focus on solutions that are realistic and effective.",
    icon: "practical" as const,
  },
  {
    num: "04",
    title: "Collaboration",
    desc: "We achieve more by working together.",
    icon: "collaboration" as const,
  },
  {
    num: "05",
    title: "Transparency",
    desc: "We communicate openly and share information.",
    icon: "transparency" as const,
  },
  {
    num: "06",
    title: "Long-Term Value",
    desc: "We create assets and relationships that last.",
    icon: "value" as const,
  },
] as const;

const DIVISIONS = [
  {
    title: "Construction",
    verb: "Execute",
    desc: "Delivering quality construction through safe practices, technical excellence and timely execution.",
    href: "/construction",
    tone: "red" as const,
    iconSrc: "/work_by_responsibility/processed/we-construct-icon.png",
    backgroundSrc: "/work_by_responsibility/we construct background.png",
  },
  {
    title: "Consulting",
    verb: "Coordinate",
    desc: "Bringing clarity and structure through planning, design coordination, project management and advisory services.",
    href: "/consulting",
    tone: "dark" as const,
    iconSrc: "/work_by_responsibility/processed/coordinate-icon.png",
    backgroundSrc: "/work_by_responsibility/coordinate background.png",
  },
  {
    title: "Investments",
    verb: "Participate Selectively",
    desc: "Investing in carefully selected real estate opportunities that align with our strategy and create long-term value.",
    href: "/investments",
    tone: "cream" as const,
    iconSrc: "/work_by_responsibility/processed/we-develop-icon.png",
    backgroundSrc: "/work_by_responsibility/we develop background.png",
  },
] as const;

const LEADERS = [
  { roleLines: ["Managing Director"], name: "Name Placeholder" },
  { roleLines: ["Director", "Operations"], name: "Name Placeholder" },
  { roleLines: ["Director", "Strategy"], name: "Name Placeholder" },
] as const;

const CREDENTIALS = [
  {
    title: "A-Class Capability",
    desc: "Recognized as an A-Class construction company by the Government of Nepal. Proven capability across building, infrastructure and development.",
    icon: "badge" as const,
  },
  {
    title: "Established in 2001",
    desc: "NEBCO Private Limited was registered in 2001 and has operated with integrity and continuity since then.",
    icon: "document" as const,
  },
  {
    title: "Kathmandu Based",
    desc: "Headquartered in Kathmandu, delivering projects across Nepal with deep local understanding and strong execution.",
    icon: "pin" as const,
  },
] as const;

const COMPANY_META = [
  {
    label: "Company Type",
    value: "Private Limited Company",
    icon: "building" as const,
  },
  {
    label: "Industry",
    value: "Construction, Consulting & Investment",
    icon: "map" as const,
  },
  {
    label: "Registration No.",
    value: "110424/058/059",
    icon: "seal" as const,
  },
] as const;

const CERTIFICATES = [
  {
    src: "/images/certificates/certificate-1.png",
    alt: "Government of Nepal - A-Class Certificate of Construction",
  },
  {
    src: "/images/certificates/certificate-2.png",
    alt: "NEBCO registration certificate",
  },
  {
    src: "/images/certificates/certificate-3.png",
    alt: "NEBCO compliance certificate",
  },
  {
    src: "/images/certificates/certificate-4.png",
    alt: "NEBCO industry accreditation certificate",
  },
] as const;

function ValueIcon({ type }: { type: (typeof VALUES)[number]["icon"] }) {
  const s = {
    stroke: GOLD,
    strokeWidth: 1.35,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <span
      className="flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
      style={{ boxShadow: `inset 0 0 0 1.25px ${GOLD}` }}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 28 28">
        {type === "trust" ? (
          <>
            <path d="M14 3.5 23 7v6c0 5.6-3.8 9.4-9 11.4C8.8 22.4 5 18.6 5 13V7l9-3.5Z" {...s} />
            <path d="M10.2 13.6 12.8 16l5.2-5.4" {...s} />
          </>
        ) : type === "accountability" ? (
          <>
            <rect x="5" y="4" width="18" height="20" rx="1.2" {...s} />
            <path d="M9 10h10M9 14h10M9 18h6" {...s} />
          </>
        ) : type === "practical" ? (
          <>
            <circle cx="14" cy="14" r="9" {...s} />
            <path d="M14 8v6l4 2.5" {...s} />
          </>
        ) : type === "collaboration" ? (
          <>
            <circle cx="10" cy="10" r="3.2" {...s} />
            <circle cx="18" cy="10" r="3.2" {...s} />
            <path d="M4.5 21c1.2-3.2 3.4-4.8 5.5-4.8S14.3 17.8 15.5 21" {...s} />
            <path d="M12.5 21c1.2-3.2 3.4-4.8 5.5-4.8s4.3 1.6 5.5 4.8" {...s} />
          </>
        ) : type === "transparency" ? (
          <>
            <ellipse cx="14" cy="14" rx="9" ry="5.5" {...s} />
            <circle cx="14" cy="14" r="2.6" {...s} />
          </>
        ) : (
          <>
            <path d="M5 20V10l4.5-3 4.5 3 4.5-3 4.5 3v10" {...s} />
            <path d="M5 20h18M9.5 10v10M14 13v7M18.5 10v10" {...s} />
          </>
        )}
      </svg>
    </span>
  );
}

function CredIcon({ type }: { type: (typeof CREDENTIALS)[number]["icon"] }) {
  const s = {
    stroke: GOLD,
    strokeWidth: 1.45,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "badge") {
    const ticks = Array.from({ length: 12 }, (_, i) => {
      const a = ((i * 30 - 90) * Math.PI) / 180;
      const x1 = 20 + Math.cos(a) * 9.2;
      const y1 = 14.5 + Math.sin(a) * 9.2;
      const x2 = 20 + Math.cos(a) * 11.2;
      const y2 = 14.5 + Math.sin(a) * 11.2;
      return { x1, y1, x2, y2 };
    });

    return (
      <svg width="42" height="42" viewBox="0 0 40 40" aria-hidden="true">
        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} {...s} strokeWidth={1.25} />
        ))}
        <circle cx="20" cy="14.5" r="8.2" {...s} />
        <circle cx="20" cy="14.5" r="5.4" {...s} />
        <path d="M16.8 14.6l2.1 2.1 4.4-4.6" {...s} />
        <path d="M14.5 23.2 12.2 34.5 20 30.8l7.8 3.7-2.3-11.3" {...s} />
        <path d="M17.2 27.2v7.8M22.8 27.2v7.8" {...s} />
      </svg>
    );
  }

  return (
    <svg width="42" height="42" viewBox="0 0 40 40" aria-hidden="true">
      {type === "document" ? (
        <>
          <path d="M11 6h12.5L28 10.5V34H11V6Z" {...s} />
          <path d="M23.5 6v4.5H28" {...s} />
          <path d="M15 15h10M15 19.5h10M15 24h6.5" {...s} />
          <circle cx="25" cy="28" r="3.2" {...s} />
          <path d="M23.6 28.1l1.1 1.1 2.2-2.4" {...s} />
        </>
      ) : (
        <>
          <path
            d="M20 4.5c5.2 0 9.4 4.1 9.4 9.5 0 7.1-9.4 15-9.4 15S10.6 21.1 10.6 14C10.6 8.6 14.8 4.5 20 4.5Z"
            {...s}
          />
          <circle cx="20" cy="13.8" r="3.4" {...s} />
          <path d="M15.2 20.8c1.3 2.4 3 3.8 4.8 3.8s3.5-1.4 4.8-3.8" {...s} />
        </>
      )}
    </svg>
  );
}

function MetaIcon({ type }: { type: (typeof COMPANY_META)[number]["icon"] }) {
  const s = {
    stroke: GOLD,
    strokeWidth: 1.35,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      {type === "building" ? (
        <>
          <rect x="7" y="6" width="18" height="20" {...s} />
          <path d="M11 10h3M18 10h3M11 14.5h3M18 14.5h3M11 19h3M18 19h3" {...s} />
          <path d="M14 26v-3.5h4V26" {...s} />
        </>
      ) : type === "map" ? (
        <>
          {/* Folded map */}
          <path d="M5.5 10.5 11.5 8l9 3.5 6-2.5v14.5l-6 2.5-9-3.5-6 2.5V10.5Z" {...s} />
          <path d="M11.5 8v14M20.5 11.5v14" {...s} />
          {/* Tree */}
          <path d="M16 14.5v5.5" {...s} />
          <path d="M16 14.5c-2.2 0-3.5 1.6-3.5 3.2 0 0 1.4-.4 3.5-.4s3.5.4 3.5.4c0-1.6-1.3-3.2-3.5-3.2Z" {...s} />
          <path d="M16 12.2c-1.5 0-2.4 1.1-2.4 2.2 0 0 1-.3 2.4-.3s2.4.3 2.4.3c0-1.1-.9-2.2-2.4-2.2Z" {...s} />
        </>
      ) : (
        <>
          <circle cx="16" cy="13" r="7" {...s} />
          <circle cx="16" cy="13" r="4.2" {...s} />
          <path d="M12.5 19.5 11 27.5l5-2.2 5 2.2-1.5-8" {...s} />
          <path d="M14.2 22v5.5M17.8 22v5.5" {...s} />
        </>
      )}
    </svg>
  );
}

const STORY_PARAGRAPHS = [
  "NEBCO began with a construction company built on craftsmanship and trust. Over time, the needs around us evolved, projects required more than construction, and clients needed a partner who could deliver more.",
  "We listened, learned and built the capabilities our clients needed. Today, NEBCO operates as an integrated development platform—bringing construction, consulting and selective investment together to create stronger outcomes across the project lifecycle.",
] as const;

const STORY_QUOTE =
  "We did not expand beyond construction by assumption. We evolved through the problems our clients asked us to solve.";

/**
 * 01 / Our Story + 02 / The Journey share one desktop viewport.
 */
export function AboutOurStorySection() {
  return (
    <section
      className="overflow-hidden lg:flex lg:min-h-0 lg:flex-[1.05] lg:flex-col"
      style={{ backgroundColor: CREAM }}
    >
      {/* Mobile - stacked */}
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:hidden">
        <p className="font-heading text-[0.875rem] font-bold uppercase tracking-[0.14em] text-nebco-red">
          01 / Our Story
        </p>
        <h4 className="type-h4 mt-3 max-w-[22rem] font-bold tracking-[-0.02em] text-arch-black sm:mt-4 sm:max-w-[28rem]">
          From construction experience to an integrated development platform.
        </h4>
        <div className="type-h6 mt-4 max-w-[36rem] space-y-4 font-normal text-arch-black/70 sm:mt-5">
          {STORY_PARAGRAPHS.map((text) => (
            <p key={text} className="m-0">
              {text}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={IMAGES.aboutStoryPlans}
              alt="NEBCO engineers reviewing drawings on an active construction site"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <aside className="flex items-stretch gap-4 bg-[#0a0b0d] px-7 py-8 text-white">
            <span className="w-px shrink-0 bg-nebco-red" aria-hidden="true" />
            <blockquote className="type-h3 m-0 font-semibold text-white">
              {STORY_QUOTE}
            </blockquote>
          </aside>
        </div>
      </div>

      {/*
        Desktop mock:
        - Left copy top-aligned with the media band (gutter between them)
        - Photo + black quote share one height and sit flush (no gap)
        - Quote text vertically centered beside a red rule
      */}
      <div className="mx-auto hidden min-h-0 w-full max-w-[1440px] flex-1 grid-cols-[minmax(0,0.9fr)_minmax(0,1.85fr)] gap-x-8 xl:gap-x-10 lg:grid">
        {/* Copy — type scale matched to mock: 14px label, ~36–40px heading, 18px body */}
        <div className="flex min-h-0 flex-col justify-start pt-0">
          <p className="shrink-0 font-heading text-[0.875rem] font-bold uppercase tracking-[0.14em] text-nebco-red xl:text-[0.9375rem]">
            01 / Our Story
          </p>
          <h4 className="type-h4 mt-3 max-w-[20rem] font-bold tracking-[-0.02em] text-arch-black xl:mt-4 xl:max-w-[24rem]">
            From construction experience to an integrated development platform.
          </h4>
          <div className="type-h6 mt-4 max-w-[22rem] space-y-4 font-normal text-arch-black/70 xl:mt-5 xl:max-w-[24rem] 2xl:max-w-[26rem]">
            {STORY_PARAGRAPHS.map((text) => (
              <p key={text} className="m-0">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Photo + quote - equal height, flush */}
        <div className="grid min-h-0 grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-stretch">
          <div className="relative min-h-0">
            <Image
              src={IMAGES.aboutStoryPlans}
              alt="NEBCO engineers reviewing drawings on an active construction site"
              fill
              className="object-cover object-[50%_40%]"
              sizes="40vw"
              priority
            />
          </div>

          <aside className="flex min-h-0 items-center bg-[#0a0b0d] px-6 text-white xl:px-7">
            <div className="flex items-stretch gap-4">
              <span className="w-px shrink-0 bg-nebco-red" aria-hidden="true" />
              <blockquote className="type-h3 m-0 font-semibold text-white">
                {STORY_QUOTE}
              </blockquote>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function AboutJourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const goTo = (i: number) => {
    setActiveIndex(i);
    itemRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section
      className="overflow-x-hidden pb-12 pt-8 sm:pb-14 sm:pt-10 lg:flex lg:min-h-0 lg:flex-[1.2] lg:flex-col lg:pb-1 lg:pt-5"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] min-h-0 flex-col px-6 sm:px-8 lg:px-0">
        <p className="shrink-0 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-nebco-red sm:text-[12px]">
          02 / The Journey
        </p>

        {/* Timeline track — dots centered on each card column */}
        <div className="relative mt-4 mb-4 shrink-0 sm:mt-5 sm:mb-5 lg:mt-4 lg:mb-4">
          <div
            className="pointer-events-none absolute top-1/2 right-0 left-0 z-0 h-[1.5px] -translate-y-1/2 bg-nebco-red"
            aria-hidden="true"
          />
          <div className="relative z-[1] grid grid-cols-5 gap-6 lg:gap-7 xl:gap-8">
            {JOURNEY.map((item, i) => (
              <div key={item.number} className="flex justify-center">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  className="h-3.5 w-3.5 shrink-0 rounded-full border-2 transition-[background-color,border-color] duration-200"
                  style={{
                    backgroundColor: i === activeIndex ? GOLD : CREAM,
                    borderColor: GOLD,
                  }}
                  aria-label={`Go to ${item.era}`}
                  aria-current={i === activeIndex ? "step" : undefined}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards row — subgrid keeps titles/bodies horizontally aligned */}
        <div className="-mx-6 min-h-0 flex-1 overflow-x-auto px-6 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="grid min-w-[900px] grid-cols-5 grid-rows-[auto_auto_auto_auto] gap-x-6 gap-y-2 lg:min-w-0 lg:gap-x-7 lg:gap-y-2.5 xl:gap-x-8">
            {JOURNEY.map((item, i) => (
              <article
                key={item.number}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="col-span-1 row-span-4 grid grid-rows-subgrid text-left"
              >
                <span
                  className="shrink-0 self-start font-serif text-[1.75rem] font-normal leading-none tracking-[-0.02em] lg:text-[2rem] xl:text-[2.25rem]"
                  style={{ color: GOLD }}
                >
                  {item.number}
                </span>

                <div className="relative mt-0.5 aspect-[16/10] w-full self-start overflow-hidden bg-[#ebe6dc]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className={`object-cover ${
                      item.tone === "mono"
                        ? "grayscale contrast-[1.05]"
                        : "sepia-[0.12]"
                    }`}
                    sizes="(max-width: 1024px) 220px, 18vw"
                  />
                </div>

                <h5 className="type-h5 m-0 self-start font-bold leading-snug tracking-[-0.02em] text-arch-black">
                  {item.era} – {item.title}
                </h5>

                <p className="m-0 self-start text-[12.5px] leading-[1.55] text-[#4A4035] lg:text-[13px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPurposeSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#0a0b0d" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10 xl:px-12">
        <p className="font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-nebco-red sm:text-[12px]">
          03 / Purpose
        </p>

        <div className="mt-5 grid grid-cols-1 gap-6 sm:mt-6 sm:grid-cols-3 sm:gap-0 lg:mt-7">
          {PURPOSE.map((item, i) => (
            <div
              key={item.title}
              className={`text-left ${
                i === 0
                  ? "sm:pr-8 lg:pr-10 xl:pr-12"
                  : "border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-10 xl:pl-12 xl:pr-12"
              }`}
            >
              <div
                className={`border-l pl-4 sm:pl-5 ${i === 0 ? "border-nebco-red" : ""}`}
                style={i === 0 ? undefined : { borderColor: GOLD }}
              >
                <h3
                  className="m-0 font-heading text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px]"
                  style={{ color: GOLD }}
                >
                  {item.title}
                </h3>
                <p className="type-h4 m-0 mt-2 max-w-[20rem] font-bold tracking-[-0.02em] text-white lg:max-w-[22rem]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutValuesSection() {
  return (
    <section
      className="relative overflow-hidden lg:flex lg:min-h-0 lg:flex-[1.05] lg:flex-col"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:px-10 lg:py-6 xl:px-12 xl:py-7">
        <p className="shrink-0 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-nebco-red sm:text-[12px]">
          04 / Values
        </p>

        <div
          className="mt-5 grid flex-1 grid-cols-1 border border-[#d8d2c8] sm:mt-6 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3"
          style={{ backgroundColor: CREAM }}
        >
          {VALUES.map((v, i) => {
            const isLastColSm = i % 2 === 1;
            const isLastColLg = i % 3 === 2;
            const isBottomRowSm = i >= 4;
            const isBottomRowLg = i >= 3;

            return (
              <article
                key={v.num}
                className={[
                  "flex items-center gap-4 px-5 py-5 text-left sm:gap-4 sm:px-6 sm:py-5 lg:gap-5 lg:px-7 lg:py-5",
                  i < VALUES.length - 1 ? "border-b border-[#d8d2c8]" : "",
                  "sm:border-b-0",
                  !isLastColSm ? "sm:border-r sm:border-[#d8d2c8]" : "",
                  !isBottomRowSm ? "sm:border-b sm:border-[#d8d2c8]" : "",
                  "lg:border-r-0 lg:border-b-0",
                  !isLastColLg ? "lg:border-r lg:border-[#d8d2c8]" : "",
                  !isBottomRowLg ? "lg:border-b lg:border-[#d8d2c8]" : "",
                ].join(" ")}
              >
                <ValueIcon type={v.icon} />
                <div className="min-w-0 flex-1">
                  <p className="m-0 font-heading text-[1.2rem] font-medium leading-none tracking-[-0.02em] text-arch-black sm:text-[1.3rem]">
                    {v.num}
                  </p>
                  <h3 className="type-h6 m-0 mt-1 font-bold uppercase tracking-[0.14em] text-nebco-red">
                    {v.title}
                  </h3>
                  <p className="m-0 mt-1 max-w-[17rem] text-[12.5px] leading-[1.4] text-arch-black/75 sm:text-[13px]">
                    {v.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Backward-compatible wrapper - prefer AboutPurposeSection + AboutValuesSection */
export function AboutPurposeValuesSection() {
  return (
    <>
      <AboutPurposeSection />
      <AboutValuesSection />
    </>
  );
}

function DirectorAvatar() {
  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="34" r="19" fill="#5f5f5d" />
      <path d="M8 100c3-25 20-38 42-38s39 13 42 38H8Z" fill="#5f5f5d" />
    </svg>
  );
}

/**
 * Half of a seam connector: a rule running from the panel edge inwards, ending
 * in a marker. `side` is the panel edge the rule is anchored to.
 */
function SeamConnector({
  side,
  variant,
}: {
  side: "left" | "right";
  variant: "ring-white" | "ring-red" | "dot-red";
}) {
  const color = variant === "ring-white" ? "#ffffff" : "#bc2026";
  const isRing = variant !== "dot-red";

  return (
    <span
      className={`pointer-events-none absolute top-1/2 z-[3] hidden h-px w-[14%] -translate-y-1/2 md:block ${
        side === "right" ? "right-0" : "left-0"
      }`}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      <span
        className={`absolute top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full ${
          side === "right" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
        }`}
        style={
          isRing
            ? { boxShadow: `inset 0 0 0 1.5px ${color}`, backgroundColor: "transparent" }
            : { backgroundColor: color }
        }
      />
    </span>
  );
}

/** 05 - three responsibility columns */
export function AboutResponsibilitiesSection() {
  return (
    <section
      className="relative overflow-hidden lg:flex lg:min-h-0 lg:flex-[1.15] lg:flex-col"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] min-h-0 flex-col px-6 pt-6 pb-10 sm:px-8 sm:pt-7 sm:pb-12 lg:px-10 lg:pt-4 lg:pb-6 xl:px-12 xl:pt-5 xl:pb-7">
        <p className="shrink-0 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-nebco-red sm:text-[12px]">
          05 / One Platform, Three Responsibilities
        </p>

        <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 md:mt-5 md:grid-cols-3">
          {DIVISIONS.map((d, i) => {
            const isRed = d.tone === "red";
            const isCream = d.tone === "cream";

            return (
              <Link
                key={d.title}
                href={d.href}
                className={`group relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden px-6 py-8 text-center sm:px-8 md:min-h-0 md:px-7 lg:px-10 ${
                  isRed
                    ? "bg-nebco-red text-white"
                    : isCream
                      ? "bg-[#f4ede7] text-arch-black"
                      : "bg-[#0d1015] text-white"
                }`}
              >
                {isRed ? (
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <Image
                      src={d.backgroundSrc}
                      alt=""
                      fill
                      className="object-cover object-center opacity-[0.35] mix-blend-multiply"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-nebco-red/50" />
                  </div>
                ) : null}

                <div className="relative z-10 flex max-w-[17rem] flex-col items-center text-center">
                  <span
                    className="relative mx-auto block h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                    aria-hidden="true"
                  >
                    <Image
                      src={d.iconSrc}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-contain object-center"
                      style={
                        isCream
                          ? {
                              filter:
                                "brightness(0) saturate(100%) invert(72%) sepia(28%) saturate(650%) hue-rotate(5deg) brightness(92%)",
                            }
                          : { filter: "brightness(0) invert(1)" }
                      }
                    />
                  </span>

                  <h3
                    className={`mt-4 font-heading text-[14px] font-bold uppercase tracking-[0.12em] sm:text-[15px] ${
                      isCream ? "text-arch-black" : "text-white"
                    }`}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="mt-1.5 font-heading text-[10.5px] font-semibold uppercase tracking-[0.16em] sm:text-[11px]"
                    style={{ color: GOLD }}
                  >
                    {d.verb}
                  </p>
                  <p
                    className={`mt-3 line-clamp-3 text-[12.5px] leading-[1.5] sm:text-[13px] ${
                      isCream ? "text-arch-black/75" : "text-white/90"
                    }`}
                  >
                    {d.desc}
                  </p>
                </div>

                {i === 0 ? <SeamConnector side="right" variant="ring-white" /> : null}
                {i === 1 ? (
                  <>
                    <SeamConnector side="left" variant="dot-red" />
                    <SeamConnector side="right" variant="dot-red" />
                  </>
                ) : null}
                {i === 2 ? <SeamConnector side="left" variant="ring-red" /> : null}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutLeadershipSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
      {/* Faint building wireframe - right edge */}
      <div
        className="pointer-events-none absolute inset-y-[12%] right-0 z-0 hidden w-[min(40%,26rem)] opacity-[0.2] md:block lg:w-[min(36%,30rem)]"
        aria-hidden="true"
      >
        <Image
          src={IMAGES.engageWireframeBuilding}
          alt=""
          fill
          className="object-contain object-right-bottom"
          sizes="400px"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          06 / Leadership
        </p>

        <div className="mt-7 grid grid-cols-1 gap-10 lg:mt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-16">
          {/* Chairman */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
            <div className="relative aspect-square w-full max-w-[210px] shrink-0 overflow-hidden bg-[#e8e3da] sm:max-w-[225px] lg:max-w-[240px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85"
                alt="NEBCO Chairman"
                fill
                className="object-cover object-[50%_12%] grayscale contrast-[1.08]"
                sizes="240px"
              />
            </div>

            <div className="min-w-0 flex-1 pt-1">
              <p
                className="font-heading text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-[12px]"
                style={{ color: GOLD }}
              >
                Leadership in Action.
              </p>
              <p className="mt-1.5 font-heading text-[1.2rem] font-bold uppercase leading-[1.15] tracking-[0.02em] text-nebco-red sm:text-[1.3rem] lg:text-[1.4rem]">
                Built on Experience.
              </p>
              <p
                className="mt-6 font-heading text-[10.5px] font-bold uppercase tracking-[0.16em]"
                style={{ color: GOLD }}
              >
                Chairman
              </p>
              <p className="mt-1.5 font-heading text-[1rem] font-bold text-arch-black sm:text-[1.05rem]">
                Name Placeholder
              </p>
              <p className="mt-3.5 max-w-[21rem] text-[12.5px] leading-[1.65] text-arch-black/65 sm:text-[13px]">
                Leading with integrity and purpose, focused on building a stronger Nepal through
                responsible development and long-term value creation.
              </p>
            </div>
          </div>

          {/* Directors */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            {LEADERS.map((person) => (
              <div
                key={person.roleLines.join(" ")}
                className="flex min-w-0 flex-col items-start text-left"
              >
                <div className="aspect-square w-full overflow-hidden bg-[#cfcbc4]">
                  <DirectorAvatar />
                </div>
                <p className="mt-3.5 font-heading text-[10px] font-bold uppercase leading-[1.35] tracking-[0.1em] text-nebco-red sm:text-[10.5px]">
                  {person.roleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="mt-1.5 font-heading text-[12.5px] font-bold text-arch-black sm:text-[13px]">
                  {person.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CERTIFICATE_INTERVAL_MS = 4500;

function CertificateCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || CERTIFICATES.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % CERTIFICATES.length);
    }, CERTIFICATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="certificate-carousel">
      <div
        className="relative overflow-hidden bg-[#f7f1e6]"
        style={{
          boxShadow: "inset 0 0 0 1px #b08950, inset 0 0 0 3px #f3ebe0, inset 0 0 0 4px #c4a574",
        }}
      >
        <div className="relative aspect-[3/2] w-full">
          {CERTIFICATES.map((certificate, index) => (
            <Image
              key={certificate.src}
              src={certificate.src}
              alt={certificate.alt}
              fill
              priority={index === 0}
              className={`certificate-carousel-image absolute inset-0 object-contain object-center p-2 sm:p-2.5 ${
                index === activeIndex ? "is-active" : ""
              }`}
              sizes="(max-width: 1024px) 460px, 560px"
            />
          ))}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {CERTIFICATES[activeIndex]?.alt}
      </p>
    </div>
  );
}

export function AboutCredentialsSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: CREAM }}>
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 sm:px-8 sm:pt-12 lg:px-10 lg:pt-14 xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          07 / Credentials
        </p>
      </div>

      {/* Full-bleed dark band with the three credentials */}
      <div className="mt-6 text-white sm:mt-8" style={{ backgroundColor: "#0d0d0b" }}>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {CREDENTIALS.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex items-start gap-4 py-4 sm:py-0 ${
                  i === 0
                    ? "sm:pr-8"
                    : "border-t border-white/10 pt-6 sm:border-t-0 sm:pl-8 sm:pr-8 sm:pt-0"
                }`}
              >
                {i > 0 ? (
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px sm:block"
                    style={{ backgroundColor: `${GOLD}66` }}
                    aria-hidden="true"
                  />
                ) : null}
                <span className="shrink-0" aria-hidden="true">
                  <CredIcon type={item.icon} />
                </span>
                <div className="min-w-0 text-left">
                  <h3
                    className="font-heading text-[12px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: GOLD }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-[#d8d4ce] sm:text-[12.5px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company meta | certificate | wireframe */}
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 lg:px-10 lg:pb-14 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10">
          <div className="flex flex-col gap-6 sm:gap-7">
            {COMPANY_META.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="shrink-0" aria-hidden="true">
                  <MetaIcon type={row.icon} />
                </span>
                <div className="min-w-0">
                  <p
                    className="font-heading text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: GOLD }}
                  >
                    {row.label}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-arch-black/85 sm:text-[14px]">
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
            <CertificateCarousel />
          </div>

          <div className="relative hidden h-full min-h-[220px] lg:block" aria-hidden="true">
            <Image
              src={IMAGES.engageWireframeBuilding}
              alt=""
              fill
              className="object-contain object-right-bottom opacity-[0.45]"
              sizes="360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** @deprecated Merged into AboutCredentialsSection */
export function AboutCompanyDetailsSection() {
  return null;
}

