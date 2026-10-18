"use client";

import React, { useState, useId } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES_DATA } from "@/data/portfolioData";
import { ServiceItem, AccentColor } from "@/types/portfolio";

const accentStyles: Record<
  AccentColor,
  {
    border: string;
    badge: string;
    iconBg: string;
    panelBg: string;
    button: string;
  }
> = {
  cyan: {
    border: "hover:border-cyan-300 focus-within:border-cyan-400",
    badge: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
    iconBg: "bg-cyan-50 text-cyan-700 border-cyan-100",
    panelBg: "bg-cyan-50/40 border-cyan-100/90",
    button: "text-cyan-700 hover:text-cyan-800 hover:bg-cyan-50",
  },
  purple: {
    border: "hover:border-purple-300 focus-within:border-purple-400",
    badge: "bg-purple-50 text-purple-800 border-purple-200/80",
    iconBg: "bg-purple-50 text-purple-700 border-purple-100",
    panelBg: "bg-purple-50/40 border-purple-100/90",
    button: "text-purple-700 hover:text-purple-800 hover:bg-purple-50",
  },
  mint: {
    border: "hover:border-emerald-300 focus-within:border-emerald-400",
    badge: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    panelBg: "bg-emerald-50/40 border-emerald-100/90",
    button: "text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50",
  },
  pink: {
    border: "hover:border-pink-300 focus-within:border-pink-400",
    badge: "bg-pink-50 text-pink-800 border-pink-200/80",
    iconBg: "bg-pink-50 text-pink-700 border-pink-100",
    panelBg: "bg-pink-50/40 border-pink-100/90",
    button: "text-pink-700 hover:text-pink-800 hover:bg-pink-50",
  },
  blue: {
    border: "hover:border-blue-300 focus-within:border-blue-400",
    badge: "bg-blue-50 text-blue-800 border-blue-200/80",
    iconBg: "bg-blue-50 text-blue-700 border-blue-100",
    panelBg: "bg-blue-50/40 border-blue-100/90",
    button: "text-blue-700 hover:text-blue-800 hover:bg-blue-50",
  },
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const panelId = useId();
  const styles = accentStyles[service.accentColor];

  return (
    <article
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 ${styles.border}`}
    >
      <div>
        {/* Category & Status Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {service.category}
          </span>
          {service.isProposed && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/80"
              title="Proposed service category under business review"
            >
              Proposed Offering
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
          {service.title}
        </h3>

        {/* Short Summary */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100/80 text-slate-700 border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Inline Expandable Details Panel */}
        {isExpanded && (
          <div
            id={panelId}
            className={`mt-5 pt-4 pb-3 px-4 rounded-xl border text-sm text-slate-700 transition-all duration-200 ${styles.panelBg}`}
          >
            {/* Approach */}
            <div className="mb-3">
              <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wider mb-1">
                Engineering Approach:
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.approach}
              </p>
            </div>

            {/* Deliverables List */}
            <div>
              <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wider mb-1.5">
                Key Deliverables:
              </h4>
              <ul className="space-y-1 text-xs text-slate-600">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Accessible Inline Toggle Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${styles.button}`}
        >
          <span>{isExpanded ? "Collapse Details" : "View Details & Scope"}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <span className="text-[11px] text-slate-400">
          {isExpanded ? "Details active" : "Expandable inline"}
        </span>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section
      id="our-services"
      className="py-20 sm:py-28 border-t border-slate-200/70 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        badge="Our Services"
        badgeAccent="cyan"
        title={
          <>
            Technical Capabilities &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
              Service Solutions
            </span>
          </>
        }
        subtitle="Proposed service offerings engineered with strict type safety, responsive interfaces, and modern standards. Expand any category for detailed scope."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
