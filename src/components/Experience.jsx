import useScrollReveal from '../hooks/useScrollReveal';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">Experience</span></h2>
          <p>My professional journey so far</p>
          <div className="section-line"></div>
        </div>
        <div className="timeline">
          {experienceData.map((exp, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="date">{exp.date}</div>
                <h3>{exp.title}</h3>
                <div className="company">{exp.company}</div>
                <ul>
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
