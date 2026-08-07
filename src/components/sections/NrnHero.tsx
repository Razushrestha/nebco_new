"use client";

import Image from "next/image";
import Link from "next/link";
import { NrnHeroWireframe } from "@/components/ui/NrnHeroWireframe";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const PANEL = "#111111";
const CREAM = "#f5f2ed";

/**
 * Diagonal `/` — black ~38% at top, ~52% at bottom so the portal straddles the seam.
 */
const ANGLE = { top: 38, bottom: 52 } as const;
const BLACK_CLIP = `polygon(0 0, ${ANGLE.top}% 0, ${ANGLE.bottom}% 100%, 0 100%)`;

const PORTAL_NAV = [
  { label: "Overview", active: true, icon: "overview" },
  { label: "Site Updates", active: false, icon: "updates" },
  { label: "Documents", active: false, icon: "docs" },
  { label: "Milestones", active: false, icon: "milestones" },
  { label: "Decisions", active: false, icon: "decisions" },
  { label: "Costs", active: false, icon: "costs" },
  { label: "Team", active: false, icon: "team" },
  { label: "Reports", active: false, icon: "reports" },
] as const;

const DOC_STATUS = [
  { name: "Drawings", status: "Approved", tone: "green" as const },
  { name: "Permit", status: "In Progress", tone: "amber" as const },
  { name: "Agreement", status: "Signed", tone: "green" as const },
  { name: "BOQ", status: "Approved", tone: "green" as const },
  { name: "Insurance", status: "Active", tone: "green" as const },
];

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="6.5" cy="6.5" r="5.2" stroke={GOLD} strokeWidth="1.05" />
      <path d="M6.5 3.8V6.5l2.2 1.3" stroke={GOLD} strokeWidth="1.05" strokeLinecap="round" />
    </svg>
  );
}

