import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  const routes = [
    {
      name: "home",
      path: "/",
      element: <Home />,
    },
    {
      name: "about",
      path: "/about",
      element: <></>,
    },
    {
      name: "projects",
      path: "/projects",
      element: <></>,
    },
    {
      name: "contact",
      path: "/contact",
      element: <></>,
    },
  ];
  return (
    <>
      <Navbar routes={routes} />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    </>
  );
};

export default App;
