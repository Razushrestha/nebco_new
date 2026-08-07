import Image from "next/image";
import { IMAGES } from "@/lib/images";

const NAV = [
  { label: "Dashboard", active: true, icon: "grid" },
  { label: "Projects", icon: "folder" },
  { label: "Site Updates", icon: "camera" },
  { label: "Documents", icon: "file" },
  { label: "Decisions", icon: "check" },
  { label: "Milestones", icon: "flag" },
  { label: "Reports", icon: "chart" },
  { label: "Team", icon: "users" },
  { label: "Settings", icon: "gear" },
] as const;

const DOCUMENTS = [
  { name: "Progress Report - May 2025", type: "PDF", size: "2.4 MB" },
  { name: "Site Photos - Week 3", type: "JPG", size: "8.1 MB" },
  { name: "Drawing Set - Rev 04", type: "PDF", size: "5.6 MB" },
];

const MILESTONES = [
  { title: "Concept Approval", status: "Completed", date: "21 May 2025", done: true },
  { title: "Design Development", status: "Completed", date: "28 May 2025", done: true },
  { title: "Building Permit", status: "In Progress", date: "", active: true },
  { title: "Construction Start", status: "Upcoming", date: "", upcoming: true },
];

const THUMBS = [
  IMAGES.constructionSite,
  IMAGES.sunsetSite,
  IMAGES.heroConstruction,
  IMAGES.modernApartment,
  IMAGES.mountainsSite,
];

function NavIcon({ type }: { type: string }) {
  const p = { stroke: "currentColor", fill: "none", strokeWidth: 1.1, strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 shrink-0" aria-hidden="true">
      {type === "grid" ? (
        <>
          <rect x="1" y="1" width="4" height="4" {...p} />
          <rect x="7" y="1" width="4" height="4" {...p} />
          <rect x="1" y="7" width="4" height="4" {...p} />
          <rect x="7" y="7" width="4" height="4" {...p} />
        </>
      ) : type === "folder" ? (
        <path d="M1 3h4l1 1h5v6H1z" {...p} />
      ) : type === "camera" ? (
        <>
          <rect x="1" y="3" width="10" height="7" rx="1" {...p} />
          <circle cx="6" cy="6.5" r="2" {...p} />
        </>
      ) : type === "file" ? (
        <path d="M3 1h4l3 3v7H3z" {...p} />
      ) : type === "check" ? (
        <path d="M2 6l3 3 5-5" {...p} />
      ) : type === "flag" ? (
        <path d="M3 2v9M3 2h6l-1.5 2L9 6H3" {...p} />
      ) : type === "chart" ? (
        <path d="M2 10V6M5 10V4M8 10V7M11 10V2" {...p} />
      ) : type === "users" ? (
        <>
          <circle cx="4.5" cy="4" r="2" {...p} />
          <path d="M1 10c0-2 1.5-3 3.5-3s3.5 1 3.5 3" {...p} />
          <circle cx="8.5" cy="4.5" r="1.5" {...p} />
        </>
      ) : (
        <>
          <circle cx="6" cy="6" r="2.5" {...p} />
          <path d="M6 1v1M6 10v1M1 6h1M10 6h1" {...p} />
        </>
      )}
    </svg>
  );
}

function FileBadge({ type }: { type: string }) {
  const isPdf = type === "PDF";
  return (
    <span
      className={`shrink-0 font-mono font-semibold text-[6.5px] w-[18px] h-[20px] flex items-center justify-center ${
        isPdf
          ? "text-nebco-red border border-nebco-red/30 bg-nebco-red/5"
          : "text-silver-graphite border border-soft-concrete bg-ivory-light"
      }`}
    >
      {type}
    </span>
  );
}

function PortalFooterLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-nebco-red text-[8.5px] font-semibold inline-flex items-center gap-1 whitespace-nowrap">
      {children}
      <span aria-hidden="true">→</span>
    </span>
  );
}

interface NrnPortalMockupProps {
  variant?: "default" | "compact";
  className?: string;
}

export function NrnPortalMockup({ variant = "default", className = "" }: NrnPortalMockupProps) {
  const compact = variant === "compact";

  if (!compact) {
    return (
      <div className={`bg-white rounded-[5px] shadow-[0_16px_50px_rgba(0,0,0,0.3)] overflow-hidden w-full min-h-[360px] ${className}`}>
        <NrnPortalGrid compact={false} />
      </div>
    );
  }

  return (
    <div
      className={`h-[240px] w-full overflow-hidden rounded-[8px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] sm:h-[260px] lg:h-full lg:max-h-full lg:min-h-0 ${className}`}
    >
      <NrnPortalGrid compact />
    </div>
  );
}

