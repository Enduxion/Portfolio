const Skills = () => {
  const perks = ["Web developer", "Game developer"];
  return (
    <span className="flex flex-col lg:items-end sm:items-center">
      <span className="lg:il-rslide il-slide flex">
        My Skills
      </span>
      {perks.map((perk, idx) => (
        <span
          key={idx}
          className="lg:il-rslide il-slide text-primary-4 text-sm"
        >
          {perk}
        </span>
      ))}
    </span>
  );
};

export default Skills;
