import Transition from "../../functions/Transition";
import { projectArr, bgp } from "../../resources/utils.js";
import { useState } from "react";
import { motion } from "framer-motion";

import Intro from "./Intro/Intro";
import ScrollProject from "./ScrollProject/ScrollProject";
import ProjectDesc from "./ProjectDesc/ProjectDesc";
import ProjectImg from "./ProjectImg/ProjectImg";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState({
    id: -1,
    ...projectArr[0],
  });
  return (
    <div className="section flex flex-row gap-8 py-8">
      <video
        className="w-full h-screen object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgp} type="video/mp4" />
      </video>
      <div className="w-1/2 flex flex-col h-full">
        <Intro />
        <ScrollProject projectArr={projectArr} currentProject={currentProject} setCurrentProject={setCurrentProject} />
      </div>
      <motion.div
        className="w-1/2 flex flex-col h-full items-end"
        key={currentProject.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.6 } }}
      >
        <ProjectDesc currentProject={currentProject} />
        <ProjectImg currentProject={currentProject} />
      </motion.div>
    </div>
  );
};

export default Transition(Projects);
