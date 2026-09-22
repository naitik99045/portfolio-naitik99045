"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { LaptopBase } from "./LaptopBase";
import { Keyboard3D } from "./Keyboard3D";
import { LaptopScreen } from "./LaptopScreen";

interface LaptopModelProps {
  currentSection: number;
  scrollProgress: number;
  lidOpenAngle?: number; // Target lid angle in radians
  isTyping?: boolean;
  typedSearchQuery?: string;
  activeKeyChar?: string;
  onCommandTrigger?: (cmd: string) => void;
  onCloseLidRequest?: () => void;
}

export const LaptopModel: React.FC<LaptopModelProps> = ({
  currentSection,
  scrollProgress,
  lidOpenAngle,
  isTyping = false,
  typedSearchQuery = "",
  activeKeyChar = "",
  onCommandTrigger,
  onCloseLidRequest,
}) => {
  const hingeRef = useRef<THREE.Group>(null);
  const laptopGroupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!hingeRef.current || !laptopGroupRef.current) return;

    // --- 1. LID HINGE MECHANICS (Lid is permanently open and elevated unless shutdown is clicked) ---
    let targetLidAngle = -0.30; // 107.5° open angle for maximum screen readability

    if (lidOpenAngle !== undefined) {
      targetLidAngle = lidOpenAngle; // Triggered by 'shutdown' command or 'Close Lid' button
    }

    hingeRef.current.rotation.x = THREE.MathUtils.damp(
      hingeRef.current.rotation.x,
      targetLidAngle,
      6.5,
      delta
    );

    // --- 2. LAPTOP SPATIAL POSITIONING & CINEMATIC SLANT ---
    let targetRotY = 0;
    let targetRotX = 0;
    let targetPosX = 0;
    let targetPosY = -0.20; // Elevated screen height for clear front-view reading

    if (scrollProgress < 0.125) {
      // Hero View: gentle 15° slant showing 3D depth without obstructing screen
      const slantFactor = 1 - Math.min(1, scrollProgress / 0.12);
      targetRotY = -0.28 * slantFactor; // ~ 16° slant
      targetRotX = 0.06 * slantFactor;  // ~ 3.4° pitch
      targetPosX = 0.28 * slantFactor;  // Room for hero text on left
      targetPosY = -0.26 + 0.06 * (1 - slantFactor);
    } else if (currentSection === 2) {
      // Skills Section: Lower slightly to showcase 3D mechanical keyboard typing
      targetPosY = -0.25;
      targetRotY = 0;
    } else {
      targetPosY = -0.20;
      targetRotY = 0;
    }

    // Smooth dampening for chassis orientation and position
    laptopGroupRef.current.rotation.y = THREE.MathUtils.damp(
      laptopGroupRef.current.rotation.y,
      targetRotY,
      6,
      delta
    );
    laptopGroupRef.current.rotation.x = THREE.MathUtils.damp(
      laptopGroupRef.current.rotation.x,
      targetRotX,
      6,
      delta
    );
    laptopGroupRef.current.position.x = THREE.MathUtils.damp(
      laptopGroupRef.current.position.x,
      targetPosX,
      6,
      delta
    );

    // Subtle breathing float combined with target Y elevation
    const time = performance.now() * 0.001;
    const floatOffset = Math.sin(time * 1.5) * 0.012;
    laptopGroupRef.current.position.y = THREE.MathUtils.damp(
      laptopGroupRef.current.position.y,
      targetPosY + floatOffset,
      6,
      delta
    );
  });

  return (
    <group ref={laptopGroupRef} position={[0, -0.35, 0]}>
      {/* 3D Bottom Chassis */}
      <LaptopBase />

      {/* 3D Physical Keyboard with Dynamic Keypresses */}
      <Keyboard3D
        isTyping={isTyping || currentSection === 2}
        activeKeyChar={activeKeyChar}
      />

      {/* Laptop Hinge Cylinder Mesh */}
      <mesh position={[0, 0.035, -0.92]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 2.2, 16]} />
        <meshStandardMaterial
          color="#1e2025"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Screen Lid Attached to Hinge Pivot */}
      <group ref={hingeRef} position={[0, 0.035, -0.92]}>
        <LaptopScreen
          currentSection={currentSection}
          scrollProgress={scrollProgress}
          typedSearchQuery={typedSearchQuery}
          onCommandTrigger={onCommandTrigger}
          onCloseLidRequest={onCloseLidRequest}
        />
      </group>
    </group>
  );
};
