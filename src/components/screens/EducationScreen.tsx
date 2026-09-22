"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, GitCommit } from "@/data/portfolioData";
import { GitBranch, GitCommit as GitCommitIcon, Sparkles, Terminal } from "lucide-react";

export const EducationScreen: React.FC = () => {
  const [selectedCommit, setSelectedCommit] = useState<string>(PORTFOLIO_DATA.gitLogTree[0].hash);
  const commits = PORTFOLIO_DATA.gitLogTree;

  return (
    <div className="h-full w-full p-8 flex flex-col justify-between bg-[#0a0c12] text-zinc-100 font-mono text-xs select-none">
      {/* Top Header */}
      <div className="space-y-1.5 pb-4 border-b border-zinc-800">
        <div className="flex items-center space-x-3 text-emerald-400">
          <GitBranch size={20} />
          <h2 className="text-lg font-bold tracking-tight text-white uppercase">
            Education & Academic Timeline (`git log --graph --oneline`)
          </h2>
        </div>
        <p className="text-xs text-zinc-400">
          Showing verified commits on branch <span className="text-sky-300 font-bold">naitik/education-tree</span>
        </p>
      </div>

      {/* Main Git Log Graph Area */}
      <div className="grid grid-cols-12 gap-6 my-auto flex-1 py-4 overflow-y-auto">
        {/* Left Column: Interactive Commit Graph */}
        <div className="col-span-7 space-y-3 pr-3 border-r border-zinc-800">
          {commits.map((commit, idx) => {
            const isSelected = selectedCommit === commit.hash;
            return (
              <div
                key={commit.hash}
                onClick={() => setSelectedCommit(commit.hash)}
                className={`p-3.5 rounded-lg cursor-pointer transition-all border-2 flex items-start space-x-3.5 ${
                  isSelected
                    ? "bg-zinc-900 border-sky-500 shadow-lg shadow-sky-500/10"
                    : "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/60 hover:border-zinc-700"
                }`}
              >
                {/* Branch Graph Node Line */}
                <div className="flex flex-col items-center pt-1">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 ${
                      isSelected
                        ? "bg-sky-400 border-white shadow-[0_0_8px_#38bdf8]"
                        : "bg-zinc-700 border-zinc-500"
                    }`}
                  />
                  {idx < commits.length - 1 && (
                    <div className="w-0.5 h-10 bg-zinc-700 my-1" />
                  )}
                </div>

                {/* Commit Meta */}
                <div className="flex-1 space-y-1 overflow-hidden">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30">
                      {commit.hash}
                    </span>
                    <span className="text-zinc-400 font-semibold">({commit.branch})</span>
                    <span className="text-zinc-500 text-xs ml-auto font-medium">{commit.date}</span>
                  </div>
                  <p className="text-zinc-100 text-sm font-semibold truncate pt-0.5 font-sans">
                    {commit.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Commit Inspector */}
        <div className="col-span-5 rounded-xl bg-[#07080b] border-2 border-zinc-800 p-5 flex flex-col justify-between shadow-xl">
          {(() => {
            const current = commits.find((c) => c.hash === selectedCommit) || commits[0];
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-zinc-300">
                  <span className="text-sky-400 font-bold text-sm">commit {current.hash}</span>
                  <span className="capitalize text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 font-bold">
                    {current.category}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <p className="text-zinc-400">
                    Author: <span className="text-zinc-100 font-semibold">Naitik Talreja &lt;naitik@portfolio.dev&gt;</span>
                  </p>
                  <p className="text-zinc-400">
                    Date: <span className="text-zinc-200">{current.date}</span>
                  </p>
                  <p className="text-zinc-400">
                    Branch: <span className="text-sky-300 font-bold">{current.branch}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <span className="text-xs uppercase text-zinc-400 tracking-wider block mb-2 font-bold">
                    Academic Summary & Diff
                  </span>
                  <p className="text-zinc-200 text-xs leading-relaxed font-sans bg-zinc-900/90 p-4 rounded-lg border border-zinc-700/80 shadow-inner">
                    {current.details}
                  </p>
                </div>
              </div>
            );
          })()}

          <div className="text-xs text-zinc-400 pt-3 border-t border-zinc-800 flex items-center justify-between">
            <span>Branch tree status</span>
            <span className="text-emerald-400 font-bold">● Clean & Up to Date</span>
          </div>
        </div>
      </div>

      {/* Footer prompt */}
      <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
        <span>Click any commit node to inspect academic achievements</span>
        <span className="text-zinc-500">Computer Science & Engineering</span>
      </div>
    </div>
  );
};
