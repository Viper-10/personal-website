import { Card } from "./Card/";
import "./style.css";
import techStack from "./techstack.json";

const Cards = () => {
  const cards = techStack.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return <div className="cards">{cards}</div>;
};

export default Cards;
