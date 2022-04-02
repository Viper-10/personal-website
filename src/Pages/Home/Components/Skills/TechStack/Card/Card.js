import "./style.css";
const Card = ({ card }) => {
  const path = "/src/assets/";
  console.log(path + card.src);
  return (
    <div className="card">
      <img src={path + card.src} alt={card.alt} />
      <h2 className="card-title">{card.title}</h2>
      <div className="card-description">{card.description}</div>
    </div>
  );
};

export default Card;
