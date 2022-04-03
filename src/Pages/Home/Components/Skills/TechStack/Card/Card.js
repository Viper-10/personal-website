import "./style.css";
import GithubLogo from "./GithubLogo.svg";
import ReactLogo from "./ReactLogo.svg";
import SpringbootLogo from "./SpringbootLogo.svg";

const Card = ({ card }) => {
  let src = GithubLogo;

  if (card.title === "Frontend") {
    src = ReactLogo;
  } else if (card.title === "Backend") {
    src = SpringbootLogo;
  }
  return (
    <div className="card">
      <img
        src={src}
        alt={card.alt}
        width="200px"
        height="100px"
        className="svg-style"
      />
      <h2 className="card-title">{card.title}</h2>
      <div className="card-description">{card.description}</div>
    </div>
  );
};

export default Card;
