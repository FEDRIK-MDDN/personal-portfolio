import { useState } from 'react';
import useScrollReveal from './useScrollReveal';

const Contact = ({ email = 'your.email@example.com', github = '#', linkedin = '#', phone = '' }) => {
  const sectionRef = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      {/* Parallax ambient orbs */}
      <div className="parallax-orb parallax-orb-2" />
      <div className="parallax-orb parallax-orb-1" />
      <div className="container">

        {/* Header */}
        <h2 className="section-title" data-reveal="fade-up" data-delay="0">
          Get In <span>Touch</span>
        </h2>
        <p className="section-subtitle" data-reveal="fade-up" data-delay="40">
          Have a project idea or want to collaborate? I&apos;d love to hear from you!
        </p>

        <div className="contact-grid">

          {/* ── Left: Contact Info ── */}
          <div className="contact-info" data-reveal="fade-left" data-delay="80">
            <h3>Let&apos;s Work <span>Together</span></h3>
            <p>
              I am actively seeking internship opportunities, freelance projects, and meaningful collaborations.
              If you would like to discuss a project, explore potential opportunities, or simply say hello, please feel free to get in touch. I look forward to connecting with you.
            </p>

            <div className="contact-links">

              {/* Email */}
              <a
                id="contact-email-link"
                href={`mailto:${email}`}
                className="contact-link-item"
                data-reveal="fade-up"
                data-delay="120"
              >
                <div className="contact-link-icon">✉</div>
                <div>
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-value">{email}</span>
                </div>
              </a>

              {/* Phone */}
              {phone && (
                <a
                  id="contact-phone-link"
                  href={`tel:${phone}`}
                  className="contact-link-item"
                  data-reveal="fade-up"
                  data-delay="160"
                >
                  <div className="contact-link-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="contact-link-label">Phone</span>
                    <span className="contact-link-value">{phone}</span>
                  </div>
                </a>
              )}

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={github}
                className="contact-link-item"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="fade-up"
                data-delay="200"
              >
                <div className="contact-link-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-link-label">GitHub</span>
                  <span className="contact-link-value">View my repositories</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={linkedin}
                className="contact-link-item"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="fade-up"
                data-delay="240"
              >
                <div className="contact-link-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-link-label">LinkedIn</span>
                  <span className="contact-link-value">Connect with me</span>
                </div>
              </a>

            </div>
          </div>

          {/* ── Right: Form ── */}
          <div data-reveal="fade-right" data-delay="100">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="form-group" data-reveal="fade-up" data-delay="140">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group" data-reveal="fade-up" data-delay="180">
                <label className="form-label" htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group" data-reveal="fade-up" data-delay="220">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div data-reveal="fade-up" data-delay="260">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message ✉'}
                </button>

                {submitted && (
                  <div className="form-success">
                    ✅ Message sent! I&apos;ll get back to you soon.
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
