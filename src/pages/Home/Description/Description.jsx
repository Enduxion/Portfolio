import Social from "./Social/Social.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Intro from "./Intro/Intro.jsx";

const Description = ({ routes }) => {
  return (
    <div className="flex flex-col gap-8 justify-evenly h-full lg:w-1/2 sm:w-full">
      <Intro />
      <Navigation routes={routes} />
      <div className="sm:hidden lg:flex">
        <Social />
      </div>
    </div>
  );
};

export default Description;
