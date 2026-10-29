"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SERVICE_PILLARS } from "@/data/portfolioData";
import {
  ChevronDown,
  CheckCircle2,
  Wrench,
  Sparkles,
  BookOpen,
  ArrowRight,
  Server,
  Shield,
  Database,
  Layout,
} from "lucide-react";

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string>("problem-solving");
  const prefersReduced = useReducedMotion();

  // For Service 03 (Understand): Interactive architecture nodes
  const [activeNode, setActiveNode] = useState<string>("api");

  const architectureNodes: Record<
    string,
    { label: string; icon: React.ReactNode; explanation: string }
  > = {
    frontend: {
      label: "Frontend Interface",
      icon: <Layout className="w-4 h-4 text-[#00d2ee]" />,
      explanation:
        "The interface you and your users touch. Built with responsive Next.js & React for instant loading, full accessibility, and smooth interactivity.",
    },
    api: {
      label: "API & Backend Logic",
      icon: <Server className="w-4 h-4 text-[#00d2ee]" />,
      explanation:
        "The central nervous system. Clean TypeScript endpoints that validate inputs, execute business rules, and communicate safely with your database.",
    },
    database: {
      label: "Database & Storage",
      icon: <Database className="w-4 h-4 text-[#00d2ee]" />,
      explanation:
        "Where your records live permanently. Structured with type safety and indexed queries so performance stays fast as data scales.",
    },
    auth: {
      label: "Security & Permissions",
      icon: <Shield className="w-4 h-4 text-[#00d2ee]" />,
      explanation:
        "Protected system boundaries. Strict session cookies and role-based checks ensuring only authorized users can access sensitive features.",
    },
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)] relative"
    >
      {/* Background ambient cyan glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[350px] bg-[#00d2ee]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-3">
          Our Three Core Services
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Three Focused Ways We Solve, Build, and Guide.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
          This is what AdotShelor offers: thoughtful digital solutions that solve real problems,
          turn concepts into working applications, and ensure you understand the technology behind them.
        </p>
      </div>

      {/* Core Services Cards / Accordion */}
      <div className="space-y-5">
        {SERVICE_PILLARS.map((service) => {
          const isExpanded = expandedId === service.id;

          return (
            <motion.article
              key={service.id}
              layout={!prefersReduced}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isExpanded
                  ? "bg-[rgba(14,35,62,0.7)] border-[#00d2ee]/60 shadow-[0_12px_36px_rgba(0,210,238,0.15)]"
                  : "bg-[rgba(11,25,44,0.45)] hover:bg-[rgba(11,25,44,0.65)] border-[var(--hair)]"
              }`}
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? "" : service.id)}
                aria-expanded={isExpanded}
                aria-controls={`service-panel-${service.id}`}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ee]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <span className="text-sm sm:text-base font-mono font-bold text-[#00d2ee]">
                    {service.number} / {service.tag}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {service.heading}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-white/60 mt-0.5">
                      {service.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-semibold text-[#00d2ee]">
                    {isExpanded ? "Collapse Details" : "View Details"}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center text-white transition-transform duration-200 ${
                      isExpanded
                        ? "rotate-180 bg-[#0284c7] border-[#00d2ee]"
                        : "bg-[rgba(255,255,255,0.06)] border-[var(--hair)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={`service-panel-${service.id}`}
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: prefersReduced ? 0 : 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-t border-[var(--hair)]"
                  >
                    <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Narrative, What We Offer & Direct CTA */}
                      <div className="lg:col-span-7 space-y-6">
                        <div>
                          <p className="text-base sm:text-lg font-medium text-white/90 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ee] mb-3">
                            What We Offer:
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.whatWeOffer.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 bg-black/20 p-2.5 rounded-xl border border-[var(--hair)]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#00d2ee] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Direct Button */}
                        <div className="pt-2">
                          <a
                            href={service.buttonHref}
                            className="btn btn--cyan inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,210,238,0.25)] hover:shadow-[0_0_25px_rgba(0,210,238,0.4)] transition-all"
                          >
                            <span>{service.buttonText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Right: Interactive Visual Illustration */}
                      <div className="lg:col-span-5 bg-[rgba(6,13,23,0.75)] rounded-2xl border border-[var(--hair)] p-5 sm:p-6 flex flex-col justify-between">
                        {/* Service 01: Problem Solving Visual */}
                        {service.id === "problem-solving" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#00d2ee]">
                              <Wrench className="w-3.5 h-3.5" />
                              <span>Workflow Optimization Engine</span>
                            </div>
                            <div className="aspect-[4/3] rounded-xl bg-black/40 border border-[var(--hair)] p-4 flex flex-col justify-center items-center gap-3">
                              <div className="w-full bg-[rgba(14,35,62,0.6)] p-3 rounded-lg border border-[var(--hair)] text-xs">
                                <span className="text-white/40 block text-[10px] uppercase font-mono">Manual Bottleneck</span>
                                <span className="text-white/80 font-mono">4-Hour Daily Spreadsheets → Fragmented Errors</span>
                              </div>
                              <div className="w-6 h-6 rounded-full bg-[#00d2ee]/20 text-[#00d2ee] flex items-center justify-center text-xs font-bold">
                                ↓
                              </div>
                              <div className="w-full bg-[rgba(0,210,238,0.12)] p-3 rounded-lg border border-[#00d2ee]/40 text-xs">
                                <span className="text-[#00d2ee] block text-[10px] uppercase font-mono font-bold">Automated System</span>
                                <span className="text-white font-semibold">Real-time sync • 0 manual errors • Instant dispatch</span>
                              </div>
                            </div>
                            <p className="mt-3 text-xs text-white/60 text-center">
                              Targeted tools that eliminate operational friction and save hours every week.
                            </p>
                          </div>
                        )}

                        {/* Service 02: Idea to Product Visual */}
                        {service.id === "idea-to-product" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#00d2ee]">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Architecture &amp; MVP Blueprint</span>
                            </div>
                            <div className="aspect-[4/3] rounded-xl bg-black/40 border border-[var(--hair)] p-4 flex flex-col justify-between">
                              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[var(--hair)]">
                                <span className="text-white/70">Concept Definition</span>
                                <span className="text-[#00d2ee]">Ready</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 my-2">
                                <div className="p-2 rounded bg-white/5 border border-[var(--hair)]">
                                  <span className="text-[10px] text-white/50 block">UX Prototype</span>
                                  <span className="text-xs text-white font-medium">Interactive Wireframe</span>
                                </div>
                                <div className="p-2 rounded bg-white/5 border border-[var(--hair)]">
                                  <span className="text-[10px] text-white/50 block">Backend APIs</span>
                                  <span className="text-xs text-white font-medium">Type-Safe Endpoints</span>
                                </div>
                              </div>
                              <div className="h-7 w-full rounded-lg bg-gradient-to-r from-[#0284c7] to-[#00d2ee] text-[#060d17] flex items-center justify-center text-xs font-bold">
                                Production Application Launched
                              </div>
                            </div>
                            <p className="mt-3 text-xs text-white/60 text-center">
                              From initial napkin sketches to a tested, deployable software product.
                            </p>
                          </div>
                        )}

                        {/* Service 03: Guided Development Interactive Visual */}
                        {service.id === "guided-development" && (
                          <div>
                            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#00d2ee]">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>System Architecture Walkthrough (Click any component)</span>
                            </div>

                            {/* Node selector tabs */}
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              {Object.entries(architectureNodes).map(([key, node]) => {
                                const isSelected = activeNode === key;
                                return (
                                  <button
                                    key={key}
                                    type="button"
                                    onClick={() => setActiveNode(key)}
                                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                                      isSelected
                                        ? "bg-[rgba(0,210,238,0.2)] border-[#00d2ee] shadow-sm"
                                        : "bg-black/30 border-[var(--hair)] hover:bg-black/50"
                                    }`}
                                  >
                                    {node.icon}
                                    <span
                                      className={`text-xs font-bold ${
                                        isSelected ? "text-[#00d2ee]" : "text-white/80"
                                      }`}
                                    >
                                      {node.label}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Plain language explanation */}
                            <div
                              className="p-3.5 rounded-xl bg-black/50 border border-[#00d2ee]/40 min-h-[85px]"
                              aria-live="polite"
                            >
                              <div className="text-[11px] font-bold uppercase tracking-wider text-[#00d2ee] mb-1">
                                {architectureNodes[activeNode]?.label} Explained:
                              </div>
                              <p className="text-xs text-white/80 leading-relaxed">
                                {architectureNodes[activeNode]?.explanation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>

      {/* Direct link to dedicated services page */}
      <div className="mt-14 text-center">
        <Link
          href="/services"
          className="btn btn--cyan px-7 py-3 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,238,0.25)] hover:shadow-[0_0_30px_rgba(0,210,238,0.4)] transition-all"
        >
          <span>Explore All 3 Services &amp; Deliverables</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
