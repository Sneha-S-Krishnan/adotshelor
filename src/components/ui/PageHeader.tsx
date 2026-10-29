import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface PageHeaderProps {
  readonly badge: string;
  readonly title: string;
  readonly highlightedWord?: string;
  readonly description: string;
  readonly parentPage?: { label: string; href: string };
  readonly actions?: React.ReactNode;
}

export function PageHeader({
  badge,
  title,
  highlightedWord,
  description,
  parentPage,
  actions,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[var(--hair-soft)] overflow-hidden">
      {/* Background radial atmosphere */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,_rgba(0,210,238,0.12),_transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb if parent page exists */}
        {parentPage && (
          <nav className="flex items-center gap-2 text-xs font-medium text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href={parentPage.href} className="hover:text-[#00d2ee] transition-colors">
              {parentPage.label}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-[#00d2ee]">{badge}</span>
          </nav>
        )}

        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ee]" />
            {badge}
          </span>

          {/* Title with display font and italic accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            {title}{" "}
            {highlightedWord && (
              <em className="font-['Instrument_Serif',serif] font-normal italic text-[#00d2ee]">
                {highlightedWord}
              </em>
            )}
          </h1>

          {/* Subtitle description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed font-normal">
            {description}
          </p>

          {/* Optional actions */}
          {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
}

