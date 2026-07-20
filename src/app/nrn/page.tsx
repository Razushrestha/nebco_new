import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HubDiagram } from "@/components/ui/HubDiagram";
import { IMAGES } from "@/lib/images";

const CAPABILITIES = [
  { num: "01", title: "Property Review", desc: "Initial online discovery and objective setting." },
  { num: "02", title: "Visibility", desc: "Organised access to approved drawings and reports." },
  { num: "03", title: "Professional Team", desc: "Architect, engineer, finance and legal coordination." },
  { num: "04", title: "Standards", desc: "Municipal approval process support." },
  { num: "05", title: "Financial Discipline", desc: "Approved budgets, billing and financial summaries.", highlight: true },
  { num: "06", title: "Construction", desc: "Procurement and project management on the ground." },
  { num: "07", title: "Reporting", desc: "Periodic updates with dated photographs and videos." },
  { num: "08", title: "Handover", desc: "Completion, handover and post-construction coordination." },
];

const JOURNEY = [
  "Consultation", "Property Review", "Feasibility", "Team Setup", "Finance", "Construction", "Reporting", "Handover",
];

const FEATURES = [
  "Streamlined Communications",
  "Site-level Visibility",
  "Rigorous Reporting",
  "Precision Tracking",
  "Cost Controls",
  "Milestone Alerts",
];

