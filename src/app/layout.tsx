import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naitik Talreja (@vibe-coder) — Single-Canvas 3D Portfolio",
  description:
    "Spatial 3D Laptop Portfolio for Naitik Talreja. Built with Next.js App Router, React Three Fiber, Three.js, TypeScript, and Tailwind CSS. Featuring physical 3D keypresses, camera choreography, and terminal boot sequences.",
  keywords: [
    "Naitik Talreja",
    "vibe-coder",
    "React Three Fiber",
    "Three.js",
    "Next.js Portfolio",
    "3D Web Developer",
    "Creative Technologist",
    "WebGL",
  ],
  authors: [{ name: "Naitik Talreja", url: "https://github.com/naitik99045" }],
  openGraph: {
    title: "Naitik Talreja (@vibe-coder) — Single-Canvas 3D Portfolio",
    description:
      "Interactive 3D laptop portfolio built with Next.js, React Three Fiber, and Three.js.",
    url: "https://github.com/naitik99045",
    siteName: "Naitik Talreja Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naitik Talreja (@vibe-coder) — Single-Canvas 3D Portfolio",
    description:
      "Interactive 3D laptop portfolio built with Next.js, React Three Fiber, and Three.js.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>" />
      </head>
      <body className="bg-[#08090b] text-zinc-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
