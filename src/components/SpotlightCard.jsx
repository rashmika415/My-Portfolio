import { useRef } from "react";

const SpotlightCard = ({ children, className = "", accent = "cyan" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card spotlight-card-${accent} ${className}`}
    >
      <div className="spotlight-card-glow" />
      {children}
    </div>
  );
};

export default SpotlightCard;
