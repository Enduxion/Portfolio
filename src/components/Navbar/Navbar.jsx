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
    <nav className="p-2 items-center flex w-full h-14 fixed top-0 left-0">
      <Main routes={routes} showNavbar={showNavbar} closeNavbar={() => setShowNavbar(false)} />
      <Navcontact showContact={showContact} closeContact={() => setShowContact(false)} />
      <div className="flex flex-row w-full items-center justify-between">
        {/* Navbar burger */}
        <motion.div
          onClick={() =>{
            setShowNavbar(true);
            setShowContact(false);
          }}
          className="h-fit cursor-pointer bg-gray-800 w-fit rounded p-1 flex items-center justify-center"
          animate={{ opacity: showNavbar ? 0 : 1, y: showNavbar ? -20 : 0 }}
          transition={{ delay: showNavbar ? 0 : 0.3 }}
        >
          <IoMenu className="stroke-primary-3 text-3xl hover:scale-75 duration-300 mouse-affected" />
        </motion.div>
        {/* Logo */}
        <span className="text-2xl select-none">
          <span className="font-roboto text-primary-3 font-bold tracking-wider">pawan</span>
          <span className="font-roboto text-secondary-1">.</span>
        </span>
        {/* Profile Image */}
        <motion.div
          onClick={() => {
            setShowContact(true);
            setShowNavbar(false);
          }}
          className="h-10 overflow-hidden cursor-pointer grayscale"
          whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
        >
          <img src={pfpImage} className="aspect-square h-full object-center rounded-full mouse-affected" />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
