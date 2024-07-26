const ProjectDesc = ({ currentProject }) => {
  return (
    <div className="w-full h-1/2 flex flex-col">
      <span className="text-primary-3 text-right font-bold text-lg il-rslide">
        {currentProject.id !== -1
          ? currentProject.name
          : "Hover over a project to view its details."}
      </span>
      <span className="text-right flex flex-col gap-4 items-end">
        {currentProject.id !== -1 && currentProject.desc}
        <div className="flex justify-end flex-row flex-wrap gap-4 w-2/3">
          {currentProject.id !== -1 &&
            currentProject.tags.map((tag, index) => (
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
  );
};

export default ProjectDesc;
