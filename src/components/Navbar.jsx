import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand" onClick={() => scrollTo('home')}>
        Portfolio
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar-contact-btn"
        onClick={() => scrollTo('contact')}
        aria-label="Contact"
      >
        Contact
      </button>

      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
