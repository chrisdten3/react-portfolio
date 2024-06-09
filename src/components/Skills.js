import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id="tools" className="skills-container">
      <h1>Tools</h1>
      <div className="skills-list">
        <div className="category">
          <h2>Languages</h2>
          <ul>
            <li><span className="skill">C++</span></li>
            <li><span className="skill">Python</span></li>
            <li><span className="skill">Java</span></li>
            <li><span className="skill">JavaScript</span></li>
            <li><span className="skill">Dart</span></li>
            <li><span className="skill">Swift</span></li>
            <li><span className="skill">HTML/CSS</span></li>
            <li><span className="skill">SQL</span></li>
          </ul>
        </div>
        <div className="category">
          <h2>Developer Tools</h2>
          <ul>
            <li><span className="skill">Git</span></li>
            <li><span className="skill">React</span></li>
            <li><span className="skill">NextJS</span></li>
            <li><span className="skill">Node.JS</span></li>
            <li><span className="skill">Google Firebase</span></li>
            <li><span className="skill">AWS</span></li>
            <li><span className="skill">VS Code</span></li>
            <li><span className="skill">XCode</span></li>
            <li><span className="skill">Tableau</span></li>
            <li><span className="skill">Flutter</span></li>
          </ul>
        </div>
        <div className="category">
          <h2>Libraries/Frameworks</h2>
          <ul>
            <li><span className="skill">Pandas</span></li>
            <li><span className="skill">NumPy</span></li>
            <li><span className="skill">Matplotlib</span></li>
            <li><span className="skill">Tensorflow</span></li>
            <li><span className="skill">Gensim</span></li>
            <li><span className="skill">Streamlit</span></li>
            <li><span className="skill">Selenium</span></li>
            <li><span className="skill">BeautifulSoup</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
