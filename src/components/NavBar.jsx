import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map(({ link }) => link.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = personalInfo.cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          RASHMIKA<span className="text-cyan">.DEV</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className={`group ${activeSection === link ? 'active' : ''}`}>
                <a href={link}>{name}</a>
                <span className="underline" />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-outline !px-3 !py-2"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <button onClick={handleDownloadCV} className="btn-cyan">
            Download Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
