import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const MILESTONES = [
  {
    era: "1990s",
    title: "Construction Roots",
    desc: "Built on sites. Learned on projects. Earned trust.",
    image: IMAGES.historicalConstruction,
    color: false,
  },
  {
    era: "2001",
    title: "Established NEBCO",
    desc: "Formal structure. Stronger systems. Wider capability.",
    image: IMAGES.constructionSite,
    color: false,
  },
  {
    era: "Today",
    title: "Integrated Platform",
    desc: "Construction, consulting and investments—aligned.",
    image: IMAGES.modernApartment,
    color: true,
  },
] as const;

interface FoundationSectionProps {
  compact?: boolean;
}

export function FoundationSection({ compact = false }: FoundationSectionProps) {
  const headingSize = compact
    ? "text-[1.5rem] sm:text-[1.65rem] lg:text-[1.7rem] xl:text-[1.95rem]"
    : "text-[1.75rem] sm:text-[2rem] lg:text-[2.15rem] xl:text-[2.35rem]";

  const content = (
    <div className={compact ? "container-nebco w-full h-full flex items-center" : "container-nebco"}>
      <div
        className={`grid grid-cols-1 lg:grid-cols-[minmax(260px,36%)_1fr] w-full ${
          compact ? "gap-7 lg:gap-10 items-center" : "gap-8 lg:gap-12 items-start"
        }`}
      >
        <div>
          <SectionEyebrow
            number="01"
            title="FOUNDATION"
            className={compact ? "!mb-3 !text-[11px] !tracking-[0.16em]" : undefined}
          />
          <h2 className={`font-heading font-bold ${headingSize} leading-[1.18] tracking-tight text-arch-black`}>
            Construction gave us the foundation.
          </h2>
          <p className={`font-heading font-bold ${headingSize} leading-[1.18] tracking-tight text-nebco-red mt-1`}>
            Our clients showed us the bigger opportunity.
          </p>
        </div>

        <div>
          <div className={`grid grid-cols-3 ${compact ? "gap-3 sm:gap-4" : "gap-3 sm:gap-5 lg:gap-6"}`}>
            {MILESTONES.map((item) => (
              <div
                key={item.era}
                className={`relative overflow-hidden bg-soft-concrete ${
                  compact ? "h-[100px] sm:h-[112px] lg:h-[min(14vh,128px)]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.color ? "" : "grayscale contrast-[1.05]"}`}
                  sizes="(max-width: 768px) 33vw, 240px"
                />
              </div>
            ))}
          </div>

          <div className={`relative flex items-center ${compact ? "h-8" : "h-9"} mt-0`}>
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-nebco-red" />
            <div className="grid grid-cols-3 w-full">
              <div />
              {MILESTONES.slice(1).map((item) => (
                <div key={item.era} className={`flex items-center ${compact ? "h-8" : "h-9"}`}>
                  <span
                    className="inline-block w-[9px] h-[9px] rounded-full border border-nebco-red bg-ivory-light shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-3 ${compact ? "gap-3 sm:gap-4 mt-1" : "gap-3 sm:gap-5 lg:gap-6 mt-1"}`}>
            {MILESTONES.map((item) => (
              <div key={item.era}>
                <p className={`text-nebco-red font-mono font-medium mb-1 ${compact ? "text-[12px]" : "text-[13px]"}`}>
                  {item.era}
                </p>
                <h3
                  className={`font-heading font-bold text-nebco-red leading-snug ${
                    compact ? "text-[14px] sm:text-[15px]" : "text-[15px] sm:text-base"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-arch-black/80 mt-1.5 max-w-[220px] ${
                    compact ? "text-[11px] sm:text-[12px] leading-relaxed" : "text-[12px] sm:text-[13px] leading-relaxed mt-1.5"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="w-full h-full flex items-center py-8 lg:py-0">{content}</div>;
  }

  return <section className="bg-ivory-light py-10 lg:py-14">{content}</section>;
}
