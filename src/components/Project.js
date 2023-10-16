import React from "react";

// images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
// icon
import { HiArrowRight } from "react-icons/hi";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

export default function Project() {
  return (
    <div className="section " id="work">
      <div className="container m-auto h-screen">
        {/* text */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3 className="h3 mb-0">Browse My Recent</h3>
          <h2 className="h2">Projects</h2>
          {/* link to github account */}
          <a
            class="btn btn-sm lg:btn-lg flex items-center max-w-max"
            rel="noopener noreferrer"
            href="https://github.com/ThalitadosReis"
            target="_blank"
          >
            View all projects
          </a>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-10 mb-10 lg:mb-0"
        >
          {/* image */}
          <div className="group relative overflow-hidden border-2 border-black/30 rounded-3xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img1}
              alt=""
            />
            {/* link */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a
                class="text-white/60 text-bold flex items-center gap-2 cursor-pointer"
                rel="noopener noreferrer"
                href="https://moonlight-events.netlify.app/"
                target="_blank"
              >
                Live Demo <HiArrowRight />
              </a>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white ">Moonlight</span>
            </div>
          </div>
          {/* image */}
          <div className="group relative overflow-hidden border-2 border-black/30 rounded-3xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img2}
              alt=""
            />
            {/* pre-title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a
                class="text-white/60 text-bold flex items-center gap-2 cursor-pointer"
                rel="noopener noreferrer"
                href="https://outbackers.adaptable.app/"
                target="_blank"
              >
                Live Demo <HiArrowRight />
              </a>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white ">Outbackers</span>
            </div>
          </div>
          {/* image */}
          <div className="group relative overflow-hidden border-2 border-black/30 rounded-3xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img3}
              alt=""
            />
            {/* pre-title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <a
                class="text-white/60 text-bold flex items-center gap-2 cursor-pointer"
                rel="noopener noreferrer"
                href="https://thalitadosreis.github.io/yoshi-run/"
                target="_blank"
              >
                Live Demo <HiArrowRight />
              </a>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white ">Yoshi Run</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
