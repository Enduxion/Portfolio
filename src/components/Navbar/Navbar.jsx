import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import Main from "./main/Main";

const Navbar = ({ routes }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div>
      <Main routes={routes} showNavbar={showNavbar} closeNavbar={() => setShowNavbar(false)} />
      <IoReorderThree onClick={() => setShowNavbar(() => setShowNavbar(true))} className="stroke-white fill-white text-5xl" />
    </div>
  );
};

export default Navbar;
