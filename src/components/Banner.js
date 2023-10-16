import React from "react";

// link
import { Link } from "react-scroll";
// copy of cv
import CV from "../assets/cv.pdf";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

export default function Banner() {
  return (
    <section className="section h-screen" id="home">
      <div className="container m-auto">
        <div className="flex flex-col gap-y-10 items-center lg:flex-row lg:items-center lg:gap-x-12 lg:gap-y-0">
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[70px] mb-2"
            >
              Hello! I'm Thalita
            </motion.h1>
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[-60px] font-semibold uppercase leading-[1]"
            >
              Full-Stack Developer
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a tech-loving junior full-stack developer who gets a thrill
              from building innovative applications.
            </motion.p>
            {/* links / buttons */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                class="btn-secondary btn-sm lg:btn-lg flex items-center"
                href={CV}
                download="Thalita-dos-Reis-CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <Link
                to="contact"
                smooth={true}
                className="btn btn-sm lg:btn-lg flex items-center cursor-pointer"
              >
                Contact Info
              </Link>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 flex max-w-sm bg-about bg-cover bg-center bg-no-repeat rounded-full h-96 grayscale"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
