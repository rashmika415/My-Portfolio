import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleNetwork = ({ className = "" }) => {
  const [ready, setReady] = useState(false);
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    containerRef.current = container;
  }, []);

  useEffect(() => {
    if (!ready) return;

    const container = () => containerRef.current;

    const onVisibility = () => {
      const instance = container();
      if (!instance) return;
      if (document.hidden) instance.pause();
      else instance.play();
    };

    document.addEventListener("visibilitychange", onVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const instance = container();
        if (!instance || document.hidden) return;
        if (entry.isIntersecting) instance.play();
        else instance.pause();
      },
      { threshold: 0 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
      containerRef.current?.destroy();
      containerRef.current = null;
    };
  }, [ready]);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 30,
      detectRetina: false,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 32, density: { enable: true, width: 900, height: 900 } },
        color: { value: ["#00e5ff", "#a3e635", "#7c3aed"] },
        links: {
          enable: true,
          color: "#00e5ff",
          opacity: 0.12,
          distance: 130,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.12, max: 0.5 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true, delay: 0.5 },
        },
        modes: {
          grab: { distance: 100, links: { opacity: 0.3 } },
        },
      },
    }),
    []
  );

  if (!ready) return null;

  return (
    <div ref={wrapperRef} className={`absolute inset-0 -z-[1] ${className}`} aria-hidden="true">
      <Particles
        id="particle-network"
        className="absolute inset-0"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    </div>
  );
};

export default ParticleNetwork;
