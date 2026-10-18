import React from "react";
import { AccentColor } from "@/types/portfolio";

export interface SectionHeadingProps {
  readonly badge?: string;
  readonly badgeAccent?: AccentColor;
  readonly title: React.ReactNode;
  readonly subtitle?: string;
  readonly align?: "center" | "left";
  readonly id?: string;
  readonly className?: string;
}

const badgeColorMap: Record<AccentColor, string> = {
  cyan: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
  purple: "bg-purple-50 text-purple-800 border-purple-200/80",
  pink: "bg-pink-50 text-pink-800 border-pink-200/80",
  mint: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
  blue: "bg-blue-50 text-blue-800 border-blue-200/80",
};

export function SectionHeading({
  badge,
  badgeAccent = "cyan",
  title,
  subtitle,
  align = "center",
  id,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {badge && (
        <div className={`mb-3 inline-block ${isCenter ? "mx-auto" : ""}`}>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-2xs ${badgeColorMap[badgeAccent]}`}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        id={id}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
