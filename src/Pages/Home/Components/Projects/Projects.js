import Project from "./Project/Project";
import projects from "./projects.json";
import "./style.css";

const Projects = () => {
  return (
    <div className="project">
      <div className="heading">Project</div>
      <div className="project-container">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
