import { motion } from "framer-motion";
import { visitArr } from "../../../resources/utils";
import { Link } from "react-router-dom";

const Popup = ({ message, title, setPopUp }) => {

  return (
    <motion.div
      className="absolute top-0 left-0 w-screen h-screen z-10 bg-primary-2 bg-opacity-85"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 text-primary-1 p-4 lg:w-1/2 sm:w-5/6 lg:h-1/2 sm:h-3/5 flex justify-between flex-col border-2 border-primary-4">
        <span className="w-full flex justify-center lg:text-left sm:text-center text-2xl font-roboto">{title}</span>
        <div className="w-full flex justify-center lg:text-left sm:text-center text-primary-4 my-2">{message}</div>
        <div className="flex flex-col lg:items-start sm:items-center">
          <span className="">Till then, visit other pages</span>
          {
            visitArr.map((visit, index) => (
              <Link to={visit.to} key={index} className="w-fit text-primary-4 hover:text-primary-3 flex gap-1 items-baseline">
                <i className="fas fa-angle-right text-[10px] text-inherit"></i>
                {visit.name}
              </Link>
            ))
          }
        </div>
        <span className="button sm:self-center lg:self-start" onClick={() => setPopUp(false)}>Close</span>
      </div>
    </motion.div>
  );
}

export default Popup;