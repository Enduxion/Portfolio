import { useState } from "react";
import { motion } from "framer-motion";

import twc from "../../../functions/twc.js";

const Navlink = ({ contact, index, showContact }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.span
      className="flex flex-row gap-2 items-center text-xl cursor-pointer p-2 rounded-xl"
      onClick={() => window.open(contact.to, "_blank")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{
        scale: 1.1,
        backgroundColor: twc.theme.colors.secondary[2],
        skewX: -2,
        skewY: -2,
      }}
      animate={{ opacity: showContact ? 1 : 0, y: showContact ? 0 : -20 }}
      transition={{
        y: { delay: showContact ? 0.1 * index + 0.3 : 0 },
        opacity: { delay: showContact ? 0.1 * index + 0.3 : 0 },
        duration: 0.3,
      }}
    >
      <contact.icon fill={isHover ? contact.color : twc.theme.colors.primary[2]} />
      <span
        className="font-roboto lowercase"
        style={{
          color: isHover ? contact.color : twc.theme.colors.primary[2],
        }}
      >
        {contact.name}.com
      </span>
    </motion.span>
  );
};

export default Navlink;
