"use client";

import { useRef, useState, type FormEvent } from "react";

const GOLD = "#c5a059";
const RED = "#bc2026";
const FIELD =
  "w-full rounded-md border border-[#ddd7ce] bg-white px-3.5 py-2.5 text-[13.5px] text-arch-black outline-none transition-colors placeholder:text-black/35 focus:border-nebco-red";
const LABEL = "mb-1.5 block text-[12px] font-medium text-arch-black/70";

const COUNTRIES = [
  "Nepal",
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "United Arab Emirates",
  "Qatar",
  "Saudi Arabia",
  "Other",
] as const;

const ENQUIRY_TYPES = [
  "Construction Proposal",
  "Land & Property Evaluation",
  "NRN Consultation",
  "Partnership Opportunity",
  "General Enquiry",
] as const;

const LOCATIONS = [
  "Kathmandu",
  "Lalitpur",
  "Bhaktapur",
  "Pokhara",
  "Outside Kathmandu Valley",
  "Outside Nepal",
  "Not decided yet",
] as const;

function RequiredStar() {
  return (
    <span className="text-nebco-red" aria-hidden="true">
      *
    </span>
  );
}

function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="16" cy="16" r="13.5" stroke={RED} strokeWidth="1.35" />
      {/* Hands ~ 12 and 3 o'clock */}
      <path d="M16 9.5V16h6.5" stroke={RED} strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="mx-auto">
      <path
        d="M14 4v12M14 4l-4.5 4.5M14 4l4.5 4.5"
        stroke={GOLD}
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 17.5V21a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.5"
        stroke={GOLD}
        strokeWidth="1.45"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SelectChevron() {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-black/40"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Contact — 02 / General Project Enquiry
 * Left intro + white form card matching the design mock.
 */
export function ContactEnquiryFormSection() {
  const [consent, setConsent] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="form" className="bg-[#f5f2ed]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-12 lg:px-10 lg:py-16 xl:gap-16 xl:px-12">
        {/* Left copy — vertical rule, stacked clock, short gold underline */}
        <div className="relative lg:pt-1">
          <div className="relative pl-5 sm:pl-6">
            {/* Red vertical spine — full content height */}
            <div
              className="absolute bottom-0 left-0 top-0 w-[2px] bg-nebco-red"
              aria-hidden="true"
            />

            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-nebco-red sm:text-[11px]">
              02 / General Project Enquiry
            </p>

            <h2 className="mt-5 max-w-[15ch] font-heading text-[1.75rem] font-bold leading-[1.12] tracking-[-0.02em] text-arch-black sm:mt-6 sm:text-[2rem] lg:text-[2.2rem]">
              Tell us about your <span className="text-nebco-red">project</span> or idea.
            </h2>

            <p className="mt-5 max-w-[22rem] text-[14px] leading-[1.65] text-arch-black/65 sm:mt-6 sm:text-[15px]">
              The more context you share, the better we can understand your goals and guide you in the right
              direction.
            </p>

            {/* Clock above text, gold rule below — matches mock stack */}
            <div className="mt-9 sm:mt-11">
              <ClockIcon />
              <p className="mt-3 max-w-[18rem] text-[13.5px] leading-[1.5] text-arch-black/65 sm:mt-3.5 sm:text-[14px]">
                We typically respond within 1–2 working days.
              </p>
              <div
                className="mt-4 h-px w-12 sm:mt-5 sm:w-14"
                style={{ backgroundColor: GOLD }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          className="rounded-md border border-[#e4dfd6] bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:p-7 lg:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
            <div>
              <label htmlFor="enquiry-name" className={LABEL}>
                Full Name <RequiredStar />
              </label>
              <input
                id="enquiry-name"
                name="fullName"
                type="text"
                required
                placeholder="Enter your full name"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="enquiry-email" className={LABEL}>
                Email Address <RequiredStar />
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="enquiry-phone" className={LABEL}>
                Phone or WhatsApp <RequiredStar />
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className={FIELD}
              />
            </div>

            <div>
              <label htmlFor="enquiry-country" className={LABEL}>
                Current Country <RequiredStar />
              </label>
              <div className="relative">
                <select id="enquiry-country" name="country" required defaultValue="" className={`${FIELD} appearance-none pr-9`}>
                  <option value="" disabled>
                    Select your country
                  </option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <SelectChevron />
              </div>
            </div>

            <div>
              <label htmlFor="enquiry-type" className={LABEL}>
                Enquiry Type <RequiredStar />
              </label>
              <div className="relative">
                <select id="enquiry-type" name="enquiryType" required defaultValue="" className={`${FIELD} appearance-none pr-9`}>
                  <option value="" disabled>
                    Select enquiry type
                  </option>
                  {ENQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <SelectChevron />
              </div>
            </div>

            <div>
              <label htmlFor="enquiry-location" className={LABEL}>
                Project Location <RequiredStar />
              </label>
              <div className="relative">
                <select id="enquiry-location" name="location" required defaultValue="" className={`${FIELD} appearance-none pr-9`}>
                  <option value="" disabled>
                    Select project location
                  </option>
                  {LOCATIONS.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
                <SelectChevron />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="enquiry-description" className={LABEL}>
                Brief Description <RequiredStar />
              </label>
              <textarea
                id="enquiry-description"
                name="description"
                required
                rows={4}
                placeholder="Tell us about your project, idea or challenge"
                className={`${FIELD} resize-none`}
              />
            </div>

            <div className="sm:col-span-2">
              <p className={LABEL}>File Upload (Optional)</p>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex w-full flex-col items-center justify-center rounded-md border border-dashed border-[#d5cfc4] bg-[#faf9f7] px-4 py-6 text-center transition-colors hover:border-nebco-red/40 hover:bg-[#f7f4ef]"
              >
                <UploadIcon />
                <span className="mt-2.5 text-[13px] font-semibold text-arch-black">
                  {fileName ?? "Click to upload or drag and drop"}
                </span>
                <span className="mt-1 text-[11.5px] text-arch-black/45">PDF, DWG, JPG, PNG (Max 10MB)</span>
              </button>
              <input
                ref={fileRef}
                type="file"
                name="file"
                accept=".pdf,.dwg,.jpg,.jpeg,.png"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </div>
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-[1.5] text-arch-black/65">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-nebco-red"
            />
            <span>I consent to NEBCO using the information provided to assess and respond to my enquiry.</span>
          </label>

          <button
            type="submit"
            disabled={!consent}
            className="mt-5 inline-flex items-center gap-2.5 bg-nebco-red px-7 py-3.5 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-nebco-red-hover disabled:cursor-not-allowed disabled:opacity-45 sm:px-8 sm:text-[12px]"
          >
            Submit Enquiry
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
