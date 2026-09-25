"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { CameraController } from "./CameraController";
import { LaptopModel } from "./Laptop/LaptopModel";

interface SceneProps {
  currentSection: number;
  scrollProgress: number;
  lidOpenAngle?: number;
  isTyping?: boolean;
  typedSearchQuery?: string;
  activeKeyChar?: string;
  onCommandTrigger?: (cmd: string) => void;
  onCloseLidRequest?: () => void;
}

export const Scene: React.FC<SceneProps> = ({
  currentSection,
  scrollProgress,
  lidOpenAngle,
  isTyping,
  typedSearchQuery,
  activeKeyChar,
  onCommandTrigger,
  onCloseLidRequest,
}) => {
  return (
    <div className="w-full h-full relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 1.1, 3.6], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
      >
        {/* Apple-grade studio lighting setup */}
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={1024}
        />
        <directionalLight position={[-5, 4, -4]} intensity={0.6} color="#38bdf8" />
        <pointLight position={[0, 3, 2]} intensity={0.5} />

        {/* Studio City HDRI for realistic metallic reflections on chassis */}
        <Environment preset="city" />

        {/* Camera Choreography Controller */}
        <CameraController
          currentSection={currentSection}
          scrollProgress={scrollProgress}
        />

        <Suspense fallback={null}>
          {/* Master 3D Laptop */}
          <LaptopModel
            currentSection={currentSection}
            scrollProgress={scrollProgress}
            lidOpenAngle={lidOpenAngle}
            isTyping={isTyping}
            typedSearchQuery={typedSearchQuery}
            activeKeyChar={activeKeyChar}
            onCommandTrigger={onCommandTrigger}
            onCloseLidRequest={onCloseLidRequest}
          />

          {/* Soft Ground Contact Shadows */}
          <ContactShadows
            position={[0, -0.34, 0]}
            opacity={0.65}
            scale={8}
            blur={2.4}
            far={4}
            resolution={512}
            color="#050608"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
