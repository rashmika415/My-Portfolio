import { useMemo } from "react";

const COLORS = ["#00e5ff", "#a3e635", "#7c3aed"];

const ParticleNetwork = ({ className = "" }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${4 + ((index * 37) % 92)}%`,
        top: `${6 + ((index * 53) % 88)}%`,
        size: 2 + (index % 3),
        color: COLORS[index % COLORS.length],
        delay: `${(index % 8) * 0.6}s`,
        duration: `${10 + (index % 6) * 2}s`,
      })),
    []
  );

  return (
    <div className={`hero-particles-layer ${className}`} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="hero-particle-dot"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleNetwork;
