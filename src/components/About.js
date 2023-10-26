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
            className="flex-1 bg-about bg-cover bg-center bg-no-repeat max-h-[350px] max-w-[350px] lg:min-w-[450px] lg:min-h-[450px] md:min-h-[275px] md:min-w-[275px] mx-auto rounded-3xl grayscale"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col lg:my-auto"
          >
            {/* boxes */}
            <div className="flex flex-col justify-between md:flex-row gap-5 mb-5">
              <div className="flex-1 items-center border-2 border-black/30 rounded-3xl p-5 text-center">
                <PiMedalFill className="mx-auto w-[30px] h-[30px] mb-3" />
                <h2 className="font-bold text-xl">Experience</h2>
                <p className="text-accent">
                  1+ years <br />
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
            <p className="text-accent text-[15px] leading-snug">
              I'm a junior Full-Stack Developer originally from Brazil but
              currently based in the beautiful landscapes of Switzerland. My
              background is anything but typical, extending beyond the world of
              coding. My passion lies in web development and design, and I have
              an endless curiosity for exploration. <br /> <br />
              My journey has taken me through various roles in hospitality,
              management, and accounting across places like Barcelona, New
              Zealand, and beyond. Now, I'm in the process of transitioning into
              the world of web development. I'm excited to combine the creative
              perspectives I've gained from my travels with the technical skills
              I've developed, all in the pursuit of crafting exceptional online
              experiences. <br /> <br /> Let's connect and code the future
              together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
