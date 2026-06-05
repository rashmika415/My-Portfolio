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
        number: { value: 40, density: { enable: true, width: 900, height: 900 } },
        color: { value: ["#00e5ff", "#a3e635"] },
        links: {
          enable: true,
          color: "#00e5ff",
          opacity: 0.08,
          distance: 140,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 1, max: 2.5 } },
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
