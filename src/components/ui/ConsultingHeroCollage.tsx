import Image from "next/image";
import { IMAGES } from "@/lib/images";

/** Right panel — design composite (building, data overlays, meeting scene). */
export function ConsultingHeroCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a1a1a]">
      <Image
        src={IMAGES.consultingHero}
        alt="Development consulting visualization with building, financial summary, and team reviewing plans"
        fill
        className="object-cover object-[46%_44%] lg:object-[48%_46%]"
        priority
        sizes="(max-width: 1024px) 100vw, 58vw"
      />

      {/* Blend into dark left content panel */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[16%] bg-gradient-to-r from-[#111111] via-[#111111]/75 to-transparent sm:w-[12%] lg:w-[8%]"
        aria-hidden="true"
      />
    </div>
  );
}
