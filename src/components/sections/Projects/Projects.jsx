import './Projects.css'
import { projects } from '../../../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="section-header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">A few of my recent projects</h2>
          <p className="projects-subtitle">
            From building robust backend logic and responsive frontend interfaces
            to my latest focus on implementing AI integrations
          </p>
        </div>

        <div className="bento-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}