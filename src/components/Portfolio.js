import projects from "./projects";
import { useMediaQuery } from "react-responsive";

const Portfolio = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 660px)` });

  return (
    <div className="portfolio-container">
      <div className="title">
        <h1>My projects</h1>
      </div>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div className="projects" key={project.id}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <h5>Developed by: {project.by}</h5>
                <hr />
                <p>{project.text}</p>

                {isMobile && (
                  <div className="project-img">
                    {project.image === "" ? null : (
                      <img
                        className="project-images"
                        src={project.image}
                        alt={project.title}
                      />
                    )}
                  </div>
                )}

                <h4>Tools used</h4>
                <ul>
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                {project.github === "/" ? null : (
                  <a href={project.github}>Visit github repo</a>
                )}
                {project.website === "/" ? null : (
                  <a href={project.website}>Visit site</a>
                )}
              </div>

              {!isMobile && (
                <div className="project-img">
                  {project.image === "" ? null : (
                    <img
                      className="project-images"
                      src={project.image}
                      alt={project.title}
                    />
                  )}
                  {project.image2 === "" ? null : (
                    <img
                      className="project-images"
                      src={project.image2}
                      alt={project.title}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
