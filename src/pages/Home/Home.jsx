import { useGSAP } from "@gsap/react";
import bgVid from "../../assets/videos/bg.mp4";
import gsap from "gsap";
import Description from "./Description/Description";
import twc from "../../functions/twc.js";

const Home = () => {
  const tml = gsap.timeline({});
  useGSAP(() => {
    // Animate the video
    tml.from(
      ".bgVid",
      { opacity: 0, delay: 0.3, duration: 0.6, ease: "circ.inOut" }
    );
    // Animate the text inside of Description
    tml.fromTo(
      ".il-name",
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.3, ease: "circ.inOut" }
    );
    tml.fromTo(
      ".il-perks",
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.3, ease: "circ.inOut", stagger: 0.2 }
    );
    tml.from(
      ".il-perks",
      { color: twc.colors.gold, duration: 0.5, stagger: 0.1 }
    )
  }, []);
  return (
    <div className="mt-nav section relative flex flex-row h-anav">
      <video
        className="w-1/2 h-full object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>
      <Description />
    </div>
  );
};

export default Home;
