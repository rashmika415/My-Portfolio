import React, { useRef, useState, useEffect } from "react";
import { personalInfo, terminalRoles } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import ParticleNetwork from "../components/ParticleNetwork";

const nameParts = personalInfo.shortName.split(" ");

const Hero = () => {
  const sectionRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo(".hero-intro-block", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, "-=0.3")
      .fromTo(".hero-terminal", { x: 30, opacity: 0, scale: 0.98 }, { x: 0, opacity: 1, scale: 1, duration: 0.9 }, "-=0.6")
      .fromTo(".hero-meta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      .fromTo(".scroll-indicator", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
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
    <section id="hero" className="relative overflow-hidden min-h-screen" ref={sectionRef}>
      <ParticleNetwork className="hero-particles opacity-40" />
      <div className="hero-glow-ring" aria-hidden="true" />

      <div className="section-container hero-content w-full">
        <div className="hero-layout w-full">
          <div className="hero-grid w-full">
            <div className="hero-intro-block">
              <div className="hero-badge-wrap">
                <span className="hero-badge-pulse" aria-hidden="true" />
                <p className="hero-badge">OPEN TO OPPORTUNITIES</p>
              </div>

              <h1 className="hero-name">
                <span className="hero-name-first">{nameParts[0]} </span>
                <span className="hero-name-accent">{nameParts.slice(1).join(" ")}</span>
              </h1>

              <p className="hero-tagline hero-copy font-mono text-sm md:text-base leading-relaxed">
                <span className="text-lime">//</span> {personalInfo.title}
              </p>

              <p className="hero-summary hero-copy mt-4">
                Hi, I'm Rashmika Prabodhana, a Full Stack Developer with a passion for turning ideas into reality. With over a year of experience in crafting scalable web and mobile applications, I excel in both front-end and back-end development. Skilled in technologies like MERN Stack, Java and modern frameworks, I create seamless user experiences and robust solutions that deliver results.


              </p>

              

              <div className="hero-meta flex flex-wrap items-center gap-3 mt-8">
                <a href="#work" className="btn-cyan-solid">
                  View Projects
                </a>
                <a
                  href={personalInfo.cvPath}
                  download={personalInfo.cvFileName}
                  className="btn-outline"
                >
                  Download CV
                </a>
              </div>

              <div className="hero-social-divider" />
              <div className="hero-social-row">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="GitHub profile"
                >
                  <i className="fab fa-github" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn hero-social-linkedin"
                  aria-label="LinkedIn profile"
                >
                  <i className="fab fa-linkedin-in" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hero-social-btn"
                  aria-label="Send email"
                >
                  <i className="fas fa-envelope" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="hero-terminal relative">
              <div className="terminal-window terminal-scanline hero-terminal-window">
                <div className="terminal-header">
                  <span className="terminal-dot bg-red-500/80" />
                  <span className="terminal-dot bg-yellow-500/80" />
                  <span className="terminal-dot bg-green-500/80" />
                  <span className="font-mono text-xs text-zinc-500 ml-2 flex-1">
                    rashmika@portfolio ~ bash
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 hidden sm:inline">
                    v1.0.0
                  </span>
                </div>

                <div className="terminal-body">
                  <div className="hero-terminal-line">
                    <span className="text-zinc-600">$</span>{" "}
                    <span className="text-cyan">whoami</span>
                  </div>
                  <div className="hero-terminal-output">
                    <p className="text-white text-xl md:text-2xl font-semibold">
                      {displayText}
                      <span className="cursor-blink text-cyan">▌</span>
                    </p>
                  </div>

                  <div className="hero-terminal-line mt-5 hidden sm:block">
                    <span className="text-zinc-600">$</span>{" "}
                    <span className="text-cyan">cat</span>{" "}
                    <span className="text-lime">profile.json</span>
                  </div>
                  <div className="hero-terminal-json font-mono text-xs text-zinc-500 mt-2 space-y-1 hidden sm:block">
                    <p><span className="text-zinc-600">{"{"}</span></p>
                    <p className="pl-4">
                      <span className="text-cyan">&quot;role&quot;</span>: {" "}
                      <span className="text-lime">&quot;{terminalRoles[roleIndex]}&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan">&quot;loc&quot;</span>: {" "}
                      <span className="text-lime">&quot;{personalInfo.location}&quot;</span>
                    </p>
                    <p><span className="text-zinc-600">{"}"}</span></p>
                  </div>

                  <div className="hero-terminal-line mt-5">
                    <span className="text-zinc-600">$</span>{" "}
                    <span className="text-cyan">open</span>{" "}
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime hover:underline"
                    >
                      linkedin
                    </a>
                    <span className="cursor-blink text-cyan ml-1">▌</span>
                  </div>
                </div>

                <div className="hero-terminal-footer">
                  <span className="flex items-center gap-1.5">
                    <span className="hero-status-dot" />
                    online
                  </span>
                  <span>bash · zsh</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#skills" className="scroll-indicator" aria-label="Scroll to skills">
            <span className="font-mono text-xs text-zinc-600">scroll</span>
            <div className="scroll-indicator-line" />
          </a>
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
