import { useEffect, useRef } from 'react';

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: 'Movie & TV Series Streaming Platform',
    description: 'A streaming platform for movies and series with real-time updates and a modern interface.',
    tags: ['HTML', 'CSS', 'JAVA', 'MySQL'],
    emoji: '🎬',
    link: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Web Application',
    description: 'A full-stack e-commerce store with cart, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    emoji: '🛒',
    link: '#',
  },
  {
    id: 3,
    title: 'UI/UX Design – Mobile App',
    description: 'A complete UI/UX design for a mobile application, crafted in Figma with user-centered design principles.',
    tags: ['Figma', 'UI/UX'],
    emoji: '📱',
    link: '#',
  },
  {
    id: 4,
    title: 'Health Care Application',
    description: 'Full working mobile application for health care services with appointment booking.',
    tags: ['Kotlin', 'Android Studio'],
    emoji: '🏥',
    link: '#',
  },
];

const Projects = ({ projects = DEFAULT_PROJECTS, onViewDetails }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ── 1. Header elements (title + subtitle) — use standard reveal ──
    const headerEls = section.querySelectorAll('[data-reveal-header]');
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const delay = Number(entry.target.dataset.delay || 0);
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            entry.target.classList.remove('is-exit-top');
          } else {
            entry.target.classList.remove('is-visible');
            if (entry.boundingClientRect.top < 0) {
              entry.target.classList.add('is-exit-top');
            } else {
              entry.target.classList.remove('is-exit-top');
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    headerEls.forEach((el) => headerObserver.observe(el));

    // ── 2. Project cards — each observed individually, small stagger ──
    const cards = section.querySelectorAll('[data-reveal-card]');
    const cardTimers = [];

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;
          const idx = Number(card.dataset.cardIndex || 0);
          // Small stagger: 80ms per card max (not cumulative like before)
          const delay = idx * 50;

          if (entry.isIntersecting) {
            // Cancel any pending timer for this card
            if (card._timer) clearTimeout(card._timer);
            card._timer = setTimeout(() => {
              card.classList.add('is-visible');
              card.classList.remove('is-exit-top');
            }, delay);
            cardTimers.push(card._timer);
          } else {
            if (card._timer) clearTimeout(card._timer);
            card.classList.remove('is-visible');
            if (entry.boundingClientRect.top < 0) {
              // Scrolled past top — exit upward
              card.classList.add('is-exit-top');
            } else {
              // Below viewport — reset to initial
              card.classList.remove('is-exit-top');
            }
          }
        });
      },
      // Higher threshold so cards are well into view before triggering
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      headerObserver.disconnect();
      cardObserver.disconnect();
      cardTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      {/* Parallax ambient orbs */}
      <div className="parallax-orb parallax-orb-1" />
      <div className="parallax-orb parallax-orb-3" />
      <div className="container">

        {/* Header */}
        <h2 className="section-title project-reveal" data-reveal-header data-delay="0">
          Featured <span>Projects</span>
        </h2>
        <p className="section-subtitle project-reveal" data-reveal-header data-delay="80">
          Some of the work I&apos;m proud of — built with dedication and purpose
        </p>

        {/* Project cards */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className="project-card project-card-anim"
              key={project.id}
              data-reveal-card
              data-card-index={i}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <div className="project-image-placeholder">
                  {project.emoji || '💻'}
                </div>
              )}

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span className="project-tag" key={j}>{tag}</span>
                  ))}
                </div>

                <button
                  id={`project-details-btn-${project.id}`}
                  className="project-details-btn"
                  onClick={() => onViewDetails && onViewDetails(project)}
                >
                  View Project Details <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
