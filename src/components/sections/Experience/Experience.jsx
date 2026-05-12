import './Experience.css'
import { experiences } from '../../../data/experiences';
import { MdArrowForward } from 'react-icons/md'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Journey & Impact.</h2>
        </div>

        <div className="experience__list">
          {experiences.map((exp, idx) => (
            <article key={exp.id} className="experience__item" id={`experience-${idx}`}>

              <div className="experience__bg-number" aria-hidden="true">{exp.id}</div>

              <div className="experience__header">
                <div className="experience__meta">
                  <div className="experience__period label-sm text-primary">{exp.period}</div>
                  <span className="chip">{exp.type}</span>
                </div>
                <h3 className="experience__role headline-md">{exp.role}</h3>

                <div className="experience__company">
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience__company-badge experience__company-badge--link"
                    >
                      {exp.logo ? (
                        <span className="experience__badge-logo-wrap">
                          <img src={exp.logo} alt="" className="experience__badge-logo" />
                        </span>
                      ) : (
                        <span className="experience__badge-initials">
                          {exp.company.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span className="experience__badge-name">{exp.company}</span>
                      <span className="experience__badge-arrow" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <div className="experience__company-badge">
                      <span className="experience__badge-initials experience__badge-initials--neutral">
                        {exp.company.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="experience__badge-name">{exp.company}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="experience__description body-lg text-muted">{exp.description}</p>

              <ul className="experience__achievements">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="experience__achievement">
                    <MdArrowForward size={14} className="experience__achievement-icon" />
                    <span className="body-md text-muted">{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="experience__stack">
                {exp.stack.map(tech => (
                  <span key={tech} className="chip">{tech}</span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}