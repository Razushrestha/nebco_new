"use client";

import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
const RED = "#bc2026";
const GREEN = "#2f9b5a";
const AMBER = "#c4922a";
const GREY = "#9a958c";

const FEATURES = [
  {
    title: "Scheduled Communication",
    desc: "Regular updates and meeting summaries.",
    icon: "comm",
  },
  {
    title: "Document Control",
    desc: "Centralized, current and secure.",
    icon: "docs",
  },
  {
    title: "Progress Reporting",
    desc: "Photos, videos and site logs.",
    icon: "progress",
  },
  {
    title: "Decision Tracking",
    desc: "Clear decisions with dates and owners.",
    icon: "decision",
  },
  {
    title: "Cost Visibility",
    desc: "Budget, commitments and forecasts.",
    icon: "cost",
  },
  {
    title: "Milestone Review",
    desc: "Track completion and next steps.",
    icon: "milestone",
  },
] as const;

const PORTAL_NAV_MAIN = [
  { label: "Overview", icon: "overview" },
  { label: "Site Updates", icon: "updates" },
  { label: "Documents", icon: "docs" },
  { label: "Milestones", icon: "flag" },
  { label: "Decisions", icon: "check" },
  { label: "Costs", icon: "cost" },
  { label: "Team", icon: "team" },
  { label: "Reports", icon: "chart" },
] as const;

const PORTAL_NAV_FOOTER = [
  { label: "Settings", icon: "gear" },
  { label: "Support", icon: "support" },
] as const;

const FEATURE_TO_PORTAL: Record<
  (typeof FEATURES)[number]["icon"],
  (typeof PORTAL_NAV_MAIN)[number]["icon"] | (typeof PORTAL_NAV_FOOTER)[number]["icon"]
> = {
  comm: "overview",
  docs: "docs",
  progress: "updates",
  decision: "check",
  cost: "cost",
  milestone: "flag",
};

const MILESTONES = [
  { label: "Foundation", pct: 100, tone: "done" as const },
  { label: "Basement", pct: 100, tone: "done" as const },
  { label: "Structure Level 1", pct: 100, tone: "done" as const },
  { label: "Structure Level 2", pct: 60, tone: "active" as const },
  { label: "Structure Level 3", pct: 25, tone: "pending" as const },
  { label: "Finishes", pct: 0, tone: "pending" as const },
];

const DOC_LEGEND = [
  { label: "Approved", count: 24, color: GREEN },
  { label: "In Progress", count: 6, color: AMBER },
  { label: "Pending", count: 5, color: GREY },
  { label: "Overdue", count: 1, color: RED },
];

