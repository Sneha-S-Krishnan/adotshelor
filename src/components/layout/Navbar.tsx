"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAVIGATION_ITEMS } from "@/data/portfolioData";
import { Logo } from "@/components/brand/Logo";
import { Menu, Close } from "@/components/brand/Icons";

export interface NavbarProps {
  readonly isSettled?: boolean;
}

export function Navbar({ isSettled = true }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on pathname change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between gap-4 px-[clamp(14px,1.7vw,22px)] py-3 sm:py-4">
      {/* Brand Hard Left */}
      <div
        id="navbar-logo-target"
        className={`pointer-events-auto transition-opacity duration-300 ${
          isSettled ? "opacity-100" : "opacity-100 lg:opacity-0"
        }`}
      >
        <Logo size="md" href="/" textId="navbar-logo-text" />
      </div>

      {/* Centered Floating Pill Capsule (≥ lg / 1024px) */}
      <nav
        className={`pointer-events-auto hidden lg:block p-[5px] border border-[var(--hair)] rounded-[14px] bg-[rgba(6,13,23,0.82)] backdrop-blur-[20px] shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-opacity duration-500 ${
          isSettled ? "opacity-100" : "opacity-0"
        }`}
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
      <div
        className={`pointer-events-auto flex items-center gap-2.5 transition-opacity duration-500 ${
          isSettled ? "opacity-100" : "opacity-100 lg:opacity-0"
        }`}
      >
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

      {/* Mobile Menu Dropdown Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="pointer-events-auto fixed inset-x-3 top-[68px] p-5 border border-[var(--hair)] rounded-[20px] bg-[rgba(6,13,23,0.96)] backdrop-blur-[24px] shadow-2xl z-50 lg:hidden"
          >
            <ul className="m-0 mb-4 p-0 list-none grid gap-1.5">
              {NAVIGATION_ITEMS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname?.startsWith(link.href + "/");

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2.5 rounded-[12px] text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[rgba(0,210,238,0.15)] text-[#00D2EE] font-semibold border border-[rgba(0,210,238,0.3)]"
                          : "text-white/85 hover:bg-white/[0.06] hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              className="btn btn--cyan w-full justify-center py-3 text-sm font-semibold rounded-xl shadow-[0_0_20px_rgba(0,210,238,0.2)]"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Build
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
