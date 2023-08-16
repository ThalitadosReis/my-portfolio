import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const projects = [
  {
    title: "Moonlight",
    imgUrl: projImg1,
    demoUrl: "https://moonlight-events.netlify.app/",
    about:
      "A real-time event discovery platform with live chat for attendees to connect and enhance experiences. Tech stack included JavaScript, React.js, CSS, Node.js, Express.js, MongoDB, and Socket.io.",
  },
  {
    title: "Outbackers",
    imgUrl: projImg2,
    demoUrl: "https://outbackers.adaptable.app/",
    about:
      "Connecting backpackers to temporary jobs and housing opportunities for a seamless exploration experience. Tech stack included HTML, CSS, Handlebars, Javascript, Express.js, and MongoDB.",
  },
  {
    title: "Yoshi Run",
    imgUrl: projImg3,
    demoUrl: "https://thalitadosreis.github.io/yoshi-run/",
    about:
      "A simple, fun, and engaging web-based game with a lovable character jumping over obstacles. Tech stack included Javascript, HTML, and CSS.",
  },
];

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="project mt-5" id="projects">
      <Row className="justify-content-center align-items-center">
        <Col>
          {projects.map((project, id) => (
            <Col className="project-container m-auto" key={id}>
              <div className="project-image-container">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.imgUrl})`,
                    transform: `translateY(-${scrollY * 0.3}px)`,
                  }}
                ></div>
                <div className="overlay">
                  <Col xs={12} md={8} xl={6} className="project-content">
                    <h1>{project.title}</h1>
                    <p>{project.about}</p>
                    <ul className="buttons">
                      <li>
                        <a href={project.demoUrl}>
                          <span className="label">View Demo</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                          >
                            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </Col>
                </div>
              </div>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
