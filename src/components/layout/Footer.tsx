import React from "react";
import Link from "next/link";
import {
  NAVIGATION_ITEMS,
  CONTACT_CHANNELS,
  SOCIAL_LINKS,
} from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";

export interface FooterProps {
  readonly onReplayIntro?: () => void;
}

export function Footer({ onReplayIntro }: FooterProps = {}) {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-white border-t border-slate-200/80 pt-16 pb-12 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-100">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" href="#home" />
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              AdotShelor.com is an independent software and technology brand
              engineering modern web applications, accessible digital products,
              and dependable architectural foundations.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-800 border border-cyan-200/60">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                Active Engineering & Preview Stage
              </span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Page Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-700 transition-colors inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links Column */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Direct Contact
              </h4>
              <ul className="space-y-1.5 text-sm">
                {CONTACT_CHANNELS.map((channel) => (
                  <li key={channel.label} className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs w-20">
                      {channel.label}:
                    </span>
                    <a
                      href={channel.href}
                      className="text-cyan-700 font-medium hover:underline"
                    >
                      {channel.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Social Presence
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {SOCIAL_LINKS.map((social) => (
                  <span
                    key={social.platform}
                    className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-200/60 inline-flex items-center gap-1"
                    title="Social profiles will be published upon official brand launch"
                  >
                    <span>{social.platform}</span>
                    <span className="text-[10px] text-slate-400">(TBA)</span>
                  </span>
                ))}
              </div>
              <p className="mt-1.5 text-[11px] text-slate-400">
                Official public channels will be published upon launch.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} AdotShelor.com. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {onReplayIntro && (
              <button
                type="button"
                onClick={onReplayIntro}
                className="text-slate-400 hover:text-cyan-700 transition-colors cursor-pointer"
              >
                Replay Brand Intro
              </button>
            )}
            <span>Built with Next.js App Router & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
