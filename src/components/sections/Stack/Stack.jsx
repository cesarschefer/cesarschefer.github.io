import { useState } from 'react'
import './Stack.css'
import { technologies } from "../../../data/technologies"

const categories = ['All', 'Backend', 'Frontend', 'Testing', 'DevOps', 'Cloud']

export default function Stack() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredTech, setHoveredTech] = useState(null)

  const filtered = activeCategory === 'All'
    ? technologies
    : technologies.filter(t => t.category === activeCategory)

  return (
    <section id="stack" className="section stack">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Main Stack</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-description">
            A selection of tools I regularly use to build and maintain web applications.
          </p>
        </div>

        <div className="stack__filters" role="tablist" aria-label="Technology categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`stack__filter-btn ${activeCategory === cat ? 'stack__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              id={`stack-filter-${cat.toLowerCase().replace('/', '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="stack__grid">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="stack__tech-card"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              role="article"
              aria-label={`${tech.name} - ${tech.category}`}
            >
              <div className="stack__tech-icon" style={{ color: tech.color }}>{tech.icon ? <tech.icon /> : null}</div>
              <div className="stack__tech-info">
                <div className="stack__tech-name title-md">{tech.name}</div>
                <div className="stack__tech-desc body-md text-muted">{tech.description}</div>
              </div>
              <div className="stack__tech-level">

                <span className="label-sm text-muted">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
