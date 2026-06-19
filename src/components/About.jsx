import { useEffect, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const About = ({ photo = null, cvFile = null, github = '#', linkedin = '#' }) => {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  // Keep existing skill-bar compat observer for the old `.reveal` classes too
  const legacyRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e =>
        e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el =>
          el.classList.toggle('visible', e.isIntersecting)
        )
      ),
      { threshold: 0.1 }
    );
    if (legacyRef.current) observer.observe(legacyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section about-section"
      ref={(el) => { sectionRef.current = el; legacyRef.current = el; }}
    >
      {/* Parallax ambient orbs */}
      <div className="parallax-orb parallax-orb-1" />
      <div className="parallax-orb parallax-orb-2" />
      <div className="container">

        {/* Section header */}
        <h2 className="section-title" data-reveal="fade-up" data-delay="0">
          About <span>Me</span>
        </h2>
        <p className="section-subtitle" data-reveal="fade-up" data-delay="40">
          Get to know me a little better
        </p>

        <div className="about-grid">
          {/* ── Left: Text ── */}
          <div className="about-text" data-reveal="fade-left" data-delay="80">
            <h3>Who I Am</h3>
            <h2>
              A Passionate <span>University Student</span>
            </h2>
            <p className="about-desc">
              I am a 3rd year undergraduate pursuing a BSc (Hons) in Information Technology, with a strong passion for programming and building innovative digital solutions.
              I have a solid foundation in software engineering principles, system design, and full stack web development, including frontend, backend, responsive design, and RESTful APIs.
            </p>
            <p className="about-desc">
              I also have experience in mobile application design and development, with a focus on creating efficient, scalable, and user centered solutions.
              I enjoy working in collaborative environments where technology and design come together, and I am continuously improving my skills to grow as a software developer.
            </p>

            {/* Stat badges */}
            <div className="about-badges">
              <div className="about-badge" data-reveal="fade-up" data-delay="130">
                <span className="about-badge-number">6+</span>
                <span className="about-badge-label">Projects Completed</span>
              </div>
              <div className="about-badge" data-reveal="fade-up" data-delay="165">
                <span className="about-badge-number">3+</span>
                <span className="about-badge-label">Years Studying</span>
              </div>
              <div className="about-badge" data-reveal="fade-up" data-delay="200">
                <span className="about-badge-number">10+</span>
                <span className="about-badge-label">Skills Mastered</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="about-actions" data-reveal="fade-up" data-delay="220">
              <a
                id="about-github-btn"
                href={github}
                className="about-social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                id="about-linkedin-btn"
                href={linkedin}
                className="about-social-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                id="about-cv-btn"
                href={cvFile || '#'}
                download={!!cvFile}
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.875rem' }}
              >
                ⬇ Download CV
              </a>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="about-photo-wrapper" data-reveal="fade-right" data-delay="100">
            <div className="about-photo-card">
              <div className="about-decoration-2" />
              {photo ? (
                <img src={photo} alt="Profile" className="about-photo-img" />
              ) : (
                <div className="about-photo-placeholder">
                  <span>👤</span>
                </div>
              )}
              <div className="about-decoration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
