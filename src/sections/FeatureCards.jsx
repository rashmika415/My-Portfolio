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
          title="Soft Skills"
          sub="// CORE_VALUES"
          align="left"
          desc="Beyond code — the mindset and collaboration habits that make engineering work actually ship."
        />

        <div className="values-shell">
          {/* Left — skill selector list */}
          <div className="values-selector" role="tablist" aria-label="Soft skills">
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
                <span className="values-tab-icon">
                  <i className={item.icon} />
                </span>
                <span className="values-tab-text">
                  <span className="values-tab-title">{item.title}</span>
                  <span className="values-tab-traits">
                    {item.traits?.slice(0, 2).join(" · ")}
                  </span>
                </span>
                <span className="values-tab-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          {/* Right — detail display */}
          <div
            className="values-display"
            role="tabpanel"
            ref={displayRef}
            key={active}
          >
            <div className="values-display-glow" aria-hidden="true" />

            <div className="values-display-header">
              <div className="values-display-icon">
                <i className={current.icon} />
              </div>
              <div>
                <p className="values-display-label">// active_value</p>
                <h3 className="values-display-title">{current.title}</h3>
              </div>
            </div>

            <blockquote className="values-quote">
              <span className="values-quote-mark">"</span>
              {current.desc}
              <span className="values-quote-mark">"</span>
            </blockquote>

            <div className="values-trait-flow">
              <p className="values-trait-label">manifests_as →</p>
              <div className="values-trait-pills">
                {current.traits?.map((trait) => (
                  <span key={trait} className="values-trait-pill">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="values-footer-bar">
              <span className="values-footer-item">
                <i className="fas fa-code-branch" /> Applied in team projects
              </span>
              <span className="values-footer-item">
                <i className="fas fa-check" /> Agile & collaborative workflows
              </span>
            </div>
          </div>
        </div>

        {/* Mobile-friendly trait strip */}
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
