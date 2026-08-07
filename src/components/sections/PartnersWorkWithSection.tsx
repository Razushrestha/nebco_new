import Link from "next/link";

/**
 * Partners — 06 / Work With NEBCO
 * Headline + two flush CTA cards + become-a-partner button.
 */

const GOLD = "#a8864d";

function PersonIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="12" r="6" stroke="white" strokeWidth="1.35" />
      <path
        d="M8 30c1.5-7 6-10 10-10s8.5 3 10 10"
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BuildingsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="4" y="14" width="9" height="16" stroke={GOLD} strokeWidth="1.3" />
      <rect x="14" y="6" width="11" height="24" stroke={GOLD} strokeWidth="1.3" />
      <rect x="26" y="16" width="6" height="14" stroke={GOLD} strokeWidth="1.3" />
      <path d="M4 30h28" stroke={GOLD} strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6.5 18h4M6.5 22h4M6.5 26h4" stroke={GOLD} strokeWidth="1.05" />
      <path d="M17 11h5M17 15h5M17 19h5M17 23h5" stroke={GOLD} strokeWidth="1.05" />
    </svg>
  );
}

type Props = { compact?: boolean; inPair?: boolean };

export function PartnersWorkWithSection({ compact = false, inPair = false }: Props) {
  const body = (
    <>
      {!inPair && (
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          06 / Work With NEBCO
        </p>
      )}

      <h2
        className={`max-w-[22rem] font-heading font-bold leading-[1.18] tracking-[-0.02em] text-arch-black ${
          inPair
            ? "partners-closing-pair__headline text-[1.2rem] sm:text-[1.35rem] lg:text-[1.45rem]"
            : compact
              ? "mt-3 text-[1.2rem] sm:text-[1.35rem] lg:text-[1.45rem]"
              : "mt-3 text-[1.35rem] sm:mt-4 sm:text-[1.5rem] lg:text-[1.65rem]"
        }`}
      >
        Bring the right capability to the right project.
      </h2>

      <div
        className={`partners-closing-pair__action ${
          inPair || compact ? "mt-4" : "mt-6 sm:mt-7"
        }`}
      >
        <div
          className={`partners-closing-pair__cards grid ${
            inPair ? "grid-cols-1 gap-0 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          <div
            className={`flex flex-col justify-between bg-nebco-red px-5 text-white sm:px-6 ${
              inPair
                ? "min-h-[9.25rem] py-4 sm:min-h-[10rem] sm:py-5"
                : compact
                  ? "min-h-[9.25rem] py-4 sm:min-h-[10rem] sm:py-5"
                  : "min-h-[11.5rem] py-6 sm:min-h-[12.5rem] sm:py-7"
            }`}
          >
            <PersonIcon />
            <div className={inPair || compact ? "mt-4" : "mt-6"}>
              <h3 className="type-h3 uppercase tracking-[0.07em]">For Professionals</h3>
              <p className="mt-1.5 text-[12px] leading-[1.45] text-white/85 sm:text-[13px]">
                Architects, engineers, advisors and experts.
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col justify-between border border-[#ddd7ce] bg-[#ebe7e0] px-5 sm:px-6 ${
              inPair
                ? "min-h-[9.25rem] py-4 sm:min-h-[10rem] sm:py-5"
                : compact
                  ? "min-h-[9.25rem] py-4 sm:min-h-[10rem] sm:py-5"
                  : "min-h-[11.5rem] py-6 sm:min-h-[12.5rem] sm:py-7"
            }`}
          >
            <BuildingsIcon />
            <div className={inPair || compact ? "mt-4" : "mt-6"}>
              <h3 className="type-h3 uppercase tracking-[0.07em] text-arch-black">
                For Specialist Organisations
              </h3>
              <p className="mt-1.5 text-[12px] leading-[1.45] text-arch-black/70 sm:text-[13px]">
                Contractors, suppliers and service providers.
              </p>
            </div>
          </div>
        </div>

        <div className="partners-closing-pair__cta flex w-full flex-col items-stretch">
          <Link
            href="/contact?type=partnership"
            className="inline-flex w-full items-center justify-center rounded-sm bg-nebco-red px-7 py-3.5 font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-nebco-red-hover sm:px-8 sm:text-[12px]"
          >
            Become a Partner
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
          <p className="mt-2.5 text-center text-[10.5px] text-black/45 sm:text-[11px]">
            Registration does not guarantee appointment.
          </p>
        </div>
      </div>
    </>
  );

  if (inPair) {
    return (
      <div className="partners-closing-pair__col partners-closing-pair__col--work flex h-full min-w-0 flex-col">
        <p className="partners-closing-pair__eyebrow type-label shrink-0 font-semibold uppercase tracking-[0.16em] text-nebco-red">
          06 / Work With NEBCO
        </p>
        <div className="partners-closing-pair__content mt-3 flex min-h-0 flex-1 flex-col justify-center sm:mt-4">
          {body}
        </div>
      </div>
    );
  }

  if (compact) {
    return <div>{body}</div>;
  }

  return (
    <section className="bg-[#f5f2ed]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        {body}
      </div>
    </section>
  );
}
