import { getIcon } from ".";
import "./style.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      {getIcon(card.title)}
      <h2 className="card-title">{card.title}</h2>
      <div className="card-description">{card.description}</div>
    </div>
  );
};

export default Card;
