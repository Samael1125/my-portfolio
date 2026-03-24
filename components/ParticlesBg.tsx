"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        background: {
          color: "#020617",
        },

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#00ffcc",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#00ffcc",
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 2,
          },
        },
      }}
    />
  );
}