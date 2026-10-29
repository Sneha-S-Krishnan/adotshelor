"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { WORK_STAGES } from "@/data/portfolioData";

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="approach"
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)] relative scroll-mt-12"
    >
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-3">
          Our Development Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          A Clear Path from Idea to Impact.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          How we work: four deliberate stages designed to ensure complete technical clarity,
          continuous collaboration, and reliable execution.
        </p>
      </div>

      <div ref={ref} className="relative mt-12 sm:mt-16">
        {/* Drawing vertical timeline line on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[var(--hair)]">
          <motion.div
            className="w-full bg-gradient-to-b from-[#0284c7] to-[#00d2ee] origin-top shadow-[0_0_12px_rgba(0,210,238,0.6)]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView || prefersReduced ? 1 : 0 }}
            transition={{ duration: prefersReduced ? 0 : 1.2, ease: "easeInOut" }}
            style={{ height: "100%" }}
          />
        </div>

        {/* 4 Sequential Stages */}
        <div className="space-y-8 lg:space-y-12">
          {WORK_STAGES.map((stage, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                animate={{
                  opacity: isInView || prefersReduced ? 1 : 0,
                  y: isInView || prefersReduced ? 0 : 20,
                }}
                transition={{
                  duration: prefersReduced ? 0 : 0.6,
                  delay: prefersReduced ? 0 : idx * 0.2,
                  ease: "easeOut",
                }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Box */}
                <div
                  className={`w-full lg:w-1/2 p-6 sm:p-7 rounded-2xl bg-[rgba(11,25,44,0.55)] backdrop-blur-xl border border-[var(--hair)] hover:border-[#00d2ee]/50 transition-colors shadow-lg ${
                    isEven ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      isEven ? "lg:justify-end" : "lg:justify-start"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-[#00d2ee] uppercase tracking-wider">
                      {stage.timeline}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-black/40 text-white/60 border border-[var(--hair)]">
                      Step {stage.step}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stage.step}. {stage.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/75 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Center Badge Dot */}
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#0284c7] border-2 border-[#00d2ee] text-[#060d17] font-bold text-xs shadow-[0_0_18px_rgba(0,210,238,0.5)] shrink-0">
                  {stage.step}
                </div>

                {/* Empty opposite spacer for symmetrical layout on desktop */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
