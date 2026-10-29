"use client";

import React, { useState } from "react";
import { CONTACT_CHANNELS } from "@/data/portfolioData";
import {
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  serviceInterest: "problem" | "build" | "understand" | "general";
  subject: string;
  message: string;
  hp_company?: string;
}

const serviceOptions: {
  value: FormState["serviceInterest"];
  number: string;
  label: string;
  description: string;
}[] = [
  {
    value: "problem",
    number: "01",
    label: "Solve a problem",
    description: "Make something work better",
  },
  {
    value: "build",
    number: "02",
    label: "Build an idea",
    description: "Bring a product to life",
  },
  {
    value: "understand",
    number: "03",
    label: "Get guidance",
    description: "Find the right next step",
  },
];

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
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setFeedbackMessage(
        data.message || "Thank you. Your message was received."
      );
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
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#080f18] py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 h-[34rem] w-[34rem] rounded-full bg-[#00d2ee]/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 -left-48 h-[34rem] w-[34rem] rounded-full bg-[#0284c7]/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5 lg:pt-8">
          <div className="mb-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <span className="h-px w-8 bg-[#00d2ee]" />
            A good place to begin
          </div>

          <h2
            id="contact-heading"
            className="max-w-xl text-[clamp(2.75rem,5.5vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white"
          >
            Let&apos;s make
            <br />
            something{" "}
            <span className="font-[var(--font-italic)] font-normal italic tracking-[-0.04em] text-[#62d9eb]">
              meaningful.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            A challenge, a first idea, or a product that needs a fresh
            perspective. Tell us where you are—we&apos;ll help you find a clear
            way forward.
          </p>

          <div className="mt-11 max-w-md border-t border-white/10 pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
              Your first conversation
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Direct dialogue with the engineers who do the work. No sales
              hand-off, just thoughtful answers and an honest next step.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {CONTACT_CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group flex max-w-md items-center justify-between rounded-2xl border border-white/[0.09] bg-white/[0.025] px-5 py-4 transition-colors hover:border-[#00d2ee]/30 hover:bg-white/[0.045]"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#62d9eb]">
                    <Mail aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-white/85">
                      {channel.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#62d9eb]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[1.75rem] border border-white/[0.1] bg-[#101a27]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-5 border-b border-white/[0.09] pb-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#62d9eb]">
                  The details
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                  Start a conversation
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  A little context helps us make the first reply useful.
                </p>
              </div>
              <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-medium text-white/50 sm:flex">
                01
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              <fieldset>
                <legend className="mb-3 text-xs font-medium text-white/75">
                  What would you like to do?
                </legend>
                <div className="grid gap-2 sm:grid-cols-3">
                  {serviceOptions.map((option) => {
                    const selected = formData.serviceInterest === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={selected}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            serviceInterest: option.value,
                          }))
                        }
                        className="contact-choice min-h-[92px] rounded-xl border p-3 text-left transition-colors"
                      >
                        <span
                          className={`text-[10px] font-medium tracking-[0.14em] ${
                            selected ? "text-[#62d9eb]" : "text-white/35"
                          }`}
                        >
                          {option.number}
                        </span>
                        <span className="mt-2 block text-xs font-semibold text-white/85">
                          {option.label}
                        </span>
                        <span className="mt-1 block text-[10px] leading-4 text-white/45">
                          {option.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-white/70"
                  >
                    Your name <span className="text-[#62d9eb]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#080f18]/70 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#62d9eb]/60 focus:outline-none focus:ring-2 focus:ring-[#62d9eb]/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-white/70"
                  >
                    Email address <span className="text-[#62d9eb]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#080f18]/70 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#62d9eb]/60 focus:outline-none focus:ring-2 focus:ring-[#62d9eb]/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Subject <span className="text-[#62d9eb]">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What are you thinking about?"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#080f18]/70 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-[#62d9eb]/60 focus:outline-none focus:ring-2 focus:ring-[#62d9eb]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  A little more about it{" "}
                  <span className="text-[#62d9eb]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are you working on, and where would you like a hand?"
                  className="w-full resize-y rounded-xl border border-white/[0.1] bg-[#080f18]/70 px-4 py-3.5 text-sm leading-6 text-white placeholder:text-white/30 transition-colors focus:border-[#62d9eb]/60 focus:outline-none focus:ring-2 focus:ring-[#62d9eb]/15"
                />
              </div>

              <div className="hidden" aria-hidden="true">
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

              {status !== "idle" && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl border p-4 ${
                    status === "success"
                      ? "border-[#62d9eb]/25 bg-[#00d2ee]/[0.07] text-white/85"
                      : "border-rose-400/25 bg-rose-500/[0.07] text-rose-100"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#62d9eb]"
                    />
                  ) : (
                    <AlertCircle
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-300"
                    />
                  )}
                  <p className="text-xs leading-5">{feedbackMessage}</p>
                </div>
              )}

              <div className="flex flex-col gap-4 border-t border-white/[0.09] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[210px] text-[11px] leading-5 text-white/40">
                  Your details stay with us. We only use them to respond.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--light min-h-12 w-full text-sm sm:w-auto disabled:opacity-60"
                >
                  <span>{loading ? "Sending..." : "Send your inquiry"}</span>
                  <Send aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="text-center sm:text-right">
                <a
                  href={`mailto:contact@adotshelor.com?subject=${encodeURIComponent(
                    `[Inquiry] ${formData.subject || "AdotShelor Studio"}`
                  )}`}
                  className="inline-flex items-center gap-1 text-[11px] text-white/40 transition-colors hover:text-[#62d9eb]"
                >
                  Prefer your email app? Write to us
                  <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
