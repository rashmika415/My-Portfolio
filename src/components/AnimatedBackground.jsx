import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
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
