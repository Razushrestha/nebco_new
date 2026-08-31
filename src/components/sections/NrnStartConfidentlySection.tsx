"use client";

import Image from "next/image";
import Link from "next/link";
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

function TrustIcon({
  type,
  compact = false,
}: {
  type: (typeof TRUST)[number]["icon"];
  compact?: boolean;
}) {
  const size = compact ? 28 : 40;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none" as const,
    "aria-hidden": true as const,
    className: "shrink-0",
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

function WireframeBackdrop() {
  return (
    <div className="nrn-start-confidently__wireframe" aria-hidden="true">
      <Image
        src={IMAGES.nrnStartConfidentlyWireframe}
        alt=""
        fill
        quality={100}
        unoptimized
        className="nrn-start-confidently__wireframe-img"
        sizes="50vw"
      />
    </div>
  );
}

function StartConfidentlyPanel({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="nrn-start-confidently__panel relative text-white" style={{ backgroundColor: PANEL }}>
      <WireframeBackdrop />

      <div className="nrn-start-confidently__content relative z-10">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          07 / Start Confidently
        </p>

        <h2
          className={`nrn-start-confidently__heading font-heading font-bold tracking-[-0.02em] text-white ${
            compact ? "" : "type-h2 mt-4 sm:mt-5"
          }`}
        >
          Your property is in Nepal.
          <span className="block">Your visibility should</span>
          <span className="block">travel with you.</span>
        </h2>

        <Link
          href="/contact?type=nrn"
          className={`nrn-start-confidently__cta inline-flex w-fit items-center justify-center gap-2 bg-nebco-red font-heading font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-nebco-red-hover ${
            compact ? "" : "mt-7 px-5 py-3.5 text-[10.5px] sm:mt-8 sm:px-6 sm:text-[11px]"
          }`}
        >
          Book an Online Consultation
          <span aria-hidden="true" className="text-[13px] leading-none">
            →
          </span>
        </Link>

        <div className="nrn-start-confidently__trust">
          {TRUST.map((item) => (
            <div key={item.title} className="nrn-start-confidently__trust-item">
              <TrustIcon type={item.icon} compact={compact} />
              <div className="nrn-start-confidently__trust-copy">
                <p className="nrn-start-confidently__trust-title font-heading font-bold text-white">
                  {item.title}
                </p>
                <p className="nrn-start-confidently__trust-desc text-white/55">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 07 / Start Confidently - closing split CTA for the NRN page.
 */
export function NrnStartConfidentlySection({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="nrn-start-confidently">
        <div className="nrn-start-confidently__image">
          <Image
            src={IMAGES.selectedWorkCommercial}
            alt="Commercial mixed-use building development in Lazimpat, Kathmandu"
            fill
            className="object-cover object-[52%_42%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
          <span className="nrn-start-confidently__mark" aria-hidden="true">
            N
          </span>
        </div>

        <StartConfidentlyPanel compact />
      </section>
    );
  }

  return (
    <section className="nrn-start-confidently nrn-start-confidently--full lg:min-h-[min(72svh,560px)] lg:grid-cols-2">
      <div className="nrn-start-confidently__image lg:min-h-0">
        <Image
          src={IMAGES.selectedWorkCommercial}
          alt="Commercial mixed-use building development in Lazimpat, Kathmandu"
          fill
          className="object-cover object-[52%_42%]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
        <span className="nrn-start-confidently__mark" aria-hidden="true">
          N
        </span>
      </div>

      <StartConfidentlyPanel />
    </section>
  );
}
