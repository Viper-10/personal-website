import timelineElements from "./timelineElements.json";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SchoolSvg, WorkSvg } from ".";
import "./style.css";

const Timeline = () => {
  const timeline = timelineElements.map((element) => {
    const isWorkIcon = element.type === "work";
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
      <VerticalTimelineElement
        key={element.id}
        date={element.date}
        dateClassName="date"
        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
        icon={isWorkIcon ? <WorkSvg /> : <SchoolSvg />}
      >
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h5 className="vertical-timeline-element-subtitle">
          {element.workplace}
          {` ${element.location}`}
        </h5>
        {element.description && (
          <p className="vertical-timeline-element-description">
            {element.description}
          </p>
        )}
        {element.bulletpoints && (
          <ul className="bullet-point-list">
            {element.bulletpoints.map((bulletpoint, index) => (
              <li className="bullet-point" key={index}>
                {bulletpoint}
              </li>
            ))}
          </ul>
        )}
      </VerticalTimelineElement>
    );
  });
  return (
    <div id="timeline">
      <h1 className="heading">Timeline</h1>
      <VerticalTimeline>{timeline}</VerticalTimeline>
    </div>
  );
};

export default Timeline;
