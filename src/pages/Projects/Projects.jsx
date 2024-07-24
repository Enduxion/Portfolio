import { Link } from "react-router-dom";
import Transition from "../../functions/Transition";
import { projectArr } from "../../resources/utils.js";
import { useState } from "react";
import twc from "../../functions/twc.js";
import { motion } from "framer-motion";
import AsyncImg from "../../functions/AsyncImg";
import { bgp } from "../../resources/utils.js";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState({
    id: 0,
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
        <div className="flex h-1/2 flex-col w-full text-justify">
          <span className="text-lg font-bold">Projects</span>
          <div className="">
            Having recently graduated in 2024, I have completed numerous
            projects during my student years. Now, I am fully dedicated to
            focusing on my future projects, leveraging my experience and passion
            for continuous learning and innovation. As I transition into this
            new phase, my commitment to excellence and creativity drives me to
            explore new opportunities and challenges.
          </div>
        </div>
        <div className="flex flex-col w-full h-1/2 justify-center">
          <span className="text-lg font-bold">Projects [2018 - current]</span>
          <div className="overflow-y-scroll hidden-scrollbar ">
            {projectArr.map((project, index) => (
              <Link
                to={project.link}
                key={index}
                target="_blank"
                className="border-b-2 border-primary-4/50 py-4 px-0 flex flex-row justify-between duration-150"
                onMouseEnter={() =>
                  setCurrentProject({ id: index, ...project })
                }
                style={{
                  color:
                    index === currentProject.id
                      ? twc.colors.gold
                      : twc.colors.gray,
                }}
              >
                <span className="text-inherit">{project.name}</span>
                <span className="text-inherit">{project.group}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="w-1/2 flex flex-col h-full items-end"
        key={currentProject.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: {duration: 0.6} }}
      >
        <div className="w-full h-1/2 flex flex-col">
          <span className="text-primary-3 text-right font-bold text-lg">
            {currentProject.name}
          </span>
          <span className="text-right flex flex-col gap-4 items-end">
            {currentProject.desc}
            <div className="flex justify-end flex-row flex-wrap gap-4 w-2/3">
              {currentProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary-2 text-primary-1 px-3 border-2 py-1 rounded-md w-fit border-primary-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </span>
        </div>
        <div className="w-4/5 h-1/2 overflow-hidden flex shadow-[inset_0_0_5px_5px_black] bg-primary-2 bg-opacity-20 rounded-tl-full">
          <AsyncImg src={currentProject.img} className="object-cover w-full -z-[1] rounded-tl-full border-2 border-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export default Transition(Projects);
