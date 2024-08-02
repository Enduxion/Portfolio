import { Link } from "react-router-dom";

const OtherContact = ({ contacts }) => {
  return (
    <div className="lg:gap-8 sm:gap-2 flex flex-row lg:p-4 sm:p-0 lg:w-2/5 sm:w-full flex-wrap items-center justify-center lg:overflow-y-scroll sm:overflow-y-hidden overflow-x-hidden il-rslide">
      <span className="text-primary-1 font-bold text-lg il-rslide w-full text-center">
        Contact me via other platforms
      </span>
      {contacts.map((contact, index) => (
        <Link
          to={contact.link}
          target="_blank"
          key={index}
          className="il-rslide button"
        >
          <i className={`${contact.icon} text-inherit`}></i>
          {contact.name}
        </Link>
      ))}
    </div>
  );
};

export default OtherContact;
