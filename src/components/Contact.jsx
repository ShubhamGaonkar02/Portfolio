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
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let's Talk</h3>
            <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about tech and data.</p>
            <div className="contact-item">
              <div className="ci-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="ci-text">
                <div className="label">Email</div>
                <div className="value"><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="ci-text">
                <div className="label">Phone</div>
                <div className="value">{personalInfo.phone}</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="ci-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div className="ci-text">
                <div className="label">Location</div>
                <div className="value">{personalInfo.location}</div>
              </div>
            </div>
          </div>
          <div className="glass-card contact-form reveal reveal-delay-1">
            <form action={`mailto:${personalInfo.email}`} method="post" encType="text/plain">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                <i className="fa-solid fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
