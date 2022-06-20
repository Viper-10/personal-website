import { Accordion } from "react-accessible-accordion";
import Project from "./Project/Project";
import projects from "./projects.json";
import "./style.css";

const Projects = () => {
  return (
    <div className="project">
      <div className="heading">Project</div>
      <Accordion allowZeroExpanded preExpanded={["QuoteAway"]}>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </Accordion>
    </div>
  );
};

export default Projects;
