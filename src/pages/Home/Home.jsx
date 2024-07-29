import { bg } from "../../resources/utils.js";

import Description from "./Description/Description";
import DescriptionR from "./DescriptionR/DescriptionR";
import Transition from "../../functions/Transition";
import { Helmet } from "react-helmet";
import VideoComponent from "../../components/VideoComponent/VIdeoComponent.jsx";

const Home = ({ routes }) => {
  return (
    <div className="py-8 section lg:overflow-hidden flex lg:flex-row sm:flex-col sm:overflow-auto">
      <Helmet>
        <title>Endux | Home</title>
      </Helmet>
      <VideoComponent src={bg} />
      <Description routes={routes} />
      <DescriptionR />
    </div>
  );
};

export default Transition(Home);
