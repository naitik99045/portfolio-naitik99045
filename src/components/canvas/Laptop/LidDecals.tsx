"use client";

import React from "react";
import * as THREE from "three";

export const LidDecals: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Apple-Style Minimalist Center Monogram Decal */}
      <group position={[0, 0.9, -0.026]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <planeGeometry args={[0.35, 0.35]} />
          <meshStandardMaterial
            color="#f8fafc"
            roughness={0.08}
            metalness={0.95}
            polygonOffset
            polygonOffsetFactor={-4}
            polygonOffsetUnits={-4}
          />
        </mesh>
      </group>

      {/* Qwenton Startup Metallic Badge */}
      <group position={[0, 0.48, -0.026]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <planeGeometry args={[0.85, 0.22]} />
          <meshStandardMaterial
            color="#fbbf24"
            roughness={0.12}
            metalness={0.85}
            polygonOffset
            polygonOffsetFactor={-6}
            polygonOffsetUnits={-6}
          />
        </mesh>
        <mesh position={[0, 0, 0.001]}>
          <planeGeometry args={[0.88, 0.25]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
            polygonOffset
            polygonOffsetFactor={-5}
            polygonOffsetUnits={-5}
          />
        </mesh>
      </group>

      {/* Vibe-Coder Holographic Accent Decal */}
      <group position={[0, 1.35, -0.026]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <planeGeometry args={[0.65, 0.16]} />
          <meshStandardMaterial
            color="#38bdf8"
            roughness={0.1}
            metalness={0.9}
            polygonOffset
            polygonOffsetFactor={-8}
            polygonOffsetUnits={-8}
          />
        </mesh>
      </group>
    </group>
  );
};
