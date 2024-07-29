import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Menu from "../Menu/Menu";

const Navbar = ({ routes }) => {
  const [index, setIndex] = useState(-1);
  const [openMenu, setOpenMenu] = useState(false);

  useGSAP(() => {
    if (index !== -1) {
      gsap.to(".animate-text", {
        opacity: 0.4,
        duration: 0.075,
        ease: "power1.out",
      })
    } else {
      gsap.to(".animate-text", {
        opacity: 1,
        duration: 0.075,
        ease: "power1.out",
      })
    }
  }, [index]);

  return (
    <nav className="nav w-full h-nav fixed top-0 left-0 border-b border-gray-800 px-4 py-2 flex flex-row items-center justify-between bg-opacity-50 bg-black backdrop-blur-sm z-50">
      <Link to="/" className="lg:text-2xl cursor-pointer text-primary-1 hover:text-primary-3 duration-300 hover:tracking-wide font-euro tracking-widest sm:text-md">
        Endux
      </Link>
      <div className="lg:flex flex-row gap-8 md:hidden sm:hidden">
        {routes.map((route, idx) => (
          <Link
            to={route.path}
            key={route.path}
            className={`capitalize tracking-wide text-primary-4 hover:text-primary-1 duration-100 ${index !== idx && "animate-text"}`}
            onMouseEnter={() => setIndex(idx)}
            onMouseLeave={() => setIndex(-1)}
          >
            {route.name}
          </Link>
        ))}
      </div>
      <motion.span
        className="fa fa-bars lg:hidden sm:block text-lg"
        onClick={() => setOpenMenu(true)}
        whileTap={{ scale: 0.75 }}
      />
      <AnimatePresence>
        {
          openMenu && <Menu routes={routes} setOpenMenu={setOpenMenu} />
        }
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
