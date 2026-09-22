"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Terminal, ShieldCheck, Sparkles, ArrowDown, Bot, Building2, Zap } from "lucide-react";

export const HeroBootScreen: React.FC = () => {
  return (
    <div className="h-full w-full p-8 flex flex-col justify-between font-mono text-xs select-text bg-[#090b10] relative">
      {/* Top Boot Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center space-x-3 text-sky-400">
          <Terminal size={18} />
          <span className="font-bold text-sm tracking-wider">VIBE-OS KERNEL v3.4.0 // QWENTON STARTUP ENGINE</span>
        </div>
        <div className="flex items-center space-x-2 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
          <Zap size={14} />
          <span>Qwenton Engine Online</span>
        </div>
      </div>

      {/* Main Boot Log Body */}
      <div className="space-y-4 max-w-3xl my-auto py-2">
        <div className="p-5 rounded-xl bg-zinc-900/80 border-2 border-zinc-800 space-y-3 shadow-lg">
          <div className="flex items-center space-x-2.5 text-emerald-400">
            <ShieldCheck size={18} />
            <span className="font-bold text-sm text-zinc-100">Founder Profile & Agentic Architecture Initialized</span>
          </div>

          <div className="text-zinc-300 space-y-1.5 text-xs leading-relaxed font-mono">
            <p>
              [ <span className="text-emerald-400 font-bold">OK</span> ] Engineer:{" "}
              <strong className="text-white text-sm">{PORTFOLIO_DATA.profile.name}</strong> (
              <span className="text-sky-400 font-bold">@{PORTFOLIO_DATA.profile.moniker}</span>)
            </p>
            <p>
              [ <span className="text-emerald-400 font-bold">OK</span> ] Startup:{" "}
              <span className="text-amber-300 font-bold">Qwenton (qwenton.shop)</span> — AI Automations & Personal Agents
            </p>
            <p>
              [ <span className="text-emerald-400 font-bold">OK</span> ] Polyglot Stack:{" "}
              <span className="text-zinc-200">C++, Python, Rust, Go, Ruby, C#, TypeScript, GLSL</span>
            </p>
            <p>
              [ <span className="text-emerald-400 font-bold">OK</span> ] Status:{" "}
              <span className="text-emerald-400 font-semibold">{PORTFOLIO_DATA.profile.status}</span>
            </p>
          </div>
        </div>

        {/* Hero Banner Callout */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-sky-950/60 via-zinc-900 to-zinc-900/60 border-2 border-sky-500/30 shadow-xl space-y-3">
          <div className="flex items-center space-x-2.5">
            <Building2 size={18} className="text-amber-400" />
            <span className="text-amber-300 text-xs uppercase tracking-widest font-bold font-mono">
              Founder & CEO, Qwenton (qwenton.shop) • Creative Technologist
            </span>
          </div>
          <h1 className="text-3xl font-bold font-sans text-white tracking-tight">
            Hi, I'm {PORTFOLIO_DATA.profile.name}
          </h1>
          <p className="text-zinc-300 text-sm font-sans leading-relaxed">
            {PORTFOLIO_DATA.profile.bio}
          </p>

          <div className="pt-2 flex items-center space-x-3 pointer-events-auto">
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.open("https://qwenton.shop", "_blank", "noopener,noreferrer");
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono font-bold text-xs shadow-md transition-all cursor-pointer hover:scale-105 pointer-events-auto"
            >
              <span>Visit qwenton.shop</span>
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.open(PORTFOLIO_DATA.profile.socials.github, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono font-bold text-xs shadow-md transition-all border border-zinc-600 cursor-pointer hover:scale-105 pointer-events-auto"
            >
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-zinc-400 text-xs">
        <div className="flex items-center space-x-2 text-sky-400 font-bold">
          <span>Scroll down to explore projects, vibe coding skills & contact tabs</span>
          <ArrowDown size={15} className="animate-bounce" />
        </div>
        <div className="text-zinc-500 font-mono">
          startup_domain: <span className="text-sky-300 font-bold">qwenton.shop</span>
        </div>
      </div>
    </div>
  );
};
