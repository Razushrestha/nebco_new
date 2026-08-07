import Image from "next/image";

type FoundationMilestoneArtProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  variant?: "roots" | "established" | "today";
};

export function FoundationMilestoneArt({
  src,
  alt,
  width,
  height,
  variant = "roots",
}: FoundationMilestoneArtProps) {
  return (
    <div className={`foundation-milestone-art foundation-milestone-art--${variant}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={100}
        unoptimized
        className="foundation-milestone-art__img"
        sizes="(max-width: 768px) 30vw, 260px"
      />
    </div>
  );
}
