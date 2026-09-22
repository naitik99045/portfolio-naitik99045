"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ExternalLink, Github, Star, Globe, Layers, ArrowUpRight, Sparkles, Building2 } from "lucide-react";

export const ProjectsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const projects = PORTFOLIO_DATA.projects;
  const currentProject = projects[activeTab];

  return (
    <div className="h-full w-full flex flex-col bg-[#0f1117] text-zinc-100 font-sans select-none">
      {/* Browser Tab Bar */}
      <div className="flex items-center bg-[#161922] border-b border-zinc-800 px-3 pt-2 space-x-2 overflow-x-auto text-xs">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-mono text-xs transition-all cursor-pointer ${
              activeTab === idx
                ? "bg-[#0f1117] text-sky-400 font-bold border-t-2 border-t-sky-400 border-x border-zinc-700/80 shadow-md"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
            }`}
          >
            {p.id === "qwenton-startup" ? (
              <Building2 size={14} className={activeTab === idx ? "text-sky-400" : "text-amber-400"} />
            ) : (
              <Layers size={14} className={activeTab === idx ? "text-sky-400" : "text-zinc-500"} />
            )}
            <span className="truncate max-w-[170px]">{p.title.split(":")[0]}</span>
          </button>
        ))}
      </div>

      {/* Browser URL / Address Bar */}
      <div className="flex items-center px-4 py-2 bg-[#12141a] border-b border-zinc-800 text-xs">
        <div className="flex-1 flex items-center space-x-2 px-3.5 py-1.5 bg-zinc-900 rounded-lg border border-zinc-700/80 text-zinc-300 font-mono text-xs shadow-inner">
          <Globe size={14} className="text-sky-400" />
          <span className="text-zinc-200 truncate font-semibold">
            {currentProject.liveUrl || currentProject.githubUrl}
          </span>
          <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/40 font-bold">
            ● Verified URL
          </span>
        </div>
      </div>

      {/* Browser Content Area: Project Details & Live Frame Preview */}
      <div className="flex-1 p-6 overflow-y-auto grid grid-cols-12 gap-6 bg-[#0a0c10]">
        {/* Left Column: Project Overview & Specs */}
        <div className="col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase bg-sky-500/10 text-sky-400 border border-sky-500/30">
                {currentProject.category}
              </span>
              <div className="flex items-center space-x-1.5 text-amber-400 text-xs font-mono bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                <Star size={13} fill="#fbbf24" />
                <span className="font-bold">{currentProject.stars} Stars</span>
              </div>
              {currentProject.id === "qwenton-startup" && (
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  ★ Startup Platform
                </span>
              )}
            </div>

            <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
              {currentProject.title}
            </h2>

            <p className="text-zinc-300 text-sm leading-relaxed font-normal">
              {currentProject.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-bold">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200 font-medium shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links with exact URLs from urls.txt */}
          <div className="flex items-center space-x-3 pt-4 border-t border-zinc-800 pointer-events-auto">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== "undefined") window.open(currentProject.liveUrl, "_blank", "noopener,noreferrer");
                }}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-mono font-bold transition-all shadow-md cursor-pointer hover:scale-105 pointer-events-auto"
              >
                <Globe size={16} />
                <span>Visit {currentProject.id === "qwenton-startup" ? "qwenton.shop" : "Live App"}</span>
                <ExternalLink size={14} />
              </a>
            )}

            <a
              href={currentProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                if (typeof window !== "undefined") window.open(currentProject.githubUrl, "_blank", "noopener,noreferrer");
              }}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono font-bold transition-all border border-zinc-600 shadow-md cursor-pointer hover:scale-105 pointer-events-auto"
            >
              <Github size={16} />
              <span>GitHub Repository</span>
              <ArrowUpRight size={14} className="text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code & Startup Preview Card */}
        <div className="col-span-5 rounded-xl bg-zinc-900 border border-zinc-800 p-5 flex flex-col justify-between shadow-xl font-mono text-xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 text-xs text-zinc-300">
              <span className="font-bold text-sky-400">
                {currentProject.id === "qwenton-startup" ? "qwenton.agent.ts" : `${currentProject.id}.tsx`}
              </span>
              <span className="text-emerald-400 font-bold">● Active Deployment</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#07080b] border border-zinc-800 text-xs space-y-2 text-zinc-300 leading-relaxed font-mono shadow-inner">
              {currentProject.id === "qwenton-startup" ? (
                <>
                  <p className="text-purple-400">
                    import <span className="text-white">{"{ QwentonAgent }"}</span> from <span className="text-emerald-300">'@qwenton/core'</span>;
                  </p>
                  <p className="text-purple-400">
                    import <span className="text-white">{"{ mcpTools }"}</span> from <span className="text-emerald-300">'@qwenton/mcp'</span>;
                  </p>
                  <div className="pt-2 text-zinc-500 font-sans italic">
                    // Deploy autonomous agents for companies
                  </div>
                  <p className="text-sky-400">
                    const agent = <span className="text-amber-300">new QwentonAgent</span>(&#123;
                  </p>
                  <p className="pl-4 text-emerald-300">target: "Enterprise AI Automations",</p>
                  <p className="pl-4 text-emerald-300">clientPlatform: "qwenton.shop",</p>
                  <p className="text-sky-400">&#125;);</p>
                </>
              ) : (
                <>
                  <p className="text-purple-400">
                    import <span className="text-white">{"{ Canvas }"}</span> from <span className="text-emerald-300">'@react-three/fiber'</span>;
                  </p>
                  <p className="text-purple-400">
                    import <span className="text-white">{"{ QwentonUI }"}</span> from <span className="text-emerald-300">'@qwenton/ui'</span>;
                  </p>
                  <div className="pt-2 text-zinc-500 font-sans italic">
                    // 60 FPS Spatial 3D Web Canvas
                  </div>
                  <p className="text-sky-400">
                    &lt;<span className="text-amber-300">Canvas</span> dpr=&#123;[1, 2]&#125;&gt;
                  </p>
                  <p className="pl-4 text-sky-400">
                    &lt;<span className="text-amber-300">QwentonUI</span> spatial /&gt;
                  </p>
                  <p className="text-sky-400">&lt;/<span className="text-amber-300">Canvas</span>&gt;</p>
                </>
              )}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
            <span>Owner: <strong className="text-zinc-200">Naitik Talreja</strong></span>
            <span className="text-sky-400 font-bold">qwenton.shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};
