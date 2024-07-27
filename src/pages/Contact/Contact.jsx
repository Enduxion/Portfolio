import { contactArr, bgc } from "../../resources/utils";
import Direct from "./Direct/Direct";
import OtherContact from "./OtherContact/OtherContact";

const Contact = () => {
  return (
    <div className="section flex flex-col items-center justify-center gap-2">
      <video
        className="w-full h-screen object-cover select-none absolute left-1/2 -translate-x-1/2 top-0 bgVid -z-10 opacity-40"
        id="bgVid"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgc} type="video/mp4" />
      </video>
      <div className="flex flex-row w-full h-full justify-between items-center gap-16">
        <Direct />
        <OtherContact contacts={contactArr} />
      </div>
    </div>
  );
};

export default Contact;
