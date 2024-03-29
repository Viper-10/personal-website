import { useState } from "react";
import { BarChartSvg, ProgressBarSvg, BarChart } from ".";
import "./style.css";
import ProgressBars from "./components/ProgressBars/ProgressBars";
import { useMediaQuery } from "./../../../../hooks/useMediaQuery";

const Languages = () => {
  const [index, setIndex] = useState(0);

  const activeStyle = {
    backgroundColor: "rgba(7, 151, 110, 0.2)",
  };

  const inactiveStyle = {
    backgroundColor: "transparent",
  };

  return (
    <div className="skills" id="skills">
      <div className="skills-header">
        <div className="heading">Skills</div>
        <div className="toggle">
          <div
            className="toggle-item"
            style={index === 0 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(0)}
          >
            <ProgressBarSvg
              height="24px"
              width="24px"
              color={index === 0 ? "#4dfed1" : "#fff"}
            />
          </div>
          <div
            className="toggle-item"
            style={index === 1 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(1)}
          >
            <BarChartSvg
              height="24px"
              width="24px"
              color={index === 1 ? "#4dfed1" : "#fff"}
            />
          </div>
        </div>
      </div>
      {index === 1 ? <BarChart /> : <ProgressBars />}
    </div>
  );
};

export default Languages;
