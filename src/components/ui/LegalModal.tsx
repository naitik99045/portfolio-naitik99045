"use client";

import React from "react";
import { X, Shield, FileText } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  type: "terms" | "privacy" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-[#0e1117] border border-zinc-700 rounded-lg p-6 text-zinc-200 font-sans shadow-2xl relative max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center space-x-2.5">
            {type === "terms" ? (
              <FileText size={18} className="text-amber-400" />
            ) : (
              <Shield size={18} className="text-sky-400" />
            )}
            <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide">
              {type === "terms" ? "Terms of Service" : "Privacy Policy"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 space-y-4 text-xs leading-relaxed text-zinc-300">
          {type === "terms" ? (
            <>
              <p className="text-zinc-400">Last updated: September 2026</p>
              <h3 className="text-sm font-bold text-white font-mono">1. Agreement to Terms</h3>
              <p>
                By accessing and using this portfolio and the services provided by Qwenton (qwenton.shop), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.
              </p>
              <h3 className="text-sm font-bold text-white font-mono">2. Intellectual Property</h3>
              <p>
                All 3D spatial models, shader architectures, custom automation pipelines, and software libraries (including qwenton-ui) displayed are the intellectual property of Naitik Talreja / Qwenton unless otherwise attributed to open-source licenses.
              </p>
              <h3 className="text-sm font-bold text-white font-mono">3. Client Engagements</h3>
              <p>
                Enterprise AI automation deployments and custom agent integrations are governed by individual master service agreements (MSAs) executed with Qwenton.
              </p>
            </>
          ) : (
            <>
              <p className="text-zinc-400">Last updated: September 2026</p>
              <h3 className="text-sm font-bold text-white font-mono">1. Information Collection</h3>
              <p>
                This portfolio website collects minimal analytics data to ensure 60 FPS WebGL rendering performance and device capability detection. No personally identifiable information (PII) is sold or distributed.
              </p>
              <h3 className="text-sm font-bold text-white font-mono">2. Contact Form & Communications</h3>
              <p>
                When submitting enterprise inquiries or booking requests via qwenton.shop or email, your contact details are solely used to respond to your project requirements.
              </p>
              <h3 className="text-sm font-bold text-white font-mono">3. Local Storage</h3>
              <p>
                We use client-side local storage exclusively to persist your audio preferences (mute/sound FX) and display view mode (3D Canvas / 2D view).
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Qwenton (qwenton.shop) &copy; 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
