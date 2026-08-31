import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";

const SOCIAL_LINKS = [
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nebco",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    type: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/nebco",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
        <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69v-3.63h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.33 0 2.47.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.6l-.47 3.63h-3.13V24h6.12A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z" />
      </svg>
    ),
  },
  {
    type: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/nebco",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
      </svg>
    ),
  },
] as const;

function SocialIcon({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors hover:border-white hover:text-white"
      aria-label={label}
    >
      {icon}
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
 * Site footer - same content & style on every page.
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
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon
                  key={social.type}
                  label={social.label}
                  href={social.href}
                  icon={social.icon}
                />
              ))}
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
