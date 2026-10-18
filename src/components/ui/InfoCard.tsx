import React from "react";
import { AccentColor } from "@/types/portfolio";

export interface InfoCardProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly category?: string;
  readonly isPlaceholder?: boolean;
  readonly accentColor?: AccentColor;
  readonly icon?: React.ReactNode;
  readonly tags?: readonly string[];
  readonly children?: React.ReactNode;
  readonly footer?: React.ReactNode;
  readonly className?: string;
}

const accentBorderMap: Record<AccentColor, string> = {
  cyan: "hover:border-cyan-300 focus-within:border-cyan-400",
  purple: "hover:border-purple-300 focus-within:border-purple-400",
  pink: "hover:border-pink-300 focus-within:border-pink-400",
  mint: "hover:border-emerald-300 focus-within:border-emerald-400",
  blue: "hover:border-blue-300 focus-within:border-blue-400",
};

const iconBgMap: Record<AccentColor, string> = {
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  pink: "bg-pink-50 text-pink-700 border-pink-100",
  mint: "bg-emerald-50 text-emerald-700 border-emerald-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
};

export function InfoCard({
  title,
  subtitle,
  category,
  isPlaceholder = false,
  accentColor = "cyan",
  icon,
  tags,
  children,
  footer,
  className = "",
}: InfoCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 ${accentBorderMap[accentColor]} ${className}`}
    >
      <div>
        {/* Top meta row: Category, icon, or placeholder tag */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            {icon && (
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl border ${iconBgMap[accentColor]} shrink-0`}
              >
                {icon}
              </div>
            )}
            {category && (
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {category}
              </span>
            )}
          </div>

          {isPlaceholder && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/80"
              title="Verified development placeholder"
            >
              Placeholder
            </span>
          )}
        </div>

        {/* Title & subtitle */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-950 transition-colors">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Content body */}
        {children && <div className="mt-4">{children}</div>}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100/80 text-slate-700 border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer slot */}
      {footer && (
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
          {footer}
        </div>
      )}
    </article>
  );
}
