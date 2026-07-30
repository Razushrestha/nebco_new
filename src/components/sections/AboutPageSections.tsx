"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const CREAM = "#f5f2ed";

const JOURNEY = [
  {
    num: "01",
    title: "Before 2001 — Industry Foundation",
    desc: "Hands-on construction experience that shaped how we understand sites, people and delivery.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=700&q=80",
    tone: "mono" as const,
  },
  {
    num: "02",
    title: "2001 — NEBCO Formally Established",
    desc: "National Estate Builders Co. registered with stronger systems, wider capability and lasting structure.",
    image: IMAGES.commercialBuilding,
    tone: "color" as const,
  },
  {
    num: "03",
    title: "Second Generation — Growth",
    desc: "Expanded building works and real estate projects across Kathmandu Valley and beyond.",
    image: IMAGES.constructionSite,
    tone: "color" as const,
  },
  {
    num: "04",
    title: "Current Chapter — Integrated Platform",
    desc: "Construction, consulting and selective investments aligned under one coordination structure.",
    image: IMAGES.nightBuilding,
    tone: "color" as const,
  },
  {
    num: "05",
    title: "The Future — Strategic Outcomes",
    desc: "A trusted ecosystem from concept to market readiness for owners, partners and communities.",
    image: IMAGES.modernApartment,
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
  { num: "01", title: "Trust", desc: "We build trust through our actions, not just our words." },
  { num: "02", title: "Accountability", desc: "We own our commitments and deliver on them." },
  { num: "03", title: "Practical Thinking", desc: "We focus on solutions that are realistic and effective." },
  { num: "04", title: "Collaboration", desc: "We achieve more by working together." },
  { num: "05", title: "Transparency", desc: "We communicate clearly and share information." },
  { num: "06", title: "Long-Term Value", desc: "We create assets and relationships that last." },
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
    desc: "Bringing clarity and structure through planning, advisory, feasibility, project management and statutory services.",
    href: "/consulting",
    tone: "dark" as const,
    iconSrc: "/work_by_responsibility/processed/coordinate-icon.png",
    backgroundSrc: "/work_by_responsibility/coordinate background.png",
  },
  {
    title: "Investments",
    verb: "Participate Selectively",
    desc: "Investing in carefully selected projects with partners and plans with our strategy and create long-term value.",
    href: "/investments",
    tone: "cream" as const,
    iconSrc: "/work_by_responsibility/processed/we-develop-icon.png",
    backgroundSrc: "/work_by_responsibility/we develop background.png",
  },
] as const;

const LEADERS = [
  { roleLines: ["Managing", "Director"] as const, name: "Name Placeholder" },
  { roleLines: ["Director", "Operations"] as const, name: "Name Placeholder" },
  { roleLines: ["Director", "Strategy"] as const, name: "Name Placeholder" },
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
    label: "Company Name",
    value: "Nebco Private Limited Company",
    icon: "building" as const,
  },
  {
    label: "Sectors",
    value: "Construction, Consulting & Investment",
    icon: "map" as const,
  },
  {
    label: "Registration No.",
    value: "110424/058/059",
    icon: "seal" as const,
  },
] as const;

function PurposeIcon({ type }: { type: string }) {
  const s = {
    stroke: GOLD,
    strokeWidth: 1.4,
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      {type === "vision" ? (
        <>
          <ellipse cx="18" cy="18" rx="11" ry="6.5" {...s} />
          <circle cx="18" cy="18" r="3" {...s} />
        </>
      ) : type === "mission" ? (
        <>
          <circle cx="18" cy="18" r="10" {...s} />
          <circle cx="18" cy="18" r="5.5" {...s} />
          <circle cx="18" cy="18" r="1.6" fill={GOLD} stroke="none" />
          <path d="M24.5 11.5l3.2-3.2M26.2 10.8l2.4 1.1-1.1 2.4" {...s} />
        </>
      ) : (
        <>
          <path d="M18 5.5l10 4v7.2c0 6.4-4.2 10.6-10 12.7-5.8-2.1-10-6.3-10-12.7V9.5l10-4Z" {...s} />
          <path d="M13.5 18.2l3 3 6.2-6.5" {...s} />
        </>
      )}
    </svg>
  );
}

