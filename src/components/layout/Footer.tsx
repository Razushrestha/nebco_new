import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

function SocialIcon({ type }: { type: "linkedin" | "facebook" | "instagram" }) {
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <a
      href="#"
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white hover:text-white"
      aria-label={label}
    >
      <span className="font-mono text-[8px] uppercase">{type[0]}</span>
    </a>
  );
}

function MarkN() {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/35"
      aria-hidden="true"
    >
      <span className="font-heading text-[9px] font-bold leading-none text-white">N</span>
    </span>
  );
}

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About NEBCO", href: "/about" },
      { label: "Leadership", href: "/partners" },
      { label: "Careers", href: "/contact?type=career" },
      { label: "Quality & Safety", href: "/construction" },
      { label: "News", href: "/insights" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Construction", href: "/construction" },
      { label: "Consulting", href: "/consulting" },
      { label: "Investments", href: "/investments" },
      { label: "NRN Services", href: "/nrn" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "Development Consulting", href: "/projects?filter=consulting" },
      { label: "Construction", href: "/projects?filter=construction" },
      { label: "Commercial", href: "/projects?filter=commercial" },
      { label: "Residential", href: "/projects?filter=residential" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Articles", href: "/insights" },
      { label: "Market Updates", href: "/insights" },
      { label: "Guides", href: "/insights" },
    ],
  },
] as const;

/**
 * Site footer — same content & style on every page.
 */
export function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="container-nebco py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-0">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-[12.5rem] text-[11px] leading-[1.55] text-white/50">
              Construction • Consulting • Investments
              <br />
              Built on experience. Driven by purpose.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-[12px] leading-snug text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div>
            <h4 className="font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5 text-[12px] leading-snug text-white/50">
              <li>Kathmandu, Nepal</li>
              <li>
                <a href="tel:+97714107600" className="transition-colors hover:text-white">
                  +977 1 410 7600
                </a>
              </li>
              <li>
                <a href="mailto:info@nebco.com.np" className="transition-colors hover:text-white">
                  info@nebco.com.np
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
              <SocialIcon type="linkedin" />
              <SocialIcon type="facebook" />
              <SocialIcon type="instagram" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-nebco flex flex-col items-center justify-between gap-3 py-4 text-[11px] text-white/40 sm:flex-row sm:gap-4">
          <p className="flex items-center gap-2.5">
            <MarkN />
            <span>© NEBCO Pvt. Ltd. All rights reserved.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/20" aria-hidden="true">
              |
            </span>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
            <span className="text-white/20" aria-hidden="true">
              |
            </span>
            <Link href="/contact" className="transition-colors hover:text-white">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
