"use client";

import React, { useState, useRef, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Terminal,
  Github,
  Linkedin,
  Instagram,
  Power,
  Send,
  Check,
  Copy,
  Building2,
  Globe,
  Mail,
  ArrowUpRight,
  Sparkles,
  Bot,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";

interface ContactScreenProps {
  onExecuteCommand?: (command: string) => void;
  onShutdown?: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({
  onExecuteCommand,
  onShutdown,
}) => {
  const [activeTab, setActiveTab] = useState<"socials" | "qwenton" | "terminal">("socials");
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init",
      command: "welcome",
      output: (
        <div className="space-y-1 text-zinc-300 text-xs">
          <p className="text-emerald-400 font-bold">
            ✔ Connected to naitik@portfolio interactive shell (vibe-coder CLI)
          </p>
          <p className="text-zinc-400">
            Type <strong className="text-sky-300 font-bold">help</strong> to view commands, or click the tabs above.
          </p>
        </div>
      ),
    },
  ]);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1.5 text-zinc-300 py-1 text-xs font-mono">
            <p className="text-sky-400 font-bold">Available Commands:</p>
            {PORTFOLIO_DATA.terminalCommands.map((c) => (
              <div key={c.command} className="flex items-center space-x-3">
                <span className="text-amber-300 font-bold w-28">{c.command}</span>
                <span className="text-zinc-400">- {c.description}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "about":
      case "startup":
        outputNode = (
          <p className="text-zinc-200 py-1 leading-relaxed text-xs">
            Founder & CEO of Qwenton (https://qwenton.shop). Building enterprise AI automations and autonomous personal agents for companies.
          </p>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="text-sky-400 font-bold">Featured Works:</p>
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="text-zinc-300">
                • <strong className="text-white">{p.title}</strong> —{" "}
                <span className="text-zinc-400">{p.liveUrl || p.githubUrl}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
      case "languages":
        outputNode = (
          <p className="text-zinc-300 py-1 text-xs">
            Languages: C++, Python, Rust, Go, Ruby, C#, TypeScript, GLSL. Specialization: Vibe Coding, 3D Spatial Canvases, Autonomous AI Agents.
          </p>
        );
        break;

      case "socials":
        outputNode = (
          <div className="space-y-1.5 py-1 text-xs text-sky-400">
            <p>Qwenton: https://qwenton.shop</p>
            <p>GitHub: {PORTFOLIO_DATA.profile.socials.github}</p>
            <p>LinkedIn: {PORTFOLIO_DATA.profile.socials.linkedin}</p>
            <p>Instagram: {PORTFOLIO_DATA.profile.socials.instagram} (@Naitik_talreja1)</p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      case "shutdown":
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        outputNode = (
          <p className="text-amber-400 font-bold text-xs">
            ⚡ Closing 3D laptop lid and ending session... Goodbye!
          </p>
        );
        if (onShutdown) onShutdown();
        break;

      default:
        outputNode = (
          <p className="text-rose-400 text-xs">
            command not found: '{cmd}'. Type <strong className="text-sky-300">help</strong> for command list.
          </p>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, command: inputVal, output: outputNode },
    ]);

    if (onExecuteCommand) {
      onExecuteCommand(cmd);
    }

    setInputVal("");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    confetti({ particleCount: 40, spread: 50 });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="h-full w-full flex flex-col bg-[#08090d] text-zinc-100 font-sans select-none">
      {/* Cool Browser Tabs Bar (Like in Projects Section) */}
      <div className="flex items-center bg-[#141720] border-b border-zinc-800 px-3 pt-2 space-x-2 text-xs">
        <button
          onClick={() => setActiveTab("socials")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-mono text-xs transition-all cursor-pointer ${
            activeTab === "socials"
              ? "bg-[#08090d] text-sky-400 font-bold border-t-2 border-t-sky-400 border-x border-zinc-700 shadow-md"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          }`}
        >
          <Mail size={14} className={activeTab === "socials" ? "text-sky-400" : "text-zinc-500"} />
          <span>01 / Direct Connect & Socials</span>
        </button>

        <button
          onClick={() => setActiveTab("qwenton")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-mono text-xs transition-all cursor-pointer ${
            activeTab === "qwenton"
              ? "bg-[#08090d] text-amber-400 font-bold border-t-2 border-t-amber-400 border-x border-zinc-700 shadow-md"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          }`}
        >
          <Building2 size={14} className={activeTab === "qwenton" ? "text-amber-400" : "text-zinc-500"} />
          <span>02 / Qwenton Enterprise Inquiries</span>
        </button>

        <button
          onClick={() => setActiveTab("terminal")}
          className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-mono text-xs transition-all cursor-pointer ${
            activeTab === "terminal"
              ? "bg-[#08090d] text-emerald-400 font-bold border-t-2 border-t-emerald-400 border-x border-zinc-700 shadow-md"
              : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
          }`}
        >
          <Terminal size={14} className={activeTab === "terminal" ? "text-emerald-400" : "text-zinc-500"} />
          <span>03 / CLI Shell (naitik@portfolio)</span>
        </button>

        {/* Close Lid Trigger on Right */}
        <div className="ml-auto flex items-center pr-1">
          <button
            onClick={onShutdown}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-[11px] font-mono font-bold transition-all shadow-sm cursor-pointer"
            title="Close 3D Laptop Lid"
          >
            <Power size={12} />
            <span>Close Lid</span>
          </button>
        </div>
      </div>

      {/* Tab Content 1: Direct Socials & Verified Channels */}
      {activeTab === "socials" && (
        <div className="flex-1 p-8 flex flex-col justify-between bg-[#08090d]">
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white font-sans">
                Let's Build Something Legendary Together
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                Connect with Naitik Talreja for 3D web contracts, AI integrations & engineering leadership.
              </p>
            </div>

            {/* 4 Large Social / Contact Action Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2 pointer-events-auto">
              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== "undefined") window.open(PORTFOLIO_DATA.profile.socials.github, "_blank", "noopener,noreferrer");
                }}
                className="p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-between shadow-md cursor-pointer hover:scale-[1.02] pointer-events-auto"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-white">
                    <Github size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">GitHub</h3>
                    <p className="text-xs font-mono text-zinc-400">github.com/naitik99045</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== "undefined") window.open(PORTFOLIO_DATA.profile.socials.linkedin, "_blank", "noopener,noreferrer");
                }}
                className="p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-between shadow-md cursor-pointer hover:scale-[1.02] pointer-events-auto"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">LinkedIn</h3>
                    <p className="text-xs font-mono text-zinc-400">netik-talreja-31ba67426</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== "undefined") window.open(PORTFOLIO_DATA.profile.socials.instagram, "_blank", "noopener,noreferrer");
                }}
                className="p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-between shadow-md cursor-pointer hover:scale-[1.02] pointer-events-auto"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-pink-600/20 text-pink-400">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Instagram</h3>
                    <p className="text-xs font-mono text-zinc-400">@Naitik_talreja1</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-400" />
              </a>

              <a
                href="https://qwenton.shop"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== "undefined") window.open("https://qwenton.shop", "_blank", "noopener,noreferrer");
                }}
                className="p-4 rounded-xl bg-zinc-900 border-2 border-sky-500/40 hover:border-sky-400 transition-all flex items-center justify-between shadow-md cursor-pointer hover:scale-[1.02] pointer-events-auto"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/20 text-sky-400">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Qwenton Startup</h3>
                    <p className="text-xs font-mono text-sky-300">qwenton.shop</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-sky-400" />
              </a>
            </div>
          </div>

          {/* Email Copy Footer */}
          <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300">
              <Mail size={15} className="text-sky-400" />
              <span>Direct Inquiries: <strong className="text-white">{PORTFOLIO_DATA.profile.email}</strong></span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-mono font-bold text-xs transition-all shadow-md cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check size={14} className="text-zinc-950" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Tab Content 2: Qwenton Enterprise Inquiries */}
      {activeTab === "qwenton" && (
        <div className="flex-1 p-8 flex flex-col justify-between bg-[#08090d]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-xs font-bold border border-amber-500/40">
                    Official Startup Channel
                  </span>
                  <span className="text-xs font-mono text-emerald-400">● Accepting Enterprise Clients</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Qwenton: AI Automations & Personal Agents for Companies
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Looking to deploy autonomous AI agent swarms, internal MCP tools, or end-to-end operational automations for your team? We build production-ready AI systems tailored to your exact business stack.
            </p>

            <div className="grid grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <h4 className="text-xs font-mono font-bold text-sky-400">Personal AI Agents</h4>
                <p className="text-[11px] text-zinc-400">Tailored 24/7 background agents executing business tasks.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <h4 className="text-xs font-mono font-bold text-emerald-400">Workflow Automations</h4>
                <p className="text-[11px] text-zinc-400">Automate customer intake, CRM updates, and code pipelines.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <h4 className="text-xs font-mono font-bold text-purple-400">Bespoke 3D Canvases</h4>
                <p className="text-[11px] text-zinc-400">High-DPR spatial web products that boost user engagement.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center space-x-4 border-t border-zinc-800">
            <a
              href="https://qwenton.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-zinc-950 font-mono font-bold text-xs shadow-lg transition-all cursor-pointer hover:scale-105"
            >
              <Globe size={16} />
              <span>Visit qwenton.shop to Book a Project</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      )}

      {/* Tab Content 3: Interactive CLI Shell */}
      {activeTab === "terminal" && (
        <div className="flex-1 p-6 flex flex-col justify-between bg-[#06080b] font-mono text-xs">
          {/* Terminal Output Logs */}
          <div className="flex-1 py-2 overflow-y-auto space-y-3 font-mono">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">naitik@portfolio:~$</span>
                  <span className="text-zinc-100 font-bold">{log.command}</span>
                </div>
                <div className="pl-4">{log.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <div className="pt-3 border-t border-zinc-800">
            <form onSubmit={handleRunCommand} className="flex items-center space-x-3 bg-zinc-900 p-2 rounded-lg border border-zinc-700">
              <span className="text-emerald-400 font-bold pl-2">naitik@portfolio:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'startup', 'projects', 'shutdown'..."
                className="flex-1 bg-transparent text-sky-300 placeholder-zinc-500 focus:outline-none font-mono text-xs font-semibold"
                autoFocus
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded text-xs transition-all flex items-center space-x-1.5 shadow-md cursor-pointer"
              >
                <span>Run</span>
                <Send size={12} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
