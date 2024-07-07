import HomeAbout from "./HomeAbout/HomeAbout";
import Lander from "./Lander/Lander";

const Home = () => {
  return (
    <div className="mt-16 p-4 flex w-full min-h-[calc(100vh-4rem)] items-center flex-row">
      <Lander />
      <HomeAbout />
    </div>
  );
};

export default Home;
