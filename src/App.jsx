import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Animations from "./functions/Animations";
import Loader from "./functions/Loader";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import ProjectId from "./pages/ProjectId/ProjectId";
import NotFound from "./pages/NotFound/NotFound";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  return (
    <>
      {!isLoaded ? (
        <Loader key="loader" setIsLoaded={setIsLoaded} />
      ) : (
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
              <Route path="/projects/:id" element={<ProjectId />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default App;
