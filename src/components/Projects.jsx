import Icon from "./Icon";
import FadeIn from "./FadeIn";
import { projects } from "../data/portfolioData";

export default function Projects({ onOpenGuide }) {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">
          My <span className="accent">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <FadeIn
              as="div"
              key={project.key}
              className={`project-card${project.featured ? " featured" : ""}`}
              data-index={project.index}
              delay={(i % 4) * 80}
            >
              <div className="project-header">
                <div className="project-icon">
                  <Icon name={project.icon} />
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <p className="project-desc">
                {project.academicNote && (
                  <>
                    <strong>{project.academicNote}</strong> —{" "}
                  </>
                )}
                {project.desc}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="ptag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="proj-btn-row">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-github"
                  >
                    <Icon name="github" /> GitHub <Icon name="external-link" />
                  </a>
                )}
                {project.view && (
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-view"
                  >
                    View Project <Icon name="external-link" />
                  </a>
                )}
              </div>

              {project.hasGuide && (
                <button
                  type="button"
                  className="proj-btn proj-btn-guide"
                  onClick={() => onOpenGuide(project.key)}
                >
                  <Icon name="book-text" /> View Execution Guide
                </button>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
