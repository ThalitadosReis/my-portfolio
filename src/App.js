import React from "react";

// components
import Banner from "./components/sections/Banner";
import Nav from "./components/layout/Nav";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/layout/Contact";

export default function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
