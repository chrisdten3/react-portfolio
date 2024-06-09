import React from 'react';
import './Projects.css';
import Project from './Project';
import foodApp from '../images/foodMeSub.png';
import musicPlayer from '../images/musicPlayer.png';
import dashboard from '../images/dashboard.png';
import hoyamovies from '../images/hoyamovies.png';
import hey from '../images/hey.png'

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="sub-title">My Projects</h1>
        <div className="project-list">
          <Project
            imageSrc={dashboard}
            projectName="Charts"
            projectLink="https://charts-app-rpxz.onrender.com/"
            projectDescription="Financial Data Visulazation allowing users to find efficent distrubtions of their assets to maximize portfolio returns. Built with React, Python, Flask, and Axios"
          />
          <Project
            imageSrc={musicPlayer}
            projectName="Spotify Stats + Music Player Web App"
            projectLink="https://chrisdten3.github.io/music-player/"
            projectDescription="Developed a web app using React, TailwindCSS, NodeJS, Axios, and Spotify Web API. Seamlessly integrates with Spotify accounts as an in-browser music player, offering insights into users' listening histories."
          />
          <Project
            imageSrc={foodApp}
            projectName="FoodMe"
            projectLink="https://cs.georgetown.edu/news-story/cs-students-advance-to-top-100-teams-in-google-competition/"
            projectDescription="iOS and Android app built in Flutter submitted to the Google Student Solutions Challenge, addressing UN Sustainable Development Goals. It's a top 100 Global Finalist project integrating Google Maps API and Firebase cloud storage."
          />
          <Project
            imageSrc={hoyamovies}
            projectName="Movie Recommender Program"
            projectLink="https://chrisdten3-springcapstonefrontend-frontend-063sr5.streamlit.app/"
            projectDescription="Developed a movie recommender system using ML algorithms for the 2023 Hoyalytics Analytical Spring Capstone. Implemented Word2Vec for movie descriptions and user inputs."
          />
          <Project
            imageSrc={hey}
            projectName="Hey - Medication Assistant"
            projectLink="https://github.com/chrisdten3/Hey---Medication-Assistant"
            projectDescription="An iOS medication administration app built with Swift utilizing SwiftUI, Foundation, and Combine Frameworks."
          />
          {/* Add more projects here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;



