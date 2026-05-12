import { useEffect, useRef } from 'react'
import { MdPerson, MdTerminal, MdFileDownload } from 'react-icons/md'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      hero.style.setProperty('--mouse-x', `${x}px`)
      hero.style.setProperty('--mouse-y', `${y}px`)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="hero" ref={heroRef}>

      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">

          <div className="hero__badge animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero__badge-dot" />
            <span className="label-sm text-primary">WEB PLATFORMS & API SYSTEMS</span>
          </div>

          <h1 className="hero__heading animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero__heading-line">César</span>
            <span className="hero__heading-line hero__heading-line--accent">Schefer</span>
          </h1>

          <div className="hero__role animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="hero__role-text">Senior Full-Stack Developer</span>
            <span className="hero__role-divider" aria-hidden="true" />
            <span className="hero__role-sub">PHP • Laravel • React</span>
          </div>

          <p className="hero__description body-lg text-muted animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Software engineer with <strong className="text-on-surface">6+ years</strong> building web applications,
            APIs and integrations. Focused on modern architectures, cloud infrastructure. Currently building
            <strong className="text-primary"> AI-powered productivity tools</strong>.
          </p>

          <div className="hero__cta-row animate-fade-up" style={{ animationDelay: '0.5s' }}>

            <a
              href="https://www.linkedin.com/in/cesar-schefer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="hero-linkedin-btn"
            >
              <MdPerson size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/cesarschefer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              id="hero-github-btn"
            >
              <MdTerminal size={20} />
              GitHub
            </a>
            <a
              href="https://docs.google.com/document/d/1oWVnAzfJelALH8jl1lA8PaDwopL0bRh5RBLNpcd1Fbc/edit"
              className="btn btn-secondary"
              id="hero-cv-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFileDownload size={20} />
              Download CV
            </a>
          </div>

          <div className="hero__stats animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">6+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">Core</span>
              <span className="hero__stat-label">PHP & JS Stack</span>
            </div>
            <div className="hero__stat-divider" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-number">AI</span>
              <span className="hero__stat-label">Powered Apps</span>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="hero__photo-wrapper">
            <div className="hero__photo-ring" aria-hidden="true" />
            <div className="hero__photo-glow" aria-hidden="true" />
            <div className="hero__photo-frame">
              <picture>
                <source srcSet="/images/cesar.webp" type="image/webp" />
                <img
                  src="/images/cesar.webp"
                  alt="César Schefer"
                  className="hero__photo"
                  loading="eager"
                  fetchpriority="high"
                  width="465"
                  height="465"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
