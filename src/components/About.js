import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        {/* title */}
        <div className="flex flex-col items-center text-center lg:mb-2">
          <h3 className="h3">Get To Know More</h3>
          <h2 className="h2">About Me</h2>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
          {/* image */}
          <div className="flex-1 bg-about bg-cover bg-top bg-no-repeat max-h-[350px] max-w-[350px] lg:min-w-[450px] lg:min-h-[450px] md:min-h-[275px] md:min-w-[275px] mx-auto rounded-3xl grayscale"></div>
          {/* text */}
          <div className="flex-1 flex flex-col lg:my-auto">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
