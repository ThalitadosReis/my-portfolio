import React, { useRef } from "react";
import { fadeIn } from "../variants";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="section" id="project">
      <div className="container m-auto">
        {/* title */}
        <div className="flex flex-col items-center text-center mb-5">
          <h3 className="h3">Browse My Recent</h3>
          <h2 className="h2">Projects</h2>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
