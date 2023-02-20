import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

export default function Projects() {
  const projects = [
    {
      id: "Moonlight",
      title: "Moonlight",
      tech: "React.js, CSS, Node.js, Express.js, MongoDB, Socket.io",
      imgUrl: projImg1,
      demoUrl: "https://moonlight-events.netlify.app/",
      githubUrl: "https://github.com/orgs/JoTa-Events/repositories",
      about:
        "Moonlight is a web app for discovering and attending events with a live chat feature for connecting attendees in real-time. It creates a sense of community and enables users to socialize with like-minded individuals. Moonlight provides a seamless event experience, connecting people with their favorite artists and creating lasting memories.",
    },
    {
      id: "Outbackers",
      title: "Outbackers",
      tech: "HTML, CSS, Handlebars, Javascript, Express.js, MongoDB",
      imgUrl: projImg2,
      demoUrl: "https://outbackers.adaptable.app/",
      githubUrl: "https://github.com/ironhack-outbackers-project/outbackers",
      about:
        "Outbackers is a web platform that connects backpackers with temporary job and housing opportunities. It offers a centralized location for searching work and accommodation, and enables users to connect with each other for information and advice. Outbackers makes it easier for backpackers to navigate traveling and working in unfamiliar locations and enjoy their experiences on the road.",
    },
    {
      id: "Yoshi Run",
      title: "Yoshi Run",
      tech: "Javascript, HTML, CSS",
      imgUrl: projImg3,
      demoUrl: "https://thalitadosreis.github.io/yoshi-run/",
      githubUrl: "https://github.com/ThalitadosReis/yoshi-run",
      about:
        "Yoshi Run is a simple, yet fun web-based game that features the popular video game character, Yoshi. In this game, players must help Yoshi run as far as possible by jumping over incoming obstacles. The game requires quick reflexes and timing. Yoshi Run is an entertaining way to pass the time, and its intuitive gameplay makes it enjoyable for all ages.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                Here, you can find an overview of my projects and experience.
                I'm constantly looking for ways to improve my craft, and this
                web application serves as a platform to showcase my progress. I
                invite you to take a look around, and explore what I have to
                offer. Thank you for visiting!
              </p>
              <Row style={{margin: "auto"}}>
                {projects.map((project, id) => {
                  return <ProjectCard key={id} {...project} />;
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
