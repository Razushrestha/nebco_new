import Link from "next/link";
import type { ReactNode } from "react";

const GOLD = "#c5a059";

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex flex-col items-start group">
      <svg width={52} height={52} viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <circle cx="28" cy="28" r="27" fill="#bc2026" />
        <rect x="24" y="9" width="8" height="30" fill="#d8dce2" rx="0.5" />
        <rect x="15" y="17" width="7" height="22" fill="#b8bcc6" />
        <rect x="34" y="15" width="7" height="24" fill="#c8ccd4" />
        <line x1="11" y1="39" x2="45" y2="39" stroke="#a8adb5" strokeWidth="1.5" />
      </svg>
      <span
        className="font-serif font-bold text-nebco-red text-[1.35rem] tracking-[0.06em] uppercase mt-2 leading-none group-hover:text-nebco-red-hover transition-colors"
        style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
      >
        NEBCO
      </span>
      <span className="text-[8px] tracking-[0.18em] uppercase text-white/55 mt-1.5">
        Quality · Integrity · Timely
      </span>
    </Link>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="w-8 h-8 border border-white/25 flex items-center justify-center text-white/70 hover:border-pale-gold hover:text-white transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function SocialLinkedIn() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M3.5 5.5h2v6h-2v-6zm1-3a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3zM6.5 5.5h1.9v.8c.3-.5.9-.9 1.7-.9 1.8 0 2.1 1.2 2.1 2.7v3.4h-2v-3c0-.7 0-1.7-1-1.7s-1.2.8-1.2 1.7v3h-2v-6z" />
    </svg>
  );
}

function SocialFacebook() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M9.2 5.5H11V3.6C10.6 3.5 9.7 3.4 8.7 3.4 6.7 3.4 5.3 4.7 5.3 7v1.5H3.5v2.2h1.8v5.6h2.3V9.7h1.9l.3-2.2H7.6V7.1c0-.6.2-1 1.2-1h.4z" />
    </svg>
  );
}

function SocialInstagram() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-3.5 h-3.5" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="2.5" />
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="11.2" cy="4.8" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SocialYouTube() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M14.5 5.2a1.4 1.4 0 00-.9-1C12.4 4 8 4 8 4s-4.4 0-5.6.2a1.4 1.4 0 00-.9 1C1.3 6.4 1.3 8 1.3 8s0 1.6.2 2.8a1.4 1.4 0 00.9 1C3.6 12 8 12 8 12s4.4 0 5.6-.2a1.4 1.4 0 00.9-1c.2-1.2.2-2.8.2-2.8s0-1.6-.2-2.8zM6.5 10V6l3.5 2-3.5 2z" />
    </svg>
  );
}

function ContactIcon({ type }: { type: "phone" | "email" | "web" }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 16 16" fill="none" stroke={GOLD} strokeWidth="1.1" className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true">
        <path d="M4 2.5h2l1 3-2 1.2a7 7 0 003.3 3.3L9.5 9l3 1v2a1 1 0 01-1.1 1A11.5 11.5 0 013 3.6 1 1 0 014 2.5z" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg viewBox="0 0 16 16" fill="none" stroke={GOLD} strokeWidth="1.1" className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true">
        <rect x="2" y="4" width="12" height="8" rx="0.5" />
        <path d="M2 5l6 4 6-4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke={GOLD} strokeWidth="1.1" className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" />
      <path d="M2.5 8h11M8 2.5c1.8 2 1.8 8.5 0 11M8 2.5c-1.8 2-1.8 8.5 0 11" />
    </svg>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About NEBCO", href: "/about" },
      { label: "Leadership", href: "/partners" },
      { label: "Careers", href: "/contact?type=career" },
      { label: "News & Updates", href: "/insights" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Construction", href: "/construction" },
      { label: "Consulting", href: "/consulting" },
      { label: "Investments", href: "/investments" },
      { label: "NRN Services", href: "/nrn" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Partners & Experts", href: "/partners" },
      { label: "Insights", href: "/insights" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="container-nebco py-12 lg:py-14 xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 lg:gap-y-0">
          <div className="lg:pr-8 lg:border-r lg:border-pale-gold/25">
            <FooterLogo />
            <div className="flex gap-2.5 mt-6">
              <SocialLink href="#" label="LinkedIn">
                <SocialLinkedIn />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <SocialFacebook />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <SocialInstagram />
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <SocialYouTube />
              </SocialLink>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="lg:px-7 lg:border-r lg:border-pale-gold/25">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] mb-4" style={{ color: GOLD }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/75 hover:text-white transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:pl-7">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] mb-4" style={{ color: GOLD }}>
              Contact
            </h4>
            <div className="space-y-3 text-[13px] text-white/75 leading-snug">
              <p>
                NEBCO Pvt. Ltd.
                <br />
                Dhumbarahi, Kathmandu, Nepal
              </p>
              <a href="tel:+97714813054" className="flex items-start gap-2.5 hover:text-white transition-colors">
                <ContactIcon type="phone" />
                +977 1 481 3054
              </a>
              <a href="mailto:info@nebco.com.np" className="flex items-start gap-2.5 hover:text-white transition-colors">
                <ContactIcon type="email" />
                info@nebco.com.np
              </a>
              <a
                href="https://www.nebco.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <ContactIcon type="web" />
                www.nebco.com.np
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pale-gold/20">
        <div className="container-nebco py-4 lg:py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/45">
          <p>© {new Date().getFullYear()} NEBCO Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
