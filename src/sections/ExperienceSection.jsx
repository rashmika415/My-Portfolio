import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const journeyYears = ["2018", "2022", "2023", "2027"];

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".journey-rail-fill",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".journey-rail",
          start: "top 80%",
        },
      }
    );

    gsap.utils.toArray(".journey-node").forEach((node, index) => {
      const isRight = index % 2 === 1;
      gsap.fromTo(
        node,
        { opacity: 0, x: isRight ? 40 : -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding section-alt-bg section-glow">
      <div className="section-container">
        <TitleHeader
          title="Education & Journey"
          sub="// EXPERIENCE_LOG"
          align="left"
          desc="A path from school foundations to software engineering — each step building toward building real systems."
        />

        {/* Horizontal journey rail — desktop */}
        <div className="journey-rail" aria-hidden="true">
          <div className="journey-rail-track">
            <div className="journey-rail-fill" />
          </div>
          <div className="journey-rail-points">
            {journeyYears.map((year) => (
              <span key={year} className="journey-rail-year">
                <span className="journey-rail-dot" />
                {year}
              </span>
            ))}
          </div>
        </div>

        {/* Zigzag timeline */}
        <div className="journey-spine">
          {expCards.map((card, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            const isCurrent = index === 0;

            return (
              <article
                key={card.title + card.org}
                className={`journey-node journey-node-${side} ${isCurrent ? "journey-node-current" : ""}`}
              >
                <div className="journey-node-marker" aria-hidden="true">
                  <span className="journey-node-dot" />
                  <span className="journey-node-year">{card.date.replace(/—.*$/, "").split("/")[0].trim()}</span>
                </div>

                <div className="journey-panel">
                  <div className="journey-panel-header">
                    <span className="journey-type">{card.type}</span>
                    {isCurrent && <span className="journey-live">● current</span>}
                    {card.badge && <span className="journey-badge">{card.badge}</span>}
                  </div>

                  <h3 className="journey-org">{card.org}</h3>
                  <p className="journey-degree">{card.title}</p>
                  <p className="journey-stream">{card.subtitle}</p>

                  <div className="journey-meta">
                    <span><i className="fas fa-calendar-alt" /> {card.date}</span>
                    <span><i className="fas fa-map-marker-alt" /> {card.location}</span>
                  </div>
                  {card.dateNote && <p className="journey-note">{card.dateNote}</p>}

                  <ul className="journey-details">
                    {card.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
