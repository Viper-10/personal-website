import "./style.css";
const Skill = ({ skill }) => {
  const barStyle = {
    width: "300px",
    height: "5px",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "5px",
  };
  const barFiller = {
    width: `${skill.percent}%`,
    height: "100%",
    backgroundColor: "rgb(1, 74, 52)",
  };
  return (
    <div className="mb-1">
      <div className="skill-text">{skill.text}</div>
      <div style={barStyle}>
        <div style={barFiller}></div>
      </div>
    </div>
  );
};

export default Skill;
