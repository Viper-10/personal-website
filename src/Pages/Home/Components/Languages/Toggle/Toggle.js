import "./style.css";
const Toggle = ({ handleClick, toggle }) => {
  const toggleButtonStyle = toggle
    ? "toggle-button active"
    : "toggle-button inactive";

  return (
    <div className="toggle" onClick={handleClick}>
      <div className={toggleButtonStyle}></div>
    </div>
  );
};

export default Toggle;