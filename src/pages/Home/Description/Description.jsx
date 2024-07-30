import Social from "./Social/Social.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Intro from "./Intro/Intro.jsx";

const Description = ({ routes }) => {
  const isSmallDevice = window.innerWidth < 768;
  return (
    <div className="flex flex-col gap-8 justify-evenly h-full lg:w-1/2 sm:w-full">
      <Intro />
      <Navigation routes={routes} />
      <div className="sm:hidden lg:flex">
        {/* I don't want to animate the "hidden" section in small devices */}
        <Social animated={!isSmallDevice} />
      </div>
    </div>
  );
};

export default Description;
