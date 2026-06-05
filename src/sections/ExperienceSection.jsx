import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards, expLogos } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".journey-roadmap",
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      }
    );

    gsap.utils.toArray(".journey-step").forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 92%",
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
          sub="// ACADEMIC_PATH"
          align="left"
          desc="A compact roadmap view that keeps the milestones easy to scan without repeating the card-heavy layout used elsewhere."
        />

        <div className="journey-roadmap">
          <div className="journey-roadmap-head">
            <div>
              
             
            </div>
            <div className="journey-roadmap-meta">
              <span>2 milestones</span>
              <span>Software engineering focus</span>
            </div>
          </div>

          <div className="journey-steps">
            {expCards.map((card, index) => {
              const logo = expLogos[index];
              const isPrimary = index === 0;
              const keySkills = card.skills?.slice(0, 6) || [];
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={card.title + card.org}
                  className={`journey-step ${isLeft ? "journey-step-left" : "journey-step-right"}`}
                >
                  {isLeft ? <div className="journey-step-side" aria-hidden="true" /> : null}

                  <div className="journey-step-marker" aria-hidden="true">
                    <span className={`journey-step-dot ${isPrimary ? "journey-step-dot-active" : ""}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < expCards.length - 1 && <span className="journey-step-rail" />}
                  </div>

                  <div className="journey-step-body">
                    <div className="journey-step-top">
                      <div className="journey-step-brand">
                        {logo && (
                          <img
                            src={logo.imgPath}
                            alt={`${card.org} logo`}
                            className="journey-step-logo"
                          />
                        )}
                        <div>
                          <p className="journey-step-kicker">{card.type}</p>
                          <h4 className="journey-step-title">{card.title}</h4>
                          <p className="journey-step-subtitle">{card.subtitle}</p>
                        </div>
                      </div>

                      {card.badge && <span className="journey-step-badge">{card.badge}</span>}
                    </div>

                    <div className="journey-step-meta">
                      <span>{card.date}</span>
                      <span>{card.location}</span>
                    </div>

                    <p className="journey-step-desc">{card.description}</p>

                    {keySkills.length > 0 && (
                      <div className="journey-step-skills" aria-label={`${card.title} skills`}>
                        {keySkills.map((skill) => (
                          <span key={skill} className="journey-step-skill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="journey-step-foot">
                      <span className="journey-step-org">@ {card.org}</span>
                      <span className="journey-step-note">
                        {isPrimary ? "Current path" : "Foundational stage"}
                      </span>
                    </div>
                  </div>

                  {!isLeft ? <div className="journey-step-side" aria-hidden="true" /> : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
