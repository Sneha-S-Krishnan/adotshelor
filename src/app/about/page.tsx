import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Database,
  Server,
  Workflow,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About AdotShelor — Technology Crafted for Purpose",
  description:
    "Learn about our engineering philosophy, mission, and the principles that drive how we build durable software systems.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "First-Principles Problem Solving",
    subtitle: "Diagnose before prescribing",
    description:
      "We never force predefined templates or trendy frameworks onto a problem. Every system is engineered from the ground up based on the actual business bottlenecks, data flows, and operational constraints.",
    icon: Terminal,
  },
  {
    number: "02",
    title: "Radical Technical Transparency",
    subtitle: "No black boxes, no tech jargon",
    description:
      "You should never feel held hostage by your software vendor. We explain every architectural choice, provide comprehensive documentation, and ensure you completely understand the mechanics behind your platform.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Impeccable Craft & Performance",
    subtitle: "Sub-second speed and fluid motion",
    description:
      "Slow, clunky software drains productivity. We hold our applications to the highest standards of responsive design, 60fps spring animations, minimal bundle sizes, and rock-solid reliability.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Long-Term Engineering Stewardship",
    subtitle: "Software built to endure",
    description:
      "Shipping day 1 is just the beginning. We design clean schemas, maintainable directory structures, and comprehensive test suites so your software remains agile as your business scales.",
    icon: ShieldCheck,
  },
];

const TECH_STACK = [
  {
    category: "Frontend & Interfaces",
    items: [
      { name: "Next.js (App Router)", detail: "High-performance hybrid server rendering" },
      { name: "TypeScript", detail: "Strict compile-time type safety" },
      { name: "Tailwind CSS v4", detail: "Modern atomic design tokens" },
      { name: "Motion", detail: "Physics-based 60fps micro-interactions" },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "Node.js & Python", detail: "Scalable API & computation services" },
      { name: "PostgreSQL & Prisma", detail: "Relational data integrity & migrations" },
      { name: "Redis", detail: "High-throughput caching & message queues" },
      { name: "Docker", detail: "Containerized, reproducible environments" },
    ],
  },
  {
    category: "AI & Integrations",
    items: [
      { name: "Claude & OpenAI APIs", detail: "Intelligent summarization & structured extraction" },
      { name: "REST & GraphQL", detail: "Clean, self-documenting service boundaries" },
      { name: "Event Pipelines", detail: "Asynchronous task execution" },
      { name: "Automated Testing", detail: "Playwright E2E & unit coverage" },
    ],
  },
];

const METRICS = [
  { value: "100%", label: "Strict Type Safety", detail: "Zero implicit any; end-to-end type contracts" },
  { value: "< 100ms", label: "Target Latency", detail: "Optimized database queries and edge delivery" },
  { value: "100%", label: "Code & IP Ownership", detail: "Direct repository ownership transferred to you" },
  { value: "1-on-1", label: "Senior Collaboration", detail: "Direct access to engineers without middlemen" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white">
      <Navbar isSettled={true} />

      <main className="flex-1">
        <PageHeader
          badge="About Our Studio"
          title="Software Crafted with"
          highlightedWord="Purpose & Precision."
          description="AdotShelor is an independent technology and product development studio. We transform complex problems into working digital products while ensuring you understand every layer of the technology behind them."
          actions={
            <>
              <Link
                href="/contact"
                className="btn btn--cyan px-6 py-2.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(0,210,238,0.25)]"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/projects"
                className="btn btn--ghost-cyan px-6 py-2.5 rounded-xl font-medium"
              >
                View Our Work
              </Link>
            </>
          }
        />

        {/* Studio Origin Story */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[var(--hair-soft)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ee]">
                Why AdotShelor
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Software should solve problems, not create new ones.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-white/75 leading-relaxed">
              <p>
                In the modern technology landscape, companies are frequently caught between two frustrating extremes:
                generic agencies that hand over fragile, unmaintainable code, or bloated software subscriptions that force
                businesses to conform their workflows to rigid software limitations.
              </p>
              <p>
                We founded <strong className="text-white">AdotShelor</strong> to provide a better alternative. We work closely
                with founders, growing businesses, and technical leaders to design bespoke software that fits their exact
                operational needs, performs flawlessly under load, and remains understandable and easy to maintain.
              </p>
            </div>
          </div>
        </section>

        {/* 4 Core Principles */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[var(--hair-soft)]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)] mb-3">
              Guiding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              The Principles Behind Every Line of Code
            </h2>
            <p className="mt-3 text-base text-white/70">
              Our engineering culture is grounded in disciplined craftsmanship, clarity, and genuine client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.number}
                  className="p-8 rounded-3xl bg-[rgba(11,25,44,0.55)] border border-[var(--hair)] hover:border-[#00d2ee]/50 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,210,238,0.08),_transparent_70%)] pointer-events-none" />
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(0,210,238,0.1)] border border-[rgba(0,210,238,0.25)] flex items-center justify-center text-[#00d2ee] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-bold text-white/20 group-hover:text-[#00d2ee]/40 transition-colors">
                      {principle.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00d2ee] transition-colors">
                    {principle.title}
                  </h3>
                  <div className="text-xs font-mono text-[#00d2ee] mb-3">{principle.subtitle}</div>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology Stack & Arsenal */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[var(--hair-soft)]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ee]">
              Engineering Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
              Modern Tools Selected for Longevity
            </h2>
            <p className="mt-3 text-base text-white/70">
              We leverage an battle-tested, modern technology stack focused on high performance, strict type safety, and zero bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_STACK.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-[rgba(11,25,44,0.45)] border border-[var(--hair)]"
              >
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#00d2ee] mb-4 pb-3 border-b border-white/10">
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <span className="text-base font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ee]" />
                        {item.name}
                      </span>
                      <span className="text-xs text-white/60 pl-3.5 mt-0.5">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Metrics / Benchmarks */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[var(--hair-soft)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-[rgba(11,25,44,0.5)] border border-[var(--hair)] text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#00d2ee] font-mono mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white mb-1">{metric.label}</div>
                <div className="text-xs text-white/60 leading-relaxed">{metric.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s build software that makes an impact.
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Whether you have a concrete product specification or a vague operational problem, we are here to help you navigate the solution.
          </p>
          <Link
            href="/contact"
            className="btn btn--cyan px-8 py-3.5 rounded-xl font-semibold text-base shadow-[0_0_25px_rgba(0,210,238,0.3)] inline-flex items-center gap-2"
          >
            Schedule an Initial Discussion
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

