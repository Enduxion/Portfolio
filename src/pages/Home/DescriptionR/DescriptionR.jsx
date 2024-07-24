import { Link } from "react-router-dom";

const DescriptionR = () => {
  const perks = ["Web developer", "Game developer"];
  const projects = [
    { name: "Website for coding technology", path:"https://codingtechnology.netlify.app" },
    { name: "Chess using C++ & SFML", path:"https://www.github.com/Enduxion/Chess.git" },
  ];
  return (
    <div className="flex flex-col justify-between items-end text-right h-full w-1/2">
      <span className="flex flex-col">
        <span className="il-rslide flex justify-end">My Skills</span>
        {perks.map((perk, idx) => (
          <span key={idx} className="il-rslide text-primary-4 text-sm">
            {perk}
          </span>
        ))}
      </span>
      <span className="flex flex-col items-end">
        <span className="il-rslide flex justify-end">My Projects</span>
        {projects.map((project, idx) => (
          <Link target="_blank" to={project.path} key={idx} className="il-rslide w-fit text-primary-4 text-sm hover:brightness-150">
            {project.name}
          </Link>
        ))}
      </span>
      <span className="flex flex-col">
        <span className="il-rslide flex justify-end">Working since</span>
        <span className="il-rslide text-primary-4 text-sm">[2018 - current]</span>
      </span>
      <span className="il-rslide flex flex-col items-end text-sm">
        <Link className="text-primary-4 hover:text-primary-3 w-fit font-roboto">Pawan Gurung</Link>
        <span className="text-primary-5 font-roboto">Copyright &copy; {new Date().getFullYear()}. All rights reserved.</span>
        <Link to="/credits" className="text-primary-4 hover:brightness-150 font-roboto text-[12px]">Credits</Link>
      </span>
    </div>
  );
};

export default DescriptionR;
