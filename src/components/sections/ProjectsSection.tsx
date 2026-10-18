"use client";

import React, { useState, useId } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ProjectItem } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";

function ProjectCard({ project }: { project: ProjectItem }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const detailsId = useId();

  return (
    <article className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 hover:border-cyan-300">
      <div>
        {/* Top Header: Status and Placeholder indicator */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{project.status}</span>
          </span>

          {project.isPlaceholder ? (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/80"
              title="Verified development placeholder"
            >
              Placeholder
            </span>
          ) : (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-cyan-50 text-cyan-800 border border-cyan-200/80"
              title="Live Production Build"
            >
              Verified Project
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Problem Addressed */}
        <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
            Problem Addressed:
          </span>
          <p className="text-xs text-slate-700 leading-relaxed">
            {project.problemAddressed}
          </p>
        </div>

        {/* Technology Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Inline Expandable Details */}
        {isExpanded && (
          <div
            id={detailsId}
            className="mt-5 pt-4 pb-3 px-4 rounded-xl border border-cyan-100 bg-cyan-50/30 text-slate-700 space-y-3.5 transition-all duration-200"
          >
            <div>
              <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wider mb-1">
                Main Features:
              </h4>
              <ul className="space-y-1 text-xs text-slate-600">
                {project.mainFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold shrink-0">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-cyan-100/70">
              <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wider mb-1">
                Technical Details:
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.detailedInformation}
              </p>
            </div>

            {/* External Links */}
            {(project.externalUrl || project.repoUrl) && (
              <div className="pt-3 border-t border-cyan-100/70 flex flex-wrap gap-2.5">
                {project.externalUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    href={project.externalUrl}
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
                    Open Live Project
                  </Button>
                )}
                {project.repoUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={project.repoUrl}
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

      {/* Card Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg text-cyan-700 hover:text-cyan-800 hover:bg-cyan-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <span>{isExpanded ? "Collapse Details" : "View Architecture & Features"}</span>
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

        {!isExpanded && project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-500 hover:text-cyan-700 transition-colors inline-flex items-center gap-1"
          >
            <span>Live Site</span>
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

export function ProjectsSection() {
  return (
    <section
      id="our-projects"
      className="py-20 sm:py-28 border-t border-slate-200/70 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        badge="Our Projects"
        badgeAccent="mint"
        title={
          <>
            Project Portfolio &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              Technical Showcase
            </span>
          </>
        }
        subtitle="Active and planned software developments with problem definitions, features, and inline architecture disclosures."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
