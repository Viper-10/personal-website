import "./style.css";
import GithubLogo from "./github.svg";
import ReactLogo from "./react.svg";
import JavaLogo from "./java.svg";

const Card = ({ card }) => {
  const imageSrc = {
    Frontend: ReactLogo,
    Backend: JavaLogo,
    Github: GithubLogo,
  };

  return (
    <div className="card">
      <img
        src={imageSrc[card.title]}
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
