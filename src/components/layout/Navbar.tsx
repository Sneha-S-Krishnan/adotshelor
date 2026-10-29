"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS, CONTACT_CHANNELS } from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { ResizableNavbar } from "@/components/effects/resizable-navbar";

export interface NavbarProps {
  readonly isSettled?: boolean;
}

export function Navbar({ isSettled = true }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track active section as user scrolls
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <ResizableNavbar
      items={[...NAVIGATION_ITEMS]}
      threshold={80}
      compactWidth={920}
      maxWidth={1280}
      activeHref={
        NAVIGATION_ITEMS.find(
          (item) => item.href.slice(1) === activeSection
        )?.href
      }
      label="Primary"
      logo={
        <div id="navbar-logo-target">
          <Logo size="md" href="#home" textId="navbar-logo-text" />
        </div>
      }
      cta={
        <a
          className="btn btn--cyan text-[13.5px] font-semibold px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(0,210,238,0.25)] hover:shadow-[0_0_25px_rgba(0,210,238,0.4)] transition-all"
          href="#contact"
        >
          Let&apos;s Build
        </a>
      }
      className={`!fixed !inset-x-0 !top-0 z-40 w-full transition-opacity duration-500 ${
        isSettled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
}
