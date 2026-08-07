import { Section } from "@/components/sections/Section";

export const metadata = { title: "Privacy Policy | NEBCO" };

export default function PrivacyPage() {
  return (
    <Section>
      <h1 className="type-h1 mb-6">Privacy Policy</h1>
      <div className="prose prose-sm max-w-3xl text-silver-graphite space-y-4">
        <p>NEBCO respects the privacy of website visitors and project enquirers. This policy explains what information we collect, why we use it, and how it may be shared.</p>
        <p>Information may be collected through forms, calls, email, meetings and uploaded documents. We use this to respond to enquiries, assess projects, and improve our services.</p>
        <p>For full policy text, please contact NEBCO. A Nepal-qualified lawyer should review the final Privacy Policy before publication.</p>
      </div>
    </Section>
  );
}
