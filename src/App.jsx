import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const routes = [
    {
      name: "home",
      path: "/",
      element: Home,
      desc: "the main page",
    },
    {
      name: "about",
      path: "/about",
      element: About,
      desc: "a little about me",
    },
    {
      name: "projects",
      path: "/projects",
      element: Home,
      desc: "some of my projects",
    },
    {
      name: "contact",
      path: "/contact",
      element: Home,
      desc: "get in touch with me",
    },
  ];
  const location = useLocation();
  return (
    <>
      <Navbar routes={routes} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => (
            <Route
              index={route.path === "/"}
              path={route.path}
              element={<route.element routes={routes} />}
              key={route.path}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
