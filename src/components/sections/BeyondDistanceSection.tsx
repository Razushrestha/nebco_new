import Link from "next/link";
import { NrnPortalMockup } from "@/components/ui/NrnPortalMockup";

const COPY_COL = "w-full max-w-[20rem] xl:max-w-[22rem]";

function NebcoMark() {
  return (
    <div
      className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center shrink-0"
      aria-hidden="true"
    >
      <span className="font-serif font-bold text-white text-sm leading-none">N</span>
    </div>
  );
}

type BeyondDistanceSectionProps = {
  compact?: boolean;
};

export function BeyondDistanceSection({ compact = false }: BeyondDistanceSectionProps) {
  const headingSize = compact
    ? "text-[1.35rem] sm:text-[1.5rem] lg:text-[1.55rem] xl:text-[1.7rem]"
    : "text-[1.45rem] sm:text-[1.6rem] lg:text-[1.75rem] xl:text-[1.9rem]";

  const content = (
    <div
      className={`container-nebco w-full ${
        compact ? "h-full flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8 xl:gap-10 min-h-0" : ""
      }`}
    >
      <div
        className={`${COPY_COL} shrink-0 text-white flex flex-col ${
          compact ? "justify-between lg:h-full lg:py-2" : "justify-center"
        }`}
      >
        <div>
          <p
            className={`font-mono uppercase tracking-[0.16em] text-white/90 mb-4 m-0 p-0 leading-none ${
              compact ? "text-[11px]" : "text-[11px]"
            }`}
          >
            06 / BEYOND DISTANCE
          </p>
          <h2
            className={`font-heading font-bold ${headingSize} leading-[1.18] tracking-[-0.02em] m-0 p-0`}
          >
            Your project is in Nepal. Your visibility should travel with you.
          </h2>
          <Link
            href="/nrn"
            className={`inline-flex items-center gap-2 border border-white/90 text-white hover:bg-white/10 transition-colors rounded-[2px] font-semibold uppercase tracking-[0.14em] ${
              compact
                ? "mt-6 px-6 py-3 text-[10px]"
                : "mt-7 px-6 py-3 text-[10px]"
            }`}
          >
            Explore NRN Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={`${compact ? "hidden lg:block mt-6" : "mt-8"}`}>
          <NebcoMark />
        </div>
      </div>

      <div className={`flex-1 min-w-0 flex items-stretch min-h-0 ${compact ? "h-full" : ""}`}>
        <NrnPortalMockup variant={compact ? "compact" : "default"} className="w-full h-full" />
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="bg-nebco-red w-full h-full flex items-center py-8 lg:py-6 overflow-hidden">
        {content}
      </div>
    );
  }

  return (
    <section className="bg-nebco-red py-12 lg:py-16">
      <div className="container-nebco">{content}</div>
    </section>
  );
}
