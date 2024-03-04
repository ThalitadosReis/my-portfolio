import React, { useTransition, useState } from "react";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc container grid grid-cols-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Web Development Bootcamp</li>
        <li>Bachelor in Business Information Systems</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Agile Development Practices</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
];

export default function About() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="section" id="about">
      <div className="container m-auto">
        {/* title */}
        <div className="flex flex-col items-center text-center lg:mb-2">
          <h3 className="h3">Get To Know More</h3>
          <h2 className="h2">About Me</h2>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cover bg-top bg-no-repeat max-h-[350px] max-w-[350px] lg:min-w-[450px] lg:min-h-[450px] md:min-h-[275px] md:min-w-[275px] mx-auto rounded-3xl grayscale"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:my-auto"
          >
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <p className="text-base lg:text-lg">
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Node.js, Express,
                MongoDB, HTML, CSS, and Git. I am a quick learner
                and I am always looking to expand my knowledge and skill set. I
                am a team player and I am excited to work with others to create
                amazing applications.
              </p>
              
              <div className="flex flex-row justify-start mt-8">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("certifications")}
                  active={tab === "certifications"}
                >
                  Certifications
                </TabButton>
              </div>
              <div className="mt-8">
                {TAB_DATA.find((t) => t.id === tab).content}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
