"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

interface CameraState {
  position: [number, number, number];
  lookAt: [number, number, number];
}

// 6 Precision Camera Keyframes framing the 3D laptop with its active inside-screen display
const CAMERA_KEYFRAMES: CameraState[] = [
  // 0. Hero (Slanted 16° perspective showing open screen and chassis)
  { position: [0.32, 0.78, 2.25], lookAt: [0.15, 0.64, -0.8] },
  // 1. Projects (Framing the 3D laptop screen directly in front, retina zoom)
  { position: [0, 0.68, 1.80], lookAt: [0, 0.68, -1.05] },
  // 2. Skills (Hybrid View: 3D keyboard typing below + inside-screen skills profiler)
  { position: [0, 0.96, 1.95], lookAt: [0, 0.52, -0.55] },
  // 3. Founder Bio (Framing the 3D laptop screen with Qwenton founder bio)
  { position: [0, 0.68, 1.80], lookAt: [0, 0.68, -1.05] },
  // 4. Languages (Framing the 3D laptop screen with C++, Rust, Python, Go selector)
  { position: [0, 0.68, 1.80], lookAt: [0, 0.68, -1.05] },
  // 5. Contact & Connect (Full 3D laptop view with tabbed contact center)
  { position: [0, 0.70, 1.95], lookAt: [0, 0.65, -0.9] },
];

interface CameraControllerProps {
  currentSection: number;
  scrollProgress: number; // 0 to 1
}

export const CameraController: React.FC<CameraControllerProps> = ({
  currentSection,
  scrollProgress,
}) => {
  const { camera } = useThree();
  const currentLookAtRef = useRef<THREE.Vector3>(new THREE.Vector3(0.15, 0.4, 0));

  useFrame((_, delta) => {
    // Determine active keyframe based on scroll progress across 6 sections
    const totalMilestones = CAMERA_KEYFRAMES.length - 1;
    const progressIndex = scrollProgress * totalMilestones;
    const lowerIdx = Math.floor(progressIndex);
    const upperIdx = Math.min(totalMilestones, Math.ceil(progressIndex));
    const factor = progressIndex - lowerIdx;

    const fromKey = CAMERA_KEYFRAMES[lowerIdx] || CAMERA_KEYFRAMES[0];
    const toKey = CAMERA_KEYFRAMES[upperIdx] || CAMERA_KEYFRAMES[totalMilestones];

    // Smooth interpolation between camera keyframes
    const targetX = THREE.MathUtils.lerp(fromKey.position[0], toKey.position[0], factor);
    const targetY = THREE.MathUtils.lerp(fromKey.position[1], toKey.position[1], factor);
    const targetZ = THREE.MathUtils.lerp(fromKey.position[2], toKey.position[2], factor);

    const lookX = THREE.MathUtils.lerp(fromKey.lookAt[0], toKey.lookAt[0], factor);
    const lookY = THREE.MathUtils.lerp(fromKey.lookAt[1], toKey.lookAt[1], factor);
    const lookZ = THREE.MathUtils.lerp(fromKey.lookAt[2], toKey.lookAt[2], factor);

    // Apply buttery smooth 60fps damping
    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 6.0, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 6.0, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 6.0, delta);

    currentLookAtRef.current.x = THREE.MathUtils.damp(
      currentLookAtRef.current.x,
      lookX,
      6.0,
      delta
    );
    currentLookAtRef.current.y = THREE.MathUtils.damp(
      currentLookAtRef.current.y,
      lookY,
      6.0,
      delta
    );
    currentLookAtRef.current.z = THREE.MathUtils.damp(
      currentLookAtRef.current.z,
      lookZ,
      6.0,
      delta
    );

    camera.lookAt(currentLookAtRef.current);
  });

  return null;
};
