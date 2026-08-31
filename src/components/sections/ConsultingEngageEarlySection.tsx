import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const BENEFITS = [
  {
    id: "decisions",
    label: "Better Decisions",
    iconSrc: "/images/engage-icons/better-decisions.png",
  },
  {
    id: "risk",
    label: "Lower Risk",
    iconSrc: "/images/engage-icons/lower-risk.png",
  },
  {
    id: "returns",
    label: "Stronger Returns",
    iconSrc: "/images/engage-icons/stronger-returns.png",
  },
  {
    id: "value",
    label: "Long-Term Value",
    iconSrc: "/images/engage-icons/long-term-value.png",
  },
] as const;

export function ConsultingEngageEarlySection() {
  return (
    <>
      <section className="consulting-engage-early">
        <div className="consulting-engage-early__inner mx-auto w-full max-w-[1440px]">
          <p className="consulting-engage-early__eyebrow">07 / WHY ENGAGE EARLY</p>

          <div className="consulting-engage-early__layout">
            <div className="consulting-engage-early__media">
              <Image
                src={IMAGES.consultingEngageEarly}
                alt="Construction team overlooking the city at sunset"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 48vw"
                priority
              />
            </div>

            <div className="consulting-engage-early__content">
              <h2 className="consulting-engage-early__heading">
                The earlier the questions are answered,
                <br />
                the stronger the project becomes.
              </h2>
              <p className="consulting-engage-early__body">
                Early clarity reduces risk, protects money and time, and creates better buildings, better
                returns and lasting value.
              </p>

              <ul className="consulting-engage-early__benefits">
                {BENEFITS.map(({ id, label, iconSrc }) => (
                  <li key={id} className="consulting-engage-early__benefit">
                    <span className="consulting-engage-early__benefit-icon" aria-hidden="true">
                      <Image
                        src={iconSrc}
                        alt=""
                        width={96}
                        height={96}
                        className="consulting-engage-early__benefit-img"
                      />
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
        <div className="consulting-engage-early-cta__inner relative z-10 mx-auto max-w-[1440px]">
          <h2 className="consulting-engage-early-cta__heading">
            What should this
            <br />
            property become?
          </h2>
          <p className="consulting-engage-early-cta__body">
            Let&apos;s explore the possibilities - together.
          </p>

          <div className="consulting-engage-early-cta__action">
            <div className="consulting-engage-early-cta__wireframe" aria-hidden="true">
              <Image
                src={IMAGES.consultingCtaWireframe}
                alt=""
                fill
                className="object-contain object-right"
                sizes="(max-width: 1024px) 55vw, 420px"
              />
            </div>
            <Link href="/contact?type=land-evaluation" className="consulting-engage-early-cta__btn">
              Evaluate My Property
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
