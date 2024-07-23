import { Link } from "react-router-dom";
import { socialArr } from "../../../resources/utils";

const Description = ({ routes }) => {
  const myNameArr = "Pawan Gurung".split("");
  return (
    <div className="flex flex-col gap-8 justify-evenly h-full w-1/2">
      <div className="flex flex-col">
        <span className="il-slide flex text-3xl font-extrabold drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] cursor-pointer w-fit">
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
        <span className="text-primary-4 il-slide flex">
          Experienced Web Developer and Mathematics Enthusiast
        </span>
        <Link
          to="/cv.pdf"
          className="il-slide bg-primary-2 text-primary-1 mt-2 px-3 gap-2 flex border-2 items-center justify-center py-1 rounded-md w-fit border-primary-1 hover:bg-primary-1/90 hover:text-primary-2 duration-100"
        >
          <i className="far fa-file text-inherit text-sm"></i>
          My CV
        </Link>
      </div>
      <span className="flex flex-col">
        {routes.map((route, idx) => (
          <Link
            key={idx}
            to={route.path}
            className="il-slide gap-1 flex items-baseline text-primary-4 hover:brightness-150 duration-75 transition-[filter_gap] hover:gap-2 w-fit"
          >
            <i className="fas fa-angle-right text-[10px] text-primary-4"></i>
            {route.name}
            <span className="comment">/* {route.desc} */</span>
          </Link>
        ))}
      </span>
      <div className="flex justify-self-end gap-2 flex-col">
        <span className="il-slide">Social media links</span>
        <span className="flex flex-row gap-4">
          {socialArr.map((social, idx) => (
            <Link
              key={idx}
              to={social.link}
              className="il-slide flex gap-2 text-primary-4 w-fit items-center hover:brightness-150 duration-75 transition-[filter]"
            >
              <i className={social.icon + " text-primary-4"}></i>
              {social.name}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Description;
