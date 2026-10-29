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
  teal: "bg-[#E7F3F2] text-[#147D78] border-[#147D78]/25",
  amber: "bg-[#FBF4EB] text-[#A8742A] border-[#D6A45D]/35",
  navy: "bg-[#E2DDD5]/40 text-[#14263D] border-[#14263D]/20",
  slate: "bg-[#F7F5F0] text-[#647184] border-[#E2DDD5]",
};

export function SectionHeading({
  badge,
  badgeAccent = "teal",
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
