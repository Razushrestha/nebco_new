import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IntegratedHubDiagram } from "@/components/ui/IntegratedHubDiagram";

const COPY_COL = "w-full max-w-[22rem] xl:max-w-[24rem]";

type TrustSectionProps = {
  compact?: boolean;
};

export function TrustSection({ compact = false }: TrustSectionProps) {
  const headingSize = compact
    ? "text-[1.3rem] sm:text-[1.45rem] lg:text-[1.4rem] xl:text-[1.55rem]"
    : "text-[1.55rem] sm:text-[1.7rem] lg:text-[1.85rem] xl:text-[2rem]";

  const content = (
    <div className={compact ? "container-nebco w-full h-full flex items-center" : "container-nebco"}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-[minmax(0,26rem)_1fr] w-full ${
          compact ? "gap-6 lg:gap-8 xl:gap-10 items-center" : "gap-8 lg:gap-12 xl:gap-14 items-center"
        }`}
      >
        <div className={COPY_COL}>
          <SectionEyebrow
            number="05"
            title="TRUST + INTEGRATED EXPERTISE"
            className={`!text-[11px] !tracking-[0.16em] !leading-none ${compact ? "!mb-3" : "!mb-4"}`}
          />
          <h2
            className={`font-heading font-bold ${headingSize} leading-[1.2] text-white tracking-[-0.02em] m-0 p-0`}
          >
            The project does not need more disconnected consultants. It needs the right specialists working in{" "}
            <span className="text-nebco-red">one direction.</span>
          </h2>
        </div>

        <div className="flex justify-center lg:justify-end">
          <IntegratedHubDiagram variant={compact ? "compact" : "default"} />
        </div>
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="bg-black w-full h-full flex items-center py-8 lg:py-0 overflow-hidden">
        {content}
      </div>
    );
  }

  return (
    <section className="bg-black py-12 lg:py-16">
      {content}
    </section>
  );
}
