import { socialArr } from "../../../../resources/utils";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="flex justify-self-end gap-2 flex-col lg:items-start sm:items-center">
      <span className="il-slide">Social media links</span>
      <span className="flex lg:flex-row sm:gap-2 lg:gap-4 sm:flex-col sm:items-center">
        {socialArr.map((social, idx) => (
          <Link
            target="_blank"
            key={idx}
            to={social.link}
            className="il-slide flex gap-2 text-primary-4 w-fit items-center hover:brightness-150 duration-75 transition-[filter]"
          >
            <i className={social.icon + " text-primary-4"}></i>
            {social.name}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Social;