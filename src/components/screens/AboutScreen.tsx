"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Building2,
  Bot,
  Sparkles,
  Shield,
  Zap,
  ExternalLink,
  Globe,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export const AboutScreen: React.FC = () => {
  const profile = PORTFOLIO_DATA.profile;

  const handleOpenUrl = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="h-full w-full p-8 flex flex-col justify-between bg-[#0b0e17] text-zinc-100 font-sans pointer-events-auto select-auto overflow-y-auto">
      {/* Top Header Bar with Direct Platform Link */}
      <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800 text-xs font-mono">
        <div className="flex items-center space-x-3">
          <Building2 size={18} className="text-amber-400" />
          <span className="text-sky-400 font-bold text-base">qwenton-startup</span>
          <span className="text-zinc-500 text-base">/</span>
          <span className="text-zinc-100 font-bold text-base">FOUNDER_BIO.md</span>
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
            Startup Founder
          </span>
        </div>

        {/* Top Direct Button */}
        <button
          onClick={() => handleOpenUrl(profile.companyUrl)}
          className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 px-4 py-2 rounded-lg font-mono font-bold text-xs transition-all cursor-pointer shadow-md hover:scale-105 pointer-events-auto"
        >
          <Globe size={14} />
          <span>Open qwenton.shop</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="py-3 space-y-4 max-w-5xl my-auto">
        {/* Founder Bio Hero Card */}
        <div className="p-5 rounded-2xl bg-zinc-900/90 border-2 border-zinc-700/80 shadow-xl flex items-center justify-between">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {profile.name}
              </h1>
              <span className="text-xs px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/50 font-mono font-bold">
                @{profile.moniker}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 font-mono font-bold">
                Owner @ Qwenton
              </span>
            </div>

            <p className="text-sky-300 text-sm font-semibold font-mono">
              Founder & CEO, Qwenton (qwenton.shop) • AI Automations & Personal Agents Architect
            </p>

            <p className="text-zinc-200 text-xs sm:text-sm font-sans leading-relaxed pt-1">
              {profile.bio}
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-amber-400 flex items-center justify-center text-white font-extrabold text-xl shadow-lg flex-shrink-0 ml-4">
            NT
          </div>
        </div>

        {/* 4 Direct Interactive Clickable Link Cards */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
            Official Links & Startup Portals (Click to open)
          </span>
          <div className="grid grid-cols-4 gap-3">
            {/* Link 1: qwenton.shop */}
            <a
              href="https://qwenton.shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenUrl("https://qwenton.shop");
              }}
              className="p-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border-2 border-amber-500/40 hover:border-amber-400 transition-all flex items-center justify-between cursor-pointer group shadow-md pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Globe size={18} className="text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-300 font-mono">
                    qwenton.shop
                  </div>
                  <div className="text-[10px] text-amber-300/80 font-mono">Startup Platform</div>
                </div>
              </div>
              <ExternalLink size={14} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Link 2: GitHub */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenUrl(profile.socials.github);
              }}
              className="p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 hover:border-zinc-500 transition-all flex items-center justify-between cursor-pointer group shadow-md pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Github size={18} className="text-white" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 font-mono">
                    GitHub Profile
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">naitik99045</div>
                </div>
              </div>
              <ExternalLink size={14} className="text-zinc-400 group-hover:text-white transition-colors" />
            </a>

            {/* Link 3: Qwenton UI Repo */}
            <a
              href="https://github.com/naitik99045/qwenton-ui"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenUrl("https://github.com/naitik99045/qwenton-ui");
              }}
              className="p-3.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border-2 border-sky-500/40 hover:border-sky-400 transition-all flex items-center justify-between cursor-pointer group shadow-md pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Code2 size={18} className="text-sky-400" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 font-mono">
                    qwenton-ui
                  </div>
                  <div className="text-[10px] text-sky-300/80 font-mono">3D UI Library</div>
                </div>
              </div>
              <ExternalLink size={14} className="text-sky-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Link 4: LinkedIn */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenUrl(profile.socials.linkedin);
              }}
              className="p-3.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border-2 border-blue-500/40 hover:border-blue-400 transition-all flex items-center justify-between cursor-pointer group shadow-md pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Linkedin size={18} className="text-blue-400" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300 font-mono">
                    LinkedIn
                  </div>
                  <div className="text-[10px] text-blue-300/80 font-mono">Netik Talreja</div>
                </div>
              </div>
              <ExternalLink size={14} className="text-blue-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Offerings 3-Column Section */}
        <div className="grid grid-cols-3 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-zinc-900/80 border-2 border-zinc-800 space-y-1.5 shadow-md">
            <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold font-mono">
              <Bot size={16} />
              <span>Personal AI Agents</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Custom autonomous agents tailored for executives and operations that execute complex workflows 24/7.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border-2 border-zinc-800 space-y-1.5 shadow-md">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono">
              <Zap size={16} />
              <span>Enterprise Automations</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              End-to-end multi-agent pipelines integrating Model Context Protocol (MCP) and internal corporate data.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/80 border-2 border-zinc-800 space-y-1.5 shadow-md">
            <div className="flex items-center space-x-2 text-purple-400 text-xs font-bold font-mono">
              <Shield size={16} />
              <span>3D Spatial Canvases</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Awwwards-caliber 3D web applications, single-canvas spatial interfaces, and 60 FPS interactive products.
            </p>
          </div>
        </div>

        {/* 4 Stats Boxes */}
        <div className="grid grid-cols-4 gap-3.5 pt-1">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 rounded-xl bg-[#131722] border-2 border-zinc-700/80 text-center space-y-1 shadow-md"
            >
              <div className="text-xl font-extrabold text-white font-mono">{stat.value}</div>
              <div className="text-[10px] text-zinc-300 uppercase tracking-tight font-mono font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

