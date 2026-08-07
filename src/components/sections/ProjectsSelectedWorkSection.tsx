"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";

type Layout = "stack-bar" | "stack-split" | "rail-right" | "rail-left";

type WorkCard = {
  title: string;
  location: string;
  service: string;
  status: string;
  image: string;
  tone: "dark" | "red";
  layout: Layout;
  href: string;
};

/**
 * Layout map matching the design mosaic:
 * 1 stack-bar dark | 2 stack-split red | 3 rail-right dark
 * 4 rail-left red  | 5 stack-split dark | 6 stack-split red
 */
const WORK: readonly WorkCard[] = [
  {
    title: "Residential Development",
    location: "Balkumari, Lalitpur",
    service: "Development Consulting",
    status: "Completed",
    image: IMAGES.modernApartment,
    tone: "dark",
    layout: "stack-bar",
    href: "/projects",
  },
  {
    title: "Commercial Building",
    location: "Lalitpur",
    service: "Construction",
    status: "Ongoing",
    image: IMAGES.commercialBuilding,
    tone: "red",
    layout: "stack-split",
    href: "/projects",
  },
  {
    title: "Office Building",
    location: "Thapathali, Kathmandu",
    service: "Construction",
    status: "Completed",
    image: IMAGES.commercialBuilding,
    tone: "dark",
    layout: "rail-right",
    href: "/projects",
  },
  {
    title: "Hospitality Project",
    location: "Durbarmarg, Kathmandu",
    service: "Development",
    status: "Proposed",
    image: IMAGES.nightBuilding,
    tone: "red",
    layout: "rail-left",
    href: "/projects",
  },
  {
    title: "Mixed-Use Development",
    location: "Kathmandu",
    service: "Development Consulting",
    status: "Under Construction",
    image: IMAGES.brickBuilding,
    tone: "dark",
    layout: "stack-split",
    href: "/projects",
  },
  {
    title: "RCC Project",
    location: "Naxal, Kathmandu",
    service: "Construction",
    status: "Ongoing",
    image: IMAGES.constructionSite,
    tone: "red",
    layout: "stack-split",
    href: "/projects",
  },
] as const;

