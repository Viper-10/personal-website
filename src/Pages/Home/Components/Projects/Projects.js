import Project from "./Project/Project";
import projects from "./projects.json";

const Projects = () => {
  return (
    <div class="project">
      <div class="heading">Project</div>
      <div class="project-container">
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
