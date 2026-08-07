import Image from "next/image";
import { IMAGES } from "@/lib/images";

/** Perspective wireframe PNG — bottom-right of NRN hero dark panel */
export function NrnHeroWireframe() {
  return (
    <div className="nrn-hero__wireframe pointer-events-none absolute" aria-hidden="true">
      <Image
        src={IMAGES.nrnHeroWireframe}
        alt=""
        fill
        className="nrn-hero__wireframe-img"
        sizes="(min-width: 1024px) 42vw, 100vw"
        priority
      />
    </div>
  );
}
