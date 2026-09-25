"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Code2, Terminal } from "lucide-react";

export const LanguagesScreen: React.FC = () => {
  const languages = PORTFOLIO_DATA.masteredLanguages;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeLang = languages[selectedIdx];

  return (
    <div className="h-full w-full p-8 flex flex-col justify-between bg-[#0a0c12] text-zinc-100 font-sans select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2.5 text-sky-400">
            <Code2 size={18} />
            <h2 className="text-base font-bold tracking-tight text-white font-mono uppercase">
              Mastered Programming Languages & Systems Engineering
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            Low-level systems, high-speed AI pipelines, and spatial compute architectures
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
          <span>8 LANGUAGES MASTERED</span>
        </div>
      </div>

      {/* Main Content Grid: Language Selector + Interactive Code Inspector */}
      <div className="grid grid-cols-12 gap-5 my-auto flex-1 py-4 overflow-y-auto">
        {/* Left Column: Language Badges Grid */}
        <div className="col-span-7 grid grid-cols-2 gap-2.5 pr-1">
          {languages.map((lang, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={lang.name}
                onClick={() => setSelectedIdx(idx)}
                className={`p-3 rounded text-left transition-colors border flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? "bg-[#121622] border-sky-400"
                    : "bg-[#0e1117] border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: lang.accentColor }}
                    />
                    <span className="font-mono font-bold text-xs text-white">{lang.name}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 font-sans line-clamp-1">
                    {lang.description}
                  </p>
                </div>

                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 ml-2 flex-shrink-0">
                  {lang.level}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Code Snippet & Capability Inspector */}
        <div className="col-span-5 rounded-lg bg-[#0e1117] border border-zinc-800 p-4 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs">
              <div className="flex items-center space-x-1.5">
                <span className="font-mono font-bold text-sky-400 text-xs">{activeLang.name}</span>
                <span className="text-zinc-500">/</span>
                <span className="text-zinc-400 font-mono text-xs">architecture.snippet</span>
              </div>
              <span className="text-emerald-400 font-mono text-[11px] font-bold">PRODUCTION VERIFIED</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              {activeLang.description}
            </p>

            <div className="p-3 rounded bg-[#06070a] border border-zinc-800 font-mono text-xs text-zinc-200 overflow-x-auto">
              <pre className="text-[11px] text-sky-300 font-mono leading-relaxed whitespace-pre-wrap">
                {activeLang.sampleCode}
              </pre>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
            <span>Systems Proficiency</span>
            <span className="text-sky-400 font-bold">Enterprise & High-DPR Verified</span>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="pt-3 border-t border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-zinc-300">
          <Terminal size={13} className="text-sky-400" />
          <span>Polyglot engineering foundation from native C++ / Rust compute to modern Python & TypeScript AI stacks</span>
        </div>
        <span className="text-zinc-500">Naitik Talreja</span>
      </div>
    </div>
  );
};
