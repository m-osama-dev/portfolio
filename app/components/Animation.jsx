"use client";

import { useEffect, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Animation() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: ["#00e5ff", "#3b82f6", "#06b6d4"] }, // vibrant cyan/blue tones
          shape: { type: ["circle", "polygon"] },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            trail: { enable: false },
          },
          links: {
            enable: true,
            distance: 140,
            color: "#22d3ee",
            opacity: 0.4,
            width: 1.2,
          },
          glow: {
            enable: true,
            color: "#22d3ee",
            intensity: 3,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
