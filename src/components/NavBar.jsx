import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../constants';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = personalInfo.cvPath;
    link.download = personalInfo.cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
          <a className="logo" href="#hero" onClick={closeMobile}>
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

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-outline !px-3 !py-2"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-outline !px-3 !py-2"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <button onClick={handleDownloadCV} className="btn-cyan hidden sm:block">
              Download Resume
            </button>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay lg:hidden ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />
      <nav className={`mobile-nav-panel lg:hidden ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name} className={activeSection === link ? 'active' : ''}>
              <a href={link} onClick={closeMobile}>{name}</a>
            </li>
          ))}
          <li>
            <button onClick={(e) => { handleDownloadCV(e); closeMobile(); }} className="btn-cyan mt-4">
              Download Resume
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
