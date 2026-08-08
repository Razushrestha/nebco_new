import Image from "next/image";
import Link from "next/link";
import { ClosingBlueprintOverlay } from "@/components/ui/ClosingBlueprintOverlay";
import { StartProjectPhotoOverlay } from "@/components/ui/StartProjectPhotoOverlay";
import { IMAGES } from "@/lib/images";

type StartProjectSectionProps = {
  compact?: boolean;
};

export function StartProjectSection({ compact = false }: StartProjectSectionProps) {
  const grid = (
    <div className={`start-project-grid ${compact ? "start-project-grid--compact" : ""}`}>
      <div className="start-project-photo">
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
      </div>

      <div className="start-project-cta">
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
