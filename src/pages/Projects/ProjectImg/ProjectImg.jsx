const ProjectImg = ({ currentProject }) => {
  return (
    currentProject.id !== -1 && (
      <div
        className="lg:w-4/5 sm:w-full lg:h-1/2 overflow-hidden flex items-center justify-center bg-primary-4/20 lg:rounded-tl-full sm:rounded-none hover:scale-105 duration-100 cursor-pointer"
        onClick={() => open(currentProject.link)}
      >
        <img
          src={currentProject.img}
          className="object-cover w-[calc(100%-1rem)] h-[calc(100%-1rem)] lg:rounded-xl sm:rounded-none brightness-90 lg:rounded-tl-full"
          draggable="false"
        />
      </div>
    )
  );
};
export default ProjectImg;
