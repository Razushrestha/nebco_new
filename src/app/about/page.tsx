import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CTABand } from "@/components/sections/SharedSections";
import { IMAGES } from "@/lib/images";

const JOURNEY = [
  { num: "01", era: "Early 1980s", title: "Humble Foundation", desc: "Founder's early construction-industry journey.", image: IMAGES.historicalConstruction },
  { num: "02", era: "2001", title: "NEBCO Established", desc: "National Estate Builders Co. formally registered.", image: IMAGES.constructionSite },
  { num: "03", era: "Growth", title: "Construction & Development", desc: "Growth in building construction and real estate projects.", image: IMAGES.commercialBuilding },
  { num: "04", era: "Current", title: "Integrated Platform", desc: "Three-division platform with digital coordination.", image: IMAGES.modernApartment },
  { num: "05", era: "Future", title: "Strategic Outcomes", desc: "Trusted ecosystem from concept to market readiness.", image: IMAGES.luxuryApartment },
];

const VALUES = [
  { num: "01", title: "Trust", desc: "We protect relationships through honest communication and responsible commitments." },
  { num: "02", title: "Accountability", desc: "We define roles clearly, document decisions and take ownership." },
  { num: "03", title: "Practical Thinking", desc: "We balance ambition with cost, regulation, buildability and market reality." },
  { num: "04", title: "Collaboration", desc: "We bring the right specialists together around a shared objective." },
  { num: "05", title: "Transparency", desc: "We communicate progress, risks and decisions clearly." },
  { num: "06", title: "Long-Term Value", desc: "We consider how the completed property will perform." },
];

const DIVISIONS = [
  { title: "Construction", desc: "Plans and executes building works, coordinates resources and controls quality.", color: "bg-nebco-red", icon: "🏗" },
  { title: "Consulting", desc: "Evaluates opportunities and manages the connected development process.", color: "bg-arch-black", icon: "📐" },
  { title: "Investments", desc: "Evaluates selective opportunities for partnership, subject to viability.", color: "bg-ivory text-arch-black", icon: "📈" },
];

