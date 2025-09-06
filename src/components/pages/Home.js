import React from "react";

import "../../App.css";

import About from "./About";
import Projects from "./Projects";
import Freelance from "./Freelance"; 
import Contact from "./Contact";

function Home() {
  return (
    <div class="wrap">
      <div id="work">
        <Projects />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="freelance">
        <Freelance />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
