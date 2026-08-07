import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const BENEFITS = [
  { id: "decisions", label: "Better Decisions", Icon: IconDecisions },
  { id: "risk", label: "Lower Risk", Icon: IconRisk },
  { id: "returns", label: "Stronger Returns", Icon: IconReturns },
  { id: "value", label: "Long-Term Value", Icon: IconValue },
] as const;

function IconDecisions({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.45" />
      <circle cx="24" cy="24" r="5.25" stroke="currentColor" strokeWidth="1.35" />
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M30.5 17.5 L36 12 L34.5 19.5 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 7 L38 14 V26 C38 34.5 31.5 40.5 24 42 C16.5 40.5 10 34.5 10 26 V14 Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M17 24.5 L21.5 29 L31 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconReturns({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M10 34 V22 h6 v12 h5 V18 h5 v16 h5 V14 h7 v20" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M12 28 C18 22 22 20 30 14" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      <path d="M26 14 h6 v6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconValue({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 34 V18 h8 v16" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M16 34 V12 h10 v22" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M26 34 V20 h10 v14" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M36 34 V24 h6 v10" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M8 34 h34" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function EngageEarlyCtaWireframe() {
  return (
    <svg
      className="consulting-engage-early-cta__wireframe"
      viewBox="0 0 720 420"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <g stroke="white" strokeWidth="1.1">
        <rect x="80" y="60" width="180" height="300" />
        <line x1="80" y1="110" x2="260" y2="110" />
        <line x1="80" y1="160" x2="260" y2="160" />
        <line x1="80" y1="210" x2="260" y2="210" />
        <line x1="80" y1="260" x2="260" y2="260" />
        <line x1="80" y1="310" x2="260" y2="310" />
        <line x1="140" y1="60" x2="140" y2="360" />
        <line x1="200" y1="60" x2="200" y2="360" />
        <rect x="290" y="100" width="120" height="260" />
        <line x1="290" y1="150" x2="410" y2="150" />
        <line x1="290" y1="200" x2="410" y2="200" />
        <line x1="290" y1="250" x2="410" y2="250" />
        <line x1="290" y1="300" x2="410" y2="300" />
        <line x1="350" y1="100" x2="350" y2="360" />
        <rect x="440" y="80" width="150" height="280" />
        <line x1="440" y1="130" x2="590" y2="130" />
        <line x1="440" y1="180" x2="590" y2="180" />
        <line x1="440" y1="230" x2="590" y2="230" />
        <line x1="440" y1="280" x2="590" y2="280" />
        <line x1="515" y1="80" x2="515" y2="360" />
        <rect x="620" y="120" width="90" height="240" />
        <line x1="620" y1="170" x2="710" y2="170" />
        <line x1="620" y1="220" x2="710" y2="220" />
        <line x1="620" y1="270" x2="710" y2="270" />
        <line x1="665" y1="120" x2="665" y2="360" />
        <line x1="60" y1="360" x2="680" y2="360" strokeWidth="0.9" opacity="0.7" />
        <path d="M80 360 L380 240 L590 360" strokeWidth="0.9" opacity="0.55" />
      </g>
    </svg>
  );
}

export function ConsultingEngageEarlySection() {
  return (
    <>
      <section className="consulting-engage-early">
        <div className="consulting-engage-early__inner mx-auto max-w-[1440px]">
          <p className="consulting-engage-early__eyebrow">07 / WHY ENGAGE EARLY</p>

          <div className="consulting-engage-early__layout">
            <div className="consulting-engage-early__media">
              <Image
                src={IMAGES.consultingEngageEarly}
                alt="Construction team overlooking the city at sunset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>

            <div className="consulting-engage-early__content">
              <h2 className="consulting-engage-early__heading">
                The earlier the questions are answered, the stronger the project becomes.
              </h2>
              <p className="consulting-engage-early__body">
                Early clarity reduces risk, protects money and time, and creates better buildings, better
                returns and lasting value.
              </p>

              <ul className="consulting-engage-early__benefits">
                {BENEFITS.map(({ id, label, Icon }) => (
                  <li key={id} className="consulting-engage-early__benefit">
                    <span className="consulting-engage-early__benefit-icon">
                      <Icon className="h-full w-full" />
                    </span>
                    <span className="consulting-engage-early__benefit-label">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="consulting-engage-early-cta relative overflow-hidden bg-nebco-red">
        <EngageEarlyCtaWireframe />
        <div className="consulting-engage-early-cta__inner relative z-10 mx-auto max-w-[1440px]">
          <h2 className="consulting-engage-early-cta__heading">What should this property become?</h2>
          <p className="consulting-engage-early-cta__body">
            Let&apos;s explore the possibilities—together.
          </p>
          <Link href="/contact?type=land-evaluation" className="consulting-engage-early-cta__btn">
            Evaluate My Property
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
