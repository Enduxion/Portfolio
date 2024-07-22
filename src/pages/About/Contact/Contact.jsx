import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="w-full h-1/3 flex flex-col justify-center items-end">
      <span className="font-bold text-lg">Get in Touch</span>
      <div className="">Have questions? Reach out to me here!</div>
      <Link
        to="/contact"
        className="hover:gap-4 flex flex-row gap-2 items-center duration-100 hover:text-primary-1 text-primary-4"
      >
        Contact me here!{" "}
        <i className="fas fa-arrow-right text-sm text-primary-4"></i>
      </Link>
    </div>
  );
};

export default Contact;
