import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import SpotlightCard from "../components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const featured = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  useGSAP(() => {
    gsap.fromTo(
      ".featured-project",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      }
    );

    gsap.fromTo(
      ".project-card-item",
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding section-glow">
      <div className="section-container">
        <div className="projects-header">
          <TitleHeader
            title="Standout Engineering"
            sub="// PROJECTS"
            variant="cyan"
            align="left"
            desc="Production-grade builds across healthcare, sustainability, agriculture, and mobile — each solving real-world problems."
          />
          <div className="projects-summary">
            <div className="projects-stat">
              <span className="projects-stat-value">{projects.length}</span>
              <span className="projects-stat-label">Projects</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat-value text-cyan">Full-Stack</span>
              <span className="projects-stat-label">+ Mobile</span>
            </div>
            <div className="projects-stat">
              <span className="projects-stat-value text-lime">MERN</span>
              <span className="projects-stat-label">Primary Stack</span>
            </div>
          </div>
        </div>

        {/* Featured project */}
        <article className="featured-project">
          <div className="featured-project-image">
            <img
              src={featured.image}
              alt={featured.alt}
              loading="lazy"
              decoding="async"
              width={1200}
              height={700}
              className="w-full h-full object-cover"
              style={{ objectPosition: featured.imagePosition || "center" }}
            />
            <div className="featured-project-image-overlay" />
            <span className="featured-badge">FEATURED</span>
            <span className="project-category-pill">{featured.category}</span>
          </div>

          <div className="featured-project-body">
            <p className="section-label section-label-cyan !mb-3">
              // {featured.caseLabel || "CASE_STUDY_01"}
            </p>
            <h3 className="featured-project-title">{featured.title}</h3>
            <p className="featured-project-subtitle">{featured.subtitle}</p>
            <p className="featured-project-desc">{featured.description}</p>

            <ul className="project-highlights">
              {featured.highlights?.map((item) => (
                <li key={item}>
                  <span className="project-highlight-icon">›</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="project-tech-row">
              {featured.tags?.map((tag) => (
                <span key={tag} className="project-tech-tag project-tech-tag-cyan">
                  {tag}
                </span>
              ))}
            </div>

            <div className="featured-project-actions">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan-solid"
              >
                <i className="fab fa-github mr-2" />
                View on GitHub
              </a>
              <a
                href={featured.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <i className="fab fa-linkedin-in mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </article>

        {/* More projects */}
        <div className="projects-more-header">
          <p className="section-label section-label-cyan">// MORE_PROJECTS</p>
          <span className="projects-more-count">{otherProjects.length} builds</span>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              accent={index % 2 === 0 ? "lime" : "cyan"}
              className="project-card-item"
            >
              <article className="project-card-v2">
                <div className="project-card-image">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: project.imagePosition || "center" }}
                  />
                  <div className="project-card-image-overlay" />
                  <span className="project-card-index">
                    [{String(index + 2).padStart(2, "0")}]
                  </span>
                  <span className="project-category-pill project-category-pill-sm">
                    {project.category}
                  </span>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                  <p className="project-card-desc">{project.description}</p>

                  <ul className="project-highlights project-highlights-compact">
                    {project.highlights?.slice(0, 2).map((item) => (
                      <li key={item}>
                        <span className="project-highlight-icon">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech-row">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className={`project-tech-tag ${
                          index % 2 === 0 ? "project-tech-tag-lime" : "project-tech-tag-cyan"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                  >
                    View on GitHub
                    <span className="project-card-link-arrow">→</span>
                  </a>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
