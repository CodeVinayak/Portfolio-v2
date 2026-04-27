import { Link, useParams } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import { getProjectBySlug } from "../../data/projects";

export function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <Container>
        <div className="paper not-found">
          <span className="section-label">Project Sheet</span>
          <h1>Project not found</h1>
          <p>The project you are looking for is not available yet.</p>
          <Link to="/#project" className="button action-button">
            Back to projects
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollAnimation animateIn="fadeInUp">
        <article className="paper">
          <div className="paper-header">
            <div>
              <span className="section-label">Project Sheet</span>
              <h1>{project.title}</h1>
              <p className="subtitle">{project.subtitle}</p>
            </div>
            <div className="header-actions">
              <Link to="/#project" className="ghost-button">
                Back to projects
              </Link>
              <Link to="/#contact" className="button action-button">
                Contact me
              </Link>
            </div>
          </div>

          <section className="overview-card">
            <h2>Project Overview</h2>
            <p>{project.shortDescription}</p>
          </section>

          <section className="hero-visual">
            <div className="hero-visual-grid">
              {project.heroVisuals.map((visual) => (
                <figure className="visual-frame primary" key={visual.title}>
                  <img src={visual.src} alt={visual.title} />
                  <figcaption>
                    <strong>{visual.title}</strong>
                    <small>{visual.caption}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="story-grid">
            {project.storyBlocks.map((block) => (
              <div className="story-card" key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </div>
            ))}
          </section>

          <section className="detail-layout">
            <div className="narrative-card">
              <h2>How I Built It</h2>
              <ol>
                {project.buildProcess.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="narrative-card">
              <h2>Technology Stack</h2>
              <div className="tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="analysis-grid">
            <div className="narrative-card">
              <h2>Project Challenge</h2>
              <p>{project.challenge}</p>
            </div>
            <div className="narrative-card">
              <h2>My Solution</h2>
              <p>{project.solution}</p>
            </div>
          </section>

          <section className="architecture-section">
            <div className="narrative-card">
              <h2>Architecture and Data Flow</h2>
              <div className="flow-steps">
                {project.architectureFlow.map((step, index) => (
                  <div className="flow-step" key={step}>
                    <span className="step-number">0{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure className="visual-frame secondary">
              <img src={project.architectureVisual.src} alt={project.architectureVisual.title} />
              <figcaption>
                <strong>{project.architectureVisual.title}</strong>
                <small>{project.architectureVisual.caption}</small>
              </figcaption>
            </figure>
          </section>

          <section className="bottom-grid">
            <div className="narrative-card">
              <h2>Key Contributions</h2>
              <ul>
                {project.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="narrative-card">
              <h2>Impact</h2>
              <ul>
                {project.impact.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="implementation-photo">
            <h2>Implementation Photos</h2>
            <div className="implementation-grid">
              {project.implementationVisuals.map((visual) => (
                <figure className="visual-frame tertiary" key={visual.title}>
                  <img src={visual.src} alt={visual.title} />
                  <figcaption>
                    <strong>{visual.title}</strong>
                    <small>{visual.caption}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </article>
      </ScrollAnimation>
    </Container>
  );
}
