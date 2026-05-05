import useScrollReveal from '../hooks/useScrollReveal';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">Skills &amp; Technologies</span></h2>
          <p>Tools and technologies I work with</p>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skillsData.map((cat, i) => (
            <div className={`glass-card skill-category reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <h3><span className="icon">{cat.icon}</span> {cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
