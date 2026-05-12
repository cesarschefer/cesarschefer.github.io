import { GitHubIcon } from './GithubIcon'

export default function ProjectCard({ project }) {
    return (
        <article className="project-card" id={project.id}>
            <div className="card-visual">
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="main-img"
                    loading="lazy"
                />
                <div className="inner-shadow-overlay" />
                <div className="gradient-overlay" />


            </div>

            <div className="card-content">
                <div className="card-top">
                    {project.contextTag && (
                        <span className="badge">{project.contextTag}</span>
                    )}
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <ul className="feature-list">
                        {project.features.map((f, i) => (
                            <li key={i}>
                                <span className="feature-dot" />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                <footer className="card-footer">
                    <div className="tech-stack">
                        {project.stack.map(tech => (
                            <span key={tech} className="tech-chip">{tech}</span>
                        ))}
                    </div>

                    {project.github && (
                        <div className="card-actions">
                            <a
                                href={project.github}
                                className="action-btn github-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View Source on GitHub"
                            >
                                <span>GitHub</span>
                                <GitHubIcon />
                            </a>
                        </div>
                    )}
                </footer>
            </div>
        </article>
    )
}