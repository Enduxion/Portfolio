import GBCard from "../../../components/GBCard/GBCard";

const HomeAbout = () => {
  const aboutData = [
    {
      title: "2006",
      description:
        "I was born on July 2, 2006 in Pokhara, Nepal. Although, an unnecessary detail, it marked the beginning of my journy not only as a programmer but as an individual.",
    },
    {
      title: "2018",
      description:
        "The real first step of my coding journey. I started coding since the age of 12 with my first language, C++. It's where my programming foundations are built. And over the years, I start creating games in C++ with SFML.",
    },
    {
      title: "2022",
      description:
        "I completed my SEE, grade 10 at the age of 16 with 3.60 GPA and more programming knowledge than ever. At this point, I was developing websites in react.js and still creating games in C++.",
    },
    {
      title: "2024",
      description:
        "I completed my SLC, grade 12 (Science) at the age of 18 and now I am awaiting my results. Currently, I am proefficient in MERN Stack Web Development and many other fields like game development and python (Django and AI/ML).",
    },
    {
      title: "2024",
      description:
        "My first ever piece of work/job is in Coding Technology where I got an internship. Here, I spend quality time working on developing their website as a full stack intern.",
    },
  ];

  return (
    <div className="flex flex-col w-1/2 items-center gap-8 h-[calc(100vh-4rem)]">
      <span className="text-6xl font-roboto">My Timeline</span>
      <div className="w-full flex flex-col items-center overflow-y-scroll hidden-scrollbar gap-4">
        {aboutData.map((datum, index) => (
          <GBCard
            title={datum.title}
            key={index}
            isLastComponent={index + 1 === aboutData.length}
          >
            {datum.description}
          </GBCard>
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
