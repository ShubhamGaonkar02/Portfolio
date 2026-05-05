import useScrollReveal from '../hooks/useScrollReveal';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="certifications" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">Awards &amp; Certifications</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="certs-grid">
          {certificationsData.map((cert, i) => (
            <div className={`glass-card cert-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <a href={cert.link} className="cert-link" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-certificate"></i> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
