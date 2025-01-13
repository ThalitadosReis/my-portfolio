import React from "react";

// components
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

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
