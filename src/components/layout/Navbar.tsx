"use client";

import React, { useState, useEffect } from "react";
import { NAVIGATION_ITEMS } from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { Menu, Close } from "@/components/brand/Icons";

export interface NavbarProps {
  readonly isSettled?: boolean;
}

export function Navbar({ isSettled = true }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

  return (
    <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between gap-4 px-[clamp(14px,1.7vw,22px)] py-3 sm:py-4 pointer-events-none">
      {/* Brand Hard Left */}
      <div
        id="navbar-logo-target"
        className={`pointer-events-auto transition-opacity duration-300 ${
          isSettled ? "opacity-100" : "opacity-0"
        }`}
      >
        <Logo size="md" href="#home" textId="navbar-logo-text" />
      </div>

      {/* Centered Floating Pill Capsule (≥ 940px) */}
      <nav
        className={`pointer-events-auto hidden min-[940px]:block p-[5px] border border-[var(--hair)] rounded-[12px] bg-[rgba(11,25,44,0.75)] backdrop-blur-[16px] shadow-lg transition-opacity duration-500 ${
          isSettled ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Primary"
      >
        <ul className="flex items-center gap-[3px] m-0 p-0 list-none">
          {NAVIGATION_ITEMS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 px-[14px] py-[8px] rounded-[8px] text-[13.5px] font-[450] transition-all duration-200 ${
                    isActive
                      ? "text-[#00D2EE] bg-[rgba(0,210,238,0.14)] font-semibold shadow-sm"
                      : "text-[rgba(255,255,255,0.85)] hover:bg-[rgba(0,210,238,0.1)] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hard Right CTA & Mobile Burger */}
      <div
        className={`pointer-events-auto flex items-center gap-2.5 transition-opacity duration-500 ${
          isSettled ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          className="btn btn--cyan text-[13.5px] font-semibold hidden sm:inline-flex px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(0,210,238,0.25)] hover:shadow-[0_0_25px_rgba(0,210,238,0.4)] transition-all"
          href="#contact"
        >
          Let&apos;s Build
        </a>

        <button
          className="min-[940px]:hidden grid place-items-center w-10 h-10 border border-[var(--hair)] rounded-[10px] bg-[rgba(11,25,44,0.7)] backdrop-blur-[10px] text-white cursor-pointer hover:border-[#00D2EE] transition-colors"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Sheet */}
      {open && (
        <div className="pointer-events-auto fixed inset-x-3 top-[68px] p-5 border border-[var(--hair)] rounded-[18px] bg-[rgba(6,13,23,0.98)] backdrop-blur-[24px] shadow-2xl z-50 min-[940px]:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="m-0 mb-4 p-0 list-none grid gap-1.5">
            {NAVIGATION_ITEMS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3.5 py-2.5 rounded-[10px] text-base font-medium text-[rgba(255,255,255,0.9)] hover:bg-[rgba(0,210,238,0.1)] hover:text-[#00D2EE] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--cyan w-full justify-center py-3 text-sm font-semibold rounded-xl"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Build
          </a>
        </div>
      )}
    </header>
  );
}
