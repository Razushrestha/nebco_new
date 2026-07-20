import Image from "next/image";
import Link from "next/link";
import { ClosingBlueprintOverlay } from "@/components/ui/ClosingBlueprintOverlay";
import { StartProjectPhotoOverlay } from "@/components/ui/StartProjectPhotoOverlay";
import { IMAGES } from "@/lib/images";

function NebcoMark() {
  return (
    <div
      className="w-8 h-8 rounded-full bg-black/80 border border-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm"
      aria-hidden="true"
    >
      <span className="font-serif font-bold text-white text-sm leading-none">N</span>
    </div>
  );
}

type StartProjectSectionProps = {
  compact?: boolean;
};

export function StartProjectSection({ compact = false }: StartProjectSectionProps) {
  const headingSize = compact
    ? "text-[1.4rem] sm:text-[1.55rem] lg:text-[1.6rem] xl:text-[1.75rem]"
    : "text-[1.5rem] sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.9rem]";

  const grid = (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-0">
      <div className="relative min-h-[200px] lg:min-h-0 overflow-hidden h-full">
        <Image
          src={IMAGES.nightBuilding}
          alt="Modern building at dusk"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />

        <StartProjectPhotoOverlay />

        <p
          className={`absolute top-5 left-6 sm:left-8 z-20 font-mono uppercase tracking-[0.18em] text-white leading-none m-0 ${
            compact ? "text-[11px]" : "text-[11px]"
          }`}
        >
          07 / START A PROJECT
        </p>

        <div className={`absolute bottom-5 left-6 sm:left-8 z-20 ${compact ? "hidden lg:block" : ""}`}>
          <NebcoMark />
        </div>
      </div>

      <div className="relative bg-[#1a1a1a] flex items-center min-h-[200px] lg:min-h-0 h-full border-t lg:border-t-0 lg:border-l border-black/20">
        <ClosingBlueprintOverlay />
        <div
          className={`relative z-10 w-full ${
            compact ? "px-8 sm:px-10 lg:px-10 xl:px-12 py-8 lg:py-0" : "px-8 sm:px-10 lg:px-12 xl:px-14 py-10 lg:py-0"
          }`}
        >
          <h2
            className={`font-heading font-bold ${headingSize} leading-[1.16] text-white tracking-[-0.02em] max-w-[22rem] m-0`}
          >
            What does your property need to{" "}
            <span className="text-nebco-red">become?</span>
          </h2>
          <Link
            href="/contact?type=project"
            className={`inline-flex items-center gap-2 bg-nebco-red text-white font-semibold uppercase tracking-[0.14em] hover:bg-nebco-red-hover transition-colors font-heading ${
              compact ? "mt-6 px-6 py-3 text-[10px]" : "mt-7 px-6 py-3.5 text-[10px]"
            }`}
          >
            Begin a Project Discussion
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="w-full h-full min-h-0 overflow-hidden">{grid}</div>;
  }

  return <section className="w-full">{grid}</section>;
}
