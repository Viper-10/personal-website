import "./style.css";
import Skill from "./Skill/Skill.js";
import mySkills from "./skills.json";
const Skills = () => {
  const skills = mySkills.map((skill) => {
    return <Skill key={skill.text} skill={skill} />;
  });
  return (
    <div className="skills">
      <h1 className="heading"> Skills</h1>
      <div className="grid-split-two">{skills}</div>
    </div>
  );
};

export default Skills;
