// src/components/Projects/Projects.jsx
import './Projects.css';
import ProjectCard from './ProjectCard';
import Dog from '../../assets/Dog.png';
import Port from '../../assets/Port.png';
import Weather from '../../assets/Weatherapp.png';

function Projects() {
  const projectList = [
    {
      title: 'Store Apps',
      description: 'This made from react and css so you can see them in Live Demo.',
      image: Dog,
      demo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1',
      code: 'https://github.com/JessadaInta?tab=repositories',
    },
    {
      title: 'Weather App',
      description: 'You can check weather every where you want.',
      image: Weather,
      demo: 'https://jessadainta.github.io/weather-app/index.html',
      code: 'https://github.com/https://github.com/JessadaInta?tab=repositoriesyourname/ecommerce',
    },
    {
      title: 'Portfolio Website',
      description: 'My own portfolio website.',
      image: Port,
      demo: 'https://www.roblox.com/home',
      code: 'https://github.com/yhttps://github.com/JessadaInta?tab=repositoriesourname/chat-app',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
