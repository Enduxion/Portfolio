import Skills from "./Skills/Skills";
import Credits from "./Credits/Credits";
import Projects from "./Projects/Projects";
import Social from "../Description/Social/Social";

const DescriptionR = () => {
  return (
    <div className="flex flex-col justify-between lg:items-end lg:text-right h-full lg:w-1/2 sm:w-full lg:gap-0 sm:gap-16 lg:mt-0 sm:mt-16">
      <Skills />
      <Projects />
      <span className="flex flex-col sm:items-center lg:items-end">
        <span className="lg:il-rslide il-slide flex">
          Working since
        </span>
        <span className="lg:il-rslide il-slide text-primary-4 text-sm">
          [2018 - current]
        </span>
      </span>
      <div className="sm:block lg:hidden">
        <Social />
      </div>
      <Credits />
    </div>
  );
};

export default DescriptionR;
