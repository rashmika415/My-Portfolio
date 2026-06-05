import React, { useRef, useEffect } from 'react';
import { projects } from '../constants';
import TitleHeader from '../components/TitleHeader';

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const featured = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    const projectElements = projectRefs.current.filter(Boolean);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      projectElements.forEach((project) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(project);
      });

      return () => projectElements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="section-container">
        <TitleHeader
          title="Standout Engineering"
          sub={`// ${featured.caseLabel || 'CASE_STUDY_01'}`}
          variant="cyan"
          align="left"
        />

        <div
          ref={(el) => { projectRefs.current[0] = el; }}
          className="case-study-card mt-10 mb-12"
        >
          <div className="case-study-image">
            <img src={featured.image} alt={featured.alt} loading="lazy" />
          </div>
          <div className="case-study-content">
            <div className="flex flex-wrap gap-2 mb-4">
              {featured.tags?.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {featured.title}
            </h3>
            <p className="font-mono text-sm text-zinc-400 leading-relaxed mb-6">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime-outline"
              >
                View on GitHub →
              </a>
              <a
                href={featured.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="section-label section-label-cyan mb-6">// MORE_PROJECTS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => { projectRefs.current[index + 1] = el; }}
              className="terminal-card p-5 flex flex-col"
            >
              <div className="overflow-hidden rounded-md mb-4 h-40 bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="font-semibold text-white mb-2 text-lg">{project.title}</h3>
              <p className="font-mono text-xs text-zinc-500 leading-relaxed flex-grow mb-4">
                {project.description.slice(0, 120)}...
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-cyan hover:underline"
              >
                github →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
