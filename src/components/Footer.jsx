import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-socials">
          <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
