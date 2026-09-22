"use client";

import React from "react";
import * as THREE from "three";

export const LaptopBase: React.FC = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* Main Unibody Aluminum Chassis */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.7, 0.07, 1.9]} />
        <meshStandardMaterial
          color="#3c4048"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Subtle Chamfered / Tapered Bottom Base */}
      <mesh position={[0, -0.04, 0]} receiveShadow>
        <boxGeometry args={[2.65, 0.02, 1.85]} />
        <meshStandardMaterial
          color="#2a2c32"
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Glass Precision Trackpad */}
      <group position={[0, 0.038, 0.58]}>
        <mesh receiveShadow>
          <boxGeometry args={[0.92, 0.004, 0.56]} />
          <meshStandardMaterial
            color="#34373e"
            roughness={0.2}
            metalness={0.6}
          />
        </mesh>
        {/* Trackpad Subtle Outer Border */}
        <mesh position={[0, 0.001, 0]}>
          <boxGeometry args={[0.93, 0.002, 0.57]} />
          <meshBasicMaterial color="#50545e" wireframe />
        </mesh>
      </group>

      {/* Left Speaker Grill */}
      <mesh position={[-1.22, 0.037, 0.1]}>
        <boxGeometry args={[0.12, 0.002, 0.95]} />
        <meshStandardMaterial
          color="#1e2025"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Right Speaker Grill */}
      <mesh position={[1.22, 0.037, 0.1]}>
        <boxGeometry args={[0.12, 0.002, 0.95]} />
        <meshStandardMaterial
          color="#1e2025"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Front Thumb Notch (Opening indent) */}
      <mesh position={[0, 0.025, 0.95]}>
        <boxGeometry args={[0.35, 0.025, 0.02]} />
        <meshStandardMaterial color="#1a1c22" roughness={0.5} />
      </mesh>

      {/* Left Ports: MagSafe + 2x USB-C Thunderbolt */}
      <group position={[-1.355, 0, -0.2]}>
        {/* MagSafe */}
        <mesh position={[0, 0, -0.2]}>
          <boxGeometry args={[0.015, 0.022, 0.06]} />
          <meshStandardMaterial color="#111317" metalness={0.9} />
        </mesh>
        {/* USB-C 1 */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.015, 0.018, 0.045]} />
          <meshStandardMaterial color="#111317" metalness={0.9} />
        </mesh>
        {/* USB-C 2 */}
        <mesh position={[0, 0, 0.12]}>
          <boxGeometry args={[0.015, 0.018, 0.045]} />
          <meshStandardMaterial color="#111317" metalness={0.9} />
        </mesh>
      </group>

      {/* Right Ports: Audio Jack + 1x USB-C */}
      <group position={[1.355, 0, -0.2]}>
        <mesh position={[0, 0, -0.1]}>
          <boxGeometry args={[0.015, 0.018, 0.045]} />
          <meshStandardMaterial color="#111317" metalness={0.9} />
        </mesh>
        <mesh position={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.012, 0.012, 0.015, 12]} />
          <meshStandardMaterial color="#111317" metalness={0.9} />
        </mesh>
      </group>

      {/* Rubber Feet (Bottom corners) */}
      <group position={[0, -0.052, 0]}>
        <mesh position={[-1.15, 0, -0.75]}>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
          <meshStandardMaterial color="#121316" roughness={0.9} />
        </mesh>
        <mesh position={[1.15, 0, -0.75]}>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
          <meshStandardMaterial color="#121316" roughness={0.9} />
        </mesh>
        <mesh position={[-1.15, 0, 0.75]}>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
          <meshStandardMaterial color="#121316" roughness={0.9} />
        </mesh>
        <mesh position={[1.15, 0, 0.75]}>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
          <meshStandardMaterial color="#121316" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
};
