import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="w-full h-1/2 flex flex-col justify-evenly">
    <span className="font-bold text-lg il-slide">Who am I?</span>
    <div className="il-slide">
      Hi, I'm Pawan Gurung, also known as Endux online. As a seasoned web developer and game developer based in Nepal, I specialize in creating dynamic websites and engaging games. My passion for mathematics drives my continuous learning and innovation in the tech field.
    </div>
    <div className="flex flex-row gap-4">
      <Link
        to="/cv.pdf"
        className="il-slide bg-primary-2 text-primary-1 mt-2 px-3 gap-2 flex border-2 items-center justify-center py-1 rounded-md w-fit border-primary-1 hover:bg-primary-1/90 hover:text-primary-2 duration-100"
      >
        <i className="far fa-file text-inherit text-sm"></i>
        My CV
      </Link>
      <Link
        to="https://www.github.com/enduxion"
        className="il-slide bg-primary-2 text-primary-1 mt-2 px-3 gap-2 flex border-2 items-center justify-center py-1 rounded-md w-fit border-primary-1 hover:bg-primary-1/90 hover:text-primary-2 duration-100"
      >
        <i className="fab fa-github text-inherit text-sm"></i>
        Github
      </Link>
    </div>
  </div>
  );
}

export default Intro;