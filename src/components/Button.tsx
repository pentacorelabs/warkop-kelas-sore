import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "outline" | "light" | "outline-light";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-forest text-cream hover:bg-forest-deep focus-visible:outline-forest",
  outline:
    "border border-ink/30 text-ink hover:bg-ink hover:text-cream focus-visible:outline-forest",
  light: "bg-cream text-forest hover:bg-white focus-visible:outline-cream",
  "outline-light":
    "border border-cream/50 text-cream hover:bg-cream hover:text-forest focus-visible:outline-cream",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

/**
 * Tombol CTA serbaguna. Selalu dirender sebagai anchor agar mendukung
 * navigasi internal (#) dan tautan eksternal (WhatsApp, Google Maps, Instagram).
 */
export function Button({ href, variant = "primary", className, children, ...rest }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
