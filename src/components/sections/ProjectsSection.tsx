"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight, CheckCircle2, Clock, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -440 : 440;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)] relative scroll-mt-12"
    >
      {/* Header and horizontal scroll controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-3">
            Projects and Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Projects. Real Solutions.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/70 leading-relaxed">
            Showcasing our strongest projects built with disciplined software engineering,
            functional design, and maintainable architecture.
          </p>
        </div>

        {/* Scroll Buttons for horizontal track */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll projects left"
            className="w-10 h-10 rounded-full border border-[var(--hair)] bg-[rgba(11,25,44,0.55)] text-white hover:bg-[rgba(0,210,238,0.2)] hover:border-[#00d2ee] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll projects right"
            className="w-10 h-10 rounded-full border border-[var(--hair)] bg-[rgba(11,25,44,0.55)] text-white hover:bg-[rgba(0,210,238,0.2)] hover:border-[#00d2ee] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid / Horizontal Snap Scroll Track */}
      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 focus:outline-none"
      >
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-3xl bg-[rgba(11,25,44,0.6)] backdrop-blur-xl border border-[var(--hair)] overflow-hidden shadow-xl hover:border-[#00d2ee]/60 hover:shadow-[0_16px_40px_rgba(0,210,238,0.15)] transition-all duration-300"
          >
            <div>
              {/* Project Screenshot / Visual Preview */}
              {project.screenshot && (
                <div className="relative aspect-[16/9] w-full bg-black/60 overflow-hidden border-b border-[var(--hair)] group">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,23,0.85)] via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[rgba(6,13,23,0.8)] backdrop-blur-md text-[#00d2ee] border border-[var(--hair)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Status Badge */}
                  <div className="absolute top-3 right-3">
                    {project.status === "Active" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[rgba(0,210,238,0.2)] backdrop-blur-md text-[#38bdf8] border border-[#00d2ee]/40">
                        <CheckCircle2 className="w-3 h-3 text-[#00d2ee]" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[rgba(245,158,11,0.2)] backdrop-blur-md text-[#f59e0b] border border-[#f59e0b]/40">
                        <Clock className="w-3 h-3 text-[#f59e0b]" />
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {project.name}
                </h3>

                {/* Problem Addressed */}
                <div className="mt-4 p-3.5 rounded-xl bg-black/35 border border-[var(--hair)] text-xs">
                  <span className="font-bold text-[#00d2ee] block mb-1">
                    Problem Addressed:
                  </span>
                  <p className="text-white/75 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Developed */}
                <div className="mt-3 p-3.5 rounded-xl bg-[rgba(14,35,62,0.45)] border border-[var(--hair)] text-xs">
                  <span className="font-bold text-white block mb-1">
                    Solution Developed:
                  </span>
                  <p className="text-white/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="mt-4">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1.5">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-[rgba(255,255,255,0.06)] text-white/80 border border-[var(--hair)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action Links: Live Demo & GitHub */}
            <div className="p-6 pt-0 mt-2 border-t border-[var(--hair)] flex items-center justify-between gap-3">
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00d2ee] hover:underline"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-white/40 italic">Demo on request</span>
              )}

              {project.githubRepo ? (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {/* Link to dedicated projects page */}
      <div className="mt-14 text-center">
        <Link
          href="/projects"
          className="btn btn--cyan px-7 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,238,0.25)] hover:shadow-[0_0_30px_rgba(0,210,238,0.4)] transition-all"
        >
          <span>View All Case Studies &amp; Architecture Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
