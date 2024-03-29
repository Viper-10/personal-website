import { Accordion } from "react-accessible-accordion";
import Project from "./Project/Project";
import projects from "./projects.json";

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div className="heading">Project</div>
      <Accordion allowZeroExpanded preExpanded={[projects[0].link]}>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </Accordion>
    </div>
  );
};

export default Projects;
