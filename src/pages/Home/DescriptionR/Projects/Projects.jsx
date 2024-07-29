import { Link } from "react-router-dom";
const Projects = () => {
  const projects = [
    {
      name: "Website for coding technology",
      path: "https://codingtechnology.netlify.app",
    },
    {
      name: "Chess using C++ & SFML",
      path: "https://www.github.com/Enduxion/Chess.git",
    },
  ];
  return (
    <span className="flex flex-col lg:items-end sm:items-center">
      <span className="lg:il-rslide il-slide flex lg:justify-end">
        My Projects
      </span>
      {projects.map((project, idx) => (
        <Link
          target="_blank"
          to={project.path}
          key={idx}
          className="lg:il-rslide il-slide w-fit text-primary-4 text-sm hover:brightness-150"
        >
          {project.name}
        </Link>
      ))}
    </span>
  );
};

export default Projects;
