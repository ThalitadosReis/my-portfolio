import React from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Project() {
  return (
    <section className="section" id="project">
      <div className="container mx-auto">
        <SectionHeader step="02" title="Projects" />
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
