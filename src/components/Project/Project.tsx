import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={project.slug} delay={index * 120}>
            <Link className="project" to={`/projects/${project.slug}`}>
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="view-project">View details</span>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </footer>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
