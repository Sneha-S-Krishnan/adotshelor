"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { PROJECTS_DATA } from "@/data/portfolioData";
import {
  ExternalLink,
  GitBranch,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
  Sparkles,
  Terminal,
  Server,
  Zap,
} from "lucide-react";

const CATEGORIES = ["All", "Business Software", "Workflow Systems", "AI Integration"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white">
      <Navbar isSettled={true} />

      <main className="flex-1">
        <PageHeader
          badge="Selected Case Studies"
          title="Real Systems."
          highlightedWord="Measurable Results."
          description="A showcase of full-stack web applications, asynchronous automation engines, and AI analytics tools engineered for performance, maintainability, and real-world utility."
          actions={
            <Link
              href="/contact"
              className="btn btn--cyan px-6 py-2.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(0,210,238,0.25)]"
            >
              Request a Custom Solution
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          }
        />

        {/* Filter Switcher & Project Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills (Emil Kowalski style spring selector) */}
          <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl bg-[rgba(11,25,44,0.6)] border border-[var(--hair)] max-w-fit">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isSelected ? "text-[#00D2EE]" : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="project-filter-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-[rgba(0,210,238,0.15)] border border-[rgba(0,210,238,0.3)] shadow-[0_0_15px_rgba(0,210,238,0.15)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between rounded-3xl bg-[rgba(11,25,44,0.55)] border border-[var(--hair)] overflow-hidden shadow-xl hover:border-[#00d2ee]/60 hover:shadow-[0_16px_40px_rgba(0,210,238,0.15)] transition-all duration-300 group"
                >
                  <div>
                    {/* Visual Media Header */}
                    {project.screenshot && (
                      <div className="relative aspect-[16/9] w-full bg-black/60 overflow-hidden border-b border-[var(--hair)]">
                        <Image
                          src={project.screenshot}
                          alt={`${project.name} screenshot`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,23,0.85)] via-transparent to-transparent pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[rgba(6,13,23,0.85)] backdrop-blur-md text-[#00d2ee] border border-[var(--hair)]">
                            {project.category}
                          </span>
                        </div>

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

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00d2ee] transition-colors">
                        {project.title}
                      </h3>

                      {/* Problem vs Solution */}
                      <div className="space-y-3 text-sm">
                        <div className="p-3.5 rounded-xl bg-[rgba(6,13,23,0.6)] border border-white/5">
                          <span className="block text-xs font-mono uppercase tracking-wider text-rose-400 mb-1">
                            The Challenge:
                          </span>
                          <p className="text-white/70 leading-relaxed text-xs sm:text-sm">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[rgba(0,210,238,0.06)] border border-[rgba(0,210,238,0.18)]">
                          <span className="block text-xs font-mono uppercase tracking-wider text-[#00d2ee] mb-1">
                            Engineering Solution:
                          </span>
                          <p className="text-white/85 leading-relaxed text-xs sm:text-sm">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Metrics Telemetry Pill */}
                      {project.metrics && (
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-[#38bdf8]">
                          <Zap className="w-3.5 h-3.5 text-[#00d2ee] shrink-0" />
                          <span className="truncate">{project.metrics}</span>
                        </div>
                      )}

                      {/* Tech Pills */}
                      <div className="pt-2">
                        <span className="block text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                          Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[rgba(6,13,23,0.7)] text-white/80 border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="p-6 pt-0 mt-2 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d2ee] hover:underline"
                      >
                        Live Demonstration
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-white/40 font-mono">Internal Deployment</span>
                    )}

                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
                        aria-label="View on GitHub"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Architecture Standards Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ee]">
              Engineering Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
              How We Architect Production Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[rgba(11,25,44,0.45)] border border-[var(--hair)] space-y-3">
              <Server className="w-6 h-6 text-[#00d2ee]" />
              <h3 className="text-lg font-bold text-white">Stateless, Edge-Ready Architecture</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We decouple compute from persistent storage, ensuring zero-downtime rolling deploys and rapid horizontal elasticity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[rgba(11,25,44,0.45)] border border-[var(--hair)] space-y-3">
              <Terminal className="w-6 h-6 text-[#00d2ee]" />
              <h3 className="text-lg font-bold text-white">End-to-End Type Integrity</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                From database schemas via Prisma to client-side components via TypeScript, type contracts are unified and strictly checked.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[rgba(11,25,44,0.45)] border border-[var(--hair)] space-y-3">
              <Layers className="w-6 h-6 text-[#00d2ee]" />
              <h3 className="text-lg font-bold text-white">Zero Vendor Lock-In</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Standard containers, relational Postgres databases, and open-source stacks ensure your code runs anywhere without proprietary traps.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)]">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have a project that requires precision?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Let&apos;s build an application that solves your operational hurdles and scales smoothly.
          </p>
          <Link
            href="/contact"
            className="btn btn--cyan px-8 py-3.5 rounded-xl font-semibold text-base shadow-[0_0_25px_rgba(0,210,238,0.3)] inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

