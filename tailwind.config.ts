import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090b",
        foreground: "#f4f4f5",
        aluminum: "#8e9196",
        titanium: "#18181b",
        accent: {
          cyan: "#38bdf8",
          emerald: "#34d399",
          violet: "#a78bfa",
          amber: "#fbbf24",
        },
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.3))" },
          "100%": { opacity: "1", filter: "drop-shadow(0 0 16px rgba(56, 189, 248, 0.6))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
