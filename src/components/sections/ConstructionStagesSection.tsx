import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

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
      className="inline-block w-4 h-px shrink-0 mt-[0.55rem]"
      style={{ backgroundColor: GOLD }}
      aria-hidden="true"
    />
  );
}

function StageRail() {
  return (
    <div
      className="hidden lg:flex absolute right-0 top-[10%] bottom-[10%] w-px flex-col items-center pointer-events-none"
      aria-hidden="true"
    >
      <span className="w-3 h-px" style={{ backgroundColor: GOLD }} />
      <span className="flex-1 w-px mt-0" style={{ backgroundColor: `${GOLD}88` }} />
    </div>
  );
}

function OutlineNumber({
  num,
  variant,
  layout,
}: {
  num: string;
  variant: "light" | "dark";
  layout: "overlap" | "inline";
}) {
  const isGold = variant === "dark";

  if (layout === "inline") {
    return (
      <span
        className="font-heading font-bold text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-none select-none pointer-events-none shrink-0"
        style={{
          WebkitTextStroke: isGold ? `1.5px ${GOLD}` : "1px rgba(26, 26, 26, 0.14)",
          color: "transparent",
        }}
        aria-hidden="true"
      >
        {num}
      </span>
    );
  }

  return (
    <span
      className="absolute left-4 sm:left-6 lg:-left-[18%] xl:-left-[22%] top-1/2 -translate-y-1/2 font-heading font-bold text-[4.5rem] sm:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-none select-none pointer-events-none z-[1]"
      style={{
        WebkitTextStroke: "1px rgba(26, 26, 26, 0.12)",
        color: "transparent",
      }}
      aria-hidden="true"
    >
      {num}
    </span>
  );
}

function StageImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-0 bg-soft-concrete overflow-hidden">
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
    <div className="relative flex items-center bg-ivory-light px-6 sm:px-8 lg:px-10 xl:px-12 py-6 lg:py-0 lg:h-full min-h-0 overflow-hidden">
      <OutlineNumber num={stage.num} variant="light" layout="overlap" />

      <div className="relative z-[2] ml-0 lg:ml-[3rem] xl:ml-[3.5rem] max-w-[22rem]">
        <h3 className="font-heading font-bold text-[1.15rem] sm:text-[1.2rem] lg:text-[1.25rem] xl:text-[1.3rem] text-nebco-red tracking-tight">
          {stage.title}
        </h3>
        <ul className="mt-3 lg:mt-4 space-y-1.5 lg:space-y-2">
          {stage.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <GoldBullet />
              <span className="text-[12px] lg:text-[13px] xl:text-[14px] text-arch-black leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <StageRail />
    </div>
  );
}

function DarkContentPanel({
  stage,
}: {
  stage: (typeof STAGES)[number] & { variant: "dark" };
}) {
  return (
    <div className="relative flex items-center bg-arch-black px-6 sm:px-8 lg:px-10 xl:px-12 py-6 lg:py-0 lg:h-full min-h-0 overflow-hidden">
      <div className="relative z-[2] flex items-center gap-4 lg:gap-5 xl:gap-6 w-full max-w-[30rem]">
        <OutlineNumber num={stage.num} variant="dark" layout="inline" />

        <div className="min-w-0">
          <h3 className="font-heading font-bold text-[1.15rem] sm:text-[1.2rem] lg:text-[1.25rem] xl:text-[1.3rem] text-nebco-red tracking-tight">
            {stage.title}
          </h3>
          <ul className="mt-3 lg:mt-4 space-y-1.5 lg:space-y-2">
            {stage.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <GoldBullet />
                <span className="text-[12px] lg:text-[13px] xl:text-[14px] text-white/75 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch flex-1 min-h-0">
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
    <section className="bg-ivory-light border-t border-soft-concrete/70 flex flex-col lg:h-screen lg:min-h-[640px] lg:max-h-[100dvh] pt-8 lg:pt-9 xl:pt-10 pb-10 lg:pb-0">
      <div className="container-nebco mb-5 lg:mb-4 xl:mb-5 shrink-0">
        <div className="flex items-center gap-4 lg:gap-5">
          <SectionEyebrow
            number="02"
            title="THREE STAGES"
            className="!text-[11px] !tracking-[0.16em] !mb-0 shrink-0"
          />
          <div className="flex-1 h-px bg-nebco-red/35" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-col flex-1 min-h-0 lg:overflow-hidden">
        {STAGES.map((stage) => (
          <StageRow key={stage.num} stage={stage} />
        ))}
      </div>
    </section>
  );
}
