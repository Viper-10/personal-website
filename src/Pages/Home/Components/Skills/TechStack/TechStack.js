import Card from "./Card/Card";
import "./style.css";
import techStack from "./techstack.json";
const TechStack = () => {
  const cards = techStack.map((card, index) => (
    <Card key={index} card={card} />
  ));

  return <div className="cards">{cards}</div>;
};

export default TechStack;
