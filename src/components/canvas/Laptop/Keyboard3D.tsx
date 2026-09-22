"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface KeyCapDef {
  key: string;
  x: number;
  z: number;
  w: number;
  d: number;
}

// Layout definitions for realistic MacBook QWERTY keyboard
const generateKeyboardLayout = (): KeyCapDef[] => {
  const keys: KeyCapDef[] = [];
  const startX = -1.05;
  const startZ = -0.55;
  const keyGap = 0.16;
  const keyDepth = 0.14;
  const keyWidth = 0.14;

  // Row 0: Function Keys
  for (let i = 0; i < 14; i++) {
    keys.push({
      key: `F${i}`,
      x: startX + i * keyGap,
      z: startZ,
      w: keyWidth,
      d: 0.08,
    });
  }

  // Row 1: Numbers Row (~ ` 1 2 3 4 5 6 7 8 9 0 - = Delete)
  const r1Chars = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "DEL"];
  r1Chars.forEach((ch, i) => {
    const isDel = ch === "DEL";
    keys.push({
      key: ch,
      x: startX + i * keyGap + (isDel ? 0.02 : 0),
      z: startZ + 0.12,
      w: isDel ? 0.2 : keyWidth,
      d: keyDepth,
    });
  });

  // Row 2: QWERTY Row (Tab, Q, W, E, R, T, Y, U, I, O, P, [, ], \)
  const r2Chars = ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"];
  r2Chars.forEach((ch, i) => {
    const isTab = ch === "TAB";
    keys.push({
      key: ch,
      x: startX + i * keyGap + (isTab ? -0.02 : 0),
      z: startZ + 0.27,
      w: isTab ? 0.2 : keyWidth,
      d: keyDepth,
    });
  });

  // Row 3: ASDF Row (Caps, A, S, D, F, G, H, J, K, L, ;, ', ENTER)
  const r3Chars = ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"];
  r3Chars.forEach((ch, i) => {
    const isEnter = ch === "ENTER";
    keys.push({
      key: ch,
      x: startX + i * keyGap + (isEnter ? 0.04 : 0),
      z: startZ + 0.42,
      w: isEnter ? 0.24 : keyWidth,
      d: keyDepth,
    });
  });

  // Row 4: ZXCV Row (Shift, Z, X, C, V, B, N, M, ,, ., /, Shift)
  const r4Chars = ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT_R"];
  r4Chars.forEach((ch, i) => {
    const isShift = ch.includes("SHIFT");
    keys.push({
      key: ch,
      x: startX + i * keyGap + (isShift ? 0.02 : 0),
      z: startZ + 0.57,
      w: isShift ? 0.26 : keyWidth,
      d: keyDepth,
    });
  });

  // Row 5: Spacebar & Modifiers
  keys.push(
    { key: "CTRL", x: startX, z: startZ + 0.72, w: 0.16, d: keyDepth },
    { key: "OPT", x: startX + 0.18, z: startZ + 0.72, w: 0.16, d: keyDepth },
    { key: "CMD", x: startX + 0.36, z: startZ + 0.72, w: 0.18, d: keyDepth },
    { key: "SPACE", x: startX + 0.95, z: startZ + 0.72, w: 0.9, d: keyDepth },
    { key: "CMD_R", x: startX + 1.55, z: startZ + 0.72, w: 0.18, d: keyDepth },
    { key: "OPT_R", x: startX + 1.74, z: startZ + 0.72, w: 0.16, d: keyDepth },
    { key: "LEFT", x: startX + 1.94, z: startZ + 0.74, w: 0.11, d: 0.06 },
    { key: "UP", x: startX + 2.06, z: startZ + 0.71, w: 0.11, d: 0.05 },
    { key: "DOWN", x: startX + 2.06, z: startZ + 0.77, w: 0.11, d: 0.05 },
    { key: "RIGHT", x: startX + 2.18, z: startZ + 0.74, w: 0.11, d: 0.06 }
  );

  return keys;
};

const KEYBOARD_KEYS = generateKeyboardLayout();

interface Keyboard3DProps {
  isTyping?: boolean;
  activeKeyChar?: string;
  onKeyClick?: (keyChar: string) => void;
}

export const Keyboard3D: React.FC<Keyboard3DProps> = ({
  isTyping = false,
  activeKeyChar = "",
  onKeyClick,
}) => {
  const keysGroupRef = useRef<THREE.Group>(null);
  const [depressedKeys, setDepressedKeys] = useState<{ [key: string]: number }>({});

  // Trigger typing depression sequence
  useEffect(() => {
    if (!isTyping) return;

    const sampleTypingChars = [
      "N", "E", "X", "T", "SPACE",
      "R", "E", "A", "C", "T", "SPACE",
      "T", "H", "R", "E", "E", "SPACE",
      "T", "A", "I", "L", "W", "I", "N", "D"
    ];

    let timerIndex = 0;
    const interval = setInterval(() => {
      const char = sampleTypingChars[timerIndex % sampleTypingChars.length];
      setDepressedKeys((prev) => ({ ...prev, [char]: 1.0 }));
      timerIndex++;
    }, 160);

    return () => clearInterval(interval);
  }, [isTyping]);

  useEffect(() => {
    if (activeKeyChar) {
      setDepressedKeys((prev) => ({ ...prev, [activeKeyChar.toUpperCase()]: 1.0 }));
    }
  }, [activeKeyChar]);

  // Animate key depression recovery with smooth spring physics
  useFrame((_, delta) => {
    if (!keysGroupRef.current) return;

    setDepressedKeys((prev) => {
      let changed = false;
      const updated = { ...prev };
      for (const k in updated) {
        if (updated[k] > 0.01) {
          updated[k] = Math.max(0, updated[k] - delta * 4.5);
          changed = true;
        } else {
          delete updated[k];
          changed = true;
        }
      }
      return changed ? updated : prev;
    });
  });

  return (
    <group ref={keysGroupRef} position={[0, 0.045, 0.1]}>
      {/* Keyboard Well Bed (Dark Matte Recessed Surface) */}
      <mesh position={[0, -0.005, 0.05]} receiveShadow>
        <boxGeometry args={[2.3, 0.008, 1.0]} />
        <meshStandardMaterial
          color="#14161a"
          roughness={0.7}
          metalness={0.2}
        />
      </mesh>

      {/* Individual 3D Keycaps */}
      {KEYBOARD_KEYS.map((k) => {
        const depression = depressedKeys[k.key] || 0;
        const currentY = -depression * 0.018;

        return (
          <group
            key={k.key}
            position={[k.x, currentY, k.z]}
            onClick={(e) => {
              e.stopPropagation();
              setDepressedKeys((prev) => ({ ...prev, [k.key]: 1.0 }));
              if (onKeyClick) onKeyClick(k.key);
            }}
          >
            {/* Keycap Body */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[k.w, 0.02, k.d]} />
              <meshStandardMaterial
                color={depression > 0.2 ? "#2a303c" : "#1a1d24"}
                roughness={0.35}
                metalness={0.4}
              />
            </mesh>

            {/* Keycap Glow / Backlight Ring underneath */}
            <mesh position={[0, -0.008, 0]}>
              <boxGeometry args={[k.w * 0.95, 0.004, k.d * 0.95]} />
              <meshBasicMaterial
                color="#38bdf8"
                transparent
                opacity={0.15 + depression * 0.4}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};
