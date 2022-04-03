import Skill from "./Skill/Skill.js";
import mySkills from "./skills.json";
const SkillBars = () => {
  const skills = mySkills.map((skill) => {
    return <Skill key={skill.text} skill={skill} />;
  });
  return <div className="grid-split-two mt-2">{skills}</div>;
};

export default SkillBars;