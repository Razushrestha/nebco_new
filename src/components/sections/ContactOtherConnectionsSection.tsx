import Link from "next/link";

const RED = "#bc2026";
const DIVIDER = "rgba(188, 32, 38, 0.28)";

type Connection = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
};

const CONNECTIONS: readonly Connection[] = [
  {
    id: "careers",
    title: "Careers",
    subtitle: "Explore current opportunities at NEBCO.",
    cta: "View Careers",
    href: "/contact?type=career",
  },
  {
    id: "supplier",
    title: "Supplier & Contractor Registration",
    subtitle: "Partner with us on upcoming projects.",
    cta: "Register",
    href: "/contact?type=supplier",
  },
  {
    id: "partnership",
    title: "Professional Partnership",
    subtitle: "Collaborate on referrals, design or technical expertise.",
    cta: "Learn More",
    href: "/contact?type=partnership",
  },
  {
    id: "general",
    title: "General Company Enquiry",
    subtitle: "Questions about NEBCO, our services or other matters.",
    cta: "Contact Us",
    href: "#form",
  },
];

function IconCareers() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="5" y="4" width="14" height="20" rx="1" stroke={RED} strokeWidth="1.3" />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h5" stroke={RED} strokeWidth="1.15" strokeLinecap="round" />
      <circle cx="20" cy="19" r="5.2" fill="#f7f5f1" stroke={RED} strokeWidth="1.25" />
      <circle cx="20" cy="17.2" r="1.6" stroke={RED} strokeWidth="1.1" />
      <path d="M16.8 22.2c.7-1.6 1.9-2.3 3.2-2.3s2.5.7 3.2 2.3" stroke={RED} strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function IconSupplier() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M8 9.5l3-3h6l3 3v6l-3 3h-6l-3-3V9.5z"
        stroke={RED}
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M14 6.5V4M14 24v-2.5M6.5 14H4M24 14h-2.5"
        stroke={RED}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="2.4" stroke={RED} strokeWidth="1.2" />
      <path
        d="M10.2 10.2l1.4 1.4M16.4 16.4l1.4 1.4M16.4 10.2l-1.4 1.4M11.6 16.4l-1.4 1.4"
        stroke={RED}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPartnership() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="9" cy="9" r="3" stroke={RED} strokeWidth="1.2" />
      <circle cx="19" cy="9" r="3" stroke={RED} strokeWidth="1.2" />
      <circle cx="14" cy="14.5" r="3.3" stroke={RED} strokeWidth="1.25" />
      <path
        d="M4.5 22c.8-3.2 2.8-4.8 4.5-4.8S12 18.8 12.8 22"
        stroke={RED}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M15.2 22c.8-3.2 2.8-4.8 4.5-4.8s3.7 1.6 4.5 4.8"
        stroke={RED}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9.5 22c1-3.6 3.2-5.2 4.5-5.2S17 18.4 18 22"
        stroke={RED}
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconEnquiry() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="4" y="6" width="20" height="14" rx="1.5" stroke={RED} strokeWidth="1.3" />
      <path d="M8 11h12M8 14.5h9M8 18h6" stroke={RED} strokeWidth="1.15" strokeLinecap="round" />
      <path d="M11 20l-3 4v-4" stroke={RED} strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}

function ConnectionIcon({ id }: { id: string }) {
  switch (id) {
    case "careers":
      return <IconCareers />;
    case "supplier":
      return <IconSupplier />;
    case "partnership":
      return <IconPartnership />;
    case "general":
      return <IconEnquiry />;
    default:
      return null;
  }
}

/**
 * Contact — 05 / Other Connections
 * Four linked opportunity columns with red icons and tall vertical dividers.
 */
export function ContactOtherConnectionsSection() {
  return (
    <section className="border-t border-[#e5e1da] bg-[#f7f5f1]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
          05 / Other Connections
        </p>

        <div className="mt-9 grid grid-cols-1 gap-0 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {CONNECTIONS.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative flex items-start gap-3.5 px-0 py-6 sm:gap-4 sm:px-5 sm:py-3 lg:min-h-[11.5rem] lg:items-center lg:px-7 lg:py-8 xl:px-8"
            >
              {/* Tall vertical dividers — extend past content, soft red */}
              {index > 0 ? (
                <span
                  className="pointer-events-none absolute left-0 top-1/2 hidden h-[85%] w-px -translate-y-1/2 lg:block"
                  style={{ backgroundColor: DIVIDER }}
                  aria-hidden="true"
                />
              ) : null}
              {/* Mobile / tablet bottom rule between stacked items */}
              {index < CONNECTIONS.length - 1 ? (
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#e5e1da] lg:hidden"
                  aria-hidden="true"
                />
              ) : null}

              <ConnectionIcon id={item.id} />

              <div className="min-w-0 flex-1 pt-0.5">
                <h3 className="font-heading text-[15px] font-bold leading-snug tracking-[-0.01em] text-arch-black sm:text-[15.5px] lg:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-arch-black/55 sm:mt-2">{item.subtitle}</p>
                <span className="mt-3.5 inline-flex items-center gap-1.5 font-heading text-[10.5px] font-bold uppercase tracking-[0.12em] text-nebco-red transition-transform group-hover:translate-x-0.5 sm:mt-4 sm:text-[11px]">
                  {item.cta}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
