"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { HoverCards } from "@/components/velora/card-hover-effect";
import { ImageSlider } from "@/components/velora/image-slider";
import { PROJECTS_DATA } from "@/data/portfolioData";

const projectSlides = PROJECTS_DATA.flatMap((project) =>
  project.screenshot
    ? [
        {
          project,
          src: project.screenshot,
          alt: `${project.name} project preview`,
        },
      ]
    : []
);
const sliderImages = projectSlides.map(({ src, alt }) => ({ src, alt }));

export function ProjectsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const reducedMotion = useReducedMotion();
  const activeProject = projectSlides[activeSlide]?.project;

  const projectSelectors = projectSlides.map(({ project }, index) => ({
    title: project.name,
    description: project.category,
    onHover: () => setActiveSlide(index),
    content: (
      <button
        type="button"
        aria-pressed={activeSlide === index}
        onClick={() => setActiveSlide(index)}
        className={`flex h-full w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d2ee] ${
          activeSlide === index
            ? "border-[#00d2ee]/50 bg-[#00d2ee]/10"
            : "border-[var(--hair)] bg-[rgba(11,25,44,0.55)] hover:border-[#00d2ee]/30"
        }`}
      >
        <span className="font-mono text-xs font-bold text-[#00d2ee]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white">
            {project.name}
          </span>
          <span className="mt-0.5 block text-xs text-white/55">
            {project.category}
          </span>
        </span>
      </button>
    ),
  }));

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl scroll-mt-12 border-t border-[var(--hair-soft)] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mb-10 max-w-3xl sm:mb-14">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(0,210,238,0.28)] bg-[rgba(0,210,238,0.12)] px-3 py-1 text-xs font-semibold text-[#00d2ee]">
          Projects and Portfolio
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Real Projects. Real Solutions.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
          Showcasing our strongest projects built with disciplined software
          engineering, functional design, and maintainable architecture.
        </p>
      </div>

      {activeProject && (
        <article className="group/project overflow-hidden rounded-3xl border border-[var(--hair)] bg-[rgba(11,25,44,0.58)] shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-[#00d2ee]/45 hover:shadow-[0_24px_70px_rgba(0,210,238,0.12)]">
          <div className="grid lg:min-h-[560px] lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
            <ImageSlider
              images={sliderImages}
              index={activeSlide}
              onIndexChange={setActiveSlide}
              autoplay={false}
              showPlaybackControl={false}
              label="Project previews"
              className="h-[clamp(250px,48vw,420px)] border-b border-[var(--hair)] lg:h-full lg:min-h-[560px] lg:border-r lg:border-b-0"
            >
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-6">
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur sm:text-xs">
                  {activeProject.category}
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-mono text-[10px] font-semibold text-white/90 backdrop-blur sm:text-xs">
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(projectSlides.length).padStart(2, "0")}
                </span>
              </div>
            </ImageSlider>

            <div className="flex min-h-[500px] flex-col p-5 sm:p-8 lg:min-h-0 lg:p-9 xl:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: reducedMotion ? 0 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reducedMotion ? 0 : -12 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                  className="flex h-full min-h-[450px] flex-col lg:min-h-full"
                >
                  <div className="flex min-h-7 items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00d2ee]">
                      Featured project
                    </span>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${
                        activeProject.status === "Active"
                          ? "border-[#00d2ee]/30 bg-[#00d2ee]/10 text-[#38bdf8]"
                          : "border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#fbbf24]"
                      }`}
                    >
                      {activeProject.status === "Active" ? (
                        <CheckCircle2 className="size-3" aria-hidden="true" />
                      ) : (
                        <Clock className="size-3" aria-hidden="true" />
                      )}
                      {activeProject.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                    {activeProject.name}
                  </h3>
                  {activeProject.metrics && (
                    <p className="mt-2 text-xs font-medium text-white/55">
                      {activeProject.metrics}
                    </p>
                  )}

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-xl border border-[var(--hair)] bg-black/20 p-3.5 sm:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#00d2ee]">
                        Problem
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                        {activeProject.problem}
                      </p>
                    </div>
                    <div className="rounded-xl border border-[var(--hair)] bg-[rgba(14,35,62,0.38)] p-3.5 sm:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                        Solution
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/75 sm:text-sm">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                      Technologies
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md border border-[var(--hair)] bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-white/75"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-[var(--hair)] pt-5">
                    {activeProject.liveDemo ? (
                      <a
                        href={activeProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00d2ee] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d2ee]"
                      >
                        Live Demo
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-xs italic text-white/40">
                        Demo on request
                      </span>
                    )}

                    {activeProject.githubRepo && (
                      <a
                        href={activeProject.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d2ee]"
                      >
                        <GitBranch className="size-3.5" aria-hidden="true" />
                        GitHub Repository
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </article>
      )}

      <HoverCards
        items={projectSelectors}
        columns={3}
        aria-label="Select a project"
        className="mt-5 [&>ul>li]:p-2"
      />
    </section>
  );
}
