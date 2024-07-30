import { Link } from "react-router-dom";
import { skillsData } from "../../../resources/utils.js";

const Skills = () => {
  return (
    <div className="w-full h-1/3 flex justify-center flex-col">
      <span className="font-bold text-lg il-rslide">My Technical Skills</span>
      <div className="flex flex-row flex-wrap gap-2 lg:justify-end sm:justify-start">
        {skillsData.map((skill, index) => (
          <Link
            target="_blank"
            to={skill.to}
            key={index}
            className="il-rslide mt-2 button"
          >
            <i className={`${skill.icon} text-inherit text-sm`}></i>
            {skill.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skills;
