const GBCard = ({ title, children, isLastComponent }) => {
  return (
    <div className={`${isLastComponent ? "py-[2px]" : "pt-[2px]"} flex flex-row w-ful bg-gradient-to-r from-transparent via-primary-3 to-transparent`}>
      <div className="bg-primary-2 flex flex-row items-center gap-4 p-4">
        <span className="text-3xl font-roboto text-primary-1">{title}</span>
        <div className="bg-primary-2 text-lg">{children}</div>
      </div>
    </div>
  );
};

export default GBCard;
