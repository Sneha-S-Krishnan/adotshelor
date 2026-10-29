import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SERVICE_PILLARS } from "@/data/portfolioData";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Workflow,
  Code2,
  FileText,
  ShieldCheck,
  Terminal,
  Clock,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — AdotShelor Studio",
  description:
    "Explore our three core engineering pillars: Problem Solving Through Technology, Idea-to-Product Development, and Guided Development.",
};

const COMPARISON_ROWS = [
  {
    feature: "Ideal For",
    p1: "Businesses with inefficient, manual workflows or repetitive operational friction",
    p2: "Founders & teams with a validated concept needing a production-ready MVP",
    p3: "Clients who want custom software built alongside in-depth technical understanding",
  },
  {
    feature: "Core Focus",
    p1: "Workflow automation, internal tools & operational software",
    p2: "End-to-end full stack architecture, UX, database & deployment",
    p3: "Bespoke engineering + code walkthroughs & architecture education",
  },
  {
    feature: "Key Deliverables",
    p1: "Custom web app, API integration, sync pipelines, operational dashboards",
    p2: "Production-ready MVP, automated tests, deployment pipeline, design system",
    p3: "Full source code, annotated architecture documentation, video walkthroughs",
  },
  {
    feature: "Typical Timeline",
    p1: "2 – 6 Weeks",
    p2: "4 – 10 Weeks",
    p3: "Flexible / Milestone-driven",
  },
  {
    feature: "Handover & IP",
    p1: "100% Client Ownership",
    p2: "100% Client Ownership",
    p3: "100% Client Ownership",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white">
      <Navbar isSettled={true} />

      <main className="flex-1">
        <PageHeader
          badge="Engineering Services"
          title="Engineered for Purpose."
          highlightedWord="Built to Scale."
          description="We provide three disciplined engineering offerings designed to solve real business bottlenecks, transform ideas into working software, and demystify the technology behind it all."
          actions={
            <Link
              href="/contact"
              className="btn btn--cyan px-6 py-2.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(0,210,238,0.25)]"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          }
        />

        {/* 3 Core Services In-Depth */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {SERVICE_PILLARS.map((pillar, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[rgba(11,25,44,0.55)] border border-[var(--hair)] relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left / Info Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[rgba(0,210,238,0.14)] text-[#00d2ee] border border-[rgba(0,210,238,0.3)]">
                        {pillar.tag}
                      </span>
                      <span className="font-mono text-sm text-white/40">
                        {pillar.number} / 03
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {pillar.heading}
                    </h2>

                    <p className="text-base sm:text-lg text-white/75 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* What We Offer Checklist */}
                    <div className="pt-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#00d2ee] mb-4">
                        What We Deliver:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pillar.whatWeOffer.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00d2ee] shrink-0 mt-0.5" />
                            <span className="text-sm text-white/90 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/contact?service=${pillar.id}`}
                        className="btn btn--cyan px-6 py-2.5 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,210,238,0.2)]"
                      >
                        {pillar.buttonText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right / Technical Focus Card */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : ""}`}>
                    <div className="p-6 sm:p-8 rounded-2xl bg-[rgba(6,13,23,0.7)] border border-[var(--hair)] space-y-6">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00d2ee]">
                        <Terminal className="w-4 h-4" />
                        <span>Technical Focus &amp; Tools</span>
                      </div>

                      <div className="space-y-3">
                        {pillar.technicalFocus.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center justify-between p-3.5 rounded-xl bg-[rgba(11,25,44,0.5)] border border-white/10"
                          >
                            <span className="text-sm font-semibold text-white">{tech}</span>
                            <span className="w-2 h-2 rounded-full bg-[#00d2ee]" />
                          </div>
                        ))}
                      </div>

                      <div className="p-4 rounded-xl bg-[rgba(0,210,238,0.06)] border border-[rgba(0,210,238,0.18)] text-xs text-white/70 leading-relaxed">
                        <strong className="text-white block mb-1">Standard Guarantee:</strong>
                        Complete repository ownership, automated unit tests, clean documentation, and deployment on modern cloud infrastructure.
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Comparison Matrix Table */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-3">
              Engagement Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Which Model Fits Your Needs?
            </h2>
            <p className="mt-3 text-base text-white/70">
              Clear expectations on timeline, scope, and deliverables for each engagement structure.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[var(--hair)] bg-[rgba(11,25,44,0.4)]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[rgba(6,13,23,0.7)] text-white font-mono text-xs">
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-white/50 w-1/4">
                    Dimension
                  </th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-[#00d2ee] w-1/4">
                    01. Problem Solving
                  </th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-[#00d2ee] w-1/4">
                    02. Idea-to-Product
                  </th>
                  <th className="py-4 px-6 font-semibold uppercase tracking-wider text-[#00d2ee] w-1/4">
                    03. Guided Dev
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/75">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white font-mono text-xs">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-sm">{row.p1}</td>
                    <td className="py-4 px-6 text-sm">{row.p2}</td>
                    <td className="py-4 px-6 text-sm">{row.p3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)]">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Not sure which service is right?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Tell us about the challenge you are facing. We will review your requirements and recommend the most effective, cost-efficient path forward.
          </p>
          <Link
            href="/contact"
            className="btn btn--cyan px-8 py-3.5 rounded-xl font-semibold text-base shadow-[0_0_25px_rgba(0,210,238,0.3)] inline-flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

