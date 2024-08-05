import VideoComponent from "../../components/VideoComponent/VIdeoComponent";
import { contactArr, bgc } from "../../resources/utils";
import Direct from "./Direct/Direct";
import OtherContact from "./OtherContact/OtherContact";

const Contact = () => {
  return (
    <div className="lg:section sm:px-4 sm:mt-nav lg:h-anav sm:h-auto tracking-widest sm:w-full flex flex-col items-center justify-center gap-2 lg:py-0 sm:py-8">
      <VideoComponent src={bgc} />
      <div className="flex lg:flex-row sm:flex-col w-full h-full lg:justify-between sm:justify-start items-center gap-16">
        <Direct />
        <OtherContact contacts={contactArr} />
      </div>
    </div>
  );
};

export default Contact;
