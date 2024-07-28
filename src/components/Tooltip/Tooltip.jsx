import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Tooltip = ({ position, duration, children, className }) => {
  const [show, setShow] = useState(true);
  const { x = 1, y = 1 } = position;

  const positionToStyle = (val, facing) => {
    if (facing.toLowerCase() === "tb" || facing.toLowerCase() == "bt") {
      if (val === 1) {
        return { bottom: "0%" };
      } else if (val === 0) {
        return { top: "50%", y: "-50%" };
      } else if (val === -1) {
        return { top: "0%" };
      }
      return { bottom: "0%" };
    } else if (facing.toLowerCase() == "lr" || facing.toLowerCase() == "rl") {
      if (val === 1) {
        return { right: "0%" };
      } else if (val === 0) {
        return { left: "50%", x: "-50%" };
      } else if (val === -1) {
        return { left: "0%" };
      }
      return { bottom: "0%" };
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`absolute ${className}`}
          style={{
            ...positionToStyle(x, "lr"),
            ...positionToStyle(y, "tb"),
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;
