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
          className="il-rslide bg-transparent text-primary-1 px-3 border-2 py-1 rounded-md w-fit flex justify-center items-center gap-2 border-primary-1 hover:bg-primary-1 hover:text-black duration-100"
        >
          <i className={`${contact.icon} text-inherit`}></i>
          {contact.name}
        </Link>
      ))}
    </div>
  );
};

export default OtherContact;
