/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// icon
import { IoIosCheckmarkCircle } from "react-icons/io";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

export default function Experience() {
  return (
    <div className="section" id="experience">
      <div className="container m-auto">
        {/* title */}
        <div className="flex flex-col items-center text-center mb-2">
          <h3 className="h3">Explore my</h3>
          <h2 className="h2">Experience</h2>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-2 border-black/30 rounded-3xl p-5"
          >
            {/* front-end list */}
            <h3 className="text-accent text-2xl font-bold text-center mb-7">
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 gap-5 justify-items-center ">
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>HTML</b> <br />
                  <span className="text-accent">Experienced</span>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>CSS</b> <br />
                  <span className="text-accent">Experienced</span>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>React</b> <br />
                  <span className="text-accent">Intermediate</span>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>JavaScript</b> <br />
                  <span className="text-accent">Intermediate</span>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>TypeScript</b> <br />
                  <span className="text-accent">Intermediate</span>
                </div>
              </li>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-2 border-black/30 rounded-3xl p-5"
          >
            {/* back-end  list */}
            <h3 className="text-accent text-2xl font-bold text-center mb-7">
              Backend Development
            </h3>

            <div className="grid grid-cols-2 gap-5 justify-items-center">
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>Node JS</b> <br />
                  <span className="text-accent">Intermediate</span>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>Express JS</b> <br />
                  <span className="text-accent">Intermediate</span>
                </div>
              </li>
              <li className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="w-[30px] h-[30px]" />
                <div>
                  <b>Mongo DB</b> <br />
                  <span className="text-accent">Intermediate</span>
                </div>
              </li>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
