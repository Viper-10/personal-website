import "./style.css";
const Card = ({ card }) => {
  return (
    <div className="card">
      <h2>{card.title}</h2>
    </div>
  );
};

export default Card;
