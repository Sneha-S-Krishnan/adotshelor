"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FOOTER_NAV,
  FOOTER_SERVICES,
  CONTACT_CHANNELS,
  SOCIAL_LINKS,
  BRAND_INFO,
} from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { Mail, ExternalLink, X, Shield, FileText } from "lucide-react";

function subscribeEmpty() {
  return () => {};
}
function getClientYear() {
  return new Date().getFullYear();
}
function getServerYear() {
  return 2026;
}

export interface FooterProps {
  readonly onReplayIntro?: () => void;
}

export function Footer({ onReplayIntro }: FooterProps = {}) {
  const currentYear = React.useSyncExternalStore(
    subscribeEmpty,
    getClientYear,
    getServerYear
  );

  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer className="w-full bg-[#060D17] border-t border-[var(--hair-soft)] pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[var(--hair)]">
          {/* Brand Column: Logo & Short brand description */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="md" href="/" />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              {BRAND_INFO.subheadline}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[rgba(0,210,238,0.12)] text-[#00d2ee] border border-[rgba(0,210,238,0.28)]">
                <span className="w-2 h-2 rounded-full bg-[#00d2ee] animate-pulse" />
                Active Engineering &amp; Client Advisory
              </span>
            </div>
          </div>

          {/* Navigation Column: Home, About, Services, Projects, Contact */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ee]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#00d2ee] transition-colors inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column: Problem Solving, Idea-to-Product, Guided Development */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ee]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-[#00d2ee] transition-colors inline-flex items-center"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column: Official business email, GitHub, LinkedIn, Social profiles */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ee] mb-2.5">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                {CONTACT_CHANNELS.map((channel) => (
                  <li key={channel.label} className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#00d2ee] shrink-0" />
                    <a
                      href={channel.href}
                      className="text-white hover:text-[#00d2ee] font-medium transition-colors"
                    >
                      {channel.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ee] mb-2">
                Social Profiles
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url || "#"}
                    target={social.url ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-black/40 text-white/75 hover:text-white hover:border-[#00d2ee] border border-[var(--hair)] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{social.platform}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} AdotShelor. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className="hover:text-[#00d2ee] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">•</span>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className="hover:text-[#00d2ee] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            {onReplayIntro && (
              <>
                <span className="text-white/20">•</span>
                <button
                  type="button"
                  onClick={onReplayIntro}
                  className="hover:text-[#00d2ee] transition-colors cursor-pointer"
                >
                  Replay Intro
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#0B192C] border border-[#00d2ee]/40 text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === "privacy" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#00d2ee]">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Privacy Policy</h3>
                </div>
                <p className="text-xs text-white/60">
                  Last updated: October {currentYear}
                </p>
                <div className="text-sm text-white/80 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  <p>
                    At AdotShelor, we believe in privacy by design. We do not sell, rent, or trade your personal data.
                  </p>
                  <p>
                    <strong>Information We Collect:</strong> When you submit our contact form, we only receive the information you provide (name, email, service interests, and message) strictly to respond to your inquiry.
                  </p>
                  <p>
                    <strong>Confidentiality:</strong> Every project inquiry and technical discussion is held in strict professional confidence under non-disclosure obligations.
                  </p>
                  <p>
                    <strong>Contact:</strong> For privacy inquiries, please email contact@adotshelor.com.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#00d2ee]">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Terms of Service</h3>
                </div>
                <p className="text-xs text-white/60">
                  Last updated: October {currentYear}
                </p>
                <div className="text-sm text-white/80 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                  <p>
                    Welcome to AdotShelor.com. By visiting our website or engaging with our development studio, you agree to these terms.
                  </p>
                  <p>
                    <strong>Studio Services:</strong> AdotShelor provides custom software engineering, product development, and guided technical advisory under mutual client agreements.
                  </p>
                  <p>
                    <strong>Intellectual Property:</strong> Clients retain complete ownership of custom code and deliverables specified in their respective project contracts.
                  </p>
                  <p>
                    <strong>Contact:</strong> For any contractual questions, contact contact@adotshelor.com.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
