import { Link, useParams } from "react-router-dom";
import { projectArr } from "../../resources/utils";
import { useEffect, useState } from "react";
import Transition from "../../functions/Transition";

const Project = ({ project }) => {
  return (
    <div className="section py-4">
      <span className="font-bold text-3xl">{project.name}</span>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-primary-4">{project.group}</span>
          <span className="">{project.desc}</span>
          <div className="flex flex-row gap-4">
            {project.tags.map((tag, index) => (
              <Link
                className="button"
                key={index}
                target="_blank"
                to={project.link}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <img src={project.img} className="w-1/2 h-1/2 " />
      </div>
    </div>
  );
};

const ProjectId = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    setCurrentProject(
      projectArr.find(
        (project) => project.name.toLowerCase() === id.toLowerCase()
      ) || null
    );
  }, [id]);

  return <>{currentProject ? <Project project={currentProject} /> : <></>}</>;
};

export default Transition(ProjectId);
