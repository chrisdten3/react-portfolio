import React from 'react';
import './About.css';
import me from '../images/MeLinkedin.jpeg';
import newFoodMe from '../images/newFoodMe.png';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="about-col-1">
          <img src={me} alt="Chris Ten" />
        </div>
        <div className="about-col-2">
          <h1 className="sub-title">About Me</h1>
          <p>
            Originally from Hagerstown, Maryland, I am double majoring in Computer Science (BS) and Mathematics (BA) at Georgetown University. I am interested in a broad scope of technical toolkits, basically everything from UI/UX design to machine learning algorithms.
            <br />
            Alongside my passion for development, I am very interested in the study of how technology is changing our world, especially in political and sociological spaces.
            <br />
            I am proficient in Python for data analysis and building ML models. I have experience in Swift, Flutter, and React for mobile and web development. For cloud computing, I am comfortable utilizing toolkits such as AWS and GCP.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
