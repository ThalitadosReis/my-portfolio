import { Col } from "react-bootstrap";

export default function ProjectCard({
  title,
  tech,
  imgUrl,
  demoUrl,
  about,
  githubUrl,
}) {
  return (
    <Col style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="project-card" style={{ display: "flex" }}>
        <div className="img">
          <img src={imgUrl} alt="" />
        </div>
        <span>{title}</span>
        <div className="card-body" >
          <p className="info">{about}</p>
          <p className="info">
            <b>Tech stack: </b>
            {tech}
          </p>
        </div>
        <div className="connect">
          <a href={demoUrl}>Demo</a>
          <a href={githubUrl}>Github</a>
        </div>
      </div>
    </Col>
  );
}
