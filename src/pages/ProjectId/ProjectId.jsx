import { useParams } from "react-router-dom";
import { projectArr } from "../../resources/utils";
import Transition from "../../functions/Transition";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectId = () => {
  const { id } = useParams();

  return (
    <div className="section py-8 flex flex-col">
      <div className="flex flex-col">
        <span className="font-bold text-xl">
          Projects are key to your development
        </span>
        <span className="text-primary-4">Here are some of my projects!</span>
      </div>
      <div className="hidden-scrollbar flex flex-row overflow-x-scroll grow items-center gap-4">
        {projectArr.map((project, index) => (
          <ProjectCard project={project} key={index} isCurrentlySelected={project.name.toLowerCase() === id.toLowerCase()} />
        ))}
      </div>
    </div>
  );
};

export default Transition(ProjectId);