function NavIcon({ type, active }: { type: (typeof PORTAL_NAV)[number]["icon"]; active?: boolean }) {
  const stroke = active ? GOLD : `${GOLD}99`;
  const common = { width: 12, height: 12, viewBox: "0 0 12 12", fill: "none", "aria-hidden": true as const };

  switch (type) {
    case "overview":
      return (
        <svg {...common}>
          <rect x="1.2" y="1.2" width="4" height="4" stroke={stroke} strokeWidth="1.05" />
          <rect x="6.8" y="1.2" width="4" height="4" stroke={stroke} strokeWidth="1.05" />
          <rect x="1.2" y="6.8" width="4" height="4" stroke={stroke} strokeWidth="1.05" />
          <rect x="6.8" y="6.8" width="4" height="4" stroke={stroke} strokeWidth="1.05" />
        </svg>
      );
    case "updates":
      return (
        <svg {...common}>
          <rect x="1.5" y="2" width="9" height="8" rx="0.8" stroke={stroke} strokeWidth="1.05" />
          <path d="M3.5 4.5h5M3.5 6.5h3.5" stroke={stroke} strokeWidth="1.05" strokeLinecap="round" />
        </svg>
      );
    case "docs":
      return (
        <svg {...common}>
          <path d="M3 1.5h4.2L9.5 3.8V10.5H3V1.5Z" stroke={stroke} strokeWidth="1.05" strokeLinejoin="round" />
          <path d="M7 1.5V4h2.5" stroke={stroke} strokeWidth="1.05" strokeLinejoin="round" />
        </svg>
      );
    case "milestones":
      return (
        <svg {...common}>
          <path d="M2 10V2.5h5.5l-.8 2  .8 2H2" stroke={stroke} strokeWidth="1.05" strokeLinejoin="round" />
        </svg>
      );
    case "decisions":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="4.2" stroke={stroke} strokeWidth="1.05" />
          <path d="M4.2 6.1l1.3 1.3 2.4-2.6" stroke={stroke} strokeWidth="1.05" strokeLinecap="round" />
        </svg>
      );
    case "costs":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="4.2" stroke={stroke} strokeWidth="1.05" />
          <path d="M6 3.6v4.8M4.6 5.1c.4-.6 1-.9 1.4-.9.9 0 1.5.5 1.5 1.2S6.9 7 6 7s-1.5.4-1.5 1.1c0 .7.7 1.2 1.6 1.2.5 0 1-.2 1.3-.7" stroke={stroke} strokeWidth="1.05" strokeLinecap="round" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="6" cy="4" r="1.8" stroke={stroke} strokeWidth="1.05" />
          <path d="M2.8 10c.5-2 1.8-3 3.2-3s2.7 1 3.2 3" stroke={stroke} strokeWidth="1.05" strokeLinecap="round" />
        </svg>
      );
    case "reports":
      return (
        <svg {...common}>
          <path d="M2.5 9.5V6.2M5 9.5V3.5M7.5 9.5V5.2M10 9.5V7" stroke={stroke} strokeWidth="1.05" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function StatusMark({ tone }: { tone: "green" | "amber" }) {
  if (tone === "amber") {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
        <circle cx="6" cy="6" r="4.6" stroke="#c4922a" strokeWidth="1.1" />
        <path d="M6 3.8V6.4l1.6 1" stroke="#c4922a" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="6" cy="6" r="4.6" stroke="#2f9b5a" strokeWidth="1.1" />
      <path d="M3.9 6.1l1.4 1.4 2.8-3" stroke="#2f9b5a" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Project Portal floating card — matches NRN hero mock */
function ProjectPortalCard() {
  return (
    <div
      className="flex overflow-hidden rounded-[14px] shadow-[0_24px_64px_rgba(0,0,0,0.42)]"
      style={{ backgroundColor: CREAM }}
    >
      {/* Dark sidebar */}
      <aside className="relative flex w-[28%] min-w-[112px] max-w-[148px] shrink-0 flex-col bg-[#161616] px-3 py-4 sm:px-3.5 sm:py-5">
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true" />
        <p
          className="relative font-mono text-[8px] font-semibold uppercase tracking-[0.16em] sm:text-[8.5px]"
          style={{ color: GOLD }}
        >
          Project Portal
        </p>
        <nav className="relative mt-4 space-y-0.5 sm:mt-5 sm:space-y-1">
          {PORTAL_NAV.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 rounded-sm px-1 py-1.5 text-[9.5px] sm:gap-2.5 sm:text-[10px] ${
                item.active ? "font-semibold" : "font-medium text-white/42"
              }`}
              style={item.active ? { color: GOLD } : undefined}
            >
              <NavIcon type={item.icon} active={item.active} />
              <span className="leading-none">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main panel */}
      <div className="flex min-w-0 flex-1 flex-col px-3.5 py-3.5 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-0 sm:grid-cols-2">
          {/* Site update */}
          <div className="min-w-0 sm:pr-4 lg:pr-5">
            <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.14em] text-arch-black/70 sm:text-[9px]">
              Site Update
            </p>
            <div className="relative mt-2 aspect-[16/10] overflow-hidden bg-[#e8e4dc]">
              <Image
                src={IMAGES.constructionSite}
                alt="Basement slab site progress"
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <p className="mt-2 font-heading text-[11.5px] font-bold leading-snug text-arch-black sm:mt-2.5 sm:text-[12.5px]">
              Basement Slab – Area B
            </p>
            <p className="mt-1 text-[10.5px] leading-snug text-arch-black/55 sm:text-[11px]">
              Rebar tying and MEP sleeves in progress.
            </p>
            <p className="mt-1.5 text-[10px] text-arch-black/40">12 May 2025</p>
          </div>

          {/* Document status */}
          <div className="mt-4 min-w-0 border-t border-[#e4dfd6] pt-3.5 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0 lg:pl-5">
            <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.14em] text-arch-black/70 sm:text-[9px]">
              Document Status
            </p>
            <ul className="mt-2.5 space-y-2 sm:mt-3 sm:space-y-2.5">
              {DOC_STATUS.map((doc) => (
                <li key={doc.name} className="flex items-center justify-between gap-2 text-[10.5px] sm:text-[11px]">
                  <span className="font-medium text-arch-black">{doc.name}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className={`font-medium ${
                        doc.tone === "amber" ? "text-[#c4922a]" : "text-[#2f9b5a]"
                      }`}
                    >
                      {doc.status}
                    </span>
                    <StatusMark tone={doc.tone} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Milestone */}
        <div className="mt-3.5 shrink-0 border-t border-[#e4dfd6] pt-3 sm:mt-4 sm:pt-3.5">
          <p className="font-mono text-[8.5px] font-semibold uppercase tracking-[0.14em] text-arch-black/70 sm:text-[9px]">
            Milestone
          </p>
          <div className="mt-1.5 flex items-end justify-between gap-3">
            <p className="text-[11.5px] font-medium text-arch-black sm:text-[12px]">Structure – Level 2</p>
            <p className="text-[11px] font-semibold text-arch-black sm:text-[11.5px]">65%</p>
          </div>
          <div className="mt-2 h-[7px] w-full overflow-hidden rounded-[2px] bg-[#e4dfd6]">
            <div className="h-full bg-nebco-red" style={{ width: "65%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * NRN hero — diagonal dark panel + site photo + Project Portal card.
 * Portal is absolutely placed so it straddles the diagonal like the mock.
 */
export function NrnHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-88px)] flex-col overflow-hidden bg-[#111111]">
      {/* Full-bleed photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.mountainsSite}
          alt="Construction site in Nepal with mountains beyond"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_38%]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#111111]/88 lg:hidden"
          aria-hidden="true"
        />
        {/* Mobile — wireframe over photo, under copy */}
        <div className="pointer-events-none absolute inset-0 z-[1] lg:hidden">
          <NrnHeroWireframe />
        </div>
      </div>

      {/* Dark diagonal panel */}
      <div
        className="nrn-hero__dark-panel absolute inset-0 z-10 hidden lg:block"
        style={{ clipPath: BLACK_CLIP, backgroundColor: PANEL }}
        aria-hidden="true"
      >
        <div className="hero-grid-bg pointer-events-none absolute inset-0 z-[1] opacity-[0.22]" />
        <NrnHeroWireframe />
      </div>

      {/* Copy — sits in the dark panel */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        <div className="nrn-hero__panel relative flex flex-1 flex-col justify-between px-6 py-12 sm:px-8 sm:py-14 lg:max-w-[min(42%,32rem)] lg:px-10 lg:py-16 xl:max-w-[36rem] xl:px-12 xl:pl-14">
          <div className="relative z-[1] flex flex-1 flex-col justify-between lg:my-auto">
            <div className="nrn-hero__content relative w-full max-w-[36rem]">
              <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
                NRN &amp; Overseas Client Services
              </p>

              <h1 className="nrn-hero__heading mt-5 tracking-[-0.02em] text-white sm:mt-6">
                <span className="block">Develop your property in Nepal—</span>
                <span className="block">without losing visibility or control.</span>
              </h1>

              <span
                className="mt-5 block h-[3px] w-11 bg-nebco-red sm:mt-6 sm:w-12"
                aria-hidden="true"
              />

              <p className="mt-5 max-w-[26rem] text-[14px] leading-[1.65] text-white/78 sm:mt-6 sm:text-[15px]">
                Local project coordination supported by documented decisions, digital reporting and clear
                milestones.
              </p>

              <div className="nrn-hero__actions mt-8 flex flex-row flex-nowrap items-center justify-start gap-2.5 sm:mt-9 sm:gap-3">
                <Link
                  href="/contact?type=nrn"
                  className="nrn-hero__btn inline-flex shrink-0 items-center justify-center gap-2 bg-nebco-red px-4 py-3 font-heading text-[8px] font-semibold uppercase leading-tight tracking-[0.1em] text-white transition-colors hover:bg-nebco-red-hover sm:px-4 sm:py-3.5 sm:text-[9.5px] lg:text-[10px]"
                >
                  Book an Online Consultation
                  <span aria-hidden="true" className="text-[12px] leading-none">
                    →
                  </span>
                </Link>
                <Link
                  href="/contact?type=land-evaluation"
                  className="nrn-hero__btn inline-flex shrink-0 items-center justify-center gap-2 border px-4 py-3 font-heading text-[8px] font-semibold uppercase leading-tight tracking-[0.1em] transition-colors hover:bg-white/5 sm:px-4 sm:py-3.5 sm:text-[9.5px] lg:text-[10px]"
                  style={{ borderColor: GOLD, color: GOLD }}
                >
                  Tell Us About Your Property
                  <span aria-hidden="true" className="text-[12px] leading-none">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="nrn-hero__meta mt-10 flex w-full max-w-[36rem] flex-wrap items-center justify-start gap-x-3.5 gap-y-2 type-label font-semibold uppercase tracking-[0.16em] sm:mt-12 lg:mt-0 lg:pt-8"
              style={{ color: GOLD }}
            >
              <span className="inline-flex items-center gap-2">
                <ClockIcon />
                Timezone NPT UTC+05:45
              </span>
              <span className="hidden h-3 w-px bg-current/50 sm:inline-block" aria-hidden="true" />
              <span>
                Lat 27.7172° N&nbsp;&nbsp;Long 85.3240° E
              </span>
            </div>
          </div>
        </div>

        {/* Mobile / tablet portal — in flow */}
        <div className="relative z-20 px-6 pb-12 sm:px-8 sm:pb-14 lg:hidden">
          <ProjectPortalCard />
        </div>
      </div>

      {/*
        Desktop portal — pinned to the right edge, vertically centered over the photo.
      */}
      <div className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
        <div className="relative mx-auto h-full w-full max-w-[1440px]">
          <div className="pointer-events-auto absolute top-1/2 right-6 w-[min(50vw,580px)] -translate-y-1/2 xl:right-10 xl:w-[min(48vw,600px)] 2xl:right-12">
            <ProjectPortalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
