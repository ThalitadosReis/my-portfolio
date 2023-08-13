import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const projects = [
  {
    title: "Moonlight",
    imgUrl: projImg1,
    demoUrl: "https://moonlight-events.netlify.app/",
    githubUrl: "https://github.com/orgs/JoTa-Events/repositories",
    about:
      "A real-time event discovery platform with live chat for attendees to connect and enhance experiences. Tech stack included JavaScript, React.js, CSS, Node.js, Express.js, MongoDB, and Socket.io.",
  },
  {
    title: "Outbackers",
    imgUrl: projImg2,
    demoUrl: "https://outbackers.adaptable.app/",
    githubUrl: "https://github.com/ironhack-outbackers-project/outbackers",
    about:
      "Connecting backpackers to temporary jobs and housing opportunities for a seamless exploration experience. Tech stack included HTML, CSS, Handlebars, Javascript, Express.js, and MongoDB.",
  },
  {
    title: "Yoshi Run",
    imgUrl: projImg3,
    demoUrl: "https://thalitadosreis.github.io/yoshi-run/",
    githubUrl: "https://github.com/ThalitadosReis/yoshi-run",
    about:
      "A simple, fun, and engaging web-based game with a lovable character jumping over obstacles. Tech stack included Javascript, HTML, and CSS.",
  },
];

export default function Projects() {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col className="my-5">
            <h2>Projects</h2>
            <p>
              Here, you can find an overview of my projects and experience. I'm
              constantly looking for ways to improve my craft, and this web
              application serves as a platform to showcase my progress. I invite
              you to take a look around, and explore what I have to offer. Thank
              you for visiting!
            </p>
            <Container className="project-container mt-5">
              {projects.map((project, id) => (
                <div className="project-content" key={project.id}>
                  <img src={project.imgUrl} alt={project.title} />
                  <div className="content">
                    <h4>{project.title}</h4>
                    <p>{project.about}</p>
                    <div className="link-container">
                      <a className="link" href={project.demoUrl}>
                        <span className="link-text">Live Demo</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
