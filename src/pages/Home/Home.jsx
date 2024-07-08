import HomeAbout from "./HomeAbout/HomeAbout";
import Lander from "./Lander/Lander";
import Scrollwheel from "./Scrollwheel/Scrollwheel";
import { motion, useScroll, useTransform} from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className="mt-16 ml-4 flex w-full items-center flex-col">
      <motion.div className="flex flex-row w-full min-h-[calc(100vh-4rem)] items-center fixed z-[5]"
        style={{ opacity }}
      >
        <Lander />
        <Scrollwheel />
      </motion.div>
      <HomeAbout />
    </div>
  );
};

export default Home;
