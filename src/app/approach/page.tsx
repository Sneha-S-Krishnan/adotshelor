import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { WORK_STAGES } from "@/data/portfolioData";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCode,
  GitPullRequest,
  Layers,
  MessageSquare,
  ShieldCheck,
  Terminal,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach — AdotShelor Studio",
  description:
    "Explore our 4-stage engineering lifecycle: Understand, Plan & Architect, Develop & Collaborate, Deliver & Explain.",
};

const STAGE_DETAILS = [
  {
    step: "01",
    phase: "Stage 01",
    title: "Understand & Deconstruct",
    tagline: "Diagnosing the root bottleneck",
    description:
      "We begin by thoroughly understanding your business processes, existing technical systems, and operational goals. Rather than assuming the solution upfront, we dissect the problem from first principles.",
    activities: [
      "Process & workflow audit",
      "Identification of technical & operational bottlenecks",
      "Data input & output mapping",
      "Scope and feasibility evaluation",
    ],
    deliverables: "Problem Statement, Scope Definition & Technical Feasibility Report",
  },
  {
    step: "02",
    phase: "Stage 02",
    title: "Plan & Architect",
    tagline: "Rigorous planning before code",
    description:
      "We architect the data models, system boundaries, and user interactions before writing code. This eliminates scope creep and ensures the software can scale gracefully without painful refactors.",
    activities: [
      "Relational schema & API specification design",
      "Technology stack selection with written ADRs",
      "Interactive wireframes & component hierarchy",
      "Milestone breakdown with fixed timelines",
    ],
    deliverables: "System Architecture Blueprint, Database Schema & Sprint Roadmap",
  },
  {
    step: "03",
    phase: "Stage 03",
    title: "Develop & Collaborate",
    tagline: "Continuous feedback and live previews",
    description:
      "We build in iterative milestones, deploying regularly to private staging environments. You have visibility into real progress at every step, with continuous automated testing preventing regressions.",
    activities: [
      "Iterative frontend & backend engineering",
      "Automated unit & Playwright end-to-end tests",
      "Preview staging environments for every pull request",
      "Direct asynchronous communication via shared channels",
    ],
    deliverables: "Feature-Complete Software, Automated Test Suites & Staging Demos",
  },
  {
    step: "04",
    phase: "Stage 04",
    title: "Deliver & Explain",
    tagline: "Knowledge transfer and zero ambiguity",
    description:
      "Delivery doesn't stop at deployment. We conduct live technical walkthroughs, provide clear system documentation, and transfer full repository ownership so you understand exactly how your software works.",
    activities: [
      "Zero-downtime production deployment",
      "Full repository & cloud asset handover",
      "Recorded video walkthroughs of the codebase",
      "Post-launch operational monitoring & support",
    ],
    deliverables: "Production System, Full Code Ownership, Walkthrough Videos & Docs",
  },
];

const COLLABORATION_PILLARS = [
  {
    icon: MessageSquare,
    title: "Direct Engineer Access",
    description:
      "No account managers or junior middlemen. You collaborate directly with the senior engineers designing and building your product.",
  },
  {
    icon: GitPullRequest,
    title: "Transparent Progress",
    description:
      "Live preview links, clean commit histories, and weekly milestone check-ins so you never wonder what is happening with your investment.",
  },
  {
    icon: Video,
    title: "Technical Walkthroughs",
    description:
      "We explain every technical decision, architecture trade-off, and configuration detail in clear language so your team stays empowered.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Code Ownership",
    description:
      "From day one, all source code, design assets, and database schemas belong 100% to your organization without restrictive licensing.",
  },
];

export default function ApproachPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white">
      <Navbar isSettled={true} />

      <main className="flex-1">
        <PageHeader
          badge="Methodology & Process"
          title="A Structured Process."
          highlightedWord="Predictable Outcomes."
          description="How we move from initial problem discovery to production-ready software through disciplined collaboration, continuous testing, and radical clarity."
          actions={
            <Link
              href="/contact"
              className="btn btn--cyan px-6 py-2.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(0,210,238,0.25)]"
            >
              Start With Stage 01
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          }
        />

        {/* 4-Stage Step-by-Step Breakdown */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ee]">
              Lifecycle Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
              Four Deliberate Stages of Engineering
            </h2>
          </div>

          <div className="space-y-12">
            {STAGE_DETAILS.map((stage) => (
              <div
                key={stage.step}
                className="p-8 sm:p-12 rounded-3xl bg-[rgba(11,25,44,0.55)] border border-[var(--hair)] hover:border-[#00d2ee]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Step Number & Title */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[rgba(0,210,238,0.14)] text-[#00d2ee] border border-[rgba(0,210,238,0.3)]">
                        {stage.phase}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-mono text-[#00d2ee] uppercase tracking-wider">
                      {stage.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed pt-2">
                      {stage.description}
                    </p>
                  </div>

                  {/* Activities & Deliverable */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="p-6 rounded-2xl bg-[rgba(6,13,23,0.7)] border border-white/5 space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/60">
                        Key Engineering Activities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stage.activities.map((act) => (
                          <div key={act} className="flex items-start gap-2 text-sm text-white/85">
                            <CheckCircle2 className="w-4 h-4 text-[#00d2ee] shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[rgba(0,210,238,0.06)] border border-[rgba(0,210,238,0.2)] text-xs text-white/85 flex items-center gap-3">
                      <FileCode className="w-4 h-4 text-[#00d2ee] shrink-0" />
                      <div>
                        <strong className="text-[#00d2ee] mr-1">Stage Deliverable:</strong>
                        <span>{stage.deliverables}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Collaborate */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-3">
              Client Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The AdotShelor Transparency Standard
            </h2>
            <p className="mt-3 text-base text-white/70">
              Communication should be direct, responsive, and completely devoid of confusing corporate jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLABORATION_PILLARS.map((collab) => {
              const Icon = collab.icon;
              return (
                <div
                  key={collab.title}
                  className="p-6 rounded-2xl bg-[rgba(11,25,44,0.5)] border border-[var(--hair)] space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,210,238,0.1)] border border-[rgba(0,210,238,0.2)] flex items-center justify-center text-[#00d2ee]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{collab.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{collab.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[var(--hair-soft)]">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to experience a transparent development process?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Let&apos;s schedule a 30-minute discovery session to explore your requirements and build a concrete implementation roadmap.
          </p>
          <Link
            href="/contact"
            className="btn btn--cyan px-8 py-3.5 rounded-xl font-semibold text-base shadow-[0_0_25px_rgba(0,210,238,0.3)] inline-flex items-center gap-2"
          >
            Schedule a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

