"use client";

import React, { useState, useEffect, useRef } from "react";

export interface BrandIntroProps {
  readonly onComplete?: () => void;
  readonly isSettled: boolean;
}

const FULL_WORDMARK = "AdotShelor";

export function BrandIntro({ onComplete, isSettled }: BrandIntroProps) {
  const [phase, setPhase] = useState<
    "init" | "typing" | "sliding-dotcom" | "holding" | "flying" | "settled"
  >(isSettled ? "settled" : "init");
  const [typedLength, setTypedLength] = useState<number>(0);
  const [flightStyle, setFlightStyle] = useState<React.CSSProperties>({});
  const [overlayOpacity, setOverlayOpacity] = useState<number>(1);
  const [shouldRender, setShouldRender] = useState<boolean>(!isSettled);

  const wordmarkRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let hasSeenIntro = false;
    try {
      hasSeenIntro =
        typeof window !== "undefined" &&
        sessionStorage.getItem("adotshelor_intro_seen") === "true";
    } catch {
      // Ignore storage errors if disabled
    }

    if (prefersReducedMotion || hasSeenIntro) {
      const skipTimer = setTimeout(() => {
        setPhase("settled");
        setShouldRender(false);
        onCompleteRef.current?.();
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    // Step 1: Start on clean light screen, begin typing after short pause
    const startTimer = setTimeout(() => {
      setPhase("typing");
    }, 280);

    return () => clearTimeout(startTimer);
  }, []);

  // Step 2: Typewriter effect for "AdotShelor"
  useEffect(() => {
    if (phase !== "typing") return;

    if (typedLength < FULL_WORDMARK.length) {
      const typeSpeed = 75; // 75ms per character
      const timer = setTimeout(() => {
        setTypedLength((prev) => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timer);
    } else {
      // Typing finished, brief pause before sliding .com out
      const timer = setTimeout(() => {
        setPhase("sliding-dotcom");
      }, 140);
      return () => clearTimeout(timer);
    }
  }, [phase, typedLength]);

  // Step 3 & 4: Slide .com out, then hold
  useEffect(() => {
    if (phase !== "sliding-dotcom") return;

    // Slide duration is ~500ms, then hold
    const holdTimer = setTimeout(() => {
      setPhase("holding");
    }, 550);

    return () => clearTimeout(holdTimer);
  }, [phase]);

  // Step 4 -> 5: Hold briefly, then calculate coordinates and initiate flight to navbar
  useEffect(() => {
    if (phase !== "holding") return;

    const flightTimer = setTimeout(() => {
      const targetEl =
        document.getElementById("navbar-logo-text") ||
        document.getElementById("navbar-logo-target");
      const currentEl = wordmarkRef.current;

      if (targetEl && currentEl) {
        const targetRect = targetEl.getBoundingClientRect();
        const currentRect = currentEl.getBoundingClientRect();

        const deltaX = targetRect.left - currentRect.left;
        const deltaY = targetRect.top - currentRect.top;
        const scale = targetRect.height / currentRect.height;

        setFlightStyle({
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`,
          transformOrigin: "top left",
          transition: "transform 720ms cubic-bezier(0.16, 1, 0.3, 1)",
        });

        setOverlayOpacity(0);
        setPhase("flying");

        // Step 6: Settle into navbar
        setTimeout(() => {
          setPhase("settled");
          setShouldRender(false);
          try {
            sessionStorage.setItem("adotshelor_intro_seen", "true");
          } catch {
            // Ignore storage errors if disabled
          }
          onCompleteRef.current?.();
        }, 740);
      } else {
        // Fallback if target element not found
        setPhase("settled");
        setShouldRender(false);
        onCompleteRef.current?.();
      }
    }, 700); // 700ms readable hold

    return () => clearTimeout(flightTimer);
  }, [phase]);

  if (!shouldRender || phase === "settled") {
    return null;
  }

  const typedText = FULL_WORDMARK.slice(0, typedLength);
  const showDotCom = phase !== "init" && phase !== "typing";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-600 ease-out"
      style={{
        opacity: overlayOpacity,
        backgroundColor: phase === "flying" ? "transparent" : "#f8fafc",
      }}
      aria-hidden="false"
    >
      {/* Ambient background glow during intro */}
      {phase !== "flying" && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-[500px] h-[300px] glow-ambient-cyan blur-3xl opacity-80" />
          <div className="w-[400px] h-[250px] glow-ambient-purple blur-3xl opacity-60 -translate-x-12 translate-y-8" />
        </div>
      )}

      {/* Animating Wordmark Container */}
      <div
        ref={wordmarkRef}
        style={flightStyle}
        className="relative z-10 flex items-baseline select-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
      >
        {/* "AdotShelor" characters */}
        <span className="text-slate-900 tracking-tight font-extrabold">
          {typedText}
        </span>

        {/* Sliding ".com" */}
        <span
          className="overflow-hidden inline-flex items-baseline transition-all duration-500 ease-out font-bold text-cyan-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ml-1"
          style={{
            maxWidth: showDotCom ? "220px" : "0px",
            opacity: showDotCom ? 1 : 0,
            transform: showDotCom ? "translateX(0)" : "translateX(-12px)",
          }}
        >
          .com
        </span>

        {/* Blinking Typing Cursor */}
        {phase === "typing" && (
          <span
            className="inline-block w-[3px] h-[0.9em] bg-cyan-500 ml-1 translate-y-[0.1em] animate-pulse"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
