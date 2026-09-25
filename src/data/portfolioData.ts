export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  featured: boolean;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; description?: string; highlight?: boolean }[];
}

export interface ProgrammingLanguage {
  name: string;
  level: string; // "Mastered", "Expert", "Proficient"
  description: string;
  icon: string;
  sampleCode: string;
  accentColor: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Naitik Talreja",
    handle: "naitik99045",
    moniker: "vibe-coder",
    company: "Qwenton",
    companyUrl: "https://qwenton.shop",
    role: "Founder & CEO, Qwenton • Lead Creative Technologist",
    title: "AI Automations Architect, Autonomous Agents Engineer & 3D Spatial Builder",
    location: "Global / Remote",
    status: "Building Autonomous AI Agents & Enterprise Automations at Qwenton",
    bio: "Founder and CEO of Qwenton (qwenton.shop), specializing in engineering custom AI automations and autonomous personal agents for companies. Pioneering vibe-coding workflows, high-precision 3D spatial web canvases, and resilient full-stack systems.",
    email: "contact@naitik.dev",
    socials: {
      github: "https://github.com/naitik99045",
      linkedin: "https://www.linkedin.com/in/netik-talreja-31ba67426",
      instagram: "https://instagram.com/Naitik_talreja1",
      startup: "https://qwenton.shop",
    },
    stats: [
      { label: "Company Startup", value: "Qwenton.shop" },
      { label: "AI Agents Deployed", value: "50+" },
      { label: "Client Automations", value: "100%" },
      { label: "Core Performance", value: "60 FPS Locked" },
    ],
  },

  projects: [
    {
      id: "qwenton-startup",
      title: "Qwenton: Enterprise AI Automations & Personal Agents",
      category: "Startup / AI Automations",
      description: "Official startup platform for selling custom AI automations, autonomous personal agents, and bespoke multi-agent workflows for enterprise companies.",
      tags: ["Autonomous Agents", "Next.js", "LangGraph", "MCP Tools", "FastAPI"],
      githubUrl: "https://github.com/naitik99045",
      liveUrl: "https://qwenton.shop",
      stars: 480,
      featured: true,
      color: "#38bdf8",
    },
    {
      id: "qwenton-ui",
      title: "Qwenton UI: 3D Spatial & Motion Skill Library",
      category: "Open Source / 3D Canvas",
      description: "High-performance React Three Fiber and Drei skill library for building luxury Apple-grade 3D scroll-animated websites and spatial web canvases.",
      tags: ["React Three Fiber", "Three.js", "Drei", "Tailwind CSS", "GLSL"],
      githubUrl: "https://github.com/naitik99045/qwenton-ui",
      liveUrl: "https://qwenton.shop",
      stars: 235,
      featured: true,
      color: "#a78bfa",
    },
    {
      id: "vibe-coder-portfolio",
      title: "Single-Canvas 3D Spatial Laptop Portfolio",
      category: "Creative Engineering",
      description: "Interactive single-canvas 3D laptop experience with 30° slant perspective, physical keyboard typing, and real-time WebGL canvas texture projection.",
      tags: ["Next.js 14", "Three.js", "TypeScript", "R3F", "Web Audio API"],
      githubUrl: "https://github.com/naitik99045",
      liveUrl: "https://github.com/naitik99045",
      stars: 180,
      featured: true,
      color: "#34d399",
    },
    {
      id: "autonomous-agents-mesh",
      title: "AgentMesh: Multi-Agent Swarm Orchestrator",
      category: "AI Infrastructure",
      description: "Distributed autonomous agent network implementing Model Context Protocol (MCP) and dynamic tool execution for automated corporate pipelines.",
      tags: ["Python", "Rust", "Model Context Protocol", "Redis", "Docker"],
      githubUrl: "https://github.com/naitik99045",
      liveUrl: "https://qwenton.shop",
      stars: 310,
      featured: false,
      color: "#fbbf24",
    },
  ] as Project[],

  skillCategories: [
    {
      category: "Vibe Coding & Agentic AI (Recent Industry Boom)",
      skills: [
        { name: "Vibe Coding & Prompt Architectures", level: 98, description: "Cursor / Gemini / Claude high-speed agentic code generation and AST orchestration", highlight: true },
        { name: "Autonomous AI Agents for Companies", level: 96, description: "Building custom personal agents, background workers, and task swarms at Qwenton", highlight: true },
        { name: "Model Context Protocol (MCP)", level: 94, description: "Standardized tool-calling and local context protocol integration for LLMs", highlight: true },
        { name: "LangChain / LangGraph & RAG Pipelines", level: 92, description: "Stateful agent graphs, vector embeddings, and memory retrieval", highlight: true },
      ],
    },
    {
      category: "3D Spatial Web & Creative Engineering",
      skills: [
        { name: "3D Project Builder (Three.js & R3F)", level: 96, description: "Single-canvas spatial web architecture, custom GLSL shaders & physics", highlight: true },
        { name: "React Three Fiber & Drei", level: 97, description: "ScrollControls, procedural geometries, and CSS3D transformations", highlight: true },
        { name: "Next.js 14 App Router & TypeScript", level: 95, description: "Enterprise full-stack architectures, server actions, zero-latency state", highlight: true },
        { name: "Tailwind CSS & Apple Minimalism UI", level: 98, description: "Clean typography, luxury dark modes, and glassmorphism systems", highlight: false },
      ],
    },
    {
      category: "Core Systems & Cloud Infrastructure",
      skills: [
        { name: "FastAPI & Python Microservices", level: 91, description: "High-throughput AI agent endpoints and WebSocket streaming", highlight: false },
        { name: "Rust & High-Performance Compute", level: 86, description: "WebAssembly modules and low-latency data processing", highlight: false },
        { name: "Docker, Linux & Enterprise CI/CD", level: 90, description: "Scalable container deployment for corporate AI automation suites", highlight: false },
      ],
    },
  ] as SkillCategory[],

  masteredLanguages: [
    {
      name: "C++",
      level: "Mastered",
      description: "Low-level performance, game engine math, computer graphics shaders, and high-throughput memory control.",
      icon: "Cpp",
      sampleCode: "template<typename T>\nclass SpatialEngine {\n  void render(const T& scene);\n};",
      accentColor: "#00599c",
    },
    {
      name: "Python",
      level: "Mastered",
      description: "Core language for Qwenton AI automations, autonomous agent loops, LangGraph, FastAPI, and PyTorch models.",
      icon: "Python",
      sampleCode: "async def execute_agent(task: str) -> Output:\n    agent = QwentonAgent(tools=mcp_tools)\n    return await agent.run(task)",
      accentColor: "#3776ab",
    },
    {
      name: "Rust",
      level: "Mastered",
      description: "Memory-safe systems programming, WebAssembly for browser 3D computations, and concurrent data pipelines.",
      icon: "Rust",
      sampleCode: "pub async fn process_mesh_data(buf: &[u8]) -> Result<Mesh, EngineError> {\n    Mesh::from_bytes(buf)\n}",
      accentColor: "#dea584",
    },
    {
      name: "Go (Golang)",
      level: "Mastered",
      description: "Microservices, distributed multi-agent swarm communication, WebSockets, and high-concurrency cloud backends.",
      icon: "Go",
      sampleCode: "func HandleAgentStream(ctx context.Context, ch chan Message) {\n    go worker.Listen(ctx, ch)\n}",
      accentColor: "#00add8",
    },
    {
      name: "Ruby",
      level: "Mastered",
      description: "Rapid web development, automated scripting, clean domain-specific languages (DSLs), and API backbones.",
      icon: "Ruby",
      sampleCode: "class QwentonAutomation\n  def deploy_agent(client_id)\n    AgentRunner.start(client_id)\n  end\nend",
      accentColor: "#cc342d",
    },
    {
      name: "C# (.NET)",
      level: "Mastered",
      description: "Enterprise software architecture, Unity 3D tooling, and structured object-oriented software engineering.",
      icon: "CSharp",
      sampleCode: "public class AgentController : IAgentLifecycle {\n    public async Task<Status> ExecuteAsync() => await Task.FromResult(Status.Ok);\n}",
      accentColor: "#239120",
    },
    {
      name: "TypeScript / JS",
      level: "Mastered",
      description: "Frontend 3D web canvases, Next.js 14 App Router, Three.js, React Three Fiber, and full-stack typing.",
      icon: "TS",
      sampleCode: "const canvas = new Three.CanvasTexture(buffer);\ncanvas.needsUpdate = true;",
      accentColor: "#3178c6",
    },
    {
      name: "GLSL / Shaders",
      level: "Mastered",
      description: "Custom GPU fragment and vertex shaders for real-time 3D lighting, glass refraction, and spatial effects.",
      icon: "GLSL",
      sampleCode: "void main() {\n  vec3 color = mix(uColorA, uColorB, vUv.y);\n  gl_FragColor = vec4(color, 1.0);\n}",
      accentColor: "#86efac",
    },
  ] as ProgrammingLanguage[],

  readmeMarkdown: `
# Naitik Talreja (@vibe-coder)
### Founder & CEO at Qwenton • Creative Technologist & 3D Architect

> **Company Website:** [qwenton.shop](https://qwenton.shop)  
> **Mission:** *Empowering companies with tailored autonomous AI agents, enterprise automations, and spatial 3D web experiences.*

---

### [STARTUP: Qwenton]
I am the owner and founder of **Qwenton** (https://qwenton.shop). At Qwenton, we build and sell:
1. **Custom AI Automations:** End-to-end automation pipelines that save companies hundreds of hours of manual operations.
2. **Autonomous Personal AI Agents:** Specialized agentic swarms capable of reading context, utilizing tools via Model Context Protocol (MCP), and executing business workflows.
3. **3D Spatial Web Experiences:** Award-winning interactive 3D websites that transform standard websites into living, interactive digital products.

### [ENGINEERING STANDARD: Vibe-Coding]
I combine intuitive, high-speed agentic prompting with rigorous low-level engineering across C++, Python, Rust, and TypeScript. Zero dropped frames, clean architecture, and instant real-world value.

---
*Connect directly: [qwenton.shop](https://qwenton.shop) • [GitHub](https://github.com/naitik99045) • [LinkedIn](https://www.linkedin.com/in/netik-talreja-31ba67426) • [Instagram](https://instagram.com/Naitik_talreja1)*
`,

  terminalCommands: [
    { command: "help", description: "Display available shell commands" },
    { command: "about", description: "Founder story, Qwenton startup & manifesto" },
    { command: "startup", description: "Open Qwenton startup website (qwenton.shop)" },
    { command: "projects", description: "List verified repos and qwenton-ui" },
    { command: "skills", description: "Inspect vibe coding, 3D builder & AI agent stack" },
    { command: "languages", description: "List mastered programming languages (C++, Python, Rust, Go, etc.)" },
    { command: "socials", description: "Open GitHub, LinkedIn, Instagram, and Qwenton" },
    { command: "shutdown", description: "Close 3D laptop lid and power down" },
    { command: "clear", description: "Clear terminal buffer" },
  ],
};
