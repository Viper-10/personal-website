import { imageSrc } from ".";
import "./style.css";

const Card = ({ card }) => {
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
