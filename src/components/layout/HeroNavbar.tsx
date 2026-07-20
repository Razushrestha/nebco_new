"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { CTA_LINK, NAV_LINKS, NRN_LINK } from "@/lib/navigation";

const ALL_NAV = [...NAV_LINKS, NRN_LINK];

export function HeroNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-black shrink-0">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-[56px]">
        <div className="grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr] items-center min-h-[80px] lg:min-h-[88px] py-2.5 gap-4">
          <div className="justify-self-start">
            <Logo variant="hero" />
          </div>

          <nav className="hidden xl:flex items-center justify-center gap-5 2xl:gap-6">
            {ALL_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-normal text-white/90 hover:text-white transition-colors whitespace-nowrap leading-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="justify-self-end flex items-center gap-3">
            <Link
              href={CTA_LINK.href}
              className="hidden lg:inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white bg-nebco-red hover:bg-nebco-red-hover transition-colors shrink-0"
            >
              Discuss Your Project
              <span aria-hidden="true">→</span>
            </Link>

            <button
              type="button"
              className="xl:hidden p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
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
        <nav className="xl:hidden border-t border-white/10 bg-black px-5 py-4 flex flex-col">
          {ALL_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-2 py-3.5 text-[14px] text-white/90 hover:text-white border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_LINK.href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white text-center bg-nebco-red"
          >
            Discuss Your Project →
          </Link>
        </nav>
      )}
    </header>
  );
}
