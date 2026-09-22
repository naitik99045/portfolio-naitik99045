"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { NavigationOverlay } from "@/components/ui/NavigationOverlay";
import { SemanticFallback } from "@/components/ui/SemanticFallback";
import { soundManager } from "@/components/ui/AudioController";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDown, Building2, Globe, Github, Terminal } from "lucide-react";

// Dynamically import Scene to avoid SSR issues with Three.js canvas
const Scene = dynamic(
  () => import("@/components/canvas/Scene").then((mod) => mod.Scene),
  { ssr: false }
);

const TOTAL_SECTIONS = 6;

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [is2DView, setIs2DView] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [typedSearchQuery, setTypedSearchQuery] = useState("");
  const [activeKeyChar, setActiveKeyChar] = useState("");
  const [lidOpenAngle, setLidOpenAngle] = useState<number | undefined>(undefined);

  const containerRef = useRef<HTMLDivElement>(null);
  const prevSectionRef = useRef(0);

  // Play startup boot chime once on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      soundManager.playBootChime();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Track window scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = window.scrollY || el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;

      setScrollProgress(progress);

      // Map progress to active section (0 to 5)
      const sectionIdx = Math.min(
        TOTAL_SECTIONS - 1,
        Math.floor(progress * TOTAL_SECTIONS)
      );
      setCurrentSection(sectionIdx);

      // Play subtle tactile click sound when transitioning across sections
      if (sectionIdx !== prevSectionRef.current) {
        if (soundEnabled) soundManager.playKeyClick();
        prevSectionRef.current = sectionIdx;
      }

      // If in Skills section, generate typed search query based on micro scroll
      if (sectionIdx === 2) {
        const skillWords = ["Vibe Coding", "Autonomous AI Agents", "3D Canvas Builder", "MCP Tools", "Next.js"];
        const subProgress = (progress * TOTAL_SECTIONS) % 1;
        const wordIdx = Math.floor(subProgress * skillWords.length);
        const targetWord = skillWords[wordIdx] || "Vibe Coding";
        const charCount = Math.floor(
          ((subProgress * skillWords.length) % 1) * (targetWord.length + 1)
        );
        const currentSlice = targetWord.slice(0, charCount);
        setTypedSearchQuery(currentSlice);
        if (currentSlice.length > 0) {
          setActiveKeyChar(currentSlice[currentSlice.length - 1]);
        }
      } else {
        setTypedSearchQuery("");
        setActiveKeyChar("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [soundEnabled]);

  // Jump smoothly to a specific section
  const handleSectionJump = (index: number) => {
    const targetProgress = index / (TOTAL_SECTIONS - 1);
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.scrollTo({
      top: targetProgress * scrollHeight,
      behavior: "smooth",
    });
    if (soundEnabled) soundManager.playKeyClick();
  };

  // Shutdown action: smoothly closes the laptop lid
  const handleShutdown = () => {
    setLidOpenAngle(Math.PI / 2); // Rotate to closed (90° flat)
    if (soundEnabled) soundManager.playKeyClick();
  };

  // Hero overlay opacity: visible in section 0 (slant view), fades out on scroll
  const heroOpacity = Math.max(0, 1 - scrollProgress / 0.12);

  return (
    <main className="relative w-full bg-[#08090b] min-h-screen text-zinc-100 overflow-x-hidden">
      {/* Floating HUD Navigation Overlay */}
      <NavigationOverlay
        currentSection={currentSection}
        scrollProgress={scrollProgress}
        onSectionClick={handleSectionJump}
        is2DView={is2DView}
        onToggle2DView={() => setIs2DView(!is2DView)}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {is2DView ? (
        /* 2D Clean Semantic Fallback Mode */
        <SemanticFallback />
      ) : (
        /* 3D Single-Canvas Spatial Experience (All UI renders INSIDE the 3D Laptop) */
        <div ref={containerRef} className="relative w-full">
          {/* Fixed Fullscreen 3D WebGL Canvas */}
          <div className="fixed inset-0 w-full h-full pointer-events-auto z-10">
            <Scene
              currentSection={currentSection}
              scrollProgress={scrollProgress}
              lidOpenAngle={lidOpenAngle}
              isTyping={currentSection === 2}
              typedSearchQuery={typedSearchQuery}
              activeKeyChar={activeKeyChar}
              onCommandTrigger={(cmd) => {
                if (soundEnabled) soundManager.playKeyClick();
              }}
              onCloseLidRequest={handleShutdown}
            />
          </div>

          {/* Section 0 Hero Typography (Left side during 33° Slanted Intro) */}
          {heroOpacity > 0.01 && (
            <div
              className="fixed left-6 sm:left-14 top-1/2 -translate-y-1/2 max-w-lg pointer-events-none z-30 transition-opacity duration-150"
              style={{ opacity: heroOpacity }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 backdrop-blur-md">
                  <Building2 size={14} className="text-amber-400" />
                  <span className="text-xs font-mono text-amber-300 font-bold tracking-wide">
                    Founder @ Qwenton (qwenton.shop)
                  </span>
                </div>

                <div className="space-y-1">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                    {PORTFOLIO_DATA.profile.name}
                  </h1>
                  <p className="text-lg sm:text-xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 font-bold">
                    @{PORTFOLIO_DATA.profile.moniker}
                  </p>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
                  Selling bespoke AI automations and autonomous personal agents for companies. Master of 3D spatial web canvases, vibe coding, and polyglot systems.
                </p>

                <div className="pt-2 flex items-center space-x-3 pointer-events-auto">
                  <a
                    href="https://qwenton.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono font-bold text-xs shadow-lg transition-all cursor-pointer"
                  >
                    <Globe size={14} />
                    <span>qwenton.shop</span>
                  </a>

                  <button
                    onClick={() => handleSectionJump(1)}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-mono font-bold text-xs shadow-lg transition-all cursor-pointer"
                  >
                    <span>Explore Projects</span>
                    <ArrowDown size={13} className="animate-bounce" />
                  </button>

                  <a
                    href={PORTFOLIO_DATA.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    title="GitHub"
                  >
                    <Github size={15} />
                  </a>
                </div>

                <div className="flex items-center space-x-2 text-[11px] font-mono text-zinc-500 pt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Scroll down to interact with 3D laptop screen</span>
                </div>
              </div>
            </div>
          )}

          {/* Virtual Pinned Scroll Track (6 scroll viewports) */}
          <div className="relative w-full z-20 pointer-events-none" style={{ height: `${TOTAL_SECTIONS * 100}vh` }}>
            {Array.from({ length: TOTAL_SECTIONS }).map((_, idx) => (
              <div
                key={idx}
                className="h-screen w-full flex items-end justify-start p-8"
              >
                {/* Micro Section Indicators on bottom left */}
                <div className="bg-zinc-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-zinc-800/60 font-mono text-[10px] text-zinc-400">
                  SECTION 0{idx + 1} / 0{TOTAL_SECTIONS}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
