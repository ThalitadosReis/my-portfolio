import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-end my-10">
          <span className="absolute text-black-/50 text-xs uppercase">
            About me
          </span>
          <div className="flex items-center w-full gap-3">
            <div className="relative w-10 h-10 transform rotate-45 border border-black/10 flex items-center justify-center rounded-lg">
              <span className="transform -rotate-45 text-sm">01</span>
            </div>
            <div className="flex-grow border-t border-black/10"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="uppercase text-[30px] lg:text-[45px] leading-[1] text-center lg:text-left lg:break-words lg:whitespace-pre-wrap">
              I use my {"\n"}background in {"\n"}
              <span className="font-newyork font-normal">Hospitality </span>to build
              <span className="font-newyork font-normal"> customer-focused </span>
              solutions.
            </h1>
          </div>
          <div className="flex-1 text-base text-justify">
            <p>
              I am a full-stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Node.js, Express, MongoDB, HTML,
              CSS, and Git. I am a quick learner and always looking to expand my
              knowledge and skill set. I thrive in collaborative environments
              and am excited to work with others to create amazing applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
