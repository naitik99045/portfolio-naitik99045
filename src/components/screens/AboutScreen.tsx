"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Building2,
  Bot,
  Zap,
  ExternalLink,
  Globe,
  Github,
  Linkedin,
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
          <Building2 size={16} className="text-amber-400" />
          <span className="text-sky-400 font-bold text-sm">qwenton-startup</span>
          <span className="text-zinc-500 text-sm">/</span>
          <span className="text-zinc-100 font-bold text-sm">FOUNDER_BIO.md</span>
          <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
            Startup Founder
          </span>
        </div>

        {/* Top Direct Button */}
        <button
          onClick={() => handleOpenUrl(profile.companyUrl)}
          className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 px-3.5 py-1.5 rounded font-mono font-bold text-xs transition-colors cursor-pointer pointer-events-auto"
        >
          <Globe size={13} />
          <span>Open qwenton.shop</span>
          <ArrowUpRight size={13} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="py-3 space-y-4 max-w-5xl my-auto">
        {/* Founder Bio Hero Card */}
        <div className="p-5 rounded-lg bg-[#0e1117] border border-zinc-800 flex items-center justify-between">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {profile.name}
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono font-bold">
                @{profile.moniker}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono font-bold">
                Owner @ Qwenton
              </span>
            </div>

            <p className="text-sky-400 text-xs font-semibold font-mono">
              Founder & CEO, Qwenton (qwenton.shop) | AI Automations & Personal Agents Architect
            </p>

            <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed pt-1">
              {profile.bio}
            </p>
          </div>

          <div className="w-14 h-14 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold text-base flex-shrink-0 ml-4">
            NT
          </div>
        </div>

        {/* 4 Direct Interactive Clickable Link Cards */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
            Official Links & Startup Portals
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
              className="p-3 rounded-lg bg-[#0e1117] hover:bg-zinc-850 border border-amber-500/30 hover:border-amber-400 transition-colors flex items-center justify-between cursor-pointer group pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Globe size={16} className="text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-300 font-mono">
                    qwenton.shop
                  </div>
                  <div className="text-[10px] text-amber-400/80 font-mono">Startup Platform</div>
                </div>
              </div>
              <ExternalLink size={13} className="text-amber-400" />
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
              className="p-3 rounded-lg bg-[#0e1117] hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between cursor-pointer group pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Github size={16} className="text-white" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 font-mono">
                    GitHub Profile
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">naitik99045</div>
                </div>
              </div>
              <ExternalLink size={13} className="text-zinc-400 group-hover:text-white" />
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
              className="p-3 rounded-lg bg-[#0e1117] hover:bg-zinc-850 border border-sky-500/30 hover:border-sky-400 transition-colors flex items-center justify-between cursor-pointer group pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Code2 size={16} className="text-sky-400" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-sky-300 font-mono">
                    qwenton-ui
                  </div>
                  <div className="text-[10px] text-sky-400/80 font-mono">3D UI Library</div>
                </div>
              </div>
              <ExternalLink size={13} className="text-sky-400" />
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
              className="p-3 rounded-lg bg-[#0e1117] hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-between cursor-pointer group pointer-events-auto"
            >
              <div className="flex items-center space-x-2.5">
                <Linkedin size={16} className="text-blue-400" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300 font-mono">
                    LinkedIn
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">Netik Talreja</div>
                </div>
              </div>
              <ExternalLink size={13} className="text-blue-400" />
            </a>
          </div>
        </div>

        {/* Dual Split Architecture Overview */}
        <div className="grid grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-lg bg-[#0e1117] border border-zinc-800 space-y-1.5">
            <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold font-mono">
              <Bot size={15} />
              <span>Autonomous AI Agents & Pipelines</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              Custom autonomous workers and Model Context Protocol (MCP) integrations built for executives and operations that execute complex workflows 24/7.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#0e1117] border border-zinc-800 space-y-1.5">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono">
              <Zap size={15} />
              <span>Enterprise Automations & 3D Spatial Canvases</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              End-to-end multi-agent pipelines and single-canvas 3D Three.js web applications engineered for zero-latency 60 FPS performance.
            </p>
          </div>
        </div>

        {/* 4 Stats Boxes */}
        <div className="grid grid-cols-4 gap-3 pt-1">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3 rounded-lg bg-[#0e1117] border border-zinc-800 text-center space-y-1"
            >
              <div className="text-lg font-bold text-white font-mono">{stat.value}</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-tight font-mono font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
