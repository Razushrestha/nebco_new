"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * 01 / The Distance Problem - three equal columns: copy | remote | on-site.
 */
export function NrnDistanceProblemSection() {
  return (
    <div className="distance-problem shrink-0">
      <div className="distance-problem__grid">
        <div className="distance-problem__copy">
          <div className="distance-problem__copy-inner">
            <p className="distance-problem__eyebrow">01 / The Distance Problem</p>

            <h2 className="distance-problem__heading">
              <span className="block text-arch-black">Distance makes</span>
              <span className="block text-arch-black">coordination hard.</span>
              <span className="mt-0.5 block text-nebco-red">It should not make the</span>
              <span className="block text-nebco-red">project unmanageable.</span>
            </h2>
          </div>

          <span className="distance-problem__mark" aria-hidden="true">
            N
          </span>
        </div>

        <div className="distance-problem__photo distance-problem__photo--remote">
          <Image
            src={IMAGES.distanceProblemRemote}
            alt="NRN client joining a project video call from abroad"
            fill
            className="object-cover object-[58%_44%]"
            sizes="(max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>

        <div className="distance-problem__photo distance-problem__photo--onsite">
          <Image
            src={IMAGES.distanceProblemOnsite}
            alt="On-site construction team reviewing project drawings in Nepal"
            fill
            className="object-cover object-[54%_40%]"
            sizes="(max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Red connector - centered on gutter between photos */}
        <div className="distance-problem__connector" aria-hidden="true">
          <span className="distance-problem__connector-line" />
          <span className="distance-problem__connector-node" />
        </div>
      </div>
    </div>
  );
}
