"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { createScreenTexture } from "./ScreenTextureGenerator";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface LaptopScreenProps {
  currentSection: number;
  scrollProgress?: number;
  typedSearchQuery?: string;
  onCommandTrigger?: (cmd: string) => void;
  onCloseLidRequest?: () => void;
}

export const LaptopScreen: React.FC<LaptopScreenProps> = ({
  currentSection,
  scrollProgress = 0,
  typedSearchQuery = "",
  onCommandTrigger,
  onCloseLidRequest,
}) => {
  // Generate high-resolution WebGL screen texture as native radiant layer
  const screenTexture = useMemo(() => {
    return createScreenTexture(currentSection, typedSearchQuery, 0);
  }, [currentSection, typedSearchQuery]);

  // Direct click handler when user clicks anywhere on the 3D laptop display
  const handleScreenClick = (e: any) => {
    e.stopPropagation();
    if (typeof window === "undefined") return;

    if (currentSection === 1) {
      // Projects: open active project or qwenton.shop
      window.open(PORTFOLIO_DATA.projects[0].liveUrl || "https://qwenton.shop", "_blank", "noopener,noreferrer");
    } else if (currentSection === 3) {
      // Founder Bio: open qwenton.shop
      window.open("https://qwenton.shop", "_blank", "noopener,noreferrer");
    } else if (currentSection === 4) {
      // Languages: open github
      window.open(PORTFOLIO_DATA.profile.socials.github, "_blank", "noopener,noreferrer");
    } else if (currentSection === 5) {
      // Contact: open qwenton.shop
      window.open("https://qwenton.shop", "_blank", "noopener,noreferrer");
    } else {
      // Hero Boot: open qwenton.shop
      window.open("https://qwenton.shop", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Outer Aluminum Lid Back Shell */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.7, 1.8, 0.04]} />
        <meshStandardMaterial
          color="#343840"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* 2. Screen Outer Black Glass Bezel */}
      <mesh position={[0, 0.9, 0.021]} receiveShadow>
        <boxGeometry args={[2.64, 1.74, 0.002]} />
        <meshStandardMaterial
          color="#060709"
          roughness={0.12}
          metalness={0.92}
        />
      </mesh>

      {/* 3. Radiant 3D Display Mesh with High-DPR Texture (Full Edge-to-Edge Screen) */}
      <mesh
        position={[0, 0.9, 0.024]}
        onClick={handleScreenClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <planeGeometry args={[2.54, 1.60]} />
        <meshBasicMaterial
          map={screenTexture}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 4. Display Screen Ambient Light (OLED Screen Glow on Keyboard & Chassis) */}
      <pointLight
        position={[0, 0.9, 0.25]}
        intensity={0.45}
        color="#38bdf8"
        distance={2.5}
        decay={2}
      />

      {/* 5. FaceTime HD Webcam Dot & Green Status LED */}
      <group position={[0, 1.72, 0.025]}>
        <mesh>
          <circleGeometry args={[0.014, 16]} />
          <meshBasicMaterial color="#14171f" />
        </mesh>
        <mesh position={[0.038, 0, 0]}>
          <circleGeometry args={[0.004, 12]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
      </group>
    </group>
  );
};
