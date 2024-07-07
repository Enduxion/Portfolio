import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

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
      element: <></>
    },
    {
      name: "experience",
      path: "/experience",
      element: <></>
    },
    {
      name: "blog",
      path: "/blog",
      element: <></>
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
      <SVGControllers />
    </>
  );
};

export default App;
