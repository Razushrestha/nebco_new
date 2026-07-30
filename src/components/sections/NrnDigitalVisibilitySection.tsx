"use client";

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

const PORTAL_NAV = [
  { label: "Overview", icon: "overview", active: false },
  { label: "Site Updates", icon: "updates", active: true },
  { label: "Documents", icon: "docs", active: false },
  { label: "Milestones", icon: "flag", active: false },
  { label: "Decisions", icon: "check", active: false },
  { label: "Costs", icon: "cost", active: false },
  { label: "Team", icon: "team", active: false },
  { label: "Reports", icon: "chart", active: false },
  { label: "Settings", icon: "gear", active: false },
  { label: "Support", icon: "support", active: false },
] as const;

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

function FeatureIcon({ type }: { type: (typeof FEATURES)[number]["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: "shrink-0",
  };
  const s = { stroke: RED, strokeWidth: 1.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (type) {
    case "comm":
      return (
        <svg {...common}>
          <path d="M4 6.5h14v8.2H9.2L6 17.5v-2.8H4V6.5Z" {...s} />
          <path d="M7.5 10h7M7.5 12.5h4.5" {...s} />
        </svg>
      );
    case "docs":
      return (
        <svg {...common}>
          <path d="M6 3.5h7.2L16.5 6.8V18H6V3.5Z" {...s} />
          <path d="M13 3.5V7h3.4" {...s} />
          <path d="M8.5 11h5M8.5 13.5h5M8.5 16h3.2" {...s} />
        </svg>
      );
    case "progress":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="15" height="11.5" rx="1.2" {...s} />
          <circle cx="11" cy="10.8" r="3" {...s} />
          <path d="M7 5l1.4-1.8h5.2L15 5" {...s} />
        </svg>
      );
    case "decision":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7.2" {...s} />
          <path d="M7.6 11.2l2.2 2.2 4.6-4.8" {...s} />
        </svg>
      );
    case "cost":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7.2" {...s} />
          <path d="M11 6.8v8.4M8.6 8.6c.6-.9 1.5-1.3 2.4-1.3 1.5 0 2.5.8 2.5 2s-1.1 1.9-2.5 1.9-2.5.6-2.5 1.8c0 1.1 1.1 1.9 2.6 1.9.9 0 1.8-.3 2.4-1.1" {...s} />
        </svg>
      );
    case "milestone":
      return (
        <svg {...common}>
          <path d="M5 18V4.5h8.5l-1.2 2.8 1.2 2.8H5" {...s} />
          <path d="M5 18h3" {...s} />
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

function ProjectPortalDashboard() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#e4dfd6] bg-[#ece8e1] shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      {/* Top chrome */}
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

      <div className="flex min-h-[300px] sm:min-h-[340px] lg:min-h-[min(58svh,400px)]">
        {/* Dark sidebar */}
        <aside className="hidden w-[118px] shrink-0 flex-col bg-[#1a1a1a] px-2 py-3 sm:flex sm:w-[128px]">
          <nav className="space-y-0.5">
            {PORTAL_NAV.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-sm px-1.5 py-1.5 text-[9.5px] sm:text-[10px] ${
                  item.active ? "bg-white/10 font-semibold text-white" : "font-medium text-white/45"
                }`}
              >
                <SidebarIcon type={item.icon} active={item.active} />
                <span className="leading-none">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main grid */}
        <div className="min-w-0 flex-1 space-y-2.5 p-2.5 sm:p-3">
          {/* Stat row */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-md bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Project</p>
              <p className="mt-1 font-heading text-[12px] font-bold leading-snug text-arch-black sm:text-[12.5px]">
                Lazimpat Residence
              </p>
            </div>
            <div className="rounded-md bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Status</p>
              <p className="mt-1 flex items-center gap-1.5 font-heading text-[12px] font-bold text-arch-black sm:text-[12.5px]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
                On Track
              </p>
            </div>
            <div className="rounded-md bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Overall Progress</p>
              <p className="mt-0.5 font-heading text-[15px] font-bold text-arch-black">42%</p>
              <div className="mt-1.5 h-1 w-full overflow-hidden rounded-sm bg-[#ebe7e0]">
                <div className="h-full bg-nebco-red" style={{ width: "42%" }} />
              </div>
            </div>
            <div className="rounded-md bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-arch-black/45">Last Site Update</p>
              <p className="mt-1 font-heading text-[12px] font-bold text-arch-black sm:text-[12.5px]">12 May 2025</p>
            </div>
          </div>

          {/* Detail cards */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-[1.15fr_0.95fr_0.95fr]">
            {/* Site progress */}
            <div className="rounded-md bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-3">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-arch-black/55">
                Site Progress
              </p>
              <div className="relative mt-2 aspect-[16/10] overflow-hidden bg-[#e8e4dc]">
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

            {/* Milestones */}
            <div className="rounded-md bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-3">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-arch-black/55">
                Milestones
              </p>
              <ul className="mt-2.5 space-y-2">
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

            {/* Document status */}
            <div className="rounded-md bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-3">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-arch-black/55">
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
 * 04 / Digital Visibility — feature list + Project Portal dashboard.
 * Sized for one desktop viewport.
 */
export function NrnDigitalVisibilitySection() {
  return (
    <section className="bg-[#f5f2ed] lg:min-h-[100svh] lg:content-center">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.4fr)] lg:gap-10 lg:px-10 lg:py-10 xl:gap-12 xl:px-12">
        {/* Copy + features */}
        <div className="max-w-[30rem]">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
            04 / Digital Visibility
          </p>
          <h2 className="mt-2.5 font-heading text-[1.25rem] font-bold leading-[1.2] tracking-[-0.02em] text-arch-black sm:mt-3 sm:text-[1.4rem] lg:whitespace-nowrap lg:text-[1.5rem] xl:text-[1.55rem]">
            Real-time clarity. Documented progress.
          </h2>
          <p className="mt-2 text-[13px] leading-[1.45] text-arch-black/50 sm:text-[14px]">
            Your project dashboard—anytime, anywhere.
          </p>

          <ul className="mt-6 overflow-hidden rounded-sm border border-[#e8dfc8] bg-[#f7f0e0] sm:mt-7">
            {FEATURES.map((f, index) => (
              <li
                key={f.title}
                className={`flex items-center gap-3.5 px-3.5 py-3 sm:gap-4 sm:px-4 sm:py-3.5 ${
                  index < FEATURES.length - 1 ? "border-b border-[#e8dfc8]" : ""
                }`}
              >
                <FeatureIcon type={f.icon} />
                <div className="min-w-0">
                  <p className="font-heading text-[13px] font-bold text-arch-black sm:text-[14px]">{f.title}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-arch-black/55 sm:text-[12.5px]">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard */}
        <div className="min-w-0 lg:justify-self-end lg:w-full">
          <ProjectPortalDashboard />
        </div>
      </div>
    </section>
  );
}
