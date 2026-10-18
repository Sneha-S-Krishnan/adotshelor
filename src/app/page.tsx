"use client";

import React, { useState, useCallback } from "react";
import { BrandIntro } from "@/components/brand/BrandIntro";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const [introKey, setIntroKey] = useState<number>(0);

  const handleComplete = useCallback(() => {
    setIsSettled(true);
  }, []);

  const handleReplay = useCallback(() => {
    try {
      sessionStorage.removeItem("adotshelor_intro_seen");
    } catch {
      // Ignore storage errors if disabled
    }
    setIsSettled(false);
    setIntroKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Brand Intro Animation (Phase 1-6) */}
      <BrandIntro
        key={introKey}
        isSettled={isSettled}
        onComplete={handleComplete}
      />

      {/* Shared Responsive Sticky Navbar */}
      <Navbar isSettled={isSettled} />

      <main className="flex-1">
        {/* Section 1 (Top): Animated Hero Section */}
        <HeroSection isSettled={isSettled} />

        {/* Section 2: About AdotShelor */}
        <AboutSection />

        {/* Section 3: Our Services */}
        <ServicesSection />

        {/* Section 4: Our Projects */}
        <ProjectsSection />

        {/* Section 5: Who Are We? / Our Team */}
        <TeamSection />

        {/* Section 6: Contact */}
        <ContactSection />
      </main>

      {/* Shared Semantic Footer */}
      <Footer onReplayIntro={handleReplay} />
    </div>
  );
}
