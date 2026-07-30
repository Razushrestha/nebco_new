"use client";

import Image from "next/image";
import Link from "next/link";
import { ConstructionHeroBlueprint } from "@/components/ui/ConstructionHeroBlueprint";
import { IMAGES } from "@/lib/images";

const GOLD = "#c5a059";
const PANEL = "#111111";

const TRUST = [
  {
    title: "Local Expertise",
    desc: "On-the-ground team in Kathmandu.",
    icon: "local" as const,
  },
  {
    title: "Digital Transparency",
    desc: "Documented updates and clear records.",
    icon: "digital" as const,
  },
  {
    title: "Your Control",
    desc: "You decide. We execute.",
    icon: "control" as const,
  },
] as const;

function TrustIcon({ type }: { type: (typeof TRUST)[number]["icon"] }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none" as const,
    "aria-hidden": true as const,
  };
  const s = {
    stroke: GOLD,
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "local":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="15.5" {...s} />
          <circle cx="20" cy="15" r="3.2" {...s} />
          <path d="M13.5 27c.9-3.4 3-5.1 6.5-5.1s5.6 1.7 6.5 5.1" {...s} />
          <path d="M26.5 12.5c2.2.4 3.8 2.2 3.8 4.5 0 3.2-3.8 6.5-3.8 6.5s-1.2-1.1-2.1-2.4" {...s} />
          <circle cx="30.3" cy="17" r="1.3" fill={GOLD} stroke="none" />
        </svg>
      );
    case "digital":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="15.5" {...s} />
          <path d="M14 12.5h8.5L26.5 16.5V27H14V12.5Z" {...s} />
          <path d="M22.2 12.5V16.8H26" {...s} />
          <circle cx="24.5" cy="24" r="3.4" {...s} />
          <path d="M23.3 24.1l.9.9 1.7-1.8" {...s} />
        </svg>
      );
    case "control":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="15.5" {...s} />
          <path d="M13 22.5c0-4.2 3-7.2 7-7.2s7 3 7 7.2" {...s} />
          <path d="M15.5 22.5h9" {...s} />
          <path d="M17 18.5l3-4.5 3 4.5" {...s} />
          <path d="M20 14v8.5" {...s} />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * 07 / Start Confidently — closing split CTA for the NRN page.
 */
export function NrnStartConfidentlySection() {
  return (
    <section className="border-t border-nebco-red grid grid-cols-1 lg:grid-cols-2 lg:min-h-[min(72svh,560px)]">
      {/* Image — full bleed half */}
      <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-0">
        <Image
          src={IMAGES.nightBuilding}
          alt="Completed residential building in Nepal"
          fill
          className="object-cover object-[50%_40%]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
      </div>

      {/* Dark copy panel */}
      <div
        className="relative flex flex-col justify-center overflow-hidden px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14"
        style={{ backgroundColor: PANEL }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.2]">
          <ConstructionHeroBlueprint />
        </div>
        <div className="hero-grid-bg pointer-events-none absolute inset-0 opacity-[0.22]" />

        <div className="relative z-10 max-w-[32rem]">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
            07 / Start Confidently
          </p>

          <h2 className="mt-4 font-heading text-[1.55rem] font-bold leading-[1.16] tracking-[-0.02em] sm:mt-5 sm:text-[1.85rem] lg:text-[2.05rem] xl:text-[2.2rem]">
            Your property is in Nepal.
            <span className="block">Your visibility should</span>
            <span className="block">travel with you.</span>
          </h2>

          <Link
            href="/contact?type=nrn"
            className="mt-7 inline-flex items-center justify-center gap-2.5 bg-nebco-red px-5 py-3.5 font-heading text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-nebco-red-hover sm:mt-8 sm:px-6 sm:text-[11px]"
          >
            Book an Online Consultation
            <span aria-hidden="true" className="text-[14px] leading-none">
              →
            </span>
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            {TRUST.map((item) => (
              <div key={item.title} className="flex flex-col items-start sm:items-center sm:text-center">
                <TrustIcon type={item.icon} />
                <p className="mt-3 font-heading text-[12.5px] font-bold text-white sm:mt-3.5 sm:text-[13px]">
                  {item.title}
                </p>
                <p className="mt-1 text-[11.5px] leading-snug text-white/55 sm:text-[12px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
