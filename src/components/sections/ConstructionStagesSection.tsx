import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { StageMarginRail } from "@/components/ui/StageMarginRail";
import { IMAGES } from "@/lib/images";

const GOLD = "#b08d57";
const LIGHT_STROKE = "rgba(26, 26, 26, 0.14)";

const STAGES = [
  {
    num: "01",
    title: "Pre-Construction",
    items: [
      "Feasibility & site analysis",
      "Design & documentation review",
      "Cost planning & value engineering",
      "Program, procurement & permits",
    ],
    image: IMAGES.workersPlans,
    variant: "light" as const,
    imageFirst: true,
  },
  {
    num: "02",
    title: "Construction Execution",
    items: [
      "Site mobilisation & resources",
      "Quality control & inspections",
      "Schedule monitoring & reporting",
      "Safety & environmental management",
    ],
    image: IMAGES.constructionSite,
    variant: "dark" as const,
    imageFirst: false,
  },
  {
    num: "03",
    title: "Completion & Aftercare",
    items: [
      "Testing, commissioning & punch list",
      "Handover & documentation",
      "Defects liability period support",
      "Planned maintenance guidance",
    ],
    image: IMAGES.villa,
    variant: "light" as const,
    imageFirst: true,
  },
] as const;

function GoldBullet() {
  return (
    <span
      className="block h-[2px] w-[30px] shrink-0 rounded-none"
      style={{ backgroundColor: GOLD }}
      aria-hidden="true"
    />
  );
}

function OutlineNumber({
  num,
  variant,
}: {
  num: string;
  variant: "light" | "dark";
}) {
  const isGold = variant === "dark";

  return (
    <span
      className="pointer-events-none shrink-0 select-none font-heading text-[4.5rem] font-bold leading-none sm:text-[5rem] lg:text-[5.75rem] xl:text-[6.5rem]"
      style={{
        WebkitTextStroke: isGold ? `1.25px ${GOLD}` : `1px ${LIGHT_STROKE}`,
        color: "transparent",
      }}
      aria-hidden="true"
    >
      {num}
    </span>
  );
}

function StageCopy({
  title,
  items,
  tone,
}: {
  title: string;
  items: readonly string[];
  tone: "light" | "dark";
}) {
  const bodyTone = tone === "dark" ? "text-white/70" : "text-silver-graphite";

  return (
    <div className="min-w-0 max-w-[18.5rem] lg:max-w-[19.5rem] xl:max-w-[20.5rem]">
      <h3 className="font-heading text-[1.125rem] font-bold tracking-[-0.015em] text-nebco-red sm:text-[1.2rem] lg:text-[1.26rem] xl:text-[1.3rem]">
        {title}
      </h3>
      <ul className="mt-[1.125rem] flex flex-col gap-4 lg:gap-[1.05rem]">
        {items.map((item) => (
          <li
            key={item}
            className="grid grid-cols-[30px_minmax(0,1fr)] gap-x-3.5 text-[12.5px] leading-[1.5] lg:text-[13px] xl:text-[14px]"
          >
            <div className="flex h-[1.5em] w-[30px] items-center">
              <GoldBullet />
            </div>
            <span className={bodyTone}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StageImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/10] min-h-0 overflow-hidden bg-soft-concrete sm:aspect-[16/9] lg:aspect-auto lg:h-full">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );
}

function LightContentPanel({
  stage,
}: {
  stage: (typeof STAGES)[number] & { variant: "light" };
}) {
  return (
    <div className="relative flex items-center bg-ivory-light px-6 py-9 sm:px-8 lg:h-full lg:py-0 lg:pl-9 lg:pr-[4.5rem] xl:pl-11 xl:pr-20">
      <div className="relative z-[2] flex w-full items-center gap-8 sm:gap-9 lg:gap-11 xl:gap-[3.25rem]">
        <OutlineNumber num={stage.num} variant="light" />
        <StageCopy title={stage.title} items={stage.items} tone="light" />
      </div>

      <StageMarginRail />
    </div>
  );
}

function DarkContentPanel({
  stage,
}: {
  stage: (typeof STAGES)[number] & { variant: "dark" };
}) {
  return (
    <div className="relative flex items-center bg-arch-black px-6 py-9 sm:px-8 lg:h-full lg:py-0 lg:pl-9 lg:pr-10 xl:pl-11 xl:pr-12">
      <div className="relative z-[2] flex w-full items-center gap-8 sm:gap-9 lg:gap-11 xl:gap-[3.25rem]">
        <OutlineNumber num={stage.num} variant="dark" />
        <StageCopy title={stage.title} items={stage.items} tone="dark" />
      </div>
    </div>
  );
}

function StageRow({ stage }: { stage: (typeof STAGES)[number] }) {
  const image = <StageImage src={stage.image} alt={stage.title} />;

  const content =
    stage.variant === "dark" ? (
      <DarkContentPanel stage={stage} />
    ) : (
      <LightContentPanel stage={stage} />
    );

  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 items-stretch border-b border-soft-concrete/40 last:border-b-0 lg:grid-cols-2">
      {stage.imageFirst ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}

export function ConstructionStagesSection() {
  return (
    <section className="flex flex-col border-t border-soft-concrete/70 bg-ivory-light pt-8 lg:h-screen lg:max-h-[100dvh] lg:min-h-[640px] lg:pt-9 xl:pt-10">
      <div className="container-nebco mb-5 shrink-0 lg:mb-4 xl:mb-5">
        <div className="flex items-center gap-4 lg:gap-5">
          <SectionEyebrow
            number="02"
            title="THREE STAGES"
            className="!mb-0 shrink-0 !text-[11px] !tracking-[0.16em]"
          />
          <div className="h-px flex-1 bg-nebco-red/35" aria-hidden="true" />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col lg:overflow-hidden">
        {STAGES.map((stage) => (
          <StageRow key={stage.num} stage={stage} />
        ))}
      </div>
    </section>
  );
}
