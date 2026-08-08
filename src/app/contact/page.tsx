"use client";

import { ContactHero } from "@/components/sections/ContactHero";
import { ContactEnquiryRoutesSection } from "@/components/sections/ContactEnquiryRoutesSection";
import { ContactEnquiryFormSection } from "@/components/sections/ContactEnquiryFormSection";
import { ContactDetailsMapSection } from "@/components/sections/ContactDetailsMapSection";
import { ContactNextConnectionsBand } from "@/components/sections/ContactNextConnectionsBand";
import { ContactPrivacySection } from "@/components/sections/ContactPrivacySection";
import { ContactClosingCtaSection } from "@/components/sections/ContactClosingCtaSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactEnquiryRoutesSection />

      <ContactEnquiryFormSection />

      <ContactDetailsMapSection />

      <ContactNextConnectionsBand />

      <ContactPrivacySection />

      <ContactClosingCtaSection />
    </>
  );
}
