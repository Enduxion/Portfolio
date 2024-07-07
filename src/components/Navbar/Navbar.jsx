import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Main from "./main/Main";

import pfpImage from "../../assets/images/pfp.png";
import Navcontact from "./navcontact/Navcontact";

const Navbar = ({ routes }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <nav className="p-2 items-center flex">
      <Main routes={routes} showNavbar={showNavbar} closeNavbar={() => setShowNavbar(false)} />
      <Navcontact showContact={showContact} closeContact={() => setShowContact(false)} />
      <div className="flex flex-row w-full items-center justify-between">
        <motion.div
          onClick={() =>{
            setShowNavbar(true);
            setShowContact(false);
          }}
          className="h-fit cursor-pointer bg-gray-800 w-fit rounded p-1 flex items-center justify-center"
          animate={{ opacity: showNavbar ? 0 : 1, y: showNavbar ? -20 : 0 }}
          transition={{ delay: showNavbar ? 0 : 0.3 }}
        >
          <IoMenu className="stroke-white text-3xl hover:stroke-primary-1 duration-300" />
        </motion.div>
        <motion.div
          onClick={() => {
            setShowContact(true);
            setShowNavbar(false);
          }}
          className="h-10 overflow-hidden cursor-pointer grayscale"
          whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
        >
          <img src={pfpImage} className="aspect-square h-full object-center rounded-full" />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
