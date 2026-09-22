"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Award, ShieldCheck, CheckCircle2, RotateCw, ExternalLink, Sparkles } from "lucide-react";

export const CertificationsScreen: React.FC = () => {
  const certifications = PORTFOLIO_DATA.certifications;

  return (
    <div className="h-full w-full p-8 flex flex-col justify-between bg-[#0a0c12] text-zinc-100 font-sans select-none">
      {/* Top Header */}
      <div className="space-y-1.5 pb-5 border-b border-zinc-800">
        <div className="flex items-center space-x-3 text-amber-400">
          <Award size={20} />
          <h2 className="text-lg font-bold tracking-tight text-white font-mono uppercase">
            Verified Industry Credentials & 3D Hardware Decals
          </h2>
        </div>
        <p className="text-xs text-zinc-400 font-mono">
          Camera orbits 180° to inspect the physical 3D decal stickers applied to the rear metallic shell
        </p>
      </div>

      {/* Certifications 2x2 Large Card Grid */}
      <div className="grid grid-cols-2 gap-5 my-auto py-2">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-5 rounded-xl bg-zinc-900/90 border-2 border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4 shadow-lg shadow-black/40 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase font-bold tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Glowing Badge Color Indicator */}
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 shadow-[0_0_10px]"
                style={{
                  backgroundColor: cert.badgeColor,
                  boxShadow: `0 0 12px ${cert.badgeColor}`,
                }}
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs font-mono">
              <span className="text-zinc-400 font-medium">ID: {cert.credentialId}</span>
              <div className="flex items-center space-x-1.5 text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                <ShieldCheck size={14} />
                <span>Verified Credential</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3D Decal Synchronization Banner */}
      <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-300 shadow-inner">
        <div className="flex items-center space-x-2.5 text-sky-400">
          <RotateCw size={15} className="animate-spin" />
          <span className="font-semibold">
            3D Decal Stickers rendered onto metallic shell with zero z-fighting (polygonOffset enabled)
          </span>
        </div>
        <span className="text-zinc-400 font-bold">4 Decals Active</span>
      </div>
    </div>
  );
};
