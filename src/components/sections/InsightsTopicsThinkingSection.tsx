"use client";

import { useMemo, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const RED = "#bc2026";
const LINE = "#ddd7ce";

const TOPICS = [
  "Construction",
  "Real Estate Development",
  "Feasibility & Finance",
  "Landowner Guidance",
  "NRN Development",
  "Commercial Leasing",
  "Regulations",
  "NEBCO News",
] as const;

type Topic = (typeof TOPICS)[number];

type ArticleCard = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  minutes: number;
  href: string;
};

type FeaturedInsight = {
  title: string;
  category: string;
  body: string;
  image: string;
  author: string;
  reviewer: string;
  date: string;
  minutes: number;
  href: string;
};

type TopicBundle = {
  featured: FeaturedInsight;
  articles: ArticleCard[];
};

const CONTENT: Record<Topic, TopicBundle> = {
  Construction: {
    featured: {
      title: "What can you develop on your land in Kathmandu?",
      category: "Landowner Guidance",
      body: "A practical look at zoning, density, access and what owners should clarify before drawings begin.",
      image: IMAGES.cityKathmandu,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "May 12, 2025",
      minutes: 5,
      href: "/insights",
    },
    articles: [
      {
        id: "c1",
        title: "Contractor vs. Development Consultant",
        excerpt: "Where delivery ends and coordinated development support begins.",
        image: IMAGES.meetingOffice,
        minutes: 6,
        href: "/insights",
      },
      {
        id: "c2",
        title: "Managing a Project from Abroad",
        excerpt: "How NRNs keep decisions clear when they cannot be on site every week.",
        image: IMAGES.videoCall,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "c3",
        title: "How to Test Project Feasibility",
        excerpt: "A structured way to check cost, demand and delivery risk early.",
        image: IMAGES.calculatorPlans,
        minutes: 7,
        href: "/insights",
      },
      {
        id: "c4",
        title: "Should You Find Tenants Before Construction?",
        excerpt: "When pre-leasing strengthens a commercial brief — and when it does not.",
        image: IMAGES.brickBuilding,
        minutes: 4,
        href: "/insights",
      },
    ],
  },
  "Real Estate Development": {
    featured: {
      title: "Joint development or owner-led — which structure fits?",
      category: "Real Estate Development",
      body: "Compare control, capital and risk when landowners choose how a project should move forward.",
      image: IMAGES.modernApartment,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "April 3, 2025",
      minutes: 6,
      href: "/insights",
    },
    articles: [
      {
        id: "r1",
        title: "Reading the Kathmandu Valley market before you build",
        excerpt: "Demand signals that matter more than speculation.",
        image: IMAGES.cityKathmandu,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "r2",
        title: "Phasing a mixed-use block without losing clarity",
        excerpt: "Keep residential, retail and parking decisions in one plan.",
        image: IMAGES.commercialBuilding,
        minutes: 6,
        href: "/insights",
      },
      {
        id: "r3",
        title: "Title, access and what stops a good site",
        excerpt: "The ownership checks that save months later.",
        image: IMAGES.heroBlueprint,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "r4",
        title: "When a land bank becomes a liability",
        excerpt: "Holding cost, approvals and the right moment to activate.",
        image: IMAGES.sunsetSite,
        minutes: 5,
        href: "/insights",
      },
    ],
  },
  "Feasibility & Finance": {
    featured: {
      title: "How to test project feasibility before you commit capital",
      category: "Feasibility & Finance",
      body: "A clear sequence for cost, revenue and delivery assumptions — before drawings lock you in.",
      image: IMAGES.calculatorPlans,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "March 18, 2025",
      minutes: 7,
      href: "/insights",
    },
    articles: [
      {
        id: "f1",
        title: "What a reliable construction quotation must include",
        excerpt: "Scope clarity that protects both owner and builder.",
        image: IMAGES.workersPlans,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "f2",
        title: "Funding stages that match Nepal project reality",
        excerpt: "Align capital draws with approvals and site milestones.",
        image: IMAGES.consultingMeeting,
        minutes: 6,
        href: "/insights",
      },
      {
        id: "f3",
        title: "Contingency that actually protects the programme",
        excerpt: "Where soft costs hide — and how to surface them early.",
        image: IMAGES.heroBlueprint,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "f4",
        title: "Sensitivity testing without overcomplicating the model",
        excerpt: "Three variables worth stress-testing on every brief.",
        image: IMAGES.investmentsApproach,
        minutes: 5,
        href: "/insights",
      },
    ],
  },
  "Landowner Guidance": {
    featured: {
      title: "What can you develop on your land in Kathmandu?",
      category: "Landowner Guidance",
      body: "Zoning, access, neighbours and the questions every landowner should ask before inviting a design team.",
      image: IMAGES.cityKathmandu,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "May 12, 2025",
      minutes: 5,
      href: "/insights",
    },
    articles: [
      {
        id: "l1",
        title: "Joint development or owner-led?",
        excerpt: "Choose the structure that matches your capital and control needs.",
        image: IMAGES.heroBlueprint,
        minutes: 6,
        href: "/insights",
      },
      {
        id: "l2",
        title: "When to bring a consultant before an architect",
        excerpt: "Early clarity that protects the brief and the budget.",
        image: IMAGES.meetingOffice,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "l3",
        title: "Neighbourhood fit beyond FAR numbers",
        excerpt: "Access, parking and street character that buyers notice.",
        image: IMAGES.modernApartment,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "l4",
        title: "Documents every landowner should prepare first",
        excerpt: "Title, survey and utilities — the quiet blockers.",
        image: IMAGES.calculatorPlans,
        minutes: 3,
        href: "/insights",
      },
    ],
  },
  "NRN Development": {
    featured: {
      title: "Managing a Nepal project when you live abroad",
      category: "NRN Development",
      body: "Decision rights, reporting rhythm and local accountability that keep overseas owners in control.",
      image: IMAGES.videoCall,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "February 8, 2025",
      minutes: 6,
      href: "/insights",
    },
    articles: [
      {
        id: "n1",
        title: "Remote approval without slowing the site",
        excerpt: "What needs a signature — and what needs a weekly note.",
        image: IMAGES.consultingMeeting,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "n2",
        title: "Trust, but verify: site reporting that works",
        excerpt: "Photos, quantities and cash flow in one clear pack.",
        image: IMAGES.constructionSite,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "n3",
        title: "Choosing local partners from overseas",
        excerpt: "Questions that reveal real capacity beyond a brochure.",
        image: IMAGES.meetingOffice,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "n4",
        title: "Currency, contracts and practical risk for NRNs",
        excerpt: "Keep commercial terms readable across borders.",
        image: IMAGES.calculatorPlans,
        minutes: 6,
        href: "/insights",
      },
    ],
  },
  "Commercial Leasing": {
    featured: {
      title: "Should you find tenants before construction?",
      category: "Commercial Leasing",
      body: "When pre-commitment strengthens design — and when flexibility is worth more than an early lease.",
      image: IMAGES.brickBuilding,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "January 22, 2025",
      minutes: 5,
      href: "/insights",
    },
    articles: [
      {
        id: "cl1",
        title: "Built-to-suit briefs that contractors can price",
        excerpt: "Tenant needs translated into constructible scope.",
        image: IMAGES.commercialBuilding,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "cl2",
        title: "Parking, access and the deals that fail quietly",
        excerpt: "Operational details that leasing teams overlook.",
        image: IMAGES.warehouse,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "cl3",
        title: "Fit-out responsibility — who owns what",
        excerpt: "Clear lines between base build and tenant works.",
        image: IMAGES.workersPlans,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "cl4",
        title: "Vacancy risk in Kathmandu commercial stock",
        excerpt: "Reading absorption before you overbuild amenity.",
        image: IMAGES.nightBuilding,
        minutes: 6,
        href: "/insights",
      },
    ],
  },
  Regulations: {
    featured: {
      title: "Approvals that shape what you can actually build",
      category: "Regulations",
      body: "A practical map of municipal, utility and compliance steps that change design and programme.",
      image: IMAGES.heroBlueprint,
      author: "Author Name Placeholder",
      reviewer: "Reviewed by Name Placeholder",
      date: "December 9, 2024",
      minutes: 7,
      href: "/insights",
    },
    articles: [
      {
        id: "reg1",
        title: "Building bye-laws owners misunderstand most",
        excerpt: "Setbacks, height and open space in plain language.",
        image: IMAGES.modernApartment,
        minutes: 5,
        href: "/insights",
      },
      {
        id: "reg2",
        title: "Utility clearances that stall good projects",
        excerpt: "Electricity, water and road cutting — sequence matters.",
        image: IMAGES.constructionSite,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "reg3",
        title: "Documentation packs that move faster",
        excerpt: "What authorities expect — prepared once, reused well.",
        image: IMAGES.calculatorPlans,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "reg4",
        title: "When a variance is realistic — and when it is not",
        excerpt: "Protect programme by testing exceptions early.",
        image: IMAGES.cityKathmandu,
        minutes: 5,
        href: "/insights",
      },
    ],
  },
  "NEBCO News": {
    featured: {
      title: "NEBCO notes from the field — this quarter",
      category: "NEBCO News",
      body: "Project milestones, partnership updates and practical lessons from active sites across the Valley.",
      image: IMAGES.constructionHero,
      author: "NEBCO Editorial",
      reviewer: "Reviewed by NEBCO Team",
      date: "June 1, 2025",
      minutes: 4,
      href: "/insights",
    },
    articles: [
      {
        id: "news1",
        title: "Site discipline that shows in the finish",
        excerpt: "Quality habits we keep repeating on live projects.",
        image: IMAGES.qualityInspector,
        minutes: 3,
        href: "/insights",
      },
      {
        id: "news2",
        title: "Partnering with specialist contractors",
        excerpt: "How clear scopes keep delivery accountable.",
        image: IMAGES.meetingOffice,
        minutes: 4,
        href: "/insights",
      },
      {
        id: "news3",
        title: "Community and construction — working carefully",
        excerpt: "Neighbour engagement that protects programme.",
        image: IMAGES.sunsetSite,
        minutes: 3,
        href: "/insights",
      },
      {
        id: "news4",
        title: "What we are watching in Valley demand",
        excerpt: "A short market note for owners and developers.",
        image: IMAGES.cityKathmandu,
        minutes: 5,
        href: "/insights",
      },
    ],
  },
};

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="7" cy="4.5" r="2.4" stroke="currentColor" strokeWidth="1.1" />
      <path d="M2.5 12c.7-2.6 2.4-3.8 4.5-3.8S10.8 9.4 11.5 12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="1.5" y="2.5" width="11" height="10" rx="1" stroke="currentColor" strokeWidth="1.1" />
      <path d="M1.5 5.5h11M4.5 1.5v2M9.5 1.5v2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Insights — 02 / Topics + 03 / Latest Thinking
 * One-screen composition on desktop; topic clicks swap featured + articles.
 */
