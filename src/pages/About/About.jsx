import { useRef } from "react";
import { Helmet } from "react-helmet";

import { bga, bgAud, pfpImg } from "../../resources/utils.js";
import Transition from "../../functions/Transition";

import Education from "./Education/Education";
import Intro from "./Intro/Intro";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Attribution from "./Attribution/Attribution";

const About = () => {
  const musicRef = useRef(null);
  return (
    <div className="section flex p-4 overflow-hidden relative">
      <Helmet>
        <title>Endux | About</title>
      </Helmet>
      <video
        className="w-full h-screen object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bga} type="video/mp4" />
      </video>
      <audio
        ref={musicRef}
        className="absolute top-0 left-0 hidden"
        loop
        src={bgAud}
      />
      <div className="w-1/2 h-full flex flex-col gap-4">
        <Intro />
        <Education />
      </div>
      <div className="w-1/2 h-full flex flex-col text-right gap-4">
        <div className="w-full h-1/3 flex items-center justify-end il-rslide">
          <Attribution musicRef={musicRef} />
          <img
            className="h-full rounded-2xl w-fit border-2 border-gray-800 saturate-0 hover:saturate-100 cursor-pointer hover:scale-105 duration-100"
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
