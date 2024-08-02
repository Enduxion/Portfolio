
import { Link } from "react-router-dom";
import Transition from "../../functions/Transition";
import { visitArr } from "../../resources/utils";
const NotFound = () => {
  const newVisitArr = [...visitArr, {
    name: "Contact",
    to: "/contact"
  }]
  return (
    <div className="section flex items-center justify-center flex-col gap-4">
      <span className="fa fa-exclamation-circle text-primary-6 text-8xl" />
      <div className="flex flex-row gap-4">
        <span className="text-5xl font-roboto">404</span>
        <span className="h-full bg-primary-4 w-[1px]" />
        <span className="flex flex-col">
          <span className="text-primary-6">Page Not Found</span>
          <span className="">Are you lost?</span>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-primary-4 text-xl">Don't worry! Visit other pages</span>
        <span className="w-full h-[1px] bg-primary-4" />
        <div className="flex flex-col items-center">
          {
            newVisitArr.map((visit, index) => (
              <Link to={visit.to} key={index} className="w-fit text-primary-1 hover:text-primary-3 flex gap-1 items-baseline">
                <i className="fas fa-angle-right text-[10px] text-inherit"></i>
                Go to {visit.name} page
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Transition(NotFound);