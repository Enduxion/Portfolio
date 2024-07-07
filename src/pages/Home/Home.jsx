import { FaCode, FaGamepad, FaGlobe } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="mt-16 p-4 flex w-full min-h-[calc(100vh-4rem)] items-center flex-row">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="text-7xl font-bold flex tracking-wider flex-col w-full">
          <span className="font-roboto text-5xl">Hi, I am</span>
          <span className="font-roboto text-primary-1">Pawan Gurung.</span>
        </div>
        <div className="font-roboto text-2xl flex gap-2 w-full flex-wrap text-justify">
          I am a web developer
          <FaGlobe className="animate-spin text-3xl mouse-affected" />, game developer{" "}
          <FaGamepad className="animate-bounce text-3xl mouse-affected" /> and a proficient
          programmer
          <FaCode className="animate-pulse text-3xl mouse-affected" />
          based in Nepal.
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
};

export default Home;
