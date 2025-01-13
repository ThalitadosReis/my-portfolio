import React from "react";
import ProjectCard from "./ProjectCard";

// images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const projectsData = [
  {
    id: 1,
    title: "Moonlight",
    description: "A MERN web application for event discovery and attendance, featuring a real-time chat for attendee connectivity",
    image: Img1,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/orgs/JoTa-Events/repositories",
    previewUrl: "https://moonlight-events.netlify.app/",
  },
  {
    id: 2,
    title: "Outbackers",
    description: "A web platform connecting backpackers with temporary jobs and housing opportunities.",
    image: Img2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ironhack-outbackers-project/outbackers",
    previewUrl: "https://outbackers.adaptable.app/",
  },
  {
    id: 3,
    title: "Yoshi Run",
    description: "A entertaining web-based game where Yoshi navigates obstacles.",
    image: Img3,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ThalitadosReis/yoshi-run",
    previewUrl: "https://thalitadosreis.github.io/yoshi-run/",
  },
];

export default function Project() {
  return (
    <section className="section" id="project">
      <div className="container m-auto">
        {/* title */}
        <div className="flex flex-col items-center text-center mb-5">
          <h3 className="h3">Browse My Recent</h3>
          <h2 className="h2">Projects</h2>
        </div>

        <div>
          <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
              <li key={index}>
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
