import React from "react";
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
      <div className="container">
        <div className="row">
          <div className="my-5">
            <h2>Projects</h2>
            <p>
              Here, you can find an overview of my projects and experience. I'm
              constantly looking for ways to improve my craft, and this web
              application serves as a platform to showcase my progress. I invite
              you to take a look around, and explore what I have to offer. Thank
              you for visiting!
            </p>
            <div className="project-container mt-5">
              {projects.map((project, id) => (
                <div className="project-content" key={project.id}>
                  <img src={project.imgUrl} alt={project.title} />
                  <div className="content">
                    <h4>{project.title}</h4>
                    <p>
                      {project.about}
                      <br />
                      <br />
                      <span style={{ color: "#e38035" }}>{project.tech}</span>
                    </p>
                    <div className="link-container">
                      <a href={project.githubUrl}>Github</a>
                      <a className="btn btn-light" href={project.demoUrl}>
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
