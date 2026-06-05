import { socialImgs, personalInfo } from "../constants";

const Footer = () => {
  const getSocialIcon = (name) => {
    switch (name) {
      case "linkedin":
        return <i className="fab fa-linkedin-in"></i>;
      case "github":
        return <i className="fab fa-github"></i>;
      default:
        return <i className="fas fa-link"></i>;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="system-status">
          [SYSTEM_OK] rashmika.dev v1.0
        </p>

        <p>
          © {new Date().getFullYear()} {personalInfo.shortName} — Software Engineering Portfolio
        </p>

        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
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
            href="#hero"
            className="icon font-mono text-xs"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
