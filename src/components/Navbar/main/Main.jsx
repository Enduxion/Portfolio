import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

const Main = ({ showNavbar, closeNavbar }) => {
  return (
    <motion.div
      className="w-full max-h-screen h-screen bg-primary-1 fixed flex flex-row p-2"
      initial={{ x: "-100%", borderRadius: "100%" }}
      animate={{
        x: showNavbar ? 0 : "-100%",
        borderRadius: showNavbar ? 0 : "100%",
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <GrClose
        className="text-3xl stroke-[url(#grad-1)] cursor-pointer hover:stroke-[url(#grad-2)] duration-100"
        onClick={closeNavbar}
      />
    </motion.div>
  );
};

export default Main;
