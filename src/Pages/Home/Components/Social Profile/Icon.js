const Icon = (props) => {
  const { faIcon, url } = props;
  return (
    <div className="mb-1">
      <a href={url} target="_blank" rel="noreferrer">
        <i className={faIcon}></i>
      </a>
    </div>
  );
};

export default Icon;
