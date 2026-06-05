import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "fas fa-envelope",
  },
  {
    label: "Phone",
    value: personalInfo.phoneDisplay,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: "fas fa-phone-alt",
  },
  {
    label: "Location",
    value: personalInfo.location,
    icon: "fas fa-map-marker-alt",
  },
];

const socialLinks = [
  { name: "GitHub", href: personalInfo.github, icon: "fab fa-github" },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: "fab fa-linkedin-in" },
  {
    name: "WhatsApp",
    href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`,
    icon: "fab fa-whatsapp",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useGSAP(() => {
    gsap.fromTo(
      ".contact-simple",
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSent(false);
      setError("Message sending is not configured yet.");
      return;
    }

    setLoading(true);
    setSent(false);
    setError("");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSent(false);
      setError("Message could not be sent. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding section-alt-bg section-glow">
      <div className="section-container">
        <TitleHeader
          title="Get In Touch"
          sub="// CONTACT"
          variant="cyan"
          align="left"
          desc="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <div className="contact-simple">
          <aside className="contact-aside">
            <div className="contact-details">
              {contactDetails.map((item) => {
                const content = (
                  <>
                    <span className="contact-detail-icon" aria-hidden="true">
                      <i className={item.icon} />
                    </span>
                    <span className="contact-detail-body">
                      <span className="contact-detail-label">{item.label}</span>
                      <span className="contact-detail-value">{item.value}</span>
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-detail"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="contact-detail contact-detail-static">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="contact-social-block">
              <span className="contact-social-label">Connect</span>
              <div className="contact-socials">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={link.name}
                  >
                    <i className={link.icon} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="contact-form-panel">
            <div className="contact-form-header">
              <h3>Send a message</h3>
              <p>Fill out the form and I&apos;ll get back to you within 24–48 hours.</p>
            </div>

            <div className="contact-form-body">
              {sent && (
                <p className="contact-success" role="status">
                  <i className="fas fa-check-circle" />
                  Message sent — I&apos;ll reply soon.
                </p>
              )}

              {error && (
                <p className="contact-error" role="status">
                  <i className="fas fa-exclamation-triangle" />
                  {error}
                </p>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-cyan-solid contact-submit w-full"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
