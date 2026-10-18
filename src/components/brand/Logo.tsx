import React from "react";
import Link from "next/link";

export interface LogoProps {
  readonly size?: "sm" | "md" | "lg" | "xl" | "2xl";
  readonly asLink?: boolean;
  readonly href?: string;
  readonly className?: string;
  readonly showCursor?: boolean;
  readonly textId?: string;
}

const sizeClasses: Record<
  NonNullable<LogoProps["size"]>,
  { container: string; dotCom: string; cursor: string }
> = {
  sm: {
    container: "text-base tracking-tight",
    dotCom: "text-sm ml-0.5",
    cursor: "h-4 w-[2px]",
  },
  md: {
    container: "text-lg sm:text-xl tracking-tight",
    dotCom: "text-base sm:text-lg ml-0.5",
    cursor: "h-5 w-[2px]",
  },
  lg: {
    container: "text-2xl sm:text-3xl tracking-tight",
    dotCom: "text-xl sm:text-2xl ml-0.5",
    cursor: "h-7 w-[2.5px]",
  },
  xl: {
    container: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight",
    dotCom: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-1",
    cursor: "h-8 sm:h-10 md:h-12 w-[3px]",
  },
  "2xl": {
    container: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight",
    dotCom: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-1.5",
    cursor: "h-10 sm:h-12 md:h-16 w-[3.5px]",
  },
};

export function Logo({
  size = "md",
  asLink = true,
  href = "#home",
  className = "",
  showCursor = false,
  textId,
}: LogoProps) {
  const currentSize = sizeClasses[size];

  const content = (
    <span
      id={textId}
      className={`inline-flex items-baseline font-bold select-none ${currentSize.container} ${className}`}
    >
      <span className="text-slate-900 font-extrabold tracking-tight">
        AdotShelor
      </span>
      <span className={`font-bold text-cyan-600 ${currentSize.dotCom}`}>
        .com
      </span>
      {showCursor && (
        <span
          className={`inline-block bg-cyan-500 ml-1 translate-y-[0.1em] animate-pulse ${currentSize.cursor}`}
          aria-hidden="true"
        />
      )}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 rounded-lg py-1 px-1.5 -mx-1.5 transition-opacity hover:opacity-90"
        aria-label="AdotShelor.com Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
