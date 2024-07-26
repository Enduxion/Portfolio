import { bg } from "../../resources/utils.js";

import Description from "./Description/Description";
import DescriptionR from "./DescriptionR/DescriptionR";
import Transition from "../../functions/Transition";
import { Helmet } from "react-helmet";

const Home = ({ routes }) => {
  return (
    <div className="py-8 section overflow-hidden flex flex-row">
      <Helmet>
        <title>Endux | Home</title>
      </Helmet>
      <video
        className="w-full h-screen object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bg} type="video/mp4" />
      </video>
      <Description routes={routes} />
      <DescriptionR />
    </div>
  );
};

export default Transition(Home);
