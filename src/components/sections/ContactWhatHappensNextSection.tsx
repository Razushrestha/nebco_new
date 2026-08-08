const GOLD = "#c5a059";
const RED = "#bc2026";
const CREAM = "#f5f2ed";

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
export function ContactWhatHappensNextSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`contact-what-next bg-[#f5f2ed] ${
        compact ? "contact-what-next--compact min-h-0 flex-1" : ""
      }`}
    >
      <div
        className={`mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 sm:px-8 lg:px-10 xl:px-12 ${
          compact ? "py-7 sm:py-8 lg:py-9" : "py-14 sm:py-16 lg:py-[4.75rem]"
        }`}
      >
        <p className="type-label shrink-0 font-semibold uppercase tracking-[0.16em] text-nebco-red">
          04 / What Happens Next
        </p>

        {/*
          Desktop timeline — equal quarters (no column gap) so the rail
          left/right 12.5% lands exactly on the first & last circle centers.
        */}
        <div
          className={`hidden sm:block ${compact ? "mt-8 lg:mt-9" : "mt-14 sm:mt-16 lg:mt-[4.5rem]"}`}
          role="list"
        >
          <div className="grid grid-cols-4" role="presentation">
            {STEPS.map((step) => (
              <div key={`num-${step.num}`} className="flex justify-center text-center" role="listitem">
                <span className="font-heading text-[15px] font-bold leading-none tracking-[0.04em] text-nebco-red sm:text-[16px]">
                  {step.num}
                </span>
              </div>
            ))}
          </div>

          <div className={`relative h-4 ${compact ? "mt-3.5" : "mt-4 sm:mt-5"}`} aria-hidden="true">
            {/* Rail: first circle center → last circle center */}
            <div
              className="absolute top-1/2 left-[12.5%] right-[12.5%] z-0 h-[2px] -translate-y-1/2"
              style={{ backgroundColor: RED }}
            />
            <div className="relative z-[1] grid h-full grid-cols-4">
              {STEPS.map((step) => (
                <div key={`node-${step.num}`} className="flex items-center justify-center">
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full sm:h-4 sm:w-4"
                    style={{ backgroundColor: CREAM, boxShadow: `inset 0 0 0 2.5px ${GOLD}` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-4 ${compact ? "mt-4" : "mt-5 sm:mt-6"}`}>
            {STEPS.map((step) => (
              <div
                key={`copy-${step.num}`}
                className="flex flex-col items-center px-2 text-center sm:px-3 lg:px-4"
                role="listitem"
              >
                <h3 className="type-h4 max-w-[15rem] tracking-[-0.02em] text-arch-black">
                  {step.title}
                </h3>
                <p
                  className={`max-w-[16rem] leading-[1.55] text-arch-black/55 lg:max-w-[17rem] ${
                    compact ? "mt-1.5 text-[12.5px] sm:text-[13px]" : "mt-2.5 text-[13px] sm:mt-3 sm:text-[13.5px]"
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked timeline */}
        <ol className={`relative space-y-0 sm:hidden ${compact ? "mt-7" : "mt-10"}`}>
          <div
            className="absolute bottom-4 left-[6px] top-2 w-[2px]"
            style={{ backgroundColor: RED }}
            aria-hidden="true"
          />
          {STEPS.map((step) => (
            <li key={step.num} className={`relative flex gap-4 last:pb-0 ${compact ? "pb-7" : "pb-9"}`}>
              <span
                className="relative z-[1] mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: CREAM, boxShadow: `inset 0 0 0 2.5px ${GOLD}` }}
                aria-hidden="true"
              />
              <div>
                <span className="font-heading text-[14px] font-bold tracking-[0.04em] text-nebco-red">
                  {step.num}
                </span>
                <h3 className="type-h4 mt-1.5 text-arch-black">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-arch-black/55">{step.subtitle}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
