const Education = () => {
  return (
    <div className="w-full h-1/2 flex flex-col">
      <span className="font-bold text-lg il-slide">Education</span>
      <div className="flex flex-col gap-4 mt-2">
        <span className="flex gap-2 items-center il-slide lg:text-base sm:text-sm text-justify">
          <i className="fa fa-angle-right md:text-sm sm:text-xs"></i>I completed my early education at Pragati Secondary School and graduated from Shree Vindhyavasini Secondary School.
        </span>
        <span className="flex gap-2 items-center il-slide lg:text-base sm:text-sm text-justify">
          <i className="fa fa-angle-right md:text-sm sm:text-xs"></i>I hold a diploma in MERN Stack development, enhancing my primarily self-taught web development skills.
        </span>
        <span className="flex gap-2 items-center il-slide lg:text-base sm:text-sm text-justify">
          <i className="fa fa-angle-right md:text-sm sm:text-xs"></i>I am certified as a Microsoft Office Specialist (MOS), showcasing my proficiency in Microsoft Office applications.
        </span>
      </div>
    </div>
  );
};

export default Education;