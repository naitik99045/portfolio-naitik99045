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

  // --- 1. Base Background Fill ---
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, "#080a10");
  bgGrad.addColorStop(0.5, "#06070b");
  bgGrad.addColorStop(1, "#030406");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // --- 2. macOS Top Menu Bar ---
  ctx.fillStyle = "#11141d";
  ctx.fillRect(0, 0, width, 76);
  ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 76);
  ctx.lineTo(width, 76);
  ctx.stroke();

  // Window Controls (Red, Yellow, Green macOS Buttons)
  ctx.fillStyle = "#ff5f56";
  ctx.beginPath();
  ctx.arc(42, 38, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffbd2e";
  ctx.beginPath();
  ctx.arc(84, 38, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#27c93f";
  ctx.beginPath();
  ctx.arc(126, 38, 14, 0, Math.PI * 2);
  ctx.fill();

  // Top Bar Title
  const titles = [
    "Terminal — vibe-os-boot (qwenton.shop)",
    "Safari — vibe://projects (qwenton.shop)",
    "System Profiler — Vibe Coding & AI Agents",
    "GitHub — qwenton-startup/FOUNDER_BIO.md",
    "Polyglot Engine — Mastered Programming Languages",
    "Contact & Connect — naitik@portfolio:~$",
  ];
  ctx.fillStyle = "#f1f5f9";
  ctx.font = "bold 28px -apple-system, BlinkMacSystemFont, 'Segoe UI', monospace";
  ctx.fillText(titles[section] || "vibe-os", 175, 48);

  // Top Bar Status Indicators
  ctx.fillStyle = "#fbbf24";
  ctx.font = "bold 24px -apple-system, monospace";
  ctx.fillText("🏢 QWENTON.SHOP", width - 720, 48);

  ctx.fillStyle = "#38bdf8";
  ctx.fillText("● 60 FPS", width - 460, 48);

  ctx.fillStyle = "#34d399";
  ctx.fillText("📶 5G ONLINE", width - 300, 48);

  ctx.fillStyle = "#cbd5e1";
  ctx.fillText("@vibe-coder", width - 120, 48);

  // --- 3. Render High-Contrast Section Content ---
  if (section === 0) {
    // === SECTION 0: HERO BOOT ===
    ctx.fillStyle = "#0f131d";
    safeRoundRect(ctx, 60, 110, width - 120, 490, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 34px -apple-system, monospace";
    ctx.fillText("⚡ VIBE-OS KERNEL v3.4.0 — QWENTON STARTUP ENGINE ONLINE", 100, 175);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText("NAITIK TALREJA", 100, 265);

    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 34px -apple-system, monospace";
    ctx.fillText("Founder & CEO, Qwenton (qwenton.shop) • @vibe-coder", 100, 325);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "28px -apple-system, BlinkMacSystemFont, sans-serif";
    ctx.fillText(
      "Selling tailored AI automations & autonomous personal agents for enterprise companies.",
      100,
      385
    );

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 26px -apple-system, monospace";
    ctx.fillText("✔ Official Startup: qwenton.shop   ✔ Single-Canvas 3D   ✔ GitHub: naitik99045", 100, 450);

    // 3 Highlight Feature Columns
    const cards = [
      { title: "🤖 Personal AI Agents", desc: "Tailored 24/7 autonomous agents executing complex workflows for executives & teams." },
      { title: "⚡ Enterprise Automations", desc: "End-to-end automation pipelines built at qwenton.shop integrating MCP & internal tools." },
      { title: "🌐 3D Spatial Canvases", desc: "Single-canvas high-DPR Three.js & React Three Fiber web experiences with 60 FPS physics." },
    ];

    cards.forEach((c, idx) => {
      const cx = 60 + idx * 640;
      ctx.fillStyle = "#0e111a";
      safeRoundRect(ctx, cx, 630, 600, 500, 20);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 32px -apple-system, sans-serif";
      ctx.fillText(c.title, cx + 40, 710);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "24px -apple-system, sans-serif";
      ctx.fillText(c.desc, cx + 40, 770, 520);
    });
  } else if (section === 1) {
    // === SECTION 1: PROJECTS BROWSER WITH EXACT URLS ===
    const projects = PORTFOLIO_DATA.projects;
    const cur = projects[activeTab] || projects[0];

    // Browser Tabs
    projects.forEach((p, idx) => {
      const tabX = 60 + idx * 460;
      ctx.fillStyle = idx === activeTab ? "#161c28" : "#0d1017";
      safeRoundRect(ctx, tabX, 95, 440, 65, [14, 14, 0, 0]);
      ctx.fill();
      ctx.fillStyle = idx === activeTab ? "#38bdf8" : "#64748b";
      ctx.font = "bold 24px -apple-system, monospace";
      ctx.fillText(p.title.split(":")[0], tabX + 30, 138);
    });

    // Browser Address Bar
    ctx.fillStyle = "#141822";
    safeRoundRect(ctx, 60, 160, width - 120, 74, 16);
    ctx.fill();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 26px -apple-system, monospace";
    ctx.fillText(`🌐 ${cur.liveUrl || cur.githubUrl}`, 90, 208);

    // Left Main Project Card
    ctx.fillStyle = "#0f131d";
    safeRoundRect(ctx, 60, 260, 1100, 940, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 24px -apple-system, monospace";
    ctx.fillText(cur.category.toUpperCase(), 100, 330);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px -apple-system, sans-serif";
    ctx.fillText(cur.title, 100, 400);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "26px -apple-system, sans-serif";
    ctx.fillText(cur.description, 100, 470, 1000);

    // Tags
    cur.tags.forEach((t, i) => {
      const tx = 100 + (i % 3) * 320;
      const ty = 610 + Math.floor(i / 3) * 65;
      ctx.fillStyle = "#1e2433";
      safeRoundRect(ctx, tx, ty, 300, 52, 10);
      ctx.fill();
      ctx.fillStyle = "#f1f5f9";
      ctx.font = "bold 22px -apple-system, monospace";
      ctx.fillText(t, tx + 20, ty + 35);
    });

    // Action Button
    ctx.fillStyle = "#0284c7";
    safeRoundRect(ctx, 100, 810, 440, 76, 16);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px -apple-system, sans-serif";
    ctx.fillText("🔗 Visit Live Application", 140, 858);

    // Right Startup Preview Box
    ctx.fillStyle = "#07090f";
    safeRoundRect(ctx, 1200, 260, 780, 940, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 26px -apple-system, monospace";
    ctx.fillText("import { QwentonAgent } from '@qwenton/core';", 1240, 340);
    ctx.fillText("import { mcpTools } from '@qwenton/mcp';", 1240, 395);

    ctx.fillStyle = "#64748b";
    ctx.fillText("// Enterprise AI Automations & Personal Agents", 1240, 480);

    ctx.fillStyle = "#38bdf8";
    ctx.fillText("const agent = new QwentonAgent({", 1240, 550);
    ctx.fillText("  platform: 'qwenton.shop',", 1240, 610);
    ctx.fillText("  status: 'Deploying to Companies',", 1240, 670);
    ctx.fillText("});", 1240, 730);

    ctx.fillStyle = "#34d399";
    ctx.fillText("✔ Verified Startup • https://qwenton.shop", 1240, 830);
  } else if (section === 2) {
    // === SECTION 2: VIBE CODING & AI AGENTS ===
    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 46px -apple-system, sans-serif";
    ctx.fillText("VIBE CODING, 3D CANVASES & AUTONOMOUS AI AGENTS", 80, 150);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 24px -apple-system, monospace";
    ctx.fillText(`Active Query: "${searchQuery || 'VIBE_CODING_ALL'}" — 3D Keyboard Synced`, 80, 200);

    const categories = PORTFOLIO_DATA.skillCategories;
    categories.forEach((cat, cIdx) => {
      const colX = 80 + cIdx * 630;
      ctx.fillStyle = "#0f131d";
      safeRoundRect(ctx, colX, 240, 600, 960, 20);
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.2)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 26px -apple-system, monospace";
      ctx.fillText(cat.category.toUpperCase(), colX + 30, 295);

      cat.skills.forEach((s, sIdx) => {
        const sy = 350 + sIdx * 110;
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 24px -apple-system, sans-serif";
        ctx.fillText(s.name, colX + 30, sy);

        ctx.fillStyle = "#38bdf8";
        ctx.font = "bold 22px -apple-system, monospace";
        ctx.fillText(`${s.level}%`, colX + 500, sy);

        if (s.description) {
          ctx.fillStyle = "#94a3b8";
          ctx.font = "17px -apple-system, sans-serif";
          ctx.fillText(s.description, colX + 30, sy + 28, 520);
        }

        // Progress Bar
        ctx.fillStyle = "#1e2433";
        safeRoundRect(ctx, colX + 30, sy + 40, 530, 14, 7);
        ctx.fill();

        const barGrad = ctx.createLinearGradient(colX + 30, 0, colX + 30 + 530 * (s.level / 100), 0);
        barGrad.addColorStop(0, "#0284c7");
        barGrad.addColorStop(1, "#34d399");
        ctx.fillStyle = barGrad;
        safeRoundRect(ctx, colX + 30, sy + 40, 530 * (s.level / 100), 14, 7);
        ctx.fill();
      });
    });
  } else if (section === 3) {
    // === SECTION 3: FOUNDER BIO ===
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 52px -apple-system, sans-serif";
    ctx.fillText("NAITIK TALREJA — FOUNDER & CEO, QWENTON", 80, 150);

    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 28px -apple-system, monospace";
    ctx.fillText("Official Startup: https://qwenton.shop • AI Automations & Personal Agents", 80, 210);

    ctx.fillStyle = "#0f131d";
    safeRoundRect(ctx, 80, 260, width - 160, 480, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "30px -apple-system, sans-serif";
    ctx.fillText(
      "Owner of Qwenton (qwenton.shop), selling tailored AI automations and autonomous personal agents for companies.",
      120,
      345
    );
    ctx.fillText(
      "Pioneering vibe-coding engineering workflows, high-precision 3D spatial web canvases & enterprise agent swarms.",
      120,
      415
    );

    // 4 Stats Boxes
    PORTFOLIO_DATA.profile.stats.forEach((s, idx) => {
      const bx = 80 + idx * 475;
      ctx.fillStyle = "#141822";
      safeRoundRect(ctx, bx, 780, 440, 280, 20);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 56px -apple-system, monospace";
      ctx.fillText(s.value, bx + 40, 885);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 24px -apple-system, monospace";
      ctx.fillText(s.label.toUpperCase(), bx + 40, 965);
    });
  } else if (section === 4) {
    // === SECTION 4: MASTERED PROGRAMMING LANGUAGES ===
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 46px -apple-system, sans-serif";
    ctx.fillText("MASTERED PROGRAMMING LANGUAGES", 80, 150);

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 26px -apple-system, monospace";
    ctx.fillText("C++, Python, Rust, Go (Golang), Ruby, C# (.NET), TypeScript/JS, GLSL Shaders", 80, 205);

    const languages = PORTFOLIO_DATA.masteredLanguages;
    languages.forEach((lang, idx) => {
      const row = Math.floor(idx / 4);
      const col = idx % 4;
      const lx = 80 + col * 475;
      const ly = 260 + row * 450;

      ctx.fillStyle = "#0f131d";
      safeRoundRect(ctx, lx, ly, 445, 410, 20);
      ctx.fill();
      ctx.strokeStyle = lang.accentColor;
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = lang.accentColor;
      ctx.font = "bold 36px -apple-system, monospace";
      ctx.fillText(lang.name, lx + 30, ly + 72);

      ctx.fillStyle = "#38bdf8";
      ctx.font = "bold 20px -apple-system, monospace";
      ctx.fillText("LEVEL: MASTERED", lx + 30, ly + 120);

      ctx.fillStyle = "#cbd5e1";
      ctx.font = "22px -apple-system, sans-serif";
      ctx.fillText(lang.description, lx + 30, ly + 170, 385);
    });
  } else if (section === 5) {
    // === SECTION 5: CONTACT TABS & QWENTON INQUIRIES ===
    ctx.fillStyle = "#34d399";
    ctx.font = "bold 44px -apple-system, monospace";
    ctx.fillText("CONNECT & QWENTON ENTERPRISE INQUIRIES", 80, 150);

    ctx.fillStyle = "#0f131d";
    safeRoundRect(ctx, 80, 220, width - 160, 960, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#fbbf24";
    ctx.font = "bold 36px -apple-system, monospace";
    ctx.fillText("🏢 QWENTON STARTUP: https://qwenton.shop", 140, 340);

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 34px -apple-system, monospace";
    ctx.fillText("🔗 GitHub:   https://github.com/naitik99045", 140, 440);
    ctx.fillText("🔗 LinkedIn: https://www.linkedin.com/in/netik-talreja-31ba67426", 140, 530);
    ctx.fillText("🔗 Instagram: https://instagram.com/Naitik_talreja1 (@Naitik_talreja1)", 140, 620);
    ctx.fillText(`📧 Direct Email: ${PORTFOLIO_DATA.profile.email}`, 140, 710);

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 28px -apple-system, monospace";
    ctx.fillText("Type 'help', 'startup', 'projects', 'shutdown' in terminal to execute commands.", 140, 840);
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