function FeatureIcon({ type, highlighted }: { type: (typeof FEATURES)[number]["icon"]; highlighted?: boolean }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: `digital-feature-icon ${highlighted ? "is-highlighted" : ""}`,
  };
  const s = {
    stroke: RED,
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "comm":
      /* Target dial with accent dot */
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.25" {...s} />
          <circle cx="12" cy="12" r="4.75" {...s} />
          <circle cx="15.75" cy="15.15" r="1.35" {...s} />
        </svg>
      );
    case "docs":
      /* Document with plain seal */
      return (
        <svg {...common}>
          <path d="M6.75 3h7.5L18.75 7.5V21H6.75V3Z" {...s} />
          <path d="M14.25 3V7.75H18.75" {...s} />
          <path d="M9.25 10.75h5.75M9.25 13.5h5.75M9.25 16.25h3.25" {...s} />
          <circle cx="16.15" cy="17.85" r="2.35" {...s} />
        </svg>
      );
    case "progress":
      /* Chart frame */
      return (
        <svg {...common}>
          <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="1.1" {...s} />
          <path d="M6.9 15.9l3.35-4.15 2.9 2.4 4-5.75" {...s} />
          <circle cx="17.15" cy="8.4" r="1.2" {...s} />
        </svg>
      );
    case "decision":
      /* Document with check stamp */
      return (
        <svg {...common}>
          <path d="M6.75 3h7.5L18.75 7.5V21H6.75V3Z" {...s} />
          <path d="M14.25 3V7.75H18.75" {...s} />
          <path d="M9.25 10.75h5.75M9.25 13.5h4" {...s} />
          <circle cx="16.2" cy="17.7" r="2.85" {...s} />
          <path d="M14.95 17.65l1 1.05 1.95-2.05" {...s} />
        </svg>
      );
    case "cost":
      /* Spreadsheet */
      return (
        <svg {...common}>
          <rect x="3.75" y="3.25" width="16.5" height="17.5" rx="1" {...s} />
          <path d="M3.75 8h16.5M3.75 12.75h16.5M3.75 17.5h16.5M9.5 8V20.75M14.5 8V20.75" {...s} />
        </svg>
      );
    case "milestone":
      /* Stopwatch / gauge */
      return (
        <svg {...common}>
          <circle cx="12" cy="13.1" r="7.6" {...s} />
          <path d="M9.75 3.5h4.5M12 3.5V6.1" {...s} />
          <path d="M12 13.1V9.4M12 13.1l3.75 2.35" {...s} />
          <path d="M17.85 7.25l1.25-1.25" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

function SidebarIcon({ type, active }: { type: string; active?: boolean }) {
  const stroke = active ? "#ffffff" : "rgba(255,255,255,0.55)";
  const p = { stroke, fill: "none", strokeWidth: 1.15, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 14 14" className="h-3 w-3 shrink-0" aria-hidden="true">
      {type === "overview" ? (
        <>
          <rect x="1.5" y="1.5" width="4.5" height="4.5" {...p} />
          <rect x="8" y="1.5" width="4.5" height="4.5" {...p} />
          <rect x="1.5" y="8" width="4.5" height="4.5" {...p} />
          <rect x="8" y="8" width="4.5" height="4.5" {...p} />
        </>
      ) : type === "updates" ? (
        <>
          <rect x="1.5" y="3.2" width="11" height="8" rx="1" {...p} />
          <circle cx="7" cy="7.2" r="2.2" {...p} />
        </>
      ) : type === "docs" ? (
        <path d="M3.5 1.5h5l3 3v8H3.5z" {...p} />
      ) : type === "flag" ? (
        <path d="M3.5 2v10M3.5 2h7l-1.6 2.2L10.5 6.5H3.5" {...p} />
      ) : type === "check" ? (
        <path d="M2.5 7.2l3 3 6-6.2" {...p} />
      ) : type === "cost" ? (
        <>
          <circle cx="7" cy="7" r="5" {...p} />
          <path d="M7 4.2v5.6" {...p} />
        </>
      ) : type === "team" ? (
        <>
          <circle cx="7" cy="4.5" r="2" {...p} />
          <path d="M2.8 11.5c.6-2.2 2-3.3 4.2-3.3s3.6 1.1 4.2 3.3" {...p} />
        </>
      ) : type === "chart" ? (
        <path d="M2.5 11V7M5.5 11V4.5M8.5 11V6M11.5 11V3.5" {...p} />
      ) : type === "gear" ? (
        <circle cx="7" cy="7" r="2.2" {...p} />
      ) : (
        <circle cx="7" cy="7" r="5" {...p} />
      )}
    </svg>
  );
}

function MilestoneMark({ tone }: { tone: "done" | "active" | "pending" }) {
  if (tone === "done") {
    return (
      <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: GREEN }}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <path d="M1.5 4.1l1.8 1.8 3.4-3.6" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (tone === "active") {
    return (
      <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border-[1.5px]" style={{ borderColor: RED }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: RED }} />
      </span>
    );
  }
  return <span className="block h-[14px] w-[14px] shrink-0 rounded-full border border-[#cfc9bf]" />;
}

function DocDonut() {
  // Approved 24, In Progress 6, Pending 5, Overdue 1 → Total 36
  const segments = [
    { color: GREEN, value: 24 },
    { color: AMBER, value: 6 },
    { color: GREY, value: 5 },
    { color: RED, value: 1 },
  ];
  const total = 36;
  const r = 28;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true" className="shrink-0">
      <circle cx="36" cy="36" r={r} fill="none" stroke="#ebe7e0" strokeWidth="8" />
      {segments.map((seg) => {
        const len = (seg.value / total) * c;
        const el = (
          <circle
            key={seg.color + seg.value}
            cx="36"
            cy="36"
            r={r}
            fill="none"
            stroke={seg.color}
            strokeWidth="8"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
            transform="rotate(-90 36 36)"
          />
        );
        offset += len;
        return el;
      })}
      <circle cx="36" cy="36" r="18" fill="white" />
    </svg>
  );
}

