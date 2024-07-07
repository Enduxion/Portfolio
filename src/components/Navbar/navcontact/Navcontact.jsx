import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
const Navcontact = ({ showContact, closeContact }) => {
  return (
    <motion.div
    className="w-1/5 max-h-screen h-screen bg-primary-1 p-2 fixed top-0 right-0 flex flex-col z-50"
    initial={{ x: "100%" }}
    animate={{
      x: showContact ? 0 : "100%",
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
  </motion.div>
  );
}

export default Navcontact;