import useScrollReveal from '../hooks/useScrollReveal';
import { aboutData } from '../data/portfolioData';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">About Me</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <div className="ring"></div>
            <div className="about-image">👨‍💻</div>
          </div>
          <div className="about-text reveal reveal-delay-1">
            <h3>{aboutData.title}</h3>
            {aboutData.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about-stats">
              {aboutData.stats.map((s, i) => (
                <div className="stat-item" key={i}>
                  <div className="stat-num gradient-text">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
