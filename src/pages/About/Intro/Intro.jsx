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
        target="_blank"
        to="/cv.pdf"
        className="il-slide mt-2 button"
      >
        <i className="far fa-file text-inherit text-sm"></i>
        My CV
      </Link>
      <Link
        target="_blank"
        to="https://www.github.com/enduxion"
        className="il-slide mt-2 button"
      >
        <i className="fab fa-github text-inherit text-sm"></i>
        Github
      </Link>
    </div>
  </div>
  );
}

export default Intro;