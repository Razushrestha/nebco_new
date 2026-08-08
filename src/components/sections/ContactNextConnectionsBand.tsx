import { ContactWhatHappensNextSection } from "@/components/sections/ContactWhatHappensNextSection";
import { ContactOtherConnectionsSection } from "@/components/sections/ContactOtherConnectionsSection";

/**
 * Contact — 04 + 05 in one desktop viewport.
 */
export function ContactNextConnectionsBand() {
  return (
    <section className="contact-next-connections-band flex flex-col bg-[#f5f2ed]">
      <ContactWhatHappensNextSection compact />
      <ContactOtherConnectionsSection compact />
    </section>
  );
}
