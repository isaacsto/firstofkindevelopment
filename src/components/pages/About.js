import React from "react";
import "../../App.css";


function About() {
  return (

    <div class="container about">  
      <div className="about-body"> 
      <div className="main-about">
<h4 class="header-four">About Me</h4>
<p>
 I am a full-stack web developer with a unique foundation that spans English Literature, Creative Writing, Art History, Hospitality, and Team Management. This diverse background gives me the ability to approach problems with both technical precision and creative insight. I specialize in building secure, data-driven, and responsive applications that balance performance, usability, and design.
  </p>
  <p>
My technical expertise includes PHP, JavaScript, React, Node.js, REST APIs, MongoDB, SQL, HTML, and CSS, with a focus on creating scalable, mobile-first solutions. I am equally at home designing intuitive, user-friendly interfaces as I am engineering robust backend frameworks. Beyond development, I am deeply interested in the intersection of artificial intelligence, marketing, and creative tools such as digital audio workstations (DAWs) and plugins. To pursue this, I have earned certifications in Machine Learning, Artificial Intelligence, and Cybersecurity, and continue to expand my knowledge in these areas.
  </p>
  <p>You can contact me at isaacstofko@gmail.com</p>

</div>
      <div className="image-container">
          <img
            src="https://i.imgur.com/RhzT05R.jpg"
            alt="" 
            className="my-pic" width="150" 
          />
      </div>
    
  
  
        </div>
</div>

  );
}

export default About;
