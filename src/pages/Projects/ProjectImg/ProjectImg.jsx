import AsyncImg from "../../../functions/AsyncImg";

const ProjectImg = ({ currentProject }) => {
  return (
    currentProject.id !== -1 && (
      <div
        className="w-4/5 h-1/2 overflow-hidden flex items-center justify-center bg-gradient-to-r from-primary-4/20 to-primary-1/10 backdrop-blur-md rounded-tl-full hover:scale-105 duration-100 cursor-pointer"
        onClick={() => open(currentProject.link)}
      >
        <AsyncImg
          src={currentProject.img}
          className="object-cover w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-xl brightness-90 rounded-tl-full"
          draggable="false"
        />
      </div>
    )
  );
};
export default ProjectImg;
