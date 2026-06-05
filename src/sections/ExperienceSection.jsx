import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".exp-entry").forEach((entry, index) => {
      gsap.fromTo(
        entry,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: entry,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <TitleHeader
          title="Education & Journey"
          sub="// EXPERIENCE_LOG"
          align="left"
        />
        <p className="font-mono text-sm text-zinc-500 mb-10 max-w-2xl">
          Academic background and milestones that shaped my engineering path.
        </p>

        <div className="flex flex-col gap-6">
          {expCards.map((card, index) => (
            <div key={card.title} className="exp-entry exp-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <p className="font-mono text-xs text-cyan mb-2">
                    [{String(index + 1).padStart(2, "0")}] EDU_ENTRY
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
                  {card.date}
                </span>
              </div>
              <ul className="space-y-2">
                {card.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="font-mono text-sm text-zinc-400 flex items-start gap-2"
                  >
                    <span className="text-lime mt-0.5">›</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
