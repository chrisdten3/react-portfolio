import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {ReactTyped} from 'react-typed';
import './Header.css';

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <ul>
            <li className="btn"><a href="#header">Home</a></li>
            <li className="btn"><a href="#about">About Me</a></li>
            <li className="btn"><a href="#projects">Projects</a></li>
            <li className="btn"><a href="#tools">Tools</a></li>
            <li className="button"><a href="mailto:cdt50@georgetown.edu">Contact Me <i className="fa-regular fa-paper-plane"></i></a></li>
            <li className="button"><a href="cdt50_f23_Resume_current.pdf" download="ChrisTengey_Resume">Resume <i className="fa-solid fa-arrow-down-long"></i></a></li>
          </ul>
        </nav>
        <div className="header-text">
          <h1>Hi I'm <ReactTyped strings={["Chris.", "a student.", "a developer."]} typeSpeed={70} backSpeed={60} loop={true} /></h1>
          <div className="social">
            <a href="https://www.linkedin.com/in/christopher-tengey-12555b24a/"><FaLinkedin /></a>
            <a href="https://github.com/chrisdten3"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

