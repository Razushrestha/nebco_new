import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { NrnPortalMockup } from "@/components/ui/NrnPortalMockup";

type BeyondDistanceSectionProps = {
  compact?: boolean;
};

export function BeyondDistanceSection({ compact = false }: BeyondDistanceSectionProps) {
  const content = (
    <div
      className={`grid w-full grid-cols-1 ${
        compact
          ? "h-full min-h-0 items-center gap-6 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:gap-8 xl:gap-10"
          : "items-center gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12 xl:gap-14"
      }`}
    >
      <div className={`flex min-w-0 flex-col text-white ${compact ? "justify-center py-2" : "max-w-[22rem]"}`}>
        <SectionEyebrow
          number="06"
          title="BEYOND DISTANCE"
          className={`!text-[11px] !leading-none !tracking-[0.16em] !text-white/90 ${compact ? "!mb-3" : "!mb-4"}`}
        />
        <h2
          className={`m-0 tracking-[-0.02em] text-white ${
            compact
              ? "type-h3 max-w-[18rem] leading-[1.2] lg:max-w-[17rem] xl:max-w-[19rem]"
              : "type-h2 max-w-[22rem] leading-[1.18]"
          }`}
        >
          Your project is in Nepal. Your visibility should travel with you.
        </h2>
        <Link
          href="/nrn"
          className={`type-caption mt-5 inline-flex items-center gap-2 rounded-[2px] border border-white/90 font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10 lg:mt-6 ${
            compact ? "px-5 py-2.5" : "mt-7 px-6 py-3"
          }`}
        >
          Explore NRN Services
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="flex min-h-0 min-w-0 items-stretch">
        <NrnPortalMockup variant={compact ? "compact" : "default"} className="h-full w-full" />
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="flex h-full min-h-0 w-full flex-col justify-center bg-nebco-red py-6 lg:py-4">
        <div className="container-nebco w-full">{content}</div>
      </div>
    );
  }

  return (
    <section className="bg-nebco-red py-12 lg:py-16">
      <div className="container-nebco">{content}</div>
    </section>
  );
}
