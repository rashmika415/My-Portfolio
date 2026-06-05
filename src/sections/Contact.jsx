import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialImgs, personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="cta-box mb-12">
          <p className="hero-badge inline-block mb-6">READY FOR DEPLOYMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s build the next big thing
          </h2>
          <p className="font-mono text-sm text-zinc-400 max-w-xl mx-auto mb-8">
            Seeking internship opportunities and collaborative projects.
            Open to connecting with teams building scalable, impactful software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact-form" className="btn-cyan-solid">
              <i className="fas fa-envelope mr-2"></i> Get in Touch
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div id="contact-form" className="max-w-xl mx-auto">
          <p className="section-label mb-6">// CONTACT_FORM</p>
          <div className="terminal-card p-6 md:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="your_name"
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
                  placeholder="your@email.com"
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
                  placeholder="// your message here..."
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn-cyan-solid w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <div className="pt-4 border-t border-zinc-800">
                <p className="font-mono text-xs text-zinc-500 text-center mb-4">
                  // connect_with_me
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-4 !py-2"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp text-lime"></i>
                  </a>
                  {socialImgs.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline !px-4 !py-2"
                      aria-label={social.name}
                    >
                      <i className={`fab fa-${social.name}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
