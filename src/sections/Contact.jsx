import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

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
    setLoading(true);
    setSent(false);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
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
          desc="Open to internships and collaborations. Send a message or reach out directly."
        />

        <div className="contact-simple">
          <div className="contact-aside">
            <p className="contact-lead">
              Have a project in mind or an opportunity to discuss? I&apos;d love to hear from you.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="contact-email">
              {personalInfo.email}
            </a>
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
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-box">
            {sent && (
              <p className="contact-success" role="status">
                <i className="fas fa-check-circle" />
                Message sent — I&apos;ll reply soon.
              </p>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div>
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
              <div>
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
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn-cyan-solid w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
