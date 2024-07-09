import GBCard from "../../../components/GBCard/GBCard";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeAbout = () => {
  const [aboutData, setAboutData] = useState(null);
  useEffect(() => {
    axios
      .get("/data/aboutData.json")
      .then((response) => {
        setAboutData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="section flex mt-[100vh] flex-col w-full items-center gap-8 h-[calc(100vh-4rem)] bg-black z-10 border-t-2 border-t-primary-1">
      <span className="text-6xl font-roboto">My Timeline</span>
      <div className="w-full flex flex-col items-center overflow-y-scroll hidden-scrollbar gap-4">
        {aboutData && aboutData.map((datum, index) => (
          <GBCard
            title={datum.title}
            key={index}
            isLastComponent={index + 1 === aboutData.length}
          >
            {datum.description}
          </GBCard>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
