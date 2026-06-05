import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const sectionRef = useRef(null);
  const displayRef = useRef(null);
  const [active, setActive] = useState(0);

  const current = abilities[active];

  useGSAP(() => {
    gsap.fromTo(
      ".values-shell",
      { y: 36, opacity: 0 },
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
  }, []);

  const selectSkill = (index) => {
    if (index === active) return;
    setActive(index);

    if (displayRef.current) {
      gsap.fromTo(
        displayRef.current,
        { opacity: 0, x: 16 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  };

  return (
    <section ref={sectionRef} className="section-padding pt-0 section-glow">
      <div className="section-container">
        <TitleHeader
          title="How I Work"
          sub="// WORK_ETHIC"
          align="left"
          desc="How I usually approach work: keep it clean, stay clear, and move forward step by step."
        />

        <div className="values-shell">
          <div className="values-selector" role="tablist" aria-label="Work principles">
            {abilities.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={`values-tab ${active === index ? "values-tab-active" : ""}`}
                onClick={() => selectSkill(index)}
              >
                <span className="values-tab-num">{String(index + 1).padStart(2, "0")}</span>
                <span className={`values-tab-icon values-accent-${item.accent}`}>
                  <i className={item.icon} aria-hidden="true" />
                </span>
                <span className="values-tab-text">
                  <span className="values-tab-title">{item.title}</span>
                  <span className="values-tab-traits">{item.tagline}</span>
                </span>
                <span className="values-tab-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <div
            className={`values-display values-display-${current.accent}`}
            role="tabpanel"
            ref={displayRef}
            key={active}
          >
            <div className="values-display-glow" aria-hidden="true" />

            <div className="values-display-header">
              <div className={`values-display-icon values-accent-${current.accent}`}>
                <i className={current.icon} aria-hidden="true" />
              </div>
              <div>
                <p className="values-display-label">// active_principle</p>
                <h3 className="values-display-title">{current.title}</h3>
              </div>
            </div>

            <blockquote className="values-quote">
              <span className="values-quote-mark">"</span>
              {current.desc}
              <span className="values-quote-mark">"</span>
            </blockquote>

            <div className="values-trait-flow">
              <p className="values-trait-label">in_practice →</p>
              <div className="values-trait-pills">
                {current.traits?.map((trait) => (
                  <span key={trait} className="values-trait-pill">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="values-footer-bar">
              {current.footer?.map((item) => (
                <span key={item.text} className="values-footer-item">
                  <i className={item.icon} aria-hidden="true" /> {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="values-mobile-strip" aria-hidden="true">
          {abilities.flatMap((a) => a.traits || []).map((trait) => (
            <span key={trait} className="values-mobile-tag">{trait}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
