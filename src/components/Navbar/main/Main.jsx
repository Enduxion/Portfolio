import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Main = ({ routes, showNavbar, closeNavbar }) => {
  return (
    <motion.div
      className="w-1/5 max-h-screen h-screen bg-primary-1 fixed top-0 left-0 flex flex-col p-2 z-50"
      initial={{ x: "-100%", borderRadius: "100%" }}
      animate={{
        x: showNavbar ? 0 : "-100%",
        borderRadius: showNavbar ? 0 : "100%",
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <motion.div 
        className="cursor-pointer bg-secondary-2 rounded h-fit w-fit"
        animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -20 }}
        transition={{ delay: 0.3 }}
        onClick={closeNavbar}
      >
        <IoClose
          className="text-3xl fill-white hover:fill-primary-1 duration-300"
        />
      </motion.div>
      <div className="flex flex-col w-full h-full items-center justify-evenly">
        {routes.map((route, index) => (
          <motion.span
            className="text-primary-2 text-xl uppercase tracking-widest font-bold flex"
            key={route.path}
            animate={{ opacity: showNavbar ? 1 : 0, y: showNavbar ? 0 : -20 }}
            transition={{ delay: showNavbar ? 0.1 * index + 0.3 : 0, ease:"easeInOut" }}
          >
            <Link to={route.path} className="font-roboto rounded-xl hover:scale-125 hover:bg-secondary-2 hover:text-primary-3 duration-300 hover:-skew-x-2 hover:-skew-y-2 p-2" onClick={closeNavbar} key={route.path}>{route.name}</Link>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Main;
