const Icon = (props) => {
  const { faIcon, url } = props;
  return (
    <div className="icon">
      <a href={url} target="_blank">
        <i className={faIcon}></i>
      </a>
    </div>
  );
};

export default Icon;
