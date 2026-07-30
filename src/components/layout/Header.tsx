"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { CTA_LINK, NAV_LINKS, NRN_LINK } from "@/lib/navigation";

const ALL_NAV = [...NAV_LINKS, NRN_LINK];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shrink-0 bg-black">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-[56px]">
        <div className="grid h-[88px] grid-cols-[auto_1fr_auto] items-center gap-4 xl:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start">
            <Logo variant="hero" />
          </div>

          <nav className="hidden items-center justify-center gap-5 xl:flex 2xl:gap-6">
            {ALL_NAV.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap text-[14px] font-normal leading-none transition-colors ${
                    active ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-self-end gap-3">
            <Link
              href={CTA_LINK.href}
              className="hidden shrink-0 items-center gap-2.5 bg-nebco-red px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover lg:inline-flex"
            >
              {CTA_LINK.label}
              <span aria-hidden="true">→</span>
            </Link>

            <button
              type="button"
              className="p-2 text-white xl:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {menuOpen ? (
                  <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                ) : (
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-white/10 bg-black px-5 py-4 xl:hidden">
          {ALL_NAV.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/5 px-2 py-3.5 text-[14px] last:border-0 ${
                  active ? "text-white" : "text-white/90 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={CTA_LINK.href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-nebco-red px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
          >
            {CTA_LINK.label} →
          </Link>
        </nav>
      )}
    </header>
  );
}
