"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Terminal, ShieldCheck, ArrowDown, Building2, Zap } from "lucide-react";

export const HeroBootScreen: React.FC = () => {
  return (
    <div className="h-full w-full p-8 flex flex-col justify-between font-mono text-xs select-text bg-[#080a0f] relative">
      {/* Top Boot Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center space-x-2.5 text-sky-400">
          <Terminal size={16} />
          <span className="font-bold text-xs tracking-wider">KERNEL_INIT // QWENTON STARTUP ENGINE ONLINE</span>
        </div>
        <div className="flex items-center space-x-2 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <Zap size={13} />
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      {/* Main Boot Log Body */}
      <div className="space-y-4 max-w-3xl my-auto py-2">
        <div className="p-4 rounded-lg bg-[#0e1117] border border-zinc-800 space-y-2.5">
          <div className="flex items-center space-x-2 text-emerald-400">
            <ShieldCheck size={16} />
            <span className="font-bold text-xs text-zinc-100">Founder Profile & Architecture Initialized</span>
          </div>

          <div className="text-zinc-300 space-y-1 text-xs leading-relaxed font-mono">
            <p>
              [ <span className="text-emerald-400 font-bold">OK</span> ] Engineer:{" "}
              <strong className="text-white text-xs">{PORTFOLIO_DATA.profile.name}</strong> (
              <span className="text-sky-400 font-bold">@{PORTFOLIO_DATA.profile.moniker}</span>)
            </p>
            <p>
              [ <span className="text-emerald-400 font-bold">OK</span> ] Startup:{" "}
              <span className="text-amber-300 font-bold">Qwenton (qwenton.shop)</span> | AI Automations & Personal Agents
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
        <div className="p-5 rounded-lg bg-[#0e1117] border border-zinc-800 space-y-2.5">
          <div className="flex items-center space-x-2">
            <Building2 size={16} className="text-amber-400" />
            <span className="text-amber-300 text-xs uppercase tracking-widest font-bold font-mono">
              Founder & CEO, Qwenton (qwenton.shop)
            </span>
          </div>
          <h1 className="text-2xl font-bold font-sans text-white tracking-tight">
            Hi, I&apos;m {PORTFOLIO_DATA.profile.name}
          </h1>
          <p className="text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
            {PORTFOLIO_DATA.profile.bio}
          </p>

          <div className="pt-2 flex items-center space-x-3 pointer-events-auto">
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.open("https://qwenton.shop", "_blank", "noopener,noreferrer");
              }}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono font-bold text-xs transition-colors cursor-pointer pointer-events-auto"
            >
              <span>Visit qwenton.shop</span>
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.open(PORTFOLIO_DATA.profile.socials.github, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-mono font-bold text-xs transition-colors border border-zinc-700 cursor-pointer pointer-events-auto"
            >
              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-zinc-400 text-xs">
        <div className="flex items-center space-x-2 text-sky-400 font-bold">
          <span>Scroll down to explore projects, vibe coding skills & contact tabs</span>
          <ArrowDown size={14} />
        </div>
        <div className="text-zinc-500 font-mono">
          startup_domain: <span className="text-sky-300 font-bold">qwenton.shop</span>
        </div>
      </div>
    </div>
  );
};
