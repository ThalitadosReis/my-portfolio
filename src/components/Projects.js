import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

export default function Projects() {
  const projects = [
    {
      title: "Moonlight",
      tech: "React.js, CSS, Node.js, Express.js, MongoDB,  Socket.io",
      imgUrl: projImg1,
      demoUrl: "https://moonlight-events.netlify.app/",
      githubUrl: "https://github.com/orgs/JoTa-Events/repositories",
      about:
        "Moonlight is web application which allows users to connect, discover, and attend various events such as concerts, festivals, and more"
    },
    {
      title: "Outbackers",
      tech: "HTML, CSS, Handlebars, Javascript, Express.js, MongoDB",
      imgUrl: projImg2,
      demoUrl: "https://outbackers.adaptable.app/",
      githubUrl: "https://github.com/ironhack-outbackers-project/outbackers",
      about:
        "Outbackers is a platform which allows backpackers to connect, and search for temporary jobs and housing opportunities while on the road.",
    },
    {
      title: "Yoshi Run",
      tech: "Javascript, HTML, CSS",
      imgUrl: projImg3,
      demoUrl: "https://thalitadosreis.github.io/yoshi-run/",
      githubUrl: "https://github.com/ThalitadosReis/yoshi-run",
      about:
        "Yoshi Run is a web-based game where Yoshi has to jump over incoming obstacles"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here, you can find an overview of my projects and experience. I'm constantly looking for ways to improve my craft, and this web application serves as a platform to showcase my progress. I invite you to take a look around, and explore what I have to offer. Thank you for visiting!
                  </p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
