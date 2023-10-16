import React from "react";

// icons
import { PiMedalFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

export default function About() {
  return (
    <section className="section h-screen" id="about">
      <div className="container m-auto h-full">
        {/* title */}
        <div className="text-center my-auto">
          <h3 className="h3">Get To Know More</h3>
          <h2 className="h2">About Me</h2>
        </div>
        <div className="flex flex-col items-center gap-y-5 lg:flex-row lg:gap-x-10 lg:gap-y-0 h-full">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cover bg-center bg-no-repeat h-full w-full lg:max-w-[500px] lg:max-h-[500px] sm:max-w-[400px] sm:max-h-[400px] rounded-3xl mx-auto grayscale"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col"
          >
            {/* boxes */}
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <div className="flex-1 items-center justify-center border-2 border-black/30 rounded-3xl p-5 text-center">
                <PiMedalFill className="mx-auto w-[30px] h-[30px] mb-3" />
                <h2 className="font-bold text-xl">Experience</h2>
                <p className="text-accent">
                  2+ years <br />
                  Full-Stack Development
                </p>
              </div>
              <div className="flex-1 items-center justify-center border-2  border-black/30 rounded-3xl p-4 text-center">
                <HiUserGroup className="mx-auto w-[30px] h-[30px] mb-3" />
                <h2 className="font-bold text-xl">Education</h2>
                <p className="text-accent">
                  Full-Stack Web Development <br />
                  Ironhack
                </p>
              </div>
            </div>
            <p className="text-accent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
