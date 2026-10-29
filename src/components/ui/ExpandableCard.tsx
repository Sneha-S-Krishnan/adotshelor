"use client";

import React, { useState, useId } from "react";
import { AccentColor } from "@/types/portfolio";
import { Button } from "./Button";

export interface ExpandableCardProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly category?: string;
  readonly statusBadge?: string;
  readonly isPlaceholder?: boolean;
  readonly accentColor?: AccentColor;
  readonly icon?: React.ReactNode;
  readonly tags?: readonly string[];
  readonly externalUrl?: string;
  readonly externalUrlLabel?: string;
  readonly repoUrl?: string;
  readonly expandedContent: React.ReactNode;
  readonly defaultExpanded?: boolean;
  readonly className?: string;
}

const accentMap: Record<
  AccentColor,
  {
    border: string;
    iconBg: string;
    expandBtn: string;
    expandedPanel: string;
  }
> = {
  teal: {
    border: "hover:border-[#147D78]/60 focus-within:border-[#147D78]",
    iconBg: "bg-[#E7F3F2] text-[#147D78] border-[#147D78]/25",
    expandBtn: "text-[#147D78] hover:text-[#0F635F] hover:bg-[#E7F3F2]",
    expandedPanel: "bg-[#E7F3F2]/40 border-[#147D78]/25",
  },
  amber: {
    border: "hover:border-[#D6A45D]/60 focus-within:border-[#D6A45D]",
    iconBg: "bg-[#FBF4EB] text-[#A8742A] border-[#D6A45D]/30",
    expandBtn: "text-[#A8742A] hover:text-[#8C5D1E] hover:bg-[#FBF4EB]",
    expandedPanel: "bg-[#FBF4EB]/40 border-[#D6A45D]/30",
  },
  navy: {
    border: "hover:border-[#14263D]/60 focus-within:border-[#14263D]",
    iconBg: "bg-[#F7F5F0] text-[#14263D] border-[#14263D]/20",
    expandBtn: "text-[#14263D] hover:bg-[#EBE7DE]/60",
    expandedPanel: "bg-[#F7F5F0] border-[#E2DDD5]",
  },
  slate: {
    border: "hover:border-[#647184]/60 focus-within:border-[#647184]",
    iconBg: "bg-[#FAF8F5] text-[#647184] border-[#E2DDD5]",
    expandBtn: "text-[#647184] hover:text-[#14263D] hover:bg-[#EBE7DE]/40",
    expandedPanel: "bg-[#FAF8F5] border-[#E2DDD5]",
  },
};

export function ExpandableCard({
  title,
  subtitle,
  category,
  statusBadge,
  isPlaceholder = false,
  accentColor = "teal",
  icon,
  tags,
  externalUrl,
  externalUrlLabel = "Visit Website",
  repoUrl,
  expandedContent,
  defaultExpanded = false,
  className = "",
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentId = useId();
  const currentAccent = accentMap[accentColor];

  return (
    <article
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 ${currentAccent.border} ${className}`}
    >
      <div>
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            {icon && (
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl border ${currentAccent.iconBg} shrink-0`}
              >
                {icon}
              </div>
            )}
            <div>
              {category && (
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {category}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {statusBadge && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                {statusBadge}
              </span>
            )}
            {isPlaceholder && (
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/80"
                title="Verified development placeholder"
              >
                Placeholder
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
          {title}
        </h3>

        {/* Subtitle / summary */}
        {subtitle && (
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Inline Expandable Details Panel */}
        {isExpanded && (
          <div
            id={contentId}
            className={`mt-5 pt-4 pb-2 px-4 rounded-xl border text-sm text-slate-700 transition-all duration-200 ${currentAccent.expandedPanel}`}
          >
            <div className="space-y-3">{expandedContent}</div>

            {/* External Action Links within expanded details */}
            {(externalUrl || repoUrl) && (
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-2.5">
                {externalUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    href={externalUrl}
                    isExternal
                    icon={
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    }
                    iconPosition="right"
                  >
                    {externalUrlLabel}
                  </Button>
                )}
                {repoUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={repoUrl}
                    isExternal
                  >
                    Source Code
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Action Footer with Inline Toggle */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${currentAccent.expandBtn}`}
        >
          <span>{isExpanded ? "Hide Details" : "View Details"}</span>
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

        {!isExpanded && externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-500 hover:text-cyan-700 transition-colors inline-flex items-center gap-1"
          >
            <span>Open Link</span>
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
