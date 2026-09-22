"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Instagram,
  Terminal,
  ExternalLink,
  Star,
  CheckCircle2,
  Code2,
  Globe,
  Sparkles,
  Layers,
  Building2,
  Bot,
  Zap,
} from "lucide-react";

export const SemanticFallback: React.FC = () => {
  const { profile, projects, skillCategories, masteredLanguages } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 font-sans p-6 md:p-12 max-w-5xl mx-auto space-y-16 pb-28">
      {/* 1. Hero Section */}
      <section id="hero" className="space-y-4 pt-10 border-b border-zinc-800/80 pb-12">
        <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs">
          <Terminal size={14} />
          <span>vibe-coder initialized // Founder @ Qwenton (qwenton.shop)</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          {profile.name}
        </h1>
        <p className="text-xl text-amber-300 font-mono">
          Founder & CEO, Qwenton • @{profile.moniker}
        </p>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
          {profile.bio}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://qwenton.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-400 text-zinc-950 font-bold text-xs font-mono"
          >
            <Building2 size={14} />
            <span>qwenton.shop (Startup)</span>
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-200"
          >
            <Github size={14} />
            <span>GitHub (naitik99045)</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-200"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-200"
          >
            <Instagram size={14} />
            <span>@Naitik_talreja1</span>
          </a>
        </div>
      </section>

      {/* 2. Projects Section */}
      <section id="projects" className="space-y-6 border-b border-zinc-800/80 pb-12">
        <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs uppercase tracking-wider">
          <Layers size={14} />
          <span>02 / Featured Projects & Startup Offerings</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Qwenton Startup & Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono">
                    {p.category}
                  </span>
                  <div className="flex items-center space-x-1 text-amber-400 font-mono">
                    <Star size={12} fill="#fbbf24" />
                    <span>{p.stars}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{p.description}</p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded bg-zinc-800/80 text-[11px] font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-2 border-t border-zinc-800/80">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 font-mono font-bold"
                    >
                      <Globe size={13} />
                      <span>{p.id === "qwenton-startup" ? "Visit qwenton.shop" : "Live App"}</span>
                    </a>
                  )}
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs text-zinc-400 hover:text-white font-mono"
                  >
                    <Github size={13} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Skills Section (Vibe Coding, 3D, Agents) */}
      <section id="skills" className="space-y-6 border-b border-zinc-800/80 pb-12">
        <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
          <Zap size={14} />
          <span>03 / Vibe Coding, 3D Builder & Autonomous AI Agents</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">AI & Spatial Engineering Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
              <h3 className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div key={s.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300 font-semibold">{s.name}</span>
                      <span className="text-sky-400 font-bold">{s.level}%</span>
                    </div>
                    {s.description && (
                      <p className="text-[11px] text-zinc-500 font-sans">{s.description}</p>
                    )}
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Founder Bio Section */}
      <section id="about" className="space-y-6 border-b border-zinc-800/80 pb-12">
        <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs uppercase tracking-wider">
          <Building2 size={14} />
          <span>04 / Founder Story & Qwenton Vision</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">About Naitik Talreja & Qwenton</h2>
        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed font-sans">
          <p>
            I am <strong className="text-white">Naitik Talreja</strong>, widely known as <em>vibe-coder</em>, and the founder of <strong className="text-amber-300">Qwenton</strong> (<a href="https://qwenton.shop" className="underline text-sky-400">qwenton.shop</a>).
          </p>
          <p>
            At Qwenton, we specialize in selling tailored AI automations and autonomous personal agents for modern companies. We help organizations eliminate repetitive manual operations through multi-agent workflows, Model Context Protocol (MCP) integrations, and bespoke 3D spatial web canvases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800">
              <h4 className="font-bold text-sky-400 mb-1 font-mono text-xs">Personal AI Agents</h4>
              <p className="text-zinc-400 text-xs">Autonomous workers tailored for corporate business workflows.</p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800">
              <h4 className="font-bold text-emerald-400 mb-1 font-mono text-xs">Enterprise Automations</h4>
              <p className="text-zinc-400 text-xs">End-to-end multi-agent pipelines with MCP tool calling.</p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800">
              <h4 className="font-bold text-purple-400 mb-1 font-mono text-xs">3D Spatial Builder</h4>
              <p className="text-zinc-400 text-xs">Single-canvas Three.js / R3F web applications at 60 FPS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mastered Programming Languages */}
      <section id="languages" className="space-y-6 border-b border-zinc-800/80 pb-12">
        <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs uppercase tracking-wider">
          <Code2 size={14} />
          <span>05 / Mastered Programming Languages</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Polyglot Systems Engineering</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {masteredLanguages.map((l) => (
            <div key={l.name} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white font-mono">{l.name}</span>
                <span className="text-[10px] font-mono text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30">
                  {l.level}
                </span>
              </div>
              <p className="text-xs text-zinc-400">{l.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="space-y-6">
        <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
          <Terminal size={14} />
          <span>06 / Connect & Enterprise Bookings</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">Get in Touch</h2>
        <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-4">
          <p className="text-zinc-300 text-sm">
            Interested in deploying AI automations or personal AI agents for your company, or building a bespoke 3D spatial website?
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://qwenton.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs font-mono transition-colors"
            >
              🏢 Qwenton: qwenton.shop
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs font-mono transition-colors"
            >
              Email: {profile.email}
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs transition-colors"
            >
              GitHub: naitik99045
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs transition-colors"
            >
              LinkedIn Profile
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs transition-colors"
            >
              Instagram: @Naitik_talreja1
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
