import React from "react";

import "../../App.css";

import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume"; 
import Freelance from "./Freelance"; 


function Home() {
  return (
    <div class="wrap">
      <div id="work">
        <Projects />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="freelance">
        <Freelance />
      </div>
 
    </div>
  );
}

export default Home;
