"use client";

import { ArrowRight, Globe } from "@/components/brand/Icons";
import { BRAND_INFO, HERO_HIGHLIGHTS } from "@/data/portfolioData";
import { CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import { WavyBackground } from "@/components/velora/wavy-background";

const HIGHLIGHT_ICONS = [CheckCircle2, Layers, ShieldCheck] as const;

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero__waves" aria-hidden="true">
        <WavyBackground
          waves={6}
          blur={22}
          opacity={0.32}
          colors={["--brand-from", "--brand-via", "--brand-to"]}
        />
      </div>
      <div className="hero__ambient" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__lead">
          <p className="hero__eyebrow">
            <Globe className="hero__eyebrow-icon" />
            <span>AdotShelor</span>
            <span className="hero__eyebrow-divider" aria-hidden="true" />
            <span>Technology &amp; Product Development Studio</span>
          </p>

          <h1 className="hero__title">
            From problems to
            <span>
              powerful <em>solutions.</em>
            </span>
          </h1>

          <p className="hero__sub">{BRAND_INFO.subheadline}</p>

          <div className="hero__cta">
            <a className="btn btn--cyan hero__go" href="#contact">
              <span>{BRAND_INFO.primaryButtonText}</span>
              <span className="hero__go-dot" aria-hidden="true">
                <ArrowRight />
              </span>
            </a>
            <a className="btn btn--ghost-cyan hero__secondary" href="#projects">
              {BRAND_INFO.secondaryButtonText}
            </a>
          </div>
        </div>

        <div className="hero__highlights">
          <p className="hero__highlights-label">Built around what matters</p>
          <ul className="hero__highlights-grid">
            {HERO_HIGHLIGHTS.map((item, index) => {
              const Icon = HIGHLIGHT_ICONS[index];

              return (
                <li key={item.title} className="hero__highlight">
                  <Icon className="hero__highlight-icon" aria-hidden="true" />
                  <div>
                    <h2 className="hero__highlight-title">{item.title}</h2>
                    <p className="hero__highlight-desc">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
