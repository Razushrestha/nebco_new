import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const BORDER = "#d4cec4";
const CARD_SHADE = "#f2f0eb";

const FEATURED = {
  title: "Mixed-Use Development Kathmandu",
  category: "Development Consulting",
  location: "Kathmandu, Nepal",
  scope: "Development Consulting",
  status: "Completed",
  image: IMAGES.luxuryApartment,
  href: "/projects",
};

const SECONDARY = [
  {
    title: "Commercial Building Lazimpat",
    category: "Construction",
    status: "Approved Project",
    image: IMAGES.commercialBuilding,
    href: "/projects",
  },
  {
    title: "Residential Development Balkumari",
    category: "Commercial Project",
    status: "Approved Project",
    image: IMAGES.modernApartment,
    href: "/projects",
  },
] as const;

function ThinArrow() {
  return (
    <svg viewBox="0 0 20 12" fill="none" className="w-5 h-3 inline-block ml-1" aria-hidden="true">
      <path
        d="M1 6h16M12 2l5 4-5 4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SelectedWorkSectionProps = {
  compact?: boolean;
};

export function SelectedWorkSection({ compact = false }: SelectedWorkSectionProps) {
  const content = (
    <div className={`container-nebco ${compact ? "h-full flex flex-col justify-end lg:justify-center w-full" : ""}`}>
      <div
        className={`border bg-ivory-light ${compact ? "flex-1 min-h-0 flex flex-col max-h-full" : ""}`}
        style={{ borderColor: BORDER }}
      >
        <div
          className={`px-7 sm:px-8 lg:px-9 shrink-0 ${
            compact ? "pt-5 pb-4" : "pt-5 lg:pt-6 pb-4 lg:pb-5"
          }`}
        >
          <SectionEyebrow
            number="04"
            title="SELECTED WORK"
            className={`mb-0 ${compact ? "!text-[11px] !tracking-[0.16em]" : ""}`}
          />
        </div>

        <div
          className={`selected-work-body border-t ${compact ? "flex-1 min-h-0" : ""}`}
          style={{ borderColor: BORDER }}
        >
          <div
            className={`selected-work-featured border-b lg:border-b-0 lg:border-r ${
              compact ? "min-h-0" : ""
            }`}
            style={{ borderColor: BORDER }}
          >
            <div className="selected-work-featured-image">
              <Image
                src={FEATURED.image}
                alt={FEATURED.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>

            <div
              className={`flex flex-col justify-center h-full min-h-0 ${
                compact ? "px-7 sm:px-8 lg:px-9 py-6 lg:py-7" : "px-7 sm:px-8 lg:px-10 py-6 lg:py-8"
              }`}
            >
              <p
                className={`text-nebco-red font-mono font-semibold uppercase tracking-[0.2em] ${
                  compact ? "text-[10px] mb-3.5" : "text-[10px] mb-4"
                }`}
              >
                Featured Project
              </p>

              <h3
                className={`font-heading font-bold leading-[1.14] text-arch-black tracking-[-0.02em] ${
                  compact
                    ? "text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.7rem]"
                    : "text-[1.35rem] sm:text-[1.5rem] lg:text-[1.65rem]"
                }`}
              >
                {FEATURED.title}
              </h3>

              <p
                className={`mt-2 font-serif tracking-wide ${
                  compact ? "text-[1.05rem] lg:text-[1.1rem]" : "text-[1.05rem] lg:text-[1.1rem]"
                }`}
                style={{ color: GOLD }}
              >
                {FEATURED.category}
              </p>

              <dl className={`${compact ? "mt-6 space-y-3.5" : "mt-7 space-y-4"}`}>
                {[
                  { label: "Location", value: FEATURED.location },
                  { label: "Scope", value: FEATURED.scope },
                  { label: "Status", value: FEATURED.status },
                ].map((item) => (
                  <div key={item.label} className="grid grid-cols-[5.5rem_1fr] gap-2 items-baseline">
                    <dt className="font-heading font-bold text-arch-black text-[13px]">{item.label}</dt>
                    <dd className="text-silver-graphite/90 text-[13px]">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href={FEATURED.href}
                className={`inline-flex items-center text-nebco-red font-semibold tracking-wide hover:underline ${
                  compact ? "mt-6 text-[13px]" : "mt-8 text-[13px]"
                }`}
              >
                View Project
                <ThinArrow />
              </Link>
            </div>
          </div>

          <div className={`flex flex-col h-full min-h-0`}>
            {SECONDARY.map((project, i) => (
              <Link
                key={project.title}
                href={project.href}
                className={`selected-work-secondary-card group hover:bg-black/[0.02] transition-colors ${
                  compact ? "flex-1 min-h-0" : "min-h-[145px] lg:min-h-[160px]"
                } ${i > 0 ? "border-t" : ""}`}
                style={{ borderColor: BORDER }}
              >
                <div className="selected-work-secondary-thumb">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 40vw, 15vw"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center min-h-0 ${
                    compact ? "px-6 lg:px-7 py-5" : "px-6 lg:px-7 py-5"
                  }`}
                  style={{ backgroundColor: CARD_SHADE }}
                >
                  <h4
                    className={`font-heading font-bold text-arch-black leading-[1.25] group-hover:underline ${
                      compact ? "text-[15px] lg:text-[16px]" : "text-[15px] lg:text-base"
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`mt-1.5 font-serif tracking-wide text-[14px]`}
                    style={{ color: GOLD }}
                  >
                    {project.category}
                  </p>
                  <p
                    className={`text-nebco-red font-mono tracking-wide ${
                      compact ? "text-[11px] mt-2.5" : "text-[12px] mt-3"
                    }`}
                  >
                    {project.status}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="w-full h-full flex flex-col justify-center py-5 lg:py-5">{content}</div>;
  }

  return <section className="bg-ivory-light py-10 lg:py-14">{content}</section>;
}
