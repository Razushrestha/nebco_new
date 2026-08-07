import Image from "next/image";
import { IMAGES } from "@/lib/images";

type ClosingBlueprintOverlayProps = {
  variant?: "svg" | "sketch";
};

/** Faint architectural wireframe for closing CTA panel */
export function ClosingBlueprintOverlay({ variant = "svg" }: ClosingBlueprintOverlayProps) {
  if (variant === "sketch") {
    return (
      <div className="start-project-blueprint-art" aria-hidden="true">
        <Image
          src={IMAGES.startProjectBlueprint}
          alt=""
          fill
          quality={100}
          unoptimized
          className="start-project-blueprint-art__img"
          sizes="40vw"
        />
      </div>
    );
  }

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.12] pointer-events-none"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="0.8" fill="none">
        <rect x="280" y="40" width="90" height="200" />
        <line x1="280" y1="70" x2="370" y2="70" />
        <line x1="280" y1="100" x2="370" y2="100" />
        <line x1="280" y1="130" x2="370" y2="130" />
        <line x1="280" y1="160" x2="370" y2="160" />
        <line x1="280" y1="190" x2="370" y2="190" />
        <line x1="325" y1="40" x2="325" y2="240" />
        <rect x="250" y="90" width="40" height="150" opacity="0.7" />
        <line x1="250" y1="120" x2="290" y2="120" opacity="0.7" />
        <line x1="250" y1="150" x2="290" y2="150" opacity="0.7" />
        <line x1="270" y1="90" x2="270" y2="240" opacity="0.7" />
        <line x1="200" y1="250" x2="380" y2="250" strokeWidth="0.5" opacity="0.5" />
        <line x1="300" y1="20" x2="360" y2="60" opacity="0.4" />
        <line x1="300" y1="60" x2="360" y2="20" opacity="0.4" />
      </g>
    </svg>
  );
}
