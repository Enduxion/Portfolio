import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ProjectCard = forwardRef(({ project, setPid, isCurrentlySelected }, ref) => {
  return (
    <div
      ref={ref}
      className={`lg:w-1/3 sm:w-10/12 flex flex-col shrink-0 h-fit bg-gradient-to-tr from-primary-2/70 to-primary-2/90 p-4 rounded-3xl backdrop-blur-md gap-2 cursor-pointer border-2 ${isCurrentlySelected ? "border-primary-3/50" : "border-primary-4/20"}`}
      id={project.name}
      onClick={setPid}
    >
      <img className="rounded-lg" src={project.img} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <span className="font-bold text-lg">{project.name}</span>
          <span className="text-primary-4">{project.group}</span>
        </div>
        <div className="text-justify text-primary-1/90 line-clamp-2">
          {project.desc}
        </div>
        <Link to={project.link} className="button hover:font-bold">
          <span className="text-inherit">Visit Project</span>
          <span className="fa fa-arrow-right text-sm text-inherit" />
        </Link>
      </div>
    </div>
  );
});

export default ProjectCard;
