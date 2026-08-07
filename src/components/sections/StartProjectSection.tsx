import Image from "next/image";
import Link from "next/link";
import { ClosingBlueprintOverlay } from "@/components/ui/ClosingBlueprintOverlay";
import { StartProjectPhotoOverlay } from "@/components/ui/StartProjectPhotoOverlay";
import { IMAGES } from "@/lib/images";

function NebcoMark() {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/80 backdrop-blur-sm"
      aria-hidden="true"
    >
      <span className="font-serif text-sm font-bold leading-none text-white">N</span>
    </div>
  );
}

type StartProjectSectionProps = {
  compact?: boolean;
};

export function StartProjectSection({ compact = false }: StartProjectSectionProps) {
  const grid = (
    <div
      className={`start-project-grid grid h-full min-h-0 grid-cols-1 border-t-2 border-nebco-red lg:grid-cols-2 ${
        compact ? "start-project-grid--compact" : ""
      }`}
    >
      <div className="relative h-full min-h-[200px] overflow-hidden lg:min-h-0">
        <Image
          src={IMAGES.startProjectHero}
          alt="Modern building at dusk"
          fill
          quality={100}
          unoptimized
          className="object-cover object-center"
          sizes="50vw"
          priority
        />

        <StartProjectPhotoOverlay />

        <p className="start-project-photo-eyebrow">07 / START A PROJECT</p>

        <div className={`absolute bottom-5 left-[var(--nebco-gutter)] z-20 ${compact ? "hidden lg:block" : ""}`}>
          <NebcoMark />
        </div>
      </div>

      <div className={`start-project-cta ${compact ? "start-project-cta--compact" : ""}`}>
        <ClosingBlueprintOverlay variant="sketch" />

        <div className="start-project-cta__content">
          <h2 className="start-project-cta__heading">
            What does your property
            <br />
            need to <span className="start-project-cta__heading-accent">become?</span>
          </h2>

          <Link href="/contact?type=project" className="start-project-cta__button">
            Begin a Project Discussion
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return <div className="h-full min-h-0 w-full overflow-hidden">{grid}</div>;
  }

  return <section className="w-full">{grid}</section>;
}
