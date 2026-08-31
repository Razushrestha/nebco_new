import Image from "next/image";
import { IMAGES } from "@/lib/images";

export function ConsultingQuestionSection() {
  return (
    <section className="consulting-question relative overflow-hidden">
      <div className="consulting-question__grid">
        {/* Left - copy */}
        <div className="consulting-question__copy">
          <p className="consulting-question__eyebrow">
            01 / THE QUESTION BEFORE THE DRAWING
          </p>

          <h2 className="consulting-question__heading">
            <span className="consulting-question__heading-line">
              A project can be technically buildable
            </span>
            <span className="consulting-question__heading-line">
              and still be commercially weak.
            </span>
          </h2>

          <p className="consulting-question__body">
            <span className="consulting-question__body-line">
              We help you answer the right questions early about market,
            </span>
            <span className="consulting-question__body-line">
              finance, use and execution so every decision strengthens
            </span>
            <span className="consulting-question__body-line">
              the outcome and protects your investment.
            </span>
          </p>
        </div>

        {/* Right - panoramic transition image (full-bleed to viewport edge) */}
        <div className="consulting-question__visual">
          <Image
            src={IMAGES.consultingQuestionVisual}
            alt="Vacant site context transitioning into an architectural development concept"
            width={4020}
            height={1056}
            className="consulting-question__image"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            quality={100}
          />
        </div>
      </div>

      <span className="consulting-question__accent" aria-hidden="true" />
    </section>
  );
}
