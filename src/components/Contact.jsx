import useScrollReveal from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <h2><span className="gradient-text">Get In Touch</span></h2>
          <p>Let's connect and create something great together</p>
          <div className="section-line"></div>
        </div>

        <div className="glass-card contact-card-centered reveal">
          <div className="contact-card-content">
            <h3>Let's Talk</h3>
            <p className="contact-subtext">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech, web development, and data analysis.
            </p>

            <div className="contact-details-grid">
              <div className="contact-detail-box">
                <div className="cd-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="cd-info">
                  <div className="cd-label">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="cd-value-link">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-detail-box">
                <div className="cd-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="cd-info">
                  <div className="cd-label">Location</div>
                  <div className="cd-value">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="contact-action-bar">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary btn-contact-direct"
              >
                <i className="fa-solid fa-paper-plane"></i> Send Me An Email
              </a>
              <div className="contact-social-icons">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
