import Image from "next/image";

type FoundationMilestoneArtProps = {
  src: string;
  alt: string;
  muted?: boolean;
};

export function FoundationMilestoneArt({ src, alt, muted = false }: FoundationMilestoneArtProps) {
  return (
    <div className={`foundation-milestone-art ${muted ? "foundation-milestone-art--muted" : ""}`}>
      <Image
        src={src}
        alt={alt}
        width={512}
        height={512}
        quality={100}
        unoptimized
        className="foundation-milestone-art__img"
        sizes="(max-width: 768px) 30vw, 180px"
      />
    </div>
  );
}
