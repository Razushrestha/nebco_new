"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CTA_LINK, NAV_LINKS, NRN_LINK } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Home page has integrated hero navigation
  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-soft-concrete/60 shadow-sm">
      <div className="container-nebco">
        <div className="flex items-center justify-between h-[72px] gap-4">
          <Logo />

          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-xs font-medium tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-nebco-red border-b-2 border-nebco-red"
                    : "text-arch-black hover:text-nebco-red"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={NRN_LINK.href}
              className={`px-3 py-2 text-xs font-medium tracking-wide uppercase transition-colors ${
                pathname === NRN_LINK.href
                  ? "text-nebco-red"
                  : "text-silver-graphite hover:text-nebco-red"
              }`}
            >
              {NRN_LINK.label}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button href={CTA_LINK.href} className="!py-2.5 !px-5 !text-xs">
              {CTA_LINK.label}
            </Button>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 text-arch-black"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-soft-concrete bg-white">
          <nav className="container-nebco py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 text-sm font-medium uppercase ${
                  pathname === link.href ? "text-nebco-red" : "text-arch-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={NRN_LINK.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm font-medium uppercase text-silver-graphite"
            >
              {NRN_LINK.label}
            </Link>
            <div className="pt-3 px-3">
              <Button href={CTA_LINK.href} className="w-full">
                {CTA_LINK.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
