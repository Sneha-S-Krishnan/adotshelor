"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CONTACT_CHANNELS } from "@/data/portfolioData";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    show: boolean;
    mailtoUrl?: string;
  }>({ show: false });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please specify a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmissionFeedback({ show: false });
      return;
    }

    // Construct honest mailto link since backend service is not yet connected
    const encodedSubject = encodeURIComponent(
      `[AdotShelor Inquiry] ${formData.subject}`
    );
    const encodedBody = encodeURIComponent(
      `Hello AdotShelor,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:contact@adotshelor.com?subject=${encodedSubject}&body=${encodedBody}`;

    setSubmissionFeedback({
      show: true,
      mailtoUrl,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 border-t border-slate-200/70 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <SectionHeading
        badge="Contact"
        badgeAccent="blue"
        title={
          <>
            Start a Conversation &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Get in Touch
            </span>
          </>
        }
        subtitle="Reach out regarding software initiatives, technical advisory, or engineering collaborations. Direct email channels and form validation available below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Email & Status Notice */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Direct Contact Channels
            </h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              We welcome technical inquiries, product discussions, and architecture
              consultations. Contact us directly through official email:
            </p>

            <div className="mt-6 space-y-3">
              {CONTACT_CHANNELS.map((channel) => (
                <div
                  key={channel.label}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                >
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      className="text-sm font-bold text-cyan-700 hover:text-cyan-800 transition-colors"
                    >
                      {channel.value}
                    </a>
                  </div>
                  <a
                    href={channel.href}
                    className="p-2 rounded-lg bg-white border border-slate-200/70 text-cyan-700 hover:bg-cyan-50 transition-colors"
                    aria-label={`Send email to ${channel.value}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {/* Honest Backend Service Notice */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-600 font-bold text-sm shrink-0">
                  ℹ
                </span>
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Service Notice:</strong> Automated contact routing is
                  in pre-launch testing. For guaranteed response, please email{" "}
                  <a
                    href="mailto:contact@adotshelor.com"
                    className="underline font-semibold hover:text-amber-950"
                  >
                    contact@adotshelor.com
                  </a>{" "}
                  directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accessible Form */}
        <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Send an Inquiry
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Fill out the fields below. Client-side validation ensures all required
            information is formatted cleanly.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Morgan"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Subject <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Custom Web Application Inquiry"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.subject
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
                }`}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements, scope, or technical questions..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-slate-50/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 resize-y ${
                  errors.message
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-cyan-500 focus:ring-cyan-100"
                }`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-rose-600 font-medium">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submission Feedback Banner (Transparent, No False Claims) */}
            {submissionFeedback.show && (
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                  <span>✓ Form Validated</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As noted above, a direct form backend is not connected. To send
                  your validated message now, click the button below to dispatch it
                  via your local email client directly to{" "}
                  <strong>contact@adotshelor.com</strong>.
                </p>
                {submissionFeedback.mailtoUrl && (
                  <div className="pt-1">
                    <Button
                      variant="primary"
                      size="sm"
                      href={submissionFeedback.mailtoUrl}
                      isExternal
                      icon={
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      }
                    >
                      Dispatch Email to contact@adotshelor.com
                    </Button>
                  </div>
                )}
              </div>
            )}

            <div className="pt-2">
              <Button type="submit" variant="primary" size="md">
                Validate & Prepare Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
