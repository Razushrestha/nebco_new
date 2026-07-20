import Image from "next/image";
import Link from "next/link";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { Section } from "@/components/sections/Section";
import { IMAGES } from "@/lib/images";

const CATEGORIES = [
  "Construction", "Real Estate Development", "Project Feasibility", "Landowner Guidance",
  "NRN Property", "Commercial Leasing", "Regulations", "NEBCO News",
];

const ARTICLES = [
  { title: "Contractor vs. Development Consultant", excerpt: "Explain NEBCO Consulting differentiation.", image: IMAGES.workersPlans },
  { title: "How to Test Project Feasibility", excerpt: "Developer/owner considering investment.", image: IMAGES.calculatorPlans },
  { title: "Managing a Project from Abroad", excerpt: "Overseas lead generation for NRNs.", image: IMAGES.videoCall },
  { title: "Tenants Before Construction?", excerpt: "Commercial owners and built-to-suit strategy.", image: IMAGES.commercialBuilding },
  { title: "Joint Development or Owner-Led?", excerpt: "Landowners comparing structures.", image: IMAGES.heroBlueprint },
  { title: "Reliable Construction Quotation", excerpt: "Improve construction lead quality.", image: IMAGES.constructionSite },
];

const AUDIENCE_CARDS = [
  { title: "For Landowners", icon: "🏠", desc: "Evaluate what your property can become.", href: "/contact?type=land-evaluation" },
  { title: "For NRNs", icon: "🌐", desc: "Develop in Nepal with local coordination.", href: "/nrn" },
  { title: "For Developers & Business", icon: "🏢", desc: "Plan and manage commercial assets.", href: "/contact?type=project" },
];

export default function InsightsPage() {
  return (
    <>
      <HeroSplit
        title="Practical insight for better property and project decisions."
        subtitle="Guidance from the intersection of construction, development planning, finance, coordination and market reality in Nepal."
        image={IMAGES.calculatorPlans}
        imageAlt="Construction planning"
        secondaryCta={{ label: "Explore Consulting", href: "/consulting" }}
      />

      {/* Category sub-nav */}
      <section className="bg-white border-b border-soft-concrete py-3 overflow-x-auto">
        <div className="container-nebco flex gap-6 min-w-max">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={`text-[10px] uppercase tracking-widest font-medium whitespace-nowrap ${
                i === 0 ? "text-nebco-red border-b-2 border-nebco-red pb-1" : "text-silver-graphite"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Latest thinking */}
      <Section>
        <p className="section-eyebrow mb-6">01 / Latest Thinking</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured */}
          <div className="relative min-h-[480px] overflow-hidden group">
            <Image src={IMAGES.cityKathmandu} alt="Kathmandu" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-arch-black/90 via-arch-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl leading-tight">
                What can you develop on your land in Kathmandu?
              </h2>
              <div className="flex gap-4 mt-4 text-xs text-white/60">
                <span>NEBCO Team</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <Link href="/insights" className="inline-block mt-4 text-nebco-red text-sm font-semibold uppercase tracking-wide hover:underline">
                Read Article →
              </Link>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ARTICLES.map((article) => (
              <Link key={article.title} href="/insights" className="group border border-soft-concrete hover:border-nebco-red/30 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm leading-snug group-hover:text-nebco-red transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-silver-graphite mt-2">{article.excerpt}</p>
                  <span className="text-xs text-nebco-red mt-2 inline-block">3 min read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Market perspective */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-2xl">Market Perspective: Kathmandu Valley</h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Practical insights on development potential, market demand and project viability in Nepal&apos;s
              primary urban corridor.
            </p>
            <Link href="/insights" className="inline-block mt-6 px-5 py-2.5 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-arch-black transition-colors">
              Read All Market Perspectives →
            </Link>
          </div>
          <div className="flex items-end justify-center gap-2 h-48">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="w-8 bg-nebco-red/80" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="space-y-6">
            {["Market Dynamics", "NEBCO Analytics", "Latest Findings"].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-pale-gold text-pale-gold flex items-center justify-center text-xs shrink-0">◆</div>
                <div>
                  <p className="font-heading font-bold text-sm uppercase tracking-wide">{item}</p>
                  <p className="text-xs text-white/50 mt-1">Data-driven perspective on Nepal&apos;s built environment.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Audience cards */}
      <Section className="bg-soft-concrete">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE_CARDS.map((card) => (
            <div key={card.title} className="bg-white p-8 text-center">
              <span className="text-3xl">{card.icon}</span>
              <h3 className="font-heading font-bold mt-4">{card.title}</h3>
              <p className="text-sm text-silver-graphite mt-2">{card.desc}</p>
              <Link href={card.href} className="inline-block mt-4 text-nebco-red text-xs font-semibold uppercase tracking-wide hover:underline">
                Explore More →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <section className="bg-nebco-red text-white py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
          <svg viewBox="0 0 200 300" className="h-full w-full">
            <path d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 Z" fill="white" />
          </svg>
        </div>
        <div className="container-nebco relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl">
              Follow the decisions shaping Nepal&apos;s built environment.
            </h2>
            <p className="mt-3 text-white/80 text-sm">Practical insights delivered to your inbox.</p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white text-arch-black text-sm placeholder:text-silver-graphite outline-none"
            />
            <button type="submit" className="px-6 py-3 border-2 border-white text-white text-sm font-semibold uppercase tracking-wide hover:bg-white hover:text-nebco-red transition-colors shrink-0">
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
