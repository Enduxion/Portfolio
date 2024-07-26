import twc from "../../../functions/twc";

const ScrollProject = ({ projectArr, currentProject, setCurrentProject }) => {
  return (
    <div className="flex flex-col w-full h-1/2 justify-center">
      <span className="text-lg font-bold il-slide">
        Projects [2018 - current]
      </span>
      <div className="flex flex-row w-full h-full">
        <div className="overflow-y-scroll hidden-scrollbar w-11/12">
          {projectArr.map((project, index) => (
            <span
              key={index}
              target="_blank"
              className="border-b-2 border-primary-4/50 py-4 px-0 flex flex-row justify-between duration-150 cursor-pointer il-slide"
              onMouseEnter={() => setCurrentProject({ id: index, ...project })}
              onMouseDown={() => setCurrentProject({ id: index, ...project })}
              style={{
                color:
                  index === currentProject.id
                    ? twc.colors.gold
                    : twc.colors.gray,
              }}
            >
              <span className="text-inherit">{project.name}</span>
              <span className="text-inherit">{project.group}</span>
            </span>
          ))}
        </div>
        <div className="flex flex-col h-full justify-center items-center w-1/12 gap-4">
          {Array.from(Array(projectArr.length).keys()).map((_, index) => (
            <i
              className={`${index === currentProject.id ? "fas fa-star text-primary-3" : "far fa-circle text-primary-4"} duration-150 cursor-pointer text-inherit text-[10px] il-slide`}
              key={index}
              onClick={() =>
                setCurrentProject({ id: index, ...projectArr[index] })
              }
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProject;
