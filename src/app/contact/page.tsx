"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTABand } from "@/components/sections/SharedSections";
import { IMAGES } from "@/lib/images";

const ENQUIRY_ROUTES = [
  { title: "Construction Proposal", desc: "For projects with drawings, BOQ or defined scope.", icon: "🏗", href: "/contact?type=construction", color: "bg-nebco-red text-white" },
  { title: "Land & Property Evaluation", desc: "For owners asking what can be developed.", icon: "📍", href: "/contact?type=land-evaluation", color: "bg-white text-arch-black border border-soft-concrete" },
  { title: "NRN Consultation", desc: "For overseas clients requiring local coordination.", icon: "🌐", href: "/contact?type=nrn", color: "bg-ivory text-arch-black" },
  { title: "Partnership Opportunity", desc: "For landowners, promoters or strategic participants.", icon: "🤝", href: "/contact?type=partnership", color: "bg-arch-black text-white" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Acknowledgement", desc: "We review your enquiry and send confirmation within two working days." },
  { num: "02", title: "Initial Review", desc: "Our team studies the details and schedules a call if appropriate." },
  { num: "03", title: "Detailed Report", desc: "We provide a preliminary assessment of the next steps required." },
  { num: "04", title: "Recommended Next Step", desc: "We discuss the most practical path for your project or property." },
];

const SECONDARY_LINKS = [
  { title: "Careers", desc: "Join the NEBCO team.", href: "/contact?type=career" },
  { title: "Suppliers & Contractors", desc: "Register as a project partner.", href: "/contact?type=supplier" },
  { title: "General Enquiries", desc: "For other questions.", href: "/contact" },
  { title: "Supplier Registration", desc: "Submit your company profile.", href: "/contact?type=supplier" },
];

export default function ContactPage() {
  const [consent, setConsent] = useState(false);

  return (
    <>
      <HeroSplit
        eyebrow="Contact & Enquiry"
        title="Start with what you know today."
        subtitle="You may have complete drawings, only a property document, an early idea or a project facing a specific challenge. Choose the enquiry type that best matches your situation."
        image={IMAGES.meetingOffice}
        imageAlt="Project discussion"
        primaryCta={{ label: "Submit Enquiry", href: "#form" }}
      />

      {/* Enquiry route grid */}
      <Section>
        <SectionEyebrow number="01" title="FIND THE RIGHT STARTING POINT" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {ENQUIRY_ROUTES.map((route) => (
            <a
              key={route.title}
              href={route.href}
              className={`${route.color} p-8 min-h-[200px] flex flex-col justify-between group transition-transform hover:scale-[1.02]`}
            >
              <span className="text-3xl">{route.icon}</span>
              <div>
                <h3 className="font-heading font-bold text-lg">{route.title}</h3>
                <p className={`text-sm mt-2 ${route.color.includes("white") || route.color.includes("ivory") ? "text-silver-graphite" : "text-white/70"}`}>
                  {route.desc}
                </p>
                <span className="inline-block mt-3 text-xs uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-100">
                  Start →
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section className="bg-soft-concrete" id="form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow number="02" title="GENERAL PROJECT ENQUIRY" />
            <h2 className="font-heading font-bold text-3xl mt-2">
              Tell us about your <span className="text-nebco-red">project</span> or idea.
            </h2>
            <p className="mt-4 text-silver-graphite text-sm flex items-center gap-2">
              <span>🕐</span> We aim to acknowledge genuine enquiries within two working days.
            </p>
          </div>
          <form className="bg-white p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-silver-graphite font-medium">Full Name *</label>
                <input type="text" required className="w-full mt-1 px-3 py-2.5 border border-soft-concrete text-sm outline-none focus:border-nebco-red" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-silver-graphite font-medium">Email *</label>
                <input type="email" required className="w-full mt-1 px-3 py-2.5 border border-soft-concrete text-sm outline-none focus:border-nebco-red" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-silver-graphite font-medium">Phone / WhatsApp *</label>
                <input type="tel" required className="w-full mt-1 px-3 py-2.5 border border-soft-concrete text-sm outline-none focus:border-nebco-red" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-silver-graphite font-medium">Enquiry Type *</label>
                <select required className="w-full mt-1 px-3 py-2.5 border border-soft-concrete text-sm outline-none focus:border-nebco-red bg-white">
                  <option value="">Select...</option>
                  <option>Construction</option>
                  <option>Consulting</option>
                  <option>Investment</option>
                  <option>NRN</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-silver-graphite font-medium">Project Location</label>
                <input type="text" className="w-full mt-1 px-3 py-2.5 border border-soft-concrete text-sm outline-none focus:border-nebco-red" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-silver-graphite font-medium">Brief Description *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what you have and what you want to achieve."
                className="w-full mt-1 px-3 py-2.5 border border-soft-concrete text-sm outline-none focus:border-nebco-red resize-none"
              />
            </div>
            <div className="border-2 border-dashed border-soft-concrete p-6 text-center text-sm text-silver-graphite">
              Drag and drop files here, or click to upload
              <br />
              <span className="text-xs">PDF, JPG, PNG, DOCX (max 10MB)</span>
            </div>
            <label className="flex items-start gap-3 text-xs text-silver-graphite cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 accent-nebco-red"
              />
              I consent to NEBCO using the information provided to assess and respond to my enquiry in
              accordance with the Privacy Policy.
            </label>
            <button
              type="submit"
              disabled={!consent}
              className="w-full py-4 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-heading"
            >
              Submit Enquiry →
            </button>
          </form>
        </div>
      </Section>

      {/* Contact + Map */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-arch-black text-white p-10 lg:p-16">
          <SectionEyebrow number="03" title="CONTACT DETAILS" className="text-nebco-red" />
          <div className="mt-8 space-y-6">
            {[
              { icon: "🏢", label: "National Estate Builders Co. Pvt. Ltd. (NEBCO)" },
              { icon: "📍", label: "Kuleshwor–14, Kathmandu, Nepal" },
              { icon: "📞", label: "Phone: [To be confirmed]" },
              { icon: "✉", label: "Email: [To be confirmed]" },
              { icon: "🕐", label: "Office Hours: [To be confirmed]" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm text-white/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-arch-black-soft min-h-[400px] flex items-center justify-center relative">
          <div className="text-center p-8">
            <div className="w-12 h-12 bg-nebco-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg">📍</div>
            <p className="text-white font-heading font-bold">NEBCO</p>
            <p className="text-white/60 text-sm mt-1">Kuleshwor–14, Kathmandu</p>
            <p className="text-white/40 text-xs mt-4">Map integration — Google Maps embed</p>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <Section>
        <SectionEyebrow number="04" title="WHAT HAPPENS NEXT?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-nebco-red/30" />
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div className="w-10 h-10 rounded-full bg-nebco-red text-white flex items-center justify-center text-xs font-mono mb-4 relative z-10">
                {step.num}
              </div>
              <h4 className="font-heading font-bold">{step.title}</h4>
              <p className="text-sm text-silver-graphite mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Secondary links */}
      <Section className="bg-ivory">
        <SectionEyebrow number="05" title="OTHER OPPORTUNITIES" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {SECONDARY_LINKS.map((link) => (
            <a key={link.title} href={link.href} className="group">
              <div className="w-10 h-10 border border-nebco-red text-nebco-red flex items-center justify-center text-sm mb-3">◈</div>
              <h4 className="font-heading font-bold text-sm group-hover:text-nebco-red transition-colors">{link.title}</h4>
              <p className="text-xs text-silver-graphite mt-1">{link.desc}</p>
              <span className="text-xs text-nebco-red mt-2 inline-block uppercase tracking-wide">Learn More →</span>
            </a>
          ))}
        </div>
      </Section>

      {/* Privacy banner */}
      <section className="bg-soft-concrete py-8">
        <div className="container-nebco flex gap-4 items-start">
          <span className="text-2xl">🛡</span>
          <p className="text-sm text-silver-graphite leading-relaxed">
            NEBCO respects your privacy. Information submitted through this form is used solely to assess and
            respond to your enquiry. See our{" "}
            <a href="/privacy" className="text-nebco-red hover:underline">Privacy Policy</a> for details.
          </p>
        </div>
      </section>

      <CTABand
        title="Tell us what you are planning. We are here to help you get it right."
        buttonLabel="Submit Your Enquiry"
        buttonHref="#form"
        variant="red"
      />
    </>
  );
}
