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
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-2 text-primary-1 p-4 w-1/2 h-1/2 flex justify-between flex-col border-2 border-primary-4">
        <span className="w-full flex justify-center text-2xl font-roboto">{title}</span>
        <div className="w-full flex justify-center text-primary-4 my-2">{message}</div>
        <div className="flex flex-col">
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
        <span className="button" onClick={() => setPopUp()}>Close</span>
      </div>
    </motion.div>
  );
}

export default Popup;