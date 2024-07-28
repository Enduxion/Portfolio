import { Link } from "react-router-dom";

const OtherContact = ({ contacts }) => {
  return (
    <div className="gap-8 flex flex-row p-4 w-2/5 flex-wrap items-center justify-center overflow-y-scroll overflow-x-hidden il-rslide">
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
