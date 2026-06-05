import { techStackIcons } from "../constants";

const TechMarquee = () => {
  const items = [...techStackIcons, ...techStackIcons];

  return (
    <div className="tech-marquee-wrapper">
      <div className="tech-marquee-fade tech-marquee-fade-left" />
      <div className="tech-marquee-fade tech-marquee-fade-right" />
      <div className="tech-marquee-track">
        {items.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="tech-marquee-item">
            <i className={`${tech.iconClass} text-2xl md:text-3xl`} />
            <span className="font-mono text-xs text-zinc-500 mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
