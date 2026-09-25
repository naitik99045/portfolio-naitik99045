"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { soundManager } from "./AudioController";
import { LegalModal } from "./LegalModal";

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
  const [legalModalType, setLegalModalType] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-4 sm:p-6 select-none font-sans">
        {/* Top Navbar */}
        <div className="w-full flex items-center justify-between pointer-events-auto">
          {/* Brand & Qwenton Startup Badge */}
          <div className="flex items-center space-x-3 bg-[#0d1017] px-3.5 py-2 rounded-md border border-zinc-800 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
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
              className="p-2 rounded-md bg-[#0d1017] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
              title={soundEnabled ? "Mute Haptic Audio" : "Enable Audio"}
            >
              {soundEnabled ? <Volume2 size={14} className="text-sky-400" /> : <VolumeX size={14} />}
            </button>

            {/* 3D vs 2D Mode Toggle */}
            <button
              onClick={onToggle2DView}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-md bg-[#0d1017] border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
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
                  <span>2D View</span>
                </>
              )}
            </button>

            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-1 bg-[#0d1017] px-2 py-1.5 rounded-md border border-zinc-800">
              <a
                href="https://qwenton.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-amber-400 hover:text-amber-300 hover:bg-zinc-800 transition-colors"
                title="Qwenton Startup"
              >
                <Building2 size={14} />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="GitHub"
              >
                <Github size={14} />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Instagram"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Center Side Scroll Progress Track */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-2 pointer-events-auto">
          <div className="w-1 h-32 bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-zinc-800">
            <div
              className="w-full bg-sky-500 rounded-full transition-all duration-150"
              style={{ height: `${Math.max(4, scrollProgress * 100)}%` }}
            />
          </div>
          <span className="text-[9px] font-mono text-zinc-500">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>

        {/* Bottom Floating Navigation Dock & Legal Footer Links */}
        <div className="w-full flex flex-col items-center space-y-2 pointer-events-auto">
          {/* Section Navigation Tabs */}
          <div className="flex items-center space-x-1 p-1 rounded-md bg-[#0d1017] border border-zinc-800 shadow-lg max-w-full overflow-x-auto">
            {SECTIONS.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => onSectionClick(idx)}
                className={`px-3 py-1.5 rounded text-[11px] font-mono transition-colors whitespace-nowrap cursor-pointer ${
                  currentSection === idx
                    ? "bg-zinc-800 text-sky-400 font-bold border border-zinc-700"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* Legal Footer Links (Requirement 28) */}
          <div className="flex items-center space-x-4 text-[10px] font-mono text-zinc-500">
            <span>Qwenton &copy; 2026</span>
            <span>&bull;</span>
            <button
              onClick={() => setLegalModalType("terms")}
              className="hover:text-zinc-300 underline transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setLegalModalType("privacy")}
              className="hover:text-zinc-300 underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
};
