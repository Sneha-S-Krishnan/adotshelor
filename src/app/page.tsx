"use client";

import React, { useState, useCallback } from "react";
import { BrandIntro } from "@/components/brand/BrandIntro";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
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
    <div className="min-h-screen flex flex-col bg-[#060D17] text-white">
      {/* Brand Intro Animation */}
      <BrandIntro
        key={introKey}
        isSettled={isSettled}
        onComplete={handleComplete}
      />

      {/* Shared Responsive Sticky Navbar */}
      <Navbar isSettled={isSettled} />

      <main id="main" className="flex-1">
        {/* Home */}
        <HeroSection />

        {/* About */}
        <DifferenceSection />

        {/* Services */}
        <ServicesSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Our Approach */}
        <ProcessSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* 11. Website Footer */}
      <Footer onReplayIntro={handleReplay} />
    </div>
  );
}
