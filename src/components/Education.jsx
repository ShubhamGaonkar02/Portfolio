import useScrollReveal from '../hooks/useScrollReveal';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">Education</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="glass-card education-card reveal">
          <div className="edu-icon">{educationData.icon}</div>
          <h3>{educationData.degree}</h3>
          <div className="edu-school">{educationData.school}</div>
          <div className="edu-details">
            <span><i className="fa-regular fa-calendar"></i> {educationData.period}</span>
            <span><i className="fa-solid fa-graduation-cap"></i> {educationData.cgpa}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
