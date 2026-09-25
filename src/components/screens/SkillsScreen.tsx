"use client";

import React, { useState, useMemo } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Search, Bot, Box, Code2, Zap } from "lucide-react";

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
      <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-2.5">
            <Zap size={18} className="text-amber-400" />
            <h2 className="text-base font-bold tracking-tight text-white font-mono uppercase">
              Vibe Coding, 3D Canvas Builder & Autonomous AI Agents
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            3D physical keycaps depress in real time as queries are evaluated
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="w-80 relative">
          <Search size={14} className="absolute left-3 top-2.5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery || internalFilter}
            onChange={(e) => setInternalFilter(e.target.value)}
            placeholder="Search vibe coding, 3D, agents..."
            className="w-full pl-9 pr-14 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-xs font-mono text-sky-300 placeholder-zinc-500 focus:outline-none focus:border-sky-400"
          />
          <span className="absolute right-2.5 top-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
            SYNCED
          </span>
        </div>
      </div>

      {/* Skills Grid Columns */}
      <div className="flex-1 py-4 overflow-y-auto space-y-4">
        {filteredCategories.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-zinc-400 text-xs font-mono space-y-1">
            <span>No skills matching "{activeQuery}"</span>
            <span className="text-zinc-600 text-[11px]">Try: Vibe Coding, 3D Builder, Agents, MCP, Next.js</span>
          </div>
        ) : (
          filteredCategories.slice(0, 2).map((category) => (
            <div key={category.category} className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded border transition-colors ${
                      skill.highlight
                        ? "bg-[#0e1117] border-sky-500/30"
                        : "bg-[#0e1117] border-zinc-800"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
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
                      <p className="text-[11px] text-zinc-400 font-sans leading-tight mb-1.5 truncate">
                        {skill.description}
                      </p>
                    )}

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/40">
                      <div
                        className="h-full bg-sky-500 rounded-full"
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
        <span className="text-zinc-300">
          Core Mission: Deploying enterprise AI automations and autonomous personal agents for companies
        </span>
        <span className="text-sky-400 font-bold">qwenton.shop</span>
      </div>
    </div>
  );
};
