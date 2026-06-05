import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import TechMarquee from "../components/TechMarquee";
import SpotlightCard from "../components/SpotlightCard";
import { techSkills, techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);
  const totalTechniques = techSkills.reduce((sum, s) => sum + s.techniques.length, 0);

  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding section-glow section-alt-bg">
      <div className="section-container">
        <div className="tech-dna-header">
          <TitleHeader
            title="Technical DNA"
            sub="// TECH_STACK"
            align="left"
            desc="Skills and techniques I use to design, build, and ship real-world software — from frontend to deployment."
          />
          <div className="tech-dna-summary">
            <div className="tech-dna-stat">
              <span className="tech-dna-stat-value">{techSkills.length}</span>
              <span className="tech-dna-stat-label">Skill Domains</span>
            </div>
            <div className="tech-dna-stat">
              <span className="tech-dna-stat-value text-cyan">{totalTechniques}+</span>
              <span className="tech-dna-stat-label">Techniques</span>
            </div>
            <div className="tech-dna-stat">
              <span className="tech-dna-stat-value text-lime">{techStackIcons.length}</span>
              <span className="tech-dna-stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {techSkills.map((skill, index) => {
            const isCyan = skill.accent === "cyan";

            return (
              <SpotlightCard
                key={skill.name}
                accent={skill.accent}
                className={`skill-card skill-card-v2 ${
                  isCyan ? "skill-card-cyan" : "skill-card-lime"
                }`}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrap">
                    <i className={`${skill.iconClass} text-2xl`} />
                  </div>
                  <span className="skill-index">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>

                <div className="skill-techniques">
                  <p className="skill-techniques-label">// techniques_used</p>
                  <div className="skill-technique-tags">
                    {skill.techniques.map((tech) => (
                      <span
                        key={tech}
                        className={`skill-technique-tag ${
                          isCyan ? "skill-technique-tag-cyan" : "skill-technique-tag-lime"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        <TechMarquee />
      </div>
    </section>
  );
};

export default TechStack;
