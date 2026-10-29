"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "@/components/brand/Icons";
import { BRAND_INFO, HERO_HIGHLIGHTS } from "@/data/portfolioData";
import { CheckCircle2, Compass, Layers, ShieldCheck } from "lucide-react";

export interface HeroSectionProps {
  readonly isSettled?: boolean;
}

const BARS = [38, 56, 48, 76, 94];

function getInitialReadyState(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroSection({ isSettled = true }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState<boolean>(getInitialReadyState);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    if (isSettled) {
      video.currentTime = 0;
      const play = video.play();
      if (play?.catch) play.catch(() => {});
    }
  }, [isSettled]);

  return (
    <section id="home" className="hero">
      {/* Background Media with Crossfade */}
      <div className="hero__media">
        <video
          ref={videoRef}
          className={`hero__video ${ready ? "is-ready" : ""}`}
          src="/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
        />
        {/* Asymmetric Scrim */}
        <div className="hero__scrim" aria-hidden="true" />
        {/* Hairline Grid Rules */}
        <div className="hero__rules" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero__inner">
        <div className="hero__lead">
          {/* Eyebrow Note */}
          <p className="hero__note">
            <Globe className="hero__note-icon" />
            <span>
              AdotShelor — Technology &amp; Product Development Studio
              <br />
              Digital solutions engineered with purpose and technical clarity
            </span>
          </p>

          {/* Main heading: From Problems to Powerful Solutions. */}
          <h1 className="hero__title">
            From Problems to
            <br />
            Powerful <em>Solutions.</em>
          </h1>

          {/* Lede Paragraph */}
          <p className="hero__sub">{BRAND_INFO.subheadline}</p>

          {/* CTA Row: Primary & Secondary Buttons */}
          <div className="hero__cta">
            <Link className="btn btn--cyan hero__go" href="/contact">
              {BRAND_INFO.primaryButtonText}
              <span className="hero__go-dot" aria-hidden="true">
                <ArrowRight />
              </span>
            </Link>

            <Link
              className="btn btn--ghost-cyan hero__secondary"
              href="/projects"
            >
              <Compass className="w-4 h-4 text-[#00d2ee]" />
              <span>{BRAND_INFO.secondaryButtonText}</span>
            </Link>
          </div>

          {/* Key highlights: Practical Solutions, Transparent Process, Long-Term Support */}
          <div className="hero__highlights">
            <span className="hero__highlights-label">Key Highlights</span>
            <ul className="hero__highlights-grid">
              {HERO_HIGHLIGHTS.map((item, idx) => (
                <li key={item.title} className="highlight-pill">
                  <div className="highlight-pill__icon">
                    {idx === 0 && <CheckCircle2 className="w-4 h-4 text-[#00d2ee]" />}
                    {idx === 1 && <Layers className="w-4 h-4 text-[#38bdf8]" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4 text-[#00d2ee]" />}
                  </div>
                  <div>
                    <h3 className="highlight-pill__title">{item.title}</h3>
                    <p className="highlight-pill__desc">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ghost Analytics & Studio Status Panel (≥1120px) */}
        <aside className="hero__ghost" aria-hidden="true">
          <div className="ghost__row">
            <div className="ghost__bars">
              {BARS.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <p className="ghost__kpi">
              <strong>100%</strong>
              Practical
              <br />
              Execution
            </p>
          </div>
          <h2 className="ghost__title">Built for Real Purpose</h2>
          <p className="ghost__copy">
            We bypass agency fluff to engineer robust applications, automate
            cumbersome workflows, and ensure you retain full technical mastery of
            what we build.
          </p>

          <div className="ghost__metrics mt-6 pt-5 border-t border-[var(--hair)] space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Development Approach</span>
              <span className="text-[#00d2ee] font-mono font-bold">Disciplined</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Code Ownership</span>
              <span className="text-[#38bdf8] font-mono font-bold">100% Client Owned</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/60">Communication</span>
              <span className="text-white font-mono font-bold">Direct Engineers</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
