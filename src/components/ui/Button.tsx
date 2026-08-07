import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-white" | "white";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-nebco-red text-white hover:bg-nebco-red-hover border border-nebco-red",
  secondary:
    "bg-arch-black text-white hover:bg-arch-black-soft border border-arch-black",
  outline:
    "bg-transparent text-nebco-red border border-nebco-red hover:bg-nebco-red hover:text-white",
  "outline-white":
    "bg-transparent text-white border border-white hover:bg-white hover:text-arch-black",
  white:
    "bg-white text-arch-black hover:bg-ivory border border-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 type-caption font-heading font-semibold tracking-wide uppercase transition-all duration-200";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <Chevron />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      <Chevron />
    </button>
  );
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
      <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
