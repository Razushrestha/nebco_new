import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  red?: boolean;
  id?: string;
}

export function Section({ children, className = "", dark = false, red = false, id }: SectionProps) {
  const bg = red
    ? "bg-nebco-red text-white"
    : dark
      ? "bg-arch-black text-white"
      : "bg-ivory-light text-arch-black";

  return (
    <section id={id} className={`py-16 lg:py-24 ${bg} ${className}`}>
      <div className="container-nebco">{children}</div>
    </section>
  );
}
