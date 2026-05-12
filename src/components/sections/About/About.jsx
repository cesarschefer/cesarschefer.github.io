import './About.css'
import { highlights } from '../../../data/highlights'
import { languages } from '../../../data/languages'
import { MdLocationOn, MdMail, MdWork } from 'react-icons/md'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          {/* Left: Text */}
          <div className="about__content">
            <div className="section-header">
              <p className="section-label">About Me</p>

              <h2 className="section-title">Building Apps<br />and connecting platforms.</h2>
            </div>

            <div className="about__description">
              <p className="body-lg text-muted">
                I'm a software engineer with more than <strong className="text-on-surface">6 years of experience</strong> building
                web applications, backend systems and integration platforms. My main expertise is backend development using{' '}
                <strong className="text-primary">PHP and Laravel</strong>, designing APIs, and building scalable applications across
                multiple industries including e-commerce, healthcare, HR and more.
              </p>
              <p className="body-lg text-muted" style={{ marginTop: '1rem' }}>
                Recently I have been exploring <strong className="text-primary">AI-powered applications</strong> and modern
                architectures and integration-heavy systems, including payment gateways, external APIs and asyncronous workflows.
                I enjoy designing clean architectures, solving integration problems and building products that solve real user needs.
              </p>
            </div>

            <div className="about__highlights">
              {highlights.map((h) => (
                <div key={h.label} className="about__highlight-item">
                  <div className="about__highlight-icon">
                    <h.icon size={20} />
                  </div>
                  <div>
                    <div className="about__highlight-value">{h.value}</div>
                    <div className="about__highlight-label label-sm text-muted">{h.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="about__aside">
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__avatar">
                  CS
                </div>
                <div>
                  <div className="title-md text-on-surface">César Schefer</div>
                  <div className="label-sm text-primary" style={{ marginTop: '0.25rem' }}>Senior Software Engineer</div>
                </div>
              </div>

              <div className="about__attrs">
                <div className="about__attr">
                  <MdLocationOn size={20} className="about__icon" />
                  <span className="body-md text-muted">Argentina · Remote</span>
                </div>
                <div className="about__attr">
                  <MdMail size={20} className="about__icon" />
                  <a href="mailto:cesarschefer@gmail.com" className="body-md text-muted" style={{ textDecoration: 'none' }}>
                    cesarschefer@gmail.com
                  </a>
                </div>
                <div className="about__attr">
                  <MdWork size={20} className="about__icon" />
                  <span className="body-md text-muted">Open to opportunities</span>
                </div>
              </div>

              <div className="about__languages">
                <div className="label-sm text-muted" style={{ marginBottom: '0.75rem' }}>Languages</div>
                <div className="about__languages-list">
                  {languages.map(lang => (
                    <span key={lang} className="chip">{lang}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="about__deco" aria-hidden="true">
              <div className="about__deco-line" />
              <div className="about__deco-dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
