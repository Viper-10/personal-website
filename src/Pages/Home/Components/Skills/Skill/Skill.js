import "./style.css";
const Skill = ({ skill }) => {
  const barStyle = {
    width: "300px",
    height: "5px",
    backgroundColor: "white",
    borderRadius: "5px",
  };
  const barFiller = {
    width: `${skill.percent}%`,
    height: "100%",
    backgroundColor: "#12caca",
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
