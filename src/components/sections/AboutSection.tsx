import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_PILLARS, BRAND_INFO } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-t border-slate-200/70 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <SectionHeading
        badge="About AdotShelor"
        badgeAccent="cyan"
        title={
          <>
            Engineering Purposeful{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
              Software & Technology
            </span>
          </>
        }
        subtitle="A software brand built around rigorous craft, modern web foundations, and accessible digital design."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Brand Overview & Mission */}
        <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden">
          <div
            className="absolute -top-12 -right-12 w-48 h-48 glow-ambient-cyan blur-2xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
              <span>Independent Studio</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              What AdotShelor Is & Aims to Do
            </h3>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {BRAND_INFO.aboutDescription}
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on the intersection of intuitive human interfaces and
              uncompromising engineering standards. Every solution is conceived
              to be maintainable, portable, and ready for long-term production
              demands.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
            {[
              "Modern Next.js & React",
              "TypeScript Type Safety",
              "Light Glossy Aesthetics",
              "WCAG Accessibility",
              "Zero-Bloat Architecture",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: How We Approach Software (3 Pillars) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
          {ABOUT_PILLARS.map((pillar, idx) => {
            const accentClasses = {
              cyan: "border-cyan-200/80 bg-cyan-50/40 text-cyan-700",
              purple: "border-purple-200/80 bg-purple-50/40 text-purple-700",
              mint: "border-emerald-200/80 bg-emerald-50/40 text-emerald-700",
            }[pillar.accent];

            return (
              <article
                key={pillar.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
              >
                <div
                  className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 font-bold text-sm ${accentClasses}`}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
