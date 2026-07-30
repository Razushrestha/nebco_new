/**
 * Partners — 04 / Responsibilities Remain Clear
 * Left copy + responsibility matrix with gold column icons and red titles.
 */

const RED = "#bc2026";
const GOLD = "#a8864d";
const INK = "#1a1a1a";
const CELL = "#555555";
const LINE = "#ddd8cf";

const COLUMNS = [
  { id: "design", title: "Design", icon: "design" as const },
  { id: "feasibility", title: "Feasibility", icon: "feasibility" as const },
  { id: "documentation", title: "Documentation", icon: "documentation" as const },
  { id: "market", title: "Market", icon: "market" as const },
  { id: "construction", title: "Construction", icon: "construction" as const },
  { id: "coordination", title: "Coordination", icon: "coordination" as const },
];

type ColId = (typeof COLUMNS)[number]["id"];

const ROWS: {
  label: string;
  values: Record<ColId, string>;
}[] = [
  {
    label: "NEBCO (Coordinator)",
    values: {
      design: "Oversees",
      feasibility: "Validates",
      documentation: "Approves",
      market: "Oversees",
      construction: "Oversees",
      coordination: "Leads",
    },
  },
  {
    label: "Appointed Professionals",
    values: {
      design: "Leads",
      feasibility: "Leads",
      documentation: "Prepares",
      market: "Contributes",
      construction: "Supports",
      coordination: "Reports",
    },
  },
  {
    label: "Specialist Contractors",
    values: {
      design: "Contributes",
      feasibility: "Contributes",
      documentation: "Provides",
      market: "—",
      construction: "Executes",
      coordination: "Reports",
    },
  },
];

function ColumnIcon({ type }: { type: (typeof COLUMNS)[number]["icon"] }) {
  const s = {
    fill: "none" as const,
    stroke: GOLD,
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "design":
      /* Overlapping set squares */
      return (
        <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true" className="mx-auto">
          <path d="M5 23V7l12 16H5z" {...s} />
          <path d="M11 23l12-16v16H11z" {...s} />
          <path d="M9 17h4M17 17h4" {...s} />
        </svg>
      );
    case "feasibility":
      return (
        <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true" className="mx-auto">
          <circle cx="12" cy="12" r="7.2" {...s} />
          <path d="M17.8 17.8L24 24" {...s} />
        </svg>
      );
    case "documentation":
      return (
        <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true" className="mx-auto">
          <path d="M8 4.5h9.5L23 10v13.5H8V4.5z" {...s} />
          <path d="M17.5 4.5V10H23" {...s} />
          <path d="M11.5 14h7M11.5 18h7M11.5 22h5" {...s} />
        </svg>
      );
    case "market":
      return (
        <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true" className="mx-auto">
          <circle cx="14" cy="14" r="9" {...s} />
          <path d="M14 5v9h9" {...s} />
          <path d="M14 14L8.2 20.2" {...s} />
        </svg>
      );
    case "construction":
      /* Tower crane */
      return (
        <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true" className="mx-auto">
          <path d="M8 25V8" {...s} />
          <path d="M8 10h14" {...s} />
          <path d="M8 8l4-4h3" {...s} />
          <path d="M19 10v4h5V10" {...s} />
          <path d="M21.5 14v3" {...s} />
          <path d="M5 25h8" {...s} />
        </svg>
      );
    case "coordination":
      /* Three-person org chart */
      return (
        <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden="true" className="mx-auto">
          <circle cx="14" cy="6.5" r="3.1" {...s} />
          <circle cx="6.5" cy="21" r="3.1" {...s} />
          <circle cx="21.5" cy="21" r="3.1" {...s} />
          <path d="M14 9.6v3.2" {...s} />
          <path d="M6.5 17.9V14.8h15v3.1" {...s} />
          <path d="M14 12.8V14.8" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

export function PartnersResponsibilitiesSection() {
  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-4 pt-12 sm:px-8 sm:pb-5 sm:pt-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.6fr)] lg:gap-10 lg:px-10 lg:pb-6 lg:pt-16 xl:gap-12 xl:px-12">
        <div className="max-w-[22rem] lg:max-w-[24rem]">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
            04 / Responsibilities Remain Clear
          </p>
          <h2 className="mt-4 font-heading text-[1.55rem] font-bold leading-[1.18] tracking-[-0.02em] text-arch-black sm:mt-5 sm:text-[1.75rem] lg:text-[1.9rem] xl:text-[2.05rem]">
            Collaboration works when accountability stays visible.
          </h2>
          <span
            className="mt-5 block h-[3px] w-10 sm:mt-6 sm:w-11"
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 overflow-x-auto pb-1">
          <div
            className="grid min-w-[680px]"
            style={{
              gridTemplateColumns: "minmax(10.5rem, 1.15fr) repeat(6, minmax(0, 1fr))",
            }}
          >
            {/* Header corner */}
            <div className="border-b px-2 pb-3.5 pt-1" style={{ borderColor: LINE }} />

            {/* Column headers: icon + red title */}
            {COLUMNS.map((col) => (
              <div
                key={col.id}
                className="flex flex-col items-center justify-end gap-2 border-b border-l px-1 pb-3.5 pt-1 text-center"
                style={{ borderColor: LINE }}
              >
                <ColumnIcon type={col.icon} />
                <span
                  className="font-mono text-[8px] font-semibold uppercase tracking-[0.11em] sm:text-[8.5px] lg:text-[9px]"
                  style={{ color: RED }}
                >
                  {col.title}
                </span>
              </div>
            ))}

            {/* Data rows */}
            {ROWS.map((row) => (
              <div key={row.label} className="contents">
                <div
                  className="flex items-center border-b px-2 py-3.5 font-heading text-[12px] font-bold leading-[1.25] tracking-[-0.01em] sm:px-2.5 sm:py-4 sm:text-[13px]"
                  style={{ borderColor: LINE, color: INK }}
                >
                  {row.label}
                </div>
                {COLUMNS.map((col) => (
                  <div
                    key={col.id}
                    className="flex items-center justify-center border-b border-l px-1 py-3.5 text-center text-[11.5px] leading-none sm:py-4 sm:text-[12.5px]"
                    style={{ borderColor: LINE, color: CELL }}
                  >
                    {row.values[col.id]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
