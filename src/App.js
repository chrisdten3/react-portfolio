import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation - Enhanced with hover animations */}
      <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CT
              </span>
            </motion.div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
              {['Home', 'Projects', 'Courses', 'Other', 'Tools'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={600} 
                    className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
                <motion.a
                  href="mailto:cdt50@georgetown.edu"
                  className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
                <motion.a
                  href="/ChristopherTengeySummer24.pdf"
                  download="ChrisTengey_Resume"
                  className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-6">
              Hi I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              <ReactTyped
                strings={["Chris.", "a student.", "a developer."]}
                typeSpeed={70}
                backSpeed={60}
                loop={true}
              />
            </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-400 mb-8"
            >
              My name is Christopher Tengey, and I am a junior at Georgetown University studying Computer Science and Mathematics. I am passionate about software development, data science, and machine learning.
            </motion.p>
            <motion.div 
              className="flex justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/christopher-tengey-12555b24a/" className="text-5xl hover:text-blue-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://github.com/chrisdten3" className="text-5xl hover:text-purple-500 transition-colors">
                <FaGithub />
              </a>
            </div>
            </motion.div>
          </motion.div>
        </div>


          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-30" />
          </div>
            </section>

            <section id="projects" className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Things I Have Built
          </motion.h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <motion.a
                key={project.name}
                href={project.link}
                className="block bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-center mt-6">
                  <img src={`/projects/${project.image}`} alt={project.name} className="object-cover w-1/2 rounded-md" />
                </div>
                <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
              {project.name}
            </h3>
            <p className="text-gray-400">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
              </div>
            </section>

      <section id="courses" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Relevant Coursework
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <motion.div
                key={course.code}
                className="bg-gray-800 rounded-lg p-6 hover:ring-2 hover:ring-blue-500 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-400">{course.code}</h3>
                <p className="text-xl font-medium mb-3">{course.name}</p>
                <p className="text-gray-400 text-sm">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Other Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <motion.a
                key={project.name}
                href={project.link}
                target={project.isDownloadable ? "_self" : "_blank"}
                rel={project.isDownloadable ? undefined : "noopener noreferrer"}
                download={project.isDownloadable ? project.link : undefined}
                className="block bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="tools" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Tools & Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category) => (
              <motion.div
                key={category.title}
                className="bg-gray-800 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-blue-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-center">
        <p className="text-gray-400">
          &copy; 2025 Christopher Tengey. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const projects = [
  {
    "name": "Guia",
    "description": "A developer tool that helps senior engineers onboard new hires quickly using AI-driven tools to understand and teach codebases. Features interactive exercises, hierarchy views, and personalized learning.",
    "link": "N/A",
    "image": "guia.png"
  },
  {
    "name": "Charts",
    "description": "Financial Data Visualization allowing users to find efficient distributions of their assets to maximize portfolio returns. Built with React, Python, Flask, and Axios.",
    "link": "https://charts-app-rpxz.onrender.com/",
    "image": "charts.png"
  },
  {
    "name": "Spotify Stats + Music Player",
    "description": "Web app using React, TailwindCSS, NodeJS, Axios, and Spotify Web API. Seamlessly integrates with Spotify accounts as an in-browser music player.",
    "link": "https://chrisdten3.github.io/music-player/",
    "image": "spotify-player.png"
  },
  {
    "name": "FoodMe",
    "description": "iOS and Android app built in Flutter, submitted to the Google Student Solutions Challenge. A top 100 Global Finalist project integrating Google Maps API and Firebase cloud storage.",
    "link": "https://cs.georgetown.edu/news-story/cs-students-advance-to-top-100-teams-in-google-competition/",
    "image": "foodme.png"
  },
  {
    "name": "Movie Recommender Program",
    "description": "Developed a movie recommender system using ML algorithms for the 2023 Hoyalytics Analytical Spring Capstone. Implemented Word2Vec for movie descriptions and user inputs.",
    "link": "https://chrisdten3-springcapstonefrontend-frontend-063sr5.streamlit.app/",
    "image": "movie.png"
  },
];

const courses = [
  {
    name: "Advanced Programming",
    description: "Advanced programming concepts using Java, including inheritance, polymorphism, and design patterns."
  },
  {
    name: "Data Structures",
    description: "Implementation and analysis of fundamental data structures and algorithms."
  },
  {
    name: "Algorithms",
    description: "Advanced algorithms, complexity analysis, and problem-solving strategies."
  },
  {
    name: "Programming Languages",
    description: "Syntax, grammar, parsing, and semantics of programming languages."
  },
  {
    name: "Introduction to Maching Learning",
    description: "Introduction to search algorithms, bayesian networks, neural networks, and reinforcement learning."
  },
  {
    name: "Deep Learning",
    description: "Advanced neural network architectures, optimization algorithms, and applications."
  }, 
  {
    name: "Discrete Math",
    description: "Mathematical logic, set theory, combinatorics, and graph theory."
  },
  {
    name: "Linear Algebra",
    description: "Matrix algebra, vector spaces, linear transformations, and eigenvalues."
  },
  {
    name: "Applied Time Series Analysis",
    description: "Time series analysis, forecasting, and modeling."
  },
  {
    name: "Intro to Mathematical Statistics",
    description: "Descriptive statistics, probability distributions, hypothesis testing, and regression."
  },
  {
    name: "Multi-Variable Calculus",
    description: "Calculus of functions of several variables, partial derivatives, and multiple integrals."
  },
  {
    name: "Ordinary Differential Equations",
    description: "First-order equations, second-order equations, linear equations."
  }
];

const otherProjects = [
  {
    name: "Raced-Based Epistemologies in Tech-Focused Centers",
    description: "A report on the effects of white ignorance on technological innovations and the intrinsic biases that arise from improper racial representation.",
    link: "RaceBasedEpistemologies.pdf",
    isDownloadable: true
  },
  {
    name: "Lengua.io Medium Article",
    description: "An introduction to Lengua.io, a search engine for language learners built on top of Gensim and Word2Vec.",
    link: "https://medium.com/hoyalytics/lengua-io-and-an-introduction-to-word2vec-6338ed74f91a",
    isDownloadable: false
  }
];



const skills = [
  {
    title: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "Dart", "Swift", "HTML/CSS", "SQL"]
  },
  {
    title: "Developer Tools",
    items: ["Git", "React", "NextJS", "Node.JS", "Firebase", "AWS", "VS Code",  "Tableau", "Flutter"]
  },
  {
    title: "Libraries/Frameworks",
    items: ["Pandas", "NumPy", "Matplotlib", "Tensorflow", "Gensim", "Streamlit", "Selenium", "BeautifulSoup"]
  }
];

export default App;