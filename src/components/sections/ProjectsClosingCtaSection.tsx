import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

/**
 * Projects closing CTA — cream band with Himalayan town sketch on the left,
 * copy + discuss button on the right.
 */
export function ProjectsClosingCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#e4ddd3] border-b border-[#c5a059] bg-[#f5f2ed]">
      {/* Landscape sketch — left side */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(58%,640px)]"
        aria-hidden="true"
      >
        <Image
          src={IMAGES.projectsCtaLandscape}
          alt=""
          fill
          className="object-cover object-left opacity-[0.55] sm:opacity-[0.62]"
          sizes="(max-width: 1024px) 70vw, 640px"
          priority={false}
        />
      </div>

      {/* Fade sketch into cream so copy stays readable */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,242,237,0.15) 0%, rgba(245,242,237,0.45) 28%, #f5f2ed 52%)",
        }}
      />

      <div className="relative z-[1] mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10 lg:py-9 xl:gap-20 xl:px-12">
        <div className="min-w-0 max-w-[34rem] lg:ml-[min(24%,13rem)] xl:ml-[min(22%,12rem)]">
          <h2 className="type-h3 tracking-[-0.02em] text-arch-black">
            Have a project at a different stage?
          </h2>
          <p className="mt-2.5 text-[13.5px] leading-[1.55] text-[#3a3a3a] sm:mt-3 sm:text-[14.5px] lg:text-[15px]">
            Tell us what is already in place and where support is required.
          </p>
        </div>

        <Link
          href="/contact?type=project"
          className="inline-flex shrink-0 items-center justify-center gap-2.5 self-start bg-nebco-red px-7 py-[0.95rem] font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover sm:px-8 sm:text-[11px] lg:self-center"
        >
          Discuss Your Project
          <span aria-hidden="true" className="translate-y-px text-[13px] leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
