import { Col } from "react-bootstrap";
import { ArrowRightShort } from "react-bootstrap-icons";

export default function ProjectCard({ title, tech, imgUrl, demoUrl, about, githubUrl }){
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-box">
        <img src={imgUrl} alt="" />
        <div className="project-content">
          <h4>{title}</h4>
          <a href={demoUrl}>Check it out</a>
          <p>{about}</p>
          <p className="tech-stack"><span style={{color: "#f9a826"}}>Tech stack:</span> {tech}</p>
          <a href={githubUrl}>Github <ArrowRightShort size={20} /></a>
        </div>
      </div>
    </Col>
  )
}