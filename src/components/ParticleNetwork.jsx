import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleNetwork = ({ className = "" }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 48, density: { enable: true, width: 900, height: 900 } },
        color: { value: ["#00e5ff", "#a3e635", "#7c3aed"] },
        links: {
          enable: true,
          color: "#00e5ff",
          opacity: 0.12,
          distance: 150,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.12, max: 0.5 } },
        size: { value: { min: 1, max: 3.2 } },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.35 } },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="particle-network"
      className={`absolute inset-0 -z-[1] ${className}`}
      options={options}
    />
  );
};

export default ParticleNetwork;
