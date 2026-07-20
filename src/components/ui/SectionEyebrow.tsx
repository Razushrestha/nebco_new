interface SectionEyebrowProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionEyebrow({ number, title, className = "" }: SectionEyebrowProps) {
  return (
    <p className={`section-eyebrow mb-4 ${className}`}>
      {number} / {title}
    </p>
  );
}
