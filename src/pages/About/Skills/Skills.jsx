import { Link } from "react-router-dom";
import { skillsData } from "../../../resources/utils";

const Skills = () => {
  return (
    <div className="w-full h-1/3 flex justify-center flex-col">
      <span className="font-bold text-lg">My Technical Skills</span>
      <div className="flex flex-row flex-wrap gap-2 justify-end">
        {skillsData.map((skill, index) => (
          <Link
            to={skill.to}
            key={index}
            className="il-slide bg-primary-2 text-primary-1 mt-2 px-3 gap-2 flex border-2 items-center justify-center py-1 rounded-md w-fit border-primary-1 hover:bg-primary-1/90 hover:text-primary-2 duration-100"
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
