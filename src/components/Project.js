import React from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section className="section" id="project">
      <div className="container mx-auto">
        <div className="flex flex-col items-end mb-10">
          <span className="absolute text-black-/50 text-xs uppercase my-auto">
            Projects
          </span>
          <div className="flex items-center w-full gap-3">
            <div className="relative w-10 h-10 transform rotate-45 border border-black/10 flex items-center justify-center rounded-lg">
              <span className="transform -rotate-45 text-sm">02</span>
            </div>
            <div className="flex-grow border-t border-black/10"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="uppercase text-[30px] lg:text-[45px] leading-[1] text-center lg:text-left lg:break-words lg:whitespace-pre-wrap">
              What I've <span className="font-newyork">Built</span>
            </h1>
          </div>
          <ul className="flex-1 text-base text-justify">
            {projectsData.map((project, index) => (
              <li key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
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
