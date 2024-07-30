import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";

import { bga, bgAud, pfpImg } from "../../resources/utils.js";
import Transition from "../../functions/Transition";

import Education from "./Education/Education";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Attribution from "./Attribution/Attribution";
import VideoComponent from "../../components/VideoComponent/VIdeoComponent.jsx";

const About = () => {
  const musicRef = useRef(null);
  return (
    <div className="section flex lg:flex-row sm:flex-col py-8 sm:overflow-y-auto lg:overflow-y-auto overflow-x-hidden sm:gap-8">
      <Helmet>
        <title>Endux | About</title>
      </Helmet>
      <VideoComponent src={bga} />
      <audio
        ref={musicRef}
        className="absolute top-0 left-0 hidden"
        loop
        src={bgAud}
      />
      <div className="lg:w-1/2 sm:w-full h-full flex flex-col lg:gap-4 sm:gap-8">
        <Intro />
        <Education />
      </div>
      <div className="lg:w-1/2 sm:w-full h-full flex flex-col lg:text-right sm:text-left lg:gap-4 sm:gap-8">
        <div className="w-full sm:h-3/5 lg:h-1/3 flex sm:flex-col-reverse lg:flex-row items-center justify-end il-rslide">
          <Attribution musicRef={musicRef} />
          <img
            className="sm:h-3/5 lg:h-full rounded-2xl border-2 border-gray-800 saturate-0 hover:saturate-100 cursor-pointer hover:scale-105 duration-100"
            src={pfpImg}
            draggable="false"
            alt="A picture of myself"
          />
        </div>
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Transition(About);
