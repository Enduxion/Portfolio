import { Link } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <span className="flex flex-col sm:items-center lg:items-start">
      {routes.map((route, idx) => (
        <Link
          key={idx}
          to={route.path}
          className="il-slide gap-1 flex items-baseline text-primary-4 hover:brightness-150 duration-75 transition-[filter_gap] hover:gap-2 w-fit"
        >
          <i className="fas fa-angle-right text-[10px] text-primary-4 lg:block sm:hidden"></i>
          {route.name}
          <span className="comment">- {route.desc}</span>
        </Link>
      ))}
    </span>
  );
};

export default Navigation;
