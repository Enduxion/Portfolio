import { Field } from "formik";
import Tooltip from "../../../../components/Tooltip/Tooltip";

const InputField = ({ err, touched, as, name, placeholder }) => {
  let classes =
    "lg:w-3/5 sm:w-full border-b-2 py-1 rounded-sm bg-transparent outline-none hover:border-primary-4 focus:border-primary-3 hover:placeholder:text-primary-1/90 placeholder:text-primary-4 il-slide";

  if (as === "input") classes += " indent-2";
  else classes += " indent-1 resize-none";

  return (
    <div className="flex flex-row items-baseline">
      <Field
        className={classes + ((err && touched) ? " border-primary-6/80" : " border-primary-1/50")}
        name={name}
        as={as}
        placeholder={placeholder}
      />
      {err && touched && (
        <Tooltip
          key={err}
          position={{ x: 1, y: 1 }}
          duration={3000}
          className="text-primary-6 bg-primary-1 mb-2 mr-2 flex flex-col rounded-md"
        >
          <span className="text-inherit font-bold px-4 py-3 flex flex-row gap-2 items-baseline">
            <i className="fa fa-exclamation-triangle text-inherit"></i>
            {err}
          </span>
          <span className="w-full h-1 bg-primary-6 rounded-b-md" />
        </Tooltip>
      )}
    </div>
  );
};
export default InputField;
