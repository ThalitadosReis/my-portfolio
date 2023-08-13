import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const projects = [
  {
    title: "Moonlight",
    tech: "Tech stack included JavaScript, React.js, CSS, Node.js, Express.js, MongoDB, and Socket.io",
    imgUrl: projImg1,
    demoUrl: "https://moonlight-events.netlify.app/",
    githubUrl: "https://github.com/orgs/JoTa-Events/repositories",
    about:
      "A real-time event discovery platform with live chat for attendees to connect and enhance experiences.",
  },
  {
    title: "Outbackers",
    tech: "Tech stack included HTML, CSS, Handlebars, Javascript, Express.js, and MongoDB",
    imgUrl: projImg2,
    demoUrl: "https://outbackers.adaptable.app/",
    githubUrl: "https://github.com/ironhack-outbackers-project/outbackers",
    about:
      "Connecting backpackers to temporary jobs and housing opportunities for a seamless exploration experience.",
  },
  {
    title: "Yoshi Run",
    tech: "Tech stack included Javascript, HTML, and CSS",
    imgUrl: projImg3,
    demoUrl: "https://thalitadosreis.github.io/yoshi-run/",
    githubUrl: "https://github.com/ThalitadosReis/yoshi-run",
    about:
      "A simple, fun, and engaging web-based game with a lovable character jumping over obstacles.",
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
                    <p>
                      {project.about}
                      {project.tech}
                    </p>
                    <div className="link-container">
                      <a href={project.githubUrl} className="link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                      </a>
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
