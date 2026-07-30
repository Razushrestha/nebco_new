import Link from "next/link";
import type { ReactNode } from "react";

const GOLD = "#c5a059";
const RED = "#bc2026";
const PANEL = "#111111";

/** Official NEBCO office — Google Maps place */
const NEBCO_MAPS_URL =
  "https://www.google.com/maps/place/NEBCO-+Best+Construction+Company+In+Nepal/@27.6869358,85.2991932,18z/data=!4m6!3m5!1s0x39eb1996b5fc27a7:0xf16f8d7e7c578dab!8m2!3d27.6869358!4d85.2991932!16s%2Fg%2F11kq0t2cj1";
const NEBCO_MAPS_EMBED =
  "https://www.google.com/maps?q=27.6869358,85.2991932&z=17&hl=en&output=embed";

type ContactRow = {
  id: string;
  title: string;
  lines: string[];
  href?: string;
};

const CONTACTS: readonly ContactRow[] = [
  {
    id: "company",
    title: "National Estate Builders Co. Pvt. Ltd.",
    lines: ["14 Kuleshwor Road, Kathmandu 44600, Nepal"],
    href: NEBCO_MAPS_URL,
  },
  {
    id: "phone",
    title: "Phone",
    lines: ["+977 1 411 7016 / 411 7017"],
    href: "tel:+97714117016",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    lines: ["+977 985 124 7016"],
    href: "https://wa.me/9779851247016",
  },
  {
    id: "email",
    title: "Email",
    lines: ["info@nebco.com.np"],
    href: "mailto:info@nebco.com.np",
  },
  {
    id: "hours",
    title: "Office Hours",
    lines: ["Sunday – Friday: 9:00 AM – 6:00 PM NST", "(Closed on public holidays)"],
  },
];

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border sm:h-12 sm:w-12"
      style={{ borderColor: `${GOLD}99` }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function IconBuilding() {
  return (
    <IconCircle>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="8" width="5" height="10" stroke={GOLD} strokeWidth="1.15" />
        <rect x="8.5" y="3" width="6" height="15" stroke={GOLD} strokeWidth="1.15" />
        <rect x="15" y="10" width="3.5" height="8" stroke={GOLD} strokeWidth="1.15" />
        <path d="M4.5 11h2M4.5 13.5h2M10.5 6h2.5M10.5 8.5h2.5M10.5 11h2.5M10.5 13.5h2.5" stroke={GOLD} strokeWidth="0.9" />
      </svg>
    </IconCircle>
  );
}

function IconPhone() {
  return (
    <IconCircle>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M4.2 2.8c.4-.4 1-.5 1.5-.3l2 1c.4.2.7.6.7 1.1v1.8c0 .3-.1.6-.4.8l-1.1.9c.7 1.5 1.9 2.7 3.4 3.4l.9-1.1c.2-.3.5-.4.8-.4h1.8c.5 0 .9.3 1.1.7l1 2c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.5.5C7.2 15.4 2.6 10.8 1.6 4.9c-.1-.5.1-1.1.5-1.5L4.2 2.8z"
          stroke={GOLD}
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
      </svg>
    </IconCircle>
  );
}

function IconWhatsApp() {
  return (
    <IconCircle>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2.2A6.8 6.8 0 0 0 3.4 12.3L2.5 15.5l3.3-.9A6.8 6.8 0 1 0 9 2.2z"
          stroke={GOLD}
          strokeWidth="1.15"
        />
        <path
          d="M6.4 7.2c.2-.4.4-.4.6-.4h.5c.2 0 .3 0 .4.3l.6 1.4c.1.2 0 .3-.1.5l-.3.4c-.1.1-.1.3 0 .4.4.6 1 1.2 1.6 1.6.1.1.3.1.4 0l.4-.3c.2-.1.3-.2.5-.1l1.4.6c.3.1.3.2.3.4v.5c0 .2 0 .4-.4.6-.3.2-.8.4-1.3.3-1.4-.1-3-1-4.2-2.2-1.2-1.2-2-2.8-2.2-4.2-.1-.5.1-1 .3-1.3z"
          stroke={GOLD}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </IconCircle>
  );
}

function IconEmail() {
  return (
    <IconCircle>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="1" stroke={GOLD} strokeWidth="1.15" />
        <path d="M3 5.2l6 4.8 6-4.8" stroke={GOLD} strokeWidth="1.15" strokeLinejoin="round" />
      </svg>
    </IconCircle>
  );
}

function IconClock() {
  return (
    <IconCircle>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6.5" stroke={GOLD} strokeWidth="1.15" />
        <path d="M9 5.5V9l2.8 1.8" stroke={GOLD} strokeWidth="1.15" strokeLinecap="round" />
      </svg>
    </IconCircle>
  );
}

function ContactIcon({ id }: { id: string }) {
  switch (id) {
    case "company":
      return <IconBuilding />;
    case "phone":
      return <IconPhone />;
    case "whatsapp":
      return <IconWhatsApp />;
    case "email":
      return <IconEmail />;
    case "hours":
      return <IconClock />;
    default:
      return null;
  }
}

/** Live Google Map of NEBCO Kuleshwor — gold frame, dark section fit */
function ContactMap() {
  return (
    <div
      className="relative h-full min-h-[320px] overflow-hidden rounded-sm border sm:min-h-[400px] lg:min-h-[520px]"
      style={{ borderColor: `${GOLD}70`, backgroundColor: "#0a0a0a" }}
    >
      <iframe
        title="NEBCO office location — Kuleshwor, Kathmandu"
        src={NEBCO_MAPS_EMBED}
        className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {/* Soft edge vignette so the map sits in the dark panel */}
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_48px_rgba(0,0,0,0.45)]"
        aria-hidden="true"
      />

      <a
        href={NEBCO_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 z-[2] inline-flex items-center gap-2 rounded-sm border bg-black/75 px-3.5 py-2 font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-black/90 sm:bottom-5 sm:left-5 sm:text-[11px]"
        style={{ borderColor: `${GOLD}88` }}
      >
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: RED }}
          aria-hidden="true"
        />
        Open in Google Maps
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

/**
 * Contact — 03 / Contact NEBCO
 * Dark contact details + live Google Map of the Kuleshwor office.
 */
export function ContactDetailsMapSection() {
  return (
    <section className="text-white" style={{ backgroundColor: PANEL }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
        {/* Left — details */}
        <div className="relative flex flex-col justify-center px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16 xl:px-12">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px]">
            <span className="text-nebco-red">03 /</span>{" "}
            <span className="text-[#c45a5a]">Contact Nebco</span>
          </p>

          <ul className="mt-9 space-y-7 sm:mt-10 sm:space-y-8">
            {CONTACTS.map((item) => {
              const body = (
                <>
                  <ContactIcon id={item.id} />
                  <div className="min-w-0 pt-0.5">
                    <p className="font-heading text-[14px] font-bold leading-snug tracking-[-0.01em] text-white sm:text-[15px]">
                      {item.title}
                    </p>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className={`mt-1 text-[13px] leading-[1.45] sm:text-[13.5px] ${
                          line.startsWith("(") ? "text-white/45" : "text-white/65"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </>
              );

              return (
                <li key={item.id}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-start gap-4 transition-opacity hover:opacity-90 sm:gap-5"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="flex items-start gap-4 sm:gap-5">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Vertical gold rule — desktop */}
          <div
            className="pointer-events-none absolute bottom-10 right-0 top-10 hidden w-px lg:block"
            style={{ backgroundColor: `${GOLD}55` }}
            aria-hidden="true"
          />
        </div>

        {/* Right — live map */}
        <div className="px-6 pb-12 sm:px-8 sm:pb-14 lg:flex lg:px-10 lg:py-16 xl:px-12">
          <div className="w-full lg:flex-1">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}
