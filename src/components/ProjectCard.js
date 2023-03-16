export default function ProjectCard({
  title,
  tech,
  imgUrl,
  demoUrl,
  about,
  githubUrl,
}) {
  return (
    <div className="col my-3">
      <div className="project-card card">
        <img className="card-img-top" src={imgUrl} alt={title} />
        <div className="card-body">
          <h3>{title}</h3>
          <p>{about}</p>
          <p>
            <b>Tech stack: </b>
            {tech}
          </p>
        </div>
        <div className="m-3">
          <a
            className="btn btn-outline-light rounded-pill links"
            href={demoUrl}
          >
            Demo
          </a>
          <a
            className="btn btn-outline-light rounded-pill links"
            href={githubUrl}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
