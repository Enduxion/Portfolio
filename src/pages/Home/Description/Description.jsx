const Description = () => {
  const perks = ["Web developer", "Game developer", "Machine learning engineer"];
  const myName = "Pawan Gurung";
  const myNameArr = myName.split("");
  return (
    <div className="flex flex-col tracking-widest justify-center h-full w-1/2">
      <span className="il-name flex text-3xl font-extrabold drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] cursor-pointer">
        {myNameArr.map((letter, idx) => (
          <span key={idx}
            className={`duration-100 ${letter === " " && "m-1"}`}
            onMouseEnter={(e) => {e.target.style.transform = "translateY(-10px)"}}
            onMouseLeave={(e) => {e.target.style.transform = ""}}
          >{letter}</span>
        ))}
      </span>
      <span className="text-primary-4 flex flex-col">
        {perks.map((perk, idx) => (
          <span key={idx} className="il-perks">
            {perk}
            <br />
          </span>
        ))}
      </span>
    </div>
  );
};

export default Description;