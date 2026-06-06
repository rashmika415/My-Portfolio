import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none${paused ? " bg-animations-paused" : ""}`}
      aria-hidden="true"
    >
      <div className="bg-conic" />
      <div className="bg-orb bg-orb-cyan" />
      <div className="bg-orb bg-orb-lime" />
      <div className="bg-orb bg-orb-purple" />
      <div className="bg-grid-overlay" />
      <div className="bg-vignette" />
    </div>
  );
};

export default AnimatedBackground;
