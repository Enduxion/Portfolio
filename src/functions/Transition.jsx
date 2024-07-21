import { motion } from "framer-motion";

const Transition = (WrappedComponent) => {
  return (props) => {

    return (
      <>
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black z-40 select-none pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-black z-40 select-none pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default Transition;
