import { Link } from "react-router-dom";
import { contactArr, bgc } from "../../resources/utils";
import Direct from "./Direct/Direct";

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
      <div className="flex flex-row item-center w-full h-full gap-8">
        <Direct />
        
        <div className="flex flex-col w-1/2 h-full py-8 items-end">
          <div className="mt-2 gap-8 flex flex-col border-[1px] border-primary-4/50 p-4 w-5/6 backdrop-blur-md bg-gradient-to-bl from-primary-4/10 to-transparent h-1/2 flex-wrap items-center justify-center">
            {contactArr.map((contact, index) => (
              <Link
                to={contact.link}
                target="_blank"
                key={index}
                className="bg-primary-2 text-primary-1 px-3 border-2 py-1 rounded-md w-1/3 flex justify-center items-center gap-2 border-primary-1"
              >
                <i className={`${contact.icon}`}></i>
                {contact.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