function Tone({
  tone,
  className,
  style,
  children,
}: {
  tone: "dark" | "red";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`${tone === "red" ? "bg-nebco-red" : "bg-[#111111]"} text-white ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

/** Gold label + white value — used in dark bars */
function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: GOLD }}>
        {label}
      </p>
      <p className="mt-1 font-heading text-[12.5px] font-semibold leading-snug text-white sm:text-[13px]">
        {value}
      </p>
    </div>
  );
}

/** White label style for red panels */
function MetaBlockLight({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/70">{label}</p>
      <p className="mt-1 font-heading text-[12.5px] font-semibold leading-snug text-white sm:text-[13px]">
        {value}
      </p>
    </div>
  );
}

function ZoomImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      sizes={sizes}
    />
  );
}

function CardFront({ card }: { card: WorkCard }) {
  /* ——— Image top (~58%) + dark/red bar: title left, Service|Status right ——— */
  if (card.layout === "stack-bar") {
    return (
      <div className="flex h-full flex-col">
        <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:min-h-0 lg:flex-1">
          <ZoomImage src={card.image} alt={card.title} sizes="(max-width: 1024px) 100vw, 33vw" />
        </div>
        <Tone tone={card.tone} className="flex shrink-0 items-start justify-between gap-5 px-5 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0 max-w-[48%]">
            <h3 className="type-h4">
              {card.title}
            </h3>
            <p className="mt-1.5 text-[12px] leading-snug text-white/70 sm:text-[12.5px]">{card.location}</p>
          </div>
          <div className="flex shrink-0 gap-6 sm:gap-8">
            <MetaBlock label="Service" value={card.service} />
            <MetaBlock label="Status" value={card.status} />
          </div>
        </Tone>
      </div>
    );
  }

  /* ——— Image top + panel: title, then Service | Status columns ——— */
  if (card.layout === "stack-split") {
    const Meta = card.tone === "red" ? MetaBlockLight : MetaBlock;
    return (
      <div className="flex h-full flex-col">
        <div className="relative aspect-[16/11] w-full overflow-hidden lg:aspect-auto lg:min-h-0 lg:flex-[1.25]">
          <ZoomImage src={card.image} alt={card.title} sizes="(max-width: 1024px) 100vw, 33vw" />
        </div>
        <Tone tone={card.tone} className="shrink-0 px-5 py-4 sm:px-6 sm:py-5">
          <h3 className="type-h4">
            {card.title}
          </h3>
          <p className="mt-1 text-[12px] text-white/70 sm:text-[12.5px]">{card.location}</p>
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/20 pt-3.5">
            <Meta label="Service" value={card.service} />
            <Meta label="Status" value={card.status} />
          </div>
        </Tone>
      </div>
    );
  }

  /* ——— Full-bleed image + dark info panel OVERLAID on the right
       (panel stops short of the bottom so the photo peeks through) ——— */
  if (card.layout === "rail-right") {
    return (
      <div className="relative h-full min-h-[300px] overflow-hidden lg:min-h-[320px]">
        <ZoomImage src={card.image} alt={card.title} sizes="(max-width: 1024px) 100vw, 33vw" />
        <Tone
          tone={card.tone}
          className="absolute right-0 top-0 flex h-[72%] w-[42%] min-w-[10.5rem] max-w-[13rem] flex-col overflow-hidden px-4 py-5 sm:w-[44%] sm:px-5 sm:py-6 lg:px-5"
        >
          <h3 className="type-h4 shrink-0 text-white">
            {card.title}
          </h3>
          <p className="mt-1.5 shrink-0 text-[11.5px] leading-snug text-white/75 sm:text-[12px]">
            {card.location}
          </p>

          <div className="mt-auto space-y-4 pt-5 sm:pt-6">
            <div>
              <p
                className="type-label font-semibold uppercase tracking-[0.16em]"
                style={{ color: GOLD }}
              >
                Service
              </p>
              <p className="mt-1 font-heading text-[12px] font-semibold leading-snug text-white sm:text-[12.5px]">
                {card.service}
              </p>
            </div>
            <div className="h-px w-8 bg-white/20" aria-hidden="true" />
            <div>
              <p
                className="type-label font-semibold uppercase tracking-[0.16em]"
                style={{ color: GOLD }}
              >
                Status
              </p>
              <p className="mt-1 font-heading text-[12px] font-semibold leading-snug text-white sm:text-[12.5px]">
                {card.status}
              </p>
            </div>
          </div>
        </Tone>
      </div>
    );
  }

  /* ——— Full-bleed image + red info panel OVERLAID on the left
       (panel stops short of the bottom so the photo peeks through) ——— */
  return (
    <div className="relative h-full min-h-[300px] overflow-hidden lg:min-h-[320px]">
      <ZoomImage src={card.image} alt={card.title} sizes="(max-width: 1024px) 100vw, 33vw" />
      <Tone
        tone={card.tone}
        className="absolute left-0 top-0 flex h-[86%] w-[38%] min-w-[9.5rem] max-w-[11.5rem] flex-col overflow-hidden px-4 py-5 sm:w-[40%] sm:px-5 sm:py-6 lg:px-5"
      >
        <h3 className="type-h4 shrink-0 text-white">
          {card.title}
        </h3>
        <p className="mt-1.5 shrink-0 text-[11.5px] leading-snug text-white/80 sm:text-[12px]">
          {card.location}
        </p>

        <div className="mt-auto space-y-4 pt-5">
          <div className="h-px w-8 bg-white/45" aria-hidden="true" />
          <div>
            <p className="type-label font-semibold uppercase tracking-[0.16em] text-white/70">
              Service
            </p>
            <p className="mt-1 font-heading text-[12px] font-semibold leading-snug text-white sm:text-[12.5px]">
              {card.service}
            </p>
          </div>
          <div className="h-px w-8 bg-white/45" aria-hidden="true" />
          <div>
            <p className="type-label font-semibold uppercase tracking-[0.16em] text-white/70">
              Status
            </p>
            <p className="mt-1 font-heading text-[12px] font-semibold leading-snug text-white sm:text-[12.5px]">
              {card.status}
            </p>
          </div>
        </div>
      </Tone>
    </div>
  );
}

function FlipCard({ card }: { card: WorkCard }) {
  const backTone = card.tone === "red" ? "bg-nebco-red" : "bg-[#111111]";

  return (
    <Link
      href={card.href}
      className="group block h-full"
      style={{ perspective: "1400px" }}
    >
      <div className="relative h-full min-h-[300px] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] lg:min-h-[320px]">
        <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
          <CardFront card={card} />
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7 ${backTone}`}
        >
          <p className="type-label font-semibold uppercase tracking-[0.16em] text-white/65">{card.status}</p>
          <h3 className="type-h4 mt-2 text-white">{card.title}</h3>
          <p className="mt-1.5 text-[13px] text-white/75">{card.location}</p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <MetaBlock label="Service" value={card.service} />
            <MetaBlock label="Status" value={card.status} />
          </div>
          <span className="mt-7 inline-flex items-center gap-2 font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            View Project
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSelectedWorkSection() {
  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          03 / Selected Work
        </p>

        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {WORK.map((card) => (
            <FlipCard key={`${card.title}-${card.layout}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
