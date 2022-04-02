import "./style.css";
import Toggle from "./Toggle/Toggle";
import { useState } from "react";
import SkillBars from "./SkillBars/SkillBars";
import TechStack from "./TechStack/TechStack";
const Skills = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="skills">
      <div className="flex">
        <h1 className="heading">{toggle ? "Skills" : "Stack"} </h1>
        <Toggle handleClick={handleClick} toggle={toggle} />
      </div>
      {toggle ? <SkillBars /> : <TechStack />}
    </div>
  );
};

export default Skills;
