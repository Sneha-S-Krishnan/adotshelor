"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export interface NavbarProps {
  readonly isSettled?: boolean;
}

export function Navbar({ isSettled = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track active section as user scrolls
  useEffect(() => {
    const sectionIds = NAVIGATION_ITEMS.map((item) =>
      item.href.replace("#", "")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full glass-navbar bg-white/90 backdrop-blur-md border-b border-slate-200/70 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo Anchor / Target */}
        <div id="navbar-logo-target" className="flex items-center min-w-[140px]">
          <div
            className={`transition-opacity duration-300 ${
              isSettled ? "opacity-100" : "opacity-0"
            }`}
          >
            <Logo size="md" href="#home" textId="navbar-logo-text" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600 transition-opacity duration-500 ${
            isSettled ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Main Navigation"
        >
          {NAVIGATION_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-150 select-none ${
                  isActive
                    ? "text-cyan-700 bg-cyan-50/90 font-semibold shadow-2xs"
                    : "hover:text-slate-900 hover:bg-slate-100/70"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact CTA */}
        <div
          className={`hidden md:flex items-center gap-3 transition-opacity duration-500 ${
            isSettled ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button variant="primary" size="sm" href="#contact">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div
          className={`flex items-center md:hidden transition-opacity duration-500 ${
            isSettled ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {NAVIGATION_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-50 text-cyan-800 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <Button
              variant="primary"
              size="md"
              fullWidth
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
