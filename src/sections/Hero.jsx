import React, { useRef, useState, useEffect } from "react";
import { personalInfo, terminalRoles } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  const sectionRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-terminal",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(
      ".hero-meta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    const currentRole = terminalRoles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % terminalRoles.length);
        }
      },
      isDeleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative overflow-hidden" ref={sectionRef}>
      <div className="section-container">
        <div className="hero-layout">
          <div className="hero-terminal w-full max-w-2xl mx-auto relative">
            <div className="terminal-window terminal-scanline relative">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-green-500/80" />
                <span className="font-mono text-xs text-zinc-500 ml-2">rashmika@portfolio ~ </span>
              </div>
              <div className="terminal-body">
                <p className="text-zinc-500 mb-4">
                  <span className="text-cyan">→</span> ~ whoami
                </p>
                <p className="text-white text-xl md:text-2xl font-semibold mb-6">
                  {displayText}
                  <span className="cursor-blink text-cyan">▌</span>
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  <span className="text-lime">//</span> {personalInfo.title}
                </p>
                <p className="text-zinc-600 text-xs mt-3">
                  <span className="text-cyan">loc:</span> {personalInfo.location}
                  <span className="mx-3">|</span>
                  <span className="text-cyan">email:</span> {personalInfo.email}
                </p>
              </div>
            </div>
          </div>

          <div className="hero-meta flex flex-wrap justify-center gap-4 mt-10">
            <a href="#work" className="btn-cyan-solid">
              View Projects
            </a>
            <a href={personalInfo.cvPath} download={personalInfo.cvFileName} className="btn-outline">
              Download CV
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
          </div>
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
