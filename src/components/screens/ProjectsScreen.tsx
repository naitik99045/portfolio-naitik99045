"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ExternalLink, Github, Globe, Layers, ArrowUpRight, Building2 } from "lucide-react";

export const ProjectsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const projects = PORTFOLIO_DATA.projects;
  const currentProject = projects[activeTab];

  return (
    <div className="h-full w-full flex flex-col bg-[#0b0d13] text-zinc-100 font-sans select-none">
      {/* Browser Tab Bar */}
      <div className="flex items-center bg-[#12151d] border-b border-zinc-800 px-3 pt-2 space-x-1.5 overflow-x-auto text-xs">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-t font-mono text-xs transition-colors cursor-pointer ${
              activeTab === idx
                ? "bg-[#0b0d13] text-sky-400 font-bold border-t border-x border-zinc-700"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
            }`}
          >
            {p.id === "qwenton-startup" ? (
              <Building2 size={13} className={activeTab === idx ? "text-sky-400" : "text-amber-400"} />
            ) : (
              <Layers size={13} className={activeTab === idx ? "text-sky-400" : "text-zinc-500"} />
            )}
            <span className="truncate max-w-[170px]">{p.title.split(":")[0]}</span>
          </button>
        ))}
      </div>

      {/* Browser URL / Address Bar */}
      <div className="flex items-center px-4 py-2 bg-[#0e1117] border-b border-zinc-800 text-xs">
        <div className="flex-1 flex items-center space-x-2 px-3 py-1 bg-zinc-900 rounded border border-zinc-700/80 text-zinc-300 font-mono text-xs">
          <Globe size={13} className="text-sky-400" />
          <span className="text-zinc-200 truncate font-semibold">
            {currentProject.liveUrl || currentProject.githubUrl}
          </span>
          <span className="ml-auto text-[10px] px-2 py-0.2 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20 font-bold">
            VERIFIED_PRODUCTION
          </span>
        </div>
      </div>

      {/* Browser Content Area: Project Details & Live Frame Preview */}
      <div className="flex-1 p-6 overflow-y-auto grid grid-cols-12 gap-6 bg-[#080a0f]">
        {/* Left Column: Project Overview & Specs */}
        <div className="col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {currentProject.category}
              </span>
              <div className="text-amber-400 text-xs font-mono bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                <span className="font-bold">{currentProject.stars} Stars</span>
              </div>
              {currentProject.id === "qwenton-startup" && (
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Startup Platform
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
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-bold">
                Technologies & Architecture
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-zinc-850 border border-zinc-700 text-xs font-mono text-zinc-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
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
                className="flex items-center space-x-2 px-4 py-2 rounded bg-sky-500 hover:bg-sky-400 text-zinc-950 text-xs font-mono font-bold transition-colors cursor-pointer pointer-events-auto"
              >
                <Globe size={14} />
                <span>Visit {currentProject.id === "qwenton-startup" ? "qwenton.shop" : "Live App"}</span>
                <ExternalLink size={13} />
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
              className="flex items-center space-x-2 px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-mono font-bold transition-colors border border-zinc-700 cursor-pointer pointer-events-auto"
            >
              <Github size={14} />
              <span>GitHub Repository</span>
              <ArrowUpRight size={13} className="text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code & Startup Architecture Preview */}
        <div className="col-span-5 rounded-lg bg-[#0e1117] border border-zinc-800 p-4 flex flex-col justify-between font-mono text-xs">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-xs text-zinc-300">
              <span className="font-bold text-sky-400">
                {currentProject.id === "qwenton-startup" ? "qwenton.agent.ts" : `${currentProject.id}.tsx`}
              </span>
              <span className="text-emerald-400 font-bold">STATUS: ACTIVE</span>
            </div>

            <div className="p-3 rounded bg-[#06070a] border border-zinc-800 text-xs space-y-2 text-zinc-300 leading-relaxed font-mono">
              {currentProject.id === "qwenton-startup" ? (
                <>
                  <p className="text-sky-400">
                    import <span className="text-white">{"{ QwentonAgent }"}</span> from <span className="text-emerald-300">'@qwenton/core'</span>;
                  </p>
                  <p className="text-sky-400">
                    import <span className="text-white">{"{ mcpTools }"}</span> from <span className="text-emerald-300">'@qwenton/mcp'</span>;
                  </p>
                  <div className="pt-1 text-zinc-500 font-sans italic">
                    // Deploy autonomous agents for enterprise workflows
                  </div>
                  <p className="text-amber-300">
                    const agent = new QwentonAgent(&#123;
                  </p>
                  <p className="pl-4 text-emerald-300">target: "Enterprise AI Automations",</p>
                  <p className="pl-4 text-emerald-300">clientPlatform: "qwenton.shop",</p>
                  <p className="text-amber-300">&#125;);</p>
                </>
              ) : (
                <>
                  <p className="text-sky-400">
                    import <span className="text-white">{"{ Canvas }"}</span> from <span className="text-emerald-300">'@react-three/fiber'</span>;
                  </p>
                  <p className="text-sky-400">
                    import <span className="text-white">{"{ QwentonUI }"}</span> from <span className="text-emerald-300">'@qwenton/ui'</span>;
                  </p>
                  <div className="pt-1 text-zinc-500 font-sans italic">
                    // 60 FPS Spatial 3D Web Canvas
                  </div>
                  <p className="text-amber-300">
                    &lt;Canvas dpr=&#123;[1, 2]&#125;&gt;
                  </p>
                  <p className="pl-4 text-sky-400">
                    &lt;QwentonUI spatial /&gt;
                  </p>
                  <p className="text-amber-300">&lt;/Canvas&gt;</p>
                </>
              )}
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
            <span>Owner: <strong className="text-zinc-200">Naitik Talreja</strong></span>
            <span className="text-sky-400 font-bold">qwenton.shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};