export default function NRNPage() {
  return (
    <>
      {/* Hero with dashboard overlay */}
      <section className="relative min-h-[600px] bg-arch-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.mountainsSite} alt="Construction site Nepal" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-arch-black via-arch-black/80 to-arch-black/40" />
        </div>
        <div className="container-nebco relative z-10 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-eyebrow mb-4">For NRNs & Overseas Nepalis</p>
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl leading-tight">
              Develop your property in Nepal—without losing visibility or control.
            </h1>
            <p className="mt-6 text-white/70 leading-relaxed">
              Local project coordination supported by documented decisions, digital updates and milestone-based
              project management.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/contact?type=nrn" className="px-6 py-3 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors">
                Book an Online Consultation →
              </Link>
              <Link href="/contact?type=land-evaluation" className="px-6 py-3 border border-white/40 text-white text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-arch-black transition-colors">
                Tell Us About Your Property
              </Link>
            </div>
            <div className="flex gap-6 mt-8 text-xs text-white/50">
              <span>📍 Kathmandu Office</span>
              <span>🕐 Scheduled Updates</span>
              <span>📹 Live Site Reports</span>
            </div>
          </div>
          {/* Dashboard widget */}
          <div className="bg-white text-arch-black p-6 shadow-2xl max-w-md lg:ml-auto">
            <p className="text-xs font-mono text-nebco-red uppercase mb-4">Project Dashboard Preview</p>
            <div className="relative aspect-video bg-soft-concrete mb-4 overflow-hidden">
              <Image src={IMAGES.constructionSite} alt="Site progress" fill className="object-cover" />
              <span className="absolute top-2 left-2 bg-nebco-red text-white text-[10px] px-2 py-0.5 uppercase">Live</span>
            </div>
            <p className="font-heading font-bold text-sm">Naxal RCC Project</p>
            <p className="text-xs text-silver-graphite">Kathmandu, Nepal</p>
            <div className="mt-4 space-y-2">
              {[{ label: "Structural", pct: 92 }, { label: "Plumbing", pct: 85 }, { label: "Electrical", pct: 50 }, { label: "Finishing", pct: 10 }].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span>{bar.label}</span><span>{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-soft-concrete">
                    <div className="h-full bg-nebco-red" style={{ width: `${bar.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem bridge */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={IMAGES.videoCall} alt="Remote consultation" fill className="object-cover" />
            </div>
            <p className="mt-4 font-heading font-bold text-lg">
              Distance makes coordination hard.{" "}
              <span className="text-nebco-red">It should not make the project unmanageable.</span>
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
              <span className="text-nebco-red text-3xl">→</span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={IMAGES.workersPlans} alt="On-site coordination" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* One team diagram */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HubDiagram dark />
          <div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl">One local team. All critical connections.</h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              NEBCO provides a professional local coordination structure connecting property, consultants,
              authorities, finance and contractors through a documented process.
            </p>
          </div>
        </div>
      </Section>

      {/* Capabilities list */}
      <Section>
        <SectionEyebrow number="02" title="BUILT ON EXPERIENCE" />
        <div className="space-y-2 mt-6 max-w-3xl">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.num}
              className={`flex items-start gap-6 p-4 transition-colors ${
                cap.highlight ? "bg-arch-black text-white" : "hover:bg-soft-concrete"
              }`}
            >
              <span className="text-nebco-red font-mono text-sm shrink-0">{cap.num}</span>
              <div>
                <h4 className="font-heading font-bold">{cap.title}</h4>
                <p className={`text-sm mt-1 ${cap.highlight ? "text-white/60" : "text-silver-graphite"}`}>{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dashboard features */}
      <Section className="bg-soft-concrete">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading font-bold text-2xl">
              Real-time clarity. Documented progress. Our project dashboard makes it possible.
            </h2>
            <ul className="mt-8 space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-nebco-red text-nebco-red flex items-center justify-center text-xs">◈</div>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-arch-black text-white p-6 shadow-xl">
            <div className="flex gap-2 mb-4">
              {["Dashboard", "Schedule", "Budget", "Documents", "Photos"].map((tab, i) => (
                <span key={tab} className={`text-[10px] px-2 py-1 ${i === 0 ? "bg-nebco-red" : "text-white/50"}`}>{tab}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-white/10 p-3">
                <p className="text-white/50">Completion</p>
                <p className="text-2xl font-bold text-nebco-red">82%</p>
              </div>
              <div className="bg-white/10 p-3">
                <p className="text-white/50">Budget</p>
                <p className="text-lg font-bold">On Track</p>
              </div>
              <div className="col-span-2 relative aspect-video bg-white/5 overflow-hidden">
                <Image src={IMAGES.constructionSite} alt="Site" fill className="object-cover opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Journey timeline */}
      <Section>
        <h2 className="font-heading font-bold text-2xl text-center mb-10">
          A clear path from your first conversation to handover.
        </h2>
        <div className="flex flex-wrap justify-between gap-4 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-nebco-red/30" />
          {JOURNEY.map((step, i) => (
            <div key={step} className="text-center relative z-10 w-[calc(25%-12px)] min-w-[80px]">
              <div className="w-12 h-12 rounded-full border-2 border-nebco-red text-nebco-red flex items-center justify-center text-xs font-mono mx-auto bg-ivory-light">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-[10px] mt-2 uppercase tracking-wide font-medium">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* You decide / We execute */}
      <Section red>
        <h2 className="font-heading font-bold text-3xl text-center mb-12">You decide. We execute.</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
          {[
            { label: "NEBCO Coordination", icon: "◉" },
            { label: "You Decide", icon: "✋", highlight: true },
            { label: "We Execute", icon: "⚙" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className={`text-center p-6 ${item.highlight ? "border-2 border-white" : ""}`}>
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="text-xs uppercase tracking-widest font-semibold">{item.label}</p>
              </div>
              {i < 2 && <span className="text-2xl hidden md:block">→</span>}
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[400px]">
          <Image src={IMAGES.luxuryApartment} alt="Completed project" fill className="object-cover" />
        </div>
        <div className="bg-arch-black text-white p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="font-heading font-bold text-3xl leading-tight">
            Your property is in Nepal. Your visibility should travel with you.
          </h2>
          <Link href="/contact?type=nrn" className="inline-block mt-8 px-6 py-3 bg-nebco-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-nebco-red-hover transition-colors w-fit">
            Book an Initial Consultation →
          </Link>
          <div className="flex gap-6 mt-8">
            {["Local Presence", "Total Transparency", "Tech Enabled"].map((t) => (
              <div key={t} className="text-center">
                <div className="w-10 h-10 rounded-full border border-pale-gold text-pale-gold flex items-center justify-center text-sm mx-auto">◆</div>
                <p className="text-[10px] mt-2 uppercase tracking-wide text-white/60">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
