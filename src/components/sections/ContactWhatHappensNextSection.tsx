const GOLD = "#a8864d";
const RED = "#bc2026";
const LINE = "#2a2a2a";

const STEPS = [
  {
    num: "01",
    title: "Acknowledgement",
    subtitle: "We receive your enquiry and send a confirmation.",
  },
  {
    num: "02",
    title: "Initial Review",
    subtitle: "Our team reviews the information and understands your needs.",
  },
  {
    num: "03",
    title: "Information Request",
    subtitle: "We may reach out for additional documents or details.",
  },
  {
    num: "04",
    title: "Recommended Next Step",
    subtitle: "We share the right solution path and proposed way forward.",
  },
] as const;

/**
 * Contact — 04 / What Happens Next
 * Horizontal process timeline matching the design mock.
 */
export function ContactWhatHappensNextSection() {
  return (
    <section
      className="border-y bg-[#f3f1ec]"
      style={{ borderColor: `${LINE}18` }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[4.5rem] xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          04 / What Happens Next
        </p>

        {/* Desktop / tablet timeline */}
        <div className="relative mt-12 hidden sm:mt-14 sm:block lg:mt-16">
          {/* Red connecting line through node centers */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[2.15rem] h-px"
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />

          <ol className="grid grid-cols-4 gap-4 lg:gap-6">
            {STEPS.map((step) => (
              <li key={step.num} className="relative flex flex-col items-center text-center">
                <span className="font-heading text-[15px] font-bold leading-none tracking-wide text-nebco-red sm:text-[16px] lg:text-[17px]">
                  {step.num}
                </span>

                <span
                  className="relative z-[1] mt-3 flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#f3f1ec] sm:mt-3.5 sm:h-[15px] sm:w-[15px]"
                  style={{ boxShadow: `inset 0 0 0 2px ${GOLD}` }}
                  aria-hidden="true"
                />

                <h3 className="type-h3 mt-5 max-w-[14rem] tracking-[-0.01em] text-arch-black sm:mt-6">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-[12.5px] leading-[1.5] text-arch-black/55 sm:text-[13px] lg:max-w-[16rem]">
                  {step.subtitle}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile stacked timeline */}
        <ol className="relative mt-10 space-y-0 sm:hidden">
          <div
            className="absolute bottom-3 left-[6px] top-3 w-px"
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />
          {STEPS.map((step) => (
            <li key={step.num} className="relative flex gap-4 pb-8 last:pb-0">
              <span
                className="relative z-[1] mt-1.5 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-[#f3f1ec]"
                style={{ boxShadow: `inset 0 0 0 2px ${GOLD}` }}
                aria-hidden="true"
              />
              <div>
                <span className="font-heading text-[14px] font-bold text-nebco-red">{step.num}</span>
                <h3 className="type-h3 mt-1 text-arch-black">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-arch-black/55">{step.subtitle}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
