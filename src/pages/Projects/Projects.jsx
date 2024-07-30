import Transition from "../../functions/Transition";
import { projectArr, bgp } from "../../resources/utils.js";
import { useState } from "react";
import { motion } from "framer-motion";

import Intro from "./Intro/Intro";
import ScrollProject from "./ScrollProject/ScrollProject";
import ProjectDesc from "./ProjectDesc/ProjectDesc";
import ProjectImg from "./ProjectImg/ProjectImg";
import VideoComponent from "../../components/VideoComponent/VIdeoComponent";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState({
    id: -1,
    ...projectArr[0],
  });
  return (
    <div className="mt-nav sm:h-auto lg:h-anav px-4 tracking-widest flex lg:flex-row sm:flex-col gap-8 py-8">
      <VideoComponent src={bgp} />
      <div className="lg:w-1/2 sm:w-full flex flex-col sm:gap-8 lg:gap-0 lg:h-full sm:h-auto lg:justify-between">
        <Intro />
        <ScrollProject projectArr={projectArr} currentProject={currentProject} setCurrentProject={setCurrentProject} />
      </div>
      <motion.div
        className="lg:w-1/2 sm:w-full lg:flex flex-col sm:h-auto lg:h-full lg:items-end sm:items-start lg:gap-0 sm:gap-4 sm:min-h-fit lg:min-h-max sm:hidden"
        key={currentProject.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
      >
        <ProjectDesc currentProject={currentProject} />
        <ProjectImg currentProject={currentProject} />
      </motion.div>
    </div>
  );
};

export default Transition(Projects);
