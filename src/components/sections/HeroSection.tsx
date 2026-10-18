"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export interface HeroSectionProps {
  readonly isSettled: boolean;
}

export function HeroSection({ isSettled }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36 overflow-hidden"
    >
      {/* Ambient Pastel Glows matching the reference image */}
      <div
        className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] glow-ambient-cyan blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[350px] glow-ambient-purple blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[300px] glow-ambient-pink blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isSettled
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Top Studio Badge Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/90 border border-slate-200/90 text-slate-700 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="tracking-wide">Software & Technology Studio</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            Build. Create.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600">
              Make an Impact.
            </span>
          </h1>

          {/* Supporting Message */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            AdotShelor turns ideas into practical digital experiences through
            thoughtful software, design, and technology.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#our-projects"
              icon={
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
              iconPosition="right"
            >
              Explore Our Projects
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Visual Showcase: Floating Glossy Interface Mockup */}
        <div className="mt-14 sm:mt-18 lg:mt-20 relative max-w-5xl mx-auto">
          {/* Subtle Outer Glow Container */}
          <div className="relative rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-b from-white/90 via-slate-100/60 to-white/90 border border-slate-200/90 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
            {/* Glossy Window Header */}
            <div className="bg-slate-50/90 rounded-t-2xl px-4 py-3 border-b border-slate-200/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200/70 text-[11px] font-medium text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>adotshelor.com / architecture-core</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Next.js 16 • Tailwind 4
              </div>
            </div>

            {/* Window Content Grid */}
            <div className="bg-white rounded-b-2xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
              {/* Left Column: Architecture Highlights */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800">
                      Engineering Principles
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-cyan-50 text-cyan-700 border border-cyan-100">
                      Standard
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Resilient full-stack web applications prioritizing modular
                    architecture, type safety, and accessibility.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50/50 to-teal-50/30 border border-cyan-100/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800">
                      Core Technology Stack
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                      Verified
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-slate-700 border border-slate-200/70 shadow-2xs"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Product Capability Preview */}
              <div className="md:col-span-7 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-gradient-to-tr from-slate-50 via-white to-purple-50/30 border border-slate-200/70 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Active Development Project
                    </h2>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                      AdotShelor.com Web Presence
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Online
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Single-page portfolio website showcasing software capability,
                  responsive design, inline information disclosure, and custom
                  interactive brand animation.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <div className="text-[10px] text-slate-500">Design System</div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      Light & Glossy
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <div className="text-[10px] text-slate-500">Motion & a11y</div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      Reduced-Motion Safe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
