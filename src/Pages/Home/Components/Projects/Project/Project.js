import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./style.css";
import { ArrowDiagonalSvg } from "..";

const Project = ({ name, link, description, category, stack }) => {
  return (
    <AccordionItem key={name} uuid={name}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <span className="cyan-on-hover" onClick={() => window.open(link)}>
            {name}
            {category && `- ${category}`}
          </span>
          <ArrowDiagonalSvg
            width="20px"
            height="20px"
            color="black"
            className="cyan-on-hover"
          />
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>
          <div className="accordion-panel-content">
            <div className="accordion-panel-heading">Description</div>
            <p className="accordion-panel-text">{description}</p>
          </div>
          <div className="accordion-panel-content">
            <div className="accordion-panel-heading">Tech Stack</div>
            <p className="accordion-panel-text">{stack}</p>
          </div>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Project;