export function InsightsTopicsThinkingSection() {
  const [topic, setTopic] = useState<Topic>("Construction");
  const [pending, startTransition] = useTransition();

  const bundle = useMemo(() => CONTENT[topic], [topic]);
  const sideArticles = bundle.articles.slice(0, 4);

  function selectTopic(next: Topic) {
    if (next === topic) return;
    startTransition(() => setTopic(next));
  }

  return (
    <section className="flex flex-col bg-[#f5f2ed] lg:min-h-[100svh]">
      {/* 02 / Topics — compact rail */}
      <div className="shrink-0 border-y" style={{ borderColor: LINE }}>
        <div className="mx-auto flex max-w-[1440px] items-end gap-4 px-6 py-4 sm:px-8 sm:py-5 lg:px-10 xl:px-12">
          <div className="min-w-0 flex-1">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
              02 / Topics
            </p>

            <nav className="mt-3 overflow-x-auto sm:mt-3.5" aria-label="Insight topics">
              <ul className="flex min-w-max items-center gap-0 pb-0.5">
                {TOPICS.map((item, index) => {
                  const active = item === topic;
                  return (
                    <li key={item} className="flex items-center">
                      {index > 0 ? (
                        <span className="mx-2 text-[11px] text-arch-black/25 sm:mx-2.5" aria-hidden="true">
                          /
                        </span>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => selectTopic(item)}
                        className={`relative whitespace-nowrap pb-1.5 font-heading text-[10.5px] font-semibold uppercase tracking-[0.06em] transition-colors sm:text-[11.5px] ${
                          active ? "" : "text-arch-black/40 hover:text-arch-black/65"
                        }`}
                        style={active ? { color: GOLD } : undefined}
                        aria-pressed={active}
                      >
                        {item}
                        {active ? (
                          <span
                            className="absolute inset-x-0 -bottom-px h-[2px]"
                            style={{ backgroundColor: GOLD }}
                            aria-hidden="true"
                          />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <span className="mb-1.5 hidden shrink-0 text-arch-black/35 lg:inline-flex" aria-hidden="true">
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
              <path d="M6 1v5M6 1L3.5 3.5M6 1l2.5 2.5M6 15V10M6 15l-2.5-2.5M6 15l2.5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* 03 / Latest Thinking — featured + four compact cards */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-5 sm:px-8 sm:py-6 lg:min-h-0 lg:px-10 lg:py-6 xl:px-12">
        <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          03 / Latest Thinking
        </p>

        <div
          className={`mt-4 flex flex-1 flex-col gap-4 transition-opacity duration-200 sm:mt-5 sm:gap-5 lg:mt-5 lg:min-h-0 lg:gap-0 ${
            pending ? "opacity-60" : "opacity-100"
          }`}
        >
          {/* Featured */}
          <Link
            href={bundle.featured.href}
            className="group grid min-h-[240px] shrink-0 overflow-hidden border sm:min-h-[260px] sm:grid-cols-2 lg:min-h-0 lg:max-h-[min(36svh,300px)]"
            style={{ borderColor: LINE }}
          >
            <div className="relative min-h-[140px] sm:min-h-0">
              <Image
                key={bundle.featured.image + topic}
                src={bundle.featured.image}
                alt={bundle.featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>

            <div className="flex flex-col bg-[#1a1a1a] px-5 py-4 text-white sm:px-6 sm:py-5 lg:px-7 lg:py-5">
              <p
                className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: GOLD }}
              >
                Featured Insight
              </p>

              <h2 className="mt-2.5 font-heading text-[1.15rem] font-bold leading-[1.18] tracking-[-0.02em] sm:text-[1.25rem] lg:text-[1.35rem]">
                {bundle.featured.title}
              </h2>

              <p className="mt-2 text-[11.5px] font-medium sm:text-[12px]" style={{ color: GOLD }}>
                {bundle.featured.category}
              </p>
              <span className="mt-1.5 block h-px w-9 bg-nebco-red" aria-hidden="true" />

              <p className="mt-2.5 line-clamp-2 text-[12px] leading-[1.5] text-white/72 sm:line-clamp-3 sm:text-[12.5px]">
                {bundle.featured.body}
              </p>

              <div className="mt-auto hidden grid-cols-2 gap-x-3 gap-y-2 pt-3 text-[10px] text-white/65 sm:grid">
                <span className="flex items-center gap-1.5 truncate">
                  <PersonIcon />
                  <span className="truncate">{bundle.featured.author}</span>
                </span>
                <span className="flex items-center gap-1.5 truncate">
                  <CalendarIcon />
                  <span>{bundle.featured.date}</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Four compact article cards */}
          <div
            className="grid flex-1 grid-cols-1 border sm:grid-cols-2 lg:min-h-0 lg:grid-cols-4 lg:border-t-0"
            style={{ borderColor: LINE }}
          >
            {sideArticles.map((article, index) => (
              <ArticleCardCompact
                key={`${topic}-${article.id}`}
                article={article}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCardCompact({
  article,
  index,
}: {
  article: ArticleCard;
  index: number;
}) {
  return (
    <Link
      href={article.href}
      className={[
        "group flex flex-col px-3.5 py-3.5 transition-colors hover:bg-white/50 sm:px-4 sm:py-4",
        // Mobile stack dividers
        index < 3 ? "border-b" : "",
        // Tablet 2×2
        index % 2 === 1 ? "sm:border-l" : "",
        index < 2 ? "sm:border-b" : "sm:border-b-0",
        // Desktop 4-across — vertical rules only
        index > 0 ? "lg:border-l" : "",
        "lg:border-t-0 lg:border-b-0",
      ].join(" ")}
      style={{ borderColor: LINE }}
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#e8e4dc]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
        />
      </div>
      <div className="mt-2.5 flex min-h-0 flex-1 flex-col sm:mt-3">
        <h3 className="font-heading text-[12.5px] font-bold leading-snug tracking-[-0.01em] text-arch-black transition-colors group-hover:text-nebco-red sm:text-[13px] lg:text-[13.5px]">
          {article.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-[1.4] text-arch-black/55 sm:text-[11.5px]">
          {article.excerpt}
        </p>
        <span
          className="mt-auto inline-flex items-center gap-1 border-t pt-2.5 text-[10.5px] font-semibold text-nebco-red sm:pt-3 sm:text-[11px]"
          style={{ borderColor: LINE }}
        >
          {article.minutes} min read
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
