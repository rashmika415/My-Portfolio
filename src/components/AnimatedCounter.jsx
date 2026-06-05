import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter?.querySelector(".counter-number");
      const item = counterItems[index];
      if (!numberElement || !item) return;

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 1.8,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 92%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });

    gsap.fromTo(
      ".stat-card-item",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 92%",
        },
      }
    );
  }, []);

  return (
    <div className="stats-strip">
      <div className="stats-panel">
        <div className="stats-panel-header">
          <p className="stats-strip-label">// at_a_glance</p>
          <p className="stats-panel-sub">Key metrics from my engineering journey</p>
        </div>

        <div id="counter" ref={counterRef} className="stats-grid">
          {counterItems.map((item, index) => (
            <div
              key={item.label}
              ref={(el) => el && (countersRef.current[index] = el)}
              className={`stat-card-item stat-card-v2 stat-card-${item.accent}`}
            >
              <div className="stat-card-icon">
                <i className={item.icon} />
              </div>
              <div className="counter-number font-mono text-3xl md:text-4xl font-bold mb-1">
                0{item.suffix}
              </div>
              <p className="stat-card-label">{item.label}</p>
              <p className="stat-card-hint">{item.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
