import { Link } from "react-router-dom";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = ({ routes }) => {
  const [index, setIndex] = useState(-1);

  useGSAP(() => {
    if (index !== -1) {
      gsap.to(".animate-text", {
        opacity: 0.4,
        duration: 0.3,
        ease: "power1.out",
      })
    } else {
      gsap.to(".animate-text", {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      })
    }
  }, [index]);

  return (
    <div className="w-full fixed top-0 left-0 border-b border-gray-800 px-4 py-2 flex flex-row items-center justify-between">
      <span className="text-xl cursor-pointer text-primary-1 hover:text-primary-3 font-roboto">
        pawan
      </span>
      <div className="flex flex-row gap-8">
        {routes.map((route, idx) => (
          <Link
            to={route.path}
            key={route.path}
            className={`capitalize text-primary-1 ${index !== idx && "animate-text"}`}
            onMouseEnter={() => setIndex(idx)}
            onMouseLeave={() => setIndex(-1)}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
