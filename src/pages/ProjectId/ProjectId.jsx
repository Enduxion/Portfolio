import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { bga, projectArr } from "../../resources/utils";
import twc from "../../functions/twc";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import VideoComponent from "../../components/VideoComponent/VIdeoComponent";
import Transition from "../../functions/Transition";

const ProjectId = () => {
  const { id } = useParams();
  const projectRefs = useRef([]);

  const [pid, setPid] = useState(projectArr.findIndex((project) => project.name.toLowerCase() === id.toLowerCase()));

  useEffect(() => {
    setPid(projectArr.findIndex((project) => project.name.toLowerCase() === id.toLowerCase()));
  }, [id]);

  useEffect(() => {
    if (pid !== -1 && projectRefs.current[pid]) {
      projectRefs.current[pid].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [pid]);

  return (
    <div className="section py-8 flex flex-col">
      <VideoComponent src={bga} />
      <div className="flex flex-col">
        <span className="font-bold text-xl">
          Projects are key to your development
        </span>
        <span className="text-primary-4">Here are some of my projects!</span>
        {projectArr.find((project) => project.name.toLowerCase() === id.toLowerCase()) === undefined && (
          <span className="text-primary-6">*'{id}' not found</span>
        )}
      </div>
      <div className="hidden-scrollbar flex flex-row overflow-x-scroll grow items-center gap-8">
        {projectArr.map((project, index) => (
          <ProjectCard
            ref={(el) => (projectRefs.current[index] = el)}
            setPid={() => setPid(index)}
            project={project}
            key={index}
            isCurrentlySelected={index === pid}
          />
        ))}
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        {Array.from(Array(projectArr.length).keys()).map((_, index) => {
          let isCurrent = false;
          if (index === pid) {
            isCurrent = true;
          }
          return (
            <motion.span
              onClick={() => setPid(index)}
              animate={{
                borderColor: isCurrent ? twc.colors.gold : twc.colors.gray,
                backgroundColor: isCurrent ? twc.colors.gold : 'transparent',
                width: isCurrent ? '1.75rem' : '0.75rem',
              }}
              className={`w-3 rounded-full h-3 border-2 cursor-pointer hover:border-4 duration-150`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Transition(ProjectId);
