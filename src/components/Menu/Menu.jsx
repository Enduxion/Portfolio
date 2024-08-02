import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Menu = ({ routes, setOpenMenu }) => {
  const new_routes = [...routes, {
    name: "Github",
    to: "https://github.com/Enduxion",
  }, {
    name: "CV",
    to: "/cv.pdf",
  }]
  return (
    <motion.div
      className="fixed top-0 right-0 flex flex-col w-full h-screen bg-primary-2 bg-opacity-70 tracking-widest p-4 overflow-hidden z-50"
      initial={{ borderRadius: "50%", x: "100%" }}
      animate={{ borderRadius: ["50%", "50%", "25%", 0], x: 0 }}
      exit={{ borderRadius: "50%", x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full flex justify-end">
        <motion.span className="fa fa-close text-lg" onClick={() => setOpenMenu(false)} whileTap={{ y: -10 }} />
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-16 items-center">
        {new_routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            onClick={() => setOpenMenu(false)}
            className="w-fit text-primary-4 hover:text-primary-3 capitalize"
          >
            {route.name}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default Menu;