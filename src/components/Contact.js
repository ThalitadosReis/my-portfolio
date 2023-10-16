import React from "react";

// icons
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

export default function Contact() {
  return (
    <div className="section h-screen" id="contact">
      <div className="container m-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="h3 mb-0">Get in touch</h3>
          <h2 className="h2">Contact Me</h2>
          <div className="flex flex-col items-center justify-center leading-[1] md:flex-row gap-5 ">
            <div className="flex items-center gap-2">
              <MdEmail className="w-[30px] h-[30px]" />
              <a className="cursor-pointer" href="mailto:dosreistha@gmail.com">
                dosreistha@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BsLinkedin className="w-[25px] h-[25px]" />
              <a
                className="cursor-pointer"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/thalitadosreis/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
