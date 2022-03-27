import "./style.css";
const Card = (props) => {
  const { topic, contents } = props;
  console.log(contents);
  const description = contents.map((content) => {
    return (
      <>
        <div className="description">{content.description}</div>
        <h5 className="tenure">{content.duration}</h5>
      </>
    );
  });
  return (
    <div className="card">
      <h3 className="title">{topic}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
