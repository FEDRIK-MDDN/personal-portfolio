import { useEffect, useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const DEFAULT_SKILLS = [
  { name: 'React', percent: 85 },
  { name: 'JavaScript', percent: 80 },
  { name: 'Node.js', percent: 70 },
  { name: 'Tailwind CSS', percent: 90 },
  { name: 'Python', percent: 65 },
  { name: 'MongoDB', percent: 75 },
  { name: 'Figma', percent: 80 },
  { name: 'HTML & CSS', percent: 95 },
];

const DEFAULT_TOOLS = ['Git', 'VS Code', 'Figma', 'Postman', 'Android Studio', 'GitHub'];

const Skills = ({ skills = DEFAULT_SKILLS, tools = DEFAULT_TOOLS }) => {
  const sectionRef = useScrollReveal({ threshold: 0.1 });
  const barsAnimated = useRef(false);

  // Animate skill bars once when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated.current) {
            barsAnimated.current = true;
            const bars = entry.target.querySelectorAll('.skill-bar-fill');
            bars.forEach((bar, i) => {
              setTimeout(() => bar.classList.add('animate'), i * 80 + 300);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    barObserver.observe(section);
    return () => barObserver.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      {/* Parallax ambient orbs */}
      <div className="parallax-orb parallax-orb-2" />
      <div className="parallax-orb parallax-orb-3" />
      <div className="container">

        {/* Header */}
        <h2 className="section-title" data-reveal="fade-up" data-delay="0">
          Skills &amp; <span>Technologies</span>
        </h2>
        <p className="section-subtitle" data-reveal="fade-up" data-delay="40">
          Technologies I work with and my proficiency levels
        </p>

        {/* Skill bars — staggered per item */}
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div
              className="skill-item"
              key={i}
              data-reveal="fade-up"
              data-delay={String(80 + i * 40)}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ '--target-width': `${skill.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools pills — stagger after skills */}
        <div className="tools-section" data-reveal="fade-up" data-delay={String(80 + skills.length * 40 + 40)}>
          <h3 className="tools-title">Tools &amp; Platforms</h3>
          <div className="tools-pills">
            {tools.map((tool, i) => (
              <span
                className="tool-pill"
                key={i}
                data-reveal="zoom-in"
                data-delay={String(80 + skills.length * 40 + 80 + i * 30)}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
