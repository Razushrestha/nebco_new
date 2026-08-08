import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GoldDashBullet } from "@/components/ui/GoldDashBullet";
import { StageMarginRail } from "@/components/ui/StageMarginRail";
import { IMAGES } from "@/lib/images";

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
    image: IMAGES.constructionStagePreConstruction,
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
    image: IMAGES.constructionStageExecution,
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
    image: IMAGES.constructionStageCompletion,
    imagePosition: "center 48%",
    variant: "light" as const,
    imageFirst: true,
  },
] as const;

function GoldBullet() {
  return <GoldDashBullet />;
}

function OutlineNumber({
  num,
  variant,
}: {
  num: string;
  variant: "light" | "dark";
}) {
  return (
    <span
      className={`construction-stage__number construction-stage__number--${variant} pointer-events-none shrink-0 select-none font-heading font-bold`}
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
    <div className="construction-stage__copy">
      <h3 className="construction-stage__title">{title}</h3>
      <ul className="construction-stage__list">
        {items.map((item) => (
          <li key={item} className="construction-stage__list-item">
            <GoldBullet />
            <span className={bodyTone}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StageImage({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  return (
    <div className="relative aspect-[16/10] min-h-0 overflow-hidden bg-soft-concrete sm:aspect-[16/9] lg:aspect-auto lg:h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

function LightContentPanel({
  stage,
}: {
  stage: (typeof STAGES)[number] & { variant: "light" };
}) {
  return (
    <div className="construction-stage__panel construction-stage__panel--light relative flex bg-ivory-light px-6 py-9 sm:px-8 lg:h-full lg:py-0 lg:pl-9 lg:pr-[4.5rem] xl:pl-11 xl:pr-20">
      <div className="construction-stage__inner relative z-[2]">
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
    <div className="construction-stage__panel construction-stage__panel--dark relative flex bg-arch-black px-6 py-9 sm:px-8 lg:h-full lg:py-0 lg:pl-9 lg:pr-10 xl:pl-11 xl:pr-12">
      <div className="construction-stage__inner relative z-[2]">
        <OutlineNumber num={stage.num} variant="dark" />
        <StageCopy title={stage.title} items={stage.items} tone="dark" />
      </div>
    </div>
  );
}

function StageRow({ stage }: { stage: (typeof STAGES)[number] }) {
  const image = (
    <StageImage
      src={stage.image}
      alt={stage.title}
      objectPosition={"imagePosition" in stage ? stage.imagePosition : undefined}
    />
  );

  const content =
    stage.variant === "dark" ? (
      <DarkContentPanel stage={stage} />
    ) : (
      <LightContentPanel stage={stage} />
    );

  return (
    <div className="construction-stage__row grid min-h-0 flex-1 grid-cols-1 items-stretch border-b border-soft-concrete/40 last:border-b-0 lg:grid-cols-2">
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