function NrnPortalGrid({ compact }: { compact: boolean }) {
  const colHeader = compact ? "text-[10.5px] mb-1.5" : "text-[11.5px] mb-2.5";
  const subText = compact ? "text-[8.5px]" : "text-[9px]";
  const bodyText = compact ? "text-[8.5px]" : "text-[9px]";
  const metaText = compact ? "text-[7.5px]" : "text-[8px]";

  return (
    <div
      className={`grid h-full min-h-0 ${
        compact
          ? "grid-cols-[92px_minmax(0,1.35fr)_120px_124px] sm:grid-cols-[98px_minmax(0,1.4fr)_124px_128px] lg:grid-cols-[104px_minmax(0,1.45fr)_128px_132px]"
          : "grid-cols-[132px_1fr_152px_152px]"
      }`}
    >
      {/* Sidebar */}
      <aside className="hidden min-h-0 flex-col overflow-hidden border-r border-[#e5e1db] bg-[#f8f7f5] px-1.5 py-2 sm:flex">
        <p className={`shrink-0 px-1 font-heading font-bold text-arch-black ${compact ? "mb-1.5 text-[9px]" : "mb-3 text-[10.5px]"}`}>
          NRN Portal
        </p>
        <nav className="min-h-0 flex-1 space-y-0.5 overflow-y-auto">
          {NAV.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-1 rounded-full ${compact ? "px-1.5 py-[2px] text-[7.5px]" : "px-2 py-[5px] text-[9px]"} ${
                "active" in item && item.active
                  ? "bg-nebco-red font-semibold text-white"
                  : "text-silver-graphite"
              }`}
            >
              <NavIcon type={item.icon} />
              <span className="leading-none truncate">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Site Updates */}
      <div className="border-r border-[#e5e1db] p-2 lg:p-2.5 flex flex-col min-h-0 min-w-0">
        <div className="shrink-0">
          <p className={`font-heading font-bold text-arch-black leading-none ${colHeader}`}>Site Updates</p>
          <p className={`text-silver-graphite mt-1 leading-none ${subText}`}>27 May 2025 · Kuleshwor Mixed-Use</p>
        </div>
        <div className={`relative shrink-0 bg-soft-concrete overflow-hidden rounded-[2px] my-1.5 ${compact ? "h-[78px] lg:h-[88px]" : "h-[100px]"}`}>
          <Image src={IMAGES.sunsetSite} alt="Construction site update" fill className="object-cover" sizes="280px" />
        </div>
        <div className={`grid grid-cols-5 shrink-0 gap-0.5 ${compact ? "mb-1" : "mb-1.5"}`}>
          {THUMBS.map((src, i) => (
            <div key={i} className={`relative bg-soft-concrete overflow-hidden rounded-[1px] ${compact ? "h-[24px]" : "h-[28px]"}`}>
              <Image src={src} alt="" fill className="object-cover" sizes="40px" />
            </div>
          ))}
        </div>
        <div className="mt-auto pt-1">
          <PortalFooterLink>View All Updates</PortalFooterLink>
        </div>
      </div>

      {/* Documents */}
      <div className="hidden min-h-0 min-w-0 flex-col border-r border-[#e5e1db] p-2 md:flex lg:p-2.5">
        <p className={`font-heading font-bold text-arch-black leading-none shrink-0 ${colHeader}`}>Documents</p>
        <ul className={`flex-1 min-h-0 flex flex-col justify-center ${compact ? "gap-1.5 my-1" : "gap-2.5 my-2"}`}>
          {DOCUMENTS.map((doc) => (
            <li key={doc.name} className="flex gap-1.5 items-center">
              <FileBadge type={doc.type} />
              <div className="min-w-0">
                <p className={`font-medium text-arch-black leading-tight ${bodyText}`}>{doc.name}</p>
                <p className={`text-silver-graphite ${metaText}`}>
                  {doc.type} · {doc.size}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-1 shrink-0">
          <PortalFooterLink>View All Documents</PortalFooterLink>
        </div>
      </div>

      {/* Milestones */}
      <div className="hidden min-h-0 min-w-0 flex-col p-2 lg:flex lg:p-2.5">
        <div className="flex items-center justify-between shrink-0 mb-1.5">
          <p className={`font-heading font-bold text-arch-black leading-none ${compact ? "text-[10px]" : "text-[11.5px]"}`}>
            Milestones
          </p>
          <button type="button" className="text-silver-graphite text-[11px] leading-none" aria-label="Close">
            ×
          </button>
        </div>
        <ul className={`flex-1 min-h-0 relative flex flex-col justify-center ${compact ? "gap-1.5" : "gap-2"}`}>
          <div className="absolute left-[5px] top-1 bottom-1 w-px bg-[#e5e1db]" aria-hidden="true" />
          {MILESTONES.map((m) => (
            <li key={m.title} className="flex gap-1.5 items-start relative">
              <span
                className={`w-[9px] h-[9px] rounded-full shrink-0 z-10 flex items-center justify-center mt-px ${
                  m.done
                    ? "bg-[#2fa05c]"
                    : m.active
                      ? "border-2 border-[#d4a84a] bg-white"
                      : "border border-[#ccc8c0] bg-white"
                }`}
              >
                {m.done && (
                  <svg width="5" height="5" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M1.5 4l2 2 3-3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                )}
              </span>
              <div className="min-w-0">
                <p className={`font-semibold text-arch-black leading-tight ${bodyText}`}>{m.title}</p>
                <p className={`text-silver-graphite ${metaText}`}>{m.status}</p>
                {m.date && <p className={`text-silver-graphite ${metaText}`}>{m.date}</p>}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-1 shrink-0">
          <PortalFooterLink>View All Milestones</PortalFooterLink>
        </div>
      </div>
    </div>
  );
}
