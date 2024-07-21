import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  const routes = [
    {
      name: "home",
      path: "/",
      element: Home,
      desc: "the main page"
    },
    {
      name: "about",
      path: "/about",
      element: Home,
      desc: "a little about me"
    },
    {
      name: "projects",
      path: "/projects",
      element: Home,
      desc: "some of my projects"
    },
    {
      name: "contact",
      path: "/contact",
      element: Home,
      desc: "get in touch with me"
    },
  ];
  return (
    <>
      <Navbar routes={routes} />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.element routes={routes} />} key={route.path} />
        ))}
      </Routes>
    </>
  );
};

export default App;
