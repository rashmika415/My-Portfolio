import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { techSkills } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".skill-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="section-container">
        <TitleHeader
          title="Technical DNA"
          sub="// TECH_ANALYSIS"
          align="left"
        />
        <p className="font-mono text-sm text-zinc-500 mb-10 max-w-2xl">
          Core competencies mapped from production projects, coursework, and certifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techSkills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-card terminal-card p-6 ${
                skill.accent === "cyan"
                  ? "terminal-card-accent-cyan"
                  : "terminal-card-accent-lime"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <i className={`${skill.iconClass} text-2xl`}></i>
                  <h3 className="font-mono font-bold text-white tracking-wider">
                    {skill.name}
                  </h3>
                </div>
                <span
                  className={`font-mono text-sm font-bold ${
                    skill.accent === "cyan" ? "text-cyan" : "text-lime"
                  }`}
                >
                  {skill.percentage}%
                </span>
              </div>

              <div className="progress-bar mb-4">
                <div
                  className={`progress-fill ${
                    skill.accent === "cyan" ? "progress-fill-cyan" : "progress-fill-lime"
                  }`}
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              <p className="font-mono text-xs text-zinc-500 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
