"use client";

import React from "react";
import { HeroBootScreen } from "./HeroBootScreen";
import { ProjectsScreen } from "./ProjectsScreen";
import { SkillsScreen } from "./SkillsScreen";
import { AboutScreen } from "./AboutScreen";
import { LanguagesScreen } from "./LanguagesScreen";
import { ContactScreen } from "./ContactScreen";
import { Wifi, Battery, Building2, ShieldCheck } from "lucide-react";

interface ScreenContainerProps {
  currentSection: number; // 0 to 5
  scrollProgress?: number;
  typedSearchQuery?: string;
  onCommandTrigger?: (command: string) => void;
  onCloseLidRequest?: () => void;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  currentSection,
  scrollProgress = 0,
  typedSearchQuery = "",
  onCommandTrigger,
  onCloseLidRequest,
}) => {
  const sectionTitles = [
    "Terminal — vibe-os-boot (qwenton.shop)",
    "Safari — vibe://projects (qwenton.shop)",
    "System Profiler — Vibe Coding & AI Agents",
    "GitHub — qwenton-startup/FOUNDER_BIO.md",
    "Polyglot Engine — Mastered Programming Languages",
    "Contact & Connect — naitik@portfolio:~$",
  ];

  return (
    <div className="w-[1280px] h-[800px] bg-[#0c0d12] text-zinc-100 flex flex-col font-sans select-none overflow-hidden rounded-[8px] border border-zinc-700/60 shadow-2xl relative">
      {/* macOS-Style Window Header / Menu Bar */}
      <div className="h-10 bg-[#15171e] border-b border-zinc-800 flex items-center justify-between px-5 text-xs text-zinc-400 select-none z-20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 mr-3">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer hover:opacity-80" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer hover:opacity-80" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer hover:opacity-80" />
          </div>
          <span className="font-mono text-sm text-zinc-200 font-semibold tracking-tight">
            {sectionTitles[currentSection] || "vibe-os"}
          </span>
        </div>

        {/* Status Bar Items */}
        <div className="flex items-center space-x-5 text-xs font-mono text-zinc-400">
          <span className="text-sky-400 font-bold">● 60 FPS Locked</span>
          <div className="flex items-center space-x-1.5 text-amber-300">
            <Building2 size={14} />
            <span>qwenton.shop</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Wifi size={14} className="text-emerald-400" />
            <span>5G Mesh</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Battery size={14} className="text-zinc-300" />
            <span>100%</span>
          </div>
          <div className="flex items-center space-x-1.5 text-sky-300">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>@vibe-coder</span>
          </div>
        </div>
      </div>

      {/* Screen Viewport Content Area (Directly Inside 3D Laptop Screen) */}
      <div className="flex-1 relative overflow-hidden bg-[#0a0c10] text-zinc-100 flex flex-col">
        {currentSection === 0 && <HeroBootScreen />}
        {currentSection === 1 && <ProjectsScreen />}
        {currentSection === 2 && <SkillsScreen searchQuery={typedSearchQuery} />}
        {currentSection === 3 && <AboutScreen />}
        {currentSection === 4 && <LanguagesScreen />}
        {currentSection === 5 && (
          <ContactScreen
            onExecuteCommand={onCommandTrigger}
            onShutdown={onCloseLidRequest}
          />
        )}
      </div>

      {/* Subtle Retina Glass Glare */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-sky-500/[0.015] to-white/[0.015] opacity-40 z-30" />
    </div>
  );
};
