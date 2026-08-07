import { Section } from "@/components/sections/Section";

export const metadata = { title: "Terms of Use | NEBCO" };

export default function TermsPage() {
  return (
    <Section>
      <h1 className="type-h1 mb-6">Terms of Use</h1>
      <div className="max-w-3xl text-silver-graphite space-y-4 text-sm leading-relaxed">
        <p>The information on this website is provided for general introduction and discussion. It does not create a professional appointment, construction contract, agency, partnership, investment commitment or other binding relationship.</p>
        <p>Any service or project engagement is subject to separate evaluation, scope, fees, terms and signed agreement.</p>
        <p>Project descriptions, conceptual visuals, estimated timelines and service information may change. Users should obtain appropriate legal, financial, tax, engineering and other professional advice before making decisions.</p>
      </div>
    </Section>
  );
}
