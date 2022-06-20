import mySkills from "../../skills.json";
import { backgroundColors, borderColors } from "../..";
import ProgressBar from "@ramonak/react-progress-bar";
import "./style.css";

const ProgressBars = () => {
  const skills = mySkills.map((skill, index) => {
    return (
      <ProgressBar
        key={skill.name}
        completed={skill.percent}
        baseBgColor={backgroundColors[index]}
        bgColor={borderColors[index]}
        animateOnRender
        labelAlignment="outside"
        customLabel={skill.name + ": " + skill.percent}
        width="75%"
      />
    );
  });
  return <div className="grid-cols-2 mt-2 progress-bar">{skills}</div>;
};

export default ProgressBars;
