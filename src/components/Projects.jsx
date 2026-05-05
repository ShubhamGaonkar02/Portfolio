import useScrollReveal from '../hooks/useScrollReveal';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">Projects</span></h2>
          <p>Things I've built and explored</p>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projectsData.map((proj, i) => (
            <div className={`glass-card project-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={i}>
              <div className="project-card-header">
                <div className="project-icon">{proj.icon}</div>
                <div className="project-links">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" title="GitHub">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" title="Live">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card-body">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer" className="project-live-btn">
                    <i className="fa-solid fa-globe"></i> Live Website
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
