import { useEffect, useState } from 'react';

/* ─── Lightbox component ─── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  // keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose} id="lightbox-overlay">
      {/* stop click-through on content */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button className="lightbox-close" onClick={onClose} id="lightbox-close-btn" aria-label="Close">✕</button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            id="lightbox-prev-btn"
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        {/* Main image */}
        <img
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="lightbox-img"
          id="lightbox-main-img"
        />

        {/* Next */}
        {images.length > 1 && (
          <button
            className="lightbox-arrow lightbox-next"
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            id="lightbox-next-btn"
            aria-label="Next image"
          >
            ›
          </button>
        )}

        {/* Counter + dots */}
        {images.length > 1 && (
          <div className="lightbox-footer">
            <span className="lightbox-counter">{current + 1} / {images.length}</span>
            <div className="lightbox-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`lightbox-dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Main ProjectDetail component ─── */
const ProjectDetail = ({ project, onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = closed

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  if (!project) return null;

  const {
    title,
    description,
    longDescription,
    tags,
    emoji,
    image,
    images,
    link,
    github,
    howItWorks,
    features,
    role,
    status,
    year,
  } = project;

  // Filter out falsy values (commented-out imports resolve to undefined)
  const validImages = (images || []).filter(Boolean);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="project-detail-page">
      {/* ── Back bar ── */}
      <div className="project-detail-topbar">
        <button className="detail-back-btn" onClick={onBack} id="detail-back-btn">
          <span className="detail-back-arrow">←</span> Back to Projects
        </button>
      </div>

      <div className="project-detail-container">

        {/* ── Hero Banner ── */}
        <div className="project-detail-hero">
          {image ? (
            <img src={image} alt={title} className="project-detail-hero-img" />
          ) : (
            <div className="project-detail-hero-placeholder">
              <span>{emoji || '💻'}</span>
            </div>
          )}
          <div className="project-detail-hero-overlay" />
          <div className="project-detail-hero-content">
            <div className="project-detail-meta-row">
              {year && <span className="project-detail-year">{year}</span>}
              {status && (
                <span className={`project-detail-status ${status === 'Completed' ? 'status-done' : 'status-progress'}`}>
                  {status}
                </span>
              )}
            </div>
            <h1 className="project-detail-title">{title}</h1>
            <div className="project-detail-tags-row">
              {tags.map((tag, i) => (
                <span className="project-detail-tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="project-detail-body">

          {/* Overview */}
          <section className="pd-section">
            <h2 className="pd-section-title">
              <span className="pd-section-icon">📋</span> Project Overview
            </h2>
            <p className="pd-text">{longDescription || description}</p>
            {role && (
              <div className="pd-role-badge">
                <span className="pd-role-label">My Role:</span>
                <span className="pd-role-value">{role}</span>
              </div>
            )}
          </section>

          {/* How It Works */}
          {howItWorks && howItWorks.length > 0 && (
            <section className="pd-section">
              <h2 className="pd-section-title">
                <span className="pd-section-icon">⚙️</span> How It Works
              </h2>
              <div className="pd-steps">
                {howItWorks.map((step, i) => (
                  <div className="pd-step" key={i}>
                    <div className="pd-step-number">{i + 1}</div>
                    <div className="pd-step-content">
                      <h4 className="pd-step-title">{step.title}</h4>
                      <p className="pd-step-desc">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <section className="pd-section">
              <h2 className="pd-section-title">
                <span className="pd-section-icon">✨</span> Key Features
              </h2>
              <ul className="pd-features-list">
                {features.map((feature, i) => (
                  <li className="pd-feature-item" key={i}>
                    <span className="pd-feature-dot" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Screenshots Gallery (up to 5) ── */}
          {validImages.length > 0 ? (
            <section className="pd-section">
              <h2 className="pd-section-title">
                <span className="pd-section-icon">🖼️</span> Screenshots
                <span className="pd-gallery-count">{validImages.length} images</span>
              </h2>

              {/* Thumbnail grid */}
              <div className={`pd-gallery pd-gallery-${validImages.length}`}>
                {validImages.map((img, i) => (
                  <button
                    key={i}
                    className="pd-gallery-thumb"
                    id={`gallery-thumb-${project.id}-${i + 1}`}
                    onClick={() => openLightbox(i)}
                    aria-label={`View screenshot ${i + 1} fullscreen`}
                  >
                    <img
                      src={img}
                      alt={`${title} screenshot ${i + 1}`}
                      className="pd-gallery-img"
                    />
                    <div className="pd-gallery-hover-overlay">
                      <span className="pd-gallery-zoom-icon">🔍</span>
                    </div>
                    <span className="pd-gallery-index">{i + 1}</span>
                  </button>
                ))}


              </div>

              <p className="pd-gallery-hint">
                💡 Click any screenshot to view it fullscreen. Use arrow keys or buttons to navigate.
              </p>
            </section>
          ) : (
            /* No images yet – show add-images guide */
            <section className="pd-section">
              <h2 className="pd-section-title">
                <span className="pd-section-icon">🖼️</span> Screenshots
                <span className="pd-gallery-count">0 images</span>
              </h2>
              <div className="pd-gallery-empty-state">
                <div className="pd-gallery-empty-slots">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div className="pd-gallery-empty-slot" key={i}>
                      <span className="pd-gallery-empty-icon">📷</span>
                      <span className="pd-gallery-empty-label">Image {i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="pd-gallery-guide">
                  <p className="pd-gallery-guide-title">📁 How to add screenshots for this project:</p>
                  <ol className="pd-gallery-guide-steps">
                    <li>Create folder: <code>src/assets/images/project{project.id}/</code></li>
                    <li>Drop your images inside, named: <code>img1.png</code>, <code>img2.png</code> … <code>img10.png</code></li>
                    <li>Open <code>src/App.jsx</code> and uncomment the <code>p{project.id}img1</code> … <code>p{project.id}img10</code> import lines</li>
                    <li>Uncomment the matching lines inside the <code>images: [...]</code> array for project {project.id}</li>
                  </ol>
                </div>
              </div>
            </section>
          )}

          {/* Tech Stack */}
          <section className="pd-section">
            <h2 className="pd-section-title">
              <span className="pd-section-icon">🛠️</span> Tech Stack
            </h2>
            <div className="pd-tech-stack">
              {tags.map((tag, i) => (
                <div className="pd-tech-badge" key={i}>{tag}</div>
              ))}
            </div>
          </section>

          {/* Links */}
          {(link || github) && (
            <section className="pd-section">
              <h2 className="pd-section-title">
                <span className="pd-section-icon">🔗</span> Links
              </h2>
              <div className="pd-links-row">
                {link && link !== '#' && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-link-btn pd-link-live"
                    id={`detail-live-link-${project.id}`}
                  >
                    🌐 Live Demo
                  </a>
                )}
                {github && github !== '#' && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-link-btn pd-link-github"
                    id={`detail-github-link-${project.id}`}
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </section>
          )}

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={validImages}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
