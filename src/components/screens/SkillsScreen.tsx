"use client";

import React, { useState, useMemo } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Search, Sparkles, Cpu, CheckCircle2, Bot, Box, Code2, Zap } from "lucide-react";

interface SkillsScreenProps {
  searchQuery?: string;
}

export const SkillsScreen: React.FC<SkillsScreenProps> = ({ searchQuery = "" }) => {
  const [internalFilter, setInternalFilter] = useState("");
  const activeQuery = (searchQuery || internalFilter).toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!activeQuery) return PORTFOLIO_DATA.skillCategories;
    return PORTFOLIO_DATA.skillCategories
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(activeQuery) ||
            cat.category.toLowerCase().includes(activeQuery) ||
            (s.description && s.description.toLowerCase().includes(activeQuery))
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [activeQuery]);

  return (
    <div className="h-full w-full p-8 flex flex-col justify-between bg-[#0b0d13] text-zinc-100 font-sans select-none">
      {/* Top Search Bar & Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
        <div className="space-y-1">
          <div className="flex items-center space-x-3">
            <Zap size={20} className="text-amber-400 animate-pulse" />
            <h2 className="text-lg font-bold tracking-tight text-white font-mono uppercase">
              Vibe Coding, 3D Canvas Builder & Autonomous AI Agents
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            3D physical keycaps depress below in real time as AI tech stacks are queried
          </p>
        </div>

        {/* Live Search Input Bar */}
        <div className="w-80 relative">
          <Search size={16} className="absolute left-3.5 top-3 text-zinc-400" />
          <input
            type="text"
            value={searchQuery || internalFilter}
            onChange={(e) => setInternalFilter(e.target.value)}
            placeholder="Search vibe coding, 3D, agents..."
            className="w-full pl-10 pr-16 py-2.5 rounded-lg bg-zinc-900 border-2 border-sky-500/40 text-sm font-mono text-sky-300 placeholder-zinc-500 focus:outline-none focus:border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          />
          <span className="absolute right-3 top-2.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40">
            SYNCED
          </span>
        </div>
      </div>

      {/* Skills Grid Columns */}
      <div className="flex-1 py-4 overflow-y-auto space-y-5">
        {filteredCategories.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-zinc-400 text-sm font-mono space-y-2">
            <span>No skills matching "{activeQuery}"</span>
            <span className="text-zinc-600 text-xs">Try: Vibe Coding, 3D Builder, Agents, MCP, Next.js</span>
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.category} className="space-y-2.5">
              <div className="flex items-center space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-lg border transition-all ${
                      skill.highlight
                        ? "bg-zinc-900/95 border-sky-500/40 shadow-md shadow-sky-500/5"
                        : "bg-zinc-900/60 border-zinc-800"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-mono text-zinc-100 font-bold text-xs truncate flex items-center space-x-1.5">
                        {skill.name.includes("3D") ? (
                          <Box size={13} className="text-amber-400" />
                        ) : skill.name.includes("Agent") || skill.name.includes("Vibe") ? (
                          <Bot size={13} className="text-sky-400" />
                        ) : (
                          <Code2 size={13} className="text-emerald-400" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-xs font-mono text-sky-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {skill.description && (
                      <p className="text-[11px] text-zinc-400 font-sans leading-tight mb-2 truncate">
                        {skill.description}
                      </p>
                    )}

                    {/* Progress Level Bar */}
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-700/50">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          skill.highlight
                            ? "bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400"
                            : "bg-zinc-500"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CheckCircle2 size={15} className="text-emerald-400" />
          <span>Core Mission: Powering enterprise corporate automations with autonomous AI agents</span>
        </div>
        <span className="text-sky-400 font-bold">Qwenton.shop</span>
      </div>
    </div>
  );
};
