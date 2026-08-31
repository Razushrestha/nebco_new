import Image from "next/image";

/** Floor-plan blueprint image for the proposal panel (section 06) - hairline gold draft lines */
export function ProposalBlueprintOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-y-[12%] left-4 w-[48%] max-w-[13.5rem] opacity-[0.55] sm:left-5 sm:max-w-[15rem] lg:left-6 lg:inset-y-[10%] lg:w-[50%] lg:max-w-[16.5rem] xl:left-7"
      aria-hidden="true"
    >
      <Image
        src="/proposal-blueprint.png"
        alt=""
        fill
        unoptimized
        className="object-contain object-left"
        sizes="(max-width: 768px) 45vw, 260px"
      />
    </div>
  );
}
