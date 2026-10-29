"use client";

import React, { useState } from "react";
import { CONTACT_CHANNELS } from "@/data/portfolioData";
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  serviceInterest: "problem" | "build" | "understand" | "general";
  subject: string;
  message: string;
  hp_company?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    serviceInterest: "problem",
    subject: "",
    message: "",
    hp_company: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setFeedbackMessage(data.message || "Thank you. Your message was received.");
      setFormData({
        name: "",
        email: "",
        serviceInterest: "problem",
        subject: "",
        message: "",
        hp_company: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setFeedbackMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#060D17] text-white relative overflow-hidden border-t border-[var(--hair-soft)]"
    >
      {/* Background ambient cyan glow */}
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#00d2ee]/8 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Scene 06 Invitation Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)]">
              Scene 06 • The Invitation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Have Something in Mind?
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              Bring us a problem, an idea, or a project you&apos;d like to understand
              better. You&apos;ll speak directly with lead software engineers who
              build and guide solutions every day.
            </p>

            {/* Direct Contact Channels */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00d2ee]">
                Direct Official Channels
              </h3>

              {CONTACT_CHANNELS.map((channel) => (
                <div
                  key={channel.label}
                  className="p-3.5 rounded-xl bg-[rgba(11,25,44,0.55)] backdrop-blur-md border border-[var(--hair)] flex items-center justify-between"
                >
                  <div>
                    <span className="block text-[11px] text-white/50 font-mono">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      className="text-sm font-bold text-white hover:text-[#00d2ee] transition-colors"
                    >
                      {channel.value}
                    </a>
                  </div>
                  <a
                    href={channel.href}
                    className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#0284c7] transition-colors"
                    aria-label={`Send email to ${channel.value}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            {/* Quiet Reassurance */}
            <div className="pt-2 flex flex-col gap-2 text-xs text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ee]" />
                Direct engineer dialogue • No sales reps
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                Non-disclosure agreements honored
              </span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form in Deep Navy Glass */}
          <div className="lg:col-span-7 bg-[rgba(11,25,44,0.65)] backdrop-blur-2xl p-6 sm:p-9 rounded-3xl border border-[var(--hair)] shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Start a Conversation
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-white/60">
              Share a few details below. We review every submission personally.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Service Interest Selector */}
              <div>
                <label
                  htmlFor="serviceInterest"
                  className="block text-xs font-bold uppercase tracking-wider text-[#00d2ee] mb-1.5"
                >
                  I am interested in:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { value: "problem", label: "01. Solve a Problem" },
                    { value: "build", label: "02. Build an Idea" },
                    { value: "understand", label: "03. Guided Project" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceInterest: option.value as FormState["serviceInterest"],
                        }))
                      }
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                        formData.serviceInterest === option.value
                          ? "bg-gradient-to-r from-[#0284c7] to-[#00d2ee] text-[#060d17] font-bold border-[#00d2ee] shadow-[0_4px_16px_rgba(0,210,238,0.35)]"
                          : "bg-black/30 text-white/70 border-[var(--hair)] hover:bg-black/50 hover:border-[#00d2ee]/40"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5"
                  >
                    Your Name <span className="text-[#00d2ee]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--hair)] bg-black/40 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ee] focus:ring-2 focus:ring-[#00d2ee]/30 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5"
                  >
                    Email Address <span className="text-[#00d2ee]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--hair)] bg-black/40 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ee] focus:ring-2 focus:ring-[#00d2ee]/30 transition-colors"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5"
                >
                  Subject <span className="text-[#00d2ee]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Operational tool optimization / New platform idea"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--hair)] bg-black/40 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ee] focus:ring-2 focus:ring-[#00d2ee]/30 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5"
                >
                  Message <span className="text-[#00d2ee]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current challenge, idea, or questions..."
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--hair)] bg-black/40 text-white placeholder-white/40 focus:outline-none focus:border-[#00d2ee] focus:ring-2 focus:ring-[#00d2ee]/30 transition-colors resize-y"
                />
              </div>

              {/* Hidden Honeypot field for bot suppression */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="hp_company">Company</label>
                <input
                  id="hp_company"
                  name="hp_company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_company || ""}
                  onChange={handleChange}
                />
              </div>

              {/* Feedback Notifications */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-[rgba(0,210,238,0.15)] border border-[#00d2ee]/50 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00d2ee] shrink-0 mt-0.5" />
                  <div className="text-xs text-white">
                    <span className="font-bold block">Inquiry Transmitted Successfully</span>
                    <span>{feedbackMessage}</span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/50 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-rose-200">
                    <span className="font-bold block">Transmission Notice</span>
                    <span>{feedbackMessage}</span>
                  </div>
                </div>
              )}

              {/* Submit CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--flame w-full sm:w-auto text-sm cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Transmitting..." : "Start a Conversation"}</span>
                </button>

                <a
                  href={`mailto:contact@adotshelor.com?subject=${encodeURIComponent(
                    `[Inquiry] ${formData.subject || "AdotShelor Studio"}`
                  )}`}
                  className="text-xs text-white/50 hover:text-[#00d2ee] transition-colors inline-flex items-center gap-1"
                >
                  <span>Or email directly via mail client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
