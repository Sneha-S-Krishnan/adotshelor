"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS, CONTACT_CHANNELS } from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { Menu, Close } from "@/components/brand/Icons";
import { ArrowRight, ChevronRight, Mail, ExternalLink } from "lucide-react";

export interface NavbarProps {
  readonly isSettled?: boolean;
}

export function Navbar({ isSettled = true }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile sidebar on pathname change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between gap-4 px-[clamp(14px,1.7vw,22px)] py-3 sm:py-4 pointer-events-none">
        {/* Brand Hard Left */}
        <div
          id="navbar-logo-target"
          className="pointer-events-auto transition-opacity duration-300 opacity-100"
        >
          <Logo size="md" href="/" textId="navbar-logo-text" />
        </div>

        {/* Centered Floating Pill Capsule (≥ lg / 1024px) */}
        <nav
          className="pointer-events-auto hidden lg:block p-[5px] border border-[var(--hair)] rounded-[14px] bg-[rgba(6,13,23,0.82)] backdrop-blur-[20px] shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-opacity duration-500 opacity-100"
          aria-label="Primary"
        >
          <ul
            className="flex items-center gap-[2px] m-0 p-0 list-none relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {NAVIGATION_ITEMS.map((link, idx) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(link.href + "/");

              return (
                <li key={link.label} className="relative">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className={`relative z-10 inline-flex items-center gap-1.5 px-[15px] py-[8px] rounded-[10px] text-[13.5px] font-[500] transition-colors duration-200 select-none ${
                      isActive
                        ? "text-[#00D2EE]"
                        : "text-white/75 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>

                  {/* Spring layout active pill indicator (Emil Kowalski micro-interaction) */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 z-0 rounded-[10px] bg-[rgba(0,210,238,0.14)] border border-[rgba(0,210,238,0.3)] shadow-[0_0_15px_rgba(0,210,238,0.15)]"
                    />
                  )}

                  {/* Subtle hover background preview */}
                  {!isActive && hoveredIndex === idx && (
                    <motion.div
                      layoutId="navbar-hover-pill"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="absolute inset-0 z-0 rounded-[10px] bg-white/[0.06]"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hard Right CTA & Mobile Burger */}
        <div className="pointer-events-auto flex items-center gap-2.5 transition-opacity duration-500 opacity-100">
          <Link
            className="btn btn--cyan text-[13.5px] font-semibold hidden sm:inline-flex px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(0,210,238,0.25)] hover:shadow-[0_0_25px_rgba(0,210,238,0.4)] transition-all"
            href="/contact"
          >
            Let&apos;s Build
          </Link>

          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 border border-[var(--hair)] rounded-[10px] bg-[rgba(11,25,44,0.7)] backdrop-blur-[10px] text-white cursor-pointer hover:border-[#00D2EE] transition-colors"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar & Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark glassmorphic backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Sliding Mobile Sidebar Drawer */}
            <motion.aside
              data-testid="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[84vw] max-w-[340px] bg-[#060D17]/98 backdrop-blur-2xl border-l border-[var(--hair)] flex flex-col justify-between p-6 shadow-[-16px_0_40px_rgba(0,0,0,0.85)] lg:hidden"
              aria-label="Mobile Navigation Sidebar"
            >
              <div>
                {/* Sidebar Header: Logo & Close */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <Logo size="sm" href="/" onClick={() => setOpen(false)} />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 rounded-lg border border-[var(--hair)] bg-[rgba(11,25,44,0.8)] text-white hover:text-[#00D2EE] hover:border-[#00D2EE] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Close className="w-4 h-4" />
                  </button>
                </div>

                {/* Sidebar Navigation Items */}
                <nav className="mt-6" aria-label="Mobile Primary">
                  <ul className="m-0 p-0 list-none space-y-1.5">
                    {NAVIGATION_ITEMS.map((link) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname === link.href || pathname?.startsWith(link.href + "/");

                      return (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                              isActive
                                ? "bg-[rgba(0,210,238,0.14)] text-[#00D2EE] font-semibold border border-[rgba(0,210,238,0.3)] shadow-[0_0_15px_rgba(0,210,238,0.1)]"
                                : "text-white/80 hover:bg-white/[0.05] hover:text-white"
                            }`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span>{link.label}</span>
                            <ChevronRight
                              className={`w-4 h-4 transition-transform ${
                                isActive ? "text-[#00D2EE] translate-x-0.5" : "text-white/30"
                              }`}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Sidebar Footer: CTA & Direct Channels */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <Link
                  className="btn btn--cyan w-full justify-center py-3 text-sm font-semibold rounded-xl shadow-[0_0_20px_rgba(0,210,238,0.25)] flex items-center gap-2"
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  <span>Let&apos;s Build</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-center pt-2">
                  <a
                    href="mailto:contact@adotshelor.com"
                    className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-[#00D2EE] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#00D2EE]" />
                    <span>contact@adotshelor.com</span>
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
