import React from "react";
import Link from "next/link";
import { NavyLogo } from "./Icons";

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
  { container: string; mark: string; dotCom: string; cursor: string }
> = {
  sm: {
    container: "text-base tracking-tight gap-1.5",
    mark: "w-5 h-5",
    dotCom: "text-xs ml-0.5",
    cursor: "h-3.5 w-[2px]",
  },
  md: {
    container: "text-lg sm:text-xl tracking-tight gap-2",
    mark: "w-6 h-6",
    dotCom: "text-sm sm:text-base ml-0.5",
    cursor: "h-4 w-[2px]",
  },
  lg: {
    container: "text-2xl sm:text-3xl tracking-tight gap-2.5",
    mark: "w-8 h-8",
    dotCom: "text-lg sm:text-xl ml-0.5",
    cursor: "h-6 w-[2.5px]",
  },
  xl: {
    container: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight gap-3",
    mark: "w-10 h-10 sm:w-12 sm:h-12",
    dotCom: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-1",
    cursor: "h-8 sm:h-10 md:h-12 w-[3px]",
  },
  "2xl": {
    container: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight gap-4",
    mark: "w-14 h-14 sm:w-16 sm:h-16",
    dotCom: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-1.5",
    cursor: "h-10 sm:h-12 md:h-16 w-[3.5px]",
  },
};

export function Logo({
  size = "md",
  asLink = true,
  href = "/",
  className = "",
  showCursor = false,
  textId,
}: LogoProps) {
  const currentSize = sizeClasses[size];

  const content = (
    <span
      id={textId}
      className={`inline-flex items-center font-bold select-none ${currentSize.container} ${className}`}
    >
      <NavyLogo className={`${currentSize.mark} shrink-0`} />
      <span className="inline-flex items-baseline font-bold">
        <span className="text-white font-semibold tracking-tight">
          AdotShelor
        </span>
        <span className={`font-semibold text-[#00D2EE] ${currentSize.dotCom}`}>
          .com
        </span>
        {showCursor && (
          <span
            className={`inline-block bg-[#00D2EE] ml-1 translate-y-[0.1em] animate-pulse ${currentSize.cursor}`}
            aria-hidden="true"
          />
        )}
      </span>
    </span>
  );

  if (asLink) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2EE] focus-visible:ring-offset-2 rounded-lg py-1 px-1.5 -mx-1.5 transition-opacity hover:opacity-90"
        aria-label="AdotShelor.com Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}
