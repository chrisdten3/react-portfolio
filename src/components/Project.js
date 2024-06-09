import React from 'react';
import './Project.css';

const Project = ({ imageSrc, projectName, projectLink, projectDescription }) => (
  <a href={projectLink} className="card">
    <div className="about-col-1">
      <img src={imageSrc} alt={projectName} />
    </div>
    <div className="about-col-2">
      <h2 className="work_name">{projectName}</h2>
      <p>{projectDescription}</p>
    </div>
  </a>
);

export default Project;
