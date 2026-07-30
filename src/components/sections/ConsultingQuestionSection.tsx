import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function ConsultingQuestionSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f2ed]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center lg:grid-cols-[minmax(0,34%)_minmax(0,66%)]">
        {/* Left — copy */}
        <div className="min-w-0 px-7 py-10 sm:px-10 sm:py-11 lg:py-12 lg:pl-12 lg:pr-6 xl:pl-16 xl:pr-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-nebco-red sm:text-[11px]">
            01 / THE QUESTION BEFORE THE DRAWING
          </p>

          <h2 className="mt-4 max-w-[22rem] font-heading text-[1.55rem] font-bold leading-[1.18] tracking-[-0.025em] text-arch-black sm:mt-[1.15rem] sm:text-[1.75rem] lg:text-[1.95rem] xl:max-w-[24rem] xl:text-[2.15rem] xl:leading-[1.15]">
            <span className="sm:block">A project can be</span>{" "}
            <span className="sm:block">technically buildable</span>{" "}
            <span className="sm:block">and still be</span>{" "}
            <span className="sm:block">commercially weak.</span>
          </h2>

          <p className="mt-4 max-w-[24rem] text-[13.5px] leading-[1.65] text-[#555555] sm:mt-[1.1rem] sm:text-[14.5px] lg:text-[15px] lg:leading-[1.68]">
            We help you answer the right questions early—about market, finance, use and
            execution—so every decision strengthens the outcome and protects your investment.
          </p>
        </div>

        {/* Right — image fills full column width (no side padding / letterboxing) */}
        <div className="relative w-full min-w-0 overflow-hidden">
          <div className="relative aspect-[3.38/1] w-full">
            <Image
              src={IMAGES.consultingQuestionVisual}
              alt="Site context transitioning into a development concept wireframe"
              fill
              className="object-cover object-[center_center] scale-[1.06]"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
              quality={100}
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[10%] bg-gradient-to-r from-[#f5f2ed] via-[#f5f2ed]/70 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <span
        className="pointer-events-none absolute bottom-0 left-7 h-[2px] w-10 bg-nebco-red sm:left-10 lg:left-12 xl:left-16"
        aria-hidden="true"
      />
    </section>
  );
}
