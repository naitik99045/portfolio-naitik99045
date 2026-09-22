# Master Implementation Plan: 3D Laptop Portfolio

## Phase 1: Environment & Project Foundation
- [x] Create `package.json` with Next.js 14, Three.js, R3F, Drei, Framer Motion, Tailwind CSS, Lucide
- [x] Create `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`
- [x] Configure `src/app/globals.css` with sleek dark typography, custom scrollbars, and glassmorphism

## Phase 2: Comprehensive Portfolio Data Layer
- [x] Create `src/data/portfolioData.ts` with Naitik Talreja's verified profile, projects, skills, certifications, git log history, multilingual greetings, and terminal commands

## Phase 3: Procedural 3D Laptop & Geometry Engineering
- [x] `LaptopBase.tsx`: Unibody aluminum chassis, trackpad, speaker grills, rubber footings, USB-C/MagSafe ports
- [x] `Keyboard3D.tsx`: Full QWERTY physical keycap layout with individual animatable mesh depression on Y-axis
- [x] `LaptopScreen.tsx`: Precision lid hinge with offset pivot math, bezel, webcam indicator, `@react-three/drei` `<Html transform>` display
- [x] `LidDecals.tsx`: Rear lid shell with dynamic certification stickers using `polygonOffset` (zero z-fighting)
- [x] `LaptopModel.tsx`: Master 3D container managing lid rotation (0° to 110°), key typing, and lid orbit (180°)

## Phase 4: Camera Choreography & Scroll Engine
- [x] `CameraController.tsx`: Smooth lerping across the 8 PRD milestones:
  - 1. Hero: Lid hinges 0° -> 110°, front view
  - 2. Projects: Smooth zoom into screen display
  - 3. Skills: 45° tilt down onto physical 3D keyboard
  - 4. Certifications: 180° orbit to rear metallic lid
  - 5. Education: Align back to front screen
  - 6. About: Subtle floating idle screen focus
  - 7. Languages: Centered view with typewriter
  - 8. Contact & Shutdown: Full view, interactive terminal, lid closes 110° -> 0°
- [x] `Scene.tsx`: R3F Canvas setup with `<Environment preset="city" />`, `<ContactShadows />`, studio lighting, and dynamic DPR scaling

## Phase 5: Interactive Screen UI Components (DOM in 3D)
- [x] `HeroBootScreen.tsx`: BIOS / vibe-coder terminal initialization sequence
- [x] `ProjectsScreen.tsx`: Browser tab interface with live project previews & direct GitHub repo links
- [x] `SkillsScreen.tsx`: Real-time search bar synced with physical 3D keypresses & skill category filters
- [x] `CertificationsScreen.tsx`: Interactive credential badges & verification modals
- [x] `EducationScreen.tsx`: Visual `git log --graph --oneline` interactive tree
- [x] `AboutScreen.tsx`: Styled GitHub `README.md` bio and developer philosophy
- [x] `LanguagesScreen.tsx`: Animated typewriter cycling multilingual greetings ("hello", "kamusta", "hola", "namaste")
- [x] `ContactScreen.tsx`: Interactive CLI terminal (`naitik@portfolio:~$`) with custom command runner, social links & shutdown trigger
- [x] `ScreenContainer.tsx`: Master screen shell with macOS controls and status bar

## Phase 6: Overlays, HUD & Accessibility Fallback
- [x] Floating HUD navigation bar with section quick-jumps, view mode toggle (3D / 2D Semantic), and sound effects
- [x] Web Audio API sound synthesizer for tactile key clicks & Mac boot sound
- [x] Comprehensive Semantic HTML Fallback for mobile devices & screen readers

## Phase 7: Verification & Security Audit
- [x] SAST / security verification (no hardcoded credentials, safe link handling, sanitized terminal input)
- [x] Performance testing: ensure 60fps, zero missing asset errors, clean state cleanup
