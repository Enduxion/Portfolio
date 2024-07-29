import { Link } from "react-router-dom";

const Intro = () => {
  const myNameArr = "Pawan Gurung".split("");
  return (
    <div className="flex flex-col lg:items-start sm:items-center w-full lg:gap-0 sm:gap-2 lg:h-auto sm:justify-center sm:h-anav">
      <span className="il-slide flex text-3xl font-extrabold drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] cursor-pointer w-fit justify-center lg:justify-normal">
        {myNameArr.map((letter, idx) => (
          <span
            key={idx}
            className={`duration-100 text-primary-4 hover:text-primary-3 ${
              letter === " " && "m-1"
            }`}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "";
            }}
          >
            {letter}
          </span>
        ))}
      </span>
      <span className="text-primary-4 il-slide flex sm:text-xs lg:text-left sm:text-center">
        Experienced Web Developer and Mathematics Enthusiast
      </span>
      <Link target="_blank" to="/cv.pdf" className="il-slide mt-2 button">
        <i className="far fa-file text-inherit text-sm"></i>
        My CV
      </Link>
    </div>
  );
};

export default Intro;
