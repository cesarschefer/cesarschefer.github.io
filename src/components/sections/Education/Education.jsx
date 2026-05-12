import './Education.css'
import { FaBookOpen } from "react-icons/fa"
import { education } from '../../../data/education'
import { learningSources } from '../../../data/learningSources'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="education__grid">
          {/* Education cards */}
          <div className="education__cards">
            {education.map((edu) => (
              <article key={edu.id} className="education__card" id={`education-${edu.id}`}>
                <div className="education__card-header">
                  <div className="education__icon" style={{ color: edu.iconColor }}>{edu.icon ? <edu.icon /> : null}</div>
                  <div className="education__meta">
                    <div className="label-sm text-primary">{edu.period}</div>
                    <h3 className="education__degree title-lg">{edu.degree}</h3>
                    <div className="body-md text-muted">{edu.institution}</div>
                  </div>
                </div>

                <p className="body-md text-muted education__desc">{edu.description}</p>

                <div className="education__highlights">
                  {edu.highlights.map(h => (
                    <span key={h} className="chip">{h}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Certifications */}
          <div className="education__certs">
            <div className="education__certs-header">
              <FaBookOpen style={{ color: 'var(--tertiary)', fontSize: '1.25rem' }} />
              <span className="label-lg text-on-surface">Engineers I Learn From</span>
            </div>
            <div className="education__certs-list">
              {learningSources.map((source) => (
                <div key={source.name} className="education__cert-item">
                  <div className="education__cert-dot" />
                  <div>
                    <div className="body-md text-on-surface" style={{ fontWeight: 500 }}>{source.name}</div>
                    <div className="label-sm text-muted">{source.focus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