function ArrowCircle({
  variant,
}: {
  variant: "red-on-white" | "gold-on-white" | "dark-on-gold";
}) {
  const styles =
    variant === "red-on-white"
      ? { ring: "#ffffff", fill: "#ffffff", arrow: "#bc2026" }
      : variant === "gold-on-white"
        ? { ring: GOLD, fill: "#ffffff", arrow: GOLD }
        : { ring: GOLD, fill: GOLD, arrow: "#111111" };

  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5"
      style={{ backgroundColor: styles.fill, boxShadow: `inset 0 0 0 1.5px ${styles.ring}` }}
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2.5 7h8.2M7.5 3.5 11.2 7 7.5 10.5"
          stroke={styles.arrow}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

/**
 * 01 / Our Story — one full-width letterbox band:
 * cream copy (~30%) | diagonally clipped photo (~45%) | black quote (~25%).
 * Shared height; left image edge `/` (top inset right, bottom flush left).
 */
const STORY_SLANT = 12;

/** Distinct from construction quality-inspector — hardhats reviewing plans on site. */
const STORY_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=85";

export function AboutOurStorySection() {
  return (
    <section style={{ backgroundColor: CREAM }}>
      {/* Mobile stack */}
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:hidden">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red sm:text-[11px]">
          01 / Our Story
        </p>
        <h2 className="mt-4 max-w-[26rem] font-heading text-[1.45rem] font-bold leading-[1.2] tracking-[-0.02em] text-arch-black sm:text-[1.6rem]">
          From construction experience to an integrated development platform.
        </h2>
        <div className="mt-5 max-w-[34rem] space-y-4 text-[13.5px] leading-[1.7] text-arch-black/65 sm:text-[14px]">
          <p>
            NEBCO began with a construction company built on craftsmanship and trust. Over time, the needs
            around us evolved, projects required more than construction, and clients needed a partner who could
            deliver more.
          </p>
          <p>
            We listened, learned and built the capabilities our clients needed. Today, NEBCO operates as an
            integrated development platform—bringing construction, consulting and selective investment together
            to create stronger outcomes across the project lifecycle.
          </p>
        </div>

        <div className="mt-8 flex min-h-[320px] flex-col overflow-hidden sm:min-h-[380px] sm:flex-row">
          <div
            className="relative min-h-[240px] flex-1 sm:min-h-0"
            style={{ clipPath: `polygon(${STORY_SLANT}% 0, 100% 0, 100% 100%, 0 100%)` }}
          >
            <Image
              src={STORY_IMAGE}
              alt="Construction team at work on an active site"
              fill
              className="object-cover object-[50%_35%]"
              sizes="100vw"
            />
          </div>
          <aside className="flex w-full flex-col justify-between bg-[#111111] px-7 py-8 text-white sm:w-[42%] sm:max-w-[17rem]">
            <div>
              <span className="font-heading text-[2.75rem] leading-none text-nebco-red" aria-hidden="true">
                “
              </span>
              <blockquote className="mt-3 font-heading text-[1.05rem] font-semibold leading-[1.5]">
                We did not expand beyond construction by assumption. We evolved through the problems our clients
                asked us to solve.
              </blockquote>
            </div>
            <span className="mt-8 block h-px w-10 bg-nebco-red" aria-hidden="true" />
          </aside>
        </div>
      </div>

      {/* Desktop — single letterbox composition */}
      <div className="relative mx-auto hidden h-[min(52vh,500px)] min-h-[440px] max-w-[1600px] lg:block">
        {/* Copy — left ~30%, sits under/beside the slant */}
        <div className="absolute inset-y-0 left-0 z-0 flex w-[32%] flex-col justify-center px-10 pr-6 xl:w-[30%] xl:px-12 xl:pr-8">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-nebco-red">
            01 / Our Story
          </p>
          <h2 className="mt-4 max-w-[17.5rem] font-heading text-[1.45rem] font-bold leading-[1.18] tracking-[-0.02em] text-arch-black xl:max-w-[19rem] xl:text-[1.6rem]">
            From construction experience to an integrated development platform.
          </h2>
          <div className="mt-5 max-w-[17.5rem] space-y-3.5 text-[13px] leading-[1.65] text-arch-black/62 xl:max-w-[18.5rem] xl:text-[13.5px]">
            <p>
              NEBCO began with a construction company built on craftsmanship and trust. Over time, the needs
              around us evolved, projects required more than construction, and clients needed a partner who
              could deliver more.
            </p>
            <p>
              We listened, learned and built the capabilities our clients needed. Today, NEBCO operates as an
              integrated development platform—bringing construction, consulting and selective investment
              together to create stronger outcomes across the project lifecycle.
            </p>
          </div>
        </div>

        {/* Photo — ~45% width, overlaps left so diagonal cuts into cream/copy */}
        <div
          className="absolute inset-y-0 z-10"
          style={{
            left: "24%",
            right: "26%",
            clipPath: `polygon(${STORY_SLANT}% 0, 100% 0, 100% 100%, 0 100%)`,
          }}
        >
          <Image
            src={STORY_IMAGE}
            alt="Construction team at work on an active site"
            fill
            className="object-cover object-[48%_35%]"
            sizes="50vw"
          />
        </div>

        {/* Quote — ~26%, same height, flush to photo */}
        <aside className="absolute inset-y-0 right-0 z-20 flex w-[26%] flex-col justify-between bg-[#111111] px-8 py-10 text-white xl:px-9 xl:py-11">
          <div>
            <span className="block font-heading text-[3rem] leading-none text-nebco-red xl:text-[3.25rem]" aria-hidden="true">
              “
            </span>
            <blockquote className="mt-3 font-heading text-[1.08rem] font-semibold leading-[1.5] xl:text-[1.15rem]">
              We did not expand beyond construction by assumption. We evolved through the problems our clients
              asked us to solve.
            </blockquote>
          </div>
          <span className="block h-px w-10 bg-nebco-red" aria-hidden="true" />
        </aside>
      </div>
    </section>
  );
}

export function AboutJourneySection() {
  return (
    <section style={{ backgroundColor: CREAM }}>
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-16 xl:px-12">
        {/* Eyebrow + red rule across the section */}
        <div className="flex items-center gap-4">
          <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red sm:text-[11px]">
            02 / The Journey
          </p>
          <span className="h-px min-w-0 flex-1 bg-nebco-red" aria-hidden="true" />
        </div>

        <div className="-mx-6 mt-10 overflow-x-auto px-6 sm:-mx-8 sm:mt-12 sm:px-8 lg:mx-0 lg:mt-14 lg:overflow-visible lg:px-0">
          <div className="relative min-w-[980px] lg:min-w-0">
            {/* Timeline track — red → gold */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-[5px] z-0 h-px"
              style={{
                background: `linear-gradient(90deg, #bc2026 0%, #bc2026 22%, ${GOLD} 100%)`,
              }}
              aria-hidden="true"
            />

            <ol className="relative z-[1] grid grid-cols-5">
              {JOURNEY.map((item, i) => (
                <li key={item.num} className="flex flex-col">
                  {/* Node centered above each column */}
                  <div className="mb-7 flex justify-center sm:mb-8">
                    <span
                      className="h-3 w-3 rounded-full border-[1.75px] sm:h-3.5 sm:w-3.5"
                      style={{ borderColor: GOLD, backgroundColor: CREAM }}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`flex flex-1 flex-col px-3 sm:px-4 lg:px-5 ${i > 0 ? "border-l" : ""}`}
                    style={i > 0 ? { borderColor: `${GOLD}40` } : undefined}
                  >
                    <span
                      className="font-heading text-[2.35rem] font-medium leading-none tracking-[-0.03em] sm:text-[2.6rem] lg:text-[2.85rem]"
                      style={{ color: GOLD }}
                    >
                      {item.num}
                    </span>

                    {/* Near-square parallelogram — full column width */}
                    <div
                      className="relative mt-3 aspect-square w-full overflow-hidden bg-[#ebe6dc]"
                      style={{ clipPath: "polygon(7% 0, 100% 0, 93% 100%, 0 100%)" }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`object-cover ${item.tone === "mono" ? "grayscale contrast-[1.05]" : ""}`}
                        sizes="(max-width: 1024px) 200px, 18vw"
                      />
                    </div>

                    <h3 className="mt-4 font-heading text-[12.5px] font-bold leading-snug text-arch-black sm:mt-5 sm:text-[13.5px] lg:text-[14px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11.5px] leading-[1.5] text-arch-black/58 sm:text-[12px] sm:leading-[1.55]">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPurposeValuesSection() {
  const leftValues = VALUES.slice(0, 3);
  const rightValues = VALUES.slice(3);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* 03 / PURPOSE — dark */}
      <div className="bg-[#0e0e0e] text-white">
        <div className="mx-auto h-full max-w-[720px] px-6 py-14 sm:px-8 sm:py-16 lg:ml-auto lg:max-w-none lg:px-10 lg:py-16 xl:px-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red sm:text-[11px]">
            03 / Purpose
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-3 sm:gap-0">
            {PURPOSE.map((item, i) => (
              <div
                key={item.title}
                className={`flex flex-col items-center px-4 py-2 text-center sm:px-5 lg:px-6 ${
                  i > 0 ? "border-t sm:border-l sm:border-t-0" : ""
                }`}
                style={i > 0 ? { borderColor: `${GOLD}55` } : undefined}
              >
                <PurposeIcon type={item.icon} />
                <h3
                  className="mt-5 font-heading text-[12px] font-bold uppercase tracking-[0.16em] sm:text-[13px]"
                  style={{ color: GOLD }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[14rem] text-[13px] leading-[1.55] text-white/75 sm:text-[13.5px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 04 / VALUES — cream */}
      <div style={{ backgroundColor: CREAM }}>
        <div className="mx-auto h-full max-w-[720px] px-6 py-14 sm:px-8 sm:py-16 lg:mr-auto lg:max-w-none lg:px-10 lg:py-16 xl:px-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red sm:text-[11px]">
            04 / Values
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-0">
            {[leftValues, rightValues].map((col, colIdx) => (
              <ul
                key={colIdx}
                className={`space-y-7 sm:space-y-8 ${
                  colIdx > 0 ? "border-t pt-8 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-8 lg:pl-10" : "sm:pr-8 lg:pr-10"
                }`}
                style={colIdx > 0 ? { borderColor: `${GOLD}55` } : undefined}
              >
                {col.map((v) => (
                  <li key={v.num} className="flex gap-3.5 sm:gap-4">
                    <span
                      className="shrink-0 font-heading text-[1.55rem] font-medium leading-none tracking-[-0.02em] sm:text-[1.7rem]"
                      style={{ color: GOLD }}
                    >
                      {v.num}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="font-heading text-[12px] font-bold uppercase tracking-[0.12em] text-nebco-red sm:text-[13px]">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-[1.5] text-arch-black/65 sm:text-[13.5px]">
                        {v.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipBlueprint() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#1a1a1a" strokeWidth="0.1" fill="none" opacity="0.55">
        <rect x="8" y="18" width="42" height="58" />
        <line x1="8" y1="30" x2="50" y2="30" />
        <line x1="8" y1="42" x2="50" y2="42" />
        <line x1="8" y1="54" x2="50" y2="54" />
        <line x1="8" y1="66" x2="50" y2="66" />
        <line x1="29" y1="18" x2="29" y2="76" />
        <rect x="52" y="28" width="18" height="48" />
        <rect x="72" y="22" width="18" height="54" />
        <line x1="6" y1="82" x2="92" y2="82" strokeWidth="0.07" />
      </g>
    </svg>
  );
}

function DirectorAvatar() {
  return (
    <svg width="30" height="34" viewBox="0 0 40 44" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="8" fill="#6f6a63" />
      <path d="M5 42c2.4-11 8-16.5 15-16.5S32.6 31 35 42" fill="#6f6a63" />
    </svg>
  );
}

/** 05 + 06 + 07 — compact single-screen band on desktop */
export function AboutResponsibilitiesSection() {
  return (
    <section
      className="relative flex flex-col overflow-hidden xl:min-h-[calc(100svh-88px)]"
      style={{ backgroundColor: CREAM }}
    >
      <div className="pointer-events-none absolute inset-y-[8%] right-0 w-[40%] opacity-[0.05]">
        <LeadershipBlueprint />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-1 flex-col justify-between gap-6 px-5 py-6 sm:px-7 sm:py-7 lg:px-9 xl:gap-5 xl:px-11 xl:py-6">
        {/* ——— Top: 05 Responsibilities + 06 Leadership ——— */}
        <div className="grid min-h-0 flex-[1.15] grid-cols-1 gap-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-stretch xl:gap-6">
          <div className="flex min-h-0 flex-col">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red">
              05 / One Platform, Three Responsibilities
            </p>

            <div className="mt-3 grid min-h-0 flex-1 grid-cols-1 overflow-hidden border border-arch-black/[0.08] md:grid-cols-3 xl:min-h-[240px]">
              {DIVISIONS.map((d) => {
                const isRed = d.tone === "red";
                const isCream = d.tone === "cream";
                const arrowVariant = isRed
                  ? ("red-on-white" as const)
                  : isCream
                    ? ("dark-on-gold" as const)
                    : ("gold-on-white" as const);

                return (
                  <Link
                    key={d.title}
                    href={d.href}
                    className={`group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden px-4 py-5 md:min-h-0 xl:px-4 xl:py-5 ${
                      isRed
                        ? "bg-nebco-red text-white"
                        : isCream
                          ? "border-l border-arch-black/[0.06] bg-[#f7f4ef] text-arch-black md:border-l-0"
                          : "bg-[#111111] text-white"
                    }`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 translate-y-[8%] ${
                        isCream ? "opacity-[0.38]" : "opacity-[0.36]"
                      }`}
                      aria-hidden="true"
                    >
                      <Image
                        src={d.backgroundSrc}
                        alt=""
                        width={480}
                        height={380}
                        className="ml-auto h-auto w-[min(100%,14rem)] max-w-none"
                      />
                    </div>

                    <div className="relative z-10">
                      <span className="relative block h-10 w-10" aria-hidden="true">
                        <Image
                          src={d.iconSrc}
                          alt=""
                          fill
                          sizes="40px"
                          className={`object-contain object-left ${isRed || !isCream ? "brightness-0 invert" : ""}`}
                        />
                      </span>
                      <h3
                        className={`mt-4 font-heading text-[0.95rem] font-bold uppercase tracking-[0.07em] ${
                          isCream ? "text-arch-black" : "text-white"
                        }`}
                      >
                        {d.title}
                      </h3>
                      <p
                        className="mt-1 font-heading text-[10px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: GOLD }}
                      >
                        {d.verb}
                      </p>
                      <p
                        className={`mt-2.5 max-w-[15rem] text-[12px] leading-[1.5] ${
                          isCream ? "text-arch-black/62" : "text-white/78"
                        }`}
                      >
                        {d.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 flex justify-center xl:mt-auto xl:pt-4">
                      <ArrowCircle variant={arrowVariant} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex min-h-0 flex-col">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red">
              06 / Leadership
            </p>

            <div className="mt-3 flex min-h-0 flex-1 flex-col">
              <div className="flex h-full min-h-[220px] flex-1 flex-col gap-5 lg:flex-row lg:items-start lg:gap-5 xl:min-h-0">
                <div className="flex h-full min-h-[220px] w-full shrink-0 flex-col overflow-hidden border border-arch-black/[0.08] bg-[#f7f4ef] sm:flex-row lg:w-auto lg:max-w-[18.5rem] lg:flex-none xl:min-h-[240px]">
                  <div className="relative mx-auto aspect-[3/4] w-[130px] shrink-0 overflow-hidden bg-[#e8e3da] sm:mx-0 sm:aspect-auto sm:h-auto sm:w-[38%] sm:self-stretch">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85"
                      alt="NEBCO Chairman"
                      fill
                      className="object-cover object-[50%_10%] grayscale contrast-[1.08]"
                      sizes="140px"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center px-3.5 py-4 text-center sm:px-4 sm:text-left">
                    <p
                      className="font-heading text-[9.5px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "#a8864d" }}
                    >
                      Leadership in action.
                    </p>
                    <h2 className="mt-0.5 font-heading text-[0.95rem] font-bold uppercase leading-[1.15] tracking-[0.02em] text-nebco-red">
                      Built on
                      <br />
                      experience.
                    </h2>
                    <p className="mt-3.5 font-heading text-[9.5px] font-bold uppercase tracking-[0.14em] text-nebco-red">
                      Chairman
                    </p>
                    <p className="mt-0.5 font-heading text-[0.9rem] font-bold text-arch-black">Name Placeholder</p>
                    <p className="mt-1.5 text-[11.5px] leading-[1.45] text-arch-black/60">
                      Leading with integrity and purpose. Focused on building a stronger Nepal through
                      responsible development and long-term value creation.
                    </p>
                  </div>
                </div>

                <div className="grid w-full min-w-0 flex-1 grid-cols-1 gap-0 self-start sm:grid-cols-3 sm:gap-x-2.5">
                  {LEADERS.map((person, i) => (
                    <div
                      key={person.roleLines.join(" ")}
                      className={`flex min-w-0 flex-col ${
                        i > 0 ? "border-t border-arch-black/10 pt-4 sm:border-t-0 sm:pt-0" : ""
                      }`}
                    >
                      <div className="flex h-[88px] w-full items-center justify-center bg-[#ddd8cf] sm:h-[96px]">
                        <DirectorAvatar />
                      </div>
                      <div className="pt-2 text-left">
                        <p className="font-heading text-[9px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-nebco-red">
                          {person.roleLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                        <p className="mt-1 font-heading text-[12px] font-bold leading-[1.25] text-arch-black">
                          Name Placeholder
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ——— Bottom: 07 Credentials ——— */}
        <div className="min-h-0 shrink-0">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-nebco-red">
            07 / Credentials
          </p>

          <div className="mt-3 grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.85fr)_minmax(0,0.65fr)] lg:gap-5 xl:gap-6">
            <div className="bg-[#111111] px-3 py-5 text-white sm:px-4 sm:py-5 lg:py-5">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
                {CREDENTIALS.map((item, i) => (
                  <div
                    key={item.title}
                    className={`relative flex items-start gap-3 px-2.5 py-3 sm:px-3 sm:py-0 ${
                      i > 0 ? "border-t border-white/10 pt-4 sm:border-t-0 sm:pt-0" : ""
                    }`}
                  >
                    {i > 0 ? (
                      <span
                        className="pointer-events-none absolute bottom-2 left-0 top-2 hidden w-px sm:block"
                        style={{ backgroundColor: `${GOLD}55` }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="shrink-0 scale-90" aria-hidden="true">
                      <CredIcon type={item.icon} />
                    </span>
                    <div className="min-w-0 text-left">
                      <h3
                        className="font-heading text-[11px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: GOLD }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] leading-[1.45] text-[#d8d4ce]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-none">
              <div
                className="relative overflow-hidden bg-[#f7f1e6]"
                style={{
                  boxShadow: "inset 0 0 0 1px #b08950, inset 0 0 0 3px #f3ebe0, inset 0 0 0 4px #c4a574",
                }}
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/images/a-class-certificate.png"
                    alt="Government of Nepal — A-Class Certificate of Construction"
                    fill
                    className="object-contain object-center p-1.5"
                    sizes="380px"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:gap-5 lg:gap-5">
              {COMPANY_META.map((row) => (
                <div key={row.label} className="flex items-center gap-3.5">
                  <span className="shrink-0 scale-90" aria-hidden="true">
                    <MetaIcon type={row.icon} />
                  </span>
                  <div className="min-w-0">
                    <p
                      className="font-heading text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: GOLD }}
                    >
                      {row.label}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-snug text-arch-black/85">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full shrink-0 bg-nebco-red" aria-hidden="true" />
    </section>
  );
}

export function AboutLeadershipSection() {
  return null;
}

export function AboutCredentialsSection() {
  return null;
}

