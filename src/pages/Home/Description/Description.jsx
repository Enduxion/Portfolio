import { Link } from "react-router-dom";

const Description = ({ routes }) => {
  const myNameArr = "Pawan Gurung".split("");
  return (
    <div className="flex flex-col tracking-widest gap-8 justify-center h-full w-1/2">
      <div className="">
        <span className="il-slide flex text-3xl font-extrabold drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] cursor-pointer">
          {myNameArr.map((letter, idx) => (
            <span
              key={idx}
              className={`duration-100 text-primary-4 ${
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
          Programmer and Mathematics Enthusiast
        </span>
      </div>
      <span className="flex flex-col w-fit">
        {routes.map((route, idx) => (
          <Link
            key={idx}
            to={route.path}
            className="il-slide gap-1 flex items-baseline text-primary-4 hover:brightness-150 duration-75 transition-[filter]"
          >
            <i className="fas fa-angle-right text-[10px] text-primary-4"></i>
            {route.name}
            <span className="comment">/* {route.desc} */</span>
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Description;
