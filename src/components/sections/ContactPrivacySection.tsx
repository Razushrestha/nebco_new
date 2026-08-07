"use client";

import { useState } from "react";
import Link from "next/link";

const RED = "#bc2026";
const GOLD = "#c5a059";

function ShieldLockIcon() {
  return (
    <svg width="40" height="44" viewBox="0 0 40 44" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M20 2.5L4 9.5v11.2c0 10.4 6.8 18.8 16 21.3 9.2-2.5 16-10.9 16-21.3V9.5L20 2.5z"
        stroke={RED}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <rect x="13.5" y="18" width="13" height="11" rx="1.5" stroke={RED} strokeWidth="1.3" />
      <path
        d="M16.5 18v-2.8a3.5 3.5 0 0 1 7 0V18"
        stroke={RED}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="23.5" r="1.35" fill={RED} />
    </svg>
  );
}

/**
 * Contact — 06 / Confidentiality + Privacy
 * Shield copy + agreement checkbox matching the design mock.
 */
export function ContactPrivacySection() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="border-t border-[#e5e1da] bg-[#f4f1ed]">
      <div className="mx-auto max-w-[1440px] px-6 py-11 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12">
        <p className="type-label font-semibold uppercase tracking-[0.16em] text-nebco-red">
          06 / Confidentiality + Privacy
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:items-start lg:gap-0">
          {/* Left — icon + copy */}
          <div className="flex items-start gap-4 sm:gap-5 lg:pr-12 xl:pr-16">
            <ShieldLockIcon />
            <div className="min-w-0 pt-0.5">
              <h3 className="type-h3 tracking-[-0.01em] text-arch-black">
                Your information and documents are treated with care.
              </h3>
              <p className="mt-2.5 max-w-[36rem] text-[13.5px] leading-[1.6] text-arch-black/70 sm:mt-3 sm:text-[14px]">
                Any details or files you share with NEBCO are used solely to assess and respond to your
                enquiry. We do not share your information with third parties without your consent.
              </p>
            </div>
          </div>

          {/* Right — agreement */}
          <div
            className="lg:border-l lg:pl-10 xl:pl-12"
            style={{ borderColor: `${GOLD}66` }}
          >
            <label className="flex cursor-pointer items-start gap-3">
              <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer absolute inset-0 z-[1] cursor-pointer opacity-0"
                />
                <span
                  className="flex h-4 w-4 items-center justify-center rounded-[2px] border bg-transparent peer-checked:border-nebco-red peer-checked:bg-nebco-red"
                  style={{ borderColor: `${GOLD}99` }}
                  aria-hidden="true"
                >
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    className={agreed ? "opacity-100" : "opacity-0"}
                  >
                    <path
                      d="M1 3.8L3.6 6.4 9 1"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <span className="text-[14px] leading-snug text-arch-black">
                I understand and agree to the above.
              </span>
            </label>

            <p className="mt-4 text-[13.5px] leading-snug text-arch-black sm:mt-5 sm:text-[14px]">
              Read our{" "}
              <Link
                href="/privacy"
                className="font-medium text-nebco-red transition-opacity hover:opacity-80"
              >
                Privacy Policy <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