function ProjectPortalDashboard({
  highlightedNav,
  compact = false,
}: {
  highlightedNav: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`digital-portal overflow-hidden rounded-[14px] border border-[#e4dfd6] bg-[#ece8e1] shadow-[0_20px_55px_rgba(0,0,0,0.12)] ${
        compact ? "digital-portal--compact h-full" : ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-[#ddd7ce] bg-[#f7f4ef] px-3 py-2 sm:px-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-nebco-red text-[8px] font-bold text-white">
            N
          </span>
          <p className="font-heading text-[10px] font-bold tracking-[0.04em] text-arch-black sm:text-[11px]">
            NEBCO PROJECT PORTAL
          </p>
        </div>
        <div className="flex items-center gap-2.5 text-arch-black/45">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1.8a3.2 3.2 0 00-3.2 3.2v1.4L2.5 8.4h9L10.2 6.4V5A3.2 3.2 0 007 1.8Z" stroke="currentColor" strokeWidth="1.1" />
            <path d="M5.6 10.2a1.4 1.4 0 002.8 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 2.2v6.2M4.6 6.2L7 8.6l2.4-2.4M2.5 11.2h9" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ddd7ce]">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <circle cx="5.5" cy="3.6" r="1.8" stroke="#666" strokeWidth="1" />
              <path d="M1.8 9.2c.5-1.8 1.8-2.7 3.7-2.7s3.2.9 3.7 2.7" stroke="#666" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </div>

      <div
        className={`flex ${
          compact
            ? "min-h-0 flex-1"
            : "min-h-[300px] sm:min-h-[340px] lg:min-h-[min(58svh,420px)]"
        }`}
      >
        <aside className="hidden w-[112px] shrink-0 flex-col bg-[#1a1a1a] px-1.5 py-2.5 sm:flex sm:w-[120px]">
          <nav className="space-y-0.5">
            {PORTAL_NAV_MAIN.map((item) => {
              const isActive = item.icon === highlightedNav;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-1.5 py-1.5 text-[9.5px] transition-colors duration-300 sm:text-[10px] ${
                    isActive ? "bg-white/12 font-semibold text-white" : "font-medium text-white/45"
                  }`}
                >
                  <SidebarIcon type={item.icon} active={isActive} />
                  <span className="leading-none">{item.label}</span>
                </div>
              );
            })}
          </nav>
          <nav className="mt-auto space-y-0.5 border-t border-white/10 pt-2">
            {PORTAL_NAV_FOOTER.map((item) => {
              const isActive = item.icon === highlightedNav;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-1.5 py-1.5 text-[9.5px] transition-colors duration-300 sm:text-[10px] ${
                    isActive ? "bg-white/12 font-semibold text-white" : "font-medium text-white/45"
                  }`}
                >
                  <SidebarIcon type={item.icon} active={isActive} />
                  <span className="leading-none">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        <div
          className={`min-w-0 flex-1 ${
            compact ? "space-y-2 p-2 sm:p-2.5" : "space-y-2.5 p-2.5 sm:p-3"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-lg bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Project</p>
              <p className="mt-1 font-heading text-[12px] font-bold leading-snug text-arch-black sm:text-[12.5px]">
                Lazimpat Residence
              </p>
            </div>
            <div className="rounded-lg bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Status</p>
              <p className="mt-1 flex items-center gap-1.5 font-heading text-[12px] font-bold text-arch-black sm:text-[12.5px]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
                On Track
              </p>
            </div>
            <div className="rounded-lg bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Overall Progress</p>
              <p className="mt-0.5 font-heading text-[15px] font-bold text-arch-black">42%</p>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-sm bg-[#ebe7e0]">
                <div className="h-full bg-nebco-red" style={{ width: "42%" }} />
              </div>
            </div>
            <div className="rounded-lg bg-white px-2.5 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Last Site Update</p>
              <p className="mt-1 font-heading text-[12px] font-bold text-arch-black sm:text-[12.5px]">12 May 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1.2fr_0.95fr_0.95fr] sm:gap-2.5">
            <div className="rounded-lg bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-3">
              <p className="type-label font-semibold uppercase tracking-[0.16em] text-arch-black/55">
                Site Progress
              </p>
              <div
                className={`relative mt-2 overflow-hidden bg-[#e8e4dc] ${
                  compact ? "aspect-[16/9]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={IMAGES.constructionSite}
                  alt="Site progress photo"
                  fill
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              <p className="mt-2 text-[11px] leading-snug text-arch-black/60">
                Level 2 slab casting completed. Level 3 rebar work in progress.
              </p>
            </div>

            <div className="rounded-lg bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-3">
              <p className="type-label font-semibold uppercase tracking-[0.16em] text-arch-black/55">
                Milestones
              </p>
              <ul className={`mt-2.5 ${compact ? "space-y-1.5" : "space-y-2"}`}>
                {MILESTONES.map((m) => (
                  <li key={m.label} className="flex items-center gap-2">
                    <MilestoneMark tone={m.tone} />
                    <span
                      className={`min-w-0 flex-1 truncate text-[11px] font-medium ${
                        m.tone === "active"
                          ? "text-nebco-red"
                          : m.tone === "pending"
                            ? "text-arch-black/40"
                            : "text-arch-black"
                      }`}
                    >
                      {m.label}
                    </span>
                    <span
                      className={`shrink-0 text-[10.5px] font-semibold tabular-nums ${
                        m.tone === "active"
                          ? "text-nebco-red"
                          : m.tone === "pending"
                            ? "text-arch-black/35"
                            : "text-arch-black/55"
                      }`}
                    >
                      {m.pct}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-white p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] sm:p-3">
              <p className="type-label font-semibold uppercase tracking-[0.16em] text-arch-black/55">
                Document Status
              </p>
              <div className="mt-3 flex items-center gap-3">
                <DocDonut />
                <ul className="min-w-0 flex-1 space-y-1.5">
                  {DOC_LEGEND.map((d) => (
                    <li key={d.label} className="flex items-center justify-between gap-2 text-[10.5px]">
                      <span className="inline-flex items-center gap-1.5 text-arch-black/70">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: d.color }} />
                        {d.label}
                      </span>
                      <span className="font-semibold tabular-nums text-arch-black">{d.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-3 text-right text-[10.5px] font-medium text-arch-black/50">
                Total <span className="font-semibold text-arch-black">36</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 04 / Digital Visibility - feature list + Project Portal dashboard.
 */
export function NrnDigitalVisibilitySection({ compact = false }: { compact?: boolean }) {
  const [activeFeature, setActiveFeature] = useState(2);
  const highlightedNav = FEATURE_TO_PORTAL[FEATURES[activeFeature]?.icon ?? "progress"];

  return (
    <section
      className={`bg-[#f5f2ed] ${
        compact
          ? "nrn-digital-visibility nrn-digital-visibility--compact flex flex-col justify-start overflow-visible"
          : "lg:min-h-[100svh] lg:content-center"
      }`}
    >
      <div
        className={`digital-visibility__inner mx-auto grid max-w-[1440px] grid-cols-1 items-start px-6 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:px-10 xl:px-12 ${
          compact
            ? "h-auto gap-6 py-2 sm:gap-8 sm:py-2 lg:gap-10 lg:py-2 xl:gap-12"
            : "gap-10 py-10 sm:py-12 lg:gap-12 lg:py-12 xl:gap-14"
        }`}
      >
        <div className="digital-visibility__copy w-full min-w-0 lg:pt-0.5">
          <div className="digital-visibility__intro">
            <p className="digital-visibility__eyebrow type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
              04 / Digital Visibility
            </p>
            <h2
              className={`digital-visibility__heading font-heading font-bold text-arch-black ${
                compact ? "is-compact" : ""
              }`}
            >
              Real-time clarity. Documented progress.
            </h2>
            <p className={`digital-visibility__lede ${compact ? "is-compact" : ""}`}>
              Your project dashboard-anytime, anywhere.
            </p>
          </div>

          <ul className={`digital-feature-list ${compact ? "mt-2.5" : "mt-7 sm:mt-8"}`}>
            {FEATURES.map((f, index) => {
              const isActive = activeFeature === index;
              return (
                <li key={f.title} className="digital-feature-list__item">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveFeature(index)}
                    onFocus={() => setActiveFeature(index)}
                    className={`digital-feature-row ${isActive ? "is-active" : ""} ${
                      compact ? "is-compact" : ""
                    }`}
                  >
                    <span className="digital-feature-row__icon" aria-hidden="true">
                      <FeatureIcon type={f.icon} highlighted={isActive} />
                    </span>
                    <span className="digital-feature-row__copy">
                      <span className="digital-feature-row__title">{f.title}</span>
                      <span className="digital-feature-row__desc">{f.desc}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`min-w-0 lg:w-full ${compact ? "h-full min-h-0" : ""}`}>
          <ProjectPortalDashboard highlightedNav={highlightedNav} compact={compact} />
        </div>
      </div>
    </section>
  );
}
