import { socialImgs, personalInfo, navLinks } from "../constants";

const Footer = () => {
  const getSocialIcon = (name) => {
    switch (name) {
      case "linkedin":
        return <i className="fab fa-linkedin-in" />;
      case "github":
        return <i className="fab fa-github" />;
      default:
        return <i className="fas fa-link" />;
    }
  };

  return (
    <footer className="footer-v2">
      <div className="footer-container-v2">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              RASHMIKA<span className="text-cyan">.DEV</span>
            </a>
            <p className="footer-tagline">
              Software Engineering Undergraduate · Full-Stack Developer
            </p>
            <p className="system-status">
              <span className="footer-status-dot" />
              [SYSTEM_OK] All systems operational
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <p className="footer-nav-label">// navigate</p>
            <ul>
              {navLinks.map(({ name, link }) => (
                <li key={link}>
                  <a href={link}>{name}</a>
                </li>
              ))}
              <li>
                <a href="#hero">Home</a>
              </li>
            </ul>
          </nav>

          <div className="footer-connect">
            <p className="footer-nav-label">// connect</p>
            <div className="footer-socials">
              {socialImgs.map((img) => (
                <a
                  className="footer-social-btn"
                  target="_blank"
                  href={img.url}
                  key={img.url}
                  rel="noopener noreferrer"
                  aria-label={img.name}
                >
                  {getSocialIcon(img.name)}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <i className="fas fa-envelope" />
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
            </div>
            <a href="#hero" className="footer-back-top">
              Back to top <span>↑</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {personalInfo.shortName}. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
