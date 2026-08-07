import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

const FEATURED = {
  title: "Mixed-Use Development Kathmandu",
  category: "Development Consulting",
  location: "Kathmandu, Nepal",
  scope: "Development Consulting",
  status: "Completed",
  image: IMAGES.selectedWorkFeatured,
  imagePosition: "object-[center_42%]",
  href: "/projects",
};

const SECONDARY = [
  {
    title: "Commercial Building Lazimpat",
    category: "Construction",
    status: "Approved Project",
    image: IMAGES.selectedWorkCommercial,
    imagePosition: "object-[center_55%]",
    href: "/projects",
  },
  {
    title: "Residential Development Balkumari",
    category: "Commercial Project",
    status: "Approved Project",
    image: IMAGES.selectedWorkResidential,
    imagePosition: "object-[center_48%]",
    href: "/projects",
  },
] as const;

function ThinArrow() {
  return (
    <svg viewBox="0 0 20 12" fill="none" className="ml-1 inline-block h-3 w-5" aria-hidden="true">
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
  const card = (
    <div className={`selected-work-card ${compact ? "selected-work-card--compact" : ""}`}>
      <div className="selected-work-header">
        <SectionEyebrow
          number="04"
          title="SELECTED WORK"
          className={`selected-work-header__eyebrow ${compact ? "selected-work-header__eyebrow--compact" : ""}`}
        />
      </div>

      <div className="selected-work-body">
        <div className="selected-work-featured">
          <div className="selected-work-featured-image">
            <Image
              src={FEATURED.image}
              alt={FEATURED.title}
              fill
              quality={100}
              unoptimized
              className={`object-cover ${FEATURED.imagePosition}`}
              sizes="(max-width: 1024px) 100vw, 38vw"
              priority
            />
          </div>

          <div className="selected-work-featured-copy selected-work-text-panel">
            <div className="selected-work-text-panel__main">
              <p className="selected-work-featured-label">Featured Project</p>
              <h3 className="selected-work-featured-title">{FEATURED.title}</h3>
              <p className="selected-work-featured-category">{FEATURED.category}</p>

              <dl className="selected-work-featured-meta">
                {[
                  { label: "Location", value: FEATURED.location },
                  { label: "Scope", value: FEATURED.scope },
                  { label: "Status", value: FEATURED.status },
                ].map((item) => (
                  <div key={item.label} className="selected-work-featured-meta__item">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link href={FEATURED.href} className="selected-work-featured-link selected-work-text-panel__footer">
              View Project
              <ThinArrow />
            </Link>
          </div>
        </div>

        <div className="selected-work-secondary">
          {SECONDARY.map((project, i) => (
            <Link
              key={project.title}
              href={project.href}
              className={`selected-work-secondary-card group ${i > 0 ? "selected-work-secondary-card--bordered" : ""}`}
            >
              <div className="selected-work-secondary-thumb">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={100}
                  unoptimized
                  className={`object-cover ${project.imagePosition}`}
                  sizes="(max-width: 1024px) 40vw, 14vw"
                />
              </div>

              <div className="selected-work-secondary-copy selected-work-text-panel selected-work-text-panel--shade">
                <div className="selected-work-text-panel__main">
                  <h4 className="selected-work-secondary-title">{project.title}</h4>
                  <p className="selected-work-secondary-category">{project.category}</p>
                </div>
                <p className="selected-work-secondary-status selected-work-text-panel__footer">{project.status}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="container-nebco flex h-full min-h-0 w-full flex-col justify-center py-2 lg:py-3">
        {card}
      </div>
    );
  }

  return (
    <section className="bg-ivory-light py-10 lg:py-14">
      <div className="container-nebco">{card}</div>
    </section>
  );
}