export const metadata = {
  title: "About NEBCO | Three Generations in Nepal's Construction Industry",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with collage */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="bg-arch-black text-white p-10 lg:p-16 flex flex-col justify-center">
          <p className="section-eyebrow mb-4">About NEBCO</p>
          <h1 className="font-heading font-extrabold text-4xl lg:text-5xl leading-tight">
            Built on Experience. Evolving with Purpose.
          </h1>
          <p className="mt-6 text-white/70 leading-relaxed">
            A three-generation journey through Nepal&apos;s construction and real estate industry—carrying forward
            practical experience while building a more connected way to develop projects.
          </p>
        </div>
        <div className="relative min-h-[320px] grid grid-cols-3 gap-1 p-2 bg-arch-black">
          {[IMAGES.historicalConstruction, IMAGES.workersPlans, IMAGES.modernApartment].map((img, i) => (
            <div key={i} className="relative overflow-hidden" style={{ transform: `skewY(${i === 1 ? 0 : i === 0 ? -2 : 2}deg)` }}>
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* 01 Our Story */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMAGES.constructionSite} alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="container-nebco relative z-10">
          <SectionEyebrow number="01" title="OUR STORY" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-3xl lg:text-4xl leading-tight mb-6">
                From construction experience to an integrated development platform
              </h2>
              <p className="text-silver-graphite leading-relaxed mb-4">
                NEBCO&apos;s roots began before the company&apos;s formal registration, when its founder started working
                in Nepal&apos;s construction industry more than three decades ago. What began as hands-on industry
                experience became National Estate Builders Co. Pvt. Ltd., formally registered in 2001.
              </p>
              <p className="text-silver-graphite leading-relaxed">
                The third generation is now shaping NEBCO&apos;s next chapter: an integrated platform that connects
                construction, development consulting and selective investment participation.
              </p>
            </div>
            <div className="bg-arch-black text-white p-8 flex items-center">
              <blockquote className="text-lg italic leading-relaxed border-l-4 border-nebco-red pl-6">
                &ldquo;We did not expand beyond construction by assumption. We evolved through the problems our
                clients asked us to solve.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Journey Timeline */}
      <Section>
        <SectionEyebrow number="02" title="THE JOURNEY" />
        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-nebco-red/30" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {JOURNEY.map((item) => (
              <div key={item.num} className="relative">
                <div className="w-8 h-8 rounded-full bg-nebco-red text-white flex items-center justify-center text-xs font-mono mb-4 relative z-10">
                  {item.num}
                </div>
                <div className="relative aspect-square overflow-hidden mb-3">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <p className="text-xs font-mono text-nebco-red uppercase">{item.era}</p>
                <h3 className="font-heading font-bold mt-1">{item.title}</h3>
                <p className="text-xs text-silver-graphite mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 03 Purpose */}
      <Section dark>
        <SectionEyebrow number="03" title="PURPOSE" className="text-nebco-red" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {[
            { title: "Vision", text: "Transform opportunities into valuable, well-managed assets." },
            { title: "Connect", text: "Connect land, expertise, finance and construction capability." },
            { title: "Promise", text: "Clarity before construction. Accountability throughout." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-heading font-bold text-xl text-nebco-red uppercase tracking-widest mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 Values */}
      <Section>
        <SectionEyebrow number="04" title="VALUES" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {VALUES.map((v) => (
            <div key={v.num} className="border-l-2 border-nebco-red pl-6">
              <span className="text-nebco-red font-mono text-sm">{v.num}</span>
              <h3 className="font-heading font-bold text-lg mt-1">{v.title}</h3>
              <p className="text-sm text-silver-graphite mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 05 Three Responsibilities */}
      <Section className="bg-soft-concrete">
        <SectionEyebrow number="05" title="ONE PLATFORM, THREE RESPONSIBILITIES" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {DIVISIONS.map((d, i) => (
            <Link
              key={d.title}
              href={`/${d.title.toLowerCase()}`}
              className={`${d.color} p-8 min-h-[240px] flex flex-col justify-between relative overflow-hidden group`}
            >
              <span className="text-4xl">{d.icon}</span>
              <div>
                <h3 className={`font-heading font-bold text-xl ${d.color.includes("ivory") ? "" : "text-white"}`}>
                  {d.title}
                </h3>
                <p className={`text-sm mt-2 ${d.color.includes("ivory") ? "text-silver-graphite" : "text-white/70"}`}>
                  {d.desc}
                </p>
              </div>
              {i < 2 && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl opacity-30 group-hover:opacity-60 transition-opacity hidden md:block">
                  →
                </span>
              )}
            </Link>
          ))}
        </div>
      </Section>

      {/* 06 Leadership */}
      <Section>
        <SectionEyebrow number="06" title="LEADERSHIP" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          <div className="relative aspect-[3/4] max-w-md bg-soft-concrete">
            <div className="absolute inset-0 flex items-center justify-center text-silver-graphite">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-arch-black/10 mx-auto mb-4" />
                <p className="font-heading font-bold">Managing Director</p>
                <p className="text-sm text-silver-graphite">R. B. Shah</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["General Manager", "Project Leadership", "Engineering Leadership"].map((role) => (
              <div key={role} className="bg-soft-concrete p-4 text-center">
                <div className="w-16 h-20 bg-arch-black/10 mx-auto mb-3" />
                <p className="text-xs font-mono text-nebco-red uppercase">Director</p>
                <p className="text-xs font-semibold mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 07 Credentials */}
      <Section dark>
        <SectionEyebrow number="07" title="CREDENTIALS" className="text-nebco-red" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "A-Class Capability", desc: "A-Class construction company in Nepal. Reg. No. 15803/057/058." },
            { title: "Committed to Quality", desc: "Integrity and continuity across three generations of execution." },
            { title: "Authoritative Guidance", desc: "Independent firm with deep market understanding in Nepal." },
          ].map((c) => (
            <div key={c.title}>
              <div className="w-12 h-12 border border-nebco-red rounded-full flex items-center justify-center text-nebco-red mb-4">
                ✓
              </div>
              <h3 className="font-heading font-bold text-lg">{c.title}</h3>
              <p className="text-white/60 text-sm mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        title="A Stronger Way to Move Projects Forward"
        buttonLabel="Discuss Your Project"
        buttonHref="/contact?type=project"
        variant="red"
      />
    </>
  );
}
