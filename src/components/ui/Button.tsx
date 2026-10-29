import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "flame" | "light";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly href?: string;
  readonly isExternal?: boolean;
  readonly icon?: React.ReactNode;
  readonly iconPosition?: "left" | "right";
  readonly fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  flame:
    "bg-gradient-to-r from-[#0284c7] to-[#00d2ee] text-[#060d17] font-bold shadow-[0_12px_36px_rgba(0,210,238,0.32)] hover:shadow-[0_16px_48px_rgba(0,210,238,0.48)] active:translate-y-px",
  light:
    "bg-white text-[#060d17] font-semibold shadow-[0_10px_26px_rgba(0,0,0,0.35)] hover:bg-[#e0f7fa] active:translate-y-px",
  primary:
    "bg-gradient-to-r from-[#0284c7] to-[#00d2ee] text-[#060d17] font-bold shadow-md hover:shadow-lg active:translate-y-px",
  secondary:
    "bg-[rgba(11,25,44,0.65)] text-white border border-[var(--hair)] hover:border-[#00d2ee]/50 active:translate-y-px",
  outline:
    "border border-[var(--hair)] text-white hover:bg-[#00d2ee]/10 hover:border-[#00d2ee]/40 active:translate-y-px",
  ghost:
    "text-white/70 hover:text-white hover:bg-white/10 active:translate-y-px",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs font-semibold px-3.5 py-1.5 rounded-full gap-1.5",
  md: "text-sm font-semibold px-5 py-2.5 rounded-full gap-2",
  lg: "text-base font-semibold px-6 py-3 rounded-full gap-2.5",
};

export function Button({
  variant = "flame",
  size = "md",
  href,
  isExternal = false,
  icon,
  iconPosition = "left",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ee] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
