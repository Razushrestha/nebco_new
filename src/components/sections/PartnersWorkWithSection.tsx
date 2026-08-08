import Link from "next/link";

/**
 * Partners — 06 / Work With NEBCO
 * Carefully matched to design: 2-line H3, flush centered cards, centered CTA.
 */

const GOLD = "#a8864d";

function PersonIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="11.5" r="5.75" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M7.5 30.5c1.6-7.2 6.2-10.5 10.5-10.5s8.9 3.3 10.5 10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BuildingsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="3.5" y="14" width="9" height="16.5" stroke="currentColor" strokeWidth="1.35" />
      <rect x="13.5" y="5.5" width="11" height="25" stroke="currentColor" strokeWidth="1.35" />
      <rect x="25.5" y="16" width="7" height="14.5" stroke="currentColor" strokeWidth="1.35" />
      <path d="M3 31.5h30" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M6 18.5h4M6 22.5h4M6 26.5h4" stroke="currentColor" strokeWidth="1.1" />
      <path d="M16.5 10.5h5M16.5 14.5h5M16.5 18.5h5M16.5 22.5h5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M27.5 20h3M27.5 24h3" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

type Props = { compact?: boolean; inPair?: boolean };

export function PartnersWorkWithSection({ compact = false, inPair = false }: Props) {
  const tight = inPair || compact;

  const body = (
    <div className="partners-work w-full">
      {!inPair && (
        <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
          06 / Work With NEBCO
        </p>
      )}

      <h3
        className={`partners-closing-pair__headline font-heading font-bold tracking-[-0.02em] text-arch-black ${
          tight
            ? "text-[1.35rem] leading-[1.2] sm:text-[1.5rem]"
            : "mt-3 text-[1.5rem] leading-[1.2] sm:mt-3.5 sm:text-[1.65rem] lg:text-[1.75rem]"
        }`}
      >
        <span className="block whitespace-nowrap">Bring the right capability</span>
        <span className="block whitespace-nowrap">to the right project.</span>
      </h3>

      {/* Cards + CTA share one column so button centers to the card block */}
      <div className={`partners-closing-pair__action w-full ${tight ? "mt-5 sm:mt-6" : "mt-7 sm:mt-8"}`}>
        <div className="partners-closing-pair__cards grid w-full grid-cols-1 gap-0 sm:grid-cols-2">
          {/* Professionals */}
          <article
            className={`flex flex-col items-center justify-center bg-nebco-red px-5 text-center text-white ${
              tight ? "min-h-[11.75rem] py-7 sm:min-h-[12.5rem] sm:py-8" : "min-h-[13.5rem] py-9 sm:min-h-[14.5rem]"
            }`}
          >
            <span className="text-white">
              <PersonIcon />
            </span>
            <h5 className="type-h5 mt-5 whitespace-nowrap uppercase leading-[1.2] tracking-[0.08em]">
              For Professionals
            </h5>
            <p className="mt-2.5 max-w-[11.5rem] text-[12.5px] leading-[1.45] text-white/90">
              Architects, engineers, advisors and experts.
            </p>
          </article>

          {/* Organisations */}
          <article
            className={`flex flex-col items-center justify-center border border-[#d9d3c9] bg-[#ebe7e0] px-5 text-center sm:border-l-0 ${
              tight ? "min-h-[11.75rem] py-7 sm:min-h-[12.5rem] sm:py-8" : "min-h-[13.5rem] py-9 sm:min-h-[14.5rem]"
            }`}
          >
            <span style={{ color: GOLD }}>
              <BuildingsIcon />
            </span>
            <h5 className="type-h5 mt-5 uppercase leading-[1.2] tracking-[0.08em] text-arch-black">
              <span className="block">For Specialist</span>
              <span className="block">Organisations</span>
            </h5>
            <p className="mt-2.5 max-w-[12.5rem] text-[12.5px] leading-[1.45] text-[#4a4a4a]">
              Contractors, suppliers and service providers.
            </p>
          </article>
        </div>

        <div
          className={`partners-closing-pair__cta flex w-full flex-col items-center ${
            tight ? "mt-6 sm:mt-7" : "mt-8"
          }`}
        >
          <Link
            href="/contact?type=partnership"
            className="inline-flex min-w-[14.5rem] items-center justify-center bg-nebco-red px-9 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-nebco-red-hover sm:min-w-[16rem] sm:px-11 sm:text-[12px]"
          >
            Become a Partner
            <span className="ml-2.5 translate-y-px" aria-hidden="true">
              →
            </span>
          </Link>
          <p className="mt-3 text-center text-[11px] leading-none text-[#8a8a8a]">
            Registration does not guarantee appointment.
          </p>
        </div>
      </div>
    </div>
  );

  if (inPair) {
    return (
      <div className="partners-closing-pair__col partners-closing-pair__col--work flex h-full min-w-0 flex-col">
        <p className="partners-closing-pair__eyebrow font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-nebco-red sm:text-[11px]">
          06 / Work With NEBCO
        </p>
        <div className="partners-closing-pair__content mt-3.5 flex min-h-0 flex-1 flex-col justify-center sm:mt-4">
          {body}
        </div>
      </div>
    );
  }

  if (compact) {
    return body;
  }

  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[4.25rem] xl:px-12">
        <div className="mx-auto w-full max-w-[28rem]">{body}</div>
      </div>
    </section>
  );
}
