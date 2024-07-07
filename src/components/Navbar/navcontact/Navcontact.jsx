import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import Navlink from "../navlink/Navlink";

const Navcontact = ({ showContact, closeContact }) => {
  const contacts = [
    {
      name: "Github",
      color: "#2b3137",
      to: "https://www.github.com/enduxion",
      icon: FaGithub
    },
    {
      name: "Facebook",
      color: "#316FF6",
      to: "https://www.facebook.com/enduxion",
      icon: FaFacebook
    },
    {
      name: "Instagram",
      color: "#d62976",
      to: "https://www.instagram.com/enduxion",
      icon: FaInstagram
    },
    {
      name: "gmail",
      color: "#eee",
      to: "mailto:pg.pawangurung@gmail.com",
      icon: FaEnvelope
    },
    {
      name: "LinkedIn",
      color: "#0077B5", 
      to: "https://www.linkedin.com/in/pawan-gurung",
      icon: FaLinkedinIn
    }
  ];

  return (
    <motion.div
    className="w-1/5 max-h-screen h-screen bg-primary-1 p-2 fixed top-0 right-0 flex flex-col z-50"
    initial={{ x: "100%", borderRadius: "100%" }}
    animate={{
      x: showContact ? 0 : "100%",
      borderRadius: showContact ? 0 : "100%"
    }}
    transition={{ ease: "easeInOut", duration: 0.3 }}
  >
    <motion.div 
      className="cursor-pointer bg-secondary-2 rounded h-fit self-end"
      animate={{ opacity: showContact ? 1 : 0, y: showContact ? 0 : -20 }}
      transition={{ delay: showContact ? 0.3 : 0 }}
      onClick={closeContact}
    >
      <IoClose
        className="text-3xl fill-white"
      />
    </motion.div>
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      {contacts.map((contact, index) => (
        <Navlink contact={contact} index={index} key={index} showContact={showContact} />
      ))}
    </div>
  </motion.div>
  );
}

export default Navcontact;