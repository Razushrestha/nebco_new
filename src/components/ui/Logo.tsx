import Image from "next/image";
import Link from "next/link";

export const LOGO_PATH = "/nebco-light-ligi.png";
/** Square-cropped hub mark - artwork centroid at 50%/50% for ring centering. */
export const HUB_LOGO_PATH = "/nebco-hub-mark.png";

export type LogoSize = "header" | "footer" | "compact" | "hub";

const SIZE_CLASS: Record<LogoSize, string> = {
  header: "h-14 w-auto sm:h-[4.25rem]",
  footer: "h-[5rem] w-auto sm:h-[5.5rem]",
  compact: "h-11 w-auto",
  hub: "h-14 w-auto sm:h-16",
};

interface LogoImageProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

/** Brand mark image - use inside layouts or diagrams (no link). */
export function LogoImage({ size = "header", className = "", priority = false }: LogoImageProps) {
  return (
    <Image
      src={LOGO_PATH}
      alt="NEBCO - A Class Company"
      width={180}
      height={108}
      priority={priority}
      className={`object-contain object-left ${SIZE_CLASS[size]} ${className}`}
    />
  );
}

interface LogoProps {
  variant?: "light" | "dark" | "hero";
  className?: string;
  /** @deprecated Logo artwork includes the tagline. */
  showSubtitle?: boolean;
}

function variantToSize(variant: LogoProps["variant"]): LogoSize {
  if (variant === "light") return "footer";
  return "header";
}

/** Site logo - links to home. */
export function Logo({ variant = "dark", className = "", showSubtitle: _showSubtitle = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex shrink-0 ${className}`} aria-label="NEBCO home">
      <LogoImage size={variantToSize(variant)} priority={variant === "hero" || variant === "dark"} />
    </Link>
  );
}
