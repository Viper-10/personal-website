import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./style.css";
import { ArrowDiagonalSvg } from "..";

const Project = ({ name, link, description, category, stack }) => {
  return (
    <AccordionItem key={name} uuid={link}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <span
            className="cyan-on-hover"
            onClick={(e) => {
              window.open(link);
              e.stopPropagation();
            }}
          >
            {name}
            {category && `- ${category}`}
            <ArrowDiagonalSvg width="24px" height="24px" />
          </span>
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
