const Project = ({ name, link, description }) => {
  return (
    <div class="project-item">
      <div>{name}</div>
      <a href={link}>TODO: Put up the arrow diagonal svg here</a>
      <div>{description}</div>
    </div>
  );
};

export default Project;
