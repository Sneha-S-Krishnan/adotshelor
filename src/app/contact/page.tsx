"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CONTACT_CHANNELS, SOCIAL_LINKS } from "@/data/portfolioData";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  serviceInterest: "problem" | "build" | "understand" | "general";
  subject: string;
  message: string;
  hp_company?: string;
}

const FAQS = [
  {
    q: "How soon can we begin work on our project?",
    a: "We usually initiate Stage 01 (Understand & Deconstruct) within 3 to 5 business days of our initial discovery call and agreed scope.",
  },
  {
    q: "Do you sign non-disclosure agreements (NDAs)?",
    a: "Yes. We are accustomed to signing mutual NDAs before reviewing proprietary workflows, pitch decks, or sensitive company data.",
  },
  {
    q: "Who owns the code upon completion?",
    a: "You do. 100% of all repositories, database schemas, and documentation are transferred directly to your organization with zero licensing strings.",
  },
  {
    q: "What if I only have a general idea and not a formal technical spec?",
    a: "That is completely fine. Our 'Idea-to-Product' and 'Problem Solving' offerings are specifically designed to help translate high-level business ideas into clear, executable technical architecture.",
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    serviceInterest: "general",
    subject: "",
    message: "",
    hp_company: "",
  });

  useEffect(() => {
    if (serviceParam === "problem-solving") {
      setFormData((prev) => ({ ...prev, serviceInterest: "problem" }));
    } else if (serviceParam === "idea-to-product") {
      setFormData((prev) => ({ ...prev, serviceInterest: "build" }));
    } else if (serviceParam === "guided-development") {
      setFormData((prev) => ({ ...prev, serviceInterest: "understand" }));
    }
  }, [serviceParam]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestSelect = (interest: FormState["serviceInterest"]) => {
    setFormData((prev) => ({ ...prev, serviceInterest: interest }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      setFeedbackMessage(
        data.message || "Thank you. Your inquiry has been received. We will respond within 24 hours."
      );
      setFormData({
        name: "",
        email: "",
        serviceInterest: "general",
        subject: "",
        message: "",
        hp_company: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setFeedbackMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Interactive Contact Form */}
        <div className="lg:col-span-7 rounded-3xl bg-[rgba(11,25,44,0.6)] border border-[var(--hair)] p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Start a Conversation
            </h2>
            <p className="mt-2 text-sm text-white/70">
              Select your primary interest and share details about what you need built.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field (hidden from real users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_company">Company Website</label>
              <input
                id="hp_company"
                type="text"
                name="hp_company"
                value={formData.hp_company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Service Interest Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2.5">
                Area of Interest <span className="text-[#00d2ee]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "problem", label: "Problem Solving" },
                  { id: "build", label: "Idea-to-Product" },
                  { id: "understand", label: "Guided Dev" },
                  { id: "general", label: "General Inquiry" },
                ].map((item) => {
                  const isSelected = formData.serviceInterest === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        handleInterestSelect(item.id as FormState["serviceInterest"])
                      }
                      className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[rgba(0,210,238,0.18)] text-[#00d2ee] border-[#00d2ee] font-semibold shadow-[0_0_15px_rgba(0,210,238,0.2)]"
                          : "bg-white/[0.03] text-white/70 border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5"
                >
                  Your Name <span className="text-[#00d2ee]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00d2ee] focus:ring-1 focus:ring-[#00d2ee] text-sm transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5"
                >
                  Email Address <span className="text-[#00d2ee]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00d2ee] focus:ring-1 focus:ring-[#00d2ee] text-sm transition-all"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5"
              >
                Subject / Project Name <span className="text-[#00d2ee]">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="e.g. Workflow Automation for Inventory Pipeline"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00d2ee] focus:ring-1 focus:ring-[#00d2ee] text-sm transition-all"
              />
            </div>

            {/* Message Details */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5"
              >
                Project Description &amp; Requirements <span className="text-[#00d2ee]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about the challenge you're solving, your target timeline, and any existing technologies in use..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#00d2ee] focus:ring-1 focus:ring-[#00d2ee] text-sm transition-all resize-y"
              />
            </div>

            {/* Status alerts */}
            {status === "success" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(0,210,238,0.12)] border border-[#00d2ee]/40 text-[#00d2ee] text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn--cyan py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,210,238,0.3)] hover:shadow-[0_0_35px_rgba(0,210,238,0.5)] transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Send Message Directly</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Channels, SLA & FAQ */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Channels Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[rgba(11,25,44,0.5)] border border-[var(--hair)] space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">Direct Channels</h3>

            <div className="space-y-4">
              {CONTACT_CHANNELS.map((channel) => (
                <div key={channel.label} className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00d2ee]">
                    {channel.label}
                  </span>
                  <div>
                    <a
                      href={channel.href}
                      className="text-base sm:text-lg font-semibold text-white hover:text-[#00d2ee] transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#00d2ee]" />
                      {channel.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* SLA Badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-white/70">
              <Clock className="w-5 h-5 text-[#00d2ee] shrink-0" />
              <div>
                <strong className="text-white block">24-Hour Response SLA:</strong>
                All project inquiries are reviewed by lead engineering staff with a direct response within 1 business day.
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-white/10">
              <span className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-3">
                Connect on Developer Platforms:
              </span>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-medium text-white/80 hover:text-[#00d2ee] hover:border-[#00d2ee]/40 transition-colors"
                  >
                    <span>{link.platform}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick FAQ List */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[rgba(11,25,44,0.4)] border border-[var(--hair)] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#00d2ee]" />
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="p-3.5 rounded-xl bg-black/30 border border-white/5 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-white/90 hover:text-[#00d2ee] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/50 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-[#00d2ee]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2.5 text-xs text-white/70 leading-relaxed border-t border-white/5 pt-2">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white">
      <Navbar isSettled={true} />

      <main className="flex-1">
        <PageHeader
          badge="Direct Contact & Intake"
          title="Let's Build"
          highlightedWord="Something Exceptional."
          description="Have an operational bottleneck, a new digital product concept, or a software system you want built and explained? Connect directly with our engineering team."
        />

        <Suspense fallback={<div className="py-20 text-center text-white/50">Loading contact form...</div>}>
          <ContactContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

