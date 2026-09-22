"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Instagram,
  Volume2,
  VolumeX,
  Eye,
  Layers,
  Building2,
  Sparkles,
} from "lucide-react";
import { soundManager } from "./AudioController";

interface NavigationOverlayProps {
  currentSection: number;
  scrollProgress: number;
  onSectionClick: (sectionIndex: number) => void;
  is2DView: boolean;
  onToggle2DView: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const SECTIONS = [
  { id: "hero", label: "01 Boot" },
  { id: "projects", label: "02 Projects" },
  { id: "skills", label: "03 Skills" },
  { id: "about", label: "04 Founder Bio" },
  { id: "languages", label: "05 Languages" },
  { id: "contact", label: "06 Contact" },
];

export const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  currentSection,
  scrollProgress,
  onSectionClick,
  is2DView,
  onToggle2DView,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-4 sm:p-6 select-none font-sans">
      {/* Top Navbar */}
      <div className="w-full flex items-center justify-between pointer-events-auto">
        {/* Brand & Qwenton Startup Badge */}
        <div className="flex items-center space-x-3 bg-zinc-900/80 backdrop-blur-md px-3.5 py-2 rounded-full border border-zinc-800/80 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-white tracking-tight">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold">
            Founder @ Qwenton
          </span>
          <a
            href="https://qwenton.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-sky-400 hover:text-sky-300 underline font-medium"
          >
            qwenton.shop
          </a>
        </div>

        {/* Action Controls & Socials */}
        <div className="flex items-center space-x-2">
          {/* Audio FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) soundManager.playKeyClick();
            }}
            className="p-2.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all shadow-lg"
            title={soundEnabled ? "Mute Haptic Sound FX" : "Enable Sound FX"}
          >
            {soundEnabled ? <Volume2 size={14} className="text-sky-400" /> : <VolumeX size={14} />}
          </button>

          {/* 3D vs 2D Mode Toggle */}
          <button
            onClick={onToggle2DView}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 text-xs font-mono text-zinc-300 hover:text-white transition-all shadow-lg"
            title="Toggle between 3D Spatial Canvas and Clean 2D Layout"
          >
            {is2DView ? (
              <>
                <Layers size={13} className="text-sky-400" />
                <span>3D Canvas</span>
              </>
            ) : (
              <>
                <Eye size={13} className="text-emerald-400" />
                <span>Clean View</span>
              </>
            )}
          </button>

          {/* Social Links */}
          <div className="hidden sm:flex items-center space-x-1 bg-zinc-900/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-zinc-800/80 shadow-lg">
            <a
              href="https://qwenton.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-amber-400 hover:text-amber-300 hover:bg-zinc-800 transition-colors"
              title="Qwenton Startup"
            >
              <Building2 size={14} />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Instagram"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Center Side Scroll Progress Bar */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-2 pointer-events-auto">
        <div className="w-1 h-36 bg-zinc-800/80 rounded-full overflow-hidden p-0.5 border border-zinc-700/50">
          <div
            className="w-full bg-gradient-to-b from-sky-400 via-cyan-300 to-emerald-400 rounded-full transition-all duration-150"
            style={{ height: `${Math.max(4, scrollProgress * 100)}%` }}
          />
        </div>
        <span className="text-[9px] font-mono text-zinc-500">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      {/* Bottom Floating Navigation Dock (6 Sections) */}
      <div className="w-full flex items-center justify-center pointer-events-auto">
        <div className="flex items-center space-x-1 p-1.5 rounded-full bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/90 shadow-2xl max-w-full overflow-x-auto">
          {SECTIONS.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => onSectionClick(idx)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all whitespace-nowrap cursor-pointer ${
                currentSection === idx
                  ? "bg-zinc-800 text-sky-400 font-bold border border-zinc-700/80 shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
