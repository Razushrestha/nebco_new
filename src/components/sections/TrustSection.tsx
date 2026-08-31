import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IMAGES } from "@/lib/images";

type TrustSectionProps = {
  compact?: boolean;
};

export function TrustSection({ compact = false }: TrustSectionProps) {
  const content = (
    <div className={`trust-section ${compact ? "trust-section--compact" : ""}`}>
      <div className="trust-section__copy">
        <SectionEyebrow
          number="05"
          title="TRUST + INTEGRATED EXPERTISE"
          className="trust-section__eyebrow"
        />
        <h2 className="trust-section__heading">
          The project does not need more disconnected consultants. It needs the right specialists working in{" "}
          <span className="trust-section__heading-accent">one direction.</span>
        </h2>
      </div>

      <div className="trust-section__diagram">
        <Image
          src={IMAGES.trustHubDiagram}
          alt="NEBCO integrated expertise hub - Construction, Marketing, Real Estate, Engineering, Finance, Legal, and Banking"
          width={3872}
          height={1056}
          quality={100}
          unoptimized
          className="trust-section__diagram-img"
          sizes="(max-width: 1024px) 90vw, 58vw"
          priority
        />
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="flex h-full min-h-0 w-full items-center bg-black py-6 lg:py-4">
        <div className="container-nebco w-full">{content}</div>
      </div>
    );
  }

  return (
    <section className="bg-black py-12 lg:py-16">
      <div className="container-nebco">{content}</div>
    </section>
  );
}
