import * as THREE from "three";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

// Universal safe roundRect helper that works across all browsers
function safeRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number | number[]
) {
  const radius = typeof r === "number" ? r : r[0] || 0;
  if (typeof ctx.roundRect === "function") {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }
}

export function createScreenTexture(
  section: number,
  searchQuery: string = "",
  activeTab: number = 0
): THREE.CanvasTexture {
  if (typeof document === "undefined") {
    return new THREE.CanvasTexture(new Image());
  }

  const width = 2048;
  const height = 1280;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  // --- 1. Base Engineering Background Fill ---
  ctx.fillStyle = "#0a0c10";
  ctx.fillRect(0, 0, width, height);

  // --- 2. Precision Window Header Bar ---
  ctx.fillStyle = "#12151c";
  ctx.fillRect(0, 0, width, 72);
  ctx.strokeStyle = "#1f2430";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 72);
  ctx.lineTo(width, 72);
  ctx.stroke();

  // Window Controls (Minimal Industrial Dots)
  ctx.fillStyle = "#ef4444";
  ctx.beginPath();
  ctx.arc(36, 36, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(68, 36, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#10b981";
  ctx.beginPath();
  ctx.arc(100, 36, 10, 0, Math.PI * 2);
  ctx.fill();

  // Top Bar Title
  const titles = [
    "QWENTON OS / KERNEL_INIT / NAITIK TALREJA",
    "PROJECTS / PRODUCTION_DEPLOYMENTS",
    "SKILLS & SYSTEMS ARCHITECTURE",
    "FOUNDER OVERVIEW / QWENTON (qwenton.shop)",
    "MASTERED PROGRAMMING LANGUAGES & RUNTIMES",
    "ENTERPRISE INQUIRIES & CLI INTERACTION",
  ];
  ctx.fillStyle = "#e2e8f0";
  ctx.font = "bold 22px 'Courier New', monospace";
  ctx.fillText(titles[section] || "QWENTON OS", 140, 44);

  // Top Bar Technical Status Indicators (No Emojis)
  ctx.fillStyle = "#f59e0b";
  ctx.font = "bold 18px 'Courier New', monospace";
  ctx.fillText("[STARTUP: qwenton.shop]", width - 780, 44);

  ctx.fillStyle = "#38bdf8";
  ctx.fillText("[FPS: 60 LOCKED]", width - 480, 44);

  ctx.fillStyle = "#10b981";
  ctx.fillText("[STATUS: ONLINE]", width - 260, 44);

  ctx.fillStyle = "#94a3b8";
  ctx.fillText("@vibe-coder", width - 80, 44);

  // --- 3. Render High-Contrast Section Content ---
  if (section === 0) {
    // === SECTION 0: HERO BOOT ===
    // Main Header Card
    ctx.fillStyle = "#0f1218";
    safeRoundRect(ctx, 60, 100, width - 120, 440, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 24px 'Courier New', monospace";
    ctx.fillText("SYSTEM INITIALIZATION // STARTUP ENGINE ACTIVE", 100, 155);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 58px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("NAITIK TALREJA", 100, 240);

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 26px 'Courier New', monospace";
    ctx.fillText("Founder & CEO, Qwenton (qwenton.shop) | Lead Systems Architect", 100, 295);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "24px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(
      "Deploying enterprise AI automations, custom autonomous agent pipelines, and high-performance 3D spatial web canvases.",
      100,
      350
    );

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 20px 'Courier New', monospace";
    ctx.fillText("[PLATFORM: https://qwenton.shop]   [CODE: github.com/naitik99045]   [ARCH: 60 FPS WEBGL]", 100, 420);

    // Dual Split Architecture Overview (Avoid generic 3 cards in a row)
    // Left: Autonomous Agent Swarms
    ctx.fillStyle = "#0d1017";
    safeRoundRect(ctx, 60, 570, 930, 560, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 26px -apple-system, sans-serif";
    ctx.fillText("Autonomous AI Agents & Enterprise Automations", 100, 630);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px -apple-system, sans-serif";
    ctx.fillText("Architecting 24/7 background agent swarms and Model Context Protocol (MCP) integrations.", 100, 680, 850);
    ctx.fillText("Delivering tailored workflow automations that eliminate manual enterprise operations at scale.", 100, 720, 850);

    ctx.fillStyle = "#1e2430";
    safeRoundRect(ctx, 100, 770, 850, 160, 8);
    ctx.fill();

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 18px 'Courier New', monospace";
    ctx.fillText("DEPLOYMENT: QWENTON ENTERPRISE SUITE", 130, 815);
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("CLIENT ACCESS: https://qwenton.shop", 130, 855);
    ctx.fillText("STACK: LangGraph, FastAPI, Redis, MCP Tools", 130, 895);

    // Right: 3D Spatial Canvas Engine
    ctx.fillStyle = "#0d1017";
    safeRoundRect(ctx, 1030, 570, 958, 560, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 26px -apple-system, sans-serif";
    ctx.fillText("3D Spatial Canvases & Systems Engineering", 1070, 630);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px -apple-system, sans-serif";
    ctx.fillText("Single-canvas WebGL architectures engineered with React Three Fiber, Three.js, and GLSL shaders.", 1070, 680, 870);
    ctx.fillText("Low-level polyglot compute foundations built across native C++, Rust, Go, Python, and TypeScript.", 1070, 720, 870);

    ctx.fillStyle = "#1e2430";
    safeRoundRect(ctx, 1070, 770, 878, 160, 8);
    ctx.fill();

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 18px 'Courier New', monospace";
    ctx.fillText("FRAME RATE: 60.0 FPS LOCKED (SUB-PIXEL DPR)", 1100, 815);
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("OPEN SOURCE: github.com/naitik99045/qwenton-ui", 1100, 855);
    ctx.fillText("ENGINE: Three.js, React Three Fiber, WebGL2", 1100, 895);

    // Legal Footer Notice
    ctx.fillStyle = "#64748b";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Terms of Service & Privacy Policy Available in HUD | Qwenton (qwenton.shop) © 2026", 100, 1210);
  } else if (section === 1) {
    // === SECTION 1: PROJECTS BROWSER WITH EXACT URLS ===
    const projects = PORTFOLIO_DATA.projects;
    const cur = projects[activeTab] || projects[0];

    // Browser Tabs Bar
    projects.forEach((p, idx) => {
      const tabX = 60 + idx * 460;
      ctx.fillStyle = idx === activeTab ? "#161b24" : "#0d1017";
      safeRoundRect(ctx, tabX, 90, 440, 60, [8, 8, 0, 0]);
      ctx.fill();
      ctx.fillStyle = idx === activeTab ? "#38bdf8" : "#64748b";
      ctx.font = "bold 20px 'Courier New', monospace";
      ctx.fillText(p.title.split(":")[0], tabX + 25, 128);
    });

    // Browser Address Bar
    ctx.fillStyle = "#121620";
    safeRoundRect(ctx, 60, 150, width - 120, 66, 8);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.fillText(`URL: ${cur.liveUrl || cur.githubUrl}`, 90, 192);

    // Left Main Project Card
    ctx.fillStyle = "#0d1017";
    safeRoundRect(ctx, 60, 240, 1100, 920, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 20px 'Courier New', monospace";
    ctx.fillText(`CATEGORY: ${cur.category.toUpperCase()}`, 100, 305);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 42px -apple-system, sans-serif";
    ctx.fillText(cur.title, 100, 370);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "24px -apple-system, sans-serif";
    ctx.fillText(cur.description, 100, 435, 1000);

    // Tags
    cur.tags.forEach((t, i) => {
      const tx = 100 + (i % 3) * 320;
      const ty = 570 + Math.floor(i / 3) * 60;
      ctx.fillStyle = "#1e2430";
      safeRoundRect(ctx, tx, ty, 300, 46, 6);
      ctx.fill();
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "bold 18px 'Courier New', monospace";
      ctx.fillText(t, tx + 20, ty + 30);
    });

    // Action Button
    ctx.fillStyle = "#0284c7";
    safeRoundRect(ctx, 100, 770, 420, 68, 8);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px -apple-system, sans-serif";
    ctx.fillText("Visit Live Deployment", 130, 812);

    // Right Startup Architecture Box
    ctx.fillStyle = "#07090e";
    safeRoundRect(ctx, 1200, 240, 780, 920, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.fillText("import { QwentonAgent } from '@qwenton/core';", 1240, 310);
    ctx.fillText("import { mcpTools } from '@qwenton/mcp';", 1240, 360);

    ctx.fillStyle = "#64748b";
    ctx.fillText("// Enterprise Automation Workflow", 1240, 435);

    ctx.fillStyle = "#38bdf8";
    ctx.fillText("const agent = new QwentonAgent({", 1240, 500);
    ctx.fillText("  platform: 'qwenton.shop',", 1240, 555);
    ctx.fillText("  deployment: 'Production',", 1240, 610);
    ctx.fillText("});", 1240, 665);

    ctx.fillStyle = "#10b981";
    ctx.fillText("STATUS: VERIFIED PRODUCTION", 1240, 760);
    ctx.fillText("ENDPOINT: https://qwenton.shop", 1240, 810);

    // Legal Footer Notice
    ctx.fillStyle = "#64748b";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Terms of Service & Privacy Policy Available in HUD | Qwenton (qwenton.shop) © 2026", 100, 1210);
  } else if (section === 2) {
    // === SECTION 2: VIBE CODING & AI AGENTS ===
    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 40px -apple-system, sans-serif";
    ctx.fillText("VIBE CODING, 3D CANVASES & AUTONOMOUS AI AGENTS", 80, 140);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.fillText(`FILTER QUERY: "${searchQuery || 'ALL_SYSTEMS'}" | 3D HARDWARE KEYBOARD SYNCED`, 80, 185);

    const categories = PORTFOLIO_DATA.skillCategories;
    // 2-Column Split rather than 3 cards
    categories.slice(0, 2).forEach((cat, cIdx) => {
      const colX = 80 + cIdx * 950;
      ctx.fillStyle = "#0d1017";
      safeRoundRect(ctx, colX, 220, 910, 950, 12);
      ctx.fill();
      ctx.strokeStyle = "#1f2430";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 22px 'Courier New', monospace";
      ctx.fillText(cat.category.toUpperCase(), colX + 30, 275);

      cat.skills.forEach((s, sIdx) => {
        const sy = 330 + sIdx * 135;
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 22px -apple-system, sans-serif";
        ctx.fillText(s.name, colX + 30, sy);

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 20px 'Courier New', monospace";
        ctx.fillText(`${s.level}%`, colX + 800, sy);

        if (s.description) {
          ctx.fillStyle = "#94a3b8";
          ctx.font = "16px -apple-system, sans-serif";
          ctx.fillText(s.description, colX + 30, sy + 30, 830);
        }

        // Progress Bar
        ctx.fillStyle = "#1e2430";
        safeRoundRect(ctx, colX + 30, sy + 45, 840, 12, 4);
        ctx.fill();

        ctx.fillStyle = "#0284c7";
        safeRoundRect(ctx, colX + 30, sy + 45, 840 * (s.level / 100), 12, 4);
        ctx.fill();
      });
    });

    // Legal Footer Notice
    ctx.fillStyle = "#64748b";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Terms of Service & Privacy Policy Available in HUD | Qwenton (qwenton.shop) © 2026", 80, 1210);
  } else if (section === 3) {
    // === SECTION 3: FOUNDER BIO ===
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 46px -apple-system, sans-serif";
    ctx.fillText("NAITIK TALREJA — FOUNDER & CEO, QWENTON", 80, 140);

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 24px 'Courier New', monospace";
    ctx.fillText("OFFICIAL PLATFORM: https://qwenton.shop | AI AUTOMATIONS & AGENTS", 80, 190);

    ctx.fillStyle = "#0d1017";
    safeRoundRect(ctx, 80, 230, width - 160, 480, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "26px -apple-system, sans-serif";
    ctx.fillText(
      "Owner and Founder of Qwenton (qwenton.shop), selling tailored AI automations and autonomous personal agents for companies.",
      120,
      310
    );
    ctx.fillText(
      "Leading technical architecture across vibe coding workflows, high-precision 3D spatial web canvases, and robust full-stack systems.",
      120,
      370
    );

    // 4 Key Stats (Structured Grid)
    PORTFOLIO_DATA.profile.stats.forEach((s, idx) => {
      const bx = 80 + idx * 475;
      ctx.fillStyle = "#12151d";
      safeRoundRect(ctx, bx, 760, 440, 280, 10);
      ctx.fill();
      ctx.strokeStyle = "#1f2430";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 48px 'Courier New', monospace";
      ctx.fillText(s.value, bx + 35, 860);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 20px 'Courier New', monospace";
      ctx.fillText(s.label.toUpperCase(), bx + 35, 940);
    });

    // Legal Footer Notice
    ctx.fillStyle = "#64748b";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Terms of Service & Privacy Policy Available in HUD | Qwenton (qwenton.shop) © 2026", 80, 1210);
  } else if (section === 4) {
    // === SECTION 4: MASTERED PROGRAMMING LANGUAGES ===
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 42px -apple-system, sans-serif";
    ctx.fillText("MASTERED PROGRAMMING LANGUAGES & SYSTEMS", 80, 140);

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 22px 'Courier New', monospace";
    ctx.fillText("C++, Python, Rust, Go (Golang), Ruby, C# (.NET), TypeScript/JS, GLSL Shaders", 80, 185);

    const languages = PORTFOLIO_DATA.masteredLanguages;
    languages.forEach((lang, idx) => {
      const row = Math.floor(idx / 4);
      const col = idx % 4;
      const lx = 80 + col * 475;
      const ly = 240 + row * 450;

      ctx.fillStyle = "#0d1017";
      safeRoundRect(ctx, lx, ly, 445, 410, 10);
      ctx.fill();
      ctx.strokeStyle = "#1f2430";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = lang.accentColor || "#38bdf8";
      ctx.font = "bold 32px 'Courier New', monospace";
      ctx.fillText(lang.name, lx + 30, ly + 65);

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 18px 'Courier New', monospace";
      ctx.fillText("LEVEL: MASTERED", lx + 30, ly + 110);

      ctx.fillStyle = "#cbd5e1";
      ctx.font = "20px -apple-system, sans-serif";
      ctx.fillText(lang.description, lx + 30, ly + 160, 385);
    });

    // Legal Footer Notice
    ctx.fillStyle = "#64748b";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Terms of Service & Privacy Policy Available in HUD | Qwenton (qwenton.shop) © 2026", 80, 1210);
  } else if (section === 5) {
    // === SECTION 5: CONTACT TABS & QWENTON INQUIRIES ===
    ctx.fillStyle = "#10b981";
    ctx.font = "bold 40px 'Courier New', monospace";
    ctx.fillText("ENTERPRISE INQUIRIES & DIRECT CHANNELS", 80, 140);

    ctx.fillStyle = "#0d1017";
    safeRoundRect(ctx, 80, 200, width - 160, 960, 12);
    ctx.fill();
    ctx.strokeStyle = "#1f2430";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 32px 'Courier New', monospace";
    ctx.fillText("QWENTON STARTUP: https://qwenton.shop", 130, 310);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 30px 'Courier New', monospace";
    ctx.fillText("GITHUB:    https://github.com/naitik99045", 130, 400);
    ctx.fillText("LINKEDIN:  https://www.linkedin.com/in/netik-talreja-31ba67426", 130, 490);
    ctx.fillText("INSTAGRAM: https://instagram.com/Naitik_talreja1 (@Naitik_talreja1)", 130, 580);
    ctx.fillText(`EMAIL:     ${PORTFOLIO_DATA.profile.email}`, 130, 670);

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 24px 'Courier New', monospace";
    ctx.fillText("Interactive Shell: Type 'help', 'about', 'startup', 'projects' in terminal.", 130, 800);

    // Legal Footer Notice
    ctx.fillStyle = "#64748b";
    ctx.font = "16px 'Courier New', monospace";
    ctx.fillText("Terms of Service & Privacy Policy Available in HUD | Qwenton (qwenton.shop) © 2026", 80, 1210);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
