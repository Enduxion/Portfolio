import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Animations from "./functions/Animations";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const routes = [
  {
    name: "home",
    path: "/",
    element: Animations(Home),
    desc: "the main page",
  },
  {
    name: "about",
    path: "/about",
    element: Animations(About),
    desc: "a little about me",
  },
  {
    name: "projects",
    path: "/projects",
    element: Animations(Projects),
    desc: "some of my projects",
  },
  {
    name: "contact",
    path: "/contact",
    element: Animations(Contact),
    desc: "get in touch with me",
  },
];

const App = () => {
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
