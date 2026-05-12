import './Contact.css'
import { socials } from '../../../data/socials'
import SocialIcon from './SocialIcon'

export default function Contact() {
  return (
    <section id="contact" className="section contact">


      <div className="container">
        <div className="contact__bento">

          {/* ── LARGE CARD: intro ── */}
          <div className="contact__card contact__card--intro">
            <div className="contact__intro-content">
              <p className="section-label">Contact</p>
              <h2 className="contact__heading">
                Let's build something<br />
                <span className="contact__heading--accent">together.</span>
              </h2>
              <p className="body-lg text-muted contact__intro-text">
                I'm open to discussing new projects, freelance collaborations,
                or full-time opportunities. Feel free to reach out.
              </p>
              <div className="contact__intro-tags">
                <span className="chip">Available for new roles</span>
                <span className="chip">Remote & distributed teams</span>
                <span className="chip">Startup environments</span>
              </div>
            </div>

          </div>

          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              className="contact__card contact__card--social"
              target={s.id !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              id={`contact-${s.id}`}
              style={{ '--accent': s.accent, '--accent-alpha': s.accentAlpha, '--accent-border': s.accentBorder }}
            >
              <div className="contact__social-icon-wrap">
                <SocialIcon type={s.icon} />
              </div>
              <div className="contact__social-body">
                <div className="contact__social-label title-md">{s.label}</div>
                <div className="contact__social-handle body-md text-muted">{s.handle}</div>
              </div>
              <p className="contact__social-desc body-md text-muted">{s.description}</p>
              <div className="contact__social-arrow" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="contact__social-tint" aria-hidden="true" />
            </a>
          ))}

        </div>
      </div>
    </section>
  )
}
