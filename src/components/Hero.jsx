import { useEffect, useRef } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { personalInfo } from '../data/portfolioData';

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update(w, h) {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > w) this.speedX *= -1;
    if (this.y < 0 || this.y > h) this.speedY *= -1;
  }
  draw(ctx, isLight) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = isLight
      ? `rgba(79, 110, 247, ${this.opacity * 0.8})`
      : `rgba(0, 212, 255, ${this.opacity})`;
    ctx.fill();
  }
}

export default function Hero() {
  const canvasRef = useRef(null);
  const typedText = useTypewriter(personalInfo.typewriterPhrases);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
      for (let i = 0; i < count; i++) particles.push(new Particle(canvas.width, canvas.height));
    };

    let isLight = document.documentElement.getAttribute('data-theme') === 'light';

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = isLight
              ? `rgba(79, 110, 247, ${0.1 * (1 - dist / 120)})`
              : `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(canvas.width, canvas.height); p.draw(ctx, isLight); });
      connect();
      animId = requestAnimationFrame(animate);
    };

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      isLight = document.documentElement.getAttribute('data-theme') === 'light';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas className="hero-canvas" ref={canvasRef}></canvas>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      <div className="hero-content container">
        <div className="hero-badge">
          <span className="dot"></span>
          Open to Opportunities
        </div>
        <h1>Hi, I'm <span className="gradient-text">{personalInfo.name}</span></h1>
        <p className="subtitle">
          <span>{typedText}</span>
          <span className="cursor-blink"></span>
        </p>
        <p className="tagline">{personalInfo.tagline}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="fa-solid fa-paper-plane"></i> Get In Touch
          </a>
          <a href="#projects" className="btn btn-outline">
            <i className="fa-solid fa-code"></i> View Projects
          </a>
        </div>
        <div className="hero-socials">
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
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
