import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Animations = (WrappedComponent) => {
  return ((props) => {
    const tml = gsap.timeline({});
    useGSAP(() => {
      // Animate the video
      tml.from(
        ".bgVid",
        { opacity: 0, duration: 0.6, ease: "circ.inOut" }
      );
      // Animate the text il slide
      tml.fromTo(
        ".il-slide",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3, ease: "circ.inOut", stagger: 0.2 }
      );
      // Animate the text il slide right
      tml.fromTo(
        ".il-rslide",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3, ease: "circ.inOut", stagger: 0.2 }
      );
    }, []);
    return <WrappedComponent {...props} />
  });
};

export default Animations;