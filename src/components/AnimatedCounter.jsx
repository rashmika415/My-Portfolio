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
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="section-container mt-12 mb-8">
      <div className="grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="stat-card"
          >
            <div className="counter-number font-mono text-3xl md:text-4xl font-bold text-cyan mb-2">
              0{item.suffix}
            </div>
            <div className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
