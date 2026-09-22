# 3D Laptop Portfolio Master Prompt & Product Requirements Document (PRD)

> **Client:** Naitik Talreja ("vibe-coder")  
> **Source Grounding:** Rebuilt Portfolio with 3D Laptop Experience (Next.js + React Three Fiber Architecture)  
> **Target Tech Stack:** Next.js (App Router), React Three Fiber (R3F), Three.js, TypeScript, Tailwind CSS, GSAP / Framer Motion.

---

## 🤖 Master AI System Prompt
*(Copy and paste this exact prompt into your AI agent such as Cursor, Windsurf, Claude Code, or v0)*

```markdown
You are an elite Creative Technologist and Senior Full-Stack Engineer specializing in Next.js (App Router), React Three Fiber (R3F), Three.js, TypeScript, and Tailwind CSS.

### Project Objective
Build a high-performance, single-canvas 3D laptop portfolio website for Naitik Talreja ("vibe-coder"). The entire portfolio experience is centered around a single 3D laptop GLTF model that remains anchored on screen throughout the user's scroll. Every portfolio section unfolds directly on or around the laptop model using dynamic camera movements, 3D transformations, interactive screen renders, physical keypresses, and lid decals.

### Developer Profile & Social Media Links
- **Name:** Naitik Talreja
- **Title / Moniker:** vibe-coder
- **GitHub:** https://github.com/naitik99045
- **LinkedIn:** https://www.linkedin.com/in/netik-talreja-31ba67426
- **Instagram:** https://instagram.com/Naitik_talreja1 (@Naitik_talreja1)

---

### Section-by-Section Feature Requirements

1. **Hero Section (Boot-Up Sequence)**
   - **3D Animation:** The laptop lid smoothly opens from 0° (closed) to 110° (open) as the user begins scrolling.
   - **Screen Action:** The laptop screen turns on and executes a terminal boot sequence introducing Naitik Talreja ("vibe-coder initialized").

2. **Projects Section (Interactive Browser Tabs)**
   - **3D Animation:** The camera zooms forward into direct, flat alignment with the laptop screen.
   - **Screen Action:** Projects display inside a browser interface rendered directly on the screen. Projects open as clickable tabs with live previews that link directly to Naitik's GitHub repositories (https://github.com/naitik99045).

3. **Skills Section (Physical Keyboard Typing)**
   - **3D Animation:** The camera tilts 45° downward to focus closely on the physical 3D keyboard.
   - **Keycap Action:** Individual 3D keycaps physically depress key-by-key (Y-axis translation) as skills (Next.js, React, Three.js, TypeScript, Tailwind CSS) are typed out in real time into an on-screen search bar.

4. **Certifications Section (Lid Sticker Decals)**
   - **3D Animation:** The camera orbits 180° around the laptop to face the rear metallic lid shell.
   - **Lid Action:** Certification badges land dynamically as textured 3D stickers/decals across the back of the laptop lid.

5. **Education Section (Git Log Tree)**
   - **3D Animation:** Camera rotates back to face the front display.
   - **Screen Action:** Academic milestones and technical education render as an interactive terminal output structured like a `git log` (`git log --graph --oneline`).

6. **About Section (GitHub README)**
   - **3D Animation:** Camera holds focus on the screen with subtle floating idle motion.
   - **Screen Action:** The display renders a styled GitHub `README.md` layout detailing Naitik Talreja's journey, tech philosophy, and background as a vibe-coder.

7. **Languages Section (Multilingual Greetings)**
   - **3D Animation:** Screen remains centered with an active typewriter cursor.
   - **Screen Action:** Types out greetings in multiple languages sequentially with an animated cursor: "hello", "kamusta", "hola", "namaste".

8. **Contact Section & Shutdown Sequence**
   - **3D Animation:** The camera pulls back to display the full laptop. When scrolling reaches the end, the lid smoothly closes shut (110° down to 0°).
   - **Screen Action:** Renders an interactive command-line terminal (`naitik@portfolio:~$`) where visitors can type commands or send messages. Displays social links for GitHub, LinkedIn, and Instagram (@Naitik_talreja1).

---

### Critical Engineering Guidelines & Lessons

- **Geometry Precision ("Measure, don't assume"):** Measure real 3D bounding boxes and pivot points. Ensure the laptop lid hinge is accurately offset, keycaps are centered on the chassis, and lid stickers use `polygonOffset` to prevent z-fighting / mesh sinking.
- **Performance Optimization:** Maintain a steady 60fps. Downscale screenshot assets to optimize texture memory (target ~35MB max). Implement dynamic DPR / resolution scaling for low-tier GPU devices.
- **Accessibility & HTML Fallback:** Ensure all portfolio content exists as normal, crawlable semantic HTML underneath. If on mobile, WebGL-disabled browsers, or `prefers-reduced-motion`, seamlessly serve the clean text version.
- **Robust State Transitions:** Handle toggling between text and 3D WebGL view cleanly without camera rotation bugs (e.g. lid spinning into floor).
```

---

## 📋 Comprehensive Product Requirements Document (PRD)

### 1. Executive Summary & Concept
Traditional developer portfolios use standard card grids. This project rebuilds Naitik Talreja's portfolio around a **single interactive 3D laptop** that remains on screen during scrolling. Every section happens directly on or around the laptop model, serving as a direct functional demonstration of craft.

### 2. Functional Specification Matrix

| Section | 3D Camera / Model State | Screen / Interactive Canvas Behavior |
| :--- | :--- | :--- |
| **1. Hero** | Front view; Lid hinges open 0° → 110°. | Terminal boot-up splash introducing Naitik Talreja ("vibe-coder"). |
| **2. Projects** | Zoomed into screen canvas. | Browser UI with clickable project tabs linking to `github.com/naitik99045`. |
| **3. Skills** | 45° tilt down to 3D keycaps. | Physical 3D key depress animation typing skills into an on-screen search bar. |
| **4. Certifications** | 180° orbit to rear of lid. | Certifications land as 3D decal stickers on the metallic lid shell. |
| **5. Education** | Front view screen alignment. | Interactive `git log` graph detailing education & technical background. |
| **6. About** | Centered view with gentle float. | GitHub `README.md` formatted document detailing Naitik's story as a vibe-coder. |
| **7. Languages** | Centered screen view. | Animated typewriter cursor typing "hello", "kamusta", "hola", "namaste". |
| **8. Contact & End** | Full view; Lid closes 110° → 0°. | Interactive terminal (`naitik@portfolio:~$`) with LinkedIn & Instagram links. Lid closes at scroll end. |

### 3. Non-Functional Requirements & Architecture

1. **Framework & Dependencies:** Next.js 14/15 App Router, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Three.js (`three`), TypeScript, GSAP ScrollTrigger / Framer Motion, Tailwind CSS.
2. **Performance Budget:** 60fps target framerate. Max texture memory ~35MB. Adaptive canvas resolution scaling on low-end mobile/integrated GPUs.
3. **Accessibility:** Semantic, crawlable HTML fallback for SEO, mobile viewports, screen readers, and WebGL-disabled environments.
