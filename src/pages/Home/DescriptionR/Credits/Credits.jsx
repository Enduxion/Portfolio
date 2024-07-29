import { Link } from "react-router-dom";
const Credits = () => {
  return (
    <span className="lg:il-rslide il-slide flex flex-col lg:items-end sm:items-center text-sm">
      <Link className="text-primary-4 hover:text-primary-3 w-fit font-roboto">
        Pawan Gurung
      </Link>
      <span className="text-primary-5 font-roboto">
        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      </span>
      <Link
        to="/credits"
        className="text-primary-4 hover:brightness-150 font-roboto text-[12px] lg:no-underline sm:underline"
      >
        Credits
      </Link>
    </span>
  );
};

export default Credits;
