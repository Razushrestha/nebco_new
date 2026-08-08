import Image from "next/image";
import { IMAGES } from "@/lib/images";

const DIAGRAM_W = 1937;
const DIAGRAM_H = 465;

export function ConsultingDisciplinesSection() {
  return (
    <section className="consulting-disciplines overflow-hidden bg-[#f5f2ed]">
      <div className="consulting-disciplines__inner mx-auto w-full max-w-[1440px]">
        <p className="consulting-disciplines__eyebrow">06 / DISCIPLINES COORDINATED</p>

        <div className="consulting-disciplines__diagram-wrap">
            <Image
              src={IMAGES.consultingDisciplinesDiagram}
              alt="NEBCO disciplines coordinated: Architecture, Engineering, Construction, Finance, Legal, Banking, Realtor, and Marketing connected around the NEBCO hub."
              width={DIAGRAM_W}
              height={DIAGRAM_H}
              className="consulting-disciplines__diagram-img"
              sizes="(max-width: 1440px) 100vw, 1440px"
              priority
              unoptimized
            />
        </div>
      </div>
    </section>
  );
}
