import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

function SocialIcon({ type }: { type: "linkedin" | "facebook" | "instagram" }) {
  const label = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <a
      href="#"
      className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-colors"
      aria-label={label}
    >
      <span className="text-[8px] font-mono uppercase">{type[0]}</span>
    </a>
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

export function HomeFooter() {
  return (
    <footer className="bg-[#141414] text-white flex flex-col h-full min-h-0 overflow-hidden">
      <div className="container-nebco flex-1 min-h-0 py-4 lg:py-3 xl:py-4 flex flex-col justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-4 xl:gap-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-3 max-w-[11rem] text-[10px] leading-relaxed text-white/50 lg:text-[11px]">
              Construction · Consulting · Investments
              <br />
              Built on experience. Driven by purpose.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="type-h4 uppercase tracking-[0.14em] text-white mb-2 lg:mb-2.5">
                {col.title}
              </h4>
              <ul className="space-y-1 lg:space-y-1.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[10px] lg:text-[11px] text-white/50 hover:text-white transition-colors leading-snug"
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
            <h4 className="type-h4 uppercase tracking-[0.14em] text-white mb-2 lg:mb-2.5">
              Connect
            </h4>
            <ul className="space-y-1 lg:space-y-1.5 text-[10px] lg:text-[11px] text-white/50">
              <li>Kathmandu, Nepal</li>
              <li>
                <a href="tel:+97714107600" className="hover:text-white transition-colors">
                  +977 1 410 7600
                </a>
              </li>
              <li>
                <a href="mailto:info@nebco.com.np" className="hover:text-white transition-colors">
                  info@nebco.com.np
                </a>
              </li>
            </ul>
            <div className="flex gap-2 mt-3">
              <SocialIcon type="linkedin" />
              <SocialIcon type="facebook" />
              <SocialIcon type="instagram" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 shrink-0">
        <div className="container-nebco py-2.5 lg:py-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-[9px] lg:text-[10px] text-white/40">
          <p>© NEBCO Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20" aria-hidden="true">
              |
            </span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span className="text-white/20" aria-hidden="true">
              |
            </span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
