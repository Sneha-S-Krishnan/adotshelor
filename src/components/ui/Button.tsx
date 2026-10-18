import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
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
  primary:
    "bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm hover:shadow-md hover:shadow-cyan-500/20 border border-cyan-500 active:translate-y-px",
  secondary:
    "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-xs hover:border-slate-300 active:translate-y-px",
  outline:
    "border border-cyan-600/40 text-cyan-700 hover:bg-cyan-50/70 hover:border-cyan-600 active:translate-y-px",
  ghost:
    "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 active:translate-y-px",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-xs font-semibold px-3 py-1.5 rounded-full gap-1.5",
  md: "text-sm font-semibold px-5 py-2.5 rounded-full gap-2",
  lg: "text-base font-semibold px-6 py-3 rounded-full gap-2.5",
};

export function Button({
  variant = "primary",
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
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

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
    <button
      type={props.type ?? "button"}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
