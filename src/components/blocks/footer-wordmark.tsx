"use client";

import { useState, useSyncExternalStore } from "react";
import {
  ArrowUpRightIcon,
  FileText,
  Shield,
  X,
} from "lucide-react";

import { TextHoverEffect } from "@/components/effects/text-hover-effect";
import {
  BRAND_INFO,
  CONTACT_CHANNELS,
  FOOTER_NAV,
  FOOTER_SERVICES,
  SOCIAL_LINKS,
} from "@/data/portfolioData";

function subscribeEmpty() {
  return () => {};
}

function getClientYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

const focusRing =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export interface FooterWordmarkProps {
  readonly onReplayIntro?: () => void;
}

export function FooterWordmark({ onReplayIntro }: FooterWordmarkProps) {
  const year = useSyncExternalStore(
    subscribeEmpty,
    getClientYear,
    getServerYear
  );
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(
    null
  );
  const email = CONTACT_CHANNELS[0];

  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--hair-soft)] bg-[#060d17] px-4 pt-16 pb-6 text-white sm:px-6 sm:pt-20 sm:pb-8 lg:px-8">
      <h2 className="sr-only">Footer</h2>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-radial-[ellipse_at_50%_100%] from-brand/12 to-transparent to-70%"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-md">
            <p className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {BRAND_INFO.tagline}
            </p>
            <p className="mt-4 text-pretty text-white/70">
              {BRAND_INFO.subheadline}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(0,210,238,0.28)] bg-[rgba(0,210,238,0.12)] px-3 py-1 text-xs font-medium text-[#00d2ee]">
              <span className="size-2 animate-pulse rounded-full bg-[#00d2ee]" />
              Active Engineering &amp; Client Advisory
            </p>
            {email && (
              <a
                href={email.href}
                className={`group/email mt-5 inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[#00d2ee] ${focusRing}`}
              >
                {email.value}
                <ArrowUpRightIcon
                  aria-hidden
                  className="size-4 transition-transform group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 motion-reduce:transition-none"
                />
              </a>
            )}
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 text-sm sm:gap-x-14"
          >
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#00d2ee]">
                Navigation
              </h3>
              <ul className="grid gap-y-3">
                {FOOTER_NAV.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`text-white/70 transition-colors hover:text-white ${focusRing}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#00d2ee]">
                Services
              </h3>
              <ul className="grid gap-y-3">
                {FOOTER_SERVICES.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`text-white/70 transition-colors hover:text-white ${focusRing}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-[var(--hair)] pt-6 text-sm text-white/60 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>© {year} {BRAND_INFO.name}. All rights reserved.</p>
            <button
              type="button"
              onClick={() => setLegalModal("privacy")}
              className={`transition-colors hover:text-white ${focusRing}`}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal("terms")}
              className={`transition-colors hover:text-white ${focusRing}`}
            >
              Terms of Service
            </button>
            {onReplayIntro && (
              <button
                type="button"
                onClick={onReplayIntro}
                className={`transition-colors hover:text-white ${focusRing}`}
              >
                Replay Intro
              </button>
            )}
          </div>

          <ul className="flex gap-1">
            {SOCIAL_LINKS.map((social) => {
              return (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`AdotShelor on ${social.platform}`}
                    className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00d2ee]"
                  >
                    <span aria-hidden className="text-xs font-semibold">
                      {social.platform === "GitHub"
                        ? "GH"
                        : social.platform === "LinkedIn"
                          ? "in"
                          : "X"}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <TextHoverEffect
        text={BRAND_INFO.name.toLowerCase()}
        className="mx-auto mt-8 max-w-7xl font-black tracking-tight sm:mt-12"
      />

      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-legal-title"
            className="relative w-full max-w-xl rounded-3xl border border-[#00d2ee]/40 bg-[#0b192c] p-6 text-white shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 rounded-xl p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close dialog"
            >
              <X className="size-5" />
            </button>

            {legalModal === "privacy" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#00d2ee]">
                  <Shield className="size-5" />
                  <h3 id="footer-legal-title" className="text-lg font-bold">
                    Privacy Policy
                  </h3>
                </div>
                <p className="text-xs text-white/60">
                  Last updated: October {year}
                </p>
                <div className="max-h-[60vh] space-y-3 overflow-y-auto pr-2 text-sm text-white/80">
                  <p>
                    At AdotShelor, we believe in privacy by design. We do not
                    sell, rent, or trade your personal data.
                  </p>
                  <p>
                    <strong>Information We Collect:</strong> When you submit
                    our contact form, we only receive the information you
                    provide (name, email, service interests, and message)
                    strictly to respond to your inquiry.
                  </p>
                  <p>
                    <strong>Confidentiality:</strong> Every project inquiry and
                    technical discussion is held in strict professional
                    confidence under non-disclosure obligations.
                  </p>
                  <p>
                    <strong>Contact:</strong> For privacy inquiries, please
                    email contact@adotshelor.com.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-[#00d2ee]">
                  <FileText className="size-5" />
                  <h3 id="footer-legal-title" className="text-lg font-bold">
                    Terms of Service
                  </h3>
                </div>
                <p className="text-xs text-white/60">
                  Last updated: October {year}
                </p>
                <div className="max-h-[60vh] space-y-3 overflow-y-auto pr-2 text-sm text-white/80">
                  <p>
                    Welcome to AdotShelor.com. By visiting our website or
                    engaging with our development studio, you agree to these
                    terms.
                  </p>
                  <p>
                    <strong>Studio Services:</strong> AdotShelor provides
                    custom software engineering, product development, and
                    guided technical advisory under mutual client agreements.
                  </p>
                  <p>
                    <strong>Intellectual Property:</strong> Clients retain
                    complete ownership of custom code and deliverables
                    specified in their respective project contracts.
                  </p>
                  <p>
                    <strong>Contact:</strong> For any contractual questions,
                    contact contact@adotshelor.com.
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
